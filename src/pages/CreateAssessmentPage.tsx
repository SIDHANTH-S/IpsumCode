import { useState, useCallback } from "react"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { AssessmentDraft } from "../types"
import { Stepper } from "../components/ui"
import { ClassroomSelector } from "../components/assessment/ClassroomSelector"
import { DatePicker } from "../components/assessment/DatePicker"
import { TimePicker } from "../components/assessment/TimePicker"
import { DurationInput } from "../components/assessment/DurationInput"
import { QuestionBankSelector } from "../components/assessment/QuestionBankSelector"
import { AssessmentPool } from "../components/assessment/AssessmentPool"
import { QuestionDelivery } from "../components/assessment/QuestionDelivery"
import { AssessmentReview } from "../components/assessment/AssessmentReview"
import { classrooms } from "../data/mockData"

const PANEL = "rounded-xl border border-[#262626] bg-[#141414]"
const FIELD =
  "w-full rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none"

// Extract unique classroom names for the mock
const uniqueClassrooms = Array.from(new Set(classrooms.map((c) => c.name)))

export function CreateAssessmentPage({ onExit }: { onExit: () => void }) {
  const [draft, setDraft] = useState<AssessmentDraft>({
    name: "Data Structures Mid-Term",
    classrooms: ["CSE-A"],
    duration: 1800,
    scheduledDate: "7 JUN 2025",
    scheduledTime: "10:00 AM",
    selectedQuestionIds: [1, 2, 4, 6, 9, 10], // Matches IDs in mock questions array
    deliveryMode: "Random",
    questionsPerStudent: 4,
  })

  const updateDraft = (updates: Partial<AssessmentDraft>) => {
    setDraft((prev) => ({ ...prev, ...updates }))
  }

  const handleToggleQuestion = (id: number) => {
    setDraft((prev) => {
      const isSelected = prev.selectedQuestionIds.includes(id)
      const nextIds = isSelected
        ? prev.selectedQuestionIds.filter((x) => x !== id)
        : [...prev.selectedQuestionIds, id]

      // Cap questions per student if we remove questions
      const maxAvailable = nextIds.length
      const safePerStudent = Math.min(
        prev.questionsPerStudent,
        Math.max(1, maxAvailable),
      )

      return {
        ...prev,
        selectedQuestionIds: nextIds,
        questionsPerStudent: safePerStudent,
      }
    })
  }

  const handleDragEnd = useCallback((result: DropResult) => {
    const { source, destination, draggableId } = result

    if (!destination) return

    const match = draggableId.match(/-q-(\d+)/)
    if (!match) return
    const questionId = parseInt(match[1], 10)

    setDraft((prev) => {
      let nextIds = [...prev.selectedQuestionIds]
      const isCurrentlySelected = nextIds.includes(questionId)

      if (source.droppableId === "bank" && destination.droppableId === "pool") {
        if (!isCurrentlySelected) {
          nextIds.splice(destination.index, 0, questionId)
        }
      } else if (
        source.droppableId === "pool" &&
        destination.droppableId === "bank"
      ) {
        if (isCurrentlySelected) {
          nextIds = nextIds.filter((id) => id !== questionId)
        }
      } else if (
        source.droppableId === "pool" &&
        destination.droppableId === "pool"
      ) {
        nextIds = nextIds.filter((id) => id !== questionId)
        nextIds.splice(destination.index, 0, questionId)
      }

      const maxAvailable = nextIds.length
      const safePerStudent = Math.min(
        prev.questionsPerStudent,
        Math.max(1, maxAvailable),
      )

      return {
        ...prev,
        selectedQuestionIds: nextIds,
        questionsPerStudent: safePerStudent,
      }
    })
  }, [])

  const isDraft = !draft.scheduledDate || !draft.scheduledTime

  return (
    <div className="space-y-5">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.5px] text-white/40">
            Create
          </p>
          <h1 className="mt-1 text-[22px] font-semibold leading-tight text-white">
            Create Assessment
          </h1>
        </div>
        <button
          onClick={onExit}
          className="shrink-0 rounded-md border border-white/10 bg-white/[0.06] px-4 py-[9px] text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
        >
          Cancel
        </button>
      </div>

      {/* assessment details */}
      <div className={`${PANEL} p-5`}>
        <h2 className="mb-4 text-[15px] font-semibold text-white">
          Assessment details
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_1px_320px]">
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-[12px] text-white/55">
                Assessment name
              </p>
              <input
                value={draft.name}
                onChange={(e) => updateDraft({ name: e.target.value })}
                className={`${FIELD} h-10`}
                placeholder="e.g. Data Structures Mid-Term"
              />
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">Duration</p>
                <DurationInput
                  valueSeconds={draft.duration}
                  onChange={(v) => updateDraft({ duration: v })}
                />
              </div>
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">Class</p>
                <ClassroomSelector
                  availableClassrooms={uniqueClassrooms}
                  selectedClassrooms={draft.classrooms}
                  onChange={(classes) => updateDraft({ classrooms: classes })}
                />
              </div>
            </div>
          </div>

          <div className="hidden bg-white/[0.08] lg:block" />

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/45">
                  Date
                </p>
                <DatePicker
                  value={draft.scheduledDate}
                  onChange={(date) => updateDraft({ scheduledDate: date })}
                />
              </div>
              <div className="flex-1">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/45">
                  Time
                </p>
                <TimePicker
                  value={draft.scheduledTime}
                  onChange={(time) => updateDraft({ scheduledTime: time })}
                />
              </div>
            </div>
            <p className="text-[12px] text-white/45">
              Leave date and time as empty to keep as draft.
            </p>
            {isDraft && (
              <span className="inline-flex h-6 items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 text-[11px] font-medium text-amber-400">
                Draft
              </span>
            )}
          </div>
        </div>
      </div>

      {/* question selection */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* bank */}
          <div className={`${PANEL} overflow-hidden`}>
            <QuestionBankSelector
              selectedIds={draft.selectedQuestionIds}
              onToggle={handleToggleQuestion}
            />
          </div>

          {/* pool */}
          <div className={`${PANEL} overflow-hidden`}>
            <AssessmentPool
              selectedIds={draft.selectedQuestionIds}
              onToggle={handleToggleQuestion}
            />
          </div>
        </div>
      </DragDropContext>

      {/* question delivery */}
      <div
        className={`${PANEL} flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between`}
      >
        <QuestionDelivery
          deliveryMode={draft.deliveryMode}
          onChangeMode={(mode) => updateDraft({ deliveryMode: mode })}
          questionsPerStudent={draft.questionsPerStudent}
          onChangePerStudent={(count) =>
            updateDraft({ questionsPerStudent: count })
          }
          maxQuestions={draft.selectedQuestionIds.length}
        />
      </div>

      {/* review */}
      <div className={`${PANEL} p-5`}>
        <AssessmentReview draft={draft} onSave={onExit} onCancel={onExit} />
      </div>
    </div>
  )
}
