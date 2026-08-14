import React from "react"
import { AssessmentDraft } from "../../types"
import { BADGE_GRADIENTS } from "../../data/mockData"

interface AssessmentReviewProps {
  draft: AssessmentDraft
  onSave: () => void
  onCancel: () => void
}

export function AssessmentReview({
  draft,
  onSave,
  onCancel,
}: AssessmentReviewProps) {
  const isDraft = !draft.scheduledDate || !draft.scheduledTime

  const allRequiredFilled =
    draft.name.trim().length > 0 &&
    draft.classrooms.length > 0 &&
    draft.selectedQuestionIds.length > 0 &&
    draft.questionsPerStudent > 0 &&
    (!isDraft || (draft.scheduledDate === null && draft.scheduledTime === null))

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[13px] font-medium text-white/55">
            Review before submitting
          </h3>
          <p className="mt-1 text-[20px] font-semibold text-white">
            {draft.name || "Untitled Assessment"}
          </p>
        </div>
        {!isDraft && draft.scheduledDate && draft.scheduledTime && (
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.5px] text-white/45">
                {draft.scheduledDate.split(" ").slice(1, 2).join(" ") || "Date"}
              </span>
              <span className="text-[18px] font-bold leading-none text-white">
                {draft.scheduledDate.split(" ")[0]}
              </span>
            </div>
            <div
              className="grid h-[52px] w-[68px] place-items-center rounded-lg text-[17px] font-bold text-white"
              style={{ background: BADGE_GRADIENTS.purple }}
            >
              {draft.scheduledTime.replace(/\s*(AM|PM)/i, "")}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/[0.06] pt-5 sm:grid-cols-2">
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
          {
            label: "Schedule",
            value: isDraft
              ? "Draft — not scheduled"
              : `${draft.scheduledDate} · ${draft.scheduledTime}`,
          },
          { label: "Question delivery", value: draft.deliveryMode },
        ].map((row) => (
          <div key={row.label} className="flex gap-6 text-[13px]">
            <span className="w-32 shrink-0 text-white/45">{row.label}</span>
            <span className="font-medium text-white/85">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2 text-[12px] text-white/60">
          <span
            className={`h-2 w-2 rounded-full ${
              allRequiredFilled ? "bg-emerald-500" : "bg-white/20"
            }`}
          />
          {allRequiredFilled
            ? "All required fields are filled"
            : "Missing required fields"}
        </span>
        <button
          onClick={onSave}
          disabled={!allRequiredFilled}
          className="rounded-md bg-[#5b4aef] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDraft ? "Save Draft" : "Schedule Assessment"}
        </button>
      </div>
    </>
  )
}
