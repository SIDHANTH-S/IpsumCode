import { Calendar, ChevronRight, CheckCircle2 } from "lucide-react"

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
        <h1 className="text-2xl font-bold text-white">Student Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400 flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Upcoming Assessments
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700">
              <div>
                <p className="text-sm font-medium text-white">Data Structures Mid-Term</p>
                <p className="text-xs text-neutral-400 mt-0.5">Tomorrow, 10:00 AM</p>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300">
                View <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700">
              <div>
                <p className="text-sm font-medium text-white">Algorithms Quiz</p>
                <p className="text-xs text-neutral-400 mt-0.5">Aug 20, 2:00 PM</p>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300">
                View <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> Recent Results
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700">
              <div>
                <p className="text-sm font-medium text-white">React Native Assignment</p>
                <p className="text-xs text-emerald-400 mt-0.5">Score: 92/100</p>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300">
                Details <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
