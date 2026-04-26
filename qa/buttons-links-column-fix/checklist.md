# QA Checklist - Buttons & Links catalog refinements
Mode: BUILD
Source: User screenshot + Figma nodes 8344:179451, 8344:181991, 8346:98613, 8346:98543
Started: 2026-04-25

## Phase 0 - Setup
- [x] Preview server running on 8888
- [x] preview/storybook.html identified as target file

## Phase 1 - Spec pull (4 Figma nodes)
- [x] get_metadata on all 4 frames (Eng Pulses V/H, Eng React V/H)
- [x] get_design_context on Default + Hover for each
- [x] Asset downloaded (preview/assets/buttons-icons/eng-react.svg)

## Phase 2 - Build (column fix + new components + refinements)
- [x] Locate ButtonsAndLinks table in storybook.html
- [x] Add minmax to grid columns so Primary CTA Disabled no longer clips
- [x] Add Example column with InteractiveSample wrapper (hover/active/release)
- [x] Swap column order: Example | Component | Default | Hover | Active | Disabled
- [x] Toggle off bg #7f7c76 -> #CCCCCC (per user)
- [x] Add EngPulsesVertical + EngPulsesHorizontal (replace Share - small)
- [x] Add EngReactVertical + EngReactHorizontal
- [x] Icons set to slate (#141810) on all 4 new components
- [x] Eng React: cream circle becomes transparent on hover (so it doesn't fight gray bg)
- [x] IconNavPulse: add optional color prop (overrides both strokes for monochrome use)

## Phase 3 - Render & Screenshot
- [x] Preview running, all components visible
- [x] Verified strokes via preview_eval on Eng React + Eng Pulses rows

## Phase 4 - Visual DIFF
- [x] Spot-checked all new rows in screenshot, no clipping
- [x] DIFF: none

## Phase 4.5 - Pre-commit hygiene
- [x] No em-dashes in changed files (verified)
- [x] No localhost:/file:// URLs (verified)

## Phase 5 - Commit
- [x] Commit + push to origin
- [x] Commit + push to freeradicals
