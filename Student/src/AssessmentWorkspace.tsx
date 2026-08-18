import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "./services/api";
import svgPaths from "@/assets/icons/assessment-icons";
import CodeEditor from "@/components/CodeEditor";
import { ResizableWorkspace } from "@/components/ResizableWorkspace";
import TestCaseResult from "@/components/TestCaseResult";
import { Loader2 } from "lucide-react";

// ─── Countdown ────────────────────────────────────────────────────────────────
function useCountdown(deadlineAt: string | null) {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    if (!deadlineAt) return;
    const target = new Date(deadlineAt).getTime();
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadlineAt]);
  const s = Math.floor(remaining / 1000);
  const h = Math.floor(s / 3600).toString().padStart(2, "0");
  const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

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
  title, difficulty, content, onBack, onNext, onPrev
}: { title: string; difficulty: string; content: string; onBack: () => void; onNext: () => void; onPrev: () => void }) {
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
            onClick={onPrev}
            aria-label="Previous question"
            className="flex items-center justify-center size-8 rounded-lg border transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ borderColor: "var(--ws-btn-border)", color: "var(--ws-muted)" }}
          >
            <BackIcon />
          </button>
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

        {/* tab content */}
        <div className="flex flex-col gap-5 mt-2">
          <div className="text-[14px] leading-[1.6]" style={{ color: "var(--text-secondary)", whiteSpace: "pre-wrap" }}>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsolePanel({ onRun, runResult, isRunning, runMode, question }: any) {
  const hasSampleTestCases = question?.sampleTestCases && question.sampleTestCases.length > 0;

  return (
    <div className="flex flex-col size-full overflow-y-auto" style={{ backgroundColor: "var(--ws-editor-bg)" }}>
      <div className="flex flex-col gap-4 px-6 py-4">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: "var(--ws-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Console
          </span>
          <button
            onClick={onRun}
            disabled={isRunning}
            className="h-9 px-5 rounded-lg text-[13px] font-bold text-white transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ backgroundColor: "#4f46e5", boxShadow: "var(--ws-run-shadow)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {isRunning && runMode === 'run' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
            Run Code
          </button>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-3 pt-3 border-t" style={{ borderColor: "var(--ws-btn-border)" }}>
          {isRunning ? (
            <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--ws-muted)" }}>
              <Loader2 className="w-4 h-4 animate-spin" style={{ color: "var(--accent)" }} />
              {runMode === 'run' ? 'Running against sample test cases...' : 'Submitting against all test cases...'}
            </div>
          ) : runResult ? (
            <TestCaseResult result={runResult} mode={runMode ?? 'run'} />
          ) : hasSampleTestCases ? (
            <div className="flex flex-col gap-3">
              {question.sampleTestCases.map((tc: any, i: number) => (
                <div key={i} className="border rounded-lg overflow-hidden" style={{ borderColor: "var(--ws-input-border)" }}>
                  <div className="px-3 py-2 flex items-center border-b" style={{ backgroundColor: "var(--ws-input-bg)", borderColor: "var(--ws-input-border)" }}>
                    <span className="font-semibold text-[12px]" style={{ color: "var(--ws-muted)" }}>Sample Test Case {i + 1}</span>
                  </div>
                  <div className="px-3 py-3 space-y-2" style={{ backgroundColor: "var(--ws-input-bg)" }}>
                    {tc.input && (
                      <div>
                        <span className="text-[12px] opacity-60" style={{ color: "var(--ws-muted)" }}>Input:</span>
                        <div className="whitespace-pre mt-0.5 text-[13px]" style={{ color: "var(--ws-input-text)", fontFamily: "'JetBrains Mono', monospace" }}>{tc.input}</div>
                      </div>
                    )}
                    {tc.expectedOutput && (
                      <div className="mt-2">
                        <span className="text-[12px] opacity-60" style={{ color: "var(--ws-muted)" }}>Expected Output:</span>
                        <div className="whitespace-pre mt-0.5 text-[13px]" style={{ color: "var(--ws-input-text)", fontFamily: "'JetBrains Mono', monospace" }}>{tc.expectedOutput}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[13px]" style={{ color: "var(--ws-muted)" }}>
              Click <strong>Run Code</strong> to test your solution.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function AssessmentWorkspace({
  attemptId, assessmentName, dark, onToggleTheme, onBack,
}: {
  attemptId?: string;
  assessmentName?: string;
  dark: boolean;
  onToggleTheme: () => void;
  onBack: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;

  const [language, setLanguage] = useState<"PYTHON" | "JAVA" | "CPP" | "C" | "JS">("PYTHON");
  const [isRunning, setIsRunning] = useState(false);
  const [runMode, setRunMode] = useState<'run' | 'submit' | null>(null);
  const [runResult, setRunResult] = useState<any>(null);

  // Real countdown from deadlineAt
  const timeLabel = useCountdown(state?.deadlineAt ?? null);

  const [leftWidth, setLeftWidth] = useState(45); // percentage
  const [topHeight, setTopHeight] = useState(65); // percentage
  const editorHandleRef = useRef<{ layout: () => void, getValue: () => string } | null>(null);

  const backendToEditorLang: Record<string, string> = {
    "PYTHON": "Python 3",
    "JAVA": "Java",
    "CPP": "C++",
    "C": "C",
  };

  const editorToBackendLang: Record<string, any> = {
    "Python 3": "PYTHON",
    "Java": "JAVA",
    "C++": "CPP",
    "C": "C",
  };

  const [questionIdx, setQuestionIdx] = useState(0);
  const [question, setQuestion] = useState<any>(null);

  useEffect(() => {
    if (!attemptId || !state?.snapshots) return;
    const qid = state.snapshots[questionIdx]?.questionId;
    if (qid) {
      api.getQuestion(attemptId, qid).then(q => {
        setQuestion(q);
        setRunResult(null); // Clear previous output
      }).catch(console.error);
    }
  }, [attemptId, state, questionIdx]);

  const handleRun = async () => {
    if (!attemptId || !question) return;
    try {
      setIsRunning(true);
      setRunMode('run');
      setRunResult(null);
      
      const code = editorHandleRef.current?.getValue() || "";
      const res = await api.runCode(attemptId, question.id, { language, sourceCode: code });
      setRunResult(res);
    } catch (err: any) {
      console.error(err);
      setRunResult({ error: err.response?.data?.error || "Failed to run code" });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (!attemptId || !question) return;
    try {
      setIsRunning(true);
      setRunMode('submit');
      setRunResult(null);
      
      const code = editorHandleRef.current?.getValue() || "";
      const res = await api.submitCode(attemptId, question.id, { language, sourceCode: code });
      
      // Pass the entire response object (which includes results array and submission metadata)
      setRunResult(res);
    } catch (err: any) {
      console.error(err);
      setRunResult({ error: err.response?.data?.error || "Failed to submit code" });
    } finally {
      setIsRunning(false);
    }
  };

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

        {/* centre: real countdown */}
        <div className="hidden lg:flex items-center gap-[10px]" style={{ color: "var(--text-primary)" }} role="timer" aria-live="off">
          <TimerIcon />
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-semibold leading-tight tabular-nums">{timeLabel}</span>
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
            onClick={handleSubmit}
            disabled={isRunning}
            className="flex items-center justify-center h-[38px] px-5 rounded-lg text-[14px] font-semibold text-white transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {isRunning && runMode === 'submit' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Submit Test
          </button>
        </div>
      </header>

      {/* ── Split workspace ── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {question ? (
          <ResizableWorkspace
            left={<QuestionPanel title={question.title} difficulty={question.difficulty} content={question.content} onBack={onBack} onPrev={() => setQuestionIdx(i => Math.max(0, i - 1))} onNext={() => setQuestionIdx(i => Math.min((state?.snapshots?.length || 1) - 1, i + 1))} />}
            right={null}
            leftWidth={leftWidth}
            onLeftResize={handleLeftResize}
            minLeft={30}
            maxLeft={60}
            top={
              <CodeEditor
                language={backendToEditorLang[language] as any || "Python 3"} 
                onLanguageChange={(l) => setLanguage(editorToBackendLang[l as string] || "PYTHON")}
                dark={dark}
                onEditorRef={(h) => { editorHandleRef.current = h; }}
              />
            }
            bottom={<ConsolePanel onRun={handleRun} runResult={runResult} isRunning={isRunning} runMode={runMode} question={question} />}
            topHeight={topHeight}
            onTopResize={handleTopResize}
            minTop={30}
            maxTop={75}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white">Loading question...</div>
        )}
      </div>
    </div>
  );
}
