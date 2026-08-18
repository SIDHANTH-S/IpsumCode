import { Router } from 'express';
import { PrismaClient, Difficulty, QuestionStatus, AssessmentStatus, DeliveryMode, LanguageCode } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// ---------------------------------------------
// CLASSROOMS
// ---------------------------------------------
router.get('/classrooms', async (req, res) => {
  try {
    const classrooms = await prisma.classroom.findMany({
      include: {
        _count: {
          select: { students: true }
        }
      }
    });

    const mapped = classrooms.map(c => ({
      id: c.id,
      name: c.name,
      year: c.year || "N/A",
      students: c._count.students,
      section: c.name.split('-')[1] || c.name,
      academicYear: "2025-26",
      color: "#7c6cf5",
      status: "active"
    }));

    res.json(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch classrooms" });
  }
});

router.get('/classrooms/:id/students', async (req, res) => {
  try {
    const { id } = req.params;
    const students = await prisma.user.findMany({
      where: { classroomId: id, role: 'STUDENT' },
      include: {
        attempts: {
          include: { submissions: true }
        }
      }
    });

    const mapped = students.map(s => {
      const allSubmissions = s.attempts.flatMap(a => a.submissions);
      const passed = allSubmissions.filter(sub => sub.score === 1.0).length;
      return {
        id: s.id,
        name: s.name,
        email: s.email,
        solved: passed,
        score: passed > 0 ? "85%" : "0%",
        classroomId: s.classroomId || ""
      };
    });

    res.json(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// ---------------------------------------------
// QUESTIONS
// ---------------------------------------------
router.get('/questions', async (req, res) => {
  try {
    const questions = await prisma.question.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        submissions: true
      }
    });

    const mapped = questions.map((q, i) => {
      const total = q.submissions.length;
      const passed = q.submissions.filter(s => s.score === 1.0).length;
      const acceptance = total > 0 ? Math.round((passed / total) * 100) + "%" : "-";

      return {
        id: q.id,
        num: questions.length - i,
        title: q.title,
        acceptance,
        difficulty: q.difficulty === 'MEDIUM' ? 'Med.' : q.difficulty === 'HARD' ? 'Hard' : 'Easy',
        tags: q.tags,
        solved: passed > 0
      };
    });

    res.json(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

router.get('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const question = await prisma.question.findUnique({
      where: { id },
      include: {
        testCases: { orderBy: { orderIndex: 'asc' } },
        languages: true
      }
    });
    if (!question) return res.status(404).json({ error: "Not found" });
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

router.post('/questions', async (req, res) => {
  try {
    const { title, content, difficulty, timeLimitSeconds, memoryLimitKb, tags, testCases, languages } = req.body;

    const diffMap: Record<string, Difficulty> = { "Easy": "EASY", "Med.": "MEDIUM", "Hard": "HARD", "EASY": "EASY", "MEDIUM": "MEDIUM", "HARD": "HARD" };

    const newQuestion = await prisma.question.create({
      data: {
        title,
        content,
        difficulty: diffMap[difficulty] || "EASY",
        timeLimitSeconds: timeLimitSeconds || 2.0,
        memoryLimitKb: memoryLimitKb || 128000,
        tags: tags || [],
        status: "PUBLISHED",
        testCases: {
          create: testCases.map((tc: any, i: number) => ({
            orderIndex: i + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            isHidden: tc.isHidden || false,
            weight: tc.weight || 1
          }))
        },
        languages: {
          create: Array.from(new Set<string>(languages)).map((l: string) => {
            const up = l.toUpperCase();
            let code: LanguageCode = "PYTHON";
            if (up === "C++" || up === "CPP") code = "CPP";
            else if (up === "C") code = "C";
            else if (up === "JAVA") code = "JAVA";
            else if (up === "JAVASCRIPT" || up === "JS") code = "JS";
            else if (up === "PYTHON") code = "PYTHON";
            return { languageCode: code };
          })
        }
      }
    });

    res.json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create question" });
  }
});

router.put('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, difficulty, timeLimitSeconds, memoryLimitKb, tags, testCases, languages } = req.body;

    const diffMap: Record<string, Difficulty> = { "Easy": "EASY", "Med.": "MEDIUM", "Hard": "HARD", "EASY": "EASY", "MEDIUM": "MEDIUM", "HARD": "HARD" };

    await prisma.$transaction([
      prisma.testCase.deleteMany({ where: { questionId: id } }),
      prisma.questionLanguageSupport.deleteMany({ where: { questionId: id } }),
      prisma.question.update({
        where: { id },
        data: {
          title,
          content,
          difficulty: diffMap[difficulty] || "EASY",
          timeLimitSeconds: timeLimitSeconds || 2.0,
          memoryLimitKb: memoryLimitKb || 128000,
          tags: tags || [],
          testCases: {
            create: testCases.map((tc: any, i: number) => ({
              orderIndex: i + 1,
              input: tc.input,
              expectedOutput: tc.expectedOutput,
              isHidden: tc.isHidden || false,
              weight: tc.weight || 1
            }))
          },
          languages: {
            create: Array.from(new Set<string>(languages)).map((l: string) => {
              const up = l.toUpperCase();
              let code: LanguageCode = "PYTHON";
              if (up === "C++" || up === "CPP") code = "CPP";
              else if (up === "C") code = "C";
              else if (up === "JAVA") code = "JAVA";
              else if (up === "JAVASCRIPT" || up === "JS") code = "JS";
              else if (up === "PYTHON") code = "PYTHON";
              return { languageCode: code };
            })
          }
        }
      })
    ]);

    const updatedQuestion = await prisma.question.findUnique({ where: { id } });

    res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update question" });
  }
});

// ---------------------------------------------
// ASSESSMENTS
// ---------------------------------------------
router.get('/assessments', async (req, res) => {
  try {
    const assessments = await prisma.assessment.findMany({
      orderBy: { availabilityStart: 'desc' },
      include: {
        classrooms: { include: { classroom: true } },
        questions: true,
        attempts: true
      }
    });

    const now = new Date();
    
    const mapped = assessments.map(a => {
      const status = now < a.availabilityStart ? 'Upcoming' : now > a.availabilityEnd ? 'Completed' : 'Live';
      
      const totalStudents = a.classrooms.reduce((acc, c) => acc + (c.classroom as any).students?.length || 50, 0); // approx for now
      const participation = `${a.attempts.length} / ${totalStudents > 0 ? totalStudents : 100}`;
      
      return {
        id: a.id,
        title: a.title,
        status,
        tone: "purple",
        day: a.availabilityStart.getDate(),
        classrooms: a.classrooms.map(c => c.classroom.name),
        classroomIds: a.classrooms.map(c => c.classroomId),
        scheduledDate: a.availabilityStart.toLocaleDateString(),
        scheduledTime: a.availabilityStart.toLocaleTimeString(),
        duration: a.durationMinutes * 60,
        questionsPerStudent: a.questionsPerStudent,
        deliveryMode: a.deliveryMode === 'RANDOM' ? 'Random' : a.deliveryMode === 'SMART_SHUFFLE' ? 'Smart Shuffle' : 'Same Order',
        participation,
        score: "85%", // mock
        completion: "90%", // mock
        action: status === 'Completed' ? 'Results' : 'Review'
      };
    });

    res.json(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch assessments" });
  }
});

router.post('/assessments', async (req, res) => {
  try {
    const { title, classroomIds, availabilityStart, availabilityEnd, durationMinutes, deliveryMode, questionsPerStudent, questionIds } = req.body;

    const modeMap: Record<string, DeliveryMode> = { "Random": "RANDOM", "Smart Shuffle": "SMART_SHUFFLE", "Same Order": "SAME_ORDER" };

    const newAssessment = await prisma.assessment.create({
      data: {
        title,
        availabilityStart: new Date(availabilityStart),
        availabilityEnd: new Date(availabilityEnd),
        durationMinutes,
        deliveryMode: modeMap[deliveryMode] || "RANDOM",
        questionsPerStudent,
        status: "SCHEDULED",
        classrooms: {
          create: classroomIds.map((id: string) => ({
            classroomId: id
          }))
        },
        questions: {
          create: questionIds.map((id: string, i: number) => ({
            questionId: id,
            orderIndex: i + 1
          }))
        }
      }
    });

    res.json(newAssessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create assessment" });
  }
});

router.get('/assessments/:id/leaderboard', async (req, res) => {
  try {
    const { id } = req.params;
    const attempts = await prisma.assessmentAttempt.findMany({
      where: { assessmentId: id },
      include: {
        user: { include: { classroom: true } },
        submissions: true
      }
    });

    const ranking = attempts.map(a => {
      // Calculate score based on max score per question
      const questionScores = new Map<string, number>();
      a.submissions.forEach(sub => {
        const current = questionScores.get(sub.questionId) || 0;
        if (sub.score > current) questionScores.set(sub.questionId, sub.score);
      });
      
      let totalScore = 0;
      let solved = 0;
      questionScores.forEach(score => {
        totalScore += score * 100;
        if (score === 1.0) solved++;
      });

      const timeTaken = a.completedAt ? Math.floor((a.completedAt.getTime() - a.startedAt.getTime()) / 1000) : 0;
      const mins = Math.floor(timeTaken / 60);
      const secs = timeTaken % 60;

      return {
        id: a.userId,
        name: a.user.name,
        cls: a.user.classroom?.name || "Unknown",
        score: totalScore,
        solved,
        time: `${mins}m ${secs}s`
      };
    });

    // Sort by score desc, then time asc
    ranking.sort((a, b) => b.score - a.score || a.time.localeCompare(b.time));
    
    // Add rank
    ranking.forEach((r, i) => (r as any).rank = i + 1);

    res.json(ranking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

export default router;
