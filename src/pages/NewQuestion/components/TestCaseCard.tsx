import { ChevronDown, ChevronUp, Trash2 } from "lucide-react"

import type { HiddenTestCase, TestCase, TestCaseFieldErrors } from "../../../types"
import { CaseHeader,
  FieldLabel,
  HiddenBadge,
  SampleBadge,
  TextArea,
} from "../../../components/ui"

interface TestCaseCardProps {
  testCase: TestCase | HiddenTestCase
  kind: "sample" | "hidden"
  index: number
  errors?: TestCaseFieldErrors
  onUpdate: (patch: Partial<TestCase>) => void
  onToggleExpanded: () => void
  onRemove: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  canMoveUp: boolean
  canMoveDown: boolean
}

export function TestCaseCard({
  testCase,
  kind,
  index,
  errors,
  onUpdate,
  onToggleExpanded,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}: TestCaseCardProps) {
  const kindLabel = kind === "sample" ? "Test Case" : "Hidden Case"
  const baseTitle = `${kindLabel} ${index + 1}`
  const title = testCase.label.trim() ? `${baseTitle} — ${testCase.label.trim()}` : baseTitle
  const headerId = `${testCase.id}-header`
  const bodyId = `${testCase.id}-body`
  const isHidden = kind === "hidden"
  const hasError = Boolean(errors?.input || errors?.expectedOutput)

  return (
    <div
      className={`rounded-lg border bg-white/[0.02] ${
        hasError ? "border-[#ff9b9b]/40" : "border-white/10"
      }`}
    >
      <CaseHeader
        title={title}
        badge={isHidden ? <HiddenBadge /> : <SampleBadge />}
        expanded={testCase.isExpanded}
        onToggle={onToggleExpanded}
        controlsId={bodyId}
        headerId={headerId}
        right={
          <div className="flex items-center gap-1.5">
            <div className="flex items-center overflow-hidden rounded-md border border-white/10">
              <button
                type="button"
                aria-label={`Move ${title} up`}
                disabled={!canMoveUp}
                onClick={onMoveUp}
                className="grid h-7 w-7 place-items-center text-white/45 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-25 disabled:hover:bg-transparent"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Move ${title} down`}
                disabled={!canMoveDown}
                onClick={onMoveDown}
                className="grid h-7 w-7 place-items-center text-white/45 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-25 disabled:hover:bg-transparent"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              type="button"
              aria-label={`Delete ${title}`}
              onClick={onRemove}
              className="grid h-7 w-7 place-items-center rounded-md text-white/45 transition-colors hover:bg-[#ff9b9b]/10 hover:text-[#ff9b9b]"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        }
      />

      {testCase.isExpanded && (
        <div
          id={bodyId}
          role="region"
          aria-labelledby={headerId}
          className="space-y-4 border-t border-white/[0.06] px-4 py-4"
        >
          <div>
            <FieldLabel htmlFor={`${testCase.id}-label`}>Label (optional)</FieldLabel>
            <input
              id={`${testCase.id}-label`}
              value={testCase.label}
              onChange={(event) => onUpdate({ label: event.target.value })}
              placeholder="e.g. Basic case"
              className="w-full rounded-md border border-white/10 bg-white/[0.06] px-3 h-9 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4aef]/50"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <TextArea
              id={`${testCase.id}-input`}
              label="Input"
              value={testCase.input}
              onChange={(value) => onUpdate({ input: value })}
              placeholder={"4\n2 7 11 15\n9"}
              error={errors?.input}
              required
            />
            <TextArea
              id={`${testCase.id}-output`}
              label="Expected Output"
              value={testCase.expectedOutput}
              onChange={(value) => onUpdate({ expectedOutput: value })}
              placeholder="0 1"
              error={errors?.expectedOutput}
              required
            />
          </div>

          {kind === "sample" && (
            <div>
              <FieldLabel htmlFor={`${testCase.id}-explanation`}>Explanation (optional)</FieldLabel>
              <input
                id={`${testCase.id}-explanation`}
                value={testCase.explanation}
                onChange={(event) => onUpdate({ explanation: event.target.value })}
                placeholder="Why this input produces this output"
                className="w-full rounded-md border border-white/10 bg-white/[0.06] px-3 h-9 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4aef]/50"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}


