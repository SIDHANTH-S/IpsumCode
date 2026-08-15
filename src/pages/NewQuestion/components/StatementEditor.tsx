import { useEffect, useId, useRef, useState } from "react"

import { FieldLabel, InlineError } from "../../../components/ui"
import { STATEMENT_TOOLBAR, type ToolbarTool } from "../../../data/questionOptions"
import { applyToolbarFormat } from "../lib/markdown"

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
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const pendingSelection = useRef<{ start: number; end: number } | null>(null)

  useEffect(() => {
    if (pendingSelection.current && textareaRef.current) {
      const { start, end } = pendingSelection.current
      textareaRef.current.focus()
      textareaRef.current.setSelectionRange(start, end)
      pendingSelection.current = null
    }
  }, [value])

  function handleTool(tool: ToolbarTool) {
    const el = textareaRef.current
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

        <textarea
          id={fieldId}
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          placeholder="Describe the problem. Select text and use the toolbar to format it."
          className="min-h-[400px] w-full resize-y bg-transparent px-4 py-3.5 text-[13px] leading-relaxed text-white/85 placeholder:text-[#8a8a8a] focus:outline-none"
        />
      </div>
      <InlineError id={errorId} message={error} />
    </div>
  )
}
