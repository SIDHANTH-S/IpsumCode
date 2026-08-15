import { useNavigate, useParams } from "react-router-dom"

export function useNavigation() {
  const navigate = useNavigate()
  const params = useParams()

  return {
    navigate,
    params,
    
    // Dashboard
    toDashboard: () => navigate("/dashboard"),
    
    // Classroom
    toClassroom: () => navigate("/classroom"),
    
    // Question Bank
    toQuestionBank: () => navigate("/question-bank"),
    toNewQuestion: () => navigate("/question-bank/new"),
    
    // Assessments
    toCreateAssessment: (initialDate?: string) => 
      navigate("/assessments/create", { state: { initialDate } }),
    toViewAssessment: (id: string) => navigate(`/assessments/${id}`),
    toEditAssessment: (id: string) => navigate(`/assessments/${id}/edit`),
    toUpcomingAssessments: () => navigate("/assessments/upcoming"),
    toCompletedAssessments: (date?: number) =>
      navigate("/assessments/completed", { state: { date } }),
    
    // Contest Results
    toContestResults: (contestId: string) => 
      navigate(`/contests/${contestId}/results`),
  }
}
