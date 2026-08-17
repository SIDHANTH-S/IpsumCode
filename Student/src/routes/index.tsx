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
      }
    ]
  }
])
