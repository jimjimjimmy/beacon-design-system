# Beacon Component Index

Quick reference for the eng team. Each component is a self-contained `.jsx` file that imports only from `icons.jsx` and `tokens.js`.

## Setup

```
Copy these 3 things into your project:
1. components/tokens.js    — Design tokens (colors, typography, spacing)
2. components/icons.jsx    — All SVG icon components
3. Any component .jsx file — The component you need
```

---

## Batch 1 — Core Cards

| Component | File | Preview | Figma Node |
|-----------|------|---------|------------|
| NewsArticleCard | `BeaconCards.jsx` | Batch1-Preview.html | `7798:28134` |
| PollCard | `BeaconCards.jsx` | Batch1-Preview.html | `7798:27891` |
| PoliticianProfileCard | `BeaconCards.jsx` | Batch1-Preview.html | `7798:28232` |

## Batch 2 — Card Variants

| Component | File | Preview | Figma Node |
|-----------|------|---------|------------|
| PostImageOnly | `BeaconCards-Batch2.jsx` | Batch2-Preview.html | `7821:85762` |
| PostHomeSlim | `BeaconCards-Batch2.jsx` | Batch2-Preview.html | `7821:85763` |
| OfficialCard (Tracked) | `BeaconCards-Batch2.jsx` | Batch2-Preview.html | `7821:85955` |
| OfficialCard (Pending) | `BeaconCards-Batch2.jsx` | Batch2-Preview.html | `7821:85956` |
| DataDetails | `BeaconCards-Batch2.jsx` | Batch2-Preview.html | `7821:85984` |

## Batch 3 — Common Components

| Component | File | Section | Preview | Figma Node |
|-----------|------|---------|---------|------------|
| SectionTitle | `components/SectionTitle.jsx` | Shared | Batch3-Preview.html | `5935:28409` |
| BottomTabBar | `components/BottomTabBar.jsx` | Shared | Batch3-Preview.html | — |
| BackHeader | `components/BackHeader.jsx` | Shared | Batch3-Preview.html | `5935:29067` |
| ZipCodeCTA | `components/ZipCodeCTA.jsx` | Shared | Batch3-Preview.html | — |
| PostArticle | `components/PostArticle.jsx` | Issues | Batch3-Preview.html | `5935:34527` |
| AccordionItem | `components/AccordionItem.jsx` | Issues | Batch3-Preview.html | `5935:34527` |
| ScoreItem | `components/ScoreItem.jsx` | Officials | Batch3-Preview.html | `6027:39115` |
| StateRow | `components/StateRow.jsx` | Officials | Batch3-Preview.html | `5935:28819` |
| StancesCard | `components/StancesCard.jsx` | Officials | Batch3-Preview.html | `5935:29052` |
| SurveyProgressBar | `components/SurveyProgressBar.jsx` | Pulse | Batch3-Preview.html | `5935:33583` |
| SurveyAnswerCard | `components/SurveyAnswerCard.jsx` | Pulse | Batch3-Preview.html | `5935:33583` |
| SurveyFooter | `components/SurveyFooter.jsx` | Pulse | Batch3-Preview.html | `5935:33583` |

## Shared Files

| File | Purpose |
|------|---------|
| `components/tokens.js` | Design tokens — colors, typography, spacing, shadows, radii |
| `components/icons.jsx` | All SVG icons as React components |

## Design Tokens (from tokens.js)

| Token | Value |
|-------|-------|
| `colors.cream` | `#f0e8d8` |
| `colors.slate` | `#141810` |
| `colors.white` | `#fafafa` |
| `colors.red` | `#de0100` |
| `colors.orange` | `#f80` |
| `colors.deepGreen` | `#39503d` |
| `colors.gray` | `#999` |
| `colors.warmBg` | `#fff9ed` |
| `shadows.card` | `0 4px 15px rgba(0,0,0,0.15)` |
| Font | Inter 400–900 |
| Card radius | 10px |

## Figma File

Design source: [Beacon Figma](https://www.figma.com/design/t6Y1c83uATw0SAVE2muCSh/Beacon)
- Mobile Screens: `node-id=5935-28402`
- Desktop Screens: `node-id=7096-50699`
- Batch 1 Components: `node-id=7798-27884`
- Batch 2 Components: `node-id=7821-86106`
