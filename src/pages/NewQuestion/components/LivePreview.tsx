import type { QuestionDraft } from "../../../types"
import { PANEL_BASE } from "../../../components/ui"
import { RenderMarkdown } from "../lib/markdown"

export function LivePreview({ draft }: { draft: QuestionDraft }) {
  const hasContent = draft.statement.trim()

  return (
    <aside
      aria-label="Live preview of the student-facing problem"
      className="h-full min-w-0"
    >
      {hasContent ? (
        <div className="space-y-4">
          <RenderMarkdown source={draft.statement} />
        </div>
      ) : (
        <p className="text-text-base leading-relaxed text-white/35">
          Start filling in the problem details and the student-facing preview will
          appear here as you type.
        </p>
      )}
    </aside>
  )
}

// force vite reload
