import { ChevronLeft } from "lucide-react"
import { adminApi, AssessmentSummary } from "../services/api"
import { useEffect, useState } from "react"
import { useNavigation } from "../hooks/useNavigation"

export function UpcomingAssessmentsPage() {
  const { navigate, toViewAssessment } = useNavigation()
  const onBack = () => navigate(-1)
  const onViewAssessment = (id: string) => toViewAssessment(id)
  const [upcoming, setUpcoming] = useState<AssessmentSummary[]>([])

  useEffect(() => {
    adminApi.getAssessments().then((data) => {
      setUpcoming(data.filter((a) => a.status === "Upcoming"))
    }).catch(console.error)
  }, [])

  return (
    <div className="flex h-full flex-col w-full max-w-[1200px] mx-auto pb-12">
      <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-border-default pb-4 min-h-[32px]">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none cursor-pointer"
          >
            ← Back
          </button>
        )}
        <div className="h-4 w-px bg-border-default" aria-hidden="true" />
        <h2 className="text-lg font-bold text-text-primary">Upcoming Assessments</h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border-default bg-surface-base flex-1">
        <table className="w-full min-w-[700px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-text-xs font-medium uppercase tracking-wide text-text-muted">
              <th className="px-5 py-3 font-semibold">Assessment</th>
              <th className="px-5 py-3 font-semibold">Classrooms</th>
              <th className="px-5 py-3 font-semibold">Scheduled</th>
              <th className="px-5 py-3 font-semibold">Duration</th>
              <th className="px-5 py-3 font-semibold">Questions</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map((item) => (
              <tr
                key={item.id}
                className="border-b border-border-default last:border-b-0 hover:bg-surface-hover transition-colors"
              >
                <td className="px-5 py-4 font-semibold text-text-primary text-text-base">{item.title}</td>
                <td className="px-5 py-4 text-text-base text-text-secondary">{item.classrooms.join(", ")}</td>
                <td className="px-5 py-4 text-text-base text-text-secondary">
                  {item.scheduledDate}, {item.scheduledTime}
                </td>
                <td className="px-5 py-4 text-text-base text-text-secondary">{item.duration / 60} min</td>
                <td className="px-5 py-4 text-text-base text-text-secondary">{item.questionsPerStudent}</td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => onViewAssessment(item.id)}
                    className="rounded-md text-text-sm font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
