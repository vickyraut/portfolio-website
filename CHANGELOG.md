# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-08-03

### Added
- **Design System & Tokens:** Initialized monochrome visual identity using Tailwind CSS v4 `@theme inline` mappings (`#FFFFFF`, `#F7F7F7`, `#000000`, `#E5E5E5`), 4px spatial scale extensions, and Next.js font variables (`Inter` & `JetBrains Mono`).
- **Reusable Layout Primitives:** Built `<Container>` (standard, wide, reading), `<SectionWrapper>` (alternating background rhythm), `<SectionHeading>`, and `<SectionDivider>`.
- **Reusable UI Component Library:** Created monochrome-styled `<Button>` (primary/secondary/ghost), `<Card>`, `<Badge>` (rect/pill), `<TechTag>`, `<Input>`, and `<Textarea>`.
- **Animation System:** Built centralized motion library in `lib/animations.ts` featuring `EASE_OUT_QUINT` easing, `fadeUp`, `staggerContainer`, and `<Reveal>` scroll observer wrapper.
- **Header & Navigation:** Sticky `<Navbar>` with `useScrollDirection` smart auto-hide, mobile drawer menu, smooth anchor scrolling, and resume download link.
- **Hero Section:** 60/40 desktop layout with capability statement, animated 7-node neural agent SVG visual line-art, and breathing scroll indicator line.
- **About Section:** Split bio layout, milestone timeline (2021–2026), and monospace code comment philosophy motif.
- **Experience Section:** Vertical timeline layout with interactive connecting dot scaling (`1 -> 1.25`) on card hover, structured achievement lists, and technology chips.
- **Skills Section:** 7 capability cards (*Programming*, *AI & LLMs*, *Backend*, *Android*, *Databases*, *Cloud*, *Tools*) with interactive chip color inversion on hover.
- **Featured Projects Section:** Full-width spotlight card for featured project featuring 3-column Problem/Solution/Impact breakdown, plus 2-column secondary project grid.
- **AI Engineering Section:** Capability card grid showcasing 8 core areas (*Agentic AI*, *LLM Applications*, *RAG Systems*, *Multi-Agent Systems*, *Prompt Engineering*, *AI Automation*, *Tool Calling*, *Model Evaluation*) and 4-step pipeline flow diagram (*Prompt* → *Reasoning & Tool Call* → *Retrieval* → *Response*).
- **Android Development Section:** 2-column layout with 6 architectural technology cards (*MVVM*, *Clean Architecture*, *Jetpack Compose*, *Room DB*, *Retrofit*, *Firebase*) and an interactive crossfading `<PhoneMockup>` device preview.
- **Research & Publications Section:** Single-column editorial reading list for academic papers featuring paper title, venue, abstract, methodology, key results, and PDF links.
- **Technical Articles Section:** 3-column article grid featuring 16:9 aspect cover image containers with signature grayscale-to-color transition on hover.
- **Certifications & Achievements Section:** Dual sub-section layout featuring verified technical credentials and 6 key honors (*IEEE Publication*, *Diploma Rank 1*, *Android Club Lead*, *Teaching Assistant*, *NSS Volunteer*, *Hackathon Champion*).
- **Contact Section:** 50/50 split layout with availability status badge, one-click copy email button, social links, resume download CTA, and fully validated client-side `<ContactForm>` with accessibility announcements.
- **Footer:** Inverted dark theme `#000000` footer with navigation columns, social links, copyright credit, and back-to-top smooth button.
- **SEO & Metadata Infrastructure:** Configured Next.js Metadata API, dynamic title templates, Open Graph images (1200x630), Twitter Cards, `robots.txt`, `sitemap.xml`, `app/icon.tsx` PNG favicon generator, and JSON-LD structured data schemas for `Person`, `WebSite`, and `ItemList`.

### Fixed
- Fixed JSX comment text node errors in `certifications.tsx`, `featured-project.tsx`, and `research-card.tsx`.
- Refactored `useMediaQuery` hook to use React 18 `useSyncExternalStore` to eliminate synchronous `setState` in `useEffect` warnings.
- Fixed 404 error on resume download button by creating static PDF asset at `public/resume/vicky-raut-resume.pdf`.
- Removed `export const runtime = 'edge'` in `app/icon.tsx` to enable 100% static page prerendering across all 7 routes.

---

## [0.1.0] - 2026-08-01

### Added
- Next.js 16.2 App Router initial project scaffolding with TypeScript, Tailwind CSS v4, and ESLint config.
