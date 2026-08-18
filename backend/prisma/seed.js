const { PrismaClient, Difficulty, LanguageCode, DeliveryMode, AssessmentStatus } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Wiping existing data...");

  await prisma.executionLog.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.attemptActivity.deleteMany();
  await prisma.attemptQuestionSnapshot.deleteMany();
  await prisma.assessmentAttempt.deleteMany();
  await prisma.assessmentClassroom.deleteMany();
  await prisma.assessmentQuestion.deleteMany();
  await prisma.assessment.deleteMany();
  await prisma.testCase.deleteMany();
  await prisma.questionLanguageSupport.deleteMany();
  await prisma.question.deleteMany();
  await prisma.user.deleteMany();
  await prisma.classroom.deleteMany();

  console.log("Seeding fresh data...");

  const classroom = await prisma.classroom.create({
    data: { name: "CSE - A", year: "III Year" }
  });

  const student = await prisma.user.create({
    data: {
      email: "student@test.com",
      name: "Test Student",
      role: "STUDENT",
      classroomId: classroom.id,
    }
  });

  const twoSum = await prisma.question.create({
    data: {
      title: "Two Sum",
      content: "# Problem Description\nGiven an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.\n\n# Input Format\nFirst line: space-separated integers representing `nums`.\nSecond line: integer representing `target`.\n\n# Output Format\nSpace-separated indices of the two numbers (0-indexed).\n\n# Example\nInput:\n2 7 11 15\n9\n\nOutput:\n0 1",
      difficulty: Difficulty.EASY,
      timeLimitSeconds: 2.0,
      memoryLimitKb: 128000,
      tags: ["Array", "Hash Table"],
      status: "PUBLISHED",
      languages: {
        create: [
          { languageCode: LanguageCode.PYTHON },
          { languageCode: LanguageCode.JAVA },
          { languageCode: LanguageCode.CPP },
          { languageCode: LanguageCode.C },
          { languageCode: LanguageCode.JS },
        ]
      },
      testCases: {
        create: [
          { orderIndex: 1, input: "2 7 11 15\n9",       expectedOutput: "0 1",  isHidden: false, weight: 10 },
          { orderIndex: 2, input: "3 2 4\n6",            expectedOutput: "1 2",  isHidden: false, weight: 10 },
          { orderIndex: 3, input: "3 3\n6",              expectedOutput: "0 1",  isHidden: true,  weight: 20 },
          { orderIndex: 4, input: "1 5 3 9 2\n7",        expectedOutput: "1 4",  isHidden: true,  weight: 20 },
          { orderIndex: 5, input: "0 4 3 0\n0",          expectedOutput: "0 3",  isHidden: true,  weight: 20 },
          { orderIndex: 6, input: "-1 -2 -3 -4 -5\n-8",  expectedOutput: "2 4",  isHidden: true,  weight: 20 },
        ]
      }
    }
  });

  const now = new Date();
  const availabilityEnd = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);

  const assessment = await prisma.assessment.create({
    data: {
      title: "Data Structures & Algorithms — Aug 2026",
      status: AssessmentStatus.LIVE,
      isPublic: true,
      availabilityStart: now,
      availabilityEnd,
      durationMinutes: 90,
      deliveryMode: DeliveryMode.SAME_ORDER,
      questionsPerStudent: 1,
      classrooms: { create: { classroomId: classroom.id } },
      questions:  { create: { questionId: twoSum.id, orderIndex: 1 } }
    }
  });

  console.log("\n? Seeded successfully!");
  console.log("  Assessment : " + assessment.title);
  console.log("  Starts     : " + now.toLocaleString());
  console.log("  Duration   : 90 min");
  console.log("  Student    : " + student.email);
  console.log("  Question   : " + twoSum.title);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
