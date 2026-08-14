import React, { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Popover } from "../ui"

interface DatePickerProps {
  value: string | null
  onChange: (date: string) => void
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

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Basic mock date state for the calendar
  const [currentMonth, setCurrentMonth] = useState(5) // June
  const [currentYear, setCurrentYear] = useState(2025)

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
    <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <input
        readOnly
        value={value || ""}
        placeholder="Select date"
        className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-white/[0.06] px-3 pr-9 text-[13px] text-white placeholder:text-[#8a8a8a] focus:border-white/25 focus:outline-none"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35">
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
          className="grid h-7 w-7 place-items-center rounded-md hover:bg-white/10 text-white/70 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-[13px] font-medium text-white">
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="grid h-7 w-7 place-items-center rounded-md hover:bg-white/10 text-white/70 hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-center text-[11px] font-medium text-white/40"
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
          // mock today as June 7, 2025 for design fidelity
          const isToday =
            currentMonth === 5 && currentYear === 2025 && day === 7

          return (
            <button
              key={day}
              onClick={() => handleSelectDate(day)}
              className={`grid h-7 w-7 place-items-center rounded-full text-[12px] transition-colors ${
                isSelected
                  ? "bg-[#5b4aef] text-white font-medium shadow-md shadow-[#5b4aef]/30"
                  : isToday
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
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
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={trigger}
      content={content}
      width="260px"
    />
  )
}
