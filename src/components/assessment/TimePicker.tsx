import React, { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { Popover } from "../ui"

interface TimePickerProps {
  value: string | null
  onChange: (time: string) => void
  readonly?: boolean
}

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i === 0 ? 12 : i).padStart(2, "0"),
)
const MINUTES = ["00", "15", "30", "45"]
const PERIODS = ["AM", "PM"]

export function TimePicker({ value, onChange, readonly }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Default to 10:00 AM if no value
  const [hour, setHour] = useState("10")
  const [minute, setMinute] = useState("00")
  const [period, setPeriod] = useState("AM")

  useEffect(() => {
    if (value) {
      const match = value.match(/(\d+):(\d+)\s*(AM|PM)/i)
      if (match) {
        setHour(match[1].padStart(2, "0"))
        setMinute(match[2].padStart(2, "0"))
        setPeriod(match[3].toUpperCase())
      }
    }
  }, [value])

  const handleApply = () => {
    onChange(`${hour}:${minute} ${period}`)
    setIsOpen(false)
  }

  const trigger = (
    <div className={`relative ${readonly ? '' : 'cursor-pointer'}`} onClick={() => !readonly && setIsOpen(!isOpen)}>
      <input
        readOnly
        value={value || ""}
        placeholder="Select time"
        className={`h-10 w-full rounded-md border border-white/10 bg-white/6 px-3 pr-9 text-text-base text-white placeholder:text-text-muted focus:border-white/25 focus:outline-none ${readonly ? '' : 'cursor-pointer'}`}
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35">
        <Clock className="h-4 w-4" />
      </span>
    </div>
  )

  const content = (
    <div className="p-3">
      <div className="flex h-[180px] gap-2">
        {/* Hours */}
        <div className="flex-1 overflow-y-auto rounded-md border border-white/5 bg-white/[0.02] p-1 custom-scrollbar">
          {HOURS.map((h) => (
            <button
              key={h}
              onClick={() => setHour(h)}
              className={`flex h-8 w-full items-center justify-center rounded text-text-base transition-colors ${
                hour === h
                  ? "bg-accent-base font-medium text-white shadow-sm"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {h}
            </button>
          ))}
        </div>

        <div className="flex items-center text-white/30">:</div>

        {/* Minutes */}
        <div className="flex-1 overflow-y-auto rounded-md border border-white/5 bg-white/[0.02] p-1 custom-scrollbar">
          {MINUTES.map((m) => (
            <button
              key={m}
              onClick={() => setMinute(m)}
              className={`flex h-8 w-full items-center justify-center rounded text-text-base transition-colors ${
                minute === m
                  ? "bg-accent-base font-medium text-white shadow-sm"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Period */}
        <div className="flex-1 flex flex-col gap-1 rounded-md border border-white/5 bg-white/[0.02] p-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex h-full w-full items-center justify-center rounded text-text-sm font-medium transition-colors ${
                period === p
                  ? "bg-accent-base text-white shadow-sm"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <button
          onClick={handleApply}
          className="rounded-md bg-white/10 px-4 py-1.5 text-text-sm font-medium text-white transition-colors hover:bg-white/20"
        >
          Apply
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
      `}</style>
    </div>
  )

  return (
    readonly ? trigger : (
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trigger={trigger}
        content={content}
        width="220px"
      />
    )
  )
}
