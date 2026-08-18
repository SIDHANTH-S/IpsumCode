import { PrismaClient, Difficulty, LanguageCode, DeliveryMode, AssessmentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create a Classroom
  const classroom = await prisma.classroom.create({
    data: {
      name: 'CSE - A',
      year: 'III Year'
    }
  });

  // 2. Create a User
  const student = await prisma.user.upsert({
    where: { email: 'student@test.com' },
    update: {},
    create: {
      email: 'student@test.com',
      name: 'Test Student',
      role: 'STUDENT',
      classroomId: classroom.id,
    }
  });

  // 3. Create a Question
  const question = await prisma.question.create({
    data: {
      title: 'Two Sum',
      content: `# Problem Description
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

# Input Format
First line contains space separated integers representing \`nums\`.
Second line contains an integer representing \`target\`.

# Output Format
Space separated indices of the two numbers.`,
      difficulty: Difficulty.EASY,
      timeLimitSeconds: 2.0,
      memoryLimitKb: 128000,
      tags: ['Array', 'Hash Table'],
      status: 'PUBLISHED',
      languages: {
        create: [
          { languageCode: LanguageCode.PYTHON },
          { languageCode: LanguageCode.JAVA },
          { languageCode: LanguageCode.JS },
          { languageCode: LanguageCode.C },
          { languageCode: LanguageCode.CPP },
        ]
      },
      testCases: {
        create: [
          { orderIndex: 1, input: '2 7 11 15\n9', expectedOutput: '0 1', isHidden: false, weight: 10 },
          { orderIndex: 2, input: '3 2 4\n6', expectedOutput: '1 2', isHidden: true, weight: 10 },
          { orderIndex: 3, input: '3 3\n6', expectedOutput: '0 1', isHidden: true, weight: 10 },
        ]
      }
    }
  });

  // 4. Create an Assessment
  const assessment = await prisma.assessment.create({
    data: {
      title: 'Python Programming Test',
      status: AssessmentStatus.LIVE,
      isPublic: true,
      availabilityStart: new Date(Date.now() - 1000 * 60 * 60 * 24), // yesterday
      availabilityEnd: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // next week
      durationMinutes: 60,
      deliveryMode: DeliveryMode.SAME_ORDER,
      questionsPerStudent: 1,
      classrooms: {
        create: {
          classroomId: classroom.id
        }
      },
      questions: {
        create: {
          questionId: question.id,
          orderIndex: 1
        }
      }
    }
  });

  console.log("Database seeded successfully!");
  console.log(`Student ID: ${student.id}`);
  console.log(`Assessment ID: ${assessment.id}`);
  console.log(`Question ID: ${question.id}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
