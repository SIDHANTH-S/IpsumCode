import { Router } from 'express';
import { PrismaClient, LanguageCode, ExecutionEventType, ActivityEventType } from '@prisma/client';
import { Judge0Service, JUDGE0_LANGUAGE_MAP } from '../services/Judge0Service';

const router = Router();
const prisma = new PrismaClient();

// In a real app we'd verify auth here, but this is a scaffold.

router.post('/attempts/:attemptId/questions/:questionId/run', async (req, res) => {
  const { attemptId, questionId } = req.params;
  const { sourceCode, languageCode, customInput } = req.body;
  
  try {
    // 1. Verify Attempt is IN_PROGRESS
    const attempt = await prisma.assessmentAttempt.findUnique({
      where: { id: attemptId }
    });
    
    if (!attempt || attempt.status !== 'IN_PROGRESS') {
      res.status(400).json({ error: "Attempt is not in progress" });
      return;
    }

    // 2. Fetch the question to get the time limits
    const question = await prisma.question.findUnique({
      where: { id: questionId }
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    // 3. Call Judge0
    const judge0LangId = JUDGE0_LANGUAGE_MAP[languageCode as LanguageCode];
    if (!judge0LangId) {
      res.status(400).json({ error: "Unsupported language" });
      return;
    }

    const result = await Judge0Service.execute({
      source_code: sourceCode,
      language_id: judge0LangId,
      stdin: customInput || "",
      cpu_time_limit: question.timeLimitSeconds,
      memory_limit: question.memoryLimitKb
    });

    // 4. Log the execution
    await prisma.executionLog.create({
      data: {
        attemptId,
        questionId,
        eventType: ExecutionEventType.RUN,
        languageCode: languageCode as LanguageCode,
        status: result.status.description,
        runtimeMs: result.time ? Math.round(parseFloat(result.time) * 1000) : null,
        memoryKb: result.memory
      }
    });

    res.json(result);
  } catch (error) {
    console.error("Execution Error:", error);
    res.status(500).json({ error: "Execution failed" });
  }
});


router.post('/attempts/:attemptId/questions/:questionId/submit', async (req, res) => {
  const { attemptId, questionId } = req.params;
  const { sourceCode, languageCode } = req.body;
  
  try {
    const attempt = await prisma.assessmentAttempt.findUnique({
      where: { id: attemptId }
    });
    
    if (!attempt || attempt.status !== 'IN_PROGRESS') {
      res.status(400).json({ error: "Attempt is not in progress" });
      return;
    }

    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: { testCases: true }
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    const judge0LangId = JUDGE0_LANGUAGE_MAP[languageCode as LanguageCode];
    if (!judge0LangId) {
      res.status(400).json({ error: "Unsupported language" });
      return;
    }

    // Build batch payload for all test cases (public and hidden)
    const testCases = question.testCases.sort((a, b) => a.orderIndex - b.orderIndex);
    
    if (testCases.length === 0) {
      res.status(400).json({ error: "No test cases found for this question" });
      return;
    }

    const batchPayloads = testCases.map(tc => ({
      source_code: sourceCode,
      language_id: judge0LangId,
      stdin: tc.input,
      expected_output: tc.expectedOutput,
      cpu_time_limit: question.timeLimitSeconds,
      memory_limit: question.memoryLimitKb
    }));

    const batchResults = await Judge0Service.submitBatch(batchPayloads);

    // Evaluate results
    let passedCount = 0;
    let maxRuntime = 0;
    let maxMemory = 0;
    let firstFailedStatus = "Accepted";

    for (const res of batchResults) {
      if (res.status.id === 3) {
        passedCount++;
      } else if (firstFailedStatus === "Accepted") {
        firstFailedStatus = res.status.description;
      }
      
      const timeMs = res.time ? Math.round(parseFloat(res.time) * 1000) : 0;
      if (timeMs > maxRuntime) maxRuntime = timeMs;
      if (res.memory && res.memory > maxMemory) maxMemory = res.memory;
    }

    const totalWeight = testCases.reduce((sum, tc) => sum + tc.weight, 0);
    const score = passedCount === testCases.length ? 1.0 : (passedCount / testCases.length);

    const submission = await prisma.submission.create({
      data: {
        attemptId,
        questionId,
        sourceCode,
        languageCode: languageCode as LanguageCode,
        verdict: firstFailedStatus,
        score,
        runtimeMs: maxRuntime,
        memoryKb: maxMemory
      }
    });

    res.json({ submission, results: batchResults });
  } catch (error) {
    console.error("Submission Error:", error);
    res.status(500).json({ error: "Submission failed" });
  }
});

export default router;
