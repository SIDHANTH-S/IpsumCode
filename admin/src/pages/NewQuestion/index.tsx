import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { useParams } from "react-router-dom"
import { AlertCircle, ChevronDown, ChevronRight } from "lucide-react"

import type { QuestionStatus, WorkspaceTab } from "../../types"
import { Menu, TabBar, TopicPicker } from "../../components/ui"
import { createEmptyDraft, SUGGESTED_TOPICS } from "../../data/questionOptions"
import { ProblemDetailsTab, type TouchableField } from "./components/ProblemDetailsTab"
import { SettingsTab } from "./components/SettingsTab"
import { TestCasesTab } from "./components/TestCasesTab"
import { useQuestionDraft } from "./hooks/useQuestionDraft"
import { validateDraft } from "./lib/validation"

import { useNavigation } from "../../hooks/useNavigation"
import { adminApi } from "../../services/api"

const WORKSPACE_TABS: readonly WorkspaceTab[] = ["Problem Details", "Test Cases", "Settings"]

export function NewQuestionPage() {
  const { id } = useParams()
  const { navigate } = useNavigation()
  const onExit = () => navigate(-1)
  const [tab, setTab] = useState<WorkspaceTab>("Problem Details")
  const { draft, actions } = useQuestionDraft(createEmptyDraft())

  const [loading, setLoading] = useState(!!id)
  const [touched, setTouched] = useState<Set<TouchableField>>(new Set())
  const [attemptedSave, setAttemptedSave] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)

  const validation = useMemo(() => validateDraft(draft), [draft])

  useEffect(() => {
    if (id) {
      adminApi.getQuestion(id).then(q => {
        const diffMap: any = { "EASY": "Easy", "MEDIUM": "Med.", "HARD": "Hard" };
        actions.loadDraft({
          id: q.id,
          title: q.title,
          statement: q.content,
          difficulty: diffMap[q.difficulty] || "Easy",
          timeLimitSeconds: q.timeLimitSeconds,
          memoryLimitMB: q.memoryLimitKb / 1024,
          tags: q.tags,
          sampleTestCases: q.testCases.filter((tc: any) => !tc.isHidden).map((tc: any) => ({
            id: tc.id,
            label: "Sample Case",
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            explanation: "",
            isExpanded: false
          })),
          hiddenTestCases: q.testCases.filter((tc: any) => tc.isHidden).map((tc: any) => ({
            id: tc.id,
            label: "Hidden Case",
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            explanation: "",
            isExpanded: false,
            weight: tc.weight || 1,
            isEnabled: true
          })),
          languages: q.languages.map((l: any) => ({
            id: l.languageCode.toLowerCase(),
            name: l.languageCode === "PYTHON" ? "Python" : l.languageCode === "CPP" ? "C++" : "Java",
            hasReferenceSolution: false,
            referenceSolution: ""
          })),
          status: "draft",
          inputFormat: "",
          outputFormat: "",
          constraints: "",
          createdAt: q.createdAt || new Date().toISOString(),
          updatedAt: q.updatedAt || new Date().toISOString()
        });
        setLoading(false);
      }).catch(console.error);
    }
  }, [id])

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

    const payload = {
      title: draft.title,
      content: draft.statement,
      difficulty: draft.difficulty,
      timeLimitSeconds: draft.timeLimitSeconds,
      memoryLimitKb: draft.memoryLimitMB * 1024,
      tags: draft.tags,
      testCases: [...draft.sampleTestCases, ...draft.hiddenTestCases],
      languages: draft.languages.map(l => l.name)
    }

    const promise = id 
      ? adminApi.updateQuestion(id, payload)
      : adminApi.createQuestion(payload)

    promise.then(() => {
      onExit()
    }).catch(console.error)
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
    <div className="mx-auto w-full max-w-[888px] space-y-5 xl:max-w-screen-xl">
      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <p className="text-text-muted">Loading question...</p>
        </div>
      ) : (
        <>
          <div className="pt-2 pb-4">
        <div className="flex gap-4 mb-4">
          <div className="grow">
            <input
              id="question-title"
              value={draft.title}
              onChange={(event) => actions.setTitle(event.target.value.slice(0, 150))}
              onBlur={() => markTouched("title")}
              placeholder="Enter your title"
              className="block w-full outline-none placeholder:text-text-muted border-none text-text-primary bg-transparent text-text-2xl font-semibold"
              autoComplete="off"
            />
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <button
              onClick={onExit}
              className="py-1.5 focus:outline-none inline-flex bg-surface-elevated hover:bg-surface-hover text-text-secondary h-8 items-center rounded-lg px-4 text-text-base font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSave()}
              className="py-1.5 focus:outline-none bg-accent-base hover:bg-accent-hover text-white flex h-8 items-center gap-1.5 rounded-lg px-4 text-text-base font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M22.707 1.293a1 1 0 01.237 1.037l-7 20a1 1 0 01-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 01.076-1.858l20-7a1 1 0 011.037.237zM12.193 13.22l2.696 6.068 4.72-13.483-7.416 7.416zm6.001-8.83L4.711 9.111l6.067 2.696 7.416-7.416z" clipRule="evenodd"></path>
              </svg>
              Post
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            role="radiogroup"
            aria-label="Difficulty"
            className="flex gap-2 mr-2"
          >
            {["Easy", "Medium", "Hard"].map((diff) => {
              const isSelected = draft.difficulty === diff
              return (
                <button
                  key={diff}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    actions.setDifficulty(diff as any)
                    markTouched("difficulty")
                  }}
                  className={`flex h-7 items-center rounded-full border px-3 text-text-xs font-medium transition-colors focus-visible:outline-none ${
                    isSelected
                      ? "border-status-success/50 bg-status-success/10 text-status-success"
                      : "border-border-default bg-surface-elevated text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {diff}
                </button>
              )
            })}
          </div>

          <div className="min-w-[200px]">
            <TopicPicker
              tags={draft.tags}
              suggestions={SUGGESTED_TOPICS}
              onAdd={(tag) => actions.addTag(tag)}
              onRemove={(tag) => actions.removeTag(tag)}
            />
          </div>
        </div>
      </div>

      {attemptedSave && !validation.isValid && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-status-danger/30 bg-status-danger/[0.06] px-4 py-3 text-text-base text-status-danger focus:outline-none"
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
        </>
      )}
    </div>
  )
}

