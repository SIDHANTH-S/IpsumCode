const http = require('http');

const request = (options, postData = null) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });
    req.on('error', reject);
    if (postData) req.write(JSON.stringify(postData));
    req.end();
  });
};

async function testRun() {
  console.log("Starting Python execution test...");
  
  // 1. Get Assessments
  let res = await request({
    hostname: 'localhost',
    port: 3001,
    path: '/api/student/assessments/available',
    method: 'GET'
  });
  const assessmentId = res.data[0].id;

  // 2. Start Assessment
  res = await request({
    hostname: 'localhost',
    port: 3001,
    path: `/api/student/assessments/${assessmentId}/start`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  const attemptId = res.data.attemptId;
  const questionId = res.data.snapshots[0].questionId;
  console.log(`Got Attempt: ${attemptId}, Question: ${questionId}`);

  // 3. Run Code (Python 3)
  const sourceCode = `
import sys

def twoSum(nums, target):
    numMap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in numMap:
            return [numMap[complement], i]
        numMap[num] = i
    return []

# Read stdin
input_data = sys.stdin.read().split()
if not input_data:
    sys.exit(0)
    
nums = [int(x) for x in input_data[:-1]]
target = int(input_data[-1])

result = twoSum(nums, target)
print(f"{result[0]} {result[1]}")
`;

  const stdinData = "2 7 11 15\n9";

  console.log("\nTesting Run Code (Custom Input)...");
  res = await request({
    hostname: 'localhost',
    port: 3001,
    path: `/api/attempts/${attemptId}/questions/${questionId}/run`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    language: "PYTHON",
    sourceCode: sourceCode,
    stdin: stdinData
  });

  console.log("Run Result:");
  console.log(JSON.stringify(res.data, null, 2));

  // 4. Submit Test (Evaluate against hidden cases)
  console.log("\nTesting Submit Test...");
  res = await request({
    hostname: 'localhost',
    port: 3001,
    path: `/api/attempts/${attemptId}/questions/${questionId}/submit`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    language: "PYTHON",
    sourceCode: sourceCode
  });

  console.log("Submit Result:");
  console.log(JSON.stringify(res.data, null, 2));
}

testRun().catch(console.error);
