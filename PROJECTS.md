# Portfolio Projects Governance & Addition Guide

This document governs the specifications, data structures, editorial rules, and ordering guidelines for managing the **Projects** section of the portfolio. All future project additions—whether authored manually or via AI assistant workflows—must strictly adhere to these standards.

---

## 1. Purpose

The Projects section showcases production engineering capabilities across Agentic AI, Deep Learning / Research, Native Android, and Systems Engineering. This guide ensures that all project entries maintain consistent data structures, accurate technical descriptions, verifiable tech stack tags, and a disciplined editorial voice across the entire application.

---

## 2. Data Schema

All projects reside in `content/projects.ts` (re-exported via `data/projects.ts`) and adhere to the strict `ProjectData` TypeScript interface defined in `lib/types.ts`:

```typescript
export interface ProjectData {
  slug: string;
  title: string;
  featured: boolean;
  image: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}
```

### Field Definitions

| Field | Type | Description |
| :--- | :--- | :--- |
| `slug` | `string` | Unique, URL-friendly hyphenated string identifier (e.g., `"agentic-blog-generator"`). |
| `title` | `string` | Formal title of the project (e.g., `"Agentic Blog Generator"`). |
| `featured` | `boolean` | Set to `true` for the single Featured Spotlight project, `false` for grid cards. |
| `image` | `string` | Static asset path to the project thumbnail/mockup image (e.g., `"/images/projects/agentic-blog.png"`). |
| `problem` | `string` | 1–2 sentence statement describing the core technical friction, challenge, or domain limitation. |
| `solution` | `string` | 1–2 sentence explanation detailing the technical solution, architecture, or model pipeline implemented. |
| `impact` | `string` | 1–2 sentence summary of quantifiable results, benchmarks, multi-language support, or deployment reach. |
| `techStack` | `string[]` | Array of verifiable tools, languages, and frameworks used (e.g., `["Python", "LangGraph", "FastAPI"]`). |
| `githubUrl` | `string` (optional) | Direct HTTPS link to the public GitHub repository. Omit entirely if private or unavailable. |
| `liveUrl` | `string` (optional) | Direct HTTPS link to the active web deployment or live demo. Omit entirely if no live web demo exists. |

---

## 3. Content Writing Rules

1. **Factual Grounding**: Every description, problem statement, and solution must be 100% accurate to the actual codebase and repository README. Never fabricate non-existent features, architectures, or benchmarks.
2. **Metrics & Impact**: Include verifiable performance metrics (e.g., accuracy %, P99 latency, number of supported languages, student cohort sizes) whenever available.
3. **Editorial Voice**: Tone must be concise, technical, and authoritative. Avoid marketing hype or superlative adjectives (*"revolutionary"*, *"game-changing"*, *"groundbreaking"*). Lead with strong past-tense action verbs (*"Built"*, *"Engineered"*, *"Designed"*, *"Trained"*, *"Architected"*).
4. **Standard Category Labels**: Project categories in card headers are derived from tech stack tags or explicit domain fields. Standard categories currently in use include:
   - `AI PROJECT`
   - `DEEP LEARNING / RESEARCH`
   - `ANDROID APP`
   - `COMPUTER VISION`
   - `WEB APP`
5. **Verifiable Tech Stack Chips**: Tags must reflect tools actively used in the codebase (cross-referenced against `requirements.txt`, `package.json`, `build.gradle`, or Dockerfiles).

---

## 4. Tiered Ordering Rules

Project entries in `content/projects.ts` are ordered by technical priority rather than strict chronological date. When inserting a new project, place it in the appropriate tier:

| Priority Tier | Domain Focus | Placement Guidelines |
| :--- | :--- | :--- |
| **Priority 1 (Top Tier)** | Agentic AI, LangGraph State Machines, RAG & LLM Orchestration | Occupies the top array slots. The flagship AI system takes the #1 `featured: true` spotlight. |
| **Priority 2** | Deep Learning, Computer Vision, Spatio-Temporal Detection & Research | Placed immediately below Priority 1 AI projects. |
| **Priority 3** | Native Android Applications (Kotlin/Java, Jetpack Compose, Room DB) | Placed after research and computer vision entries. |
| **Priority 4 (Bottom Tier)** | Web Applications, Flask Microservices, Utility Tools & Early Work | Placed at the bottom of the project list. |

> [!IMPORTANT]
> Within a priority tier, rank more advanced or recent work above older projects. Ordering is a deliberate editorial choice to reinforce primary engineering positioning.

---

## 5. Pre-Addition Checklist

Run through this checklist prior to committing any new project entry:

- [ ] GitHub repository URL is public and verified active (no 404s).
- [ ] Repository contains a comprehensive README documenting installation, usage, and architecture.
- [ ] Live demo URL (if present) is tested and loads cleanly.
- [ ] `problem`, `solution`, and `impact` statements are grounded strictly in codebase reality.
- [ ] `techStack` array matches verified dependencies in the codebase.
- [ ] `githubUrl` or `liveUrl` fields are omitted if no link exists (allowing component buttons to auto-hide cleanly).
- [ ] Array position in `content/projects.ts` follows the Section 4 Tiered Ordering Rules.
- [ ] Type checking passes with zero errors (`npx tsc --noEmit`).

---

## 6. Featured Spotlight Rules

The Featured Spotlight card renders the single top-level project (`featured: true`) using a full-width hero layout with a 3-column **Problem / Solution / Impact** breakdown.

- **Single Active Spotlight**: Exactly one project in `content/projects.ts` should have `featured: true`.
- **Spotlight Rotation**: When a more advanced AI system is built, promote it to `featured: true` (slot #1) and update the previous spotlight entry to `featured: false`.
- **Required Spotlight Fields**: Ensure `problem`, `solution`, and `impact` are fully written and detailed, as all three columns render prominently in the spotlight card.

---

## 7. Retired & Deprecated Projects Log

When projects are replaced or retired from active display, log them here for reference rather than removing all documentation history:

| Project Title | Category | Date Retired | Reason for Removal | Superseded By |
| :--- | :--- | :--- | :--- | :--- |
| *AgentMesh Orchestrator* | AI Project | Aug 2026 | Replaced initial template dummy data with real production repository | Agentic Blog Generator |
| *KronoSync Mobile* | Android App | Aug 2026 | Replaced initial template dummy data with real production repository | Touristo |
| *SemanticRAG Pipeline* | AI Project | Aug 2026 | Replaced initial template dummy data with real production repository | Multi-Agent AI Assistant |
| *EdgeCam AI Vision* | Computer Vision | Aug 2026 | Replaced initial template dummy data with real production repository | Ripe Papaya Detector |
