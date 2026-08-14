import { useState } from "react"

import { ChevronRight, ChevronDown, X, Plus } from "lucide-react"

import { WorkspaceTab } from "../../types"

import {
  FieldLabel,
  Select,
  CaseHeader,
  SampleBadge,
  TextArea,
  WeightToggle,
} from "../components/ui"

import {
  tagChips,
  editorTools,
  problemStatement,
  problemSections,
  previewTags,
  executionLanguages,
  metadata,
} from "../data/mockData"

const workspaceTabs: WorkspaceTab[] = [
  "Problem Details",

  "Test Cases",

  "Settings",
]

const PANEL = "rounded-xl border border-[#262626] bg-[#141414]"

const FIELD =
  "w-full rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none"

function ProblemDetailsTab() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className={`${PANEL} min-w-0 space-y-5 p-5`}>
        <div>
          <FieldLabel required>Problem Title</FieldLabel>
          <div className="relative">
            <input
              className={`${FIELD} h-10 pr-14`}
              placeholder="Enter a clear and concise title"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-white/35">
              0 / 150
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel required>Difficulty</FieldLabel>
            <Select placeholder="Select difficulty" className="w-full" />
            <div className="mt-2.5 flex gap-2">
              <button className="flex h-8 items-center rounded-full border border-[#1cbaba]/50 bg-[#1cbaba]/10 px-4 text-[12.5px] font-medium text-[#1cbaba]">
                Easy
              </button>
              <button className="flex h-8 items-center rounded-full border border-white/10 bg-white/[0.06] px-4 text-[12.5px] font-medium text-white/65 transition-colors hover:text-white/90">
                Medium
              </button>
              <button className="flex h-8 items-center rounded-full border border-white/10 bg-white/[0.06] px-4 text-[12.5px] font-medium text-white/65 transition-colors hover:text-white/90">
                Hard
              </button>
            </div>
          </div>
          <div>
            <FieldLabel required>Topics / Tags</FieldLabel>
            <Select placeholder="Select or create topics" className="w-full" />
            <div className="mt-2.5 flex flex-wrap gap-2">
              {tagChips.map((tag) => (
                <span
                  key={tag}
                  className="flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] pl-3 pr-2 text-[12.5px] font-medium text-white/80"
                >
                  {tag}
                  <button className="text-white/40 transition-colors hover:text-white">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <FieldLabel required>Problem Statement</FieldLabel>
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
            <div className="flex flex-wrap items-center gap-0.5 border-b border-white/10 px-2 py-1.5">
              {editorTools.map(({ icon: Icon, label }, i) => (
                <button
                  key={`${label}-${i}`}
                  aria-label={label}
                  className="grid h-7 w-7 place-items-center rounded text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </button>
              ))}
              <button className="ml-auto rounded border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/80 transition-colors hover:bg-white/10">
                Preview
              </button>
            </div>
            <div className="space-y-3 px-4 py-3.5 text-[13px] leading-relaxed text-white/80">
              {problemStatement.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {problemSections.map((s) => (
                <div key={s.heading} className="space-y-1.5">
                  <p className="font-semibold text-white">{s.heading}</p>
                  {s.body && <p>{s.body}</p>}
                  {s.bullets && (
                    <ul className="space-y-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className={`${PANEL} h-fit min-w-0 p-5`}>
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-[17px] font-semibold text-white">Two Sum</h3>
          <span className="flex h-6 items-center rounded-full border border-[#1cbaba]/50 bg-[#1cbaba]/10 px-2.5 text-[11px] font-medium text-[#1cbaba]">
            Easy
          </span>
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {previewTags.map((t) => (
            <span
              key={t}
              className="flex h-6 items-center rounded-md border border-white/10 bg-white/[0.05] px-2 text-[11px] text-white/65"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="space-y-3 text-[13px] leading-relaxed text-white/75">
          {problemStatement.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {problemSections.map((s) => (
            <div key={s.heading} className="space-y-1.5">
              <p className="font-semibold text-white">{s.heading}</p>
              {s.body && <p>{s.body}</p>}
              {s.bullets && (
                <ul className="space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/35" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

function TestCasesTab() {
  return (
    <div className="space-y-5">
      <div className={`${PANEL} p-5`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-white">
                General / Sample Test Cases
              </h3>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1.5 text-[11px] font-medium text-white/70">
                2
              </span>
            </div>
            <p className="mt-1 text-[12px] text-white/45">
              Visible to students while solving — at least one is required to
              save this question.
            </p>
          </div>
          <button className="flex shrink-0 items-center gap-1.5 rounded-md bg-[#5b4aef] px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]">
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Add Test Case
          </button>
        </div>

        <div className="space-y-2.5">
          <div className="rounded-lg border border-white/10 bg-white/[0.02]">
            <CaseHeader title="Test Case 1" badge={<SampleBadge />} expanded />
            <div className="space-y-4 border-t border-white/[0.06] px-4 py-4">
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">
                  Label (optional)
                </p>
                <input className={`${FIELD} h-9`} defaultValue="Basic case" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TextArea label="Input" value={"4\n2 7 11 15\n9"} />
                <TextArea label="Expected Output" value="0 1" />
              </div>
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">
                  Explanation (optional)
                </p>
                <input
                  className={`${FIELD} h-9`}
                  defaultValue="nums[0] + nums[1] = 2 + 7 = 9 = target, so the answer is indices 0 and 1."
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.02]">
            <CaseHeader title="Test Case 2" badge={<SampleBadge />} />
          </div>

          <button className="w-full rounded-lg border border-dashed border-white/15 py-3 text-[12.5px] font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white">
            + Add Another General Test Case
          </button>
        </div>
      </div>

      <div className={`${PANEL} p-5`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-white">
                Hidden Test Cases
              </h3>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1.5 text-[11px] font-medium text-white/70">
                3
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
          <button className="flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[12.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Add Hidden Test Case
          </button>
        </div>

        <div className="space-y-2.5">
          <div className="rounded-lg border border-white/10 bg-white/[0.02]">
            <CaseHeader
              title="Hidden Case 1"
              right={<WeightToggle weight={1} enabled />}
              expanded
            />
            <div className="border-t border-white/[0.06] px-4 py-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <TextArea label="Input" value={"6\n3 2 4 -1 6 -8\n5"} />
                <TextArea label="Expected Output" value="1 2" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02]">
            <CaseHeader
              title="Hidden Case 2"
              right={<WeightToggle weight={1} enabled />}
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02]">
            <CaseHeader
              title="Hidden Case 3 — Large N stress test"
              right={<WeightToggle weight={2} enabled={false} />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-5">
      <div className={`${PANEL} p-5`}>
        <h3 className="text-[15px] font-semibold text-white">Execution</h3>
        <p className="mt-1 text-[12px] text-white/45">
          Controls how the judge compiles and runs submissions.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left">
            <thead>
              <tr className="text-[12px] text-white/45">
                <th className="border-b border-white/[0.08] pb-2.5 pr-4 font-normal">
                  Language
                </th>
                <th className="border-b border-white/[0.08] pb-2.5 font-normal">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {executionLanguages.map((lang) => (
                <tr key={lang.name} className="border-b border-white/[0.06]">
                  <td className="py-2.5 pr-4 text-[13px] text-white/85">
                    {lang.name}
                  </td>
                  <td className="py-2.5">
                    <span className="flex items-center gap-2 text-[13px] text-[#7c6cf5]">
                      {lang.actions.map((a, i) => (
                        <span key={a} className="flex items-center gap-2">
                          {i > 0 && <span className="text-white/25">·</span>}
                          <button className="transition-colors hover:text-[#9b8dff]">
                            {a}
                          </button>
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-4 flex items-center gap-1.5 rounded-md border border-[#5b4aef]/60 bg-[#5b4aef]/[0.18] px-3.5 py-2 text-[12.5px] font-medium text-[#b3a8ff] transition-colors hover:bg-[#5b4aef]/25">
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
          Add Languages
        </button>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel>Time Limit</FieldLabel>
            <Select placeholder="2 seconds" className="w-full text-white/85" />
          </div>
          <div>
            <FieldLabel>Memory Limit</FieldLabel>
            <Select placeholder="256 MB" className="w-full text-white/85" />
          </div>
        </div>
      </div>

      <div className={`${PANEL} p-5`}>
        <h3 className="text-[15px] font-semibold text-white">Metadata</h3>
        <p className="mt-1 text-[12px] text-white/45">
          Read-only administrative information about this question.
        </p>
        <dl className="mt-4">
          {metadata.map((m, i) => (
            <div
              key={m.label}
              className={`flex items-center gap-4 py-2.5 text-[13px] ${
                i < metadata.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <dt className="w-40 shrink-0 text-white/45">{m.label}</dt>
              <dd className="font-medium text-white/85">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export function NewQuestionPage({ onExit }: { onExit: () => void }) {
  const [tab, setTab] = useState<WorkspaceTab>("Problem Details")

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <nav className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/40">
            <span>Manage</span>
            <ChevronRight className="h-3 w-3" />
            <button
              onClick={onExit}
              className="transition-colors hover:text-white/70"
            >
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
              onClick={onExit}
              className="bg-[#5b4aef] px-4 py-[9px] text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
            >
              Save Question
            </button>
            <button className="grid w-8 place-items-center border-l border-white/15 bg-[#5b4aef] text-white transition-colors hover:bg-[#4d3ee0]">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-1 rounded-lg border border-[#262626] bg-white/[0.03] p-1">
        {workspaceTabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative flex-1 rounded-md px-4 py-2.5 text-[13px] font-medium transition-colors sm:flex-none ${
              tab === t
                ? "bg-white/[0.06] text-white"
                : "text-white/55 hover:text-white/85"
            }`}
          >
            {t}
            {tab === t && (
              <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-[#5b4aef]" />
            )}
          </button>
        ))}
      </div>

      {tab === "Problem Details" && <ProblemDetailsTab />}
      {tab === "Test Cases" && <TestCasesTab />}
      {tab === "Settings" && <SettingsTab />}
    </div>
  )
}
