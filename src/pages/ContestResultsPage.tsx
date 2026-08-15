import React, { useMemo, useState } from "react"
import {
  ChevronLeft,
  Search,
  Filter,
  ChevronRight,
  FileCode,
  CheckCircle2,
  XCircle,
  Clock,
  ListOrdered,
  Calendar,
  ChevronDown,
  Users,
  Target,
  AlertTriangle,
  AlertCircle,
  Circle,
} from "lucide-react"
import {
  mockContestRanking,
  mockStudentTimeline,
  mockStudentQuestions,
} from "../data/mockData"
import { useParams, useNavigate } from "react-router-dom"

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"

const PAGE_SIZE = 10

/** Maps a timeline event's status to an icon + color so the signal never rests on color alone. */
const TIMELINE_STATUS_META: Record<
  string,
  { icon: typeof CheckCircle2; dot: string; ring: string; label: string }
> = {
  success: {
    icon: CheckCircle2,
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/30",
    label: "Success",
  },
  warning: {
    icon: AlertCircle,
    dot: "bg-amber-500",
    ring: "ring-amber-500/30",
    label: "Warning",
  },
  default: {
    icon: Circle,
    dot: "bg-indigo-500",
    ring: "ring-indigo-500/30",
    label: "Activity",
  },
}

/** Maps a submission result string to an icon + color, same reasoning as above. */
function resultMeta(result: string) {
  if (result === "Accepted") {
    return { icon: CheckCircle2, className: "text-emerald-400" }
  }
  if (result.includes("Error") || result === "Wrong Answer") {
    return { icon: XCircle, className: "text-red-400" }
  }
  return { icon: AlertTriangle, className: "text-amber-400" }
}

function buildPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = new Set([1, 2, total - 1, total, current - 1, current, current + 1])
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)
  const out: (number | "ellipsis")[] = []
  sorted.forEach((p, i) => {
    if (i > 0 && p - (sorted[i - 1] as number) > 1) out.push("ellipsis")
    out.push(p)
  })
  return out
}

function ContestRankingReport({
  contestId,
  onViewStudent,
  onBack,
}: {
  contestId: string
  onViewStudent: (id: string) => void
  onBack: () => void
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return mockContestRanking
    return mockContestRanking.filter(
      (row) =>
        row.name.toLowerCase().includes(q) || row.cls.toLowerCase().includes(q),
    )
  }, [searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE))
  const safePage = Math.min(currentPage, totalPages)
  const startIdx = (safePage - 1) * PAGE_SIZE
  const pageRows = filteredRows.slice(startIdx, startIdx + PAGE_SIZE)
  const pageNumbers = buildPageList(safePage, totalPages)

  return (
    <div className="space-y-6">
      {/* Header Context */}
      <div className="flex flex-wrap items-center gap-4 border-b border-neutral-800 pb-4 min-h-[32px]">
        <button
          onClick={onBack}
          className={`flex cursor-pointer items-center gap-1.5 rounded-md text-sm font-medium text-neutral-400 hover:text-white transition-colors ${FOCUS_RING}`}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <div className="h-4 w-px bg-neutral-800" aria-hidden="true" />
        <h1 className="text-lg font-bold text-white">{contestId}</h1>
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-text-xs font-semibold tracking-wide text-emerald-400 uppercase">
          Completed
        </span>
        <div className="ml-auto flex items-center gap-4 text-xs font-medium text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> Aug 12, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <ListOrdered className="h-3.5 w-3.5" aria-hidden="true" />
            {mockContestRanking.length} Participants
          </span>
        </div>
      </div>

      {/* Summary Strip */}
      <dl className="grid grid-cols-2 gap-4 rounded-xl border border-white/6 bg-white/[0.02] p-4 sm:grid-cols-4">
        <div className="space-y-1.5">
          <dt className="flex items-center gap-1.5 text-text-xs font-medium uppercase tracking-wide text-neutral-500">
            <Users className="h-3.5 w-3.5" aria-hidden="true" /> Joined
          </dt>
          <dd className="text-xl font-semibold text-white">
            {mockContestRanking.length}
          </dd>
        </div>
        <div className="space-y-1.5 border-white/6 sm:border-l sm:pl-4">
          <dt className="flex items-center gap-1.5 text-text-xs font-medium uppercase tracking-wide text-neutral-500">
            <FileCode className="h-3.5 w-3.5" aria-hidden="true" /> Submitted
          </dt>
          <dd className="text-xl font-semibold text-white">32</dd>
        </div>
        <div className="space-y-1.5 border-white/6 sm:border-l sm:pl-4">
          <dt className="flex items-center gap-1.5 text-text-xs font-medium uppercase tracking-wide text-neutral-500">
            <Target className="h-3.5 w-3.5" aria-hidden="true" /> Average Score
          </dt>
          <dd className="text-xl font-semibold text-white">78.5</dd>
        </div>
        <div className="space-y-1.5 border-white/6 sm:border-l sm:pl-4">
          <dt className="flex items-center gap-1.5 text-text-xs font-medium uppercase tracking-wide text-neutral-500">
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> Incomplete
          </dt>
          <dd className="text-xl font-semibold text-amber-400">3</dd>
        </div>
      </dl>

      {/* Table Controls */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-[240px]">
          <label htmlFor="student-search" className="sr-only">
            Search students by name or class
          </label>
          <Search
            className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500"
            aria-hidden="true"
          />
          <input
            id="student-search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            placeholder="Search students..."
            className={`h-9 w-full rounded-md border border-neutral-800 bg-neutral-900/50 pl-9 pr-4 text-text-base text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none ${FOCUS_RING}`}
          />
        </div>
        <button
          className={`flex h-9 items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/50 px-3 text-text-sm font-medium text-neutral-300 hover:text-white transition-colors ${FOCUS_RING}`}
        >
          <Filter className="h-3.5 w-3.5" aria-hidden="true" /> Filters
        </button>
      </div>

      {/* Ranking Table */}
      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-white/[0.04]">
        <table className="w-full min-w-[700px] border-collapse text-sm">
          <caption className="sr-only">
            Contest ranking for {contestId}, {filteredRows.length} students
          </caption>
          <thead>
            <tr className="text-left text-text-xs font-medium uppercase tracking-wide text-neutral-500">
              <th scope="col" className="border-b border-white/6 px-5 py-3 w-16">
                Rank
              </th>
              <th scope="col" className="border-b border-white/6 px-5 py-3">
                Student
              </th>
              <th scope="col" className="border-b border-white/6 px-5 py-3">
                Score
              </th>
              <th scope="col" className="border-b border-white/6 px-5 py-3">
                Solved
              </th>
              <th scope="col" className="border-b border-white/6 px-5 py-3">
                Time
              </th>
              <th scope="col" className="border-b border-white/6 px-5 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-text-base text-neutral-500">
                  No students match "{searchQuery}".
                </td>
              </tr>
            )}
            {pageRows.map((row, i) => (
              <tr
                key={row.id}
                className={`border-b border-white/6 last:border-b-0 ${
                  i % 2 === 0 ? "bg-white/3" : "bg-transparent"
                } hover:bg-white/[0.05] transition-colors`}
              >
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-text-xs font-bold ${
                      row.rank === 1
                        ? "bg-amber-500/20 text-amber-500"
                        : row.rank === 2
                          ? "bg-slate-300/20 text-slate-300"
                          : row.rank === 3
                            ? "bg-orange-700/20 text-orange-400"
                            : "text-neutral-400"
                    }`}
                  >
                    #{row.rank}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <p className="font-semibold text-white text-text-base">{row.name}</p>
                  <p className="text-text-xs text-neutral-500 mt-0.5">{row.cls}</p>
                </td>
                <td className="px-5 py-3">
                  <span className="font-semibold text-white text-text-base">
                    {row.score}
                  </span>
                </td>
                <td className="px-5 py-3 text-text-base text-neutral-400">
                  {row.solved} / 4
                </td>
                <td className="px-5 py-3 text-text-base text-neutral-400">{row.time}</td>
                <td className="px-5 py-3 text-right">
                  <button
                    onClick={() => onViewStudent(row.id)}
                    className={`cursor-pointer rounded-md text-text-sm font-medium text-indigo-400 hover:text-indigo-300 ${FOCUS_RING}`}
                  >
                    View Detail
                    <span className="sr-only"> for {row.name}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 px-5 py-3 text-xs text-neutral-400">
          <div>
            Showing {filteredRows.length === 0 ? 0 : startIdx + 1} to{" "}
            {Math.min(startIdx + PAGE_SIZE, filteredRows.length)} of{" "}
            {filteredRows.length} entries
          </div>
          <nav aria-label="Ranking table pages" className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className={`flex cursor-pointer items-center gap-1 rounded-md px-2 py-1.5 hover:bg-neutral-800 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none ${FOCUS_RING}`}
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
            </button>
            {pageNumbers.map((p, idx) =>
              p === "ellipsis" ? (
                <span key={`ellipsis-${idx}`} className="px-1.5 text-neutral-600">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  aria-current={p === safePage ? "page" : undefined}
                  className={`h-7 w-7 cursor-pointer rounded-md font-medium transition-colors ${FOCUS_RING} ${
                    p === safePage
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "hover:bg-neutral-800"
                  }`}
                >
                  {p}
                </button>
              ),
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className={`flex cursor-pointer items-center gap-1 rounded-md px-2 py-1.5 hover:bg-neutral-800 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none ${FOCUS_RING}`}
            >
              Next <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

function StudentDetailReport({
  studentId,
  onBack,
}: {
  studentId: string
  onBack: () => void
}) {
  const student =
    mockContestRanking.find((s) => s.id === studentId) || mockContestRanking[0]
  const [expandedQ, setExpandedQ] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Header Context */}
      <div className="flex items-center gap-4 border-b border-neutral-800 pb-4 min-h-[32px]">
        <button
          onClick={onBack}
          className={`flex items-center gap-1.5 rounded-md text-sm font-medium text-neutral-400 hover:text-white transition-colors ${FOCUS_RING}`}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <div className="h-4 w-px bg-neutral-800" aria-hidden="true" />
        <h1 className="text-lg font-bold text-white">{student.name}</h1>
        <span className="rounded-full border border-neutral-700 bg-neutral-800/50 px-2.5 py-0.5 text-text-xs font-medium text-neutral-300">
          {student.cls}
        </span>
      </div>

      {/* Single column below `lg`, two columns above — a fixed sidebar width has no business
          being forced onto a narrow viewport. */}
      <div className="grid grid-cols-1 gap-6 items-start lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Left Column: Summary & Timeline */}
        <div className="space-y-6">
          <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Contest Summary
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-text-xs text-neutral-500 mb-0.5">Global Rank</dt>
                <dd className="text-lg font-semibold text-white">#{student.rank}</dd>
              </div>
              <div>
                <dt className="text-text-xs text-neutral-500 mb-0.5">Final Score</dt>
                <dd className="text-lg font-semibold text-white">{student.score}</dd>
              </div>
              <div>
                <dt className="text-text-xs text-neutral-500 mb-0.5">
                  Questions Solved
                </dt>
                <dd className="text-lg font-semibold text-white">
                  {student.solved} / 4
                </dd>
              </div>
              <div>
                <dt className="text-text-xs text-neutral-500 mb-0.5">Total Time</dt>
                <dd className="text-lg font-semibold text-white">{student.time}</dd>
              </div>
              <div className="pt-4 border-t border-white/6">
                <dt className="text-text-xs text-neutral-500 mb-1">
                  Total Submissions
                </dt>
                <dd className="text-sm font-medium text-white">
                  6 submits, 16 compiles
                </dd>
              </div>
            </dl>
          </div>

          {/*
            Activity Timeline — was a centered, alternating-side layout borrowed from
            wide marketing pages. Inside a 300px sidebar it forced every entry's text
            onto a ~110px column and put the connecting line through the middle of the
            text, which is hard to scan and breaks down on mobile.
            Replaced with a single left-aligned stepper: one scan direction (top to
            bottom), the icon shape (not just its color) carries the status, and the
            timestamp sits directly above the event instead of in 10px corner text.
          */}
          <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Activity Timeline
            </h2>
            <ol className="space-y-0">
              {mockStudentTimeline.map((item, i) => {
                const meta =
                  TIMELINE_STATUS_META[item.status] ?? TIMELINE_STATUS_META.default
                const Icon = meta.icon
                const isLast = i === mockStudentTimeline.length - 1
                return (
                  <li key={i} className="relative flex gap-3">
                    <div className="flex flex-col items-center">
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ring-4 ring-offset-0 ${meta.dot} ${meta.ring}`}
                      >
                        <Icon className="h-3.5 w-3.5 text-neutral-950" aria-hidden="true" />
                      </span>
                      {!isLast && (
                        <span
                          className="w-px flex-1 bg-neutral-800"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className={`flex-1 ${isLast ? "pb-0" : "pb-5"}`}>
                      <time className="block text-text-xs font-medium text-neutral-400">
                        {item.time}
                      </time>
                      <p className="text-text-base font-medium text-neutral-200 mt-0.5">
                        <span className="sr-only">{meta.label}: </span>
                        {item.event}
                      </p>
                      {item.meta && (
                        <p className="text-text-xs text-neutral-500 mt-0.5 font-mono">
                          {item.meta}
                        </p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* Right Column: Question Submissions */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-white">Question Performance</h2>

          <div className="space-y-3">
            {mockStudentQuestions.map((q) => {
              const isOpen = expandedQ === q.id
              const panelId = `question-panel-${q.id}`
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-white/6 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/[0.12]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setExpandedQ(isOpen ? null : q.id)}
                    className={`flex w-full items-center justify-between gap-4 p-4 text-left ${FOCUS_RING}`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.04]">
                        {q.result === "Accepted" ? (
                          <CheckCircle2
                            className="h-4 w-4 text-emerald-400"
                            aria-hidden="true"
                          />
                        ) : q.result === "Attempted" ? (
                          <XCircle className="h-4 w-4 text-amber-400" aria-hidden="true" />
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-text-base font-semibold text-white truncate">
                          {q.title}
                        </p>
                        <p className="text-text-xs text-neutral-500 mt-0.5">
                          {q.result} · {q.submissions} submits · {q.compilations}{" "}
                          compiles
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-text-xs text-neutral-400 shrink-0">
                      <div className="text-right hidden sm:block">
                        <p className="text-neutral-500 mb-0.5">Opened</p>
                        <p className="font-mono text-neutral-300">{q.opened}</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-neutral-500 mb-0.5">Accepted</p>
                        <p className="font-mono text-neutral-300">{q.accepted}</p>
                      </div>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Submissions */}
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-label={`Submission history for ${q.title}`}
                      className="border-t border-white/6 bg-black/20 p-4"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[520px] text-sm">
                          <caption className="sr-only">
                            Submission history for {q.title}
                          </caption>
                          <thead>
                            <tr className="text-left text-text-xs font-medium uppercase tracking-wide text-neutral-500">
                              <th scope="col" className="pb-2 font-medium">
                                Time
                              </th>
                              <th scope="col" className="pb-2 font-medium">
                                Action
                              </th>
                              <th scope="col" className="pb-2 font-medium">
                                Result
                              </th>
                              <th scope="col" className="pb-2 font-medium text-right">
                                Runtime
                              </th>
                              <th scope="col" className="pb-2 font-medium text-right">
                                Memory
                              </th>
                              <th scope="col" className="pb-2 font-medium text-right">
                                Language
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-text-sm">
                            {q.history.map((h) => {
                              const rm = resultMeta(h.result)
                              const ResultIcon = rm.icon
                              return (
                                <tr key={h.id} className="border-t border-white/[0.04]">
                                  <td className="py-2.5 font-mono text-neutral-400">
                                    {h.time}
                                  </td>
                                  <td className="py-2.5 text-neutral-300">{h.type}</td>
                                  <td className={`py-2.5 font-medium ${rm.className}`}>
                                    <span className="inline-flex items-center gap-1.5">
                                      <ResultIcon className="h-3.5 w-3.5" aria-hidden="true" />
                                      {h.result}
                                    </span>
                                  </td>
                                  <td className="py-2.5 text-right font-mono text-neutral-400">
                                    {h.runtime}
                                  </td>
                                  <td className="py-2.5 text-right font-mono text-neutral-400">
                                    {h.memory}
                                  </td>
                                  <td className="py-2.5 text-right text-neutral-400">
                                    {h.lang}
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ContestResultsPage() {
  const { id } = useParams()
  const contestId = id || "Unknown Contest"
  const navigate = useNavigate()
  const onBack = () => navigate(-1)

  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null)

  return (
    <div className="w-full max-w-[1200px] mx-auto pb-12">
      {selectedStudentId ? (
        <StudentDetailReport
          studentId={selectedStudentId}
          onBack={() => setSelectedStudentId(null)}
        />
      ) : (
        <ContestRankingReport
          contestId={contestId}
          onViewStudent={setSelectedStudentId}
          onBack={onBack}
        />
      )}
    </div>
  )
}