import { useState } from "react"
import { FilterMenu } from "../components/ui"

import {
  ArrowUpDown,
  Filter,
  Plus,
  Search,
  Tag,
  TrendingUp,
  Upload,
  Pencil,
  BarChart2,
} from "lucide-react"

import { adminApi, type QuestionSummary } from "../services/api"
import { useEffect } from "react"

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#1cbaba",
  "Med.": "#ffb700",
  Hard: "#ef4743",
}

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
  onEditQuestion,
}: {
  onNewQuestion: () => void
  onEditQuestion: (id: string) => void
}) {
  const [questions, setQuestions] = useState<QuestionSummary[]>([])
  
  useEffect(() => {
    adminApi.getQuestions().then(setQuestions).catch(console.error)
  }, [])

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
            Manage
          </p>
          <h1 className="mt-1 text-text-2xl font-semibold leading-tight text-text-primary">
            Question Bank
          </h1>
          <p className="mt-1 text-text-sm text-text-muted">
            {questions.length} questions <span className="mx-0.5">·</span> {questions.length} active{" "}
            <span className="mx-0.5">·</span> 0 archived
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <button className="flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-border-default bg-surface-base px-5 text-text-md font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]">
            <Upload className="h-3.5 w-3.5" />
            Import Questions
          </button>
          <button
            onClick={onNewQuestion}
            className="flex h-10 cursor-pointer items-center gap-1.5 rounded-lg bg-accent-base px-5 text-text-md font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
            New Question
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative min-w-[200px] flex-1">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search questions"
            className="h-8 w-full rounded-full bg-border-default pl-9 pr-4 text-text-md text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-border-default"
          />
        </div>
        <button className="flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-border-default px-3.5 text-text-base text-text-secondary transition-colors hover:bg-bg-base/[0.12]">
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </button>
        <FilterMenu
          trigger={
            <button className="relative flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-border-default px-3.5 text-text-base text-text-secondary transition-colors hover:bg-bg-base/[0.12]">
              <Filter className="h-3.5 w-3.5" />
              Filter
              <span className="absolute -right-1 -top-[3px] h-[5px] w-[5px] rounded-full bg-status-danger-dark" />
            </button>
          }
          availableFilters={AVAILABLE_FILTERS}
        />

        {/* 17/4018 Assigned indicator — hidden until assignment tracking is implemented
        <div className="ml-auto flex items-center gap-2 text-text-md text-text-secondary">
          <span className="grid h-4 w-4 place-items-center rounded-full border-2 border-[#635ce6]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-base" />
          </span>
          17/4018 Assigned
        </div>
        */}
      </div>

      <div className="flex flex-col gap-0.5">
        {questions.map((q, i) => (
          <div
            key={`${q.num}-${i}`}
            className={`group flex h-11 items-center gap-3 rounded border border-border-default px-4 text-left transition-colors ${
              i % 2 === 0 ? "bg-surface-base" : "bg-transparent"
            } hover:bg-bg-base/[0.09]`}
          >
            <span className="min-w-0 flex-1 truncate text-text-md font-semibold leading-5 text-text-primary">
              {q.num}. {q.title}
            </span>
            <span className="w-14 shrink-0 text-right text-text-md text-text-secondary tabular-nums">
              {q.acceptance}
            </span>
            <span
              className="w-14 shrink-0 text-right text-text-md font-medium"
              style={{ color: DIFFICULTY_COLORS[q.difficulty] }}
            >
              {q.difficulty}
            </span>
            <button
              onClick={() => q.id && onEditQuestion(q.id)}
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-md text-text-secondary opacity-0 transition-all hover:bg-surface-hover hover:text-text-primary group-hover:opacity-100"
              title="Edit Question"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
