import React, { useState } from "react"
import { Search, Check, Filter, Gauge, Tag } from "lucide-react"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import { FilterMenu, ActiveFilter, FilterDefinition } from "../ui/FilterMenu"
import { QuestionSummary } from "../../services/api"

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#1cbaba",
  "Med.": "#ffb700",
  Hard: "#ef4743",
}

const availableFilters: FilterDefinition[] = [
  {
    id: "difficulty",
    label: "Difficulty",
    icon: Gauge,
    type: "multi-select",
    options: [
      { value: "Easy", label: "Easy" },
      { value: "Med.", label: "Medium" },
      { value: "Hard", label: "Hard" },
    ],
  },
  {
    id: "topics",
    label: "Topics",
    icon: Tag,
    type: "multi-select",
    options: [
      { value: "Array", label: "Array" },
      { value: "String", label: "String" },
      { value: "DP", label: "Dynamic Programming" },
    ],
  },
]

function DiffPill({ difficulty }: { difficulty: string }) {
  const color = DIFFICULTY_COLORS[difficulty]

  const getStyle = (hex: string) => {
    if (difficulty === "Easy") return "text-status-success"
    if (difficulty === "Med.") return "text-status-warning"
    return "text-status-danger-dark"
  }

  return (
    <span
      className={`w-12 text-right text-text-sm font-medium ${getStyle(color)}`}
    >
      {difficulty}
    </span>
  )
}

export function QuestionBankSelector({
  selectedIds,
  onToggle,
  readonly,
  questions,
}: {
  selectedIds: number[]
  onToggle: (id: number) => void
  readonly?: boolean
  questions: QuestionSummary[]
}) {
  const [query, setQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([
    {
      id: "default-diff",
      definitionId: "difficulty",
      operator: "is",
      value: [],
    },
    {
      id: "default-top",
      definitionId: "topics",
      operator: "is",
      value: [],
    },
  ])

  const filtered = questions.filter((q) => {
    if (query && !q.title.toLowerCase().includes(query.toLowerCase()))
      return false

    // Apply filters from activeFilters
    for (const filter of activeFilters) {
      if (filter.definitionId === "difficulty") {
        const values = Array.isArray(filter.value)
          ? filter.value
          : [filter.value]
        if (values.length > 0 && !values.includes(q.difficulty)) {
          return false
        }
      }
      // Note: tags like Array/String/DP are not in the mock question model,
      // so this is a simplified stub. In a real app we'd check q.tags.
    }

    return true
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-border-default px-4 py-3">
        <h3 className="text-text-md font-semibold text-text-primary">Question Bank</h3>
        <span className="text-text-xs text-text-muted">
          {questions.length} questions
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        <div className="relative min-w-[160px] flex-1">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-secondary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="h-8 w-full rounded-full bg-border-default pl-9 pr-4 text-text-base text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-border-default"
          />
        </div>
        <FilterMenu
          availableFilters={availableFilters}
          initialFilters={activeFilters}
          onApply={(filters) => setActiveFilters(filters)}
          trigger={
            <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-default text-text-muted transition-colors hover:text-text-primary cursor-pointer">
              <Filter className="h-3.5 w-3.5" />
            </button>
          }
        />
      </div>

      <div className="flex items-center justify-between border-y border-border-default px-4 py-2 text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
        <span>Question Title</span>
        <span>Difficulty</span>
      </div>

      <Droppable droppableId="bank">
        {(provided) => (
          <div
            className="max-h-[360px] flex-1 overflow-y-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filtered.map((q, i) => {
              const isSel = selectedIds.includes(q.num)
              return (
                <Draggable
                  key={`bank-${q.num}`}
                  draggableId={`bank-q-${q.num}`}
                  index={i}
                  isDragDisabled={readonly}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => !readonly && onToggle(q.num)}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.8 : 1,
                      }}
                      className={`flex h-10 w-full items-center justify-between px-4 text-left transition-colors ${readonly ? '' : 'cursor-pointer hover:bg-bg-base/[0.05]'} ${
                        i % 2 === 0 ? "bg-surface-base" : ""
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <div
                          className={`grid h-4 w-4 shrink-0 place-items-center rounded-radius-md border ${
                            isSel
                              ? "border-accent-base bg-accent-base"
                              : "border-border-default bg-transparent"
                          }`}
                        >
                          {isSel && (
                            <Check
                              className="h-3 w-3 text-text-primary"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                        <span
                          className={`truncate text-text-base ${
                            isSel ? "text-text-primary" : "text-text-secondary"
                          }`}
                        >
                          {q.title}
                        </span>
                      </div>
                      <DiffPill difficulty={q.difficulty} />
                    </div>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="border-t border-border-default px-4 py-2.5 text-text-xs text-text-muted">
        Showing {filtered.length} of {questions.length}
      </div>
    </div>
  )
}

// Exporting DiffPill so AssessmentPool can use it too
export { DiffPill }
