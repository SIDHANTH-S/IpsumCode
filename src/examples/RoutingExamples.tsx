/**
 * Routing Examples
 * 
 * This file demonstrates how to use the professional routing system
 * in different components and scenarios.
 */

import { useNavigation } from "../hooks/useNavigation"
import { useNavigate, useParams, useLocation } from "react-router-dom"

/**
 * Example 1: Basic Navigation
 * Navigate between main sections
 */
export function BasicNavigationExample() {
  const { toDashboard, toClassroom, toQuestionBank } = useNavigation()

  return (
    <div className="flex gap-4">
      <button onClick={toDashboard}>Go to Dashboard</button>
      <button onClick={toClassroom}>Go to Classroom</button>
      <button onClick={toQuestionBank}>View Question Bank</button>
    </div>
  )
}

/**
 * Example 2: Assessment Navigation
 * Navigate to assessment-related pages
 */
export function AssessmentNavigationExample() {
  const navigation = useNavigation()

  return (
    <div className="space-y-4">
      <button onClick={() => navigation.toCreateAssessment()}>
        Create New Assessment
      </button>
      
      <button onClick={() => navigation.toCreateAssessment("15 MAY 2026")}>
        Create Assessment for May 15
      </button>
      
      <button onClick={() => navigation.toViewAssessment("assessment-123")}>
        View Assessment #123
      </button>
      
      <button onClick={() => navigation.toEditAssessment("assessment-123")}>
        Edit Assessment #123
      </button>
      
      <button onClick={() => navigation.toUpcomingAssessments()}>
        View All Upcoming
      </button>
      
      <button onClick={() => navigation.toCompletedAssessments()}>
        View All Completed
      </button>
    </div>
  )
}

/**
 * Example 3: Question Bank Navigation
 * Navigate to question bank pages
 */
export function QuestionBankNavigationExample() {
  const { toQuestionBank, toNewQuestion } = useNavigation()

  return (
    <div className="space-y-4">
      <button onClick={toQuestionBank}>
        Back to Question Bank
      </button>
      
      <button onClick={toNewQuestion}>
        Create New Question
      </button>
    </div>
  )
}

/**
 * Example 4: Using URL Parameters
 * Extract assessment ID from URL and use it
 */
export function AssessmentDetailExample() {
  const { params } = useNavigation()
  const assessmentId = params.id

  if (!assessmentId) {
    return <div>Assessment ID not found in URL</div>
  }

  return (
    <div>
      <h1>Assessment: {assessmentId}</h1>
      {/* Component content */}
    </div>
  )
}

/**
 * Example 5: Using State for Navigation
 * Pass data through navigation state (not in URL)
 */
export function StateNavigationExample() {
  const navigate = useNavigate()
  const location = useLocation()
  const initialDate = location.state?.initialDate

  const handleNavigateWithDate = () => {
    navigate("/assessments/completed", {
      state: { date: Date.now() }
    })
  }

  return (
    <div>
      <button onClick={handleNavigateWithDate}>
        View Completed (Today)
      </button>
      {initialDate && <p>Initial Date: {initialDate}</p>}
    </div>
  )
}

/**
 * Example 6: Contest Results Navigation
 * Navigate to contest results page
 */
export function ContestResultsNavigationExample() {
  const { toContestResults } = useNavigation()

  return (
    <div className="space-y-4">
      <button onClick={() => toContestResults("contest-001")}>
        View Results for Contest 001
      </button>
      
      <button onClick={() => toContestResults("contest-002")}>
        View Results for Contest 002
      </button>
    </div>
  )
}

/**
 * Example 7: Dynamic Navigation in Lists
 * Navigate from list items
 */
export function ListNavigationExample() {
  const { toViewAssessment, toEditAssessment, toContestResults } = useNavigation()

  const assessments = [
    { id: "1", title: "Math Quiz", date: "15 MAY 2026" },
    { id: "2", title: "Physics Test", date: "20 MAY 2026" },
    { id: "3", title: "Chemistry Exam", date: "25 MAY 2026" },
  ]

  return (
    <div className="space-y-3">
      {assessments.map(assessment => (
        <div 
          key={assessment.id}
          className="flex gap-3 items-center justify-between p-4 border rounded"
        >
          <div>
            <h3 className="font-semibold">{assessment.title}</h3>
            <p className="text-sm text-gray-600">{assessment.date}</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => toViewAssessment(assessment.id)}
              className="px-3 py-1 bg-blue-500 text-text-primary rounded"
            >
              View
            </button>
            <button 
              onClick={() => toEditAssessment(assessment.id)}
              className="px-3 py-1 bg-gray-500 text-text-primary rounded"
            >
              Edit
            </button>
            <button 
              onClick={() => toContestResults(assessment.id)}
              className="px-3 py-1 bg-green-500 text-text-primary rounded"
            >
              Results
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Example 8: Conditional Navigation
 * Navigate based on conditions
 */
export function ConditionalNavigationExample() {
  const navigation = useNavigation()
  const userRole = "teacher" // Example: could come from auth context

  const handleViewAssessment = (assessmentId: string, isCompleted: boolean) => {
    if (isCompleted) {
      navigation.toContestResults(assessmentId)
    } else {
      navigation.toViewAssessment(assessmentId)
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={() => handleViewAssessment("123", false)}>
        View Ongoing Assessment
      </button>
      
      <button onClick={() => handleViewAssessment("456", true)}>
        View Completed Assessment Results
      </button>

      {userRole === "teacher" && (
        <button onClick={() => navigation.toCreateAssessment()}>
          Create Assessment (Teacher Only)
        </button>
      )}
    </div>
  )
}

/**
 * Example 9: Back Navigation Pattern
 * Using browser back button or custom back logic
 */
export function BackNavigationExample() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <button onClick={() => navigate(-1)}>
        Go Back (Previous Page)
      </button>
      
      <button onClick={() => navigate(-2)}>
        Go Back 2 Pages
      </button>
      
      <button onClick={() => navigate("/dashboard", { replace: true })}>
        Go to Dashboard (Replace History)
      </button>
    </div>
  )
}

/**
 * Example 10: Sidebar Navigation Component
 * Using navigation in sidebar/navigation menus
 */
export function SidebarNavigationExample() {
  const navigation = useNavigation()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="space-y-2">
      <div
        onClick={navigation.toDashboard}
        className={`p-3 cursor-pointer rounded ${
          isActive("/dashboard") ? "bg-blue-500 text-text-primary" : "hover:bg-gray-100"
        }`}
      >
        Dashboard
      </div>
      
      <div
        onClick={navigation.toClassroom}
        className={`p-3 cursor-pointer rounded ${
          isActive("/classroom") ? "bg-blue-500 text-text-primary" : "hover:bg-gray-100"
        }`}
      >
        Classroom
      </div>
      
      <div
        onClick={navigation.toQuestionBank}
        className={`p-3 cursor-pointer rounded ${
          isActive("/question-bank") ? "bg-blue-500 text-text-primary" : "hover:bg-gray-100"
        }`}
      >
        Question Bank
      </div>
      
      <div
        onClick={navigation.toUpcomingAssessments}
        className={`p-3 cursor-pointer rounded ${
          isActive("/assessments/upcoming") ? "bg-blue-500 text-text-primary" : "hover:bg-gray-100"
        }`}
      >
        Upcoming Assessments
      </div>
    </nav>
  )
}
