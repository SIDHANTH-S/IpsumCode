import {
  Bold,
  Code,
  Heading2,
  Italic,
  Link2,
  List,
  ListOrdered,
} from "lucide-react"

import type {
  Difficulty,
  HiddenTestCase,
  LanguageSupport,
  QuestionDraft,
  TestCase,
} from "../../types"

// ---------------------------------------------------------------------------
// Static reference data. Unlike the old mockData.ts, none of this is fake
// question content — it's the option lists the authoring UI needs (what
// topics to suggest, what languages can be enabled, etc).
// ---------------------------------------------------------------------------

export const TITLE_MAX_LENGTH = 150

export const DIFFICULTY_OPTIONS: { value: Difficulty; label: string }[] = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium" },
  { value: "Hard", label: "Hard" },
]

export const SUGGESTED_TOPICS = [
  "Arrays",
  "Strings",
  "Hash Table",
  "Two Pointers",
  "Sliding Window",
  "Sorting",
  "Binary Search",
  "Recursion",
  "Backtracking",
  "Dynamic Programming",
  "Greedy",
  "Graphs",
  "Trees",
  "Heap / Priority Queue",
  "Stack",
  "Queue",
  "Linked List",
  "Bit Manipulation",
  "Math",
]

export const AVAILABLE_LANGUAGES = [
  "Python",
  "Java",
  "C++",
  "C",
  "C#",
  "JavaScript",
  "TypeScript",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",
  "Ruby",
]

export const TIME_LIMIT_OPTIONS = [1, 2, 3, 5, 8, 10]
export const MEMORY_LIMIT_OPTIONS = [64, 128, 256, 512, 1024]

export interface ToolbarTool {
  id: "bold" | "italic" | "code" | "bullet" | "numbered" | "heading" | "link"
  label: string
  icon: typeof Bold
  /** Wraps the selection, e.g. **selection** */
  wrapWith?: string
  /** Prefixes each selected line, e.g. "- " for a bullet list */
  linePrefix?: string
  /** Inserted with the cursor left in the middle, e.g. [text](url) */
  template?: { before: string; after: string; placeholder: string }
}

export const STATEMENT_TOOLBAR: ToolbarTool[] = [
  { id: "bold", label: "Bold", icon: Bold, wrapWith: "**" },
  { id: "italic", label: "Italic", icon: Italic, wrapWith: "_" },
  { id: "code", label: "Inline code", icon: Code, wrapWith: "`" },
  { id: "heading", label: "Heading", icon: Heading2, linePrefix: "## " },
  { id: "bullet", label: "Bulleted list", icon: List, linePrefix: "- " },
  {
    id: "numbered",
    label: "Numbered list",
    icon: ListOrdered,
    linePrefix: "1. ",
  },
  {
    id: "link",
    label: "Link",
    icon: Link2,
    template: { before: "[", after: "](https://)", placeholder: "link text" },
  },
]

// ---------------------------------------------------------------------------
// Factories
// ---------------------------------------------------------------------------

let idCounter = 0

/** Stable, collision-free ids without pulling in a uuid dependency. */
export function createId(prefix: string): string {
  idCounter += 1
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}_${crypto.randomUUID()}`
  }
  return `${prefix}_${Date.now().toString(36)}_${idCounter.toString(36)}`
}

export function createSampleTestCase(): TestCase {
  return {
    id: createId("sample"),
    label: "",
    input: "",
    expectedOutput: "",
    explanation: "",
    isExpanded: true,
  }
}

export function createHiddenTestCase(): HiddenTestCase {
  return {
    id: createId("hidden"),
    label: "",
    input: "",
    expectedOutput: "",
    explanation: "",
    isExpanded: true,
    weight: 1,
    isEnabled: true,
  }
}

export function createLanguageSupport(name: string): LanguageSupport {
  return {
    id: createId("lang"),
    name,
    hasReferenceSolution: false,
    referenceSolution: "",
  }
}

const DEFAULT_LANGUAGES = ["Python", "Java", "C++"]

export function createEmptyDraft(): QuestionDraft {
  return {
    id: null,
    title: "",
    difficulty: null,
    tags: [],
    statement: "",
    inputFormat: "",
    outputFormat: "",
    constraints: "",
    sampleTestCases: [createSampleTestCase()],
    hiddenTestCases: [],
    languages: DEFAULT_LANGUAGES.map(createLanguageSupport),
    timeLimitSeconds: 2,
    memoryLimitMB: 256,
    status: "draft",
    createdAt: null,
    updatedAt: null,
  }
}
