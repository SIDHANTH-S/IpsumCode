import { useState, useRef, useCallback } from "react";
import svgPaths from "@/assets/icons/assessment-icons";
import CodeEditor from "@/components/CodeEditor";
import { ResizableWorkspace } from "@/components/ResizableWorkspace";

const TESTCASES = [
  { nums: "[2,7,11,15]", target: "9", expected: "[0,1]" },
  { nums: "[3,2,4]",     target: "6", expected: "[1,2]" },
  { nums: "[3,3]",       target: "6", expected: "[0,1]" },
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

function SunIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      {[[12,2,12,4],[12,20,12,22],[4,12,2,12],[22,12,20,12]].map((c,i)=>(
        <path key={i} d={`M${c[0]} ${c[1]}L${c[2]} ${c[3]}`} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
      ))}
      {[[5.6,5.6,4.2,4.2],[19.8,19.8,18.4,18.4],[18.4,5.6,19.8,4.2],[4.2,19.8,5.6,18.4]].map((c,i)=>(
        <path key={i+4} d={`M${c[0]} ${c[1]}L${c[2]} ${c[3]}`} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

// ─── Panels ────────────────────────────────────────────────────────────────

function QuestionPanel({
  title, difficulty, onBack, onNext,
}: { title: string; difficulty: string; onBack: () => void; onNext: () => void }) {
  return (
    <section
      className="flex flex-col size-full overflow-y-auto"
      style={{ backgroundColor: "var(--ws-panel-bg)" }}
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

        {/* tab content */}
        <div className="flex flex-col gap-5 mt-2">
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
      </div>
    </section>
  );
}

function TestcasePanel() {
  const [active, setActive] = useState(0);
  const tc = TESTCASES[active];

  const fieldStyle = {
    backgroundColor: "var(--ws-input-bg)",
    borderColor: "var(--ws-input-border)",
    color: "var(--ws-input-text)",
    fontFamily: "'JetBrains Mono', monospace",
  } as const;

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ backgroundColor: "var(--ws-editor-bg)" }}>
      <div className="flex flex-col gap-4 px-6 py-5">
        {/* testcase selector */}
        <div className="flex gap-2 flex-wrap h-[36px] items-center" role="tablist" aria-label="Test cases">
          {TESTCASES.map((_, i) => {
            const on = active === i;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className="h-[36px] px-4 rounded-lg text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0 font-segoe capitalize"
                style={
                  on
                    ? { backgroundColor: "var(--ws-input-bg)", border: "1px solid var(--ws-input-border)", color: "var(--text-primary)", fontWeight: 600 }
                    : { color: "var(--ws-tab-inactive)", fontWeight: 500 }
                }
              >
                Testcase {i + 1}
              </button>
            );
          })}
        </div>

        <label className="flex flex-col gap-2 mt-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>nums =</span>
              <input readOnly value={tc.nums} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0" style={fieldStyle} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>target =</span>
              <input readOnly value={tc.target} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0" style={fieldStyle} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[14px] font-medium" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Expected Output</span>
              <input readOnly value={tc.expected} className="h-[42px] px-4 rounded-lg border text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0" style={fieldStyle} />
            </label>

        <div className="pt-2">
          <button
            className="h-10 px-6 rounded-lg text-[14px] font-bold text-white transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] shrink-0"
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
  const [language, setLanguage] = useState<"Python 3" | "Java" | "C++" | "C">("Python 3");
  const [leftWidth, setLeftWidth] = useState(45); // percentage
  const [topHeight, setTopHeight] = useState(65); // percentage
  const editorHandleRef = useRef<{ layout: () => void } | null>(null);

  // After every resize tick, give Monaco the real pixel dims
  const handleLeftResize = useCallback((w: number) => {
    setLeftWidth(w);
    editorHandleRef.current?.layout();
  }, []);

  const handleTopResize = useCallback((h: number) => {
    setTopHeight(h);
    editorHandleRef.current?.layout();
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col" style={{ backgroundColor: "var(--bg-page)" }}>
      {/* ── Top navbar ── */}
      <header
        className="flex items-center justify-between gap-4 px-6 h-[50px] border-b shrink-0"
        style={{ backgroundColor: "var(--bg-navbar)", borderColor: "var(--border-navbar)" }}
      >
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          <button onClick={onBack} className="flex items-center gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg shrink-0" aria-label="Back to dashboard">
            <LogoIcon />
            <span className="font-copperplate text-[20px] font-bold leading-none select-none hidden sm:inline" style={{ color: "var(--text-primary)" }}>
              {`Ipsum<Code>`}
            </span>
          </button>
          <div className="flex flex-col justify-center min-w-0">
            <p className="text-[16px] font-semibold truncate" style={{ color: "var(--text-primary)" }}>{assessmentName}</p>
          </div>
        </div>

        {/* centre timer */}
        <div className="hidden lg:flex items-center gap-[10px]" style={{ color: "var(--text-primary)" }} role="timer" aria-label="Time remaining 1 hour 29 minutes 45 seconds">
          <TimerIcon />
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold leading-tight">01:29:45</span>
            <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Time Remaining</span>
          </div>
        </div>

        {/* right controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            style={{ color: "var(--text-muted)" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          
          <button
            className="h-[38px] px-5 rounded-lg text-[14px] font-semibold text-white transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Submit Test
          </button>
        </div>
      </header>

      {/* ── Split workspace ── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ResizableWorkspace
          left={<QuestionPanel title="Two Sum" difficulty="Medium" onBack={onBack} onNext={() => {}} />}
          right={null}
          leftWidth={leftWidth}
          onLeftResize={handleLeftResize}
          minLeft={30}
          maxLeft={60}
          top={
            <CodeEditor
              language={language}
              onLanguageChange={setLanguage}
              dark={dark}
              onEditorRef={(h) => { editorHandleRef.current = h; }}
            />
          }
          bottom={<TestcasePanel />}
          topHeight={topHeight}
          onTopResize={handleTopResize}
          minTop={30}
          maxTop={75}
        />
      </div>
    </div>
  );
}
