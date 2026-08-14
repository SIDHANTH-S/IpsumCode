import { useState } from "react"
import { ChevronDown, ChevronRight, BookOpenCheck, Search, GripVertical, X, ArrowRight } from "lucide-react"
import { BADGE_GRADIENTS } from "../data/mockData"

const PANEL = "rounded-xl border border-[#262626] bg-[#141414]"
const FIELD =
  "w-full rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none"

type BankDifficulty = "Easy" | "Medium" | "Hard"

// Difficulty pill tints, reusing the product's difficulty palette.
const DIFF_PILL: Record<BankDifficulty, string> = {
  Easy: "border-[#1cbaba]/40 bg-[#1cbaba]/10 text-[#28c7c7]",
  Medium: "border-[#ffb700]/40 bg-[#ffb700]/10 text-[#ffc233]",
  Hard: "border-[#ef4743]/40 bg-[#ef4743]/10 text-[#f4726f]",
}

const questionPool: { id: number; title: string; difficulty: BankDifficulty }[] = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Reverse a Linked List", difficulty: "Easy" },
  { id: 3, title: "Binary Search", difficulty: "Easy" },
  { id: 4, title: "Valid Parentheses", difficulty: "Easy" },
  { id: 5, title: "Maximum Subarray (Kadane's)", difficulty: "Medium" },
  { id: 6, title: "Longest Substring No Repeat", difficulty: "Medium" },
  { id: 7, title: "Merge Two Sorted Lists", difficulty: "Easy" },
  { id: 8, title: "Climbing Stairs", difficulty: "Easy" },
  { id: 9, title: "Number of Islands", difficulty: "Medium" },
  { id: 10, title: "Coin Change", difficulty: "Medium" },
  { id: 11, title: "Word Search", difficulty: "Medium" },
  { id: 12, title: "Trapping Rain Water", difficulty: "Hard" },
]

const bankFilters = ["All", "Easy", "Medium", "Hard", "Arrays", "Trees", "DP"] as const

function DiffPill({ difficulty }: { difficulty: BankDifficulty }) {
  return (
    <span
      className={`flex h-[22px] w-16 items-center justify-center rounded-full border text-[11px] font-medium ${DIFF_PILL[difficulty]}`}
    >
      {difficulty}
    </span>
  )
}

function Stepper({
  value,
  onChange,
  format,
  className = "",
}: {
  value: number
  onChange: (next: number) => void
  format?: (v: number) => string
  className?: string
}) {
  return (
    <div className={`flex items-center rounded-md border border-white/10 bg-white/[0.06] ${className}`}>
      <button
        onClick={() => onChange(value - 1)}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-white"
      >
        −
      </button>
      <span className="min-w-[52px] text-center text-[14px] font-semibold text-white tabular-nums">
        {format ? format(value) : value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-white"
      >
        +
      </button>
    </div>
  )
}

const deliveryModes = ["Random", "Smart Shuffle", "Same Order"] as const

export function CreateAssessmentPage({ onExit }: { onExit: () => void }) {
  const [name, setName] = useState("Data Structures Mid-Term")
  const [duration, setDuration] = useState(30)
  const [date, setDate] = useState("7 JUN 2025")
  const [time, setTime] = useState("10:00 AM")
  const [selected, setSelected] = useState<number[]>([1, 2, 4, 6, 8, 10])
  const [delivery, setDelivery] = useState<(typeof deliveryModes)[number]>("Random")
  const [perStudent, setPerStudent] = useState(4)
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<(typeof bankFilters)[number]>("All")

  const isDraft = !date.trim() || !time.trim()

  const filtered = questionPool.filter((q) => {
    if (query && !q.title.toLowerCase().includes(query.toLowerCase())) return false
    if (activeFilter === "Easy" || activeFilter === "Medium" || activeFilter === "Hard") {
      return q.difficulty === activeFilter
    }
    return true
  })

  const selectedQuestions = selected
    .map((id) => questionPool.find((q) => q.id === id))
    .filter((q): q is (typeof questionPool)[number] => Boolean(q))

  const toggle = (id: number) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const durationLabel = `${String(duration).padStart(2, "0")}:00`

  return (
    <div className="space-y-5">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.5px] text-white/40">Create</p>
          <h1 className="mt-1 text-[22px] font-semibold leading-tight text-white">Create Assessment</h1>
        </div>
        <button
          onClick={onExit}
          className="shrink-0 rounded-md border border-white/10 bg-white/[0.06] px-4 py-[9px] text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
        >
          Cancel
        </button>
      </div>

      {/* assessment details */}
      <div className={`${PANEL} p-5`}>
        <h2 className="mb-4 text-[15px] font-semibold text-white">Assessment details</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_1px_320px]">
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-[12px] text-white/55">Assessment name</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${FIELD} h-10`}
                placeholder="e.g. Data Structures Mid-Term"
              />
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">Duration</p>
                <Stepper value={duration} onChange={(v) => setDuration(Math.max(5, v))} format={() => durationLabel} />
              </div>
              <div>
                <p className="mb-1.5 text-[12px] text-white/55">Class</p>
                <div className="flex items-center gap-2">
                  <button className="flex h-9 items-center gap-1.5 rounded-md bg-[#5b4aef] px-3.5 text-[12px] font-semibold uppercase tracking-[0.5px] text-white transition-colors hover:bg-[#4d3ee0]">
                    Select
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <span className="flex h-9 items-center rounded-md border border-white/10 bg-white/[0.06] px-3.5 text-[12px] font-medium uppercase tracking-[0.5px] text-white/80">
                    Class A
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden bg-white/[0.08] lg:block" />

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/45">Date</p>
                <div className="relative">
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Select date"
                    className={`${FIELD} h-10 pr-9`}
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35">
                    <BookOpenCheck className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.5px] text-white/45">Time</p>
                <div className="relative">
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Select time"
                    className={`${FIELD} h-10 pr-9`}
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[12px] text-white/45">Leave date and time as empty to keep as draft.</p>
            {isDraft && (
              <span className="inline-flex h-6 items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 text-[11px] font-medium text-amber-400">
                Draft
              </span>
            )}
          </div>
        </div>
      </div>

      {/* question selection */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* bank */}
        <div className={`${PANEL} flex flex-col`}>
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <h3 className="text-[14px] font-semibold text-white">Question Bank</h3>
            <span className="text-[11px] text-white/45">{questionPool.length} questions</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 px-4 py-3">
            <div className="relative min-w-[160px] flex-1">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="h-8 w-full rounded-full bg-white/[0.08] pl-9 pr-4 text-[13px] text-white placeholder:text-[#a8a8a8] focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {bankFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex h-7 items-center rounded-full px-3 text-[12px] font-medium transition-colors ${
                    activeFilter === f
                      ? "bg-[#635ce6] text-white"
                      : "border border-white/10 bg-white/[0.06] text-white/65 hover:text-white/90"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-y border-white/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.5px] text-white/40">
            <span>Question Title</span>
            <span>Difficulty</span>
          </div>
          <div className="max-h-[360px] flex-1 overflow-y-auto">
            {filtered.map((q, i) => {
              const isSel = selected.includes(q.id)
              return (
                <button
                  key={q.id}
                  onClick={() => toggle(q.id)}
                  className={`flex h-10 w-full items-center justify-between px-4 text-left transition-colors ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  } ${isSel ? "text-white/40" : "hover:bg-white/[0.05]"}`}
                >
                  <span className={`truncate text-[13px] ${isSel ? "" : "text-white/85"}`}>{q.title}</span>
                  <DiffPill difficulty={q.difficulty} />
                </button>
              )
            })}
          </div>
          <div className="border-t border-white/[0.06] px-4 py-2.5 text-[11px] text-white/40">
            Showing {filtered.length} of {questionPool.length}
          </div>
        </div>

        {/* pool */}
        <div className={`${PANEL} flex flex-col`}>
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <h3 className="text-[14px] font-semibold text-white">Assessment Pool</h3>
            <span className="flex h-5 items-center rounded-full bg-[#5b4aef]/25 px-2 text-[11px] font-medium text-[#b3a8ff]">
              {selectedQuestions.length} added
            </span>
          </div>
          <p className="border-b border-white/[0.06] px-4 py-2 text-[11px] text-white/40">
            Drag questions from the left to add them here
          </p>
          <div className="max-h-[404px] flex-1 overflow-y-auto px-2 py-2">
            {selectedQuestions.length === 0 ? (
              <div className="flex h-full min-h-[200px] items-center justify-center text-[12px] text-white/30">
                Drag new questions here.
              </div>
            ) : (
              <div className="space-y-1.5">
                {selectedQuestions.map((q, i) => (
                  <div
                    key={q.id}
                    className="flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-2"
                  >
                    <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-white/25" />
                    <span className="w-4 shrink-0 text-[11px] text-white/35 tabular-nums">{i + 1}</span>
                    <span className="min-w-0 flex-1 truncate text-[13px] text-white/85">{q.title}</span>
                    <DiffPill difficulty={q.difficulty} />
                    <button
                      onClick={() => toggle(q.id)}
                      className="grid h-6 w-6 shrink-0 place-items-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
            <span className="text-[11px] text-white/45">{selectedQuestions.length} questions selected</span>
            <button className="flex items-center gap-1.5 rounded-md bg-[#5b4aef] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]">
              Confirm <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* question delivery */}
      <div className={`${PANEL} flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between`}>
        <div>
          <h3 className="text-[15px] font-semibold text-white">Question delivery</h3>
          <p className="mt-1 text-[12px] text-white/45">Choose how questions are distributed to students</p>
          <div className="mt-3 inline-flex gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] p-1">
            {deliveryModes.map((m) => (
              <button
                key={m}
                onClick={() => setDelivery(m)}
                className={`rounded-md px-4 py-2 text-[13px] font-medium transition-colors ${
                  delivery === m ? "bg-[#5b4aef] text-white" : "text-white/60 hover:text-white/90"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:text-right">
          <p className="mb-2 text-[12px] text-white/55">Questions per student</p>
          <Stepper
            value={perStudent}
            onChange={(v) => setPerStudent(Math.min(selectedQuestions.length || 1, Math.max(1, v)))}
            className="lg:ml-auto"
          />
        </div>
      </div>

      {/* review */}
      <div className={`${PANEL} p-5`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[13px] font-medium text-white/55">Review before submitting</h3>
            <p className="mt-1 text-[20px] font-semibold text-white">{name || "Untitled Assessment"}</p>
          </div>
          {!isDraft && (
            <div className="flex shrink-0 items-center gap-2">
              <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.5px] text-white/45">
                  {date.split(" ").slice(1, 2).join(" ") || "Date"}
                </span>
                <span className="text-[18px] font-bold leading-none text-white">{date.split(" ")[0]}</span>
              </div>
              <div
                className="grid h-[52px] w-[68px] place-items-center rounded-lg text-[17px] font-bold text-white"
                style={{ background: BADGE_GRADIENTS.purple }}
              >
                {time.replace(/\s*(AM|PM)/i, "")}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/[0.06] pt-5 sm:grid-cols-2">
          {[
            { label: "Assessment", value: name || "—" },
            { label: "Class", value: "Class A" },
            {
              label: "Questions",
              value: `${selectedQuestions.length} selected · ${duration} min est.`,
            },
            { label: "Schedule", value: isDraft ? "Draft — not scheduled" : `${date} · ${time}` },
            { label: "Question delivery", value: delivery },
          ].map((row) => (
            <div key={row.label} className="flex gap-6 text-[13px]">
              <span className="w-32 shrink-0 text-white/45">{row.label}</span>
              <span className="font-medium text-white/85">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 text-[12px] text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            All required fields are filled
          </span>
          <button
            onClick={onExit}
            className="rounded-md bg-[#5b4aef] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
          >
            {isDraft ? "Save Draft" : "Schedule Assessment"}
          </button>
        </div>
      </div>
    </div>
  )
}
