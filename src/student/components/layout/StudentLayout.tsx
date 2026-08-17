import { Outlet } from "react-router-dom"
import { Sparkles, Bell, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { GRADIENTS } from "../../../data/mockData"

function StudentTopBar() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <header className="sticky top-0 z-50 flex h-[50px] items-center justify-between border-b border-border-default bg-surface-base px-5 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg"
            style={{ background: GRADIENTS.purple }}
          >
            <Sparkles className="h-4 w-4 text-text-primary" fill="white" />
          </span>
          <span className="font-display text-lg tracking-wide text-text-primary">
            IPSUM&lt;CODE&gt; <span className="text-text-muted text-sm ml-2">Student</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-text-muted transition-colors hover:text-text-primary cursor-pointer"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button className="relative text-text-muted transition-colors hover:text-text-primary cursor-pointer">
          <Bell className="h-5 w-5" />
        </button>
        <span className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-border-default ring-1 ring-border-default" />
      </div>
    </header>
  )
}

export function StudentLayout() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-neutral-100 flex flex-col">
      <StudentTopBar />
      <main className="flex-1 w-full max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
