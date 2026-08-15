import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { AlertCircle, ChevronDown, ChevronRight } from "lucide-react"

import type { QuestionStatus, WorkspaceTab } from "../../types"
import { Menu, TabBar } from "../../components/ui"
import { createEmptyDraft } from "../../data/questionOptions"
import { ProblemDetailsTab, type TouchableField } from "./components/ProblemDetailsTab"
import { SettingsTab } from "./components/SettingsTab"
import { TestCasesTab } from "./components/TestCasesTab"
import { useQuestionDraft } from "./hooks/useQuestionDraft"
import { validateDraft } from "./lib/validation"

const WORKSPACE_TABS: readonly WorkspaceTab[] = ["Problem Details", "Test Cases", "Settings"]

export function NewQuestionPage({ onExit }: { onExit: () => void }) {
  const [tab, setTab] = useState<WorkspaceTab>("Problem Details")
  const { draft, actions } = useQuestionDraft(createEmptyDraft())

  const [touched, setTouched] = useState<Set<TouchableField>>(new Set())
  const [attemptedSave, setAttemptedSave] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)

  const validation = useMemo(() => validateDraft(draft), [draft])

  useEffect(() => {
    if (attemptedSave && !validation.isValid) {
      summaryRef.current?.focus()
    }
  }, [attemptedSave, validation.isValid])

  function markTouched(field: TouchableField) {
    setTouched((prev) => (prev.has(field) ? prev : new Set(prev).add(field)))
  }

  function handleSave(nextStatus?: QuestionStatus) {
    if (nextStatus) actions.setStatus(nextStatus)

    if (!validation.isValid) {
      setAttemptedSave(true)
      const firstInvalidTab = WORKSPACE_TABS.find((t) => validation.tabsWithErrors[t])
      if (firstInvalidTab) setTab(firstInvalidTab)
      return
    }

    // Swap this for a real API/Supabase call — `draft` is already the full
    // typed payload, so the UI layer doesn't need to change when it does.
    onExit()
  }

  const errorCount =
    (validation.errors.title ? 1 : 0) +
    (validation.errors.difficulty ? 1 : 0) +
    (validation.errors.tags ? 1 : 0) +
    (validation.errors.statement ? 1 : 0) +
    (validation.errors.sampleTestCases ? 1 : 0) +
    Object.keys(validation.errors.sampleTestCaseItems).length +
    Object.keys(validation.errors.hiddenTestCaseItems).length

  const tabContent: Record<WorkspaceTab, ReactNode> = {
    "Problem Details": (
      <ProblemDetailsTab
        draft={draft}
        actions={actions}
        errors={validation.errors}
        touched={touched}
        showAllErrors={attemptedSave}
        onFieldTouched={markTouched}
      />
    ),
    "Test Cases": (
      <TestCasesTab
        draft={draft}
        actions={actions}
        errors={validation.errors}
        showErrors={attemptedSave}
      />
    ),
    Settings: <SettingsTab draft={draft} actions={actions} />,
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <nav className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/40">
            <span>Manage</span>
            <ChevronRight className="h-3 w-3" />
            <button onClick={onExit} className="transition-colors hover:text-white/70">
              Question Bank
            </button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">New Question</span>
          </nav>
          <h1 className="mt-1.5 text-[22px] font-semibold leading-tight text-white">
            New Question
          </h1>
          <p className="mt-1 text-[12px] text-white/50">
            Create a new coding question for your question bank
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <button
            onClick={onExit}
            className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-[9px] text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
          >
            Cancel
          </button>
          <div className="flex overflow-hidden rounded-md">
            <button
              onClick={() => handleSave()}
              className="bg-[#5b4aef] px-4 py-[9px] text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
            >
              Save Question
            </button>
            <Menu
              align="end"
              trigger={({ onClick, expanded }) => (
                <button
                  onClick={onClick}
                  aria-label="More save options"
                  aria-expanded={expanded}
                  className="grid h-full w-8 place-items-center border-l border-white/15 bg-[#5b4aef] text-white transition-colors hover:bg-[#4d3ee0]"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}
              options={[
                { id: "draft", label: "Save as Draft", onSelect: () => handleSave("draft") },
                { id: "published", label: "Save & Publish", onSelect: () => handleSave("published") },
              ]}
            />
          </div>
        </div>
      </div>

      {attemptedSave && !validation.isValid && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-[#ff9b9b]/30 bg-[#ff9b9b]/[0.06] px-4 py-3 text-[13px] text-[#ff9b9b] focus:outline-none"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {errorCount} {errorCount === 1 ? "issue needs" : "issues need"} attention before this
            question can be saved.
          </span>
        </div>
      )}

      <TabBar
        idPrefix="question"
        tabs={WORKSPACE_TABS}
        activeTab={tab}
        onChange={setTab}
        errorTabs={attemptedSave ? validation.tabsWithErrors : undefined}
      />

      {WORKSPACE_TABS.map((t) => (
        <div
          key={t}
          id={`question-panel-${t}`}
          role="tabpanel"
          aria-labelledby={`question-tab-${t}`}
          hidden={tab !== t}
        >
          {tab === t && tabContent[t]}
        </div>
      ))}
    </div>
  )
}

