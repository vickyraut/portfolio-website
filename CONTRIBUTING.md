# Contributing

This is a personal portfolio, so "contributing" mostly means **future-me (or a collaborator) working on this codebase without redoing design decisions that are already made.** Read this before opening a PR or handing a task to Cursor.

---

## Ground Rules

1. **The design spec and implementation plan are the source of truth.** Before building anything new, check `docs/design-spec.md` (visual/UX decisions) and `docs/implementation-plan.md` (technical/architecture decisions). If a decision isn't covered by either, raise it explicitly rather than improvising silently.
2. **Reuse the system — don't extend it casually.** New colors, font sizes, spacing values, shadows, or easing curves should not be introduced ad hoc. If something genuinely doesn't fit the existing tokens, that's a design-spec conversation first, a code change second.
3. **One card system, one button system, one badge system.** Every new section should compose existing primitives (`components/ui/*`, `components/shared/*`) rather than writing bespoke markup that happens to look similar.

---

## Before You Start

- Pull latest `main` and run `npm install` to pick up any dependency changes.
- Skim the relevant section of `docs/implementation-plan.md` (§4 component inventory, §6 animation mapping, §9 roadmap) so new work lands in the right folder with the right naming.

---

## Branching & Commits

- Branch naming: `feature/<short-description>`, `fix/<short-description>`, `content/<short-description>` (for content-only changes like new blog posts or projects).
- Commits: small, scoped, imperative mood — e.g. `add featured project spotlight layout`, not `updates`.
- Rebase on `main` before opening a PR; keep history readable.

---

## Code Conventions

### General
- TypeScript strict mode — no `any` without a comment explaining why.
- Prefer **Server Components** by default. Only add `"use client"` when the component genuinely needs interactivity or browser APIs (see `docs/implementation-plan.md` §8 for the current client-component list — Navbar, MobileMenu, ContactForm, PhoneMockup, HeroVisual, `Reveal`-wrapped elements).
- Use the `cn()` helper (`lib/utils.ts`) for conditional Tailwind classes instead of manual string concatenation.

### Styling
- Use Tailwind utility classes mapped to design tokens (`bg-background-secondary`, `text-muted`, `rounded-lg`, `shadow-hover`) — never raw hex codes or arbitrary px values that duplicate an existing token.
- Hover/press states that are purely visual (color invert, lift, underline, image scale) → **CSS transitions via Tailwind**, not Framer Motion.
- Entrance, scroll-triggered, and choreographed animations (stagger, text reveal, crossfade) → **Framer Motion**, using shared variants from `lib/animations.ts` rather than inline one-off variant objects.

### Components
- New section components live in `components/sections/<section-name>/`, following the existing folder pattern (see `docs/implementation-plan.md` §2).
- Cross-section reusable pieces go in `components/shared/`; don't duplicate a `SectionHeading`-style pattern locally inside a section folder.
- Every section wraps its content in `<SectionWrapper>` for consistent vertical padding and background alternation — don't hardcode `py-*` on a section root.

### Content
- Structured content (projects, experience, skills, certifications, research) is added via the typed files in `content/*.ts`, matching the interfaces in `lib/types.ts` — not hardcoded into JSX.
- Blog posts are `.mdx` files in `content/blog/` with the frontmatter shape defined in `lib/types.ts` (`BlogPostFrontmatter`).
- Adding a new project/cert/blog post should never require touching component code — if it does, the data model is missing a field; fix the model, not the component.

---

## Accessibility Checklist (required before merging UI changes)

- [ ] All interactive elements reachable and operable via keyboard, in logical order
- [ ] Visible focus states preserved (never `outline: none` without an equal-or-better replacement)
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] No information conveyed by color alone
- [ ] Images have meaningful `alt` text (or `alt=""` if purely decorative, plus `aria-hidden` where appropriate)
- [ ] New animations respect `prefers-reduced-motion` (verify they're wrapped by the app's `MotionConfig` provider, or handle it explicitly)

---

## Performance Checklist (required before merging UI changes)

- [ ] New images go through `next/image` with explicit dimensions
- [ ] No unnecessary `"use client"` — check if the component could stay a Server Component
- [ ] No new animation library or heavy dependency added without checking bundle impact
- [ ] Run `npm run build` locally and confirm no new console warnings/errors

---

## Pull Requests

- Keep PRs scoped to one section/feature/fix — matches the phased roadmap in `docs/implementation-plan.md` §9, and makes visual review against the design spec tractable.
- Include a screenshot or short screen recording for any visual/animation change, ideally at mobile and desktop widths.
- Reference the relevant design-spec section number in the PR description (e.g. "Implements §7.6 Featured Projects") so reviewers can check against source intent, not memory.

---

## Working with Cursor

When delegating a task to Cursor, point it at:
1. The specific section of `docs/design-spec.md` for visual/behavioral intent.
2. The specific section of `docs/implementation-plan.md` for file location, component naming, and animation technique.
3. Existing components to reuse (`SectionWrapper`, `SectionHeading`, `Reveal`, restyled `Button`/`Card`/`Badge`) rather than letting it invent new ones.

See `docs/implementation-plan.md` §10 for an example prompt shape.

---

## Questions / Unclear Decisions

If a design or architecture question comes up that isn't answered by the two docs, resolve it there first (update the spec/plan) rather than settling it silently inside a component — keeps both documents trustworthy as the project grows.
