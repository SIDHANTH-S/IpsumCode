import {
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import type { editor as monacoEditorNS } from "monaco-editor";

// ─── Constants ───────────────────────────────────────────────────────────────

const LANGUAGES = ["Python 3", "Java", "C++", "C"] as const;
type Lang = (typeof LANGUAGES)[number];

const LANGUAGE_MAP: Record<Lang, string> = {
  "Python 3": "python",
  Java: "java",
  "C++": "cpp",
  C: "c",
};

const STARTER_CODE: Record<Lang, string> = {
  "Python 3": `import sys

def main():
    input_data = sys.stdin.read().split()
    # TODO: parse input_data and write your solution


if __name__ == "__main__":
    main()
`,

  Java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // TODO: read input and write your solution

    }
}
`,

  "C++": `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // TODO: read input and write your solution

    return 0;
}
`,

  C: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // TODO: read input and write your solution

    return 0;
}
`,
};


// Stable model URIs — one per language, never recreated
const MODEL_URIS: Record<Lang, string> = {
  "Python 3": "inmemory://solution.py",
  Java: "inmemory://solution.java",
  "C++": "inmemory://solution.cpp",
  C: "inmemory://solution.c",
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12" aria-hidden>
      <path
        d="M3 4.5l3 3 3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FormatIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 16 16" width="14" aria-hidden>
      <path
        d="M2 4h12M2 8h8M2 12h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 16 16" width="14" aria-hidden>
      <path
        d="M4 6v3.5A4.5 4.5 0 1 0 8.5 5M4 3v3h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 16 16" width="14" aria-hidden>
      <path
        d="M14 2L9 7M14 2h-4M14 2v4M2 14l5-5M2 14h4M2 14v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Component props ──────────────────────────────────────────────────────────

export interface CodeEditorProps {
  language: Lang;
  onLanguageChange: (lang: Lang) => void;
  dark: boolean;
  /** Called every time the drag-resize finishes so we can force layout() */
  onEditorRef?: (ref: { layout: () => void; getValue: () => string } | null) => void;
}

// ─── CodeEditor ───────────────────────────────────────────────────────────────
/**
 * Monaco-backed code editor with:
 *  - Stable per-language models (no remount on language switch)
 *  - Font-ready guard: Monaco only initialises after Roboto Mono has loaded
 *  - Imperative layout() exposed so the parent can call it after split-pane resize
 *  - Uncontrolled value (Monaco owns the document; we only seed the initial value)
 *  - Autocomplete/IntelliSense fully disabled (assessment environment)
 *  - Theme follows dark prop without remounting the editor
 */
export default function CodeEditor({
  language,
  onLanguageChange,
  dark,
  onEditorRef,
}: CodeEditorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fontReady, setFontReady] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monacoEditorNS.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import("monaco-editor") | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLang = useRef<Lang>(language);

  const monaco = useMonaco();

  // ── 1. Font-ready guard ──────────────────────────────────────────────────
  // Wait until Roboto Mono is available from the browser font cache.
  // This prevents Monaco from measuring character widths with the fallback
  // font and caching wrong values — which is the primary cursor mismatch cause.
  useEffect(() => {
    const fontSpec = "14px 'Roboto Mono'";
    if (document.fonts && document.fonts.check(fontSpec)) {
      setFontReady(true);
      return;
    }
    document.fonts.ready.then(() => {
      // Extra check: Google Fonts may still be downloading
      if (document.fonts.check(fontSpec)) {
        setFontReady(true);
      } else {
        document.fonts.load(fontSpec).then(() => setFontReady(true));
      }
    });
  }, []);

  // ── 2. Theme changes — no remount needed ─────────────────────────────────
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;
    monacoRef.current.editor.setTheme(dark ? "vs-dark" : "vs");
  }, [dark]);

  // ── 3. Language switch — swap model, preserve undo/cursor ────────────────
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current || !fontReady) return;
    if (currentLang.current === language) return;
    currentLang.current = language;

    const m = monacoRef.current;
    const uri = m.Uri.parse(MODEL_URIS[language]);
    let model = m.editor.getModel(uri);
    if (!model) {
      model = m.editor.createModel(
        STARTER_CODE[language],
        LANGUAGE_MAP[language],
        uri
      );
    }
    editorRef.current.setModel(model);
    editorRef.current.focus();
  }, [language, fontReady]);

  // ── 4. Expose imperative layout() to parent ───────────────────────────────
  useEffect(() => {
    if (!onEditorRef) return;
    onEditorRef({
      layout: () => {
        if (editorRef.current && containerRef.current) {
          const { clientWidth, clientHeight } = containerRef.current;
          editorRef.current.layout({ width: clientWidth, height: clientHeight });
        }
      },
      getValue: () => {
        return editorRef.current?.getValue() || "";
      }
    });
    return () => onEditorRef(null);
  }, [onEditorRef]);

  // ── 5. Close dropdown on outside click ───────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── 6. ResizeObserver — call layout() whenever container size changes ─────
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      if (editorRef.current && containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        editorRef.current.layout({ width: clientWidth, height: clientHeight });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── 7. Editor mount callback ──────────────────────────────────────────────
  const handleEditorDidMount = useCallback(
    (
      editor: monacoEditorNS.IStandaloneCodeEditor,
      m: typeof import("monaco-editor")
    ) => {
      editorRef.current = editor;
      monacoRef.current = m;

      // Ensure the initial model is keyed by URI so language switching
      // can retrieve it without recreating.
      const uri = m.Uri.parse(MODEL_URIS[language]);
      let model = m.editor.getModel(uri);
      if (!model) {
        model = m.editor.createModel(
          STARTER_CODE[language],
          LANGUAGE_MAP[language],
          uri
        );
      }
      editor.setModel(model);

      // Force an immediate layout with real pixel dimensions
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        editor.layout({ width: clientWidth, height: clientHeight });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // deliberately empty: we only want this to run once on mount
  );

  // ── 8. Format action ─────────────────────────────────────────────────────
  const handleFormat = () => {
    editorRef.current?.getAction("editor.action.formatDocument")?.run();
  };

  // ── 9. Reset ─────────────────────────────────────────────────────────────
  const handleReset = () => {
    if (!editorRef.current || !monacoRef.current) return;
    const uri = monacoRef.current.Uri.parse(MODEL_URIS[language]);
    const model =
      monacoRef.current.editor.getModel(uri) ?? editorRef.current.getModel();
    if (model) {
      // Use pushEditOperations so it's undoable
      const fullRange = model.getFullModelRange();
      model.pushEditOperations(
        [],
        [{ range: fullRange, text: STARTER_CODE[language] }],
        () => null
      );
    }
  };

  const btnStyle =
    "flex items-center justify-center size-7 rounded-md transition-colors " +
    "hover:bg-black/5 dark:hover:bg-white/10 text-[var(--ws-muted)] hover:text-[var(--text-primary)]";

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className="flex flex-col size-full overflow-hidden"
      style={{ backgroundColor: "var(--ws-editor-bg)" }}
    >
      {/* ── Toolbar ── */}
      <div
        className="flex h-8 items-center justify-between border-b px-[10px] shrink-0"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex h-full items-center gap-1">
          {/* Language selector */}
          <div className="relative flex items-center h-full py-1" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((o) => !o)}
              className="flex items-center gap-1.5 h-full px-1.5 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              style={{ color: "var(--text-primary)" }}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <span className="text-[13px] font-medium leading-none">
                {language}
              </span>
              <span className="text-[var(--ws-muted)]">
                <ChevronDownIcon />
              </span>
            </button>

            {isDropdownOpen && (
              <div
                role="listbox"
                aria-label="Language selector"
                className="absolute top-full left-0 mt-1 w-40 rounded-lg shadow-lg border z-50 overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    role="option"
                    aria-selected={l === language}
                    onClick={() => {
                      onLanguageChange(l);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                    style={{
                      color: l === language ? "var(--accent)" : "var(--text-primary)",
                      fontWeight: l === language ? 600 : 500,
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex h-full items-center gap-0.5">
          <button className={btnStyle} onClick={handleFormat} title="Format Code">
            <FormatIcon />
          </button>
          <button className={btnStyle} onClick={handleReset} title="Reset to default code">
            <ResetIcon />
          </button>
          <button className={btnStyle} title="Expand Editor">
            <ExpandIcon />
          </button>
        </div>
      </div>

      {/* ── Editor container ── */}
      {/*
        ref={containerRef} is on THIS div so we can read real pixel dimensions
        and pass them to editor.layout(). Monaco's own container must fill it.
        overflow:hidden prevents the editor from escaping its slot.
      */}
      <div ref={containerRef} className="flex-1 min-h-0 overflow-hidden">
        {fontReady ? (
          <Editor
            // No height="100%" — we drive layout() imperatively so Monaco
            // always knows its exact pixel size. We still need a CSS height.
            height="100%"
            // Do NOT pass `language` or `value` here — we manage models ourselves
            // via onMount so that switching language never remounts the editor.
            defaultLanguage={LANGUAGE_MAP[language]}
            defaultValue={STARTER_CODE[language]}
            theme={dark ? "vs-dark" : "vs"}
            onMount={handleEditorDidMount}
            options={{
              // Layout
              automaticLayout: false, // We drive layout() ourselves via ResizeObserver
              // Font — must match what's loaded in index.css
              fontFamily: "'Roboto Mono', 'Courier New', monospace",
              fontSize: 14,
              lineHeight: 22,
              fontLigatures: false,
              // Rendering
              minimap: { enabled: false },
              padding: { top: 12, bottom: 16 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              cursorBlinking: "smooth",
              cursorSmoothCaretAnimation: "on",
              renderLineHighlight: "all",
              roundedSelection: true,
              // Disable all autocomplete / IntelliSense
              suggestOnTriggerCharacters: false,
              quickSuggestions: false,
              parameterHints: { enabled: false },
              suggest: {
                showWords: false,
                showClasses: false,
                showFunctions: false,
                showVariables: false,
                showModules: false,
                showKeywords: false,
              },
              inlineSuggest: { enabled: false },
              wordBasedSuggestions: "off",
              snippetSuggestions: "none",
              lightbulb: { enabled: "off" as never },
              hover: { enabled: false as never },
              // Keep normal editing
              bracketPairColorization: { enabled: true },
              folding: true,
              autoClosingBrackets: "always",
              autoClosingQuotes: "always",
              formatOnPaste: false,
              formatOnType: false,
              tabSize: 4,
              insertSpaces: true,
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
            }}
          />
        ) : (
          // Skeleton shown while waiting for font — avoids a blank flash
          <div
            className="flex h-full items-center justify-center text-[13px]"
            style={{ color: "var(--ws-muted)" }}
          >
            Loading editor…
          </div>
        )}
      </div>
    </div>
  );
}
