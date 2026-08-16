import { useState, useRef, useEffect } from "react";

interface ResizablePanelProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth: number;
  onLeftResize: (width: number) => void;
  minLeft: number;
  maxLeft: number;
  top: React.ReactNode;
  bottom: React.ReactNode;
  topHeight: number;
  onTopResize: (height: number) => void;
  minTop: number;
  maxTop: number;
}

export function ResizableWorkspace({
  left, right, leftWidth, onLeftResize, minLeft, maxLeft,
  top, bottom, topHeight, onTopResize, minTop, maxTop
}: ResizablePanelProps) {
  const [isDraggingHorizontal, setIsDraggingHorizontal] = useState(false);
  const [isDraggingVertical, setIsDraggingVertical] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startWidthRef = useRef(0);
  const startHeightRef = useRef(0);

  const handleHorizontalStart = (e: React.MouseEvent) => {
    setIsDraggingHorizontal(true);
    startXRef.current = e.clientX;
    startWidthRef.current = leftWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const handleVerticalStart = (e: React.MouseEvent) => {
    setIsDraggingVertical(true);
    startYRef.current = e.clientY;
    startHeightRef.current = topHeight;
    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingHorizontal && containerRef.current) {
        const delta = e.clientX - startXRef.current;
        const deltaPercent = (delta / containerRef.current.clientWidth) * 100;
        let newWidth = startWidthRef.current + deltaPercent;
        newWidth = Math.max(minLeft, Math.min(maxLeft, newWidth));
        onLeftResize(newWidth);
      }
      if (isDraggingVertical && rightPanelRef.current) {
        const delta = e.clientY - startYRef.current;
        const deltaPercent = (delta / rightPanelRef.current.clientHeight) * 100;
        let newHeight = startHeightRef.current + deltaPercent;
        newHeight = Math.max(minTop, Math.min(maxTop, newHeight));
        onTopResize(newHeight);
      }
    };

    const handleMouseUp = () => {
      if (isDraggingHorizontal || isDraggingVertical) {
        setIsDraggingHorizontal(false);
        setIsDraggingVertical(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingHorizontal, isDraggingVertical, minLeft, maxLeft, minTop, maxTop, onLeftResize, onTopResize]);

  return (
    <div ref={containerRef} className="flex h-full w-full overflow-hidden">
      {/* Left panel */}
      <div className="shrink-0 flex flex-col" style={{ width: `${leftWidth}%` }}>
        {left}
      </div>

      {/* Horizontal splitter - 4px, real-time resize */}
      <div
        className="shrink-0 cursor-col-resize transition-colors duration-150 z-10"
        style={{ 
          width: 4,
          backgroundColor: isDraggingHorizontal ? 'var(--accent)' : 'var(--border)'
        }}
        onMouseDown={handleHorizontalStart}
        onMouseEnter={(e) => {
           if(!isDraggingHorizontal && !isDraggingVertical) e.currentTarget.style.backgroundColor = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
           if(!isDraggingHorizontal) e.currentTarget.style.backgroundColor = 'var(--border)';
        }}
      />

      {/* Right panel */}
      <div ref={rightPanelRef} className="flex flex-1 flex-col min-w-0 overflow-hidden relative">
        {/* Top panel */}
        <div className="shrink-0 flex flex-col" style={{ height: `${topHeight}%` }}>
          {top}
        </div>

        {/* Vertical splitter - 4px, real-time resize */}
        <div
          className="shrink-0 cursor-row-resize transition-colors duration-150 z-10"
          style={{ 
            height: 4,
            backgroundColor: isDraggingVertical ? 'var(--accent)' : 'var(--border)'
          }}
          onMouseDown={handleVerticalStart}
          onMouseEnter={(e) => {
             if(!isDraggingHorizontal && !isDraggingVertical) e.currentTarget.style.backgroundColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
             if(!isDraggingVertical) e.currentTarget.style.backgroundColor = 'var(--border)';
          }}
        />

        {/* Bottom panel */}
        <div className="flex-1 min-h-0 flex flex-col">
          {bottom}
        </div>
      </div>
    </div>
  );
}
