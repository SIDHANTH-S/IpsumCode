import { Router } from 'express';
import { PrismaClient, AssessmentStatus, DeliveryMode, AttemptStatus } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// In a real app we'd verify auth here, but this is a scaffold.
// We'll mock a default student user for now.
const getStudentId = async () => {
  let user = await prisma.user.findFirst({ where: { role: 'STUDENT' } });
  if (!user) {
    user = await prisma.user.create({
      data: { email: 'student@test.com', name: 'Test Student', role: 'STUDENT' }
    });
  }
  return user.id;
};

router.get('/assessments/available', async (req, res) => {
  try {
    const assessments = await prisma.assessment.findMany({
      where: {
        status: { in: [AssessmentStatus.SCHEDULED, AssessmentStatus.LIVE] }
      },
      select: {
        id: true,
        title: true,
        status: true,
        availabilityStart: true,
        availabilityEnd: true,
        durationMinutes: true,
      }
    });
    res.json(assessments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch assessments" });
  }
});

router.post('/assessments/:id/start', async (req, res) => {
  const { id } = req.params;
  try {
    const studentId = await getStudentId();
    
    // 1. Fetch Assessment
    const assessment = await prisma.assessment.findUnique({
      where: { id },
      include: { 
        questions: { 
          orderBy: { orderIndex: 'asc' },
          include: { question: { include: { testCases: true } } }
        } 
      }
    });

    if (!assessment) {
      res.status(404).json({ error: "Assessment not found" });
      return;
    }
    
    if (assessment.status !== 'LIVE' && assessment.status !== 'SCHEDULED') { // For dev, allow scheduled
      res.status(400).json({ error: "Assessment is not active" });
      return;
    }

    // 2. Check for existing attempt
    const existingAttempt = await prisma.assessmentAttempt.findUnique({
      where: { userId_assessmentId: { userId: studentId, assessmentId: id } },
      include: { snapshots: { orderBy: { orderIndex: 'asc' } } }
    });

    if (existingAttempt) {
      if (existingAttempt.status === 'IN_PROGRESS') {
        // Idempotent: return existing attempt context
        res.json({
          attemptId: existingAttempt.id,
          deadlineAt: existingAttempt.deadlineAt,
          snapshots: existingAttempt.snapshots.map(s => ({ questionId: s.questionId, orderIndex: s.orderIndex }))
        });
        return;
      } else {
        res.status(400).json({ error: "Assessment already completed or expired" });
        return;
      }
    }

    // 3. Create new attempt
    const startedAt = new Date();
    const durationMs = assessment.durationMinutes * 60 * 1000;
    const deadlineAt = new Date(Math.min(startedAt.getTime() + durationMs, assessment.availabilityEnd.getTime()));

    // Generate snapshots based on delivery mode
    let questionsToDeliver = assessment.questions;
    if (assessment.deliveryMode === 'RANDOM' || assessment.deliveryMode === 'SMART_SHUFFLE') {
      // Very naive random for now
      questionsToDeliver = [...questionsToDeliver].sort(() => 0.5 - Math.random());
    }
    
    // Truncate to questionsPerStudent if needed
    if (assessment.questionsPerStudent < questionsToDeliver.length) {
       questionsToDeliver = questionsToDeliver.slice(0, assessment.questionsPerStudent);
    }

    const attempt = await prisma.$transaction(async (tx) => {
      const newAttempt = await tx.assessmentAttempt.create({
        data: {
          userId: studentId,
          assessmentId: id,
          status: AttemptStatus.IN_PROGRESS,
          startedAt,
          deadlineAt,
        }
      });

      const snapshots = await Promise.all(questionsToDeliver.map((aq, idx) => {
        // Map Prisma TestCases into simple JSON objects to store in the snapshot
        const snapshotTestCases = aq.question.testCases.map(tc => ({
          input: tc.input,
          expectedOutput: tc.expectedOutput,
          isHidden: tc.isHidden,
          weight: tc.weight,
          orderIndex: tc.orderIndex
        }));

        return tx.attemptQuestionSnapshot.create({
          data: {
            attemptId: newAttempt.id,
            questionId: aq.questionId,
            orderIndex: idx,
            testCases: snapshotTestCases as any
          }
        });
      }));

      await tx.attemptActivity.create({
        data: {
          attemptId: newAttempt.id,
          eventType: 'STARTED'
        }
      });

      return { newAttempt, snapshots };
    });

    res.json({
      attemptId: attempt.newAttempt.id,
      deadlineAt: attempt.newAttempt.deadlineAt,
      snapshots: attempt.snapshots.map(s => ({ questionId: s.questionId, orderIndex: s.orderIndex }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to start assessment" });
  }
});

export default router;
