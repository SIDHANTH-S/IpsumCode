import { ReactNode } from "react"
import { TopBar } from "./TopBar"
import { Sidebar } from "./Sidebar"
import { Tab } from "../../types"

export function AppLayout({
  activeTab,
  onSelectTab,
  children,
}: {
  activeTab: Tab
  onSelectTab: (tab: Tab) => void
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      <TopBar />
      <div className="flex">
        <Sidebar active={activeTab} onSelect={onSelectTab} />
        <main className="min-w-0 flex-1 px-5 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
