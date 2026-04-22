# Beacon Design System — Project Context

<!--
  IMPORTANT — KEEP THIS FILE CURRENT
  Whichever machine (Gandalf or Machine B) adds a component, updates a file,
  or makes a structural change: update this file before ending the session.
  Both machines depend on this as the single source of truth.
  Add: last updated date + machine name at the top so we know who last touched it.

  Last updated: 2026-04-21 11:16am — Machine B (Cowork)
  Changes: Pulse section added — PulseSurveys (Active/Complete tabs), PulseSurveyFlow (3-step Q1→Q2→Q3 with animated progress bar + cascade fade-in, mixes single/multi-select), PulseSurveyResults (reuses PollResultsCard) · discover_tune icon inlined from assets/icons · PulseSurveyQuestion kept as internal component (not registered — PulseSurveyFlow drives it)
-->

## ⚠️ Required Reading Before Building

**Before implementing any new component or fixing any visual bug, read the `design-to-code-qa` skill and the canonical pipeline doc:**

- Skill: `~/.claude/skills/design-to-code-qa/SKILL.md`
- Canonical: `~/Dropbox/04 Projects/AI Shared/memory/process_design_to_code_pipeline.md`

Non-negotiables from that doc:
1. **No `localhost:*` or `file://` URLs in committed code.** Fetch and save every asset from Figma MCP into `assets/` before committing.
2. **Run the pre-commit checklist** (visual + technical QA) before any commit that touches visuals.
3. **`grep -rn "localhost:\|file://" preview/`** should return nothing.

If the Figma desktop app isn't available (MCP server down, network blocked), STOP and ask — do not improvise placeholder assets without explicit user approval.

---

## What this is
A single-file React component storybook for the **Beacon** app — a civic/political news app. No bundler, no build step. Everything lives in one HTML file rendered by Babel CDN in the browser.

## Key file
```
preview/storybook.html   ← THE file. All components live here.
                           Never create separate standalone preview files.
                           If you built a component in a standalone file, merge it here.
```

Live URL: https://jimjimjimmy.github.io/beacon/preview/storybook.html

## Folder structure

```
preview/storybook.html      ← storybook (design QA)
components/                 ← engineering deliverables — .jsx files imported by the dev team's app
  tokens.js                   design tokens as JS exports
  icons.jsx                   all Icon* components
  SectionTitle.jsx, etc.      one file per component
assets/icons/               ← 19 raw SVG files exported from Figma — source for Icon* components
assets/nav-icons/           ← 73 SVG parts for nav icon states (active/inactive/fill/mask/dot)
BUILD-PLAN.md               ← project roadmap (still current)
COMPONENT-INDEX.md          ← engineering reference with Figma node IDs and file locations
```

**Rule:** `components/` and `assets/` are parallel engineering deliverables — do not merge into storybook.html. Everything in storybook.html is already there. New components go into storybook.html first, then get extracted to `components/` for the dev team separately.

## GitHub — Two-remote setup

| Remote | Repo | Purpose |
|--------|------|---------|
| `origin` | `https://github.com/jimjimjimmy/beacon.git` | Personal dev — push here first |
| `freeradicals` | `https://github.com/freeradicals-studio/beacon-mvp.git` | Team repo — push when ready |

### Initial setup (one time)
```bash
git remote add origin https://github.com/jimjimjimmy/beacon.git
git remote add freeradicals https://github.com/freeradicals-studio/beacon-mvp.git
```

### Push commands (two-account setup)
```bash
# Personal first (always)
GITHUB_TOKEN=$(gh auth token --hostname github.com -u jimjimjimmy 2>/dev/null) && git push "https://jimjimjimmy:${GITHUB_TOKEN}@github.com/jimjimjimmy/beacon.git" main

# Team repo (when ready to share) — must use jimjimjimmy token explicitly
GITHUB_TOKEN=$(gh auth token --hostname github.com -u jimjimjimmy 2>/dev/null) && git push "https://jimjimjimmy:${GITHUB_TOKEN}@github.com/freeradicals-studio/beacon-mvp.git" main
```

### Ongoing workflow
```bash
git add .
git commit -m "your message"
git push origin main           # always
git push freeradicals main     # when ready to share with team
```

> ⚠️ freeradicals-studio/beacon-mvp requires Trent to add jimjimjimmy as a collaborator before pushing.

---

## Architecture

### Stack
- React 18 (UMD CDN)
- Babel Standalone 7.23.9 (in-browser JSX transform)
- Inter font (Google Fonts)
- `<script type="text/babel">` — all code is JSX inside this single tag

### Design tokens — `T` object (always use these)
```js
const T = {
  cream:"#f0e8d8", slate:"#141810", white:"#fafafa", red:"#de0100",
  orange:"#f80", deepGreen:"#39503d", gray:"#999", warmBg:"#fff9ed",
  creamBorder:"#e9e1d3", shadow:"0 4px 15px rgba(0,0,0,0.15)", radius:10,
};
```

### Animation hook
```js
function useReveal(duration) {
  // RAF-driven 0→1 ease-out cubic. Returns progress value p (0–1).
  // duration defaults to 800ms
}
```
Use `p` to drive bar widths, opacity, transforms — whatever animates on mount.

---

## Two layout patterns

### 1. Card pattern (most components)
Components render as self-contained cards inside `.canvas-wrap` (cream bg, 20px padding, border-radius 12). Width is typically 357px.

### 2. Full-screen page pattern (IssueShareScreen, etc.)
Full-screen layout: 393×852px, `position:absolute`, simulates a mobile screen. Used for screens that are navigated to, not embedded cards. Canvas wrap should be `padding:0, background:"transparent"` with a fixed-size container.

---

## File structure (inside storybook.html)

1. **Design tokens** — `T` object
2. **useReveal hook**
3. **SVG Icons** — all Figma-extracted, named `IconXxx`. Never use emoji or placeholder icons.
4. **Component functions** — each component is a named `function ComponentName() { ... }`
5. **`SECTIONS`** (line ~1577) — registry of all components, grouped by section
6. **`ANIMATED_IDS`** (line ~1882) — Set of component IDs that have Replay/Reset button
7. **`ComponentCard`** — renders each component in its canvas with optional Replay button
8. **`App`** — sidebar nav + main canvas

---

## Adding a new component

1. Write the `function MyComponent() { ... }` before `const SECTIONS`
2. Add an entry to the correct section in `SECTIONS`:
```js
{ id:"MyComponent", label:"My Component", desc:"Short description of what it does" }
```
3. If it has animation, add `"MyComponent"` to `ANIMATED_IDS`
4. If it needs Reset instead of Replay: add to the ComponentCard conditional label check

**canvas-wrap default** — components render inside `.canvas-wrap` (cream bg, 20px padding, border-radius 12). Override per component if needed:
```jsx
// Full-bleed / no padding example:
<div className="canvas-wrap" style={{padding:0, background:"transparent"}}>
```

---

## Current components

### Foundation
- `SectionTitle` — orange dot + ExtraBold title + optional subtitle + View All
- `BottomTabBar` — 5-tab nav (Home/Issues/Pulse/Officials/Account), active state
- `BackHeader` — back chevron + centered page title
- `ZipCodeCTA` — deep green card, zip input + Update button

### Content
- `IssueCard` — Hero (overlay), Slim (image+text), Full-bleed variants
- `PollCard` — survey card with question, time estimate, article link, engagement bar (animated)
- `AccordionItem` — expandable row with icon + plus/minus toggle

### Officials
- `OfficialCard` — compact list row with color swatch + avatar + name + score
- `PoliticianProfileCard` — full detail card with header, avatar, bio, score, time tabs
- `ScoreItem` — score row with icon + bar + score/max + avg marker (animated)
- `StateRow` — state flag + name + chevron
- `StancesCard` — title + subtitle + two stat boxes
- `DataDetails` — score dimension breakdown, bar chart + formula boxes (animated)
- `ScoreDetail` — score card with progress bar + source (animated)
- `PoliticalLeaning` — left-right spectrum bar with gradient + dot (animated)
- `InconsistencyDetail` — X-circle header + body copy
- `BaselineCard` — action card with title + date + body + link icon
- `CommitteeSummaryCard` — title + subtitle + two stat boxes
- `CommitteeBreakdownCard` — committee list rows with attendance bars (animated)
- `ConductDrillDownCard` — score + deduction rows + total + source (animated)

### Survey
- `SurveyProgressBar` — continuous fill bar + step counter
- `SurveyAnswerCard` — single-select (bg toggle) or multi-select (circle checkbox)
- `SurveyFooter` — "Be Part of the Signal" CTA with participant count

### Interactions
- `ReactionInteraction` — card slides left (154px), reaction strip at z:1 behind card at z:2. Select emotion, card slides back. Toggle same to deselect.

### Pulse (full-screen screens)
Full-screen layout: 393×852px, `position:absolute`. Live under the **Mobile/Screens** section in the storybook.
- `PulseSurveys` — Beacon Pulse feed with Active/Complete tabs. Active shows 3 `PollCard`s; Complete shows `PollCard variant="complete"` with donut + result %. Uses `discover_tune` SVG (inlined from `assets/icons/discover_tune.svg`). No BottomTabBar per Figma.
- `PulseSurveyFlow` — 3-step survey orchestrator (Q1 single → Q2 single → Q3 multi-select) that advances to `PulseSurveyResults` on Done. Uses key-based remount on `PulseSurveyQuestion` so the progress bar animates width from prevStep→step and answer cards cascade-fade top-to-bottom.
- `PulseSurveyQuestion` — parameterized question screen (internal, not registered). Props: `{step, total, prevStep, title, options, mode:"single"|"multi", doneLabel, onAnswer}`. Multi-select adds 22px circle checkbox + Done button. Progress bar uses `transition: width 0.9s cubic-bezier(0.4,0,0.2,1)`.
- `PulseSurveyResults` — "Thanks for adding your voice" screen. Renders `PollResultsCard` (do not rebuild the engagement/donut/Jake/toggle — PollResultsCard already contains it). Fixed "Return to Feed" CTA + BottomTabBar activeTab="pulse".

### Issues (continued — full-screen screens)
Full-screen layout: 393×852px, `position:absolute`. These live under the **Issues** nav section in the storybook.
- `IssueShareScreen` — share sheet overlay on Issues screen. No tab bar, no Issues badge. Figma node `5935:34615`.
  - `ShareButton` — 88×88, cream fill at 0.8 opacity, cornerRadius 10, shadow. Used inside IssueShareScreen.
  - Copy Link uses `IconLink` (chain link) scaled to 30×30 with viewBox `3 3 10 10`.

---

## SVG Icons (Figma-extracted, in file)
`IconBeaconDot`, `IconChevronForward`, `IconChevronBack`, `IconChevronDown`, `IconChevronUp`,
`IconPlus`, `IconGlobe`, `IconCrossed`, `IconContention`, `IconUpDown`, `IconInfo`,
`IconExpert`, `IconSearch`, `IconVerify`, `IconMagicShield`, `IconGroup`,
`IconNavHome`, `IconNavIssues`, `IconNavPulse`, `IconNavOfficials`, `IconNavAccount`,
`IconShareAction`, `IconReactButton`, `IconLink`,
`IconFacebook`, `IconTwitter`, `IconLinkedIn`, `IconEmail`, `IconMessages`, `IconCloseLarge`

Note: `IconCopyLink` was removed — Copy Link uses the existing `IconLink` (chain link) instead.

---

## Critical editing rules

### JSX style — ALWAYS objects, NEVER strings
```jsx
// ✅ correct
<div style={{display:"flex", gap:8}}>
// ❌ will break the page silently
<div style="display:flex; gap:8px">
```

### Editing the file
- Use Python string replacement — never `sed -i` (breaks on macOS with special chars)
- After every component replacement, check for extra closing brace artifact:
  - Bad pattern: `  );\n}\n}\n\n\nconst SECTIONS`
  - Good pattern: `  );\n}\n\n\nconst SECTIONS`

### SVG in JSX
- All SVG attributes must be camelCase: `strokeWidth`, `strokeLinecap`, `fillRule`, etc.
- `style` attributes inside SVG must also be objects: `style={{display:"block"}}`

### Design philosophy
- Match Figma exactly. Measure everything: spacing, alignment, line weight, placement.
- Never simplify or rationalize. The design is the thinking.
- Always screenshot after visual changes — never say "done" without visual proof.
- User uses Brave browser. Control Chrome MCP works with Brave.
- **Before building any component:** open Figma and read the exact type specs from the info panel for EVERY text element — fontSize, fontWeight, lineHeight, letterSpacing. No guessing from screenshots. Do this before writing a single line of code.

---

## Cross-machine collaboration (Gandalf + Machine B)

- **Gandalf** = Machine A (runs at 5:00am for claude-mem sync)
- **Machine B** = this machine (runs at 5:15am for claude-mem sync, picks up Gandalf's export)
- Memory sync via `~/Dropbox/04 Projects/AI Knowledge/Claude-Mem/merge-mem.sh`
- User preferences: `~/Dropbox/04 Projects/AI Shared/memory/MEMORY.md`

### Handoff rules
1. **Update this CLAUDE.md** whenever you add a component, rename a file, or change the architecture. The other machine reads this cold.
2. **Never create standalone HTML preview files** — all components go into `storybook.html`. If you built something standalone, note it here and merge it on the next session.
3. **Push to GitHub** at the end of every session so both machines are on the same commit.
4. **Don't assume the other machine's session history** — write CLAUDE.md entries as current facts, not "tell the next Claude to..."

---

## Memory
User preferences and cross-session history are in claude-mem (SQLite DB synced via Dropbox).
Project memory files: `~/Dropbox/04 Projects/AI Shared/memory/MEMORY.md`
