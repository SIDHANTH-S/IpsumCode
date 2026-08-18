const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  await prisma.assessmentAttempt.deleteMany({});
  console.log('Cleared attempts');
}
run().catch(console.error).finally(() => prisma.$disconnect());
