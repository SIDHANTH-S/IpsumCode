import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom"
import { AppLayout } from "../components/layout/AppLayout"
import { ContestPage } from "../pages/ContestPage"
import { ClassroomPage } from "../pages/ClassroomPage"
import { QuestionBankPage } from "../pages/QuestionBankPage"
import { NewQuestionPage } from "../pages/NewQuestion"
import { CreateAssessmentPage } from "../pages/CreateAssessmentPage"
import { ContestResultsPage } from "../pages/ContestResultsPage"
import { UpcomingAssessmentsPage } from "../pages/UpcomingAssessmentsPage"
import { CompletedAssessmentsPage } from "../pages/CompletedAssessmentsPage"

function QuestionBankPageWrapper() {
  const navigate = useNavigate()
  return <QuestionBankPage 
    onNewQuestion={() => navigate("/question-bank/new")} 
    onEditQuestion={(id: string) => navigate(`/question-bank/edit/${id}`)}
  />
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <ContestPage />,
        handle: { title: "Dashboard" }
      },
      {
        path: "classroom",
        element: <ClassroomPage />,
        handle: { title: "Classroom" }
      },
      {
        path: "question-bank",
        element: <QuestionBankPageWrapper />,
        handle: { title: "Question Bank" }
      },
      {
        path: "question-bank/new",
        element: <NewQuestionPage />,
        handle: { title: "Create Question" }
      },
      {
        path: "question-bank/edit/:id",
        element: <NewQuestionPage />,
        handle: { title: "Edit Question" }
      },
      {
        path: "assessments/create",
        element: <CreateAssessmentPage />,
        handle: { title: "Create Assessment" }
      },
      {
        path: "assessments/:id",
        element: <CreateAssessmentPage />,
        handle: { title: "View Assessment" }
      },
      {
        path: "assessments/:id/edit",
        element: <CreateAssessmentPage />,
        handle: { title: "Edit Assessment" }
      },
      {
        path: "contests/:id/results",
        element: <ContestResultsPage />,
        handle: { title: "Contest Results" }
      },
      {
        path: "assessments/upcoming",
        element: <UpcomingAssessmentsPage />,
        handle: { title: "Upcoming Assessments" }
      },
      {
        path: "assessments/completed",
        element: <CompletedAssessmentsPage />,
        handle: { title: "Completed Assessments" }
      }
    ]
  }
])
