import { ChevronLeft } from "lucide-react"
import { upcoming } from "../data/mockData"

export function UpcomingAssessmentsPage({
  onBack,
  onViewAssessment,
}: {
  onBack: () => void
  onViewAssessment: (id: string) => void
}) {
  return (
    <div className="flex h-full flex-col w-full max-w-[1200px] mx-auto pb-12">
      <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-neutral-800 pb-4 min-h-[32px]">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-md text-sm font-medium text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <div className="h-4 w-px bg-neutral-800" aria-hidden="true" />
        <h2 className="text-lg font-bold text-white">Upcoming Assessments</h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-white/[0.04] flex-1">
        <table className="w-full min-w-[700px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              <th className="border-b border-white/[0.06] px-5 py-4">Contest name</th>
              <th className="border-b border-white/[0.06] px-5 py-4">Class</th>
              <th className="border-b border-white/[0.06] px-5 py-4">Date & time</th>
              <th className="border-b border-white/[0.06] px-5 py-4">Duration</th>
              <th className="border-b border-white/[0.06] px-5 py-4">Questions</th>
              <th className="border-b border-white/[0.06] px-5 py-4" />
            </tr>
          </thead>
          <tbody>
            {upcoming.map((item) => (
              <tr
                key={item.id}
                className="border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-4 font-semibold text-white text-[13px]">{item.name}</td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">{item.classrooms.join(", ")}</td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">
                  {item.scheduledDate}, {item.scheduledTime}
                </td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">{item.duration / 60} min</td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">{item.questionsPerStudent}</td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => onViewAssessment(item.id)}
                    className="rounded-md text-[12px] font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
