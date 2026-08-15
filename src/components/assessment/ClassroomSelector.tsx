import React, { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Popover } from "../ui"

interface ClassroomSelectorProps {
  availableClassrooms: string[]
  selectedClassrooms: string[]
  onChange: (selected: string[]) => void
  readonly?: boolean
}

export function ClassroomSelector({
  availableClassrooms,
  selectedClassrooms,
  onChange,
  readonly,
}: ClassroomSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleClassroom = (cls: string) => {
    if (selectedClassrooms.includes(cls)) {
      onChange(selectedClassrooms.filter((c) => c !== cls))
    } else {
      onChange([...selectedClassrooms, cls])
    }
  }

  const trigger = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-9 cursor-pointer items-center gap-1.5 rounded-md bg-accent-base px-3.5 text-text-sm font-semibold uppercase tracking-[0.5px] text-text-primary transition-colors hover:bg-accent-hover"
    >
      Select
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  )

  const content = (
    <div className="flex max-h-[300px] flex-col overflow-y-auto p-1.5">
      {availableClassrooms.map((cls) => {
        const isSelected = selectedClassrooms.includes(cls)
        return (
          <button
            key={cls}
            onClick={() => toggleClassroom(cls)}
            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-text-base text-text-secondary hover:bg-white/10"
          >
            <div
              className={`grid h-4 w-4 shrink-0 place-items-center rounded-radius-md border ${
                isSelected
                  ? "border-accent-base bg-accent-base"
                  : "border-white/20 bg-transparent"
              }`}
            >
              {isSelected && (
                <Check className="h-3 w-3 text-text-primary" strokeWidth={3} />
              )}
            </div>
            {cls}
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="flex items-center gap-2">
      {!readonly && (
        <Popover
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          trigger={trigger}
          content={content}
          width="200px"
        />
      )}
      {selectedClassrooms.length > 0 ? (
        <span className="flex h-9 items-center rounded-md border border-border-default bg-surface-base px-3.5 text-text-sm font-medium uppercase tracking-[0.5px] text-white/80">
          {selectedClassrooms.join(", ")}
        </span>
      ) : (
        <span className="flex h-9 items-center rounded-md border border-border-default bg-white/[0.02] px-3.5 text-text-sm font-medium uppercase tracking-[0.5px] text-white/30">
          None selected
        </span>
      )}
    </div>
  )
}
