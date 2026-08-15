import { Sparkles, Bell, Menu, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

import { GRADIENTS } from "../../data/mockData"

export function TopBar() {
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
        <button className="text-text-muted hover:text-text-primary lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg"
            style={{ background: GRADIENTS.purple }}
          >
            <Sparkles className="h-4 w-4 text-text-primary" fill="white" />
          </span>
          <span className="font-display text-lg tracking-wide text-text-primary">
            IPSUM&lt;CODE&gt;
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
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0a0a0a]" />
        </button>
        <span className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-500 to-border-default ring-1 ring-border-default" />
      </div>
    </header>
  )
}
