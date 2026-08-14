import { useState } from "react"

import { AppLayout } from "./components/layout/AppLayout"

import { ContestPage } from "./pages/ContestPage"

import { ClassroomPage } from "./pages/ClassroomPage"

import { QuestionBankPage } from "./pages/QuestionBankPage"

import { NewQuestionPage } from "./pages/NewQuestionPage"

import { CreateAssessmentPage } from "./pages/CreateAssessmentPage"

import { Tab } from "./types"

export default function App() {
  const [tab, setTab] = useState<Tab>("Contest")

  const [creatingQuestion, setCreatingQuestion] = useState(false)

  const [creatingContest, setCreatingContest] = useState(false)

  const selectTab = (next: Tab) => {
    setCreatingQuestion(false)

    setCreatingContest(false)

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
      ) : creatingContest ? (
        <CreateAssessmentPage onExit={() => setCreatingContest(false)} />
      ) : (
        <ContestPage onCreateContest={() => setCreatingContest(true)} />
      )}
    </AppLayout>
  )
}
