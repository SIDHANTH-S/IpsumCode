import type { KeyboardEvent } from "react"

import type { Difficulty, FieldErrors, QuestionDraft } from "../../../types"
import { FieldLabel, InlineError, PANEL_BASE, TextArea, TopicPicker } from "../../../components/ui"
import { DIFFICULTY_OPTIONS, SUGGESTED_TOPICS, TITLE_MAX_LENGTH } from "../../../data/questionOptions"
import type { QuestionDraftActions } from "../hooks/useQuestionDraft"
import { LivePreview } from "./LivePreview"
import { StatementEditor } from "./StatementEditor"

export type TouchableField = "title" | "difficulty" | "tags" | "statement"

interface ProblemDetailsTabProps {
  draft: QuestionDraft
  actions: QuestionDraftActions
  errors: FieldErrors
  touched: Set<TouchableField>
  showAllErrors: boolean
  onFieldTouched: (field: TouchableField) => void
}

function visibleError(
  field: TouchableField,
  errors: FieldErrors,
  touched: Set<TouchableField>,
  showAllErrors: boolean
): string | undefined {
  if (!touched.has(field) && !showAllErrors) return undefined
  return errors[field]
}

export function ProblemDetailsTab({
  draft,
  actions,
  errors,
  touched,
  showAllErrors,
  onFieldTouched,
}: ProblemDetailsTabProps) {
  const titleError = visibleError("title", errors, touched, showAllErrors)
  const difficultyError = visibleError("difficulty", errors, touched, showAllErrors)
  const tagsError = visibleError("tags", errors, touched, showAllErrors)
  const statementError = visibleError("statement", errors, touched, showAllErrors)

  const handleDifficultyKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const currentIndex = DIFFICULTY_OPTIONS.findIndex((opt) => opt.value === draft.difficulty)
    const delta = event.key === "ArrowRight" ? 1 : -1
    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + delta + DIFFICULTY_OPTIONS.length) % DIFFICULTY_OPTIONS.length
    const next = DIFFICULTY_OPTIONS[nextIndex]
    if (next) actions.setDifficulty(next.value)
  }

  return (
    <div className="flex flex-col space-y-6 pt-2">
      {/* Editor & Preview Split Workspace */}
      <StatementEditor
        value={draft.statement}
        onChange={actions.setStatement}
        onBlur={() => onFieldTouched("statement")}
        error={statementError}
      >
        <div className="p-5">
          <LivePreview draft={draft} />
        </div>
      </StatementEditor>
    </div>
  )
}

