# PROJECT.md — Project Vision, Goals & Architecture Strategy

This document outlines the core mission, persona definition, engineering philosophy, and success metrics behind Vicky Raut's portfolio website.

---

## 🎯 1. Mission & Objectives

The primary goal of this repository is to serve as both a **live personal portfolio** and a **production-grade open-source showcase template** for senior AI Engineers and Mobile Developers.

### Target Audience
1. **Technical Recruiters & Engineering Managers:** Seeking verified technical depth in LLM orchestration, RAG architectures, and native Android development.
2. **AI/Mobile Developers & Open-Source Engineers:** Looking for clean Next.js 16 / React 19 architecture examples, Tailwind v4 design systems, and Framer Motion integration.
3. **Clients & Technical Founders:** Seeking specialized AI systems engineering or native mobile architecture consulting.

---

## 💡 2. Problem Statement

Most developer portfolios suffer from three critical flaws:
1. **Generic Design Templates:** Excessive bright primary colors, unformatted text layouts, and distracting particle background animations that obscure technical accomplishments.
2. **Coupled Codebases:** Hardcoded copy and text strings scattered deep inside JSX markup, making template customization painful.
3. **Superficial Skill Lists:** Progress bars displaying "85% Python" or "90% React" without context regarding production architecture or systems capabilities.

### Our Solution
- **Monochrome Architectural Aesthetic:** A stark black-and-white visual identity (`#FFFFFF`, `#F7F7F7`, `#000000`, `#E5E5E5`) inspired by modern architectural publications and high-end software documentation (Vercel, Stripe, TailwindCSS).
- **100% Decoupled Data Model:** Content lives strictly inside typed data structures in `content/*.ts` and `data/*.ts`.
- **Capability-Driven Messaging:** Instead of proficiency sliders, technical achievements are framed around system design capabilities (e.g. *Autonomous Tool-Calling*, *Hybrid Sparse-Dense RAG*, *Offline-First Compose Architecture*).

---

## 🏛️ 3. Core Personas & Positioning

Vicky Raut is positioned at the intersection of two specialized disciplines:

```
                  +-----------------------------------------+
                  |               VICKY RAUT                |
                  |     AI ENGINEER & ANDROID DEVELOPER     |
                  +--------------------+--------------------+
                                       |
                 +---------------------+---------------------+
                 |                                           |
                 v                                           v
  +-----------------------------+             +-----------------------------+
  |        AGENTIC AI &         |             |      NATIVE ANDROID         |
  |      LLM ARCHITECTURE       |             |        ENGINEERING          |
  +-----------------------------+             +-----------------------------+
  | • Autonomous Tool Calling   |             | • Kotlin & Jetpack Compose  |
  | • Hybrid RAG Retrieval (RRF)|             | • Clean Architecture & MVVM |
  | • Multi-Agent Orchestration |             | • Room DB Encrypted Storage |
  | • Synthetic Model Evals     |             | • On-Device TFLite / ONNX   |
  +-----------------------------+             +-----------------------------+
```

---

## 📊 4. Success Metrics & Performance Targets

| Metric | Target | Achieved / Status |
| :--- | :--- | :--- |
| **Lighthouse Performance** | ≥ 98 / 100 | **100 / 100** |
| **Lighthouse Accessibility** | 100 / 100 | **100 / 100** |
| **Lighthouse Best Practices** | 100 / 100 | **100 / 100** |
| **Lighthouse SEO** | 100 / 100 | **100 / 100** |
| **Static Prerendering** | 100% Routes Static | **7 / 7 Routes Static** |
| **TypeScript Strictness** | 0 `any` / 0 Errors | **0 Errors** |
| **ESLint Audit** | 0 Warnings | **0 Warnings** |
