import { createBrowserRouter, Navigate } from "react-router-dom"
import { StudentLayout } from "../components/layout/StudentLayout"
import { DashboardPage } from "../pages/DashboardPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        handle: { title: "Dashboard" }
      }
    ]
  }
])
