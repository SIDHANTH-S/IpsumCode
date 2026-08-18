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

async function run() {
  console.log("1. GET /api/student/assessments/available");
  let res = await request({
    hostname: 'localhost',
    port: 3001,
    path: '/api/student/assessments/available',
    method: 'GET'
  });
  console.log(res.status, res.data);
  
  const assessmentId = res.data[0].id;
  
  console.log("\n2. POST /api/student/assessments/:id/start");
  res = await request({
    hostname: 'localhost',
    port: 3001,
    path: `/api/student/assessments/${assessmentId}/start`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log(res.status, res.data);
  
  const attemptId = res.data.attemptId;
  const questionId = res.data.snapshots[0].questionId;
  
  console.log("\n3. GET /api/attempts/:attemptId/questions/:questionId");
  res = await request({
    hostname: 'localhost',
    port: 3001,
    path: `/api/attempts/${attemptId}/questions/${questionId}`,
    method: 'GET'
  });
  console.log(res.status, JSON.stringify(res.data, null, 2));

  // Also verify hidden test cases are not present
  if (res.data.testCases) {
    console.error("FAIL: Test cases should not be leaked!");
  } else {
    console.log("SUCCESS: No test cases leaked in question response.");
  }
}

run().catch(console.error);
