import React, { useState, useRef, useEffect } from "react"

import { createPortal } from "react-dom"

import { ChevronDown, Minus, Check } from "lucide-react"
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
        className="flex h-8 w-full items-center justify-between rounded-md border border-border-default bg-surface-base/50 px-2.5 text-xs text-text-primary hover:border-border-default focus:outline-none"
      >
        <span className="truncate">{getDisplayValue()}</span>
        <ChevronDown className="ml-1 h-3.5 w-3.5 shrink-0 text-text-muted" />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 max-h-48 w-max min-w-full overflow-y-auto rounded-md border border-border-default bg-surface-hover py-1 shadow-lg">
          {options.map((opt) => {
            const isSelected = multiple
              ? (Array.isArray(value) ? value : []).includes(opt.value)
              : value === opt.value

            return (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="flex w-full items-center px-3 py-1.5 text-left text-xs text-text-secondary hover:bg-border-default"
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
      const target = event.target as Node

      // Check if click is inside menu or trigger
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        // Check if click is inside any popover (DatePicker calendars)
        const clickedElement = event.target as HTMLElement
        const isInsidePopover = clickedElement.closest('[data-popover-content]')

        if (!isInsidePopover) {
          setIsOpen(false)
        }
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
            className="z-[9999] flex h-[464px] w-[355px] flex-col rounded-lg border border-border-default bg-surface-hover shadow-xl lc-md:w-[478px] animate-in fade-in-0 zoom-in-95 data-[side=right]:slide-in-from-left-2"
            data-state="open"
            data-side="right"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center gap-2 border-b border-border-default/50 p-4 pb-3">
              <span className="text-sm font-medium text-text-primary">
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
              <span className="text-sm font-medium text-text-primary">
                of the following filters:
              </span>
            </div>

            {/* Filter Rows */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 [&::-webkit-scrollbar]:hidden">
              <div className="space-y-3">
                {filters.map((f) => {
                  const def = availableFilters.find(
                    (d) => d.id === f.definitionId,
                  )

                  if (!def) return null

                  const Icon = def.icon

                  const operatorOptions =
                    def.type === "number"
                      ? [
                          { value: "Greater than", label: "Greater than" },
                          { value: "Less than", label: "Less than" },
                        ]
                      : def.type === "date-range"
                        ? [{ value: "is between", label: "is between" }]
                        : [
                            { value: "is", label: "is" },
                            { value: "is not", label: "is not" },
                          ]

                  return (
                    // Row is now two stacked lines instead of one long flex row.
                    // This is the fix for both reported bugs: the header line
                    // (icon/label/operator/remove) has a small, predictable
                    // width, so it never overflows the popup. The value line
                    // below it always gets the FULL popup width, so the
                    // date-range pickers finally have room to show the
                    // selected dates instead of being squeezed to ~0px.
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="h-[18px] w-[18px] shrink-0 text-text-muted opacity-70" />
                        <div
                          className="w-[80px] shrink-0 truncate text-xs text-text-secondary"
                          title={def.label}
                        >
                          {def.label}
                        </div>
                        <CustomSelect
                          className="w-[104px] shrink-0"
                          value={f.operator}
                          onChange={(v) =>
                            handleUpdateFilter(f.id, { operator: v })
                          }
                          options={operatorOptions}
                        />
                        <button
                          onClick={() => handleRemoveFilter(f.id)}
                          className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-md text-text-muted hover:bg-surface-hover hover:text-red-400"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="w-full pl-[26px]">
                        {def.type === "select" ||
                        def.type === "multi-select" ? (
                          <CustomSelect
                            className="w-full"
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
                            className="h-8 w-full rounded-md border border-border-default bg-surface-base/50 px-2.5 text-xs text-text-primary placeholder:text-text-muted focus:border-border-default focus:outline-none"
                            placeholder="Value"
                          />
                        ) : def.type === "date-range" ? (
                          <div className="flex w-full gap-2">
                            <div className="min-w-[130px] flex-1">
                              <DatePicker
                                value={f.value?.start || null}
                                onChange={(d) =>
                                  handleUpdateFilter(f.id, {
                                    value: { ...f.value, start: d },
                                  })
                                }
                              />
                            </div>
                            <div className="min-w-[130px] flex-1">
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
                      </div>
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
                    <div className="pointer-events-none absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-surface-hover" />
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex shrink-0 items-center gap-4 border-t border-border-default/50 p-4">
              <button
                onClick={handleReset}
                className="flex-1 rounded-lg border border-border-default py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-border-default hover:text-text-primary"
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