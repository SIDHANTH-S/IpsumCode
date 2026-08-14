import { ReactNode } from "react"

import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Copy,
  GripVertical,
  X,
} from "lucide-react"

export function SectionLink({
  children = "See all",
}: {
  children?: ReactNode
}) {
  return (
    <button className="flex items-center gap-1 text-[13px] font-medium text-indigo-400 transition-colors hover:text-indigo-300">
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </button>
  )
}

export function FieldLabel({
  children,

  required,
}: {
  children: ReactNode

  required?: boolean
}) {
  return (
    <label className="mb-1.5 block text-[13px] font-medium text-white/85">
      {children}
      {required && <span className="ml-0.5 text-[#ef4743]">*</span>}
    </label>
  )
}

export function Select({
  placeholder,

  className = "",
}: {
  placeholder: string

  className?: string
}) {
  return (
    <button
      className={`flex h-10 items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-3 text-[13px] text-[#8a8a8a] transition-colors hover:border-white/20 ${className}`}
    >
      {placeholder}
      <ChevronDown className="h-4 w-4 shrink-0 text-white/40" />
    </button>
  )
}

export function SampleBadge() {
  return (
    <span className="flex h-[18px] items-center rounded bg-[#5b4aef]/20 px-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] text-[#a99bff]">
      Sample
    </span>
  )
}

export function TextArea({ label, value }: { label: string value: string }) {
  return (
    <div className="min-w-0 flex-1">
      <p className="mb-1.5 text-[12px] text-white/55">{label}</p>
      <textarea
        defaultValue={value}
        rows={3}
        className="w-full resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[12.5px] leading-relaxed text-white/80 focus:border-white/25 focus:outline-none"
      />
    </div>
  )
}

export function CaseHeader({
  title,

  badge,

  right,

  expanded,
}: {
  title: string

  badge?: ReactNode

  right?: ReactNode

  expanded?: boolean
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-white/25" />
      <span className="text-[13px] font-medium text-white">{title}</span>
      {badge}
      <div className="ml-auto flex items-center gap-2">
        {right}
        <button className="grid h-7 w-7 place-items-center rounded text-white/45 transition-colors hover:bg-white/10 hover:text-white">
          <Copy className="h-3.5 w-3.5" />
        </button>
        <button className="grid h-7 w-7 place-items-center rounded text-white/45 transition-colors hover:bg-white/10 hover:text-white">
          <X className="h-3.5 w-3.5" />
        </button>
        <button className="grid h-7 w-7 place-items-center rounded text-white/45 transition-colors hover:bg-white/10 hover:text-white">
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export function WeightToggle({
  weight,

  enabled,
}: {
  weight: number

  enabled: boolean
}) {
  return (
    <div className="flex items-center gap-3 text-[12px] text-white/55">
      <span className="flex items-center gap-1.5">
        Weight
        <span className="grid h-6 w-8 place-items-center rounded border border-white/10 bg-white/[0.06] text-white">
          {weight}
        </span>
      </span>
      <span className="flex items-center gap-1.5">
        Enabled
        <span
          className={`relative h-[18px] w-8 rounded-full transition-colors ${
            enabled ? "bg-emerald-500" : "bg-white/15"
          }`}
        >
          <span
            className={`absolute top-0.5 h-[14px] w-[14px] rounded-full bg-white transition-all ${
              enabled ? "left-[15px]" : "left-0.5"
            }`}
          />
        </span>
      </span>
    </div>
  )
}

export * from "./Popover"

export * from "./Stepper"
