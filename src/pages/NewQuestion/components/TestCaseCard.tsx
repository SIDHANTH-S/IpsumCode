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
      className={`rounded-lg border bg-surface-base ${
        hasError ? "border-status-danger/40" : "border-border-default"
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
            <div className="flex items-center overflow-hidden rounded-md border border-border-default">
              <button
                type="button"
                aria-label={`Move ${title} up`}
                disabled={!canMoveUp}
                onClick={onMoveUp}
                className="grid h-7 w-7 place-items-center text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary disabled:opacity-25 disabled:hover:bg-transparent"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Move ${title} down`}
                disabled={!canMoveDown}
                onClick={onMoveDown}
                className="grid h-7 w-7 place-items-center text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary disabled:opacity-25 disabled:hover:bg-transparent"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              type="button"
              aria-label={`Delete ${title}`}
              onClick={onRemove}
              className="grid h-7 w-7 place-items-center rounded-md text-text-muted transition-colors hover:bg-status-danger/10 hover:text-status-danger"
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
          className="space-y-4 border-t border-border-default px-4 py-4"
        >


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


        </div>
      )}
    </div>
  )
}


