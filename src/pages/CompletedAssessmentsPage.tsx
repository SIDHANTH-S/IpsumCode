import React, { useState } from "react"
import { ChevronLeft, Filter, ArrowUpDown, Plus } from "lucide-react"
import { completed } from "../data/mockData"
import { FilterMenu, FilterDefinition } from "../components/ui/FilterMenu"
import { GraduationCap, Calendar as CalendarIcon, Calculator } from "lucide-react"
import { classrooms } from "../data/mockData"

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

export function CompletedAssessmentsPage({
  onBack,
  onViewResults,
  initialDate,
}: {
  onBack: () => void
  onViewResults: (id: string) => void
  initialDate?: number | null
}) {
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
      <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-neutral-800 pb-4 min-h-[32px]">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-md text-sm font-medium text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <div className="h-4 w-px bg-neutral-800" aria-hidden="true" />
        <h2 className="text-lg font-bold text-white">Completed Assessments</h2>
        
        <div className="ml-auto flex items-center gap-3">
          {selectedDate && (
            <span className="flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-1 text-[12px] text-white/80">
              Date: {selectedDate} MAY
              <button 
                onClick={() => setSelectedDate(null)}
                className="ml-1 text-white/40 hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}

          {activeFilters.map((f) => (
            <span
              key={f.id}
              className="flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 text-[11px] font-medium text-neutral-300"
            >
              {getFilterSummary(f)}
            </span>
          ))}
          <FilterMenu
            availableFilters={contestFilters}
            initialFilters={activeFilters}
            onApply={(filters) => setActiveFilters(filters)}
            trigger={
              <button className="grid h-8 w-8 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:text-white cursor-pointer">
                <Filter className="h-3.5 w-3.5" />
              </button>
            }
          />
          <button className="grid h-8 w-8 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:text-white">
            <ArrowUpDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-white/[0.04] flex-1">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              <th className="border-b border-white/[0.06] px-5 py-4 font-medium">
                Assessment
              </th>
              <th className="border-b border-white/[0.06] px-5 py-4 font-medium">
                Participation
              </th>
              <th className="border-b border-white/[0.06] px-5 py-4 font-medium">
                Avg. Score
              </th>
              <th className="border-b border-white/[0.06] px-5 py-4 font-medium">
                Completion
              </th>
              <th className="border-b border-white/[0.06] px-5 py-4 font-medium" />
            </tr>
          </thead>
          <tbody>
            {filteredCompleted.map((row, i) => (
              <tr
                key={row.title}
                className={`border-b border-white/[0.06] last:border-b-0 ${
                  i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                }`}
              >
                <td className="px-5 py-4">
                  <p className="font-semibold text-[#f5f5f5]">{row.title}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">
                    {row.cls}
                  </p>
                </td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">
                  {row.participation}
                </td>
                <td className="px-5 py-4 text-[13px] font-semibold text-white">
                  {row.score}
                </td>
                <td className="px-5 py-4 text-[13px] text-neutral-400">
                  {row.completion}
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => onViewResults(row.title)}
                    className="rounded-md text-[12px] font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
