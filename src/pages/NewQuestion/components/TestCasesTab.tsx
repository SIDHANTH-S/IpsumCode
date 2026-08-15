import { Plus } from "lucide-react"

import type { FieldErrors, QuestionDraft } from "../../../types"
import { InlineError, PANEL_BASE } from "../../../components/ui"
import type { QuestionDraftActions } from "../hooks/useQuestionDraft"
import { TestCaseCard } from "./TestCaseCard"

export function TestCasesTab({
  draft,
  actions,
  errors,
  showErrors,
}: {
  draft: QuestionDraft
  actions: QuestionDraftActions
  errors: FieldErrors
  showErrors: boolean
}) {
  return (
    <div className="space-y-5">
      <div className={`${PANEL_BASE} p-5`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-white">
                General / Sample Test Cases
              </h3>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1.5 text-[11px] font-medium text-white/70">
                {draft.sampleTestCases.length}
              </span>
            </div>
            <p className="mt-1 text-[12px] text-white/45">
              Visible to students while solving — at least one is required to
              save this question.
            </p>
          </div>
          <button
            type="button"
            onClick={() => actions.addCase("sample")}
            className="flex shrink-0 items-center gap-1.5 rounded-md bg-[#5b4aef] px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Add Test Case
          </button>
        </div>

        {showErrors && <InlineError message={errors.sampleTestCases} />}

        <div className="space-y-2.5">
          {draft.sampleTestCases.map((testCase, index) => (
            <TestCaseCard
              key={testCase.id}
              kind="sample"
              index={index}
              testCase={testCase}
              errors={showErrors ? errors.sampleTestCaseItems[testCase.id] : undefined}
              onUpdate={(patch) => actions.updateCase("sample", testCase.id, patch)}
              onToggleExpanded={() => actions.toggleCaseExpanded("sample", testCase.id)}
              onRemove={() => actions.removeCase("sample", testCase.id)}
              onMoveUp={() => actions.moveCase("sample", testCase.id, "up")}
              onMoveDown={() => actions.moveCase("sample", testCase.id, "down")}
              canMoveUp={index > 0}
              canMoveDown={index < draft.sampleTestCases.length - 1}
            />
          ))}

          <button
            type="button"
            onClick={() => actions.addCase("sample")}
            className="w-full rounded-lg border border-dashed border-white/15 py-3 text-[12.5px] font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            + Add Another General Test Case
          </button>
        </div>
      </div>

      <div className={`${PANEL_BASE} p-5`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-white">Hidden Test Cases</h3>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1.5 text-[11px] font-medium text-white/70">
                {draft.hiddenTestCases.length}
              </span>
              <span className="flex h-[18px] items-center rounded bg-white/10 px-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] text-white/55">
                Optional
              </span>
            </div>
            <p className="mt-1 text-[12px] text-white/45">
              Used privately by the judge to evaluate submissions — never shown
              to students.
            </p>
          </div>
          <button
            type="button"
            onClick={() => actions.addCase("hidden")}
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[12.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Add Hidden Test Case
          </button>
        </div>

        {draft.hiddenTestCases.length === 0 ? (
          <p className="rounded-lg border border-dashed border-white/10 py-6 text-center text-[12.5px] text-white/35">
            No hidden test cases yet. They're optional, but stronger judges usually
            add a few edge cases students never see.
          </p>
        ) : (
          <div className="space-y-2.5">
            {draft.hiddenTestCases.map((testCase, index) => (
              <TestCaseCard
                key={testCase.id}
                kind="hidden"
                index={index}
                testCase={testCase}
                errors={showErrors ? errors.hiddenTestCaseItems[testCase.id] : undefined}
                onUpdate={(patch) => actions.updateCase("hidden", testCase.id, patch)}
                onToggleExpanded={() => actions.toggleCaseExpanded("hidden", testCase.id)}
                onRemove={() => actions.removeCase("hidden", testCase.id)}
                onMoveUp={() => actions.moveCase("hidden", testCase.id, "up")}
                onMoveDown={() => actions.moveCase("hidden", testCase.id, "down")}
                canMoveUp={index > 0}
                canMoveDown={index < draft.hiddenTestCases.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

