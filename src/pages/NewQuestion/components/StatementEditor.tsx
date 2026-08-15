import { useEffect, useId, useRef } from "react"
import EditorComponent from "react-simple-code-editor"

const Editor = (EditorComponent as any).default || EditorComponent

import { FieldLabel, InlineError } from "../../../components/ui"
import { STATEMENT_TOOLBAR, type ToolbarTool } from "../../../data/questionOptions"
import { applyToolbarFormat } from "../lib/markdown"

function highlightMarkdown(code: string) {
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  // Hashtags / Headings
  html = html.replace(/^(#{1,6})(\s+.*)$/gm, '<span class="text-[#7c6cf5] font-bold">$1$2</span>')

  // HTML Comments (arrows)
  html = html.replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-white/40 italic">$1</span>')

  // Links [text](url)
  html = html.replace(/(\[.*?\])(\(.*?\))/g, '<span class="text-[#1cbaba]">$1</span><span class="text-white/40">$2</span>')

  // Bold **text**
  html = html.replace(/(\*\*.*?\*\*)/g, '<span class="text-white font-bold">$1</span>')

  // Italic _text_
  html = html.replace(/(_.*?_)/g, '<span class="text-white italic">$1</span>')

  // Code `text`
  html = html.replace(/(`.*?`)/g, '<span class="text-[#1cbaba] bg-white/5 rounded px-1">$1</span>')

  return html
}

export function StatementEditor({
  value,
  onChange,
  onBlur,
  error,
}: {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
}) {
  const fieldId = useId()
  const errorId = `${fieldId}-error`
  const pendingSelection = useRef<{ start: number; end: number } | null>(null)

  useEffect(() => {
    if (pendingSelection.current) {
      const el = document.getElementById(fieldId) as HTMLTextAreaElement | null
      if (el) {
        const { start, end } = pendingSelection.current
        el.focus()
        el.setSelectionRange(start, end)
        pendingSelection.current = null
      }
    }
  }, [value, fieldId])

  function handleTool(tool: ToolbarTool) {
    const el = document.getElementById(fieldId) as HTMLTextAreaElement | null
    if (!el) return
    const result = applyToolbarFormat(value, el.selectionStart, el.selectionEnd, tool)
    pendingSelection.current = { start: result.selectionStart, end: result.selectionEnd }
    onChange(result.value)
  }

  return (
    <div>
      <FieldLabel htmlFor={fieldId} required>
        Problem Statement
      </FieldLabel>
      <div
        className={`overflow-hidden rounded-md border bg-white/[0.04] ${
          error ? "border-[#ff9b9b]/50" : "border-white/10"
        }`}
      >
        <div
          role="toolbar"
          aria-label="Formatting"
          aria-controls={fieldId}
          className="flex flex-wrap items-center gap-0.5 border-b border-white/10 px-2 py-1.5"
        >
          {STATEMENT_TOOLBAR.map((tool) => (
            <button
              key={tool.id}
              type="button"
              aria-label={tool.label}
              onMouseDown={(event) => {
                event.preventDefault()
                handleTool(tool)
              }}
              className="grid h-7 w-7 place-items-center rounded text-white/55 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <tool.icon className="h-[15px] w-[15px]" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px] w-full text-[13px] leading-relaxed">
          <Editor
            textareaId={fieldId}
            value={value}
            onValueChange={onChange}
            highlight={highlightMarkdown}
            padding={16}
            onBlur={onBlur}
            textareaClassName="focus:outline-none placeholder:text-[#8a8a8a]"
            className="min-h-[400px] font-sans text-white/85"
            style={{
              fontFamily: "var(--font-sans)",
            }}
          />
          {value.length === 0 && (
            <div className="pointer-events-none absolute left-4 top-4 text-[#8a8a8a]">
              Describe the problem. Select text and use the toolbar to format it.
            </div>
          )}
        </div>
      </div>
      <InlineError id={errorId} message={error} />
    </div>
  )
}

// force vite reload

// force vite reload
// reload