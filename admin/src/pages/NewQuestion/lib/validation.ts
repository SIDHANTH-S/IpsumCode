import type {
  FieldErrors,
  QuestionDraft,
  TestCase,
  ValidationResult,
  WorkspaceTab,
} from "../../../types"
import { TITLE_MAX_LENGTH } from "../../../data/questionOptions"

function validateCaseFields(testCase: TestCase): { input?: string; expectedOutput?: string } {
  const errors: { input?: string; expectedOutput?: string } = {}
  if (!testCase.input.trim()) {
    errors.input = "Add the input for this case."
  }
  if (!testCase.expectedOutput.trim()) {
    errors.expectedOutput = "Add the expected output for this case."
  }
  return errors
}

export function validateDraft(draft: QuestionDraft): ValidationResult {
  const errors: FieldErrors = {
    sampleTestCaseItems: {},
    hiddenTestCaseItems: {},
  }

  if (!draft.title.trim()) {
    errors.title = "Give the question a title."
  } else if (draft.title.length > TITLE_MAX_LENGTH) {
    errors.title = `Keep the title under ${TITLE_MAX_LENGTH} characters.`
  }

  if (!draft.difficulty) {
    errors.difficulty = "Choose a difficulty."
  }

  if (draft.tags.length === 0) {
    errors.tags = "Add at least one topic."
  }

  if (!draft.statement.trim()) {
    errors.statement = "Write a problem statement."
  }

  if (draft.sampleTestCases.length === 0) {
    errors.sampleTestCases = "Add at least one sample test case."
  }

  for (const testCase of draft.sampleTestCases) {
    const caseErrors = validateCaseFields(testCase)
    if (caseErrors.input || caseErrors.expectedOutput) {
      errors.sampleTestCaseItems[testCase.id] = caseErrors
    }
  }

  for (const testCase of draft.hiddenTestCases) {
    const caseErrors = validateCaseFields(testCase)
    if (caseErrors.input || caseErrors.expectedOutput) {
      errors.hiddenTestCaseItems[testCase.id] = caseErrors
    }
  }

  const detailsInvalid = Boolean(
    errors.title || errors.difficulty || errors.tags || errors.statement
  )
  const testCasesInvalid = Boolean(
    errors.sampleTestCases ||
      Object.keys(errors.sampleTestCaseItems).length > 0 ||
      Object.keys(errors.hiddenTestCaseItems).length > 0
  )

  const tabsWithErrors: Record<WorkspaceTab, boolean> = {
    "Problem Details": detailsInvalid,
    "Test Cases": testCasesInvalid,
    Settings: false,
  }

  const isValid = !detailsInvalid && !testCasesInvalid

  return { isValid, errors, tabsWithErrors }
}

