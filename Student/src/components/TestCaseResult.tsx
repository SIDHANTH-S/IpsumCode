import { AlertTriangle, CheckCircle, XCircle, Plug, Check, X } from 'lucide-react';

interface Props {
  result: any;
  mode: 'run' | 'submit';
}

export default function TestCaseResult({ result, mode }: Props) {
  const isCompileError = result.status?.id === 6 || result.results?.[0]?.status?.id === 6;
  const isConnectionError = result.status?.id === 13 && result.message?.includes("failed to spawn"); // Basic proxy for connection issues
  
  const resultsArray = result.results || (result.status ? [result] : []);
  const allPassed = resultsArray.length > 0 && resultsArray.every((t: any) => t.status?.id === 3 || t.passed);

  if (isConnectionError || result.error) {
    return (
      <div className="flex flex-col gap-2 text-[13px] font-mono">
        <div className="flex items-start gap-2 px-3 py-2 rounded-lg border bg-[#ef4444]/10 border-[#ef4444]/20 text-[#ef4444]">
          <Plug className="w-4 h-4 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold mb-1">Execution Error</p>
            <p className="text-[12px] opacity-90 leading-relaxed">
              {result.error || result.stderr || result.message || 'Could not connect to execution engine.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 text-[13px] font-mono w-full">
      {/* Status banner */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
          isCompileError
            ? 'bg-[#ef4444]/10 border-[#ef4444]/20 text-[#ef4444]'
            : allPassed
            ? 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]'
            : 'bg-[#ef4444]/10 border-[#ef4444]/20 text-[#ef4444]'
        }`}
      >
        {isCompileError ? (
          <AlertTriangle className="w-4 h-4 shrink-0" />
        ) : allPassed ? (
          <CheckCircle className="w-4 h-4 shrink-0" />
        ) : (
          <XCircle className="w-4 h-4 shrink-0" />
        )}
        <span className="font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {isCompileError
            ? 'Compilation Error'
            : allPassed
            ? mode === 'submit'
              ? 'All Test Cases Passed ✓'
              : 'Sample Test Passed ✓'
            : mode === 'submit'
            ? 'Wrong Answer / Failed Tests'
            : 'Execution Failed'}
        </span>
        {resultsArray[0]?.time && (
          <span className="ml-auto text-[11px] opacity-70">
            {Math.max(...resultsArray.map((r: any) => parseFloat(r.time || '0'))).toFixed(3)}s
          </span>
        )}
      </div>

      {/* Compile error output */}
      {isCompileError && (resultsArray[0]?.compile_output || resultsArray[0]?.stderr) && (
        <div className="rounded-lg p-3 text-[#ef4444] whitespace-pre-wrap leading-relaxed border"
             style={{ backgroundColor: "var(--ws-input-bg)", borderColor: "var(--ws-input-border)" }}>
          {resultsArray[0]?.compile_output || resultsArray[0]?.stderr}
        </div>
      )}

      {/* Per-test results */}
      {!isCompileError && resultsArray.map((tc: any, i: number) => {
        const passed = tc.status?.id === 3 || tc.passed;
        const isHidden = tc.isHidden;
        
        return (
          <div key={i} className={`border rounded-lg overflow-hidden ${passed ? 'border-[#10b981]/20' : 'border-[#ef4444]/20'}`}>
            {/* Row header */}
            <div className={`px-3 py-2 flex items-center gap-2 border-b ${passed ? 'bg-[#10b981]/10 border-[#10b981]/10' : 'bg-[#ef4444]/10 border-[#ef4444]/10'}`}>
              {passed ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <X className="w-3.5 h-3.5 text-[#ef4444]" />}
              <span className={`font-semibold text-[12px] ${passed ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                {mode === 'submit' 
                  ? (isHidden ? `Hidden Test Case ${i + 1}` : `Sample Test Case ${i + 1}`) 
                  : (result.isCustom ? `Custom Input Result` : `Sample Test Case ${i + 1}`)}
              </span>
              <span className="ml-auto text-[10px] opacity-70">{tc.time ? `${tc.time}s` : ''}</span>
            </div>

            {/* Row body */}
            <div className="px-3 py-3 space-y-2" style={{ backgroundColor: "var(--ws-input-bg)" }}>
              {tc.message && tc.message.includes('Local Fallback') && (
                <div className="text-[11px] text-[#f59e0b] mb-2">{tc.message}</div>
              )}
              
              {tc.stderr && !isCompileError && (
                <div className="mb-2">
                  <span className="text-[12px] text-[#f59e0b] font-semibold">Runtime Error:</span>
                  <div className="text-[#ef4444] whitespace-pre-wrap mt-1">{tc.stderr}</div>
                </div>
              )}

              {isHidden ? (
                <div className="text-[12px]" style={{ color: "var(--ws-muted)" }}>
                  <i>Test case details are hidden.</i>
                </div>
              ) : (
                <>
                  {tc.input !== undefined && tc.input !== null && (
                    <div>
                      <span className="text-[12px] opacity-60">Input:</span>
                      <div className="whitespace-pre mt-0.5" style={{ color: "var(--ws-input-text)" }}>{tc.input || '(empty)'}</div>
                    </div>
                  )}
                  {tc.expected !== undefined && tc.expected !== null && (
                    <div className="mt-2">
                      <span className="text-[12px] opacity-60">Expected:</span>
                      <div className="whitespace-pre mt-0.5 text-[#10b981]">{tc.expected || '(empty)'}</div>
                    </div>
                  )}
                  {!tc.stderr && (
                    <div className="mt-2">
                      <span className="text-[12px] opacity-60">Output:</span>
                      <div className={`whitespace-pre mt-0.5 ${!tc.expected ? 'text-[var(--ws-input-text)]' : passed ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                        {tc.stdout || '(empty)'}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
