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
      className={`flex items-center rounded-md border border-border-default bg-surface-elevated ${className}`}
    >
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-primary/60"
      >
        −
      </button>
      <span className="min-w-[52px] text-center text-text-md font-semibold text-text-primary tabular-nums">
        {format ? format(value) : value}
      </span>
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="grid h-9 w-9 place-items-center text-white/60 transition-colors hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-primary/60"
      >
        +
      </button>
    </div>
  )
}
