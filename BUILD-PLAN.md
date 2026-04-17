# Beacon — Component Build Plan

## Overview

The Beacon app has **4 main sections** across **29 mobile screens** and **25 desktop screens**:
- **Home** — Feed of trending issues, pulse surveys, zip code CTA, elected officials
- **Issues** — Active Issues list, Issue detail (article view, consensus, contention, share)
- **Pulse** — Survey list (active/complete), survey question flow (multi-step), results
- **Officials** — Browse by state/name, official profile (score breakdown, sub-scores, bio)

Desktop reuses the same components at wider breakpoints with a top nav + sidebar layout.

---

## Phase 1: Design Tokens + Foundation

Build the shared design language first. Everything references these.

| Token | Value |
|-------|-------|
| `--beacon-cream` | `#f0e8d8` |
| `--beacon-slate` | `#141810` |
| `--beacon-white` | `#fafafa` |
| `--beacon-red` | `#de0100` |
| `--beacon-orange` | `#f80` |
| `--beacon-deep-green` | `#39503d` |
| `--gray-999` | `#999` |
| `--bg-warm` | `#fff9ed` |
| Font | Inter 400/500/600/700/800/900 |
| Border radius | Cards: 10px, Badges: 3px, Term badges: 5px |
| Shadow | `0 4px 15px rgba(0,0,0,0.15)` |

---

## Phase 2: Atomic Components (shared across all screens)

These are the building blocks. Build and test in isolation first.

### 2A — Icons (SVG components)
Already extracted from Figma:
- `IconPulse`, `IconShare`, `IconReactionHappy`, `IconReactionAngry`, `IconReactionSad`
- `IconAddReaction`, `IconLink`, `IconVerify`, `IconChevron`, `IconInfo`, `IconCheck`
- `IconClose`, `IconEqual`, `IconSearch`, `IconFilter`
- Nav icons: `IconHome`, `IconIssues`, `IconPulse`, `IconOfficials`, `IconAccount`

### 2B — Typography Components
- `SectionTitle` — Icon dot + Extra Bold title + optional info icon + "View All" link
- `TitleAndDescription` — Heading + optional subtitle (reused everywhere)
- `Badge` — Category tag (cream bg or transparent overlay variant)
- `StatusBadge` — "TRACKED" / "PENDING" pill

### 2C — Engagement Bar
Already built (Batch 1). Two variants:
- **Full** (News + Profile): ResponsesRow + divider + PostActionsRow (Pulses, Share, React)
- **Minimal** (Poll): Share count + Reaction text + React circle
- **Dark** (Image Only): Same as Full but white text on dark overlay

### 2D — Navigation
- `MobileHeader` — Status bar + page title
- `BottomTabBar` — Home / Issues / Pulse / Officials / Account (5 tabs, active state = filled icon + dark underline)
- `TopNav` (desktop) — Logo + nav links + search + account
- `BackHeader` — Back chevron + page title (used on detail screens)

---

## Phase 3: Card Components (the feed building blocks)

### Already Built (Batch 1 + 2)
| Component | Width | Status |
|-----------|-------|--------|
| `NewsArticleCard` (Mobile) | 357px | Done |
| `PollCard` | 333px | Done |
| `PoliticianProfileCard` | 357px | Done |
| `PostImageOnly` (dark overlay) | 357px | Done |
| `PostHomeSlim` (short image + text) | 333px | Done |
| `OfficialCard` (Tracked/Pending) | 357px | Done |
| `DataDetails` (Participation) | 325px | Done |

### Still Needed
| Component | Used On | Notes |
|-----------|---------|-------|
| `PostDesktop` | Desktop Home, Issues | Wide variant (996px), same data as mobile cards |
| `PostArticle` | Issue Detail | Full-width hero image, date + updated timestamp, no engagement on image |
| `PollCardFull` | Pulse Surveys list | Taller variant with more padding, used in vertical list |
| `SurveyQuestion` | Pulse flow | Question text + answer options (radio cards), progress bar, step counter |
| `SurveyResults` | Pulse Results | Bar chart results with percentages per answer |
| `ScoreItem` | Official Profile | Collapsible row: icon + title + description + score/max + chevron + "Avg" marker |
| `ScoreBarGraph` | Participation, Consistency, Conduct | Dual-segment bar (orange + green) with labels |
| `FormulaRow` | Data Details | value × weight = score (already built, reuse) |
| `StateRow` | Officials - State | Flag image + state name + chevron |
| `OfficialRow` | Officials - Name, State Expand | Same as OfficialCard but full-width list variant |
| `ZipCodeCTA` | Home | Dark green card: "Politics hits different when it's local" + zip input |
| `ConsensusView` | Issue Detail | Expandable accordion: "Consensus View" + content |
| `ContentionPoints` | Issue Detail | Expandable accordion: "Contention Points" + content |
| `StancesCard` | Consistency Detail | "Stances" section with signals/stances count boxes |
| `InconsistenciesCard` | Consistency Detail | Similar layout to Stances |
| `BeaconScoreModal` | Official Profile | Overlay modal explaining Beacon Score methodology |
| `BioSection` | Official Profile (bottom) | About, Term Info, Committees, Biography, Contact, Social |

---

## Phase 4: Page Assembly (Mobile)

Build pages by composing components. Recommended order (dependencies flow downward):

### Wave 1 — Home (1 screen)
**Screen: 1.0 Home**
- `MobileHeader`
- `SectionTitle` ("Active Issues")
- `PostImageOnly` (hero) + `PostHomeSlim` × 2 (horizontal carousel)
- `BottomTabBar`
- `SectionTitle` ("Pulse Surveys") + `PollCard` × 3 (horizontal scroll)
- `ZipCodeCTA`
- `SectionTitle` ("Elected Officials") + `OfficialCard` × 3 + "View All"

### Wave 2 — Issues (5 screens)
- **Active Issues** — Vertical feed of `PostArticle` cards (full-width)
- **Issue Focus** — Hero `PostArticle` + engagement + description + `ConsensusView` + `ContentionPoints`
- **Issue BP** — Bullet point detail views (2 variants)
- **Issue Contention** — Contention breakdown
- **Issue Share** — Share sheet

### Wave 3 — Officials (10+ screens)
- **Politicians - State** — `StateRow` list
- **Politicians - Name** — `OfficialRow` searchable list
- **Score** — `PoliticianProfileCard` (compact) + `BeaconScore` + `ScoreItem` × 3 (Participation, Consistency, Conduct) + `BioSection` + `PollCard` carousel
- **Score Info** — `BeaconScoreModal` overlay
- **Participation / Voting / Committees** — `DataDetails` + `ScoreBarGraph` + `FormulaRow`
- **Consistency** — `DataDetails` variant + `StancesCard` + `InconsistenciesCard`
- **Conduct** — `DataDetails` variant + conduct-specific breakdown

### Wave 4 — Pulse (7 screens)
- **Pulse Surveys** — "Your Voice Matters" header + Active/Complete tabs + `PollCardFull` list
- **Pulse Info** — Info overlay
- **Survey Question** — Multi-step flow: progress bar + question + answer cards + "Be Part of the Signal"
- **Pulse Results** — Results bar chart per question

---

## Phase 5: Desktop Adaptation

Desktop (1280px) reuses mobile components with layout changes:

| Mobile Component | Desktop Behavior |
|-----------------|-----------------|
| `PostImageOnly` | Becomes `PostDesktop` — horizontal layout (image left, text right) at 996px |
| `PostHomeSlim` | Carousel row of 3 cards |
| `PollCard` | Same width, arranged in grid |
| `OfficialCard` | Same, arranged in list/grid |
| `DataDetails` | Same, wider context area |
| `BottomTabBar` | Replaced by `TopNav` |
| `MobileHeader` | Replaced by `TopNav` |
| Page layout | Content centered at max-width 996px with 142px side margins |

**Desktop-specific components:**
- `TopNav` — Logo + Home / Issues / Pulse / Officials links + search + account
- `DesktopSidebar` (if needed) — TBD based on final desktop designs

---

## Reuse Map (Mobile → Desktop)

Components that work on both without modification:
- `Badge`, `StatusBadge`, `EngagementBar`, `SectionTitle`
- `OfficialCard`, `PollCard`, `DataDetails`, `FormulaRow`, `ScoreBarGraph`
- `StateRow`, `ScoreItem`, `BeaconScoreModal`, `BioSection`
- All icons

Components that need responsive variants:
- `PostImageOnly` → `PostDesktop` (different layout at wide breakpoints)
- `BottomTabBar` → `TopNav` (swap at breakpoint)
- `PoliticianProfileCard` → wider variant with horizontal layout

---

## Recommended Build Order for Dev Team

```
Sprint 1: Foundation + Shared Components
  ├── Design tokens (CSS variables)
  ├── Icon library (all SVGs as components)
  ├── Badge, StatusBadge, SectionTitle
  ├── EngagementBar (3 variants)
  ├── BottomTabBar + MobileHeader + BackHeader
  └── TopNav (desktop)

Sprint 2: Card Components
  ├── NewsArticleCard (already done — integrate)
  ├── PostImageOnly (already done — integrate)
  ├── PostHomeSlim (already done — integrate)
  ├── PollCard (already done — integrate)
  ├── OfficialCard (already done — integrate)
  ├── DataDetails (already done — integrate)
  ├── ScoreItem, ZipCodeCTA, StateRow
  └── PostDesktop (desktop wide variant)

Sprint 3: Home + Issues
  ├── Home page assembly (mobile + desktop)
  ├── Active Issues list
  ├── Issue Detail (Focus, BP, Contention, Share)
  └── PostArticle (full-width hero variant)

Sprint 4: Officials
  ├── State/Name browse screens
  ├── Official Profile (Score page)
  ├── Score sub-pages (Participation, Consistency, Conduct)
  ├── BeaconScoreModal
  └── BioSection

Sprint 5: Pulse
  ├── Survey list (Active/Complete)
  ├── Survey question flow (multi-step)
  ├── Survey results
  └── Polish + responsive testing
```

---

## What's Already Built (Deliverable Now)

These files are ready in `~/Dropbox/04 Projects/AI Shared/Beacon/`:

| File | Components |
|------|-----------|
| `BeaconCards.jsx` | NewsArticleCard, PollCard, PoliticianProfileCard |
| `BeaconCards-Preview.html` | Standalone preview of above |
| `BeaconCards-Batch2.jsx` | PostImageOnly, PostHomeSlim, OfficialCard (2 variants), DataDetails |
| `BeaconCards-Batch2-Preview.html` | Standalone preview of above |

**Total: 8 components built, ~20 more needed for full app coverage.**
