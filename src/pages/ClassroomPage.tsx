import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react"
import {
  AlertCircle,
  Archive,
  ArrowLeft,
  Check,
  ChevronDown,
  Download,
  Filter,
  LayoutGrid,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
  Users,
  X,
} from "lucide-react"
import { FilterMenu, type ActiveFilter, type FilterDefinition } from "../components/ui"

import { classrooms as INITIAL_CLASSROOMS, students as INITIAL_STUDENTS, upcoming, completed } from "../data/mockData"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Classroom {
  id: string
  name: string
  year: string
  students: number
  section: string
  academicYear: string
  color: string
  status: "active" | "archived"
}

interface Student {
  id: string
  name: string
  email: string
  solved: number
  score: string
  classroomId: string
}

type EmailStatus = "valid" | "duplicate" | "enrolled" | "invalid"

interface ParsedEmail {
  email: string
  status: EmailStatus
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function parseEmails(raw: string, enrolledEmails: string[]): ParsedEmail[] {
  const tokens = raw
    .split(/[\s,;\n]+/)
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)

  const seen = new Set<string>()
  return tokens.map((email) => {
    if (!isValidEmail(email)) return { email, status: "invalid" as EmailStatus }
    if (seen.has(email)) return { email, status: "duplicate" as EmailStatus }
    seen.add(email)
    if (enrolledEmails.includes(email.toLowerCase()))
      return { email, status: "enrolled" as EmailStatus }
    return { email, status: "valid" as EmailStatus }
  })
}

const STATUS_STYLE: Record<EmailStatus, string> = {
  valid: "border-[#1cbaba]/40 bg-[#1cbaba]/10 text-[#1cbaba]",
  duplicate: "border-white/15 bg-white/[0.06] text-white/50",
  enrolled: "border-[#f5a524]/40 bg-[#f5a524]/10 text-[#f5a524]",
  invalid: "border-[#ff9b9b]/40 bg-[#ff9b9b]/10 text-[#ff9b9b]",
}

const STATUS_LABEL: Record<EmailStatus, string> = {
  valid: "Valid",
  duplicate: "Duplicate",
  enrolled: "Already in class",
  invalid: "Invalid",
}

// ---------------------------------------------------------------------------
// AddStudentsModal
// ---------------------------------------------------------------------------

function AddStudentsModal({
  classroom,
  enrolledEmails,
  onClose,
  onAdd,
}: {
  classroom: Classroom
  enrolledEmails: string[]
  onClose: () => void
  onAdd: (emails: string[]) => void
}) {
  const [mode, setMode] = useState<"paste" | "csv">("paste")
  const [raw, setRaw] = useState("")
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const parsed = parseEmails(raw, enrolledEmails)
  const validEmails = parsed.filter((p) => p.status === "valid").map((p) => p.email)
  const counts = {
    valid: parsed.filter((p) => p.status === "valid").length,
    duplicate: parsed.filter((p) => p.status === "duplicate").length,
    enrolled: parsed.filter((p) => p.status === "enrolled").length,
    invalid: parsed.filter((p) => p.status === "invalid").length,
  }

  function handleCsvChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setCsvFile(file)
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setRaw(ev.target?.result as string)
      setMode("paste")
    }
    reader.readAsText(file)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-[#262626] bg-[#141414] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#262626] px-6 py-4">
          <div>
            <h2 className="text-[16px] font-semibold text-white">Add Students</h2>
            <p className="mt-0.5 text-[12px] text-white/40">to {classroom.name} · {classroom.year}</p>
          </div>
          <button onClick={onClose} className="grid h-7 w-7 place-items-center rounded-md text-white/40 transition-colors hover:bg-white/10 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-1 border-b border-[#262626] px-6 pt-3">
          {(["paste", "csv"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`border-b-2 px-1 pb-2.5 text-[13px] font-medium transition-colors ${
                mode === m ? "border-[#5b4aef] text-white" : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              {m === "paste" ? "Paste Emails" : "Import CSV"}
            </button>
          ))}
        </div>


        <div className="space-y-4 p-6">
          {mode === "paste" ? (
            <>
              <textarea
                value={raw}
                onChange={(e) => setRaw(e.target.value)}
                placeholder={"aarav@college.edu\nananya@college.edu, arjun@college.edu\ndiya@college.edu"}
                rows={6}
                className="w-full resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 font-mono text-[13px] leading-relaxed text-white placeholder:text-[#8a8a8a] focus:border-white/20 focus:outline-none"
              />
              <p className="text-[11.5px] text-white/35">
                Paste one email per line, or comma / space separated. We'll validate each one.
              </p>
            </>
          ) : (
            <div
              onClick={() => fileRef.current?.click()}
              className="flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-white/15 text-white/40 transition-colors hover:border-white/30 hover:text-white/60"
            >
              <Upload className="h-7 w-7" />
              <p className="text-[13px]">Click to upload a CSV file</p>
              <p className="text-[11px]">One email address per row</p>
              {csvFile && <p className="text-[11px] text-[#1cbaba]">{csvFile.name}</p>}
              <input ref={fileRef} type="file" accept=".csv,.txt" className="hidden" onChange={handleCsvChange} />
            </div>
          )}

          {parsed.length > 0 && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 text-[12px]">
                {counts.valid > 0 && (
                  <span className="flex items-center gap-1 rounded-full border border-[#1cbaba]/40 bg-[#1cbaba]/10 px-2.5 py-0.5 text-[#1cbaba]">
                    <Check className="h-3 w-3" /> {counts.valid} valid
                  </span>
                )}
                {counts.enrolled > 0 && (
                  <span className="flex items-center gap-1 rounded-full border border-[#f5a524]/40 bg-[#f5a524]/10 px-2.5 py-0.5 text-[#f5a524]">
                    <AlertCircle className="h-3 w-3" /> {counts.enrolled} already in class
                  </span>
                )}
                {counts.duplicate > 0 && (
                  <span className="flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-white/50">
                    {counts.duplicate} duplicate
                  </span>
                )}
                {counts.invalid > 0 && (
                  <span className="flex items-center gap-1 rounded-full border border-[#ff9b9b]/40 bg-[#ff9b9b]/10 px-2.5 py-0.5 text-[#ff9b9b]">
                    <X className="h-3 w-3" /> {counts.invalid} invalid
                  </span>
                )}
              </div>
              <div className="max-h-40 divide-y divide-white/[0.04] overflow-y-auto rounded-md border border-white/10">
                {parsed.map((p, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2">
                    <span className={`font-mono text-[13px] ${p.status === "valid" ? "text-white" : "text-white/50"}`}>
                      {p.email}
                    </span>
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] ${STATUS_STYLE[p.status]}`}>
                      {STATUS_LABEL[p.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-[#262626] px-6 py-4">
          <button onClick={onClose} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            Cancel
          </button>
          <button
            disabled={validEmails.length === 0}
            onClick={() => { onAdd(validEmails); onClose() }}
            className="rounded-lg bg-[#5b4aef] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {validEmails.length > 0 ? `Add ${validEmails.length} Student${validEmails.length !== 1 ? "s" : ""}` : "Add Students"}
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// RemoveConfirmModal
// ---------------------------------------------------------------------------

function RemoveConfirmModal({
  student,
  classroom,
  onConfirm,
  onCancel,
}: {
  student: Student
  classroom: Classroom
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] shadow-2xl">
        <div className="p-6 space-y-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff9b9b]/30 bg-[#ff9b9b]/10">
            <Trash2 className="h-[18px] w-[18px] text-[#ff9b9b]" />
          </div>
          <div>
            <h2 className="text-[15px] font-semibold text-white">Remove Student</h2>
            <p className="mt-1.5 text-[13px] text-white/50">
              Remove <span className="font-medium text-white">{student.name}</span> from{" "}
              <span className="font-medium text-white">{classroom.name}</span>? This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex gap-3 border-t border-[#262626] px-6 py-4">
          <button onClick={onCancel} className="flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            Cancel
          </button>
          <button onClick={onConfirm} className="flex-1 rounded-lg bg-[#ef4743] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#d63f3b]">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// CreateClassroomModal
// ---------------------------------------------------------------------------

const ACCENT_COLORS = ["#7c6cf5", "#4680b6", "#f5a524", "#f5567a", "#1cbaba", "#059669"]

function CreateClassroomModal({
  onClose,
  onCreate,
}: {
  onClose: () => void
  onCreate: (classroom: Classroom) => void
}) {
  const [name, setName] = useState("")
  const [color, setColor] = useState(ACCENT_COLORS[0]!)

  function handleCreate() {
    onCreate({
      id: `cls-${Date.now()}`,
      name: name.trim(),
      year: "",
      students: 0,
      section: "",
      academicYear: "",
      color,
      status: "active",
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#262626] px-6 py-4">
          <h2 className="text-[16px] font-semibold text-white">Create Classroom</h2>
          <button onClick={onClose} className="grid h-7 w-7 place-items-center rounded-md text-white/40 transition-colors hover:bg-white/10 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <label className="mb-1.5 block text-[12.5px] font-medium text-white/70">
              Class name <span className="text-[#8f7dff]">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && name.trim()) handleCreate() }}
              placeholder="e.g. CSE-A IV Year"
              autoFocus
              className="h-10 w-full rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none"
            />
            <p className="mt-1.5 text-[11.5px] text-white/35">Include year and section in the name, e.g. "CSE-A IV Year"</p>
          </div>

          <div>
            <label className="mb-1.5 block text-[12.5px] font-medium text-white/70">Accent color</label>
            <div className="flex gap-2.5">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  style={{ backgroundColor: c }}
                  className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${color === c ? "ring-2 ring-white/60 ring-offset-2 ring-offset-[#141414]" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 border-t border-[#262626] px-6 py-4">
          <button onClick={onClose} className="flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            Cancel
          </button>
          <button
            disabled={!name.trim()}
            onClick={handleCreate}
            className="flex-1 rounded-lg bg-[#5b4aef] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Classroom
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// RenameModal
// ---------------------------------------------------------------------------

function RenameModal({
  classroom,
  onClose,
  onRename,
}: {
  classroom: Classroom
  onClose: () => void
  onRename: (name: string) => void
}) {
  const [name, setName] = useState(classroom.name)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#262626] px-6 py-4">
          <h2 className="text-[15px] font-semibold text-white">Rename Classroom</h2>
          <button onClick={onClose} className="grid h-7 w-7 place-items-center rounded-md text-white/40 transition-colors hover:bg-white/10 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter" && name.trim()) { onRename(name.trim()); onClose() }
            }}
            autoFocus
            className="h-10 w-full rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-white focus:border-white/25 focus:outline-none"
          />
        </div>
        <div className="flex gap-3 border-t border-[#262626] px-6 py-4">
          <button onClick={onClose} className="flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]">
            Cancel
          </button>
          <button
            disabled={!name.trim()}
            onClick={() => { onRename(name.trim()); onClose() }}
            className="flex-1 rounded-lg bg-[#5b4aef] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ManageMenu
// ---------------------------------------------------------------------------

function ManageMenu({ onRename, onArchive }: { onRename: () => void; onArchive: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-[13px] font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
      >
        Manage Classroom <ChevronDown className="h-3.5 w-3.5 text-white/40" />
      </button>
      {open && (
        <ul className="absolute right-0 z-20 mt-1.5 w-48 overflow-hidden rounded-md border border-[#262626] bg-[#1a1a1a] py-1 shadow-xl">
          <li>
            <button
              onClick={() => { setOpen(false); onRename() }}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] text-white/85 hover:bg-white/10"
            >
              <Pencil className="h-3.5 w-3.5 text-white/40" /> Rename
            </button>
          </li>
          <li>
            <button
              onClick={() => { setOpen(false); onArchive() }}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] text-white/85 hover:bg-white/10"
            >
              <Archive className="h-3.5 w-3.5 text-white/40" /> Archive
            </button>
          </li>
          <li>
            <button
              disabled
              className="flex w-full cursor-not-allowed items-center gap-2.5 px-3 py-2 text-left text-[13px] text-white/30"
              title="Backend support needed"
            >
              <Trash2 className="h-3.5 w-3.5" /> Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// StudentsTab
// ---------------------------------------------------------------------------

function StudentsTab({
  classroom,
  students,
  onRemove,
}: {
  classroom: Classroom
  students: Student[]
  onRemove: (student: Student) => void
}) {
  const [search, setSearch] = useState("")
  const [pending, setPending] = useState<Student | null>(null)

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {pending && (
        <RemoveConfirmModal
          student={pending}
          classroom={classroom}
          onConfirm={() => { onRemove(pending); setPending(null) }}
          onCancel={() => setPending(null)}
        />
      )}
      <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#141414]">
        <div className="flex flex-wrap items-center gap-3 px-5 py-4">
          <div className="relative w-full max-w-[275px]">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email…"
              className="h-8 w-full rounded border border-white/10 bg-white/[0.07] pl-8 pr-3 text-[13px] text-white placeholder:text-[#b8b8b8] focus:border-white/20 focus:outline-none"
            />
          </div>
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.08] text-[#a8a8a8] transition-colors hover:text-white">
            <Filter className="h-3.5 w-3.5" />
          </button>
          <button className="ml-auto flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-[#333] bg-[#141414] px-3 text-[13px] text-white/70 transition-colors hover:border-[#444] hover:text-white">
            <Download className="h-3.5 w-3.5" /> Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.5px] text-[#808080]">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email ID</th>
                <th className="w-[100px] px-5 py-3">Solved</th>
                <th className="w-[110px] px-5 py-3">Avg Score</th>
                <th className="w-[80px] px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-[13px] text-white/35">
                    {search ? "No students match your search." : "No students in this classroom yet."}
                  </td>
                </tr>
              ) : (
                filtered.map((s, i) => (
                  <tr key={s.id} className={i % 2 === 1 ? "bg-white/[0.03]" : ""}>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">{s.name}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#999]">{s.email}</td>
                    <td className="px-5 py-3.5 text-[14px] text-[#b3b3b3]">{s.solved}</td>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">{s.score}</td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => setPending(s)}
                        className="text-[12px] text-[#ff9b9b]/70 transition-colors hover:text-[#ff9b9b]"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#262626] px-5 py-3 text-[12px] text-white/35">
          {filtered.length} of {students.length} student{students.length !== 1 ? "s" : ""}
        </div>
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// AssessmentsTab
// ---------------------------------------------------------------------------

type AssessmentStatus = "upcoming" | "completed"

interface AssessmentRow {
  id: string
  name: string
  date: string
  time?: string
  duration?: number
  status: AssessmentStatus
  score?: string
  participation?: string
}

const CLS_ID_MAP: Record<string, string> = {
  "CSE-A": "cls-a",
  "CSE-B": "cls-b",
  "CSE-C": "cls-c",
  "CSE-D": "cls-d",
}

function AssessmentsTab({ classroomId }: { classroomId: string }) {
  const upcomingRows: AssessmentRow[] = upcoming
    .filter((u) => (u.classroomIds as string[] | undefined)?.includes(classroomId))
    .map((u) => ({
      id: u.id,
      name: u.name,
      date: u.scheduledDate,
      time: u.scheduledTime,
      duration: u.duration,
      status: "upcoming" as const,
    }))

  const completedRows: AssessmentRow[] = completed
    .filter((c) => CLS_ID_MAP[c.cls] === classroomId)
    .map((c, i) => ({
      id: `comp-${i}`,
      name: c.title,
      date: "",
      status: "completed" as const,
      score: c.score,
      participation: c.participation,
    }))

  const rows = [...upcomingRows, ...completedRows]

  if (rows.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-[#262626] bg-[#141414] text-[13px] text-white/35">
        No assessments assigned to this classroom yet.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#141414]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.5px] text-[#808080]">
              <th className="px-5 py-3">Assessment</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Score / Participation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={i % 2 === 1 ? "bg-white/[0.03]" : ""}>
                <td className="px-5 py-3.5 text-[13.5px] font-semibold text-white">{row.name}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                    row.status === "upcoming"
                      ? "border-[#5b4aef]/40 bg-[#5b4aef]/10 text-[#a49aff]"
                      : "border-[#1cbaba]/30 bg-[#1cbaba]/10 text-[#1cbaba]"
                  }`}>
                    {row.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#999]">
                  {row.date || "—"}
                  {row.time && ` · ${row.time}`}
                  {row.duration && (
                    <span className="ml-1 text-white/35">({formatDuration(row.duration)})</span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#b3b3b3]">
                  {row.score ?? "—"}{row.participation ? ` · ${row.participation}` : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ClassroomWorkspace
// ---------------------------------------------------------------------------

function ClassroomWorkspace({
  classroom,
  students,
  onBack,
  onRename,
  onArchive,
  onAddStudents,
  onRemoveStudent,
}: {
  classroom: Classroom
  students: Student[]
  onBack: () => void
  onRename: (name: string) => void
  onArchive: () => void
  onAddStudents: (emails: string[]) => void
  onRemoveStudent: (student: Student) => void
}) {
  const [activeTab, setActiveTab] = useState<"students" | "assessments">("students")
  const [showAddStudents, setShowAddStudents] = useState(false)
  const [showRename, setShowRename] = useState(false)

  const enrolledEmails = students.map((s) => s.email.toLowerCase())

  return (
    <>
      {showAddStudents && (
        <AddStudentsModal
          classroom={classroom}
          enrolledEmails={enrolledEmails}
          onClose={() => setShowAddStudents(false)}
          onAdd={onAddStudents}
        />
      )}
      {showRename && (
        <RenameModal
          classroom={classroom}
          onClose={() => setShowRename(false)}
          onRename={onRename}
        />
      )}

      <div className="space-y-6">
        {/* Back + header */}
        <div>
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-1.5 text-[12px] text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Classrooms
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold"
                style={{
                  backgroundColor: classroom.color + "22",
                  border: `1.5px solid ${classroom.color}44`,
                  color: classroom.color,
                  fontSize: "13px",
                }}
              >
                {classroom.name.slice(0, 2)}
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-[20px] font-bold leading-tight text-white">{classroom.name}</h1>
                {classroom.status === "archived" && (
                  <span className="rounded-full border border-[#f5a524]/40 bg-[#f5a524]/10 px-1.5 py-0.5 text-[10.5px] text-[#f5a524]">
                    Archived
                  </span>
                )}
              </div>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => setShowAddStudents(true)}
                className="flex h-9 items-center gap-1.5 rounded-lg bg-[#5b4aef] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
              >
                <Plus className="h-3.5 w-3.5" /> Add Students
              </button>
              <ManageMenu onRename={() => setShowRename(true)} onArchive={onArchive} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex w-fit gap-1 rounded-lg border border-[#262626] bg-white/[0.03] p-1">
          {(["students", "assessments"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`relative flex items-center gap-1.5 rounded-md px-4 py-2 text-[13px] font-medium transition-colors ${
                activeTab === t ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/85"
              }`}
            >
              {t === "students" && <Users className="h-3.5 w-3.5" />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
              {activeTab === t && (
                <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-[#5b4aef]" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "students" ? (
          <StudentsTab classroom={classroom} students={students} onRemove={onRemoveStudent} />
        ) : (
          <AssessmentsTab classroomId={classroom.id} />
        )}
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// ClassroomCard
// ---------------------------------------------------------------------------

function ClassroomCard({
  room,
  isActive,
  onClick,
}: {
  room: Classroom
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative h-[88px] w-[230px] max-w-full overflow-hidden rounded-xl border text-left transition-all ${
        isActive
          ? "border-[#5b4aef]/60 ring-1 ring-[#5b4aef]/30"
          : "border-[#262626] hover:border-[#333]"
      } ${room.status === "archived" ? "opacity-60" : ""}`}
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${room.color}18 0%, #141414 60%)`
          : `linear-gradient(135deg, ${room.color}10 0%, #141414 60%)`,
      }}
    >
      {/* Decorative classroom icon — fills right side as background art */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute -right-2 -bottom-2 h-20 w-20 opacity-[0.07] transition-opacity group-hover:opacity-[0.11]"
        style={{ color: room.color }}
        aria-hidden="true"
      >
        <path
          d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="currentColor"
        />
        <path
          d="M9 21V12h6v9"
          stroke="#141414"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 4v1M8 8h2M14 8h2M8 12h2M14 12h2"
          stroke="#141414"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-4">
        <p
          className="text-[18px] font-bold leading-none text-white"
          style={{ textShadow: `0 0 20px ${room.color}44` }}
        >
          {room.name}
        </p>
        <p className="text-[13px] font-semibold" style={{ color: room.color }}>
          {room.students}
          <span className="ml-1 text-[11px] font-normal text-white/40">students</span>
        </p>
      </div>
    </button>
  )
}

// ---------------------------------------------------------------------------
// ClassroomDashboard
// ---------------------------------------------------------------------------

function ClassroomDashboard({
  classrooms,
  students,
  activeId,
  onSelectClass,
  onCreateClassroom,
}: {
  classrooms: Classroom[]
  students: Student[]
  activeId: string | null
  onSelectClass: (id: string) => void
  onCreateClassroom: () => void
}) {
  const [search, setSearch] = useState("")
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([])

  const classMap = useMemo(
    () => Object.fromEntries(classrooms.map((c) => [c.id, c])),
    [classrooms]
  )

  // Build FilterMenu definition — one per filterable column
  const filterDefs: FilterDefinition[] = useMemo(() => [
    {
      id: "class",
      label: "Class",
      icon: LayoutGrid,
      type: "multi-select",
      options: classrooms.map((c) => ({ value: c.id, label: c.name })),
    },
    {
      id: "solved",
      label: "Solved",
      icon: Check,
      type: "number",
    },
  ], [classrooms])

  // Apply both search and active filters to the student list
  const filtered = useMemo(() => {
    return students.filter((s) => {
      // Search
      const q = search.toLowerCase()
      if (q && !s.name.toLowerCase().includes(q) && !s.email.toLowerCase().includes(q)) return false

      // Active filters
      for (const f of activeFilters) {
        if (f.definitionId === "class") {
          const selected: string[] = Array.isArray(f.value) ? f.value : []
          if (selected.length > 0) {
            const pass = f.operator === "is not"
              ? !selected.includes(s.classroomId)
              : selected.includes(s.classroomId)
            if (!pass) return false
          }
        }
        if (f.definitionId === "solved" && f.value !== "" && f.value !== undefined) {
          const threshold = Number(f.value)
          if (!isNaN(threshold)) {
            const pass = f.operator === "Less than" ? s.solved < threshold : s.solved > threshold
            if (!pass) return false
          }
        }
      }
      return true
    })
  }, [students, search, activeFilters])

  const hasFilters = activeFilters.length > 0

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap gap-3">
          {classrooms.map((room) => (
            <ClassroomCard
              key={room.id}
              room={room}
              isActive={activeId === room.id}
              onClick={() => onSelectClass(room.id)}
            />
          ))}
        </div>
        <button
          onClick={onCreateClassroom}
          className="flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-[#5b4aef] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]"
        >
          <Plus className="h-4 w-4" /> Create Classroom
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#141414]">
        <div className="flex flex-wrap items-center gap-3 px-5 py-4">
          <p className="text-[13px] font-semibold text-white/70">All Students</p>
          <div className="relative ml-2 w-full max-w-[275px]">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email…"
              className="h-8 w-full rounded border border-white/10 bg-white/[0.07] pl-8 pr-3 text-[13px] text-white placeholder:text-[#b8b8b8] focus:border-white/20 focus:outline-none"
            />
          </div>

          {/* FilterMenu wrapping the filter icon */}
          <FilterMenu
            trigger={
              <div className={`relative grid h-8 w-8 cursor-pointer place-items-center rounded-full transition-colors ${
                hasFilters
                  ? "bg-[#5b4aef]/20 text-[#a49aff]"
                  : "bg-white/[0.08] text-[#a8a8a8] hover:text-white"
              }`}>
                <Filter className="h-3.5 w-3.5" />
                {hasFilters && (
                  <span className="absolute -right-0.5 -top-0.5 h-[7px] w-[7px] rounded-full bg-[#5b4aef] ring-2 ring-[#141414]" />
                )}
              </div>
            }
            availableFilters={filterDefs}
            initialFilters={activeFilters}
            onApply={(filters) => setActiveFilters(filters)}
          />

          <button className="ml-auto flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[#333] bg-[#141414] px-3 text-[13px] text-white/70 transition-colors hover:border-[#444] hover:text-white">
            <Download className="h-3.5 w-3.5" /> Export
          </button>
        </div>


        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.5px] text-[#808080]">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email ID</th>
                <th className="w-[120px] px-5 py-3">Solved</th>
                <th className="w-[120px] px-5 py-3">Avg Score</th>
                <th className="w-[110px] px-5 py-3">Class</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-[13px] text-white/35">
                    No students match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((s, i) => (
                  <tr key={s.id} className={i % 2 === 1 ? "bg-white/[0.03]" : ""}>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">{s.name}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#999]">{s.email}</td>
                    <td className="px-5 py-3.5 text-[14px] text-[#b3b3b3]">{s.solved}</td>
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-white">{s.score}</td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => onSelectClass(s.classroomId)}
                        className="cursor-pointer text-[12px] text-[#a49aff] transition-colors hover:text-[#7c6cf5]"
                      >
                        {classMap[s.classroomId]?.name ?? s.classroomId}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ClassroomPage — root
// ---------------------------------------------------------------------------

let _studentIdCounter = 100

export function ClassroomPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>(INITIAL_CLASSROOMS)
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS)
  const [activeClassroomId, setActiveClassroomId] = useState<string | null>(null)
  const [showCreate, setShowCreate] = useState(false)

  const activeClassroom = classrooms.find((c) => c.id === activeClassroomId) ?? null
  const activeStudents = students.filter((s) => s.classroomId === activeClassroomId)

  function handleCreateClassroom(classroom: Classroom) {
    setClassrooms((prev) => [...prev, classroom])
    setActiveClassroomId(classroom.id)
  }

  function handleAddStudents(emails: string[]) {
    if (!activeClassroomId) return
    const newStudents: Student[] = emails.map((email) => ({
      id: `s${++_studentIdCounter}`,
      name: email.split("@")[0]
        ?.replace(/[._]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()) ?? email,
      email,
      solved: 0,
      score: "—",
      classroomId: activeClassroomId,
    }))
    setStudents((prev) => [...prev, ...newStudents])
    setClassrooms((prev) =>
      prev.map((c) =>
        c.id === activeClassroomId ? { ...c, students: c.students + newStudents.length } : c
      )
    )
  }

  function handleRemoveStudent(student: Student) {
    setStudents((prev) => prev.filter((s) => s.id !== student.id))
    setClassrooms((prev) =>
      prev.map((c) =>
        c.id === student.classroomId ? { ...c, students: Math.max(0, c.students - 1) } : c
      )
    )
  }

  function handleRename(name: string) {
    setClassrooms((prev) =>
      prev.map((c) => (c.id === activeClassroomId ? { ...c, name } : c))
    )
  }

  function handleArchive() {
    setClassrooms((prev) =>
      prev.map((c) =>
        c.id === activeClassroomId ? { ...c, status: "archived" as const } : c
      )
    )
    setActiveClassroomId(null)
  }

  return (
    <>
      {showCreate && (
        <CreateClassroomModal
          onClose={() => setShowCreate(false)}
          onCreate={handleCreateClassroom}
        />
      )}

      {activeClassroom ? (
        <ClassroomWorkspace
          classroom={activeClassroom}
          students={activeStudents}
          onBack={() => setActiveClassroomId(null)}
          onRename={handleRename}
          onArchive={handleArchive}
          onAddStudents={handleAddStudents}
          onRemoveStudent={handleRemoveStudent}
        />
      ) : (
        <ClassroomDashboard
          classrooms={classrooms}
          students={students}
          activeId={activeClassroomId}
          onSelectClass={setActiveClassroomId}
          onCreateClassroom={() => setShowCreate(true)}
        />
      )}
    </>
  )
}
