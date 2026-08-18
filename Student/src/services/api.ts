const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export const api = {
  getAvailableAssessments: async () => {
    const res = await fetch(`${API_BASE}/student/assessments/available`);
    if (!res.ok) throw new Error("Failed to fetch assessments");
    return res.json();
  },

  startAssessment: async (assessmentId: string) => {
    const res = await fetch(`${API_BASE}/student/assessments/${assessmentId}/start`, {
      method: 'POST'
    });
    if (!res.ok) throw new Error("Failed to start assessment");
    return res.json();
  },

  getQuestion: async (attemptId: string, questionId: string) => {
    const res = await fetch(`${API_BASE}/attempts/${attemptId}/questions/${questionId}`);
    if (!res.ok) throw new Error("Failed to fetch question");
    return res.json();
  },

  runCode: async (attemptId: string, questionId: string, payload: { language: string, sourceCode: string }) => {
    const res = await fetch(`${API_BASE}/attempts/${attemptId}/questions/${questionId}/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: payload.language, sourceCode: payload.sourceCode })
    });
    if (!res.ok) throw new Error("Run failed");
    return res.json();
  },

  submitCode: async (attemptId: string, questionId: string, payload: { language: string, sourceCode: string }) => {
    const res = await fetch(`${API_BASE}/attempts/${attemptId}/questions/${questionId}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Submit failed");
    return res.json();
  }
};
