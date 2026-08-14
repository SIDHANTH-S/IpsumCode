import { Sparkles, Bell, Menu } from "lucide-react"

import { GRADIENTS } from "../../data/mockData"

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex h-[50px] items-center justify-between border-b border-neutral-800 bg-[#1e1e1e] px-5 lg:px-8">
      <div className="flex items-center gap-4">
        <button className="text-neutral-400 hover:text-white lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg"
            style={{ background: GRADIENTS.purple }}
          >
            <Sparkles className="h-4 w-4 text-white" fill="white" />
          </span>
          <span className="font-display text-lg tracking-wide text-white">
            IPSUM&lt;CODE&gt;
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-neutral-400 transition-colors hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0a0a0a]" />
        </button>
        <span className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700 ring-1 ring-neutral-700" />
      </div>
    </header>
  )
}
