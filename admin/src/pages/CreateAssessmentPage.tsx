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
import { classrooms, upcoming } from "../data/mockData"
import { useParams, useLocation } from "react-router-dom"
import { useNavigation } from "../hooks/useNavigation"

const PANEL = "rounded-xl border border-border-default bg-surface-base"
const FIELD =
  "w-full rounded-md border border-border-default bg-surface-base px-3 text-text-base text-text-primary placeholder:text-text-muted focus:border-border-default focus:outline-none"

// Extract unique classroom names for the mock
const uniqueClassrooms = Array.from(new Set(classrooms.map((c) => c.name)))

export function CreateAssessmentPage() {
  const { id } = useParams()
  const location = useLocation()
  const { navigate } = useNavigation()

  // Determine initial mode based on route
  const isEditRoute = location.pathname.endsWith("/edit")
  const initialMode = isEditRoute ? "edit" : (id ? "view" : "create")
  const initialDateProp = location.state?.initialDate

  const [mode, setMode] = useState<"create" | "view" | "edit">(initialMode)
  
  const assessmentId = id
  const initialDate = initialDateProp
  const onModeChange = setMode
  const onExit = () => navigate(-1)
  const readonly = mode === "view"
  const isLocked = assessmentId ? !upcoming.some((u) => u.id === assessmentId) : false

  const [draft, setDraft] = useState<AssessmentDraft>(() => {
    if (assessmentId && (mode === "view" || mode === "edit")) {
      const existing = upcoming.find(u => u.id === assessmentId)
      if (existing) {
        return {
          name: existing.name,
          classrooms: existing.classrooms,
          duration: existing.duration,
          scheduledDate: existing.scheduledDate,
          scheduledTime: existing.scheduledTime,
          scheduledEndDate: existing.scheduledEndDate || null,
          scheduledEndTime: existing.scheduledEndTime || null,
          selectedQuestionIds: existing.selectedQuestionIds,
          deliveryMode: existing.deliveryMode,
          questionsPerStudent: existing.questionsPerStudent,
        }
      }
    }
    return {
      name: "Data Structures Mid-Term",
      classrooms: ["CSE-A"],
      duration: 1800,
      scheduledDate: initialDate || "7 JUN 2025",
      scheduledTime: "10:00 AM",
      scheduledEndDate: null,
      scheduledEndTime: null,
      selectedQuestionIds: [1, 2, 4, 6, 9, 10], // Matches IDs in mock questions array
      deliveryMode: "Random",
      questionsPerStudent: 4,
    }
  })

  const updateDraft = (updates: Partial<AssessmentDraft>) => {
    if (mode === "view") return
    setDraft((prev) => ({ ...prev, ...updates }))
  }

  const handleSave = () => {
    if (mode === "edit" && assessmentId) {
      // For local session persistence, mutate the mock data array
      const idx = upcoming.findIndex(u => u.id === assessmentId)
      if (idx !== -1) {
        upcoming[idx] = {
          ...upcoming[idx],
          name: draft.name,
          classrooms: draft.classrooms,
          duration: draft.duration,
          scheduledDate: draft.scheduledDate || "TBD",
          scheduledTime: draft.scheduledTime || "TBD",
          scheduledEndDate: draft.scheduledEndDate || "TBD",
          scheduledEndTime: draft.scheduledEndTime || "TBD",
          selectedQuestionIds: draft.selectedQuestionIds,
          deliveryMode: draft.deliveryMode,
          questionsPerStudent: draft.questionsPerStudent,
        }
      }
      onModeChange?.("view")
    } else {
      onExit()
    }
  }

  const handleEdit = () => {
    onModeChange?.("edit")
  }

  const handleToggleQuestion = (id: number) => {
    if (mode === "view") return
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
    if (mode === "view") return
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
  }, [mode])

  const isDraft = !draft.scheduledDate || !draft.scheduledTime || !draft.scheduledEndDate || !draft.scheduledEndTime
  const isView = mode === "view"

  return (
    <div className="mx-auto w-full max-w-[888px] space-y-5 xl:max-w-screen-xl">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
            {mode === "create" ? "Create" : mode === "edit" ? "Edit" : "View"}
          </p>
          <h1 className="mt-1 text-text-2xl font-semibold leading-tight text-text-primary">
            {mode === "create" ? "Create Assessment" : mode === "edit" ? "Edit Assessment" : draft.name || "Assessment"}
          </h1>
        </div>
          {mode === "view" ? (
            isLocked ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={onExit}
                  className="shrink-0 cursor-pointer rounded-md border border-border-default bg-surface-base px-4 py-spacing-btn-y text-text-base font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]"
                >
                  Close
                </button>
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border-default bg-surface-base text-text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={onExit}
                  className="shrink-0 cursor-pointer rounded-md border border-border-default bg-surface-base px-4 py-spacing-btn-y text-text-base font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]"
                >
                  Close
                </button>
                <button
                  onClick={() => onModeChange?.("edit")}
                  className="shrink-0 cursor-pointer rounded-md bg-accent-base px-4 py-spacing-btn-y text-text-base font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Edit Assessment
                </button>
              </div>
            )
          ) : mode === "edit" ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onModeChange?.("view")}
                className="shrink-0 cursor-pointer rounded-md border border-border-default bg-surface-base px-4 py-spacing-btn-y text-text-base font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]"
              >
                Discard Changes
              </button>
              <button
                onClick={onExit}
                className="shrink-0 cursor-pointer rounded-md border border-border-default bg-surface-base px-4 py-spacing-btn-y text-text-base font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={onExit}
              className="shrink-0 cursor-pointer rounded-md border border-border-default bg-surface-base px-4 py-spacing-btn-y text-text-base font-medium text-text-secondary transition-colors hover:bg-bg-base/[0.1]"
            >
              Cancel
            </button>
          )}
      </div>

      {/* assessment details */}
      <div className={`${PANEL} p-5`}>
        <h2 className="mb-4 text-text-lg font-semibold text-text-primary">
          Assessment details
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_1px_320px]">
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-text-sm text-text-muted">
                Assessment name
              </p>
              <input
                value={draft.name}
                onChange={(e) => updateDraft({ name: e.target.value })}
                className={`${FIELD} h-10`}
                placeholder="e.g. Data Structures Mid-Term"
                readOnly={isView}
              />
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <p className="mb-1.5 text-text-sm text-text-muted">Duration</p>
                <DurationInput
                  valueSeconds={draft.duration}
                  onChange={(v) => updateDraft({ duration: v })}
                  readonly={isView}
                />
              </div>
              <div>
                <p className="mb-1.5 text-text-sm text-text-muted">Class</p>
                <ClassroomSelector
                  availableClassrooms={uniqueClassrooms}
                  selectedClassrooms={draft.classrooms}
                  onChange={(classes) => updateDraft({ classrooms: classes })}
                  readonly={isView}
                />
              </div>
            </div>
          </div>

          <div className="hidden bg-border-default lg:block" />

          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <p className="mb-1.5 text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
                    Start Date
                  </p>
                  <DatePicker
                    value={draft.scheduledDate}
                    onChange={(date) => updateDraft({ scheduledDate: date })}
                    readonly={isView}
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-1.5 text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
                    End Date
                  </p>
                  <DatePicker
                    value={draft.scheduledEndDate}
                    onChange={(date) => updateDraft({ scheduledEndDate: date })}
                    readonly={isView}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <p className="mb-1.5 text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
                    Start Time
                  </p>
                  <TimePicker
                    value={draft.scheduledTime}
                    onChange={(time) => updateDraft({ scheduledTime: time })}
                    readonly={isView}
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-1.5 text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
                    End Time
                  </p>
                  <TimePicker
                    value={draft.scheduledEndTime}
                    onChange={(time) => updateDraft({ scheduledEndTime: time })}
                    readonly={isView}
                  />
                </div>
              </div>
            </div>
            <p className="text-text-sm text-text-muted">
              Leave date and time as empty to keep as draft.
            </p>
            {isDraft && (
              <span className="inline-flex h-6 items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 text-text-xs font-medium text-amber-400">
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
          {!isView && (
            <div className={`${PANEL} overflow-hidden`}>
              <QuestionBankSelector
                selectedIds={draft.selectedQuestionIds}
                onToggle={handleToggleQuestion}
                readonly={isView}
              />
            </div>
          )}

          {/* pool */}
          <div className={`${PANEL} overflow-hidden ${isView ? 'col-span-1 xl:col-span-2' : ''}`}>
            <AssessmentPool
              selectedIds={draft.selectedQuestionIds}
              onToggle={handleToggleQuestion}
              readonly={isView}
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
          readonly={isView}
        />
      </div>

      {/* review */}
      <div className={`${PANEL} p-5`}>
        <AssessmentReview 
          draft={draft} 
          onSave={handleSave} 
          onCancel={onExit} 
          onEdit={handleEdit}
          mode={mode}
        />
      </div>
    </div>
  )
}
