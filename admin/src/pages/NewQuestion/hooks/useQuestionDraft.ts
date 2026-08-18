import { useMemo, useReducer } from "react"

import type {
  Difficulty,
  HiddenTestCase,
  QuestionDraft,
  QuestionStatus,
  TestCase,
} from "../../../types"
import {
  createHiddenTestCase,
  createLanguageSupport,
  createSampleTestCase,
} from "../../../data/questionOptions"

type CaseKind = "sample" | "hidden"

type Action =
  | { type: "LOAD_DRAFT"; draft: QuestionDraft }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_DIFFICULTY"; difficulty: Difficulty }
  | { type: "ADD_TAG"; tag: string }
  | { type: "REMOVE_TAG"; tag: string }
  | { type: "SET_STATEMENT"; statement: string }
  | { type: "SET_INPUT_FORMAT"; value: string }
  | { type: "SET_OUTPUT_FORMAT"; value: string }
  | { type: "SET_CONSTRAINTS"; value: string }
  | { type: "ADD_CASE"; kind: CaseKind }
  | { type: "REMOVE_CASE"; kind: CaseKind; id: string }
  | { type: "UPDATE_CASE"; kind: CaseKind; id: string; patch: Partial<TestCase> }
  | { type: "TOGGLE_CASE_EXPANDED"; kind: CaseKind; id: string }
  | { type: "MOVE_CASE"; kind: CaseKind; id: string; direction: "up" | "down" }
  | { type: "SET_HIDDEN_WEIGHT"; id: string; weight: number }
  | { type: "SET_HIDDEN_ENABLED"; id: string; enabled: boolean }
  | { type: "ADD_LANGUAGE"; name: string }
  | { type: "REMOVE_LANGUAGE"; id: string }
  | { type: "SET_REFERENCE_SOLUTION"; id: string; code: string }
  | { type: "SET_TIME_LIMIT"; seconds: number }
  | { type: "SET_MEMORY_LIMIT"; mb: number }
  | { type: "SET_STATUS"; status: QuestionStatus }

function updateCaseList<T extends TestCase>(
  list: T[],
  id: string,
  updater: (item: T) => T
): T[] {
  return list.map((item) => (item.id === id ? updater(item) : item))
}

function moveItem<T>(list: T[], index: number, direction: "up" | "down"): T[] {
  const targetIndex = direction === "up" ? index - 1 : index + 1
  if (targetIndex < 0 || targetIndex >= list.length) return list
  const next = [...list]
  const temp = next[index]
  next[index] = next[targetIndex] as T
  next[targetIndex] = temp as T
  return next
}

function reducer(draft: QuestionDraft, action: Action): QuestionDraft {
  switch (action.type) {
    case "LOAD_DRAFT":
      return action.draft
    case "SET_TITLE":
      return { ...draft, title: action.title }
    case "SET_DIFFICULTY":
      return { ...draft, difficulty: action.difficulty }
    case "ADD_TAG": {
      const tag = action.tag.trim()
      if (!tag || draft.tags.includes(tag)) return draft
      return { ...draft, tags: [...draft.tags, tag] }
    }
    case "REMOVE_TAG":
      return { ...draft, tags: draft.tags.filter((tag) => tag !== action.tag) }
    case "SET_STATEMENT":
      return { ...draft, statement: action.statement }
    case "SET_INPUT_FORMAT":
      return { ...draft, inputFormat: action.value }
    case "SET_OUTPUT_FORMAT":
      return { ...draft, outputFormat: action.value }
    case "SET_CONSTRAINTS":
      return { ...draft, constraints: action.value }

    case "ADD_CASE": {
      if (action.kind === "sample") {
        return { ...draft, sampleTestCases: [...draft.sampleTestCases, createSampleTestCase()] }
      }
      return { ...draft, hiddenTestCases: [...draft.hiddenTestCases, createHiddenTestCase()] }
    }
    case "REMOVE_CASE": {
      if (action.kind === "sample") {
        return {
          ...draft,
          sampleTestCases: draft.sampleTestCases.filter((c) => c.id !== action.id),
        }
      }
      return {
        ...draft,
        hiddenTestCases: draft.hiddenTestCases.filter((c) => c.id !== action.id),
      }
    }
    case "UPDATE_CASE": {
      if (action.kind === "sample") {
        return {
          ...draft,
          sampleTestCases: updateCaseList(draft.sampleTestCases, action.id, (item) => ({
            ...item,
            ...action.patch,
          })),
        }
      }
      return {
        ...draft,
        hiddenTestCases: updateCaseList(draft.hiddenTestCases, action.id, (item) => ({
          ...item,
          ...action.patch,
        })),
      }
    }
    case "TOGGLE_CASE_EXPANDED": {
      if (action.kind === "sample") {
        return {
          ...draft,
          sampleTestCases: updateCaseList(draft.sampleTestCases, action.id, (item) => ({
            ...item,
            isExpanded: !item.isExpanded,
          })),
        }
      }
      return {
        ...draft,
        hiddenTestCases: updateCaseList(draft.hiddenTestCases, action.id, (item) => ({
          ...item,
          isExpanded: !item.isExpanded,
        })),
      }
    }
    case "MOVE_CASE": {
      if (action.kind === "sample") {
        const index = draft.sampleTestCases.findIndex((c) => c.id === action.id)
        if (index === -1) return draft
        return { ...draft, sampleTestCases: moveItem(draft.sampleTestCases, index, action.direction) }
      }
      const index = draft.hiddenTestCases.findIndex((c) => c.id === action.id)
      if (index === -1) return draft
      return { ...draft, hiddenTestCases: moveItem(draft.hiddenTestCases, index, action.direction) }
    }
    case "SET_HIDDEN_WEIGHT":
      return {
        ...draft,
        hiddenTestCases: updateCaseList<HiddenTestCase>(draft.hiddenTestCases, action.id, (item) => ({
          ...item,
          weight: Math.max(1, action.weight),
        })),
      }
    case "SET_HIDDEN_ENABLED":
      return {
        ...draft,
        hiddenTestCases: updateCaseList<HiddenTestCase>(draft.hiddenTestCases, action.id, (item) => ({
          ...item,
          isEnabled: action.enabled,
        })),
      }

    case "ADD_LANGUAGE": {
      if (draft.languages.some((lang) => lang.name === action.name)) return draft
      return { ...draft, languages: [...draft.languages, createLanguageSupport(action.name)] }
    }
    case "REMOVE_LANGUAGE":
      return { ...draft, languages: draft.languages.filter((lang) => lang.id !== action.id) }
    case "SET_REFERENCE_SOLUTION":
      return {
        ...draft,
        languages: draft.languages.map((lang) =>
          lang.id === action.id
            ? { ...lang, referenceSolution: action.code, hasReferenceSolution: action.code.trim().length > 0 }
            : lang
        ),
      }
    case "SET_TIME_LIMIT":
      return { ...draft, timeLimitSeconds: action.seconds }
    case "SET_MEMORY_LIMIT":
      return { ...draft, memoryLimitMB: action.mb }
    case "SET_STATUS":
      return { ...draft, status: action.status }

    default:
      return draft
  }
}

export function useQuestionDraft(initial: QuestionDraft) {
  const [draft, dispatch] = useReducer(reducer, initial)

  const actions = useMemo(
    () => ({
      loadDraft: (draft: QuestionDraft) => dispatch({ type: "LOAD_DRAFT", draft }),
      setTitle: (title: string) => dispatch({ type: "SET_TITLE", title }),
      setDifficulty: (difficulty: Difficulty) => dispatch({ type: "SET_DIFFICULTY", difficulty }),
      addTag: (tag: string) => dispatch({ type: "ADD_TAG", tag }),
      removeTag: (tag: string) => dispatch({ type: "REMOVE_TAG", tag }),
      setStatement: (statement: string) => dispatch({ type: "SET_STATEMENT", statement }),
      setInputFormat: (value: string) => dispatch({ type: "SET_INPUT_FORMAT", value }),
      setOutputFormat: (value: string) => dispatch({ type: "SET_OUTPUT_FORMAT", value }),
      setConstraints: (value: string) => dispatch({ type: "SET_CONSTRAINTS", value }),

      addCase: (kind: CaseKind) => dispatch({ type: "ADD_CASE", kind }),
      removeCase: (kind: CaseKind, id: string) => dispatch({ type: "REMOVE_CASE", kind, id }),
      updateCase: (kind: CaseKind, id: string, patch: Partial<TestCase>) =>
        dispatch({ type: "UPDATE_CASE", kind, id, patch }),
      toggleCaseExpanded: (kind: CaseKind, id: string) =>
        dispatch({ type: "TOGGLE_CASE_EXPANDED", kind, id }),
      moveCase: (kind: CaseKind, id: string, direction: "up" | "down") =>
        dispatch({ type: "MOVE_CASE", kind, id, direction }),
      setHiddenWeight: (id: string, weight: number) =>
        dispatch({ type: "SET_HIDDEN_WEIGHT", id, weight }),
      setHiddenEnabled: (id: string, enabled: boolean) =>
        dispatch({ type: "SET_HIDDEN_ENABLED", id, enabled }),

      addLanguage: (name: string) => dispatch({ type: "ADD_LANGUAGE", name }),
      removeLanguage: (id: string) => dispatch({ type: "REMOVE_LANGUAGE", id }),
      setReferenceSolution: (id: string, code: string) =>
        dispatch({ type: "SET_REFERENCE_SOLUTION", id, code }),
      setTimeLimit: (seconds: number) => dispatch({ type: "SET_TIME_LIMIT", seconds }),
      setMemoryLimit: (mb: number) => dispatch({ type: "SET_MEMORY_LIMIT", mb }),
      setStatus: (status: QuestionStatus) => dispatch({ type: "SET_STATUS", status }),
    }),
    []
  )

  return { draft, actions }
}

export type QuestionDraftActions = ReturnType<typeof useQuestionDraft>["actions"]

