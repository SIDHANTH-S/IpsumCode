import React from "react"

function OverlineContainer({
  dayName,
  month,
}: {
  dayName: string
  month: string
}) {
  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[2.582px] items-center justify-center leading-[6.886px] relative shrink-0 text-[11.62px] text-white tracking-[0.1291px] w-full whitespace-nowrap"
      data-name="Overline Container"
    >
      <p
        className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] mix-blend-screen relative shrink-0"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {dayName}
      </p>
      <p
        className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] mix-blend-screen opacity-60 relative shrink-0"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {month}
      </p>
    </div>
  )
}

function WidgetContainer({
  dayName,
  month,
  date,
}: {
  dayName: string
  month: string
  date: string | number
}) {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[7.316px] items-center justify-center left-1/2 overflow-clip px-[7.316px] py-[7.747px] rounded-[11.62px] size-[68px] top-0"
      data-name="Widget Container"
    >
      <div
        className="absolute backdrop-blur-[1.722px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] inset-0 mix-blend-luminosity rounded-[11.62px] to-[rgba(255,255,255,0.1)]"
        data-name="Fill Background"
      />
      <div
        className="absolute backdrop-blur-[1.722px] bg-[rgba(0,0,0,0.45)] inset-0 mix-blend-difference rounded-[11.62px]"
        data-name="Overlay Background"
      />
      <div
        className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[11.62px]"
        data-name="Glass Background"
      />
      <OverlineContainer dayName={dayName} month={month} />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['SF_Pro_Display:Medium',sans-serif] leading-[6.886px] min-w-full mix-blend-screen not-italic relative shrink-0 text-[35.29px] text-center text-white tracking-[-2.1519px] w-[min-content]">
        {date}
      </p>
    </div>
  )
}

export function CalendarWidget({
  dayName,
  month,
  date,
}: {
  dayName: string
  month: string
  date: string | number
}) {
  return (
    <div className="relative size-[68px]" data-name="Calendar">
      <WidgetContainer dayName={dayName} month={month} date={date} />
    </div>
  )
}
