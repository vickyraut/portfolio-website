# Vicky Raut — Portfolio Website
## Technical Implementation Plan (Next.js 15 / TypeScript / Tailwind / shadcn/ui / Framer Motion)

**Purpose:** Translate the UI/UX design specification into a buildable engineering plan — folder structure, component inventory, animation implementation, and a step-by-step roadmap suitable for driving development in Cursor.

---

# 1. Stack & Architecture Decisions

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15, App Router | Server components for static content (fast LCP), route-level layouts, built-in metadata API for SEO/OG |
| Language | TypeScript (strict mode) | Type-safe content models (projects, experience, blog frontmatter) |
| Styling | Tailwind CSS v4 | Matches the token-based design system (spacing scale, type scale, color tokens) almost 1:1 with Tailwind's config |
| Component primitives | shadcn/ui | Unstyled, accessible primitives (Button, Card, Input, Badge, Dialog, Sheet, Accordion, Tabs) restyled to match the monochrome system — avoids reinventing accessible form/menu/dialog behavior |
| Motion | Framer Motion (`motion/react`) | Declarative variants map directly to the animation table in the spec (fade/slide/stagger/scroll-into-view) |
| Content | MDX (via `next-mdx-remote` or `contentlayer2`) for Blog + Research; typed TS/JSON data files for Projects, Experience, Skills, Certifications | Blog benefits from MDX authoring; structured sections benefit from typed data for consistent card rendering |
| Fonts | `next/font` — Inter (variable) + Inter Display (or Neue Montreal) + JetBrains Mono | Self-hosted via next/font/google or next/font/local, zero layout shift, matches Section 4 spec exactly |
| Forms | React Hook Form + Zod, submitting via a Route Handler (`/app/api/contact/route.ts`) to Resend/EmailJS | Matches the inline-validation, loading→success button states in the spec |
| Icons | `lucide-react` | 1.5px-stroke line-icon aesthetic matches Section 3.11 exactly |
| Deployment target | Vercel | Native Next.js support, image optimization, edge-friendly route handlers |

---

# 2. Folder Structure

```
vicky-raut-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout: fonts, <html>, ThemeProvider (light-only), analytics
│   ├── globals.css                 # Tailwind base + design tokens as CSS variables
│   ├── page.tsx                    # Home: composes all one-page sections (Hero → Footer)
│   ├── (sections-as-single-page)   # Sections live as components, not routes — single-page portfolio
│   ├── blog/
│   │   ├── page.tsx                 # Blog index (grid)
│   │   └── [slug]/
│   │       └── page.tsx             # Individual blog post (MDX render)
│   ├── research/
│   │   └── page.tsx                 # Optional standalone research index if list grows beyond home section
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # POST handler: validate (Zod) → send via Resend → return JSON
│   ├── sitemap.ts                   # Dynamic sitemap (Next.js 15 metadata route)
│   ├── robots.ts
│   ├── opengraph-image.tsx          # Dynamic OG image (Next.js ImageResponse)
│   └── not-found.tsx
│
├── components/
│   ├── ui/                          # shadcn/ui primitives (generated + restyled)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx                 # mobile menu overlay
│   │   ├── accordion.tsx             # mobile skills groups
│   │   ├── separator.tsx             # dividers
│   │   ├── tooltip.tsx
│   │   └── skeleton.tsx              # image/content loading states
│   │
│   ├── layout/
│   │   ├── navbar.tsx                # sticky nav, scroll-shrink, smart hide/show
│   │   ├── mobile-menu.tsx           # full-screen overlay menu (wraps Sheet)
│   │   ├── footer.tsx                # inverted black footer
│   │   └── section-wrapper.tsx       # standard section padding + bg alternation + scroll-reveal wrapper
│   │
│   ├── sections/
│   │   ├── hero/
│   │   │   ├── hero.tsx
│   │   │   ├── hero-visual.tsx       # animated node-graph SVG (Framer Motion + SVG)
│   │   │   └── scroll-indicator.tsx
│   │   ├── about/
│   │   │   ├── about.tsx
│   │   │   └── about-timeline.tsx
│   │   ├── experience/
│   │   │   ├── experience.tsx
│   │   │   ├── experience-timeline.tsx
│   │   │   └── experience-card.tsx
│   │   ├── skills/
│   │   │   ├── skills.tsx
│   │   │   └── skill-category-card.tsx
│   │   ├── projects/
│   │   │   ├── projects.tsx
│   │   │   ├── featured-project.tsx
│   │   │   └── project-card.tsx
│   │   ├── ai-engineering/
│   │   │   ├── ai-engineering.tsx
│   │   │   ├── capability-card.tsx
│   │   │   └── process-strip.tsx     # prompt→reasoning→retrieval→response diagram
│   │   ├── android/
│   │   │   ├── android.tsx
│   │   │   ├── phone-mockup.tsx      # crossfading screenshot mockup
│   │   │   └── capability-list.tsx
│   │   ├── research/
│   │   │   ├── research.tsx
│   │   │   └── research-entry.tsx
│   │   ├── blog/
│   │   │   ├── blog-grid.tsx
│   │   │   └── blog-card.tsx
│   │   ├── certifications/
│   │   │   ├── certifications.tsx
│   │   │   └── certification-card.tsx
│   │   └── contact/
│   │       ├── contact.tsx
│   │       ├── contact-form.tsx
│   │       └── availability-badge.tsx
│   │
│   ├── shared/
│   │   ├── section-heading.tsx       # overline + H2 pattern, reused across all sections
│   │   ├── tech-tag.tsx              # pill badge for tech stacks
│   │   ├── animated-link.tsx         # underline-sweep text link
│   │   ├── reveal.tsx                # generic scroll-into-view wrapper (Framer Motion whileInView)
│   │   ├── node-mark.tsx             # brand mark SVG (dot + line), used in nav/footer/dividers
│   │   ├── section-divider.tsx       # 1px line + optional centered node dot
│   │   └── external-link-icon.tsx    # small arrow-out icon appended to outbound links
│   │
│   └── providers/
│       └── motion-config-provider.tsx # wraps app in MotionConfig (reduced-motion handling, default transition)
│
├── content/
│   ├── projects.ts                   # typed array: ProjectData[]
│   ├── experience.ts                 # typed array: ExperienceEntry[]
│   ├── skills.ts                     # typed array: SkillCategory[]
│   ├── certifications.ts             # typed array: Certification[]
│   ├── research.ts                   # typed array: ResearchEntry[]
│   └── blog/
│       ├── *.mdx                     # individual blog posts
│       └── index.ts                  # frontmatter schema + loader helpers
│
├── lib/
│   ├── types.ts                      # shared TS interfaces (Project, Experience, SkillCategory, etc.)
│   ├── constants.ts                  # nav items, social links, site metadata
│   ├── utils.ts                      # cn() helper (clsx+tailwind-merge), formatDate, readingTime
│   ├── animations.ts                 # centralized Framer Motion variants (fadeUp, staggerContainer, etc.)
│   ├── mdx.ts                        # MDX loading/parsing utilities
│   └── validations/
│       └── contact-schema.ts         # Zod schema for contact form
│
├── hooks/
│   ├── use-scroll-direction.ts       # for smart nav hide/show
│   ├── use-in-view.ts                # thin wrapper around Framer Motion's useInView with "once" default
│   ├── use-reduced-motion.ts         # wraps Framer Motion's useReducedMotion
│   └── use-media-query.ts            # breakpoint helper for JS-level responsive logic (e.g., mobile mockup scaling)
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── og/
│   │   └── mockups/                  # Android screenshots
│   └── resume/
│       └── vicky-raut-resume.pdf
│
├── styles/
│   └── tokens.css                    # design tokens as CSS custom properties (imported into globals.css)
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── components.json                    # shadcn/ui config
└── package.json
```

---

# 3. Design Tokens → Tailwind Config Mapping

Rather than hardcoding hex values in components, every value from Sections 4–6 of the design spec becomes a Tailwind theme token so components stay declarative (`bg-secondary`, `text-muted`, `rounded-card`).

```ts
// tailwind.config.ts (key excerpt — conceptual, not exhaustive)
colors: {
  background: "#FFFFFF",
  "background-secondary": "#F7F7F7",
  foreground: "#000000",
  muted: "#6B7280",
  border: "#E5E5E5",
  "invert-bg": "#000000",
  "invert-fg": "#FFFFFF",
},
borderRadius: {
  sm: "6px",
  md: "8px",
  lg: "12px",
  full: "9999px",
},
fontFamily: {
  display: ["var(--font-inter-display)"],
  sans: ["var(--font-inter)"],
  mono: ["var(--font-jetbrains-mono)"],
},
fontSize: {
  display: ["76px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
  h2: ["44px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
  h3: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
  h4: ["20px", { lineHeight: "1.3", fontWeight: "600" }],
  "body-lg": ["19px", { lineHeight: "1.6" }],
  body: ["16px", { lineHeight: "1.65" }],
  meta: ["13px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
  overline: ["12px", { lineHeight: "1.2", letterSpacing: "0.12em", fontWeight: "600" }],
},
spacing: {
  // extend default scale to guarantee the 4px-based tokens from Section 6.2 are always available
  18: "72px", 30: "120px", 40: "160px",
},
boxShadow: {
  hover: "0 8px 24px rgba(0,0,0,0.06)",
  modal: "0 16px 48px rgba(0,0,0,0.12)",
},
```

Responsive H1/H2 sizes (Section 4.1's desktop/tablet/mobile columns) are implemented as Tailwind responsive variants directly in components (e.g. `text-[40px] md:text-[56px] lg:text-display`) rather than as separate token names, since Tailwind's responsive prefix system already models this cleanly.

`globals.css` also defines the same values as raw CSS custom properties (`--color-background`, `--radius-lg`, etc.) so Framer Motion animations and any non-Tailwind inline styles (e.g., SVG stroke colors in `hero-visual.tsx`) can reference one source of truth via `var(--color-foreground)`.

---

# 4. Reusable UI Component Inventory

### 4.1 shadcn/ui primitives to install & restyle

Install only what's needed (spec explicitly avoids UI bloat):

```
npx shadcn@latest add button card input textarea badge sheet accordion separator tooltip skeleton
```

Restyle each in `components/ui/*` to match Section 3 of the design spec:
- `button.tsx` → add `primary`/`secondary`/`ghost` variants matching 3.1 exactly (via `class-variance-authority`, which shadcn already uses)
- `card.tsx` → set default border/radius/padding/hover-shadow per 3.2; hover lift handled via a `motion(Card)`-wrapped variant, not raw CSS, so it can be reused as `<MotionCard>` in Reveal-wrapped grids
- `input.tsx` / `textarea.tsx` → flat focus style (no box-shadow halo), label pattern per 3.3
- `badge.tsx` → two variants: `pill` (tech tags) and `rect` (category badges) per 3.4
- `sheet.tsx` → used as the mobile full-screen menu shell (Section 7.1)
- `accordion.tsx` → used for mobile Skills groups (Section 6.3 mobile behavior)

### 4.2 Custom shared components (`components/shared/`)

| Component | Spec reference | Notes |
|---|---|---|
| `<SectionHeading overline title />` | 7.x pattern repeated in every section | Single source for the "OVERLINE / Big Title" pattern |
| `<TechTag />` | 3.4 | Thin wrapper around `Badge variant="pill"` |
| `<AnimatedLink />` | 3.5 | Underline-sweep on hover, optional external-arrow icon |
| `<Reveal />` | 9 (scroll-into-view stagger) | `motion.div` wrapper using `whileInView`, `viewport={{ once: true }}`, consumes variants from `lib/animations.ts` |
| `<NodeMark />` | 2 (brand mark) | Inline SVG component, accepts `variant="light"|"dark"` for footer use |
| `<SectionDivider />` | 3.7 | 1px line, optional centered `<NodeMark />` dot |
| `<ExternalLinkIcon />` | 11 (icon rules) | 12px arrow-out icon, `lucide-react`'s `ArrowUpRight` |

### 4.3 Layout components

- `<Navbar />` — client component; uses `use-scroll-direction` hook for hide/show, `use-media-query` or Tailwind `md:` classes for desktop/mobile menu swap
- `<MobileMenu />` — wraps `<Sheet side="top" className="h-screen">`, staggered `<Reveal>` list of nav items
- `<Footer />` — server component (fully static), inverted color classes applied directly (`bg-invert-bg text-invert-fg`)
- `<SectionWrapper bg="primary"|"secondary">` — enforces consistent vertical padding scale (80/120/160px) and background alternation from Section 5/6.2, so no section hardcodes its own `py-*`

---

# 5. Page & Route Composition

Since the design spec is a single-page portfolio (Hero → Footer, all sections on one scroll), routing is minimal:

- **`app/page.tsx`** (Server Component): imports each section component in order and renders them inside `<main>`, wrapped by `<Navbar />` and `<Footer />` from `app/layout.tsx`. Each section component internally decides `bg="primary"` vs `"secondary"` per the alternation pattern in Section 5 of the design spec.
- **`app/blog/page.tsx`**: Server Component, statically generates the grid from `content/blog/*.mdx` frontmatter via `generateStaticParams`-style static fetch at build time.
- **`app/blog/[slug]/page.tsx`**: Server Component, MDX rendered via `next-mdx-remote/rsc`, wrapped in a reading-width (680px) container per Section 6.1's "reading container" rule; generates per-post metadata (OG title/description) via Next.js's `generateMetadata`.
- **`app/research/page.tsx`** (optional, only if research entries outgrow the home-page section): mirrors the home-page Research section's single-column layout at full length.
- All sections stay **anchor-linked** (`#projects`, `#contact`, etc.) from the Navbar rather than becoming separate routes — matches the "single scrolling product page" feel of Linear/Vercel-style sites referenced in the design brief.

---

# 6. Animation Implementation (Framer Motion)

### 6.1 Centralized variants (`lib/animations.ts`)

```ts
// Conceptual shape — implemented as actual Variants objects in the file
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = (staggerMs = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerMs } },
});

export const heroTextReveal: Variants = { /* line-mask reveal, 600ms, 60ms stagger per line */ };
export const scaleImage: Variants = { rest: { scale: 1 }, hover: { scale: 1.03 } };
export const invertColors: Variants = { rest: {}, hover: {} }; // handled mostly via Tailwind hover: classes + CSS transitions rather than Motion, see 6.4
```

### 6.2 Mapping design-spec animations to implementation technique

| Spec animation | Section | Implementation |
|---|---|---|
| Hero copy stagger fade+slide-up | 7.2 / 9 | `motion.div` tree with `staggerContainer` on the hero wrapper, `fadeUp` on each child (`initial="hidden" animate="visible"` on mount, not scroll-triggered) |
| Hero headline text reveal (line-by-line) | 7.2 | Split headline into `<span>` per line at the data level; each line wrapped in `motion.span` with `heroTextReveal`, `overflow-hidden` parent for the mask effect |
| Scroll indicator breathing | 7.2 | `motion.div` with `animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}` |
| Section scroll-into-view stagger | 9 (grids) | `<Reveal>` wrapping each grid section; grid children use `staggerContainer` + `fadeUp`, `viewport={{ once: true, amount: 0.2 }}` |
| Card hover lift + shadow | 3.2 | **Pure CSS/Tailwind**, not Framer Motion — `transition-transform hover:-translate-y-1 hover:shadow-hover duration-[220ms]` (cheaper, avoids JS animation for a state this frequent) |
| Button invert on hover | 3.1 | Pure CSS/Tailwind (`transition-colors`) |
| Image scale on project/blog card hover | 6.6 / 7.10 | Tailwind `group-hover:scale-[1.03] transition-transform duration-300` on the `<Image>`, parent has `overflow-hidden` |
| Blog cover desaturate→color on hover | 7.10 | Tailwind `grayscale group-hover:grayscale-0 transition-[filter] duration-400` |
| Link underline sweep | 3.5 | CSS `::after` pseudo-element with `scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150` (implemented via Tailwind arbitrary utility or a small `.link-underline` class in `globals.css`) |
| Android phone mockup crossfade | 7.8 | `AnimatePresence mode="wait"` cycling an index via `setInterval`/`useEffect`, `motion.img` with `initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6}}` |
| Availability status pulse | 7.12 | `motion.span` with `animate={{ opacity: [1, 0.4, 1] }}`, `repeat: Infinity`, `duration: 2` |
| Smart nav hide/show | 7.1 | `motion.header` with `animate={{ y: hidden ? -80 : 0 }}`, driven by `use-scroll-direction` hook |
| Mobile menu overlay entrance | 7.1 | shadcn `Sheet`'s built-in Radix animation, or override with Framer Motion `AnimatePresence` if finer control over the 250ms fade+slide is needed |
| Form submit loading→success | 7.12 | Local `useState<'idle'|'loading'|'success'>` swapping button inner content, cross-faded via `AnimatePresence` |

**Rule enforced in code review:** hover/press states that are purely visual (color invert, lift, underline) use CSS transitions via Tailwind, not Framer Motion — keeps the JS animation budget reserved for entrance/scroll/stagger choreography, matching the "never animate more than opacity+transform together" and performance constraints in Sections 9 and "Performance" of the design spec.

### 6.3 Reduced motion

`components/providers/motion-config-provider.tsx` wraps the app in `<MotionConfig reducedMotion="user">` (Framer Motion's built-in OS-level `prefers-reduced-motion` respect) — satisfies Section 11's accessibility requirement without per-component conditionals.

---

# 7. Content & Data Modeling

Typed content keeps every section's card rendering consistent and makes future edits (new project, new cert) a data change, not a markup change.

```ts
// lib/types.ts (conceptual shapes)
interface ProjectData {
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

interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
  techStack: string[];
  logo?: string;
}

interface SkillCategory {
  category: "Programming" | "AI" | "LLMs" | "Backend" | "Databases" | "Android" | "Cloud" | "DevOps" | "Tools";
  items: string[];
}

interface Certification {
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  verifyUrl?: string;
}

interface ResearchEntry {
  title: string;
  venue: string;
  year: number;
  abstract: string;
  methodology: string;
  results: string;
  paperUrl?: string;
  codeUrl?: string;
}

interface BlogPostFrontmatter {
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string; // computed at build time via lib/utils.ts
}
```

Blog posts live as individual `.mdx` files in `content/blog/`; frontmatter parsed at build time (`gray-matter` or `contentlayer2`) to populate `BlogPostFrontmatter[]` for the grid, with full MDX body rendered only on the `[slug]` page.

---

# 8. SEO, Performance & Accessibility Implementation Notes

- **Metadata:** `generateMetadata` in `app/layout.tsx` (site-wide defaults) and per-route overrides in `blog/[slug]/page.tsx`; `app/opengraph-image.tsx` generates a branded OG card (black/white, wordmark + role) via Next's `ImageResponse` so every shared link gets a consistent monochrome preview.
- **Images:** All imagery (project screenshots, blog covers, phone mockup screens) served through `next/image` with explicit `width`/`height` to prevent CLS; `priority` set only on the Hero visual and above-the-fold nav elements.
- **Fonts:** `next/font/google` (Inter, JetBrains Mono) or `next/font/local` if using Neue Montreal for Display — both eliminate render-blocking font requests and layout shift, directly supporting the "95+ Performance" target.
- **Semantic structure:** Each section component renders as a `<section id="..." aria-labelledby="...-heading">`, with `<SectionHeading>` rendering the actual `<h2 id="...">`, satisfying both SEO heading hierarchy and Section 11's landmark/heading requirements.
- **Focus management:** `MobileMenu`/`Sheet` traps focus while open (Radix default) and returns focus to the trigger on close — required by Section 11.
- **Contact route:** `app/api/contact/route.ts` validates with the same Zod schema used client-side (`lib/validations/contact-schema.ts`, shared import) so server-side validation never silently diverges from the client's inline error states.
- **Lighthouse budget discipline:** No client component is used unless it needs interactivity/state (`"use client"` limited to Navbar, MobileMenu, ContactForm, PhoneMockup, HeroVisual, and any `<Reveal>`-wrapped scroll-triggered element) — every other section (About copy, Certifications grid, Research entries) stays a Server Component to minimize client JS.

---

# 9. Implementation Roadmap (for Cursor)

Structured as sequential milestones; each is a good unit to hand to Cursor as a single focused prompt/session, referencing this document and the design spec.

### Phase 0 — Project Setup
1. `npx create-next-app@latest` (TypeScript, Tailwind, App Router, `src/` off unless preferred).
2. Install and init shadcn/ui (`npx shadcn@latest init`), Framer Motion, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `react-hook-form`, `zod`, `@hookform/resolvers`.
3. Configure `next/font` for Inter, Inter Display (or Neue Montreal), JetBrains Mono in `app/layout.tsx`.
4. Build out `tailwind.config.ts` and `styles/tokens.css` per Section 3 of this plan.
5. Scaffold the full folder structure from Section 2 (empty files with TODO comments) so Cursor has a map before generating content.

### Phase 1 — Design System Foundation
6. Generate and restyle shadcn primitives (`button`, `card`, `input`, `textarea`, `badge`) to match Section 3 of the design spec exactly — this phase alone should be visually checked against the spec before any page content is built.
7. Build `components/shared/*` (SectionHeading, TechTag, AnimatedLink, Reveal, NodeMark, SectionDivider, ExternalLinkIcon).
8. Build `components/layout/section-wrapper.tsx` with the background-alternation + padding-scale logic.
9. Build `lib/animations.ts` with all variants from Section 6.1 of this plan.

### Phase 2 — Layout Shell
10. Build `Navbar` (desktop + scroll-shrink + smart hide/show) and `MobileMenu`.
11. Build `Footer` (inverted).
12. Wire both into `app/layout.tsx`; confirm sticky/scroll behavior and focus trap on mobile menu before moving on.

### Phase 3 — Hero & About
13. Build `HeroVisual` (animated node-graph SVG) as an isolated component first — it's the highest-risk/most custom piece.
14. Build `Hero` composing headline text-reveal, staggered copy, CTAs, scroll indicator.
15. Build `About` with `AboutTimeline`.

### Phase 4 — Experience, Skills
16. Model `content/experience.ts`, `content/skills.ts`.
17. Build `ExperienceTimeline` + `ExperienceCard`.
18. Build `SkillCategoryCard` grid + mobile `Accordion` variant.

### Phase 5 — Projects (highest-effort section)
19. Model `content/projects.ts` (mark one `featured: true`).
20. Build `ProjectCard` (grid variant) and `FeaturedProject` (spotlight variant) as two distinct components sharing the same data shape.
21. Implement image scale-on-hover and the Problem/Solution/Impact column layout.

### Phase 6 — AI Engineering & Android
22. Build `CapabilityCard` grid + `ProcessStrip` diagram for AI Engineering.
23. Build `PhoneMockup` (crossfade logic via `AnimatePresence`) + `CapabilityList` for Android.

### Phase 7 — Research, Blog, Certifications
24. Model `content/research.ts`; build `ResearchEntry` (editorial, divider-based layout).
25. Set up MDX pipeline (`contentlayer2` or `next-mdx-remote`), author 2–3 seed blog posts, build `BlogCard` grid + `[slug]` page with reading-width container.
26. Model `content/certifications.ts`; build compact `CertificationCard` grid.

### Phase 8 — Contact & Forms
27. Build `ContactForm` with React Hook Form + Zod, wired to `app/api/contact/route.ts` (Resend or equivalent), implement loading→success button states.
28. Build `AvailabilityBadge` (pulsing dot) and social links row.

### Phase 9 — Polish Pass
29. Global scroll-reveal audit: confirm every grid/section uses `<Reveal>` consistently, `viewport once` behaves correctly on fast scroll.
30. Accessibility pass: keyboard-only walkthrough of entire page, verify focus rings, `aria-*` attributes, skip-link, form label associations.
31. Reduced-motion pass: toggle OS setting, confirm `MotionConfig` correctly disables non-essential motion.
32. Responsive QA across the five breakpoints defined in Section 8 of the design spec (mobile/tablet/laptop/desktop/ultra-wide), specifically the timeline-line repositioning and phone-mockup scaling behaviors called out as special cases.

### Phase 10 — SEO, OG, Performance, Launch
33. Implement `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, per-route `generateMetadata`.
34. Run Lighthouse; address any Core Web Vitals regressions (most likely candidates: Hero visual JS weight, unoptimized project/blog images).
35. Final content QA against the design spec's copy/tone guidance (Section 7.2's headline structure, Section 7.7's capability descriptions, etc.).
36. Deploy to Vercel, verify OG previews and analytics wiring.

---

# 10. Prompts-for-Cursor Guidance

When handing individual phases to Cursor, each prompt should reference:
1. The relevant **section number of the design spec** (so Cursor has the exact spacing/type/color values, not approximations).
2. The relevant **section number of this implementation plan** (so Cursor uses the intended file location, component name, and animation technique rather than inventing its own).
3. An explicit instruction to **reuse existing tokens/components** (`SectionWrapper`, `SectionHeading`, `Reveal`, the restyled shadcn primitives) rather than writing one-off Tailwind classes per section — this is what keeps the "one system, thirteen sections" discipline from the design spec intact as the codebase grows.

Example prompt shape for Phase 5:
> "Using `lib/types.ts`'s `ProjectData` interface and `content/projects.ts`, build `components/sections/projects/project-card.tsx` and `featured-project.tsx` per Section 7.6 of the design spec and Section 6.2/9 of the implementation plan — reuse `SectionHeading`, `TechTag`, `AnimatedLink`, `Reveal`, and the restyled `Card`/`Button` primitives from `components/ui`. Image hover scale and card lift should use Tailwind transitions per the mapping table in Section 6.2, not Framer Motion."

---

This plan, together with the original design specification, gives Cursor everything needed to scaffold, build, and QA the site phase-by-phase without re-deriving design decisions mid-implementation.
