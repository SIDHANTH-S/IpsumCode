import React from "react"
import { AssessmentDraft } from "../../types"
import { BADGE_GRADIENTS } from "../../data/mockData"
import { CalendarWidget } from "./CalendarWidget"
import { ClockWidget } from "./ClockWidget"

interface AssessmentReviewProps {
  draft: AssessmentDraft
  onSave: () => void
  onCancel: () => void
  onEdit?: () => void
  mode?: "create" | "view" | "edit"
}

export function AssessmentReview({
  draft,
  onSave,
  onCancel,
  onEdit,
  mode = "create",
}: AssessmentReviewProps) {
  const isDraft = !draft.scheduledDate || !draft.scheduledTime

  const allRequiredFilled =
    draft.name.trim().length > 0 &&
    draft.classrooms.length > 0 &&
    draft.selectedQuestionIds.length > 0 &&
    draft.questionsPerStudent > 0 &&
    (!isDraft || (draft.scheduledDate === null && draft.scheduledTime === null))

  let dayName = "Day"
  let month = "Month"
  let date = "1"
  let timeStr = "12:00"
  let periodStr = "AM"

  if (!isDraft && draft.scheduledDate && draft.scheduledTime) {
    const d = new Date(draft.scheduledDate)
    if (!isNaN(d.getTime())) {
      dayName = d.toLocaleDateString("en-US", { weekday: "short" })
      month = d.toLocaleDateString("en-US", { month: "short" })
      date = d.getDate().toString()
    } else {
      const parts = draft.scheduledDate.split(" ")
      date = parts[0] || "1"
      month = parts[1] || "Month"
    }

    const timeMatch = draft.scheduledTime.match(/(\d{1,2}:\d{2})\s*(AM|PM)/i)
    if (timeMatch) {
      timeStr = timeMatch[1]
      periodStr = timeMatch[2].toUpperCase()
    } else {
      timeStr = draft.scheduledTime
    }
  }

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-text-base font-medium text-text-muted">
            Review before submitting
          </h3>
          <p className="mt-1 text-text-xl font-semibold text-text-primary">
            {draft.name || "Untitled Assessment"}
          </p>
        </div>
        {!isDraft && draft.scheduledDate && draft.scheduledTime && (
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <span className="text-text-xs font-medium uppercase tracking-[0.5px] text-text-muted">
              Schedule
            </span>
            <div className="flex items-center gap-2">
              <CalendarWidget dayName={dayName} month={month} date={date} />
              <div className="h-[68px] w-[68px]">
                <ClockWidget time={timeStr} period={periodStr} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-border-default pt-5 sm:grid-cols-2">
        {[
          { label: "Assessment", value: draft.name || "—" },
          {
            label: "Classes",
            value:
              draft.classrooms.length > 0 ? draft.classrooms.join(", ") : "—",
          },
          {
            label: "Questions",
            value: `${draft.selectedQuestionIds.length} selected · ${Math.floor(draft.duration / 60)}m ${draft.duration % 60}s est.`,
          },
          { label: "Question delivery", value: draft.deliveryMode },
        ].map((row) => (
          <div key={row.label} className="flex gap-6 text-text-base">
            <span className="w-32 shrink-0 text-text-muted">{row.label}</span>
            <span className="font-medium text-text-secondary">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-border-default pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2 text-text-sm text-text-secondary">
          <span
            className={`h-2 w-2 rounded-full ${
              allRequiredFilled ? "bg-emerald-500" : "bg-surface-raised"
            }`}
          />
          {allRequiredFilled
            ? "All required fields are filled"
            : "Missing required fields"}
        </span>
        {mode !== "view" && (
          <button
            onClick={onSave}
            disabled={!allRequiredFilled}
            className="cursor-pointer rounded-md bg-accent-base px-5 py-2.5 text-text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mode === "edit" ? "Save Changes" : isDraft ? "Save Draft" : "Schedule Assessment"}
          </button>
        )}
      </div>
    </>
  )
}
