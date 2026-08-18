import { Router } from 'express';
import { PrismaClient, LanguageCode, ExecutionEventType, ActivityEventType, Prisma } from '@prisma/client';
import { Judge0Service, JUDGE0_LANGUAGE_MAP } from '../services/Judge0Service';

const router = Router();
const prisma = new PrismaClient();

// Local interface for AttemptQuestionSnapshot with the Json testCases field
interface SnapshotRow {
  id: string;
  attemptId: string;
  questionId: string;
  orderIndex: number;
  testCases: Prisma.JsonValue | null;
}

// Mock authentication for scaffold
const getStudentId = async () => {
  let user = await prisma.user.findFirst({ where: { role: 'STUDENT' } });
  if (!user) {
    user = await prisma.user.create({
      data: { email: 'student@test.com', name: 'Test Student', role: 'STUDENT' }
    });
  }
  return user.id;
};

// Middleware to validate attempt and question
const validateAttemptAndQuestion = async (req: any, res: any, next: any) => {
  const { attemptId, questionId } = req.params;
  
  try {
    const studentId = await getStudentId();

    const attempt = await prisma.assessmentAttempt.findUnique({
      where: { id: attemptId },
      include: { snapshots: true }
    });

    if (!attempt) {
      res.status(404).json({ error: "Attempt not found" });
      return;
    }

    if (attempt.userId !== studentId) {
      res.status(403).json({ error: "Forbidden: Not your attempt" });
      return;
    }

    if (attempt.status !== 'IN_PROGRESS') {
      res.status(400).json({ error: "Attempt is not in progress" });
      return;
    }

    if (new Date() > attempt.deadlineAt) {
      // Auto-expire
      await prisma.assessmentAttempt.update({
        where: { id: attemptId },
        data: { status: 'EXPIRED' }
      });
      res.status(400).json({ error: "Attempt has expired" });
      return;
    }

    const hasQuestion = attempt.snapshots.some(s => s.questionId === questionId);
    if (!hasQuestion) {
      res.status(403).json({ error: "Question is not part of this attempt" });
      return;
    }

    req.attempt = attempt;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Validation error" });
  }
};

// GET contextual question
router.get('/:attemptId/questions/:questionId', validateAttemptAndQuestion, async (req: any, res: any) => {
  const { attemptId, questionId } = req.params;
  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      select: {
        id: true,
        title: true,
        content: true,
        difficulty: true,
        timeLimitSeconds: true,
        memoryLimitKb: true,
        tags: true,
        languages: {
          select: { languageCode: true } // Exclude referenceSolution
        }
      }
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    // Log the OPENED_QUESTION activity if not already logged recently
    await prisma.attemptActivity.create({
      data: {
        attemptId,
        questionId,
        eventType: 'OPENED_QUESTION'
      }
    });

    // Fetch snapshot to get the sample test cases
    const snapshot = await prisma.attemptQuestionSnapshot.findUnique({
      where: { attemptId_questionId: { attemptId, questionId } }
    }) as unknown as SnapshotRow | null;
    
    let sampleTestCases: any[] = [];
    if (snapshot && snapshot.testCases) {
      sampleTestCases = (snapshot.testCases as any[]).filter(tc => !tc.isHidden).map(tc => ({
        input: tc.input,
        expectedOutput: tc.expectedOutput
      }));
    }

    res.json({
      ...question,
      sampleTestCases
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

// POST run
router.post('/:attemptId/questions/:questionId/run', validateAttemptAndQuestion, async (req: any, res: any) => {
  const { attemptId, questionId } = req.params;
  const { sourceCode, language, stdin } = req.body;
  
  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: { languages: true }
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    const langSupport = question.languages.find(l => l.languageCode === language);
    if (!langSupport) {
      res.status(400).json({ error: "Language not supported for this question" });
      return;
    }

    const judge0LangId = JUDGE0_LANGUAGE_MAP[language as LanguageCode];
    if (!judge0LangId) {
      res.status(400).json({ error: "Unsupported language" });
      return;
    }

    const snapshot = await prisma.attemptQuestionSnapshot.findUnique({
      where: { attemptId_questionId: { attemptId, questionId } }
    }) as unknown as SnapshotRow | null;

    let payloads = [];
    let isCustom = false;
    let sampleTestCases: any[] = [];

    if (stdin && stdin.trim() !== "") {
      isCustom = true;
      payloads = [{
        source_code: sourceCode,
        language_id: judge0LangId,
        stdin: stdin,
        cpu_time_limit: question.timeLimitSeconds,
        memory_limit: question.memoryLimitKb
      }];
    } else {
      if (snapshot && snapshot.testCases) {
        sampleTestCases = (snapshot.testCases as any[]).filter(tc => !tc.isHidden);
      }
      payloads = sampleTestCases.map(tc => ({
        source_code: sourceCode,
        language_id: judge0LangId,
        stdin: tc.input || "",
        cpu_time_limit: question.timeLimitSeconds,
        memory_limit: question.memoryLimitKb
      }));
    }

    if (payloads.length === 0) {
      // Fallback if no sample test cases exist and no custom input
      payloads = [{
        source_code: sourceCode,
        language_id: judge0LangId,
        stdin: "",
        cpu_time_limit: question.timeLimitSeconds,
        memory_limit: question.memoryLimitKb
      }];
    }

    const batchResults = await Judge0Service.submitBatch(payloads);

    const safeResults = batchResults.map((r, idx) => {
      let expected: string | null = null;
      let inputStr = isCustom ? stdin : (sampleTestCases[idx]?.input || null);
      if (!isCustom && sampleTestCases[idx]) {
        expected = sampleTestCases[idx].expectedOutput;
      }

      // Compare output vs expected (trim whitespace/CRLF) so local fallback
      // doesn't report wrong answers as passed just because exit code was 0.
      const actualOut = (r.stdout ?? "").replace(/\r/g, "").trim();
      const expectedOut = (expected ?? "").replace(/\r/g, "").trim();
      const outputMatches = expected === null || actualOut === expectedOut;
      const passed = r.status?.id === 3 && outputMatches;
      const status = passed ? r.status : (r.status?.id === 3 ? { id: 4, description: "Wrong Answer" } : r.status);

      return {
        status,
        passed,
        time: r.time,
        memory: r.memory,
        compile_output: r.compile_output,
        stdout: r.stdout,
        stderr: r.stderr,
        message: r.message,
        input: inputStr,
        expected: expected,
        isHidden: false
      };
    });

    await prisma.executionLog.create({
      data: {
        attemptId,
        questionId,
        eventType: ExecutionEventType.RUN,
        languageCode: language as LanguageCode,
        status: batchResults[0]?.status?.description || "Unknown",
        runtimeMs: batchResults[0]?.time ? Math.round(parseFloat(batchResults[0].time) * 1000) : null,
        memoryKb: batchResults[0]?.memory
      }
    });

    // Return the formatted result array to UI
    res.json({
      isCustom,
      results: safeResults
    });
  } catch (error) {
    console.error("Run Error:", error);
    res.status(500).json({ error: "Execution failed" });
  }
});

// POST submit
router.post('/:attemptId/questions/:questionId/submit', validateAttemptAndQuestion, async (req: any, res: any) => {
  const { attemptId, questionId } = req.params;
  const { sourceCode, language } = req.body;
  
  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: { testCases: true, languages: true }
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    const langSupport = question.languages.find(l => l.languageCode === language);
    if (!langSupport) {
      res.status(400).json({ error: "Language not supported for this question" });
      return;
    }

    const judge0LangId = JUDGE0_LANGUAGE_MAP[language as LanguageCode];
    if (!judge0LangId) {
      res.status(400).json({ error: "Unsupported language" });
      return;
    }

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

    let passedCount = 0;
    let maxRuntime = 0;
    let maxMemory = 0;
    let firstFailedStatus = "Accepted";

    for (let i = 0; i < batchResults.length; i++) {
      const r = batchResults[i];
      const tc = testCases[i];
      // Compare output vs expected (trim CRLF/whitespace) — local fallback returns
      // exit 0 regardless of correctness, so we must verify the actual output.
      const actualOut = (r.stdout ?? "").replace(/\r/g, "").trim();
      const expectedOut = (tc.expectedOutput ?? "").replace(/\r/g, "").trim();
      const outputMatches = r.stderr == null && r.compile_output == null && actualOut === expectedOut;
      const reallyPassed = r.status?.id === 3 && outputMatches;

      if (reallyPassed) {
        passedCount++;
      } else if (firstFailedStatus === "Accepted") {
        firstFailedStatus = outputMatches ? r.status.description : "Wrong Answer";
      }

      const timeMs = r.time ? Math.round(parseFloat(r.time) * 1000) : 0;
      if (timeMs > maxRuntime) maxRuntime = timeMs;
      if (r.memory && r.memory > maxMemory) maxMemory = r.memory;
    }

    const totalWeight = testCases.reduce((sum, tc) => sum + tc.weight, 0);
    const score = passedCount === testCases.length ? 1.0 : (passedCount / testCases.length);

    const submission = await prisma.submission.create({
      data: {
        attemptId,
        questionId,
        sourceCode,
        languageCode: language as LanguageCode,
        verdict: firstFailedStatus,
        score,
        runtimeMs: maxRuntime || null,
        memoryKb: maxMemory || null
      }
    });

    // Mask hidden test cases from the response
    const safeResults = batchResults.map((r, idx) => {
      const tc = testCases[idx];
      // Same output comparison as above — applied per-result for the UI
      const actualOut = (r.stdout ?? "").replace(/\r/g, "").trim();
      const expectedOut = (tc.expectedOutput ?? "").replace(/\r/g, "").trim();
      const outputMatches = r.stderr == null && r.compile_output == null && actualOut === expectedOut;
      const passed = r.status?.id === 3 && outputMatches;
      const status = passed ? r.status : (r.status?.id === 3 ? { id: 4, description: "Wrong Answer" } : r.status);
      return {
        status,
        passed,
        time: r.time,
        memory: r.memory,
        compile_output: r.compile_output,
        stdout: tc.isHidden ? null : r.stdout,
        stderr: tc.isHidden ? null : r.stderr,
        message: tc.isHidden ? null : r.message,
        input: tc.isHidden ? null : tc.input,
        expected: tc.isHidden ? null : tc.expectedOutput,
        isHidden: tc.isHidden
      };
    });

    res.json({ submission, results: safeResults });
  } catch (error) {
    console.error("Submit Error:", error);
    res.status(500).json({ error: "Submission failed" });
  }
});

export default router;
