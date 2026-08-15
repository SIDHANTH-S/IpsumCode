import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import type { ToolbarTool } from "../../data/questionOptions"

/** Renders a fully featured markdown subset to React nodes using react-markdown. */
export function RenderMarkdown({ source }: { source: string }) {
  if (!source || source.trim() === "") {
    return null
  }

  return (
    <div className="prose prose-invert max-w-none prose-sm prose-pre:bg-white/10 prose-pre:text-white/90 prose-a:text-[#7c6cf5] hover:prose-a:text-[#9b8dff]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{source}</ReactMarkdown>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Toolbar formatting: pure string transforms so they're easy to test and
// don't need direct DOM access. The caller re-applies the returned selection
// to the textarea after the state update.
// ---------------------------------------------------------------------------

export interface FormatResult {
  value: string
  selectionStart: number
  selectionEnd: number
}

export function applyToolbarFormat(
  value: string,
  selectionStart: number,
  selectionEnd: number,
  tool: ToolbarTool
): FormatResult {
  const before = value.slice(0, selectionStart)
  const selected = value.slice(selectionStart, selectionEnd)
  const after = value.slice(selectionEnd)

  if (tool.wrapWith) {
    const mark = tool.wrapWith
    const text = selected || "text"
    const next = `${before}${mark}${text}${mark}${after}`
    const start = before.length + mark.length
    return { value: next, selectionStart: start, selectionEnd: start + text.length }
  }

  if (tool.linePrefix) {
    // Apply the prefix to every line touched by the selection.
    const lineStart = before.lastIndexOf("\n") + 1
    const selectionBlock = value.slice(lineStart, selectionEnd)
    const lines = selectionBlock.split("\n")
    const prefixed = lines
      .map((line) => (line.startsWith(tool.linePrefix as string) ? line : `${tool.linePrefix}${line}`))
      .join("\n")
    const next = `${value.slice(0, lineStart)}${prefixed}${after}`
    const addedLength = prefixed.length - selectionBlock.length
    return {
      value: next,
      selectionStart: selectionStart + (tool.linePrefix?.length ?? 0),
      selectionEnd: selectionEnd + addedLength,
    }
  }

  if (tool.template) {
    const { before: pre, after: post, placeholder } = tool.template
    const text = selected || placeholder
    const next = `${before}${pre}${text}${post}${after}`
    const start = before.length + pre.length
    return { value: next, selectionStart: start, selectionEnd: start + text.length }
  }

  return { value, selectionStart, selectionEnd }
}
