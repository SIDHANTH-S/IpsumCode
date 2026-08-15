import React, { useState, useRef, useEffect } from "react"

import { createPortal } from "react-dom"

import { ChevronDown, Plus, Minus, Check } from "lucide-react"
import { DatePicker } from "../assessment/DatePicker"

function useSmartSticky(
  triggerRef: React.RefObject<HTMLDivElement | null>,
  isOpen: boolean,
) {
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return

    const trigger = triggerRef.current

    const triggerRect = trigger.getBoundingClientRect()

    const initialScrollY = window.scrollY

    const popupHeight = 464

    const popupWidth = window.innerWidth >= 768 ? 478 : 355

    const triggerMid = triggerRect.top + triggerRect.height / 2

    let baseTop = triggerMid - popupHeight / 2

    // Use 66px to clear the new 50px top navbar safely (50px + 16px padding)

    baseTop = Math.max(
      66,
      Math.min(baseTop, window.innerHeight - popupHeight - 16),
    )

    let popupLeft = triggerRect.right + 16

    if (popupLeft + popupWidth > window.innerWidth) {
      popupLeft = Math.max(16, triggerRect.left - popupWidth - 16)
    }

    const onScroll = () => {
      const scrollDelta = window.scrollY - initialScrollY

      const currentTriggerTop = triggerRect.top - scrollDelta

      const currentTriggerBottom = currentTriggerTop + triggerRect.height

      let slideOffset = -scrollDelta * 0.5

      const currentTop = baseTop + slideOffset

      const currentBottom = currentTop + popupHeight

      if (currentTriggerTop <= currentTop) {
        slideOffset = currentTriggerTop - baseTop
      } else if (currentTriggerBottom >= currentBottom) {
        slideOffset = currentTriggerBottom - popupHeight - baseTop
      }

      setStyle({
        position: "fixed",

        top: `${baseTop}px`,

        left: `${popupLeft}px`,

        transform: `translateY(${slideOffset}px)`,

        willChange: "transform",
      })
    }

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)

      window.removeEventListener("resize", onScroll)
    }
  }, [isOpen, triggerRef])

  return style
}

export type FilterType = "select" | "multi-select" | "number" | "date-range"

export interface FilterOption {
  value: string

  label: string
}

export interface FilterDefinition {
  id: string

  label: string

  icon: React.FC<any>

  type: FilterType

  options?: FilterOption[]
}

export interface ActiveFilter {
  id: string

  definitionId: string

  operator: string

  value: any
}

export interface FilterMenuProps {
  trigger: React.ReactNode

  availableFilters: FilterDefinition[]

  initialFilters?: ActiveFilter[]

  onApply?: (filters: ActiveFilter[], matchType: "All" | "Any") => void
}

function CustomSelect({
  value,

  options,

  onChange,

  className = "",

  placeholder = "",

  multiple = false,
}: {
  value: any

  options: FilterOption[]

  onChange: (val: any) => void

  className?: string

  placeholder?: string

  multiple?: boolean
}) {
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  const handleSelect = (val: string) => {
    if (multiple) {
      const arr = Array.isArray(value) ? value : []

      if (arr.includes(val)) {
        onChange(arr.filter((v) => v !== val))
      } else {
        onChange([...arr, val])
      }
    } else {
      onChange(val)

      setOpen(false)
    }
  }

  const getDisplayValue = () => {
    if (multiple) {
      const arr = Array.isArray(value) ? value : []

      if (arr.length === 0)
        return <span className="opacity-40">{placeholder}</span>

      if (arr.length === 1)
        return options.find((o) => o.value === arr[0])?.label || arr[0]

      return `${arr.length} selected`
    }

    const selected = options.find((o) => o.value === value)

    return selected ? (
      selected.label
    ) : (
      <span className="opacity-40">{placeholder}</span>
    )
  }

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-full items-center justify-between rounded-md border border-neutral-700 bg-neutral-900/50 px-2.5 text-xs text-neutral-200 hover:border-neutral-500 focus:outline-none"
      >
        <span className="truncate">{getDisplayValue()}</span>
        <ChevronDown className="ml-1 h-3.5 w-3.5 shrink-0 text-neutral-500" />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 max-h-48 w-max min-w-full overflow-y-auto rounded-md border border-neutral-700 bg-neutral-800 py-1 shadow-lg">
          {options.map((opt) => {
            const isSelected = multiple
              ? (Array.isArray(value) ? value : []).includes(opt.value)
              : value === opt.value

            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="flex w-full items-center px-3 py-1.5 text-left text-xs text-neutral-300 hover:bg-neutral-700"
              >
                <div className="mr-2 flex h-3 w-3 items-center justify-center">
                  {isSelected && <Check className="h-3 w-3 text-emerald-400" />}
                </div>
                {opt.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function FilterMenu({
  trigger,

  availableFilters,

  initialFilters = [],

  onApply,
}: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const [matchType, setMatchType] = useState<"All" | "Any">("All")

  const [filters, setFilters] = useState<ActiveFilter[]>(initialFilters)

  const triggerRef = useRef<HTMLDivElement>(null)

  const menuRef = useRef<HTMLDivElement>(null)

  const stickyStyle = useSmartSticky(triggerRef, isOpen)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const handleAddFilter = (defId: string) => {
    const def = availableFilters.find((d) => d.id === defId)

    if (!def) return

    const newFilter: ActiveFilter = {
      id: Math.random().toString(36).substring(2, 9),

      definitionId: def.id,

      operator:
        def.type === "number"
          ? "Greater than"
          : def.type === "date-range"
            ? "is between"
            : "is",

      value:
        def.type === "multi-select" ? [] : def.type === "date-range" ? {} : "",
    }

    setFilters([...filters, newFilter])
  }

  const handleRemoveFilter = (id: string) => {
    setFilters(filters.filter((f) => f.id !== id))
  }

  const handleUpdateFilter = (id: string, updates: Partial<ActiveFilter>) => {
    setFilters(filters.map((f) => (f.id === id ? { ...f, ...updates } : f)))
  }

  const handleReset = () => setFilters([])

  useEffect(() => {
    if (onApply) {
      onApply(filters, matchType)
    }
  }, [filters, matchType, onApply])

  const unaddedFilters = availableFilters.filter(
    (def) => !filters.some((f) => f.definitionId === def.id),
  )

  return (
    <>
      <div
        className="relative inline-block cursor-pointer"
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={stickyStyle}
            className="z-[9999] flex h-[464px] w-[355px] flex-col rounded-lg border border-neutral-700 bg-surface-hover shadow-xl lc-md:w-[478px] animate-in fade-in-0 zoom-in-95 data-[side=right]:slide-in-from-left-2"
            data-state="open"
            data-side="right"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center gap-2 border-b border-neutral-700/50 p-4 pb-3">
              <span className="text-sm font-medium text-neutral-200">
                Match
              </span>
              <CustomSelect
                className="w-[72px]"
                value={matchType}
                onChange={setMatchType}
                options={[
                  { value: "All", label: "All" },

                  { value: "Any", label: "Any" },
                ]}
              />
              <span className="text-sm font-medium text-neutral-200">
                of the following filters:
              </span>
            </div>

            {/* Filter Rows */}
            <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:hidden">
              <div className="space-y-3">
                {filters.map((f) => {
                  const def = availableFilters.find(
                    (d) => d.id === f.definitionId,
                  )

                  if (!def) return null

                  const Icon = def.icon

                  return (
                    <div key={f.id} className="flex items-center gap-2 pl-1">
                      <Icon className="h-[18px] w-[18px] shrink-0 text-neutral-500 opacity-70" />
                      <div className="w-[86px] shrink-0 text-xs text-neutral-300">
                        {def.label}
                      </div>
                      {(() => {
                        const operatorOptions =
                          def.type === "number"
                            ? [
                                {
                                  value: "Greater than",
                                  label: "Greater than",
                                },
                                { value: "Less than", label: "Less than" },
                              ]
                            : def.type === "date-range"
                              ? [{ value: "is between", label: "is between" }]
                              : [
                                  { value: "is", label: "is" },
                                  { value: "is not", label: "is not" },
                                ]

                        return (
                          <>
                            <CustomSelect
                              className="w-[110px] shrink-0"
                              value={f.operator}
                              onChange={(v) =>
                                handleUpdateFilter(f.id, { operator: v })
                              }
                              options={operatorOptions}
                            />
                            {def.type === "select" ||
                            def.type === "multi-select" ? (
                              <CustomSelect
                                className="flex-1"
                                placeholder="Select..."
                                multiple={def.type === "multi-select"}
                                value={f.value}
                                onChange={(v) =>
                                  handleUpdateFilter(f.id, { value: v })
                                }
                                options={def.options || []}
                              />
                            ) : def.type === "number" ? (
                              <input
                                type="number"
                                value={f.value || ""}
                                onChange={(e) =>
                                  handleUpdateFilter(f.id, {
                                    value: e.target.value,
                                  })
                                }
                                className="flex-1 h-8 min-w-[80px] rounded-md border border-neutral-700 bg-neutral-900/50 px-2.5 text-xs text-neutral-200 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                                placeholder="Value"
                              />
                            ) : def.type === "date-range" ? (
                              <div className="flex-1 flex gap-2">
                                <div className="flex-1">
                                  <DatePicker
                                    value={f.value?.start || null}
                                    onChange={(d) =>
                                      handleUpdateFilter(f.id, {
                                        value: { ...f.value, start: d },
                                      })
                                    }
                                  />
                                </div>
                                <div className="flex-1">
                                  <DatePicker
                                    value={f.value?.end || null}
                                    onChange={(d) =>
                                      handleUpdateFilter(f.id, {
                                        value: { ...f.value, end: d },
                                      })
                                    }
                                  />
                                </div>
                              </div>
                            ) : null}
                          </>
                        )
                      })()}
                      <button
                        onClick={() => handleRemoveFilter(f.id)}
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-neutral-500 hover:bg-neutral-800 hover:text-red-400"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                    </div>
                  )
                })}

                {/* Add Button */}
                {unaddedFilters.length > 0 && (
                  <div className="relative mt-2 inline-block">
                    <CustomSelect
                      className="w-[120px]"
                      placeholder="+ Add filter"
                      value=""
                      onChange={(v) => handleAddFilter(v)}
                      options={unaddedFilters.map((def) => ({
                        value: def.id,

                        label: def.label,
                      }))}
                    />
                    <div className="pointer-events-none absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-[#262626]" />
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex shrink-0 items-center gap-4 border-t border-neutral-700/50 p-4">
              <button
                onClick={handleReset}
                className="flex-1 rounded-lg border border-neutral-700 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>,

          document.body,
        )}
    </>
  )
}
