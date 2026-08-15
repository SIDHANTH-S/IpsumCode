import { useState } from "react"

import { AppLayout } from "./components/layout/AppLayout"

import { ContestPage } from "./pages/ContestPage"

import { ClassroomPage } from "./pages/ClassroomPage"

import { QuestionBankPage } from "./pages/QuestionBankPage"

import { NewQuestionPage } from "./pages/NewQuestion"

import { CreateAssessmentPage } from "./pages/CreateAssessmentPage"
import { ContestResultsPage } from "./pages/ContestResultsPage"
import { UpcomingAssessmentsPage } from "./pages/UpcomingAssessmentsPage"
import { CompletedAssessmentsPage } from "./pages/CompletedAssessmentsPage"

import { Tab } from "./types"

export default function App() {
  const [tab, setTab] = useState<Tab>("Contest")

  const [creatingQuestion, setCreatingQuestion] = useState(false)
  const [activeAssessment, setActiveAssessment] = useState<{
    id?: string
    mode: "create" | "view" | "edit"
    initialDate?: string
    readonly?: boolean
  } | null>(null)
  const [viewingContestResults, setViewingContestResults] =
    useState<string | null>(null)
  const [viewingAllUpcoming, setViewingAllUpcoming] = useState(false)
  const [viewingAllCompleted, setViewingAllCompleted] = useState<{ date: number | null } | null>(null)

  const selectTab = (next: Tab) => {
    setCreatingQuestion(false)
    setActiveAssessment(null)
    setViewingContestResults(null)
    setViewingAllUpcoming(false)
    setViewingAllCompleted(null)
    setTab(next)
  }

  return (
    <AppLayout activeTab={tab} onSelectTab={selectTab}>
      {tab === "Classroom" ? (
        <ClassroomPage />
      ) : tab === "Ques Bank" ? (
        creatingQuestion ? (
          <NewQuestionPage onExit={() => setCreatingQuestion(false)} />
        ) : (
          <QuestionBankPage onNewQuestion={() => setCreatingQuestion(true)} />
        )
      ) : activeAssessment ? (
        <CreateAssessmentPage 
          mode={activeAssessment.mode}
          assessmentId={activeAssessment.id}
          initialDate={activeAssessment.initialDate}
          readonly={activeAssessment.readonly}
          onModeChange={(mode) => setActiveAssessment(prev => prev ? { ...prev, mode } : null)}
          onExit={() => setActiveAssessment(null)} 
        />
      ) : viewingContestResults ? (
        <ContestResultsPage
          contestId={viewingContestResults}
          onBack={() => setViewingContestResults(null)}
        />
      ) : viewingAllUpcoming ? (
        <UpcomingAssessmentsPage
          onBack={() => setViewingAllUpcoming(false)}
          onViewAssessment={(id) => setActiveAssessment({ id, mode: "view" })}
        />
      ) : viewingAllCompleted ? (
        <CompletedAssessmentsPage
          onBack={() => setViewingAllCompleted(null)}
          onViewResults={setViewingContestResults}
          initialDate={viewingAllCompleted.date}
        />
      ) : (
        <ContestPage
          onCreateContest={(date) => setActiveAssessment({ mode: "create", initialDate: date })}
          onViewAssessment={(id) => setActiveAssessment({ id, mode: "view" })}
          onViewResults={setViewingContestResults}
          onViewAllUpcoming={() => setViewingAllUpcoming(true)}
          onViewAllCompleted={(date) => setViewingAllCompleted({ date: date ?? null })}
          onViewLiveAssessment={(id) => setActiveAssessment({ id, mode: "view", readonly: true })}
        />
      )}
    </AppLayout>
  )
}
