import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
} from "react"
import { AlertCircle, ChevronDown, ChevronRight, X, ArrowRight } from "lucide-react"

// ---------------------------------------------------------------------------
// Shared style tokens. Pulling these out of NewQuestionPage.tsx means every
// field, panel, and dropdown in the workspace stays visually identical
// instead of each tab redefining its own slightly-different classes.
// ---------------------------------------------------------------------------

export const PANEL_BASE = "rounded-xl border border-border-default bg-surface-base"
export const FIELD_BASE =
  "w-full rounded-md border border-white/10 bg-white/6 px-3 text-text-base text-white placeholder:text-text-muted focus:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-base/50"

const ERROR_TEXT = "text-status-danger"
const ERROR_BORDER = "border-status-danger/50"

// ---------------------------------------------------------------------------
// FieldLabel
// ---------------------------------------------------------------------------

export function FieldLabel({
  children,
  required,
  htmlFor,
  hint,
}: {
  children: ReactNode
  required?: boolean
  htmlFor?: string
  hint?: string
}) {
  return (
    <div className="mb-1.5 flex items-baseline justify-between gap-2">
      <label htmlFor={htmlFor} className="text-text-sm font-medium text-white/70">
        {children}
        {required && (
          <span className="ml-1 text-accent-text-muted" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {hint && <span className="text-text-xs text-white/35">{hint}</span>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// InlineError — quiet, consistent validation messaging
// ---------------------------------------------------------------------------

export function InlineError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className={`mt-1.5 flex items-center gap-1.5 text-text-sm ${ERROR_TEXT}`}>
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Select — native <select> under the hood for full keyboard/screen-reader
// support, styled to match the rest of the form fields.
// ---------------------------------------------------------------------------

export interface SelectOption {
  value: string
  label: string
}

export function Select({
  options,
  value,
  onChange,
  placeholder,
  className = "",
  id,
  ariaLabel,
  error,
}: {
  options: SelectOption[]
  value: string | null
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  id?: string
  ariaLabel?: string
  error?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <select
        id={id}
        aria-label={ariaLabel}
        aria-invalid={Boolean(error)}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className={`${FIELD_BASE} h-10 w-full appearance-none pr-9 ${
          value ? "text-white" : "text-text-muted"
        } ${error ? ERROR_BORDER : ""}`}
      >
        {placeholder && (
          <option value="" disabled className="bg-surface-base text-text-muted">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-surface-base text-white">
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
        aria-hidden="true"
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// TextArea — controlled, labeled, resizable
// ---------------------------------------------------------------------------

export function TextArea({
  label,
  value,
  onChange,
  id,
  placeholder,
  error,
  rows = 3,
  monospace = true,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  id?: string
  placeholder?: string
  error?: string
  rows?: number
  monospace?: boolean
  required?: boolean
}) {
  const autoId = useId()
  const inputId = id ?? autoId
  const errorId = `${inputId}-error`

  return (
    <div className="min-w-0 flex-1">
      <FieldLabel htmlFor={inputId} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={inputId}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${FIELD_BASE} min-h-[84px] resize-y py-2.5 leading-relaxed ${
          monospace ? "font-mono" : ""
        } ${error ? ERROR_BORDER : ""}`}
      />
      <InlineError id={errorId} message={error} />
    </div>
  )
}

// ---------------------------------------------------------------------------
// CaseHeader — accessible disclosure trigger for a test case card
// ---------------------------------------------------------------------------

export function CaseHeader({
  title,
  badge,
  right,
  expanded,
  onToggle,
  controlsId,
  headerId,
}: {
  title: string
  badge?: ReactNode
  right?: ReactNode
  expanded: boolean
  onToggle: () => void
  controlsId: string
  headerId: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <button
        type="button"
        id={headerId}
        aria-expanded={expanded}
        aria-controls={controlsId}
        onClick={onToggle}
        className="flex min-w-0 flex-1 items-center gap-2 rounded text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-base/60"
      >
        <ChevronRight
          className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${expanded ? "rotate-90" : ""}`}
          aria-hidden="true"
        />
        <span className="truncate text-text-base font-medium text-white/90">{title}</span>
        {badge}
      </button>
      {right && (
        <div onClick={(event) => event.stopPropagation()} className="shrink-0">
          {right}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Badges
// ---------------------------------------------------------------------------

export function SampleBadge() {
  return (
    <span className="flex h-5 shrink-0 items-center rounded-full border border-status-success/40 bg-status-success/10 px-2 text-text-xs font-medium text-status-success">
      Sample
    </span>
  )
}

export function HiddenBadge() {
  return (
    <span className="flex h-5 shrink-0 items-center rounded-full border border-white/15 bg-white/6 px-2 text-text-xs font-medium text-white/55">
      Hidden
    </span>
  )
}

// ---------------------------------------------------------------------------
// WeightToggle — enable switch + weight stepper for a hidden test case
// ---------------------------------------------------------------------------

export function WeightToggle({
  weight,
  enabled,
  onWeightChange,
  onEnabledChange,
  label = "this case",
}: {
  weight: number
  enabled: boolean
  onWeightChange: (weight: number) => void
  onEnabledChange: (enabled: boolean) => void
  label?: string
}) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div className="flex items-center gap-1.5">
        <span className="text-text-xs text-white/40">Weight</span>
        <div className="flex items-center overflow-hidden rounded-md border border-white/10">
          <button
            type="button"
            aria-label={`Decrease weight for ${label}`}
            onClick={() => onWeightChange(Math.max(1, weight - 1))}
            disabled={weight <= 1}
            className="grid h-6 w-6 place-items-center text-white/50 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
          >
            −
          </button>
          <span
            className="grid h-6 w-7 place-items-center text-text-sm font-medium text-white/80"
            aria-hidden="true"
          >
            ×{weight}
          </span>
          <button
            type="button"
            aria-label={`Increase weight for ${label}`}
            onClick={() => onWeightChange(weight + 1)}
            className="grid h-6 w-6 place-items-center text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`${enabled ? "Disable" : "Enable"} ${label}`}
        onClick={() => onEnabledChange(!enabled)}
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          enabled ? "bg-accent-base" : "bg-white/15"
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "translate-x-[18px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// TabBar — accessible tabs with roving focus + optional error indicators
// ---------------------------------------------------------------------------

export function TabBar<T extends string>({
  tabs,
  activeTab,
  onChange,
  errorTabs,
  idPrefix,
}: {
  tabs: readonly T[]
  activeTab: T
  onChange: (tab: T) => void
  errorTabs?: Partial<Record<T, boolean>>
  idPrefix: string
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = tabs.indexOf(activeTab)
    if (event.key === "ArrowRight") {
      event.preventDefault()
      onChange(tabs[(index + 1) % tabs.length] as T)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      onChange(tabs[(index - 1 + tabs.length) % tabs.length] as T)
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Question sections"
      className="flex gap-1 rounded-lg border border-border-default bg-white/3 p-1"
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab
        const hasError = Boolean(errorTabs?.[tab])
        return (
          <button
            key={tab}
            id={`${idPrefix}-tab-${tab}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`${idPrefix}-panel-${tab}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab)}
            onKeyDown={handleKeyDown}
            className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-base/60 sm:flex-none ${
              isActive ? "bg-white/6 text-white" : "text-white/55 hover:text-white/85"
            }`}
          >
            {tab}
            {hasError && (
              <span
                className="h-[5px] w-[5px] rounded-full bg-status-danger"
                aria-label="Needs attention"
              />
            )}
            {isActive && (
              <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-accent-base" aria-hidden="true" />
            )}
          </button>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// useDisclosure — shared open/close + outside-click + escape logic for the
// topic picker dropdown, the "Add Languages" popover, and the Save menu.
// ---------------------------------------------------------------------------

export function useDisclosure<T extends HTMLElement>() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<T>(null)

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((value) => !value),
    containerRef,
  }
}

// ---------------------------------------------------------------------------
// TopicPicker — combobox that supports selecting a suggestion or creating a
// custom topic, with chips for the current selection.
// ---------------------------------------------------------------------------

export function TopicPicker({
  tags,
  suggestions,
  onAdd,
  onRemove,
  error,
  id,
}: {
  tags: string[]
  suggestions: string[]
  onAdd: (tag: string) => void
  onRemove: (tag: string) => void
  error?: string
  id?: string
}) {
  const autoId = useId()
  const inputId = id ?? autoId
  const errorId = `${inputId}-error`

  const [query, setQuery] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  const commitQuery = (textToCommit = query) => {
    const newTag = textToCommit.trim()
    if (newTag && !tags.includes(newTag)) {
      onAdd(newTag)
    }
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="group flex h-7 items-center gap-1 rounded-full bg-white/6 pl-3 pr-2 text-text-base font-medium text-white/80 transition-colors hover:bg-white/[0.1]"
          >
            {tag}
            <button
              type="button"
              aria-label={`Remove ${tag}`}
              onClick={() => onRemove(tag)}
              className="text-white/40 transition-colors hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}

        {isEditing ? (
          <input
            ref={inputRef}
            id={inputId}
            aria-describedby={error ? errorId : undefined}
            autoComplete="off"
            value={query}
            onBlur={() => {
              commitQuery()
              setQuery("")
              setIsEditing(false)
            }}
            onChange={(event) => {
              const val = event.target.value
              if (val.includes(",")) {
                const parts = val.split(",")
                const last = parts.pop() || ""
                parts.forEach(commitQuery)
                setQuery(last.trimStart())
              } else {
                setQuery(val)
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault()
                commitQuery()
                setQuery("")
                setIsEditing(false)
              } else if (event.key === "Escape") {
                setQuery("")
                setIsEditing(false)
              } else if (event.key === "Backspace" && query === "" && tags.length > 0) {
                onRemove(tags[tags.length - 1] as string)
              }
            }}
            placeholder="Type tag..."
            className={`h-7 w-[120px] rounded-full bg-white/6 px-3 text-text-base text-white focus:outline-none focus:ring-1 ${
              error ? "focus:ring-[#ff9b9b]" : "focus:ring-white/30"
            }`}
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex h-7 items-center gap-1 rounded-full bg-white/6 px-3 text-text-base font-medium text-white/80 transition-colors hover:bg-white/[0.1]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-3.5 w-3.5">
              <path fillRule="evenodd" d="M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z" clipRule="evenodd"></path>
            </svg>
            Tag
          </button>
        )}
      </div>
      <InlineError id={errorId} message={error} />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Menu — small popover used for "Add Languages" and the Save split button
// ---------------------------------------------------------------------------

export interface MenuOption {
  id: string
  label: string
  onSelect: () => void
  disabled?: boolean
}

export function Menu({
  trigger,
  options,
  align = "start",
  emptyLabel,
}: {
  trigger: (props: { onClick: () => void; expanded: boolean }) => ReactNode
  options: MenuOption[]
  align?: "start" | "end"
  emptyLabel?: string
}) {
  const { isOpen, toggle, close, containerRef } = useDisclosure<HTMLDivElement>()
  const menuId = useId()

  return (
    <div className="relative">
      {trigger({ onClick: toggle, expanded: isOpen })}
      {isOpen && (
        <ul
          id={menuId}
          role="menu"
          className={`absolute z-20 mt-1.5 min-w-[180px] overflow-hidden rounded-md border border-border-default bg-surface-base py-1 shadow-xl ${
            align === "end" ? "right-0" : "left-0"
          }`}
        >
          {options.length === 0 && emptyLabel && (
            <li className="px-3 py-1.5 text-text-sm text-white/40">{emptyLabel}</li>
          )}
          {options.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                role="menuitem"
                disabled={option.disabled}
                onClick={() => {
                  option.onSelect()
                  close()
                }}
                className="block w-full px-3 py-1.5 text-left text-text-base text-white/85 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:text-white/30 disabled:hover:bg-transparent"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


export function SectionLink({
  children = "See all",
  onClick,
}: {
  children?: ReactNode
  onClick?: () => void
}) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-1 cursor-pointer text-text-base font-medium text-indigo-400 transition-colors hover:text-indigo-300"
    >
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </button>
  )
}

export * from "./Popover"
export * from "./Stepper"
export * from "./FilterMenu"


