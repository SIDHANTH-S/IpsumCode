import React, { useState } from "react"
import { ChevronLeft, Filter, ArrowUpDown, Plus } from "lucide-react"
import { completed } from "../data/mockData"
import { FilterMenu, FilterDefinition } from "../components/ui/FilterMenu"
import { GraduationCap, Calendar as CalendarIcon, Calculator } from "lucide-react"
import { classrooms } from "../data/mockData"
import { useNavigation } from "../hooks/useNavigation"
import { useLocation } from "react-router-dom"

const contestFilters: FilterDefinition[] = [
  {
    id: "class",
    label: "Class",
    icon: GraduationCap,
    type: "multi-select",
    options: Array.from(new Set(classrooms.map((c) => c.name))).map((name) => ({
      value: name,
      label: name,
    })),
  },
  {
    id: "date",
    label: "Date",
    icon: CalendarIcon,
    type: "date-range",
  },
  {
    id: "avg_score",
    label: "Average Score",
    icon: Calculator,
    type: "number",
  },
]

export function CompletedAssessmentsPage() {
  const { navigate, toContestResults } = useNavigation()
  const location = useLocation()
  const initialDate = location.state?.date as number | undefined

  const onBack = () => navigate(-1)
  const onViewResults = (id: string) => toContestResults(id)

  const [activeFilters, setActiveFilters] = useState<any[]>([])
  const [selectedDate, setSelectedDate] = useState<number | null>(initialDate || null)

  const getFilterSummary = (f: any) => {
    const def = contestFilters.find((d) => d.id === f.definitionId)
    if (!def) return null
    if (def.type === "number") {
      const op =
        f.operator === "Greater than"
          ? ">"
          : f.operator === "Less than"
            ? "<"
            : f.operator
      return `${def.label} ${op} ${f.value}`
    }
    if (def.type === "date-range") {
      const start = f.value?.start
        ? new Date(f.value.start).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })
        : ""
      const end = f.value?.end
        ? new Date(f.value.end).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })
        : ""
      if (start && end) return `Date: ${start} – ${end}`
      if (start) return `Date: from ${start}`
      if (end) return `Date: until ${end}`
      return `Date: Any`
    }
    if (def.type === "multi-select") {
      const vals = Array.isArray(f.value) ? f.value : []
      if (vals.length === 0) return `${def.label}: Any`
      return `${def.label}: ${vals.join(", ")}`
    }
    return `${def.label}: ${f.value}`
  }

  const filteredCompleted = selectedDate 
    ? completed.filter(c => c.day === selectedDate)
    : completed

  return (
    <div className="flex h-full flex-col w-full max-w-[1200px] mx-auto pb-12">
      <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-border-default pb-4 min-h-[32px]">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <div className="h-4 w-px bg-surface-hover" aria-hidden="true" />
        <h2 className="text-lg font-bold text-text-primary">Completed Assessments</h2>
        
        <div className="ml-auto flex items-center gap-3">
          {selectedDate && (
            <span className="flex items-center gap-1.5 rounded-full bg-border-default px-3 py-1 text-text-sm text-text-secondary">
              Date: {selectedDate} MAY
              <button 
                onClick={() => setSelectedDate(null)}
                className="ml-1 text-text-muted hover:text-text-primary transition-colors"
              >
                ×
              </button>
            </span>
          )}

          {activeFilters.map((f) => (
            <span
              key={f.id}
              className="flex items-center gap-1.5 rounded-full border border-border-default bg-surface-hover/50 px-3 py-1 text-text-xs font-medium text-text-secondary"
            >
              {getFilterSummary(f)}
            </span>
          ))}
          <FilterMenu
            availableFilters={contestFilters}
            initialFilters={activeFilters}
            onApply={(filters) => setActiveFilters(filters)}
            trigger={
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border-default text-text-muted transition-colors hover:text-text-primary cursor-pointer">
                <Filter className="h-3.5 w-3.5" />
              </button>
            }
          />
          <button className="grid h-8 w-8 place-items-center rounded-full border border-border-default text-text-muted transition-colors hover:text-text-primary">
            <ArrowUpDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border-default bg-surface-raised flex-1">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-text-xs font-medium uppercase tracking-wide text-text-muted">
              <th className="border-b border-border-default px-5 py-3 font-medium">
                Assessment
              </th>
              <th className="border-b border-border-default px-5 py-3 font-medium">
                Participation
              </th>
              <th className="border-b border-border-default px-5 py-3 font-medium">
                Avg. Score
              </th>
              <th className="border-b border-border-default px-5 py-3 font-medium">
                Completion
              </th>
              <th className="border-b border-border-default px-5 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {filteredCompleted.map((row, i) => (
              <tr
                key={row.title}
                className={`border-b border-border-default last:border-b-0 ${
                  i % 2 === 0 ? "bg-surface-hover/30" : "bg-transparent"
                } hover:bg-bg-base/[0.05] transition-colors`}
              >
                <td className="px-5 py-3">
                  <p className="font-semibold text-text-primary text-text-base">{row.title}</p>
                  <p className="mt-0.5 text-text-xs text-text-muted">
                    {row.cls}
                  </p>
                </td>
                <td className="px-5 py-3 text-text-base text-text-muted">
                  {row.participation}
                </td>
                <td className="px-5 py-3 text-text-base font-semibold text-text-primary">
                  {row.score}
                </td>
                <td className="px-5 py-3 text-text-base text-text-muted">
                  {row.completion}
                </td>
                <td className="px-5 py-3 text-right">
                  <button
                    onClick={() => onViewResults(row.title)}
                    className="rounded-md text-text-sm font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    Results
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
