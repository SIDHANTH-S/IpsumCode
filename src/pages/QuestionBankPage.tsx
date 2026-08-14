import { useState } from "react"

import {
  Search,
  Upload,
  Plus,
  ArrowUpDown,
  Filter,
  ChevronDown,
  Check,
} from "lucide-react"

import {
  difficultyFilters,
  questions,
  DIFFICULTY_COLORS,
} from "../data/mockData"

export function QuestionBankPage({
  onNewQuestion,
}: {
  onNewQuestion: () => void
}) {
  const [status, setStatus] = useState<"Active" | "Archived">("Active")

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
          <button className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-4 py-[9px] text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            <Upload className="h-3.5 w-3.5" />
            Import Questions
          </button>
          <button
            onClick={onNewQuestion}
            className="flex items-center gap-1.5 rounded-md bg-[#5b4aef] px-4 py-[9px] text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
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
        <button className="flex h-8 items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 text-[13px] text-white/85 transition-colors hover:bg-white/[0.12]">
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </button>
        <button className="relative flex h-8 items-center gap-1.5 rounded-full bg-white/[0.08] px-3.5 text-[13px] text-white/85 transition-colors hover:bg-white/[0.12]">
          <Filter className="h-3.5 w-3.5" />
          Filter
          <span className="absolute -right-1 -top-[3px] h-[5px] w-[5px] rounded-full bg-[#ef4743]" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <button className="flex h-[30px] items-center rounded-full bg-[#635ce6] px-3.5 text-[12.5px] font-medium text-white">
          All
        </button>
        {difficultyFilters.map((label) => (
          <button
            key={label}
            className="flex h-[30px] items-center rounded-full border border-white/10 bg-white/[0.06] px-3.5 text-[12.5px] font-medium text-white/65 transition-colors hover:text-white/90"
          >
            {label}
          </button>
        ))}
        <button className="flex h-[30px] w-[110px] items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-3 text-[12.5px] font-medium text-white/65 transition-colors hover:text-white/90">
          Topics
          <ChevronDown className="h-3.5 w-3.5" />
        </button>

        <div className="ml-auto flex items-center gap-4">
          <div className="flex h-[30px] w-[160px] items-center rounded-md border border-white/[0.08] bg-white/[0.04] p-[3px]">
            {(["Active", "Archived"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`flex h-full flex-1 items-center justify-center rounded-[5px] text-[12px] transition-colors ${
                  status === s
                    ? "bg-white/10 text-white"
                    : "text-white/45 hover:text-white/70"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#a8a8a8]">
            <span className="grid h-4 w-4 place-items-center rounded-full border-2 border-[#635ce6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#635ce6]" />
            </span>
            17/4018 Assigned
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        {questions.map((q, i) => (
          <button
            key={`${q.num}-${i}`}
            className={`group flex h-11 items-center gap-3 rounded border border-[#1c1c1c] px-4 text-left transition-colors ${
              i % 2 === 0 ? "bg-white/[0.06]" : "bg-transparent"
            } hover:bg-white/[0.09]`}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center">
              {q.solved && (
                <Check className="h-3.5 w-3.5 text-[#029727]" strokeWidth={3} />
              )}
            </span>
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
