import {
  ArrowRight,
  ArrowUpDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  Plus,
  CheckSquare,
  Gauge,
  Tag,
  Code,
} from "lucide-react"

import { SectionLink } from "../components/ui"
import { FilterMenu, FilterDefinition } from "../components/ui/FilterMenu"
import {
  GraduationCap,
  Calendar as CalendarIcon,
  Calculator,
} from "lucide-react"

import {
  CARD_GRADIENTS,
  ARROW_COLORS,
  BADGE_GRADIENTS,
  liveCards,
  upcoming,
  completed,
  dayDots,
  TODAY,
  LEADING_BLANKS,
  classrooms,
} from "../data/mockData"

import { LeaderboardBlock } from "../components/contest/LeaderboardBlock"

function ContestCards({ onView }: { onView: (id: string) => void }) {
  return (
    <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 rounded-r-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {liveCards.map((card, i) => (
        <div
          key={i}
          onClick={() => onView(`live-${i}`)}
          className="cursor-pointer relative flex h-[135px] w-[248px] shrink-0 flex-col overflow-hidden rounded-[11px] px-[17px] pt-4 pb-3 text-white shadow-[0px_9px_21px_-4px_rgba(23,28,41,0.28)]"
          style={{ background: CARD_GRADIENTS[card.tone] }}
        >
          <div className="flex-1">
            <p className="text-[14px] font-bold leading-none">{card.title}</p>
            <div className="mt-2 space-y-[3px] text-[11px] leading-[15px] text-white/80">
              {card.lines.map((line) => (
                <p key={line} className="whitespace-pre">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-auto border-t border-white/25 pt-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] leading-none text-white/80">
                {card.time}
              </span>
              <button className="grid h-[26px] w-[26px] place-items-center rounded-full bg-white shadow-sm transition-transform hover:scale-105">
                <ArrowRight
                  className="h-3.5 w-3.5"
                  style={{ color: ARROW_COLORS[card.tone] }}
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function UpcomingCard({ 
  item,
  onView,
}: { 
  item: typeof upcoming[number] 
  onView: (id: string) => void
}) {
  return (
    <div 
      className="flex items-center gap-3.5 rounded-lg border border-white/[0.08] bg-white/[0.06] p-3 shadow-[0px_4px_16px_-8px_rgba(0,0,0,0.22)] transition-colors hover:border-white/[0.16] cursor-pointer"
      onClick={() => onView(item.id)}
    >
      <div className="relative h-[60px] w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.08]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, ${
              item.tone === "purple"
                ? "rgba(91,74,239,0.5)"
                : item.tone === "blue"
                  ? "rgba(41,82,227,0.5)"
                  : item.tone === "orange"
                    ? "rgba(245,165,36,0.5)"
                    : "rgba(245,86,122,0.5)"
            } 0%, transparent 70%)`,
          }}
        />
        <div
          className="relative flex h-5 items-center justify-center"
          style={{ background: BADGE_GRADIENTS[item.tone] }}
        >
          <span className="text-[9.5px] font-bold uppercase leading-none tracking-[0.95px] text-white/80">
            MAY
          </span>
        </div>
        <div className="relative flex h-10 items-center justify-center bg-[#0d0d0d]/60 backdrop-blur-sm">
          <span className="relative z-10 text-[20px] font-bold leading-none text-[#f5f5f5]">
            {item.day}
          </span>
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-white">
          {item.name}
        </p>
        <p className="mt-1 text-[11px] text-white/70">
          {item.classrooms.join(", ")}
          <span className="mx-1 text-white/40">·</span>
          {item.scheduledTime}
        </p>
        <p className="mt-1 text-[10px] text-white/45">
          {item.duration / 60} min · {item.questionsPerStudent} Questions
        </p>
      </div>
    </div>
  )
}

const toolbarButtons = [
  { label: "Create test", icon: Plus },

  { label: "ADD question", icon: null },

  { label: "Create Classroom", icon: null },
]

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

import React, { useState } from "react"
function CompletedTable({
  onCreateContest,
  onViewResults,
  onViewAllCompleted,
}: {
  onCreateContest?: () => void
  onViewResults?: (id: string) => void
  onViewAllCompleted?: () => void
}) {
  const [activeFilters, setActiveFilters] = useState<any[]>([])

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

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-neutral-900">
          COMPLETED
        </span>
        {toolbarButtons.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => label === "Create test" && onCreateContest?.()}
            className="flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
          >
            {Icon && <Icon className="h-3.5 w-3.5 text-indigo-400" />}
            {label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-3">
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
          <SectionLink onClick={() => onViewAllCompleted?.()} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-white/[0.04]">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              <th className="border-b border-white/[0.06] px-5 py-3 font-medium">
                Assessment
              </th>
              <th className="border-b border-white/[0.06] px-5 py-3 font-medium">
                Participation
              </th>
              <th className="border-b border-white/[0.06] px-5 py-3 font-medium">
                Avg. Score
              </th>
              <th className="border-b border-white/[0.06] px-5 py-3 font-medium">
                Completion
              </th>
              <th className="border-b border-white/[0.06] px-5 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {completed.slice(0, 5).map((row, i) => (
              <tr
                key={row.title}
                className={`border-b border-white/[0.06] last:border-b-0 ${
                  i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                }`}
              >
                <td className="px-5 py-3.5">
                  <p className="font-semibold text-[#f5f5f5]">{row.title}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">
                    {row.cls}
                  </p>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-neutral-400">
                  {row.participation}
                </td>
                <td className="px-5 py-3.5 text-[13px] font-semibold text-white">
                  {row.score}
                </td>
                <td className="px-5 py-3.5 text-[13px] text-neutral-400">
                  {row.completion}
                </td>
                <td className="px-5 py-3.5">
                  <button
                    onClick={() => onViewResults?.(row.title)}
                    className="flex items-center gap-1 text-[12px] font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    Results <ArrowRight className="h-3.5 w-3.5" />
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

function Calendar({ onDateClick }: { onDateClick?: (day: number) => void }) {
  const cells: (number | null)[] = [
    ...Array(LEADING_BLANKS).fill(null),

    ...Array.from({ length: 31 }, (_, i) => i + 1),
  ]

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"]

  return (
    <>
      <div className="mb-3 flex h-9 items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-[14px] font-normal text-white/75">Day 13</span>
        </div>
        <div className="flex items-center gap-[14px] text-neutral-400">
          <button className="grid h-[14px] w-[14px] place-items-center hover:text-white">
            <ChevronLeft className="h-[14px] w-[14px]" />
          </button>
          <button className="grid h-[14px] w-[14px] place-items-center hover:text-white">
            <ChevronRight className="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center">
        {weekdays.map((d, i) => (
          <span
            key={i}
            className="flex h-[26px] items-center justify-center text-[12px] font-normal text-white/30"
          >
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} className="h-8" />

          const isToday = day === TODAY

          return (
            <button
              key={i}
              onClick={() => onDateClick?.(day)}
              className="relative flex h-8 items-center justify-center hover:bg-white/[0.04] transition-colors rounded-full"
            >
              {isToday ? (
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-[12px] font-normal text-white">
                  {day}
                </span>
              ) : (
                <>
                  <span className="text-[12px] font-normal text-white hover:text-white transition-colors">
                    {day}
                  </span>
                  {(dayDots[day] ?? []).length > 0 && (
                    <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2">
                      {(dayDots[day] ?? []).map((c, di) => (
                        <span
                          key={di}
                          className="absolute h-1 w-1 rounded-full"
                          style={{ background: c, left: `${di * 5}px` }}
                        />
                      ))}
                    </span>
                  )}
                </>
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-2 flex h-9 items-center justify-between border-t border-neutral-800 pt-2 text-[12px]">
        <button className="font-normal text-emerald-500 hover:text-emerald-400">
          Lorem
        </button>
        <button className="font-normal text-white/60 hover:text-white">
          Rules
        </button>
      </div>
    </>
  )
}

function LeaderboardPanel() {
  return (
    <div className="relative h-[600px] w-full">
      <LeaderboardBlock />
    </div>
  )
}

export function ContestPage({
  onCreateContest,
  onViewAssessment,
  onViewResults,
  onViewAllUpcoming,
  onViewAllCompleted,
  onViewLiveAssessment,
}: {
  onCreateContest?: (date?: string) => void
  onViewAssessment?: (id: string) => void
  onViewResults?: (id: string) => void
  onViewAllUpcoming?: () => void
  onViewAllCompleted?: (date?: number) => void
  onViewLiveAssessment: (id: string) => void
}) {
  const handleDateClick = (day: number) => {
    if (day < TODAY) {
      // Past date -> show See All workspace for completed assessments
      onViewAllCompleted?.(day)
    } else {
      // Future or present date -> Create new assessment
      const formattedDate = `${day} MAY 2026`
      onCreateContest?.(formattedDate)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_256px]">
      <div className="min-w-0 space-y-8">
        <ContestCards onView={onViewLiveAssessment} />

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Upcoming</h2>
            <SectionLink onClick={() => onViewAllUpcoming?.()} />
          </div>
          
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.slice(0, 3).map((item) => (
              <UpcomingCard key={item.id} item={item} onView={() => onViewAssessment?.(item.id)} />
            ))}
          </div>
        </section>

        <CompletedTable
          onCreateContest={onCreateContest}
          onViewResults={onViewResults}
          onViewAllCompleted={() => onViewAllCompleted?.()}
        />
      </div>

      <div className="space-y-6">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <Calendar onDateClick={handleDateClick} />
          </div>
        <LeaderboardPanel />
      </div>
    </div>
  )
}
