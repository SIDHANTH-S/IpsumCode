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
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className={`${PANEL_BASE} min-w-0 space-y-5 p-5`}>
        <div>
          <FieldLabel htmlFor="question-title" required>
            Problem Title
          </FieldLabel>
          <div className="relative">
            <input
              id="question-title"
              value={draft.title}
              onChange={(event) => actions.setTitle(event.target.value.slice(0, TITLE_MAX_LENGTH))}
              onBlur={() => onFieldTouched("title")}
              placeholder="Enter a clear and concise title"
              aria-invalid={Boolean(titleError)}
              aria-describedby={titleError ? "question-title-error" : undefined}
              className={`w-full rounded-md border bg-white/[0.06] px-3 h-10 pr-14 text-[13px] text-white placeholder:text-[#8a8a8a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4aef]/50 ${
                titleError ? "border-[#ff9b9b]/50" : "border-white/10 focus:border-white/25"
              }`}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-white/35">
              {draft.title.length} / {TITLE_MAX_LENGTH}
            </span>
          </div>
          <InlineError id="question-title-error" message={titleError} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Difficulty</FieldLabel>
            <div
              role="radiogroup"
              aria-required="true"
              aria-label="Difficulty"
              aria-describedby={difficultyError ? "question-difficulty-error" : undefined}
              className="flex gap-2"
            >
              {DIFFICULTY_OPTIONS.map((option) => {
                const isSelected = draft.difficulty === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={isSelected || (!draft.difficulty && option.value === "Easy") ? 0 : -1}
                    onKeyDown={handleDifficultyKeyDown}
                    onClick={() => {
                      actions.setDifficulty(option.value as Difficulty)
                      onFieldTouched("difficulty")
                    }}
                    onBlur={() => onFieldTouched("difficulty")}
                    className={`flex h-8 items-center rounded-full border px-4 text-[12.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4aef]/60 ${
                      isSelected
                        ? "border-[#1cbaba]/50 bg-[#1cbaba]/10 text-[#1cbaba]"
                        : "border-white/10 bg-white/[0.06] text-white/65 hover:text-white/90"
                    }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            <InlineError id="question-difficulty-error" message={difficultyError} />
          </div>
          <div>
            <FieldLabel required>Topics / Tags</FieldLabel>
            <TopicPicker
              tags={draft.tags}
              suggestions={SUGGESTED_TOPICS}
              onAdd={(tag) => actions.addTag(tag)}
              onRemove={(tag) => actions.removeTag(tag)}
              error={tagsError}
            />
            {!tagsError && (
              <p className="mt-1.5 text-[11px] text-white/35" onClick={() => onFieldTouched("tags")}>
                Type to search, or press Enter to create a new topic.
              </p>
            )}
          </div>
        </div>

        <StatementEditor
          value={draft.statement}
          onChange={actions.setStatement}
          onBlur={() => onFieldTouched("statement")}
          error={statementError}
        />

      </div>

      <LivePreview draft={draft} />
    </div>
  )
}

