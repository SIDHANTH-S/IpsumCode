import { useState } from "react"
import { FilterMenu } from "../components/ui"

import {
  Search,
  Upload,
  Plus,
  ArrowUpDown,
  Filter,
  BarChart2,
  Tag,
} from "lucide-react"

import {
  difficultyFilters,
  questions,
  DIFFICULTY_COLORS,
} from "../data/mockData"

const AVAILABLE_FILTERS = [
  {
    id: "difficulty",
    label: "Difficulty",
    icon: BarChart2,
    type: "multi-select" as const,
    options: [
      { value: "Easy", label: "Easy" },
      { value: "Medium", label: "Medium" },
      { value: "Hard", label: "Hard" },
    ],
  },
  {
    id: "topics",
    label: "Topics",
    icon: Tag,
    type: "multi-select" as const,
    options: [
      { value: "Arrays", label: "Arrays" },
      { value: "Strings", label: "Strings" },
      { value: "Trees", label: "Trees" },
    ],
  },
]

export function QuestionBankPage({
  onNewQuestion,
}: {
  onNewQuestion: () => void
}) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.5px] text-white/50">
            Manage
          </p>
          <h1 className="mt-1 text-[22px] font-semibold leading-tight text-white">
            Question Bank
          </h1>
          <p className="mt-1 text-[12px] text-white/50">
            1,248 questions <span className="mx-0.5">·</span> 1,190 active{" "}
            <span className="mx-0.5">·</span> 58 archived
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <button className="flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-4 py-[9px] text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            <Upload className="h-3.5 w-3.5" />
            Import Questions
          </button>
          <button
            onClick={onNewQuestion}
            className="flex cursor-pointer items-center gap-1.5 rounded-md bg-[#5b4aef] px-4 py-[9px] text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
            New Question
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative min-w-[200px] flex-1">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
          <input
            type="text"
            placeholder="Search questions"
            className="h-8 w-full rounded-full bg-white/[0.08] pl-9 pr-4 text-[14px] text-white placeholder:text-[#a8a8a8] focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <button className="flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 text-[13px] text-white/85 transition-colors hover:bg-white/[0.12]">
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </button>
        <FilterMenu
          trigger={
            <button className="relative flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 text-[13px] text-white/85 transition-colors hover:bg-white/[0.12]">
              <Filter className="h-3.5 w-3.5" />
              Filter
              <span className="absolute -right-1 -top-[3px] h-[5px] w-[5px] rounded-full bg-[#ef4743]" />
            </button>
          }
          availableFilters={AVAILABLE_FILTERS}
        />

        {/* 17/4018 Assigned indicator — hidden until assignment tracking is implemented
        <div className="ml-auto flex items-center gap-2 text-[14px] text-[#a8a8a8]">
          <span className="grid h-4 w-4 place-items-center rounded-full border-2 border-[#635ce6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#635ce6]" />
          </span>
          17/4018 Assigned
        </div>
        */}
      </div>

      <div className="flex flex-col gap-0.5">
        {questions.map((q, i) => (
          <button
            key={`${q.num}-${i}`}
            className={`group flex h-11 cursor-pointer items-center gap-3 rounded border border-[#1c1c1c] px-4 text-left transition-colors ${
              i % 2 === 0 ? "bg-white/[0.06]" : "bg-transparent"
            } hover:bg-white/[0.09]`}
          >
            <span className="min-w-0 flex-1 truncate text-[14px] font-semibold leading-5 text-[#f5f5f5]">
              {q.num}. {q.title}
            </span>
            <span className="w-14 shrink-0 text-right text-[14px] text-[#a8a8a8] tabular-nums">
              {q.acceptance}
            </span>
            <span
              className="w-14 shrink-0 text-right text-[14px] font-medium"
              style={{ color: DIFFICULTY_COLORS[q.difficulty] }}
            >
              {q.difficulty}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
