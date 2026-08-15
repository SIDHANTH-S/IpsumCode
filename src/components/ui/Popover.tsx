import React, { useState, useRef, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"

interface PopoverProps {
  trigger: ReactNode
  content: ReactNode
  isOpen: boolean
  onClose: () => void
  align?: "start" | "center" | "end"
  width?: string
  className?: string
}

export function Popover({
  trigger,
  content,
  isOpen,
  onClose,
  align = "start",
  width = "auto",
  className = "",
}: PopoverProps) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !popupRef.current) return

    const updatePosition = () => {
      if (!triggerRef.current || !popupRef.current) return

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const popupRect = popupRef.current.getBoundingClientRect()

      let top = triggerRect.bottom + 8

      // Flip up if there's not enough space below
      if (top + popupRect.height > window.innerHeight) {
        top = triggerRect.top - popupRect.height - 8
      }

      let left = triggerRect.left

      if (align === "end") {
        left = triggerRect.right - popupRect.width
      } else if (align === "center") {
        left = triggerRect.left + triggerRect.width / 2 - popupRect.width / 2
      }

      // Ensure it doesn't go off-screen
      if (left < 16) left = 16
      if (left + popupRect.width > window.innerWidth - 16) {
        left = window.innerWidth - popupRect.width - 16
      }

      setStyle({
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        width,
      })
    }

    updatePosition()

    // Using ResizeObserver for changes in popup content size
    const resizeObserver = new ResizeObserver(() => {
      updatePosition()
    })
    resizeObserver.observe(popupRef.current)

    window.addEventListener("scroll", updatePosition, { passive: true })
    window.addEventListener("resize", updatePosition, { passive: true })

    return () => {
      window.removeEventListener("scroll", updatePosition)
      window.removeEventListener("resize", updatePosition)
      resizeObserver.disconnect()
    }
  }, [isOpen, align, width])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  return (
    <>
      <div ref={triggerRef} className="inline-block">
        {trigger}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={popupRef}
            style={style}
            className={`z-[100] rounded-xl border border-white/10 bg-surface-base shadow-xl ${className}`}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  )
}
