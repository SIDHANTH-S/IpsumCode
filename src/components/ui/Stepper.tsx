import React from "react"

export function Stepper({
  value,
  onChange,
  format,
  className = "",
  min = -Infinity,
  max = Infinity,
  disabled = false,
}: {
  value: number
  onChange: (next: number) => void
  format?: (v: number) => string
  className?: string
  min?: number
  max?: number
  disabled?: boolean
}) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  return (
    <div
      className={`flex items-center rounded-md border border-white/10 bg-white/6 ${className}`}
    >
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-white disabled:opacity-30 disabled:hover:text-white/60"
      >
        −
      </button>
      <span className="min-w-[52px] text-center text-text-md font-semibold text-white tabular-nums">
        {format ? format(value) : value}
      </span>
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-white disabled:opacity-30 disabled:hover:text-white/60"
      >
        +
      </button>
    </div>
  )
}
