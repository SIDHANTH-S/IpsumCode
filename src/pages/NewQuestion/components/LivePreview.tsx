import type { QuestionDraft } from "../../../types"
import { PANEL_BASE } from "../../../components/ui"
import { RenderMarkdown } from "../lib/markdown"

export function LivePreview({ draft }: { draft: QuestionDraft }) {
  const hasContent =
    draft.title.trim() ||
    draft.statement.trim() ||
    draft.inputFormat.trim() ||
    draft.outputFormat.trim() ||
    draft.constraints.trim()

  return (
    <aside
      aria-label="Live preview of the student-facing problem"
      className={`${PANEL_BASE} h-fit min-w-0 space-y-4 p-5`}
    >
      <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/40">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1cbaba]" aria-hidden="true" />
        Live Preview
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[17px] font-semibold leading-snug text-white">
          {draft.title.trim() || (
            <span className="text-white/35">Untitled problem</span>
          )}
        </h3>
        {draft.difficulty && (
          <span className="flex h-6 shrink-0 items-center rounded-full border border-[#1cbaba]/50 bg-[#1cbaba]/10 px-2.5 text-[11px] font-medium text-[#1cbaba]">
            {draft.difficulty}
          </span>
        )}
      </div>

      {draft.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {draft.tags.map((tag) => (
            <span
              key={tag}
              className="flex h-6 items-center rounded-md border border-white/10 bg-white/[0.05] px-2 text-[11px] text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {hasContent ? (
        <div className="space-y-4">
          <RenderMarkdown source={draft.statement} />
        </div>
      ) : (
        <p className="text-[13px] leading-relaxed text-white/35">
          Start filling in the problem details and the student-facing preview will
          appear here as you type.
        </p>
      )}
    </aside>
  )
}
