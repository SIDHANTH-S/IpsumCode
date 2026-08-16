import { useState } from "react";
import svgPaths from "@/assets/icons/dashboard-icons";
import imgClouds from "@/assets/images/clouds.png";
import imgAvatar from "@/assets/images/avatar.png";
import imgLeetcodeDateBadge from "@/assets/images/leetcode-badge.png";
import { ClaudeMascot } from "./components/ui/ClaudeMascot";
// ─── Data ────────────────────────────────────────────────────────────────────

type Tab = "ongoing" | "assigned" | "completed";

const ASSESSMENTS = [
  { id: 1, name: "Data Structures Mid-Term",    startDate: "24 May", startTime: "10:00 AM", durationMin: 30,  endDate: "24 May", endTime: "11:00 AM" },
  { id: 2, name: "Algorithms Assessment",       startDate: "24 May", startTime: "10:00 AM", durationMin: 60,  endDate: "24 May", endTime: "11:00 AM" },
  { id: 3, name: "Database Systems Assessment", startDate: "24 May", startTime: "10:00 AM", durationMin: 45,  endDate: "24 May", endTime: "11:00 AM" },
  { id: 4, name: "Frontend Coding Assessment",  startDate: "24 May", startTime: "10:00 AM", durationMin: 30,  endDate: "24 May", endTime: "10:30 AM" },
  { id: 5, name: "System Design Mock Test",     startDate: "24 May", startTime: "10:00 AM", durationMin: 30,  endDate: "24 May", endTime: "10:30 AM" },
  { id: 6, name: "Python Programming Test",     startDate: "24 May", startTime: "10:00 AM", durationMin: 30,  endDate: "24 May", endTime: "10:30 AM" },
  { id: 7, name: "Cloud Computing Assessment",  startDate: "24 May", startTime: "10:00 AM", durationMin: 30,  endDate: "24 May", endTime: "10:30 AM" },
];

const OVERVIEW_STATS = [
  { label: "Average Score",   value: "87.5%" },
  { label: "Questions Solved",value: "42 / 48" },
  { label: "Time Spent",      value: "18h 24m" },
  { label: "Current Streak",  value: "7 days" },
];

const CALENDAR = {
  month: "May",
  year: 2024,
  today: 24,
  days: [
    { n: null }, { n: null }, { n: 1  }, { n: 2  }, { n: 3  }, { n: 4  }, { n: 5  },
    { n: 6  }, { n: 7  }, { n: 8  }, { n: 9  }, { n: 10 }, { n: 11 }, { n: 12 },
    { n: 13 }, { n: 14 }, { n: 15 }, { n: 16 }, { n: 17 }, { n: 18 }, { n: 19 },
    { n: 20 }, { n: 21 }, { n: 22 }, { n: 23 }, { n: 24 }, { n: 25 }, { n: 26 },
    { n: 27 }, { n: 28 }, { n: 29 }, { n: 30 }, { n: 31 }, { n: null }, { n: null },
  ],
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function LogoIcon() {
  return (
    <div className="shrink-0 size-[28px]">
      <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
        <rect fill="#635CE6" height="28" rx="8" width="28" />
        <path d={svgPaths.p33eb5300} fill="white" />
      </svg>
    </div>
  );
}

function SunIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d={svgPaths.p1e16b680} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 2V4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 20V22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M4 12H2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M22 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p11a71b00} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p2f91e00} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p23ff44e0} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p1156e000} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <div className="relative">
      <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
        <path clipRule="evenodd" d={svgPaths.p15ce4500} fill="currentColor" fillOpacity="0.55" fillRule="evenodd" />
      </svg>
      <span className="absolute -top-[3px] -right-[3px] size-[8px] bg-[#F63636] rounded-full block" />
    </div>
  );
}


// Assessment row timeline: START → [pill on track] → END
function AssessmentTimeline({ durationMin }: { durationMin: number }) {
  const maxMin = 60;
  const pillWidthPct = Math.min(durationMin / maxMin, 1);
  const pillW = Math.round(80 + pillWidthPct * 120); // 80–200px range
  const offset = Math.round((240 - pillW) / 2);       // centre pill on rail

  return (
    <div className="h-[24px] relative w-[200px] sm:w-[240px] shrink-0">
      {/* rail */}
      <div
        className="absolute h-[6px] left-0 right-0 rounded-full top-[9px]"
        style={{ backgroundColor: "var(--rail-bg)" }}
      />
      {/* pill */}
      <div
        className="absolute h-[20px] top-[2px] rounded-full flex items-center justify-center overflow-hidden"
        style={{
          left: `${offset}px`,
          width: `${pillW}px`,
          backgroundColor: "#5b4aef",
          boxShadow: "0 2px 6px rgba(91,74,239,0.28)",
        }}
      >
        <span className="text-white text-[10px] font-bold whitespace-nowrap">
          {durationMin} min
        </span>
      </div>
    </div>
  );
}

function AssessmentRow({
  name, startDate, startTime, durationMin, endDate, endTime, zebra, onOpen,
}: (typeof ASSESSMENTS)[0] & { zebra: boolean; onOpen?: () => void }) {
  const interactive = Boolean(onOpen);
  return (
    <div
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={interactive ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen?.(); } } : undefined}
      aria-label={interactive ? `Open ${name}` : undefined}
      className={`flex items-center gap-4 px-4 h-[58px] rounded-lg transition-colors duration-100 hover:bg-[var(--bg-row-hover)] group ${interactive ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" : ""}`}
      style={{ backgroundColor: zebra ? "var(--bg-row-zebra)" : "transparent" }}
    >
      {/* name */}
      <div className="flex-1 min-w-0 pl-1">
        <span
          className="text-[14px] font-semibold leading-5 truncate block"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </span>
      </div>

      {/* divider */}
      <div className="h-[28px] w-px shrink-0" style={{ backgroundColor: "var(--col-divider)" }} />

      {/* timeline */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        {/* start */}
        <div className="flex flex-col items-end gap-[2px] w-[56px] shrink-0">
          <span className="text-[13px] font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
            {startDate}
          </span>
          <span className="text-[12px] font-medium leading-none" style={{ color: "var(--text-secondary)" }}>
            {startTime}
          </span>
        </div>
        {/* track + pill */}
        <AssessmentTimeline durationMin={durationMin} />
        {/* end */}
        <div className="flex flex-col items-start gap-[2px] w-[56px] shrink-0">
          <span className="text-[13px] font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
            {endDate}
          </span>
          <span className="text-[12px] font-medium leading-none" style={{ color: "var(--text-secondary)" }}>
            {endTime}
          </span>
        </div>
      </div>
    </div>
  );
}

function CalendarWidget() {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        backgroundColor: "var(--cal-bg)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.14)",
      }}
    >
      {/* header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div>
          <span className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
            Day {CALENDAR.today}
          </span>
          <span className="text-[10px] ml-2" style={{ color: "var(--text-muted)" }}>
            08:19:34 left
          </span>
        </div>
        <div className="relative size-[58px] shrink-0 -mt-8 -mr-1">
          <img src={imgLeetcodeDateBadge} alt="" className="size-full object-contain opacity-80" />
        </div>
      </div>

      {/* day headers */}
      <div className="grid grid-cols-7 px-3 pb-1">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} className="text-center text-[11px] font-medium py-1" style={{ color: "var(--text-muted)" }}>
            {d}
          </div>
        ))}
      </div>

      {/* days */}
      <div className="grid grid-cols-7 px-3 pb-4 gap-y-[2px]">
        {CALENDAR.days.map((d, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-[26px] rounded-full text-[12px] transition-colors duration-100"
            style={
              d.n === CALENDAR.today
                ? { backgroundColor: "#5b4aef", color: "#ffffff", fontWeight: 600 }
                : d.n
                ? { color: "var(--cal-text)", cursor: "default" }
                : {}
            }
          >
            {d.n ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewWidget() {
  return (
    <div
      className="rounded-xl w-full overflow-hidden"
      style={{
        backgroundColor: "var(--overview-bg)",
        boxShadow: "var(--shadow-overview)",
      }}
    >
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-[14px] font-semibold" style={{ color: "var(--text-primary)" }}>
          Overview
        </h3>
        {OVERVIEW_STATS.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[13px]">
            <span style={{ color: "var(--text-secondary)" }}>{s.label}</span>
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function Dashboard({
  dark, onToggleTheme, onOpenAssessment, onOpenProfile,
}: {
  dark: boolean;
  onToggleTheme: () => void;
  onOpenAssessment: (name: string) => void;
  onOpenProfile: () => void;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("ongoing");

  const tabs: { id: Tab; label: string }[] = [
    { id: "ongoing",   label: "Ongoing"   },
    { id: "assigned",  label: "Assigned"  },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>

      {/* ── Navbar ────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-[50px] border-b"
        style={{
          backgroundColor: "var(--bg-navbar)",
          borderColor: "var(--border-navbar)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-[10px]">
          <LogoIcon />
          <span
            className="font-copperplate text-[20px] font-bold leading-none select-none"
            style={{ color: "var(--text-primary)" }}
          >
            {`Ipsum<Code>`}
          </span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* theme toggle */}
          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{ color: "var(--text-muted)" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* notification */}
          <button
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            aria-label="Notifications"
            style={{ color: "var(--text-primary)" }}
          >
            <BellIcon />
          </button>

          {/* avatar */}
          <button
            onClick={onOpenProfile}
            className="size-[42px] rounded-full overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            aria-label="Open profile"
          >
            <img src={imgAvatar} alt="User avatar" className="size-full object-cover" />
          </button>
        </div>
      </header>

      {/* ── Main layout ───────────────────────────────────────── */}
      <div className="max-w-[1512px] mx-auto px-6 py-6">
        <div className="flex gap-6 items-start">

          {/* ── Left / main column ────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Hero */}
            <div
              className="relative rounded-[11px] overflow-hidden h-[152px] sm:h-[170px]"
              style={{
                background: dark
                  ? "linear-gradient(157deg, rgba(61,52,112,0.9) 68%, rgba(46,40,96,0.9) 100%), linear-gradient(197deg, #3d3470 65%, #2e2860 100%)"
                  : "linear-gradient(157.6deg, rgba(241,240,252,0.56) 71.5%, rgba(195,189,255,0.56) 97%), linear-gradient(196.7deg, rgb(241,240,252) 68.6%, rgb(195,189,255) 100%)",
              }}
            >
              {/* clouds background image */}
              <img
                src={imgClouds}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ objectPosition: "center top", opacity: dark ? 0.55 : 1 }}
              />

              {/* greeting text */}
              <div className="absolute left-10 bottom-0 top-0 flex flex-col justify-center">
                <p className="text-[28px] sm:text-[32px] font-bold leading-tight">
                  <span style={{ color: dark ? "#f0f0f0" : "#1a1a2e" }}>Welcome back, </span>
                  <span style={{ color: "#7c3aed" }}>Alex.</span>
                </p>
                <p className="text-[15px] sm:text-[16px] font-medium mt-1.5" style={{ color: dark ? "#a1a1aa" : "#52525b" }}>
                  <span className="font-bold text-[#635ce6]">3 assessments</span> are on your schedule today.
                </p>
              </div>

              {/* mascot */}
              <div className="absolute right-4 bottom-0 flex items-end pointer-events-none select-none">
                <ClaudeMascot variant="flag" />
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex gap-0 items-center h-[57px] border-b" style={{ borderColor: "var(--border)" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative h-full px-4 text-[15px] font-segoe transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6] rounded-t"
                  style={
                    activeTab === tab.id
                      ? {
                          color: "#ffffff",
                        }
                      : {
                          color: "var(--text-primary)",
                          opacity: 0.75,
                        }
                  }
                >
                  {activeTab === tab.id && (
                    <span
                      className="absolute inset-y-[8px] inset-x-0 rounded-full"
                      style={{
                        backgroundColor: "#635ce6",
                        boxShadow: "0 1px 1.5px rgba(0,0,0,0.24), 0 4px 3.45px rgba(0,0,0,0.16)",
                      }}
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Assessment table header */}
            <div className="px-4 relative">
              <div className="flex items-center justify-end pr-2">
                <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-1">
                  <span className="text-[9px] font-semibold tracking-wider w-[56px] text-right" style={{ color: "#808ca1" }}>START</span>
                  <span className="text-[9px] font-semibold tracking-wider text-center w-[200px] sm:w-[240px]" style={{ color: "#808ca1" }}>DURATION</span>
                  <span className="text-[9px] font-semibold tracking-wider w-[56px]" style={{ color: "#808ca1" }}>END</span>
                </div>
              </div>
            </div>

            {/* Assessment rows */}
            <div className="flex flex-col gap-1">
              {ASSESSMENTS.map((a, i) => (
                <AssessmentRow
                  key={a.id}
                  {...a}
                  zebra={i % 2 === 0}
                  onOpen={activeTab === "ongoing" ? () => onOpenAssessment(a.name) : undefined}
                />
              ))}
            </div>
          </div>

          {/* ── Right sidebar ─────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col gap-4 w-[270px] shrink-0 pt-1">
            <CalendarWidget />
            <OverviewWidget />
          </aside>
        </div>
      </div>
    </div>
  );
}
