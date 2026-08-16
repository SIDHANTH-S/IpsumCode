import { useState } from "react";
import svgPaths from "@/assets/icons/assessment-icons";

// ─── Data ────────────────────────────────────────────────────────────────────

const LANGUAGES = ["Python 3", "JavaScript", "Java", "C++", "Go"];

const QUESTION_TABS = ["Problem", "Submissions", "Discussion"] as const;
type QuestionTab = (typeof QUESTION_TABS)[number];

const TESTCASES = [
  { nums: "[2,7,11,15]", target: "9", expected: "[0,1]" },
  { nums: "[3,2,4]",     target: "6", expected: "[1,2]" },
  { nums: "[3,3]",       target: "6", expected: "[0,1]" },
];

// Code lines rendered with lightweight syntax highlighting.
// `kw` segments use the keyword colour token; the rest use default code colour.
type Seg = { t: string; kw?: boolean };
const CODE_LINES: Seg[][] = [
  [{ t: "class ", kw: true }, { t: "Solution:" }],
  [{ t: "    def ", kw: true }, { t: "twoSum" }, { t: "(self, nums: List[int], target: int) -> List[int]:" }],
  [{ t: "        lookup = {}" }],
  [{ t: "        for ", kw: true }, { t: "i, num " }, { t: "in ", kw: true }, { t: "enumerate(nums):" }],
  [{ t: "            diff = target - num" }],
  [{ t: "            if ", kw: true }, { t: "diff in lookup:" }],
  [{ t: "                return ", kw: true }, { t: "[lookup[diff], i]" }],
  [{ t: "            lookup[num] = i" }],
  [{ t: "        return ", kw: true }, { t: "[]" }],
  [{ t: " " }],
];

// ─── Icons ───────────────────────────────────────────────────────────────────

function LogoIcon() {
  return (
    <div className="shrink-0 size-[28px]">
      <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
        <rect fill="#635CE6" height="28" rx="8" width="28" />
        <path d={svgPaths.p33eb5300} fill="white" />
      </svg>
    </div>
  );
}

function TimerIcon() {
  return (
    <svg fill="none" height="19.5" viewBox="0 0 19.5 19.5" width="19.5" className="shrink-0" aria-hidden>
      <path d={svgPaths.pfb9b880} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden>
      <path d={svgPaths.p88b0600} fill="currentColor" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg fill="none" height="13.5" viewBox="0 0 13.5 13.5" width="13.5" className="shrink-0" aria-hidden>
      <path d={svgPaths.p1d874800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p1eae9400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" aria-hidden>
      <path d={svgPaths.p25c18f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg fill="none" height="13.5" viewBox="0 0 13.5 13.5" width="13.5" aria-hidden>
      <path d={svgPaths.p2aeb01c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p23b9a700} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.pb8ec300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function AutoSaveIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" className="shrink-0" aria-hidden>
      <path d={svgPaths.p19c58dc0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      {[[12,2,12,4],[12,20,12,22],[4,12,2,12],[22,12,20,12],[5.6,5.6,4.2,4.2],[19.8,19.8,18.4,18.4],[18.4,5.6,19.8,4.2],[4.2,19.8,5.6,18.4]].map((c,i)=>(
        <path key={i} d={`M${c[0]} ${c[1]}L${c[2]} ${c[3]}`} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

// ─── Panels ────────────────────────────────────────────────────────────────

function QuestionPanel({
  title, difficulty, onBack, onNext,
}: { title: string; difficulty: string; onBack: () => void; onNext: () => void }) {
  const [tab, setTab] = useState<QuestionTab>("Problem");

  return (
    <section
      className="flex flex-col w-full lg:w-[42%] lg:max-w-[531px] shrink-0 border-b lg:border-b-0 lg:border-r overflow-y-auto"
      style={{ backgroundColor: "var(--ws-panel-bg)", borderColor: "var(--border)" }}
      aria-label="Problem description"
    >
      <div className="flex flex-col gap-5 px-6 pt-5 pb-8">
        {/* nav row */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            aria-label="Previous question"
            className="flex items-center justify-center size-8 rounded-lg border transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ borderColor: "var(--ws-btn-border)", color: "var(--ws-muted)" }}
          >
            <BackIcon />
          </button>
          <h1 className="text-[17px] font-bold" style={{ color: "var(--text-primary)" }}>Question 2</h1>
          <button
            onClick={onNext}
            aria-label="Next question"
            className="flex items-center justify-center size-8 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ backgroundColor: "#4f46e5", color: "#ffffff" }}
          >
            <ForwardIcon />
          </button>
        </div>

        {/* title + difficulty */}
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-[24px] font-bold leading-tight" style={{ color: "var(--text-primary)" }}>{title}</h2>
          <span
            className="px-3 py-[5px] rounded-[14px] text-[13px] font-semibold"
            style={{ backgroundColor: "var(--tag-warn-bg)", color: "var(--tag-warn-text)" }}
          >
            {difficulty}
          </span>
        </div>

        <p className="text-[13px]" style={{ color: "var(--text-muted)" }}>Problem ID: 12345</p>

        {/* sub-tabs */}
        <div className="flex gap-6 border-b" style={{ borderColor: "var(--border)" }} role="tablist" aria-label="Problem sections">
          {QUESTION_TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className="relative pb-3 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                style={{ color: active ? "var(--accent)" : "var(--text-secondary)", fontWeight: active ? 600 : 500 }}
              >
                {t}
                {active && (
                  <span className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                )}
              </button>
            );
          })}
        </div>

        {/* tab content */}
        {tab === "Problem" ? (
          <div className="flex flex-col gap-5">
            <p className="text-[14px] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
              Given an array of integers nums and an integer target, return indices of
              the two numbers such that they add up to target.
            </p>

            {[
              { t: "Example 1:", input: "nums = [2,7,11,15], target = 9", output: "[0,1]", exp: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
              { t: "Example 2:", input: "nums = [3,2,4], target = 6", output: "[1,2]" },
            ].map((ex) => (
              <div key={ex.t} className="flex flex-col gap-3">
                <h3 className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>{ex.t}</h3>
                <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Input: </strong>{ex.input}
                </p>
                <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Output: </strong>{ex.output}
                </p>
                {ex.exp && (
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>Explanation: </strong>{ex.exp}
                  </p>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <h3 className="text-[15px] font-bold" style={{ color: "var(--text-primary)" }}>Constraints:</h3>
              <ul className="flex flex-col gap-[6px] text-[14px]" style={{ color: "var(--text-secondary)" }}>
                {["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-[14px] py-8 text-center" style={{ color: "var(--text-muted)" }}>
            No {tab.toLowerCase()} yet.
          </p>
        )}
      </div>
    </section>
  );
}

function CodeEditor({ language, onLanguageChange }: { language: string; onLanguageChange: (l: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col" style={{ backgroundColor: "var(--ws-editor-bg)" }}>
      {/* header */}
      <div
        className="flex items-center justify-between gap-4 flex-wrap px-6 h-14 border-b shrink-0"
        style={{ borderColor: "var(--border)" }}
      >
        <h2 className="text-[16px] font-semibold" style={{ color: "var(--text-primary)" }}>Code Editor</h2>

        {/* language selector */}
        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Select language"
            className="flex items-center justify-between gap-3 h-11 w-[220px] sm:w-[300px] md:w-[340px] px-4 rounded-lg border transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ backgroundColor: "var(--ws-panel-bg)", borderColor: "var(--ws-input-border)", color: "var(--text-primary)" }}
          >
            <span className="text-[14px] font-medium">{language}</span>
            <span style={{ color: "var(--ws-muted)" }} className={open ? "rotate-180 transition-transform" : "transition-transform"}>
              <ChevronDownIcon />
            </span>
          </button>
          {open && (
            <ul
              role="listbox"
              className="absolute z-20 mt-1 w-full rounded-lg border py-1 overflow-hidden"
              style={{ backgroundColor: "var(--ws-panel-bg)", borderColor: "var(--ws-input-border)", boxShadow: "var(--shadow-card)" }}
            >
              {LANGUAGES.map((l) => (
                <li key={l}>
                  <button
                    role="option"
                    aria-selected={l === language}
                    onClick={() => { onLanguageChange(l); setOpen(false); }}
                    className="w-full text-left px-4 py-2 text-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                    style={{ color: l === language ? "var(--accent)" : "var(--text-primary)", fontWeight: l === language ? 600 : 400 }}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* autosave status */}
        <div className="flex items-center gap-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <span className="flex items-center gap-2 text-[13px]" style={{ color: "var(--ws-tab-inactive)" }}>
            <AutoSaveIcon /> Auto Save
          </span>
          <span className="flex items-center gap-2 text-[13px] font-medium" style={{ color: "var(--status-ok)" }}>
            <span className="size-2 rounded-full" style={{ backgroundColor: "var(--status-ok)" }} aria-hidden /> Saved
          </span>
        </div>
      </div>

      {/* code area */}
      <div className="flex gap-4 px-6 pt-4 pb-6 overflow-x-auto" style={{ minHeight: 340 }}>
        {/* line numbers */}
        <div
          className="flex flex-col gap-[6px] text-right text-[13px] select-none shrink-0"
          style={{ fontFamily: "'Roboto Mono', monospace", color: "var(--ws-line-num)", lineHeight: "22px" }}
          aria-hidden
        >
          {CODE_LINES.map((_, i) => (
            <span key={i} className="w-4">{i + 1}</span>
          ))}
        </div>
        {/* code */}
        <pre
          className="flex flex-col gap-[6px] text-[13px] m-0"
          style={{ fontFamily: "'Roboto Mono', monospace", lineHeight: "22px" }}
        >
          {CODE_LINES.map((line, i) => (
            <code key={i} className="whitespace-pre">
              {line.map((seg, j) => (
                <span key={j} style={{ color: seg.kw ? "var(--code-keyword)" : "var(--code-default)" }}>{seg.t}</span>
              ))}
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
}

function TestcasePanel() {
  const [tab, setTab] = useState<"testcase" | "custom">("testcase");
  const [active, setActive] = useState(0);
  const tc = TESTCASES[active];
  const [customInput, setCustomInput] = useState("");

  const fieldStyle = {
    backgroundColor: "var(--ws-input-bg)",
    borderColor: "var(--ws-input-border)",
    color: "var(--ws-input-text)",
    fontFamily: "'JetBrains Mono', monospace",
  } as const;

  return (
    <div className="flex flex-col border-t flex-1" style={{ borderColor: "var(--border)", backgroundColor: "var(--ws-editor-bg)" }}>
      {/* top tabs */}
      <div className="flex gap-6 px-6 pt-4 border-b" style={{ borderColor: "var(--border)" }} role="tablist" aria-label="Test input mode">
        {([["testcase", "Testcase"], ["custom", "Custom Input"]] as const).map(([id, label]) => {
          const on = tab === id;
          return (
            <button
              key={id}
              role="tab"
              aria-selected={on}
              onClick={() => setTab(id)}
              className="relative pb-3 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
              style={{ color: on ? "#4f46e5" : "var(--ws-tab-inactive)", fontWeight: on ? 700 : 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {label}
              {on && <span className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: "#4f46e5" }} />}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 px-6 py-5">
        {tab === "testcase" ? (
          <>
            {/* testcase selector */}
            <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Test cases">
              {TESTCASES.map((_, i) => {
                const on = active === i;
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className="h-[38px] px-4 rounded-lg text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    style={
                      on
                        ? { backgroundColor: "var(--ws-input-bg)", border: "1px solid var(--ws-input-border)", color: "var(--text-primary)", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }
                        : { color: "var(--ws-tab-inactive)", fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }
                    }
                  >
                    Testcase {i + 1}
                  </button>
                );
              })}
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>nums =</span>
              <input readOnly value={tc.nums} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" style={fieldStyle} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>target =</span>
              <input readOnly value={tc.target} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" style={fieldStyle} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Expected Output</span>
              <input readOnly value={tc.expected} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" style={fieldStyle} />
            </label>
          </>
        ) : (
          <label className="flex flex-col gap-2">
            <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Custom input</span>
            <textarea
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Enter your own test input…"
              rows={5}
              className="px-4 py-3 rounded-lg border text-[14px] resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={fieldStyle}
            />
          </label>
        )}

        <div>
          <button
            className="h-10 px-6 rounded-lg text-[14px] font-bold text-white transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
            style={{ backgroundColor: "#4f46e5", boxShadow: "var(--ws-run-shadow)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function AssessmentWorkspace({
  assessmentName, dark, onToggleTheme, onBack,
}: {
  assessmentName: string;
  dark: boolean;
  onToggleTheme: () => void;
  onBack: () => void;
}) {
  const [language, setLanguage] = useState("Python 3");

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: "var(--bg-page)" }}>
      {/* ── Top navbar ── */}
      <header
        className="flex items-center justify-between gap-4 px-6 h-[50px] border-b shrink-0"
        style={{ backgroundColor: "var(--bg-navbar)", borderColor: "var(--border-navbar)" }}
      >
        <div className="flex items-center gap-6 sm:gap-8 min-w-0">
          <button onClick={onBack} className="flex items-center gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg" aria-label="Back to dashboard">
            <LogoIcon />
            <span className="font-copperplate text-[20px] font-bold leading-none select-none hidden sm:inline" style={{ color: "var(--text-primary)" }}>
              {`Ipsum<Code>`}
            </span>
          </button>
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="text-[16px] font-semibold truncate" style={{ color: "var(--text-primary)" }}>{assessmentName}</p>
            <span className="flex items-center gap-[6px] text-[12px]" style={{ color: "var(--text-secondary)" }}>
              <span className="size-[6px] rounded-full" style={{ backgroundColor: "var(--accent)" }} aria-hidden /> Live Test
            </span>
          </div>
        </div>

        {/* centre timer */}
        <div className="hidden md:flex items-center gap-[10px]" style={{ color: "var(--text-primary)" }} role="timer" aria-label="Time remaining 1 hour 29 minutes 45 seconds">
          <TimerIcon />
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold leading-tight">01:29:45</span>
            <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Time Remaining</span>
          </div>
        </div>

        {/* right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            aria-label="Flag question for review"
            className="flex items-center justify-center size-11 rounded-xl border transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ borderColor: "var(--ws-btn-border)", color: "var(--ws-muted)" }}
          >
            <FlagIcon />
          </button>
          <button
            className="h-[44px] px-5 rounded-lg text-[14px] font-semibold text-white transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Submit Test
          </button>
        </div>
      </header>

      {/* ── Split workspace ── */}
      <div className="flex flex-1 flex-col lg:flex-row min-h-0 overflow-y-auto lg:overflow-hidden">
        <QuestionPanel title="Two Sum" difficulty="Medium" onBack={onBack} onNext={() => {}} />

        <main className="flex flex-col flex-1 min-w-0 lg:overflow-y-auto" aria-label="Code editor and test cases">
          <CodeEditor language={language} onLanguageChange={setLanguage} />
          <TestcasePanel />
        </main>
      </div>
    </div>
  );
}
