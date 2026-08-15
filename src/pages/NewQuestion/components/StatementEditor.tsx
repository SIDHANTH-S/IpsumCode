import { useEffect, useId, useRef } from "react"
import { FieldLabel, InlineError } from "../../../components/ui"
import { STATEMENT_TOOLBAR, type ToolbarTool } from "../../../data/questionOptions"
import { applyToolbarFormat } from "../lib/markdown"

export function StatementEditor({
  value,
  onChange,
  onBlur,
  error,
  children,
}: {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  children?: React.ReactNode
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
    <div className="flex min-h-[600px] flex-col overflow-hidden rounded-md border border-white/10 bg-surface-base">
      <div
        role="toolbar"
        aria-label="Formatting"
        aria-controls={fieldId}
        className="flex flex-wrap items-center gap-0.5 border-b border-white/10 px-2 py-1.5 bg-surface-base"
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
            className="grid h-7 w-7 cursor-pointer place-items-center rounded text-white/55 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <tool.icon className="h-[15px] w-[15px]" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col xl:flex-row">
        <div className="relative flex w-full flex-col border-b border-white/10 text-text-base leading-relaxed xl:w-[575px] xl:shrink-0 xl:border-b-0 xl:border-r">
          <textarea
            id={fieldId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder="Describe the problem. Select text and use the toolbar to format it."
            className="flex-1 resize-none bg-transparent p-4 font-sans text-white/85 focus:outline-none placeholder:text-text-muted"
            spellCheck={false}
          />
          {error && (
            <div className="px-4 pb-3">
              <InlineError id={errorId} message={error} />
            </div>
          )}
        </div>

        {children && (
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}