export type Tone = "purple" | "blue" | "orange" | "pink"

export type Tab = "Contest" | "Classroom" | "Ques Bank"

export type Difficulty = "Easy" | "Medium" | "Hard"

export type WorkspaceTab = "Problem Details" | "Test Cases" | "Settings"

export type DeliveryMode = "Random" | "Smart Shuffle" | "Same Order"

export interface AssessmentDraft {
  name: string
  classrooms: string[]
  duration: number
  scheduledDate: string | null
  scheduledTime: string | null
  selectedQuestionIds: number[]
  deliveryMode: DeliveryMode
  questionsPerStudent: number
}

export type QuestionStatus = "draft" | "published"

export interface TestCase {
  id: string
  label: string
  input: string
  expectedOutput: string
  explanation: string
  isExpanded: boolean
}

export interface HiddenTestCase extends TestCase {
  weight: number
  isEnabled: boolean
}

export interface LanguageSupport {
  id: string
  name: string
  hasReferenceSolution: boolean
  referenceSolution: string
}

export interface QuestionDraft {
  id: string | null
  title: string
  difficulty: Difficulty | null
  tags: string[]
  statement: string
  inputFormat: string
  outputFormat: string
  constraints: string
  sampleTestCases: TestCase[]
  hiddenTestCases: HiddenTestCase[]
  languages: LanguageSupport[]
  timeLimitSeconds: number
  memoryLimitMB: number
  status: QuestionStatus
  createdAt: string | null
  updatedAt: string | null
}

export interface TestCaseFieldErrors {
  input?: string
  expectedOutput?: string
}

export interface FieldErrors {
  title?: string
  difficulty?: string
  tags?: string
  statement?: string
  sampleTestCases?: string
  sampleTestCaseItems: Record<string, TestCaseFieldErrors>
  hiddenTestCaseItems: Record<string, TestCaseFieldErrors>
}

export interface ValidationResult {
  isValid: boolean
  errors: FieldErrors
  tabsWithErrors: Record<WorkspaceTab, boolean>
}
