import { createElement, Fragment, type ReactNode } from "react"

import type { ToolbarTool } from "../../data/questionOptions"

// ---------------------------------------------------------------------------
// A small, intentionally limited markdown-ish renderer. It supports exactly
// the syntax the statement toolbar can produce (bold, italic, inline code,
// links, headings, bulleted/numbered lists) and nothing else. It renders to
// React elements rather than injecting HTML, so there's no sanitization risk
// even though the content is authored by an admin.
// ---------------------------------------------------------------------------

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(\*\*.+?\*\*|_.+?_|`.+?`|\[.+?\]\(.+?\))/g
  const parts = text.split(pattern).filter((part) => part.length > 0)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (part.startsWith("**") && part.endsWith("**")) {
      return createElement("strong", { key, className: "font-semibold text-white" }, part.slice(2, -2))
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return createElement("em", { key }, part.slice(1, -1))
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return createElement(
        "code",
        {
          key,
          className:
            "rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-white/90",
        },
        part.slice(1, -1)
      )
    }
    const linkMatch = /^\[(.+)\]\((.+)\)$/.exec(part)
    if (linkMatch) {
      return createElement(
        "a",
        {
          key,
          href: linkMatch[2],
          target: "_blank",
          rel: "noreferrer",
          className: "text-[#7c6cf5] underline underline-offset-2 hover:text-[#9b8dff]",
        },
        linkMatch[1]
      )
    }
    return createElement(Fragment, { key }, part)
  })
}

type Block =
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "paragraph"; text: string }

function toBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n")
  const blocks: Block[] = []

  let paragraphBuffer: string[] = []
  let bulletBuffer: string[] = []
  let numberedBuffer: string[] = []

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: "paragraph", text: paragraphBuffer.join(" ") })
      paragraphBuffer = []
    }
  }
  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      blocks.push({ type: "bullets", items: bulletBuffer })
      bulletBuffer = []
    }
  }
  const flushNumbered = () => {
    if (numberedBuffer.length > 0) {
      blocks.push({ type: "numbered", items: numberedBuffer })
      numberedBuffer = []
    }
  }
  const flushAll = () => {
    flushParagraph()
    flushBullets()
    flushNumbered()
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line === "") {
      flushAll()
      continue
    }
    if (line.startsWith("## ")) {
      flushAll()
      blocks.push({ type: "heading", text: line.slice(3) })
      continue
    }
    if (line.startsWith("- ")) {
      flushParagraph()
      flushNumbered()
      bulletBuffer.push(line.slice(2))
      continue
    }
    const numberedMatch = /^\d+\.\s+(.*)$/.exec(line)
    if (numberedMatch) {
      flushParagraph()
      flushBullets()
      numberedBuffer.push(numberedMatch[1] ?? "")
      continue
    }
    flushBullets()
    flushNumbered()
    paragraphBuffer.push(line)
  }
  flushAll()

  return blocks
}

/** Renders a limited markdown subset (see STATEMENT_TOOLBAR) to React nodes. */
export function renderMarkdownLite(source: string): ReactNode {
  const blocks = toBlocks(source)

  if (blocks.length === 0) {
    return null
  }

  return createElement(
    Fragment,
    null,
    blocks.map((block, index) => {
      const key = `block-${index}`
      switch (block.type) {
        case "heading":
          return createElement(
            "p",
            { key, className: "font-semibold text-white" },
            renderInline(block.text, key)
          )
        case "bullets":
          return createElement(
            "ul",
            { key, className: "space-y-1" },
            block.items.map((item, itemIndex) =>
              createElement(
                "li",
                { key: `${key}-${itemIndex}`, className: "flex gap-2" },
                createElement("span", {
                  className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40",
                }),
                createElement("span", null, renderInline(item, `${key}-${itemIndex}`))
              )
            )
          )
        case "numbered":
          return createElement(
            "ol",
            { key, className: "space-y-1" },
            block.items.map((item, itemIndex) =>
              createElement(
                "li",
                { key: `${key}-${itemIndex}`, className: "flex gap-2" },
                createElement(
                  "span",
                  { className: "text-white/40" },
                  `${itemIndex + 1}.`
                ),
                createElement("span", null, renderInline(item, `${key}-${itemIndex}`))
              )
            )
          )
        case "paragraph":
        default:
          return createElement("p", { key }, renderInline(block.text, key))
      }
    })
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
