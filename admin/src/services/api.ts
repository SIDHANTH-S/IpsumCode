const API_BASE = 'http://localhost:3001/api/admin';

export interface Classroom {
  id: string;
  name: string;
  year: string;
  students: number;
  section: string;
  academicYear: string;
  color: string;
  status: "active" | "archived";
}

export interface Student {
  id: string;
  name: string;
  email: string;
  solved: number;
  score: string;
  classroomId: string;
}

export interface QuestionSummary {
  id: string;
  num: number;
  title: string;
  acceptance: string;
  difficulty: "Easy" | "Med." | "Hard";
  tags: string[];
  solved: boolean;
}

export interface AssessmentSummary {
  id: string;
  title: string;
  status: 'Upcoming' | 'Live' | 'Completed';
  tone: string;
  day: number;
  classrooms: string[];
  classroomIds: string[];
  scheduledDate: string;
  scheduledTime: string;
  duration: number;
  questionsPerStudent: number;
  deliveryMode: "Random" | "Smart Shuffle" | "Same Order";
  participation: string;
  score: string;
  completion: string;
  action: 'Results' | 'Review';
}

export const adminApi = {
  // Classrooms
  getClassrooms: async (): Promise<Classroom[]> => {
    const res = await fetch(`${API_BASE}/classrooms`);
    if (!res.ok) throw new Error("Failed to fetch classrooms");
    return res.json();
  },
  getClassroomStudents: async (classroomId: string): Promise<Student[]> => {
    const res = await fetch(`${API_BASE}/classrooms/${classroomId}/students`);
    if (!res.ok) throw new Error("Failed to fetch students");
    return res.json();
  },

  // Questions
  getQuestions: async (): Promise<QuestionSummary[]> => {
    const res = await fetch(`${API_BASE}/questions`);
    if (!res.ok) throw new Error("Failed to fetch questions");
    return res.json();
  },
  createQuestion: async (payload: any): Promise<any> => {
    const res = await fetch(`${API_BASE}/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to create question");
    return res.json();
  },
  getQuestion: async (id: string): Promise<any> => {
    const res = await fetch(`${API_BASE}/questions/${id}`);
    if (!res.ok) throw new Error("Failed to fetch question");
    return res.json();
  },
  updateQuestion: async (id: string, payload: any): Promise<any> => {
    const res = await fetch(`${API_BASE}/questions/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to update question");
    return res.json();
  },

  // Assessments
  getAssessments: async (): Promise<AssessmentSummary[]> => {
    const res = await fetch(`${API_BASE}/assessments`);
    if (!res.ok) throw new Error("Failed to fetch assessments");
    return res.json();
  },
  createAssessment: async (payload: any): Promise<any> => {
    const res = await fetch(`${API_BASE}/assessments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to create assessment");
    return res.json();
  },
  getLeaderboard: async (assessmentId: string): Promise<any[]> => {
    const res = await fetch(`${API_BASE}/assessments/${assessmentId}/leaderboard`);
    if (!res.ok) throw new Error("Failed to fetch leaderboard");
    return res.json();
  }
};
