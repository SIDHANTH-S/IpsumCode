import React from "react"
import { Stepper } from "../ui"
import { DeliveryMode } from "../../types"

const deliveryModes: { mode: DeliveryMode desc: string }[] = [
  { mode: "Random", desc: "Questions are randomly ordered for each student." },
  {
    mode: "Smart Shuffle",
    desc: "Questions are shuffled to create varied sets while maintaining a balanced difficulty.",
  },
  {
    mode: "Same Order",
    desc: "Every student receives the questions in the same order.",
  },
]
interface QuestionDeliveryProps {
  deliveryMode: DeliveryMode
  onChangeMode: (mode: DeliveryMode) => void
  questionsPerStudent: number
  onChangePerStudent: (count: number) => void
  maxQuestions: number
  readonly?: boolean
}

export function QuestionDelivery({
  deliveryMode,
  onChangeMode,
  questionsPerStudent,
  onChangePerStudent,
  maxQuestions,
  readonly,
}: QuestionDeliveryProps) {
  return (
    <>
      <div>
        <h3 className="text-text-lg font-semibold text-white">
          Question delivery
        </h3>
        <p className="mt-1 text-text-sm text-white/45">
          Choose how questions are distributed to students
        </p>
        <div className="mt-3 inline-flex gap-1 rounded-lg border border-white/8 bg-white/[0.04] p-1">
          {deliveryModes.map(({ mode }) => (
            <button
              key={mode}
              onClick={() => !readonly && onChangeMode(mode)}
              disabled={readonly}
              className={`cursor-pointer rounded-md px-4 py-2 text-text-base font-medium transition-colors ${
                deliveryMode === mode
                  ? "bg-accent-base text-white"
                  : "text-white/60 hover:text-white/90"
              } ${readonly ? "opacity-70" : ""}`}
            >
              {mode}
            </button>
          ))}
        </div>
        <p className="mt-2.5 max-w-[280px] text-text-xs leading-relaxed text-white/40">
          {deliveryModes.find((m) => m.mode === deliveryMode)?.desc}
        </p>
      </div>
      <div className="lg:text-right">
        <p className="mb-2 text-text-sm text-white/55">Questions per student</p>
        <Stepper
          value={questionsPerStudent}
          onChange={onChangePerStudent}
          min={maxQuestions > 0 ? 1 : 0}
          max={Math.max(1, maxQuestions)}
          className="lg:ml-auto"
          disabled={readonly}
        />
        <p className="mt-2 text-text-xs text-white/30">
          Max available: {maxQuestions}
        </p>
      </div>
    </>
  )
}
