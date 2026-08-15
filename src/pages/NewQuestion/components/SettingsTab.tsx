import { Fragment, useState } from "react"
import { Plus } from "lucide-react"

import type { QuestionDraft, QuestionStatus } from "../../../types"
import { FieldLabel, Menu, PANEL_BASE, Select } from "../../../components/ui"
import { AVAILABLE_LANGUAGES, MEMORY_LIMIT_OPTIONS, TIME_LIMIT_OPTIONS } from "../../../data/questionOptions"
import type { QuestionDraftActions } from "../hooks/useQuestionDraft"

const STATUS_OPTIONS: { value: QuestionStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
]

function formatTimestamp(value: string | null): string {
  if (!value) return "Not yet saved"
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  })
}

export function SettingsTab({
  draft,
  actions,
}: {
  draft: QuestionDraft
  actions: QuestionDraftActions
}) {
  const [openReferenceId, setOpenReferenceId] = useState<string | null>(null)

  const addableLanguages = AVAILABLE_LANGUAGES.filter(
    (name) => !draft.languages.some((lang) => lang.name === name)
  )

  return (
    <div className="space-y-5">
      <div className={`${PANEL_BASE} p-5`}>
        <h3 className="text-text-lg font-semibold text-white">Execution</h3>
        <p className="mt-1 text-text-sm text-white/45">
          Controls how the judge compiles and runs submissions.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="text-text-sm text-white/45">
                <th className="border-b border-white/8 pb-2.5 pr-4 font-normal">Language</th>
                <th className="border-b border-white/8 pb-2.5 pr-4 font-normal">
                  Reference Solution
                </th>
                <th className="border-b border-white/8 pb-2.5 font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              {draft.languages.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-4 text-text-base text-white/40">
                    No languages enabled yet. Add at least one so students can submit.
                  </td>
                </tr>
              )}
              {draft.languages.map((lang) => (
                <Fragment key={lang.id}>
                  <tr className="border-b border-white/6">
                    <td className="py-2.5 pr-4 text-text-base text-white/85">{lang.name}</td>
                    <td className="py-2.5 pr-4 text-text-base">
                      <span
                        className={
                          lang.hasReferenceSolution ? "text-status-success" : "text-white/35"
                        }
                      >
                        {lang.hasReferenceSolution ? "Added" : "Not added"}
                      </span>
                    </td>
                    <td className="py-2.5">
                      <span className="flex items-center gap-2 text-text-base text-accent-text">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenReferenceId((current) => (current === lang.id ? null : lang.id))
                          }
                          className="transition-colors hover:text-accent-text-muted"
                        >
                          {openReferenceId === lang.id
                            ? "Close"
                            : lang.hasReferenceSolution
                              ? "Edit"
                              : "Add reference solution"}
                        </button>
                        <span className="text-white/25">·</span>
                        <button
                          type="button"
                          onClick={() => actions.removeLanguage(lang.id)}
                          className="text-white/50 transition-colors hover:text-status-danger"
                        >
                          Remove
                        </button>
                      </span>
                    </td>
                  </tr>
                  {openReferenceId === lang.id && (
                    <tr className="border-b border-white/6">
                      <td colSpan={3} className="py-3">
                        <FieldLabel htmlFor={`${lang.id}-reference`}>
                          {lang.name} reference solution
                        </FieldLabel>
                        <textarea
                          id={`${lang.id}-reference`}
                          value={lang.referenceSolution}
                          onChange={(event) =>
                            actions.setReferenceSolution(lang.id, event.target.value)
                          }
                          rows={8}
                          placeholder={`A correct ${lang.name} solution, used to validate test cases.`}
                          className="w-full resize-y rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 font-mono text-text-sm leading-relaxed text-white/85 placeholder:text-text-muted focus:border-white/25 focus:outline-none"
                        />
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <Menu
          trigger={({ onClick, expanded }) => (
            <button
              type="button"
              onClick={onClick}
              aria-expanded={expanded}
              disabled={addableLanguages.length === 0}
              className="mt-4 flex items-center gap-1.5 rounded-md border border-accent-base/60 bg-accent-base/[0.18] px-3.5 py-2 text-text-sm font-medium text-accent-text-muted transition-colors hover:bg-accent-base/25 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              Add Languages
            </button>
          )}
          options={addableLanguages.map((name) => ({
            id: name,
            label: name,
            onSelect: () => actions.addLanguage(name),
          }))}
          emptyLabel="All supported languages are already added"
        />

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="time-limit">Time Limit</FieldLabel>
            <Select
              id="time-limit"
              className="text-white/85"
              value={String(draft.timeLimitSeconds)}
              onChange={(value) => actions.setTimeLimit(Number(value))}
              options={TIME_LIMIT_OPTIONS.map((seconds) => ({
                value: String(seconds),
                label: `${seconds} second${seconds === 1 ? "" : "s"}`,
              }))}
            />
          </div>
          <div>
            <FieldLabel htmlFor="memory-limit">Memory Limit</FieldLabel>
            <Select
              id="memory-limit"
              className="text-white/85"
              value={String(draft.memoryLimitMB)}
              onChange={(value) => actions.setMemoryLimit(Number(value))}
              options={MEMORY_LIMIT_OPTIONS.map((mb) => ({
                value: String(mb),
                label: `${mb} MB`,
              }))}
            />
          </div>
        </div>
      </div>

      <div className={`${PANEL_BASE} p-5`}>
        <h3 className="text-text-lg font-semibold text-white">Status &amp; Metadata</h3>
        <p className="mt-1 text-text-sm text-white/45">
          Publishing status is editable here; the rest is administrative
          information about this question.
        </p>

        <div className="mt-4">
          <FieldLabel>Status</FieldLabel>
          <div role="radiogroup" aria-label="Status" className="flex gap-2">
            {STATUS_OPTIONS.map((option) => {
              const isSelected = draft.status === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => actions.setStatus(option.value)}
                  className={`flex h-8 items-center rounded-full border px-4 text-text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-base/60 ${
                    isSelected
                      ? "border-accent-base/50 bg-accent-base/15 text-accent-text-muted"
                      : "border-white/10 bg-white/6 text-white/65 hover:text-white/90"
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>

        <dl className="mt-5">
          {[
            { label: "Question ID", value: draft.id ?? "Assigned on first save" },
            { label: "Created", value: formatTimestamp(draft.createdAt) },
            { label: "Last edited", value: formatTimestamp(draft.updatedAt) },
          ].map((item, index, all) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 py-2.5 text-text-base ${
                index < all.length - 1 ? "border-b border-white/6" : ""
              }`}
            >
              <dt className="w-40 shrink-0 text-white/45">{item.label}</dt>
              <dd className="font-medium text-white/85">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

