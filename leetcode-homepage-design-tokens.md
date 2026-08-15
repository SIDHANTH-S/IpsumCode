# LeetCode Homepage — Design Token Reference
Source: Figma "Contest — Light Theme" frame (`node-id=523-4452`), post-cleanup pass.

This is a full extraction of every token category actually in use on the page, organized as semantic tokens with a blank **Dark value** column so you can drop in dark-theme equivalents and generate a two-mode variable collection.

---

## 1. Color Tokens

### 1.1 Text

| Token | Light value | Opacity | Usage | Dark value |
|---|---|---|---|---|
| `text/primary` | `#1A233B` | 100% | Titles, nav labels, row titles, logo text, primary numbers | |
| `text/secondary` | `#667085` | 100% | Meta labels ("Rating:", "Attended:"), muted UI text | |
| `text/tertiary` | `#575757` | 70–90% (varies) | Table cell values (participation, score), column headers | |
| `text/muted` | `#000000` | 55% | Calendar day numbers | |
| `text/faint` | `#000000` | 6% | Calendar weekday initials (S/M/T/W/T/F/S) | |
| `text/on-accent` | `#FFFFFF` | 80–100% | Text on saturated fills (hero cards, calendar badges, COMPLETED pill) | |
| `text/link-accent` | `#5B4AEF` | 100% | "See all →", "Results →", nav active label | |
| `text/success` | `#22C573` | 100% | "Completed" status text | |
| `text/warning` | `#E69614` | 100% | "Review" status text | |

**⚠ Fixed this pass:** 14 nodes (7 table row titles, 7 "Attended:" values) were still using dark-theme leftover colors (`#F5F5F5` / white@80%) — invisible on the light surface. Rebound to `text/primary`.

**⚠ Still present, not yet unified:** `#F5F5F5` (6 uses) and `#E2E8F0` (2 uses) remain on *Calendar Badge Day* numbers and two badge "Lorem" labels — these sit on dark/saturated chip backgrounds so they're legible, but they duplicate `text/on-accent` and should be merged into it rather than kept as separate literals.

### 1.2 Surfaces

| Token | Light value | Usage | Dark value |
|---|---|---|---|
| `surface/base` | `#FFFFFF` | Page background, nav bar, table container, sidebar cards | |
| `surface/subtle` | `#F8FAFC` | Sidebar list-row alt background, calendar cell hover | |
| `surface/sunken` | `#000000` @ 2% | Table zebra-stripe (odd rows) | |
| `surface/page-bg` | `#F9FAFC` | Root canvas background behind the vertical nav border | |
| `surface/inverse` | `#1A233B` | Active/selected pill (COMPLETED button), avatar/rating badge chip | |

### 1.3 Accent (brand)

| Token | Light value | Usage | Dark value |
|---|---|---|---|
| `accent/primary` | `#5B4AEF` | Nav active state, links, primary icon strokes | |
| `accent/primary-subtle` | `#F0EDFF` | Nav active pill background, "Upcoming" card 0 badge bg | |
| `accent/logo` | `#635CE6` | Logo mark fill (close to but distinct from `accent/primary` — recommend consolidating) | |

### 1.4 Status

| Token | Light value | Usage | Dark value |
|---|---|---|---|
| `status/success` | `#22C573` | "Completed" label + implied badge state | |
| `status/warning` | `#E69614` | "Review" label + implied badge state | |
| `status/danger` | `#EF4743` | Notification dot, destructive icon fill | |

### 1.5 Borders / Dividers

| Token | Light value | Usage | Dark value |
|---|---|---|---|
| `border/default` | `#E5E7EB` | Table row dividers, vertical nav divider, card borders (16+5 uses — already consistent) | |
| `border/on-dark` | `#1A233B` | Icon strokes inside nav (classroom icon etc.) | |

### 1.6 Hero card gradients (already token-bound in file, included for completeness)

| Card | Stop 1 | Stop 2 | Usage |
|---|---|---|---|
| Live Now | `#A79CFF` | `#5B4AEF` | "LIVE NOW" card |
| Weekly Contest — blue | `#6EA8FF` | `#2952E3` | Contest card |
| Weekly Contest — orange | `#FFD98A` | `#F5A524` | Contest card |
| Weekly Contest — pink | `#FF9FB2` | `#F5567A` | Contest card |

### 1.7 One-off / illustration colors (excluded from token table)
Trophy/medal icon illustrations (`#8C685C`, `#F8EDC0`, `#0E3060`, `#063988`, `#A6D3DE`, etc.) are decorative asset fills, not UI tokens — leave as local overrides, don't systematize.

---

## 2. Typography Scale

The page currently mixes **three font families** (Inter, Segoe UI, Copperplate Gothic Bold) — flagged as an open inconsistency, not fixed this pass since it touches component-level type styles rather than isolated bugs. Recommend standardizing everything to Inter except the wordmark.

| Style name | Family | Weight | Size | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|---|
| `type/label-xs` | Inter | Medium | 11px | Auto | 0% | Table column headers (ASSESSMENT, etc.) |
| `type/body-sm` | Inter | Regular | 13px | Auto | 0% | Table cell values |
| `type/body-sm-strong` | Inter | Semi Bold | 13px | Auto | 0% | Table row titles, bold metrics |
| `type/caption` | Inter | Regular | 10–11px | Auto | 0% | Card meta text (time, duration) |
| `type/link-sm` | Inter | Medium | 12px | Auto | 0% | "Results →" / "Review →" |
| `type/nav-label` | Inter | Semi Bold | 16px | 24px | 0px | Sidebar nav items (Contest, Classroom, Ques Bank) |
| `type/eyebrow` | Inter | Bold | 9.5px | Auto | **10%** | "MAY" month label on calendar badges |
| `type/display-day` | Inter | Bold | 20px | Auto | 0% | Calendar badge day number |
| `type/heading-sm` | Inter | Semi Bold | 16px | Auto | 0% | Section heading ("Upcoming") |
| `type/heading-lg` | Inter | Bold | 21.5px | Auto | 0% | Hero card title ("LIVE NOW") |
| ⚠ `legacy/segoe-body` | **Segoe UI** | Regular | 9.8–14px | 13–20px | 0px | Right-rail calendar + rating sidebar — **inconsistent family, migrate to Inter** |
| ⚠ `legacy/wordmark` | **Copperplate Gothic Bold** | Regular | 20px | Auto | 0% | Logo text — likely intentional brand mark, confirm before merging |

---

## 3. Spacing Scale

Extracted from auto-layout `itemSpacing` / padding values (rounded, one-off decorative offsets under 1px removed):

| Token | Value | Notes |
|---|---|---|
| `space/2xs` | 2px | |
| `space/xs` | 4px | |
| `space/sm` | 8px | Most common — default gap/padding unit (39 uses) |
| `space/sm-alt` | 9–10px | Near-duplicate of `sm`, appears from scaled components — recommend snapping to 8px |
| `space/md` | 12–13px | |
| `space/lg` | 16px | Card internal padding |
| `space/xl` | 20–24px | Section gaps |
| `space/2xl` | 40–41px | |

**Recommendation:** collapse the 9px/9.8px/12.7px/12.9px/13.1px cluster into clean 8/12/16 steps — these are artifacts of components being scaled non-uniformly rather than intentional in-between values.

---

## 4. Corner Radius

| Token | Value | Usage |
|---|---|---|
| `radius/sm` | 5px | Small chips |
| `radius/md` | 8px | Cards, inputs |
| `radius/lg` | 12px | Larger containers |
| `radius/pill` | large uniform value (renders as full stadium — equivalent to `9999`) | All pill buttons/badges (COMPLETED, action bar, status pills) — functionally consistent already, just not using the file's existing `radius/9999` variable. Recommend rebinding for cleanliness, not urgent. |

---

## 5. Borders / Stroke Weight

| Token | Value | Usage |
|---|---|---|
| `border-width/hairline` | 0.5–1px | Dividers, table rules (dominant — 22+6 uses) |
| `border-width/default` | 1.5–2px | Icon strokes |
| ⚠ scaled outliers | 0.11–0.82px | Icon artwork scaled non-uniformly — not a systemic token, ignore |

---

## 6. Elevation / Shadow

| Token | Value (light) | Usage | Dark value |
|---|---|---|---|
| `shadow/xs` | `0 2px 5px rgba(0,0,0,0.08)` | Rating list row cards | |
| `shadow/sm` | `0 3px 10px rgba(0,0,0,0.05)` | Sidebar cards | |
| `shadow/md` | `0 6px 12px rgba(0,0,0,0.08)` | Table container, dropdowns | |
| `shadow/lg` | `0 8.6px 21.5px rgba(23,28,41,0.18)` | Hero gradient cards (Live Now / Weekly Contest) | |

**⚠ Legacy leftovers found, not applied to visible UI:** several `rgba(247,247,247,x)` "shadows" (near-white, low opacity) exist on a few isolated nodes — these are dark-theme glow effects that render as effectively invisible in light mode. Low visual impact today, but recommend deleting rather than porting to a dark-value column, since they don't map to a real light-theme intent.

---

## 7. How to use this for a dark theme

1. Create one variable collection with **Light** and **Dark** modes.
2. For every semantic token above (not the raw hex literals), add the Dark value in the same row.
3. Suggested dark-mode starting points, following the same relationships as light mode:
   - `surface/base` → near-black (`#0E1116`–`#14161C` range), `surface/inverse` → light instead of navy
   - `text/primary` → near-white, `text/secondary` → mid-gray, keep the same opacity ramps
   - Keep `accent/primary`, `status/success`, `status/warning`, `status/danger` hues but raise lightness slightly for AA contrast on dark surfaces
   - Hero card gradients can usually stay identical — they already have their own shadow/overlay treatment
4. Rebind every node currently using a raw hex (the ⚠ items above) to its semantic variable *before* adding the dark mode — otherwise the dark mode won't reach those nodes.
