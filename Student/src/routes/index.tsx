import { createBrowserRouter, Outlet, useOutletContext } from "react-router-dom"
import Dashboard from "../Dashboard"
import ProfilePage from "../ProfilePage"
import AssessmentWorkspace from "../AssessmentWorkspace"
import { useParams, useNavigate } from "react-router-dom"
import { AppLayout } from "../App"

type LayoutContext = {
  dark: boolean
  toggleTheme: () => void
}

export function useLayoutContext() {
  return useOutletContext<LayoutContext>()
}

function AssessmentWrapper() {
  const { id } = useParams()
  const { dark, toggleTheme } = useLayoutContext()
  const navigate = useNavigate()
  return (
    <AssessmentWorkspace 
      assessmentName={id || "Unknown"} 
      dark={dark} 
      onToggleTheme={toggleTheme} 
      onBack={() => navigate('/')} 
    />
  )
}

function AttemptWrapper() {
  const { attemptId } = useParams()
  const { dark, toggleTheme } = useLayoutContext()
  const navigate = useNavigate()
  
  // We use history state to pass the snapshots so the workspace knows what questions to load.
  // We can't use `useLocation` at the top level route definition easily, but it's passed below.
  return (
    <AssessmentWorkspace 
      attemptId={attemptId}
      dark={dark} 
      onToggleTheme={toggleTheme} 
      onBack={() => navigate('/')} 
    />
  )
}

function ProfileWrapper() {
  const { dark, toggleTheme } = useLayoutContext()
  const navigate = useNavigate()
  return (
    <ProfilePage 
      dark={dark} 
      onToggleTheme={toggleTheme} 
      onBack={() => navigate('/')} 
    />
  )
}

function DashboardWrapper() {
  const { dark, toggleTheme } = useLayoutContext()
  const navigate = useNavigate()
  return (
    <Dashboard 
      dark={dark} 
      onToggleTheme={toggleTheme} 
      onOpenAssessment={(name) => navigate(`/assessment/${encodeURIComponent(name)}`)} 
      onOpenProfile={() => navigate('/profile')} 
      onOpenAttempt={(attemptId, state) => navigate(`/attempt/${attemptId}`, { state })}
    />
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      {
        index: true,
        element: <DashboardWrapper />
      },
      {
        path: "profile",
        element: <ProfileWrapper />
      },
      {
        path: "assessment/:id",
        element: <AssessmentWrapper />
      },
      {
        path: "attempt/:attemptId",
        element: <AttemptWrapper />
      }
    ]
  }
])
