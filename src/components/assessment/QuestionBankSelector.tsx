import React, { useState } from "react"
import { Search, Check } from "lucide-react"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import { questions, DIFFICULTY_COLORS } from "../../data/mockData"
import { Difficulty } from "../../types"

const bankFilters = [
  "All",
  "Easy",
  "Med.",
  "Hard",
  "Array",
  "String",
  "DP",
] as const

function DiffPill({ difficulty }: { difficulty: Difficulty }) {
  const color = DIFFICULTY_COLORS[difficulty]

  const getStyle = (hex: string) => {
    if (difficulty === "Easy") return "text-[#1cbaba]"
    if (difficulty === "Med.") return "text-[#ffb700]"
    return "text-[#ef4743]"
  }

  return (
    <span
      className={`w-12 text-right text-[12px] font-medium ${getStyle(color)}`}
    >
      {difficulty}
    </span>
  )
}

export function QuestionBankSelector({
  selectedIds,
  onToggle,
}: {
  selectedIds: number[]
  onToggle: (id: number) => void
}) {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filtered = questions.filter((q) => {
    if (query && !q.title.toLowerCase().includes(query.toLowerCase()))
      return false
    if (
      activeFilter === "Easy" ||
      activeFilter === "Med." ||
      activeFilter === "Hard"
    ) {
      return q.difficulty === activeFilter
    }
    // Note: tags like Array/String/DP are not in the mock question model,
    // so this is a simplified stub. In a real app we'd check q.tags.includes(activeFilter).
    return true
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <h3 className="text-[14px] font-semibold text-white">Question Bank</h3>
        <span className="text-[11px] text-white/45">
          {questions.length} questions
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 py-3">
        <div className="relative min-w-[160px] flex-1">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="h-8 w-full rounded-full bg-white/[0.08] pl-9 pr-4 text-[13px] text-white placeholder:text-[#a8a8a8] focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {bankFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex h-7 items-center rounded-full px-3 text-[12px] font-medium transition-colors ${
                activeFilter === f
                  ? "bg-[#635ce6] text-white"
                  : "border border-white/10 bg-white/[0.06] text-white/65 hover:text-white/90"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-y border-white/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.5px] text-white/40">
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
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => onToggle(q.num)}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.8 : 1,
                      }}
                      className={`flex h-10 w-full items-center justify-between px-4 text-left transition-colors cursor-pointer hover:bg-white/[0.05] ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <div
                          className={`grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border ${
                            isSel
                              ? "border-[#5b4aef] bg-[#5b4aef]"
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {isSel && (
                            <Check
                              className="h-3 w-3 text-white"
                              strokeWidth={3}
                            />
                          )}
                        </div>
                        <span
                          className={`truncate text-[13px] ${
                            isSel ? "text-white" : "text-white/85"
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

      <div className="border-t border-white/[0.06] px-4 py-2.5 text-[11px] text-white/40">
        Showing {filtered.length} of {questions.length}
      </div>
    </div>
  )
}

// Exporting DiffPill so AssessmentPool can use it too
export { DiffPill }
