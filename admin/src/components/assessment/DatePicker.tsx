import React, { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Popover } from "../ui"

interface DatePickerProps {
  value: string | null
  onChange: (date: string) => void
  readonly?: boolean
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function DatePicker({ value, onChange, readonly }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleSelectDate = (day: number) => {
    const formattedDate = `${day} ${MONTHS[currentMonth].substring(0, 3).toUpperCase()} ${currentYear}`
    onChange(formattedDate)
    setIsOpen(false)
  }

  const trigger = (
    <div className={`relative ${readonly ? '' : 'cursor-pointer'}`} onClick={() => !readonly && setIsOpen(!isOpen)}>
      <input
        readOnly
        value={value || ""}
        placeholder="Select date"
        className={`h-10 w-full rounded-md border border-border-default bg-surface-base px-3 pr-9 text-text-base text-text-primary placeholder:text-text-muted focus:border-border-default focus:outline-none ${readonly ? '' : 'cursor-pointer'}`}
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
        <Calendar className="h-4 w-4" />
      </span>
    </div>
  )

  const days = DAYS_IN_MONTH[currentMonth]
  // Mock starting day of week for the month (0 = Sun)
  const startDay = new Date(currentYear, currentMonth, 1).getDay()

  const content = (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={handlePrevMonth}
          className="grid h-7 w-7 place-items-center rounded-md hover:bg-surface-hover text-text-secondary hover:text-text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-text-base font-medium text-text-primary">
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="grid h-7 w-7 place-items-center rounded-md hover:bg-surface-hover text-text-secondary hover:text-text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-center text-text-xs font-medium text-text-muted"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className="h-7 w-7" />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1
          const dateStr = `${day} ${MONTHS[currentMonth].substring(0, 3).toUpperCase()} ${currentYear}`
          const isSelected = value === dateStr
          const isToday =
            currentMonth === today.getMonth() && currentYear === today.getFullYear() && day === today.getDate()
          const buttonDate = new Date(currentYear, currentMonth, day)
          const isPast = buttonDate.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()

          return (
            <button
              key={day}
              onClick={() => !isPast && handleSelectDate(day)}
              disabled={isPast}
              className={`grid h-7 w-7 place-items-center rounded-full text-text-sm transition-colors ${
                isPast 
                  ? "text-text-muted cursor-not-allowed opacity-50"
                  : isSelected
                    ? "bg-accent-base text-white font-medium shadow-md shadow-accent-base/30"
                    : isToday
                      ? "bg-surface-hover text-text-primary font-medium"
                      : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    readonly ? trigger : (
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trigger={trigger}
        content={content}
        width="260px"
      />
    )
  )
}
