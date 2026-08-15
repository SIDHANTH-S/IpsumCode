import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { TopBar } from "./TopBar"
import { Sidebar } from "./Sidebar"
import { Tab } from "../../types"

export function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  // Map routes to tab names
  const getActiveTab = (): Tab => {
    const path = location.pathname
    if (path.includes("classroom")) return "Classroom"
    if (path.includes("question-bank")) return "Ques Bank"
    if (path.includes("assessments")) return "Contest"
    if (path.includes("contests")) return "Contest"
    return "Contest"
  }

  const handleSelectTab = (tab: Tab) => {
    switch (tab) {
      case "Classroom":
        navigate("/classroom")
        break
      case "Ques Bank":
        navigate("/question-bank")
        break
      case "Contest":
        navigate("/dashboard")
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      <TopBar />
      <div className="flex">
        <Sidebar active={getActiveTab()} onSelect={handleSelectTab} />
        <main className="min-w-0 flex-1 px-5 py-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
