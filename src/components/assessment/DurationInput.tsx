import React, { useState, useEffect } from "react"

interface DurationInputProps {
  valueSeconds: number
  onChange: (seconds: number) => void
  readonly?: boolean
}

export function DurationInput({ valueSeconds, onChange, readonly }: DurationInputProps) {
  const [mins, setMins] = useState(
    String(Math.floor(valueSeconds / 60)).padStart(2, "0"),
  )
  const [secs, setSecs] = useState(String(valueSeconds % 60).padStart(2, "0"))

  useEffect(() => {
    setMins(String(Math.floor(valueSeconds / 60)).padStart(2, "0"))
    setSecs(String(valueSeconds % 60).padStart(2, "0"))
  }, [valueSeconds])

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "")
    setMins(val)
  }

  const handleSecChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "")
    if (parseInt(val || "0") > 59) val = "59"
    setSecs(val)
  }

  const handleBlur = () => {
    const m = parseInt(mins || "0", 10)
    const s = parseInt(secs || "0", 10)
    onChange(m * 60 + s)
    setMins(String(m).padStart(2, "0"))
    setSecs(String(s).padStart(2, "0"))
  }

  return (
    <div className="flex h-10 w-[90px] items-center justify-center rounded-md border border-white/10 bg-white/6 px-2 focus-within:border-white/25">
      <input
        type="text"
        value={mins}
        onChange={handleMinChange}
        onBlur={handleBlur}
        className="w-7 bg-transparent text-center text-text-md font-semibold text-white tabular-nums focus:outline-none"
        placeholder="00"
        readOnly={readonly}
      />
      <span className="mx-0.5 text-white/40">:</span>
      <input
        type="text"
        value={secs}
        onChange={handleSecChange}
        onBlur={handleBlur}
        className="w-7 bg-transparent text-center text-text-md font-semibold text-white tabular-nums focus:outline-none"
        placeholder="00"
        readOnly={readonly}
      />
    </div>
  )
}
