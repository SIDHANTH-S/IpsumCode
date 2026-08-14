import React from "react"
import { GripVertical, X, ArrowRight } from "lucide-react"
import { Droppable, Draggable } from "@hello-pangea/dnd"
import { questions } from "../../data/mockData"
import { DiffPill } from "./QuestionBankSelector"

export function AssessmentPool({
  selectedIds,
  onToggle,
  readonly,
}: {
  selectedIds: number[]
  onToggle: (id: number) => void
  readonly?: boolean
}) {
  const selectedQuestions = selectedIds
    .map((id) => questions.find((q) => q.num === id))
    .filter((q): q is typeof questions[number] => Boolean(q))

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <h3 className="text-[14px] font-semibold text-white">
          Assessment Pool
        </h3>
        <span className="flex h-5 items-center rounded-full bg-[#5b4aef]/25 px-2 text-[11px] font-medium text-[#b3a8ff]">
          {selectedQuestions.length} added
        </span>
      </div>
      {!readonly && (
        <p className="border-b border-white/[0.06] px-4 py-2 text-[11px] text-white/40">
          Drag questions from the left to add them here
        </p>
      )}

      <Droppable droppableId="pool">
        {(provided) => (
          <div
            className="max-h-[404px] flex-1 overflow-y-auto px-2 py-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {selectedQuestions.length === 0 ? (
              <div className="flex h-full min-h-[200px] items-center justify-center text-[12px] text-white/30">
                {readonly ? "No questions selected." : "Drag new questions here."}
              </div>
            ) : (
              <div className="space-y-1.5">
                {selectedQuestions.map((q, i) => (
                  <Draggable
                    key={`pool-${q.num}`}
                    draggableId={`pool-q-${q.num}`}
                    index={i}
                    isDragDisabled={readonly}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          opacity: snapshot.isDragging ? 0.8 : 1,
                        }}
                        className={`flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-2 ${
                          snapshot.isDragging ? "shadow-xl shadow-black/50" : ""
                        }`}
                      >
                        {!readonly && (
                          <div
                            {...provided.dragHandleProps}
                            className="shrink-0 flex items-center justify-center"
                          >
                            <GripVertical className="h-4 w-4 cursor-grab text-white/25" />
                          </div>
                        )}
                        <span className="w-4 shrink-0 text-[11px] text-white/35 tabular-nums">
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[13px] text-white/85">
                          {q.title}
                        </span>
                        <DiffPill difficulty={q.difficulty} />
                        {!readonly && (
                          <button
                            onClick={() => onToggle(q.num)}
                            className="grid h-6 w-6 shrink-0 place-items-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
        <span className="text-[11px] text-white/45">
          {selectedQuestions.length} questions selected
        </span>
        {!readonly && (
          <button className="flex items-center gap-1.5 rounded-md bg-[#5b4aef] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]">
            Confirm <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}
