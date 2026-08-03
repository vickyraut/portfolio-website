# DESIGN_SYSTEM.md — Monochrome Design System Specifications

This document details the color palette, typography tokens, spatial scale, micro-interactions, and accessibility standards governing the portfolio's visual identity.

---

## 🎨 1. Color System

The website relies on a strictly controlled monochrome palette designed for visual clarity and academic rigor.

| Token | CSS Variable / Utility | Color Value | Hex / RGB | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Background** | `--color-background` | Pure White | `#FFFFFF` | Hero, Experience, Projects, Android, Contact |
| **Secondary Background** | `--color-background-secondary` | Light Cool Gray | `#F7F7F7` | About, Skills, AI Engineering, Research, Certifications |
| **Primary Text / Invert** | `--color-foreground` | Deep Black | `#000000` | Headings, active states, primary buttons, footer fill |
| **Muted Text** | `--color-muted-foreground` | Slate Gray | `#6B7280` | Subtitles, body descriptions, metadata, labels |
| **Border / Divider** | `--color-border` | Light Gray | `#E5E5E5` | Card borders, section lines, input outlines |
| **Card Fill** | `--color-card` | Solid White | `#FFFFFF` | Floating card surfaces |

```
                       MONOCHROME CONTRAST SPECTRUM
[ #FFFFFF (Base White) ] <--> [ #F7F7F7 (Cool Gray) ] <--> [ #6B7280 (Muted) ] <--> [ #000000 (Black) ]
```

---

## 🔤 2. Typography Scale

Typography uses **Inter** for editorial body text and **JetBrains Mono** for technical code and metadata.

| Scale Token | Utility Class | Font Family | Size / Line-Height | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `.text-display` | Inter | `48px` / `1.1` (Mobile: `36px`) | Bold (700) | `-0.02em` |
| **H2** | `.text-h2` | Inter | `36px` / `1.2` (Mobile: `28px`) | Bold (700) | `-0.02em` |
| **H3** | `.text-h3` | Inter | `24px` / `1.3` (Mobile: `20px`) | Bold (700) | `-0.01em` |
| **H4** | `.text-h4` | Inter | `18px` / `1.4` | SemiBold (600) | `-0.01em` |
| **Body Large** | `.text-body-lg` | Inter | `18px` / `1.6` | Regular (400) | Normal |
| **Body Standard** | `.text-body` | Inter | `15px` / `1.6` | Regular (400) | Normal |
| **Metadata** | `.text-meta` | JetBrains Mono | `13px` / `1.4` | Medium (500) | Normal |
| **Overline** | `.text-overline` | JetBrains Mono | `12px` / `1.4` | Bold (700) | `+0.12em` |

---

## 📏 3. Spatial System (4px Rhythm)

Vertical padding across sections enforces a predictable architectural rhythm:

```
[ Section Padding: Mobile = py-20 (80px) | Desktop = py-30 (120px) / py-40 (160px) ]
```

| Spacing Token | Pixels | Usage |
| :--- | :--- | :--- |
| `spacing-1` | `4px` | Micro gaps between icons and labels |
| `spacing-2` | `8px` | Tech tag chip inner padding, button gap |
| `spacing-4` | `16px` | Standard card internal padding |
| `spacing-6` | `24px` | Card grid gaps, section header spacing |
| `spacing-16` | `64px` | Experience card vertical step gap |
| `spacing-20` | `80px` | Mobile section vertical padding |
| `spacing-30` | `120px` | Tablet section vertical padding |
| `spacing-40` | `160px` | Desktop section vertical padding |

---

## ✨ 4. Micro-Interactions & Hover States

1. **Card Elevation:** Floating cards translate `-4px` (`hover:-translate-y-1`) with soft shadow (`hover:shadow-hover`).
2. **Button Inversion:** Solid black primary buttons invert to white background with black border on hover.
3. **Skill Chip Inversion:** Skill pill badges invert fill color to solid black with white text on hover.
4. **Blog Cover Grayscale Transition:** Article thumbnails transition from 90% grayscale to full color (`grayscale group-hover:grayscale-0 transition-[filter,transform] duration-400`) on hover.
5. **Timeline Node Expansion:** Hovering an experience card scales the timeline dot from `1.0` to `1.25` and turns it solid black.

---

## ♿ 5. Accessibility Guidelines (WCAG 2.1 AA)

- **Contrast Ratios:** Text `#000000` on `#FFFFFF` (21:1) and `#6B7280` on `#FFFFFF` (4.6:1) pass AA standards.
- **Focus Rings:** All buttons, inputs, and links feature high-visibility outline rings (`focus-visible:ring-2 focus-visible:ring-foreground`).
- **Screen Reader Support:** Decorative graphics are marked `aria-hidden="true"`. Form inputs use `aria-invalid` and `aria-describedby` error announcements.

---

## 🤖 6. AI Orchestration Graph System (`HeroVisual`)

- **Data Model Topology:** Data-driven graph structure (`GRAPH_NODES`, `GRAPH_EDGES`, `DATA_PACKETS`) representing a 7-agent multi-agent runtime.
- **Organic Node Motion:** Floating particle animations with unique drift paths (±4px), staggered durations (8.5s–12s), and non-synchronized loop timing.
- **Dynamic Signal Transmission:** Lightweight 2.5px glowing data packets traversing active communication channels.
- **Central Supervisor Halo:** Concentric breathing halo ring on central orchestrator node (`scale: [1, 1.25, 1]`, `opacity: [0.5, 0.15, 0.5]`).
- **Live Runtime Console:** Monospace status messages cycling every 2.5s via Framer Motion `AnimatePresence` crossfades (`LANGGRAPH :: DISPATCH`, `HYBRID RAG :: MEMORY_UPDATED`, `STATE_FSM :: GRAPH_COMPILED`, etc.).
