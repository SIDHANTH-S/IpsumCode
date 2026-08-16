import { useState } from "react";
import imgAvatar from "@/assets/images/avatar.png";
import imgBadgeDcc from "@/assets/images/dcc-badge.png";
import img50Days from "@/assets/images/50-days.png";
import svgPaths from "@/assets/icons/dashboard-icons";

// ─── Data ────────────────────────────────────────────────────────────────────

const LANGUAGES = [
  { name: "Java",    solved: 206 },
  { name: "Python3", solved: 51  },
  { name: "MySQL",   solved: 36  },
];

const DIFFICULTY = [
  { label: "Easy", color: "#1cbaba", solved: 135, total: 958  },
  { label: "Med.",  color: "#ffb700", solved: 107, total: 2098 },
  { label: "Hard", color: "#f63737", solved: 31,  total: 962  },
];

const MONTHS = ["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

// Deterministic heatmap seeded by column+row
function cellIntensity(col: number, row: number) {
  const v = ((col * 7 + row * 13) % 31);
  if (v < 18) return 0;
  if (v < 24) return 1;
  if (v < 28) return 2;
  return 3;
}

const HEATMAP_COLS = 53;
const HEATMAP_ROWS = 7;

const SUBMISSIONS_TABS = ["Recent AC", "List", "Solutions", "Discuss"] as const;
type SubmissionTab = (typeof SUBMISSIONS_TABS)[number];

const RECENT = [
  { name: "Triangle Judgement",                             ago: "8 days ago" },
  { name: "Primary Department for Each Employee",           ago: "8 days ago" },
  { name: "The Number of Employees Which Report to Each Employee", ago: "8 days ago" },
  { name: "Customers Who Bought All Products",              ago: "8 days ago" },
  { name: "Biggest Single Number",                         ago: "8 days ago" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

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
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      {[[12,2,12,4],[12,20,12,22],[4,12,2,12],[22,12,20,12]].map((c,i)=>(
        <path key={i} d={`M${c[0]} ${c[1]}L${c[2]} ${c[3]}`} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
      ))}
      {[[5.6,5.6,4.2,4.2],[19.8,19.8,18.4,18.4],[18.4,5.6,19.8,4.2],[4.2,19.8,5.6,18.4]].map((c,i)=>(
        <path key={i+4} d={`M${c[0]} ${c[1]}L${c[2]} ${c[3]}`} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <div className="relative">
      <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
        <path clipRule="evenodd" d={svgPaths.p15ce4500} fill="currentColor" fillOpacity="0.55" fillRule="evenodd"/>
      </svg>
      <span className="absolute -top-[3px] -right-[3px] size-[8px] bg-[#F63636] rounded-full block" aria-hidden/>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12" aria-hidden>
      <path d="M2 6l3 3 5-5" stroke="#02b128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
  );
}

// ─── Donut chart for solved problems ─────────────────────────────────────────

function DonutChart() {
  const cx = 80, cy = 80, r = 62, stroke = 8;
  const circumference = 2 * Math.PI * r;
  // arcs: easy teal, medium yellow, hard red, empty grey
  const total = DIFFICULTY.reduce((a, d) => a + d.total, 0);
  const solved = DIFFICULTY.reduce((a, d) => a + d.solved, 0);
  const arcs = [
    ...DIFFICULTY.map(d => ({ color: d.color, frac: d.solved / total })),
    { color: "var(--heatmap-cell)", frac: (total - solved) / total },
  ];
  let offset = 0;
  return (
    <div className="relative size-[160px] shrink-0">
      <svg viewBox="0 0 160 160" width="160" height="160" style={{ transform: "rotate(-90deg)" }}>
        {arcs.map((arc, i) => {
          const dash = arc.frac * circumference;
          const gap = circumference - dash;
          const el = (
            <circle
              key={i}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset * circumference}
              strokeLinecap="round"
            />
          );
          offset += arc.frac;
          return el;
        })}
      </svg>
      {/* centre text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <div className="flex items-end gap-[2px]">
          <span className="text-[30px] font-bold leading-none" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>273</span>
          <span className="text-[14px] mb-[2px]" style={{ color: "var(--text-secondary)", fontFamily: "'Segoe UI', sans-serif" }}>/4018</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckIcon />
          <span className="text-[13px]" style={{ color: "var(--text-secondary)", fontFamily: "'Segoe UI', sans-serif" }}>Solved</span>
        </div>
        <span className="text-[12px]" style={{ color: "#737373", fontFamily: "'Segoe UI', sans-serif" }}>3 Attempting</span>
      </div>
    </div>
  );
}

// ─── Heatmap ─────────────────────────────────────────────────────────────────

const CELL_INTENSITIES: [string, string, string, string] = [
  "var(--heatmap-cell)", // 0 – empty
  "#b8b0f6",             // 1 – low
  "#7c6fe8",             // 2 – mid
  "#5b4aef",             // 3 – high
];

function Heatmap() {
  return (
    <div className="w-full overflow-x-auto">
      <div style={{ minWidth: 660 }}>
        {/* month labels */}
        <div className="flex mb-1" style={{ paddingLeft: 0 }}>
          {MONTHS.map((m, i) => (
            <div
              key={i}
              className="text-[11px] flex-1 text-left"
              style={{ color: "var(--heatmap-label)", fontFamily: "'Inter', sans-serif" }}
            >
              {m}
            </div>
          ))}
        </div>
        {/* grid: rows = day of week */}
        <div className="flex gap-[2px]">
          {Array.from({ length: HEATMAP_COLS }, (_, col) => (
            <div key={col} className="flex flex-col gap-[2px]">
              {Array.from({ length: HEATMAP_ROWS }, (_, row) => {
                const lvl = cellIntensity(col, row);
                return (
                  <div
                    key={row}
                    className="rounded-[2px]"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: CELL_INTENSITIES[lvl],
                    }}
                    aria-hidden
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Profile sidebar ──────────────────────────────────────────────────────────

function ProfileSidebar() {
  return (
    <aside className="flex flex-col gap-0 w-full lg:w-[300px] shrink-0" aria-label="User profile information">
      <div className="flex flex-col gap-4 px-4 pb-4">
        {/* avatar + name row */}
        <div className="flex items-start gap-4">
          <div className="size-[80px] rounded-lg overflow-hidden shrink-0" style={{ boxShadow: `0 0 0 1px var(--border)` }}>
            <img src={imgAvatar} alt="John Alex's avatar" className="size-full object-cover" />
          </div>
          <div className="flex flex-col gap-[2px] justify-center pt-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-[16px] font-semibold leading-6 truncate" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>JOHN ALEX</span>
              <img src={imgBadgeDcc} alt="DCC badge" className="size-[14px] object-contain shrink-0" />
            </div>
            <span className="text-[12px]" style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>JOHN</span>
            <span className="text-[16px]" style={{ color: "var(--profile-rank)", fontFamily: "'Segoe UI', sans-serif" }}>
              Rank <span className="font-semibold">5,58,479</span>
            </span>
          </div>
        </div>

        {/* year / dept */}
        <div className="flex items-center gap-3">
          <span className="text-[14px]" style={{ color: "#737373", fontFamily: "'Segoe UI', sans-serif" }}>IV Year</span>
          <div className="h-[16px] w-[2px] rounded-full" style={{ backgroundColor: "var(--profile-ring)" }} />
          <span className="text-[14px]" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>CSE</span>
          <span className="text-[14px]" style={{ color: "#737373", fontFamily: "'Segoe UI', sans-serif" }}>D</span>
        </div>

        {/* edit button */}
        <button
          className="w-full h-9 rounded-lg text-[13px] font-semibold border transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          style={{ color: "var(--text-primary)", borderColor: "var(--border)", backgroundColor: "var(--ws-panel-bg)", fontFamily: "'Inter', sans-serif" }}
        >
          Edit Profile
        </button>
      </div>

      {/* divider */}
      <div className="h-px mx-4 my-0" style={{ backgroundColor: "var(--border)" }} />

      {/* languages */}
      <div className="flex flex-col gap-4 px-4 pt-4">
        <h2 className="text-[16px] font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>Languages</h2>
        <div className="flex flex-col gap-3">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between">
              <span
                className="px-2 py-[2px] rounded-full text-[12px]"
                style={{ backgroundColor: "var(--lang-pill-bg)", color: "var(--lang-pill-text)", fontFamily: "'Segoe UI', sans-serif" }}
              >
                {lang.name}
              </span>
              <span className="text-[12px]" style={{ color: "var(--text-secondary)", fontFamily: "'Segoe UI', sans-serif" }}>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{lang.solved}</span>
                {" problems solved"}
              </span>
            </div>
          ))}
        </div>
        <button
          className="text-[12px] text-center transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}
        >
          Show more
        </button>
      </div>
    </aside>
  );
}

// ─── Stats cards ──────────────────────────────────────────────────────────────

function SolvedCard() {
  return (
    <div
      className="flex gap-3 p-4 rounded-lg"
      style={{
        backgroundColor: "var(--profile-card-bg)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.02), 0 6px 6px rgba(0,0,0,0.02)",
      }}
    >
      <DonutChart />
      <div className="flex flex-col gap-2 justify-center flex-1">
        {DIFFICULTY.map(d => (
          <div
            key={d.label}
            className="flex flex-col items-center justify-center flex-1 rounded p-2 gap-1"
            style={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          >
            <span className="text-[12px] font-semibold" style={{ color: d.color, fontFamily: "'Segoe UI', sans-serif" }}>{d.label}</span>
            <span className="text-[12px] font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>{d.solved}/{d.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BadgesCard() {
  return (
    <div
      className="flex flex-col gap-3 p-4 rounded-lg"
      style={{
        backgroundColor: "var(--profile-card-bg)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.02), 0 6px 6px rgba(0,0,0,0.02)",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[12px]" style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>Badges</span>
          <span className="text-[24px] leading-tight font-normal" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>2</span>
        </div>
        <button
          aria-label="View all badges"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {/* badge images */}
      <div className="flex items-center justify-center gap-4 py-1">
        <div className="size-[56px]">
          <img src={imgBadgeDcc} alt="Jul LeetCoding Challenge badge" className="size-full object-contain" />
        </div>
        <div className="size-[72px]">
          <img src={img50Days} alt="50 Days Badge 2025" className="size-full object-contain" />
        </div>
        <div className="size-[56px]" />
      </div>

      <div className="flex flex-col gap-[2px]">
        <span className="text-[12px]" style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>Most Recent Badge</span>
        <span className="text-[16px]" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>50 Days Badge 2025</span>
      </div>
    </div>
  );
}

// ─── Activity heatmap card ────────────────────────────────────────────────────

function ActivityCard() {
  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-lg w-full overflow-hidden"
      style={{
        backgroundColor: "var(--profile-card-bg)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.02), 0 6px 6px rgba(0,0,0,0.02)",
      }}
    >
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[20px] font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>287</span>
          <span className="text-[16px]" style={{ color: "var(--profile-rank)", fontFamily: "'Segoe UI', sans-serif" }}>submissions in the past one year</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap text-[12px]">
          <span style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>
            Total active days: <strong style={{ color: "var(--profile-rank)" }}>63</strong>
          </span>
          <span style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>
            Max streak: <strong style={{ color: "var(--profile-rank)" }}>21</strong>
          </span>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded"
            style={{ backgroundColor: "var(--lang-pill-bg)", color: "var(--text-secondary)", fontSize: 12, fontFamily: "'Segoe UI', sans-serif" }}
          >
            Current
            <svg fill="none" height="8" viewBox="0 0 8 5" width="8" aria-hidden>
              <path d="M1 1l3 3 3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* heatmap */}
      <Heatmap />
    </div>
  );
}

// ─── Recent submissions ───────────────────────────────────────────────────────

function RecentSubmissions() {
  const [tab, setTab] = useState<SubmissionTab>("Recent AC");
  return (
    <div
      className="flex flex-col rounded-lg w-full overflow-hidden"
      style={{
        backgroundColor: "var(--profile-card-bg)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.02), 0 6px 6px rgba(0,0,0,0.02)",
      }}
    >
      {/* tab bar + view all */}
      <div className="flex items-center justify-between px-4 pt-2 flex-wrap gap-y-2 border-b" style={{ borderColor: "var(--border)" }}>
        <div role="tablist" aria-label="Submission views" className="flex gap-1 flex-wrap">
          {SUBMISSIONS_TABS.map(t => {
            const active = t === tab;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className="flex items-center gap-2 px-4 py-2.5 rounded text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  backgroundColor: active ? "var(--lang-pill-bg)" : "transparent",
                  color: active ? "var(--text-primary)" : "var(--profile-rank)",
                  fontWeight: active ? 700 : 500,
                  fontFamily: "'Segoe UI', sans-serif",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
        <button
          className="flex items-center gap-1 text-[12px] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          style={{ color: "var(--text-secondary)", fontFamily: "'Segoe UI', sans-serif" }}
        >
          View all submissions <ArrowRightIcon />
        </button>
      </div>

      {/* rows */}
      <div className="flex flex-col" role="list" aria-label="Recent accepted submissions">
        {RECENT.map((r, i) => (
          <div
            key={i}
            role="listitem"
            className="flex items-center justify-between px-4 py-3 border-b last:border-b-0 hover:bg-[var(--bg-row-hover)] transition-colors"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-[14px]" style={{ color: "var(--text-primary)", fontFamily: "'Segoe UI', sans-serif" }}>{r.name}</span>
            <span className="text-[12px] shrink-0 ml-4" style={{ color: "var(--profile-muted)", fontFamily: "'Segoe UI', sans-serif" }}>{r.ago}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ProfilePage({
  dark, onToggleTheme, onBack,
}: {
  dark: boolean;
  onToggleTheme: () => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}>
      {/* navbar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-[50px] border-b"
        style={{ backgroundColor: "var(--bg-navbar)", borderColor: "var(--border-navbar)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg"
          aria-label="Back to dashboard"
        >
          <LogoIcon />
          <span className="font-copperplate text-[20px] font-bold leading-none select-none" style={{ color: "var(--text-primary)" }}>
            {`Ipsum<Code>`}
          </span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            style={{ color: "var(--text-muted)" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="flex items-center justify-center size-9 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            aria-label="Notifications"
            style={{ color: "var(--text-primary)" }}
          >
            <BellIcon />
          </button>
          <button
            onClick={onBack}
            className="size-[42px] rounded-full overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635ce6]"
            aria-label="Back to dashboard"
          >
            <img src={imgAvatar} alt="User avatar" className="size-full object-cover" />
          </button>
        </div>
      </header>

      {/* page content */}
      <main className="max-w-[1512px] mx-auto px-6 py-8">
        <div className="flex gap-6 items-start flex-col lg:flex-row">
          {/* left sidebar */}
          <ProfileSidebar />

          {/* right main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* top row: solved + badges */}
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-[1fr_420px]">
              <div className="min-w-0">
                <SolvedCard />
              </div>
              <BadgesCard />
            </div>

            {/* activity heatmap */}
            <ActivityCard />

            {/* recent submissions */}
            <RecentSubmissions />
          </div>
        </div>
      </main>
    </div>
  );
}
