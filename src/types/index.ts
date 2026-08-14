export type Tone = "purple" | "blue" | "orange" | "pink"

export type Tab = "Contest" | "Classroom" | "Ques Bank"

export type Difficulty = "Easy" | "Med." | "Hard"

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
