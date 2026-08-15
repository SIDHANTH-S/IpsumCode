import {
  BarChart3,
  BookOpenCheck,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Tab } from "../../types"

import { useState, useEffect } from "react"

const navItems: { label: Tab icon: typeof BarChart3 }[] = [
  { label: "Contest", icon: BarChart3 },

  { label: "Classroom", icon: BookOpenCheck },

  { label: "Ques Bank", icon: Database },
]

export function Sidebar({
  active,

  onSelect,
}: {
  active: Tab;
  onSelect: (tab: Tab) => void
}) {
  const [width, setWidth] = useState(240)

  const [isCollapsed, setIsCollapsed] = useState(false)

  const [isResizing, setIsResizing] = useState(false)

  const [isXl, setIsXl] = useState(true)

  // Load user preferences

  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebarWidth")

    if (savedWidth) setWidth(parseInt(savedWidth, 10))

    const savedCollapsed = localStorage.getItem("sidebarCollapsed")

    if (savedCollapsed) setIsCollapsed(savedCollapsed === "true")
  }, [])

  // Save collapsed state

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed.toString())
  }, [isCollapsed])

  // Save width when finished resizing

  useEffect(() => {
    if (!isResizing) {
      localStorage.setItem("sidebarWidth", width.toString())
    }
  }, [width, isResizing])

  // Screen size breakpoint detection

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)")

    const onChange = (e: MediaQueryListEvent) => setIsXl(e.matches)

    setIsXl(mql.matches)

    // Fallback for Safari which might need addListener

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)

      return () => mql.removeEventListener("change", onChange)
    } else {
      mql.addListener(onChange)

      return () => mql.removeListener(onChange)
    }
  }, [])

  // Drag handle logic

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()

    setIsResizing(true)
  }

  useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (e: MouseEvent) => {
      // Sidebar is on the left, so clientX maps directly to width

      let newWidth = e.clientX

      if (newWidth >= 180 && newWidth <= 400) {
        setWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener("mousemove", handleMouseMove)

    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)

      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  // Compute active states

  const activeWidth = !isXl ? 56 : isCollapsed ? 56 : width

  const isIconOnly = !isXl || isCollapsed

  return (
    <aside
      className={`group relative hidden shrink-0 select-none flex-col border-r border-neutral-800 bg-[#1a1a1a] lg:flex ${
        isResizing ? "" : "transition-[width] duration-300 ease-in-out"
      }`}
      style={{ width: activeWidth }}
    >
      <div className="flex-1 overflow-x-hidden overflow-y-auto py-6">
        <nav className="flex flex-col gap-1 px-3">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => onSelect(label)}
              title={label}
              className={`flex cursor-pointer items-center rounded-lg py-2.5 transition-colors ${
                isIconOnly ? "justify-center px-0" : "gap-3 px-3"
              } ${
                active === label
                  ? "bg-neutral-800/70 text-white"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
              {!isIconOnly && (
                <span className="whitespace-nowrap text-sm font-medium">
                  {label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Collapse Toggle */}
      {isXl && (
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-6 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-neutral-700 bg-[#1a1a1a] text-neutral-400 opacity-0 transition-opacity hover:border-neutral-500 hover:text-white group-hover:opacity-100"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>
      )}

      {/* Resize Handle */}
      {isXl && !isCollapsed && (
        <div
          onMouseDown={handleMouseDown}
          className="absolute right-0 top-0 z-0 h-full w-1.5 cursor-col-resize transition-colors hover:bg-indigo-500/50 active:bg-indigo-500"
        />
      )}
    </aside>
  )
}

