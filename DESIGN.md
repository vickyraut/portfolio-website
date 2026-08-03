# Vicky Raut — Portfolio Website
## UI/UX Design Specification

**Owner:** Vicky Raut — AI Engineer & Android Developer
**Prepared for:** Design & Development Handoff
**Document type:** Complete visual + interaction specification (no code)

---

# 1. Overall Design Philosophy

The site should feel like a **precision instrument**, not a decorated brochure. Every choice — spacing, type, motion — exists to make Vicky's work legible and credible in the first eight seconds a recruiter or engineer spends on the page.

Three governing principles:

1. **Restraint is the brand.** Because the palette is monochrome and the layout is minimal, every remaining decision (a line, a weight change, a hover) carries more visual weight than it would on a busy page. Nothing is decorative; everything is structural.
2. **Systems over pages.** The site is designed as a component system (type scale, spacing scale, card system, button system) applied consistently across 13 sections, not as 13 individually designed pages. This is what makes it feel "premium" rather than "templated" — the same rules repeat with quiet discipline.
3. **Engineering literacy as an aesthetic.** Monospace accents, grid-aligned layouts, exposed "spec sheet" details (technology tags, metrics, timestamps) signal technical credibility the way a well-commented codebase signals engineering maturity — without ever using literal terminal/hacker visual clichés.

The emotional target: a visitor should feel the same calm confidence they feel opening a well-designed developer tool — clarity, not spectacle.

---

# 2. Visual Identity

**Identity concept:** "Signal, not noise." Vicky works at the intersection of AI systems (probabilistic, generative, fuzzy) and Android engineering (deterministic, structured, precise). The visual identity should express this duality through a single graphic device rather than two competing styles.

**Core graphic motif — "The Node Mark":**
A minimal geometric mark composed of a single circle (or dot) and a thin connecting line/bracket, echoing both a neural-net node and a cursor/terminal caret. Used only as:
- A small mark beside the wordmark "VR" in the nav (never a busy logo)
- A subtle repeating element in section dividers (a single dot, not a pattern)
- Never used as background texture or filler

**Wordmark:** Set the name/initials in the heading font, black on white, no icon dependency — the mark is a supporting element, not a crutch.

**Photography/imagery direction:** If a portrait is used, it should be black-and-white or duotone (black/white/grey only) to preserve the monochrome system. Product screenshots (project images, Android mockups) are the only place color is allowed to appear naturally (i.e., the app's own UI colors), framed inside a strict black-bordered device or browser frame so the site itself stays neutral.

**Voice of the visual system:** confident, quiet, exact. No exclamation marks in headlines, no emoji, no illustrative clipart.

---

# 3. Design System

### 3.1 Buttons

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary | Black #000 | White #FFF | none | Main CTA ("View Resume", "Contact Me") |
| Secondary | White #FFF | Black #000 | 1px #E5E5E5 | Supporting CTA ("View Projects") |
| Ghost/Text link | Transparent | Black #000 | none, underline on hover | Nav items, inline links |

- Height: 48px desktop / 44px mobile (meets touch target minimum)
- Padding: 24px horizontal, 14px vertical
- Border radius: 8px (see 3.11)
- Label type: Body font, 15px, weight 500, letter-spacing 0.01em
- Hover: Primary inverts to white bg/black text with 1px black border; Secondary inverts to black bg/white text. Transition 180ms ease-out.
- Active/pressed: scale(0.98), 100ms.
- Disabled: 40% opacity, no hover response.

### 3.2 Cards

Single card system reused for Projects, Experience, Blog, Certifications with variant padding only.

- Background: #FFFFFF
- Border: 1px solid #E5E5E5
- Radius: 12px
- Padding: 32px (desktop), 24px (mobile)
- Shadow: none at rest; on hover, a single soft shadow `0 8px 24px rgba(0,0,0,0.06)` plus 1px translateY(-4px) lift
- Transition: 220ms cubic-bezier(0.22, 1, 0.36, 1)

### 3.3 Inputs (Contact Form)

- Background: #FFFFFF
- Border: 1px solid #E5E5E5, radius 8px
- Height: 52px (single line), textarea min-height 140px
- Padding: 16px
- Placeholder: #6B7280
- Focus state: border becomes #000000 (1.5px), no glow/box-shadow halo — keep it flat and precise
- Label: small caps, 12px, letter-spacing 0.08em, #6B7280, positioned above field (not floating)
- Error state: border #000 with a small black-text inline message beneath (never red — stay monochrome; use an icon + text, not color, to signal error)

### 3.4 Badges / Tags / Chips

- Used for: technology tags on project cards, blog categories, skill labels
- Background: #F7F7F7
- Text: #000000, 12–13px, weight 500
- Border: 1px solid #E5E5E5
- Radius: 999px (pill) for tech tags; 6px (rounded rect) for category badges — this distinction helps users subconsciously separate "technology" from "content type"
- Padding: 6px 12px
- No hover state on static tags; interactive tag-filters (e.g. blog category filters) invert black/white on hover exactly like buttons

### 3.5 Links (inline text links)

- Default: black text, no underline
- Hover: underline appears (1px, offset 3px), animated left-to-right in 150ms
- Visited state not visually distinguished (portfolio, not a reference doc)

### 3.6 Containers

- Max content width: 1200px
- Wide/immersive sections (Hero, Featured Project spotlight): max 1440px
- Reading-width content (About bio, Blog article preview, Research abstract): max 680px for optimal line length

### 3.7 Dividers

- 1px solid #E5E5E5, full container width, used only between major sections — never inside a card
- Optional "node mark" (single 4px black dot) centered on the divider line at section transitions for subtle brand reinforcement — use sparingly, at most between 3–4 sections total

### 3.8 Shadows

Only two shadow tokens exist in the entire system:
- `shadow-hover`: `0 8px 24px rgba(0,0,0,0.06)`
- `shadow-modal` (mobile menu, lightboxes): `0 16px 48px rgba(0,0,0,0.12)`
No ambient/resting shadows anywhere — flat by default is core to the premium-minimal feel.

### 3.9 Border Radius Scale

- sm: 6px (badges, small chips)
- md: 8px (buttons, inputs)
- lg: 12px (cards)
- full: 999px (pills)

### 3.10 States

- **Rest:** flat, bordered, quiet
- **Hover:** lift + shadow (cards), invert (buttons/tags), underline (links)
- **Focus (keyboard):** 2px solid black outline, 2px offset — always visible, never suppressed
- **Active:** scale 0.98
- **Disabled:** 40% opacity, cursor not-allowed
- **Loading:** replace label with a minimal 3-dot pulse animation in the same monochrome tone — no spinners with color

### 3.11 Iconography (system-level)

- Style: line icons, 1.5px stroke, no fill, 24px default grid (Lucide-style or Phosphor "regular" weight aesthetic)
- Icons are used only for: social links, section markers (small), form field affordances (e.g., send icon in submit button), external-link indicators on project cards
- Icons are never used decoratively next to headings, never used as bullet replacements in body text, and never colored — always current text color (black or #6B7280)

---

# 4. Typography

Four-font system, all sourced from a single technically-credible, geometric-humanist family group so nothing feels mismatched.

| Role | Recommended Font | Fallback stack |
|---|---|---|
| Hero / Display | **Inter Display** (or "Neue Montreal") | -apple-system, Helvetica Neue, sans-serif |
| Headings | **Inter** (weight 600–700) | system-ui, sans-serif |
| Body | **Inter** (weight 400–500) | system-ui, sans-serif |
| Code / technical accents | **JetBrains Mono** or **IBM Plex Mono** | ui-monospace, monospace |

Using one family (Inter) for display/heading/body and a single monospace companion keeps the type system cohesive — variety comes from **scale and weight**, not font-switching.

### 4.1 Type Scale (desktop → mobile)

| Token | Desktop | Tablet | Mobile | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| Display / Hero H1 | 76px | 56px | 40px | 700 | 1.05 | -0.02em |
| H2 (Section title) | 44px | 36px | 28px | 700 | 1.1 | -0.01em |
| H3 (Card/subsection) | 28px | 24px | 20px | 600 | 1.2 | -0.005em |
| H4 (Card title) | 20px | 19px | 18px | 600 | 1.3 | 0 |
| Body Large (intro paragraphs) | 19px | 18px | 16px | 400 | 1.6 | 0 |
| Body (default) | 16px | 16px | 15px | 400 | 1.65 | 0 |
| Small / Meta | 13px | 13px | 12px | 500 | 1.4 | 0.02em |
| Overline / Labels | 12px | 12px | 11px | 600 | 1.2 | 0.12em (uppercase) |
| Code inline | 14px | 14px | 13px | 400 | 1.5 | 0 |

### 4.2 Typographic Rules

- Headlines use **tight letter-spacing** (negative) at large sizes for a premium, engineered feel; body text uses **neutral or slightly positive** spacing for readability.
- Overline labels (e.g. "FEATURED PROJECT", "SELECTED WORK") are always uppercase, small, wide-tracked, and #6B7280 — this is the primary "premium SaaS" signal throughout the site.
- Never justify text. Left-align everything except centered hero copy on mobile.
- Max line length for body paragraphs: 65–75 characters (~680px container).
- Numerals (metrics, dates, stats) always render in the monospace font at 1–2px larger than surrounding text — this small tabular-figure treatment is what makes stats "feel" engineered.

---

# 5. Color System

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | #FFFFFF | Page background |
| `bg-secondary` | #F7F7F7 | Alternating section backgrounds, tag fills |
| `text-primary` | #000000 | Headlines, body, primary content |
| `text-muted` | #6B7280 | Meta text, captions, placeholders, overlines |
| `border` | #E5E5E5 | Card borders, dividers, input borders |
| `invert-bg` | #000000 | Hover-inverted buttons, footer background (optional) |
| `invert-text` | #FFFFFF | Text on inverted surfaces |

**Section background alternation pattern:** Hero (white) → About (#F7F7F7) → Experience (white) → Skills (#F7F7F7) → Projects (white) → AI Engineering (#F7F7F7) → Android (white) → Research (#F7F7F7) → Blog (white) → Certifications (#F7F7F7) → Contact (white) → Footer (black, inverted).

This strict alternation is the *only* visual rhythm device in the entire site — it replaces the need for colored accents to separate sections, and it makes the black footer feel like an intentional "closing" moment rather than an arbitrary color choice.

**On accent color:** No accent color is used. If the developer needs a single functional exception (e.g., a "currently available for work" status dot), use a small black dot with a subtle pulse animation rather than green — status is communicated through motion and text ("Available for select projects"), not hue.

**Contrast validation:** Black on white = 21:1. Muted grey #6B7280 on white = 4.6:1 (passes AA for normal text ≥14px). Muted grey is never used below 14px for essential information.

---

# 6. Grid & Layout

### 6.1 Container & Grid

- Base container: max-width 1200px, centered, horizontal padding 24px (mobile) / 40px (tablet) / 64px (desktop)
- Wide container (Hero, Featured Project): max-width 1440px
- Grid: 12-column grid on desktop/laptop, 8-column on tablet, 4-column on mobile
- Gutter: 24px desktop, 20px tablet, 16px mobile

### 6.2 Spacing Scale (base unit 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

- Component-internal spacing (icon-to-label, badge padding): 8–16px
- Card internal spacing: 24–32px
- Card-to-card gap: 24px (mobile), 32px (tablet), 40px (desktop)
- Section vertical padding: 80px (mobile), 120px (tablet), 160px (desktop) — generous vertical rhythm is what reads as "premium"
- Section title to content gap: 48–64px

### 6.3 Section-level Column Behavior

| Section | Desktop columns | Tablet | Mobile |
|---|---|---|---|
| Hero | Single column, centered or left-aligned with visual on right (60/40 split) | Stacks to single column | Single column, centered |
| About | 2-column (statement left 40% / bio+timeline right 60%) | Stacks | Stacks |
| Experience | Single column timeline, cards offset right of a vertical line | Same, tighter | Single column, line moves to left edge |
| Skills | 3–4 category columns in a grid | 2 columns | 1 column, accordion-style groups |
| Projects | 2-column card grid, featured project full-width | 1–2 columns | 1 column |
| AI Engineering | 4-column capability grid | 2 columns | 1 column |
| Android | 2-column (phone mockup left, content right) | Stacks, mockup first | Stacks |
| Research | Single column, wide reading layout | Same | Same |
| Blog | 3-column card grid | 2 columns | 1 column |
| Certifications | 3–4 column compact grid | 2 columns | 1 column |
| Contact | 2-column (info left, form right) | Stacks | Stacks, form first |

### 6.4 Ultra-wide Behavior (≥1920px)

Content containers stay capped at 1200/1440px and remain centered — never stretch content edge-to-edge. On ultra-wide screens, increase the outer whitespace and allow the "node mark" motif to appear once, subtly, in the empty margins of the Hero as a single small graphic — not a repeating pattern.

---

# 7. Section-by-Section Design

## 7.1 Navigation

- **Layout:** Logo/wordmark left ("VR" + node mark), center or right-aligned menu (Home, About, Experience, Projects, Blog, Contact), Resume button far right.
- **Height:** 80px, reduces to 64px once scrolled (sticky, shrinks on scroll with 200ms transition).
- **Sticky behavior:** Fixed to top; background transitions from transparent (at hero top, if hero is white this can stay white with just a bottom border appearing on scroll) to solid white with a 1px bottom border once scrolled past 40px.
- **Menu item style:** Body font, 15px, weight 500, 32px horizontal spacing between items; hover underline animation (see 3.5).
- **Resume Button:** Secondary button style (bordered), opens PDF in new tab or triggers download.
- **Mobile menu:** Hamburger icon (two lines, no circle) top right; tapping expands a full-screen white overlay with large (32px) stacked menu items, fade+slight-slide-up entrance (250ms), close (X) icon replaces hamburger.
- **Scroll behavior:** Nav auto-hides on scroll-down past hero, reappears on scroll-up (common "smart nav" pattern) — reduces visual noise while reading, restores wayfinding when needed.

## 7.2 Hero

The most important 100vh (desktop) / auto-height-with-min-90vh (mobile) of the site.

- **Structure (desktop):** Left-aligned text block occupying ~60% width, right side reserved for a minimal visual (see below); text vertically centered in viewport minus nav height.
- **Overline:** small uppercase label — "AI ENGINEER · ANDROID DEVELOPER" — sets role immediately, in muted grey, monospace, letter-spaced.
- **Headline (H1/Display):** A confident, specific statement rather than a generic "Hi, I'm Vicky" — e.g., structured as: **"Building intelligent systems, from LLM agents to Android apps."** (copy to be finalized with Vicky, but structure = capability statement, not identity statement).
- **Subheading (Body Large, muted):** 1–2 sentences expanding on the specific stack: agentic AI, RAG, LLM tooling, and native Android engineering — max 2 lines.
- **Primary CTA:** "View Projects" (Primary button, black).
- **Secondary CTA:** "Download Resume" or "Get in Touch" (Secondary/Ghost button beside it).
- **Visual concept (right 40%):** No stock illustration. Recommended: an abstract, animated node-graph (a handful of connected dots/lines suggesting a neural network / agent graph) rendered in pure black-on-white line art, very slow ambient motion (nodes drift ~2–4px over 8–10s loops). This directly visualizes "Agentic AI" without literal robot/brain clichés. Alternative: a live, minimal terminal-style typing animation showing a snippet like a tool-call trace, styled in monospace, framed in a thin-bordered card — ties Android/engineering precision into the hero without being a full code block.
- **Background:** Pure white, no gradient, no texture. Optionally a very faint (2–3% opacity) grid-dot pattern across the whole hero background for subtle technical texture — must be barely perceptible, not decorative.
- **Scroll indicator:** small centered chevron or vertical line with a dot that "breathes" (fades 0.4→1→0.4 opacity, 2s loop), positioned bottom-center of hero, disappears on first scroll.
- **Entrance animation:** Overline fades in first (0ms), headline slides up 16px + fades in (staggered 80ms after), subheading follows (staggered 80ms), CTAs follow (staggered 80ms), visual fades in last, slightly delayed and slower (400ms duration) to feel considered rather than simultaneous.

## 7.3 About

- **Structure:** Two-column. Left column (40%): a large, short personal statement (H3-scale, 1–2 sentences, e.g. framing how Vicky thinks about engineering). Right column (60%): short biography paragraph (Body Large, 3–4 sentences) followed by a compact vertical timeline of 3–5 milestones (education, first role, key pivot into AI, etc.) and a 1-line "philosophy" statement set apart in monospace as if it were a code comment (e.g. `// I build systems that reason, not just respond.`) — this is the one tasteful place a monospace "comment" motif earns its keep.
- **Timeline style:** Thin vertical 1px line, small filled black dot per milestone, year in monospace to the left of the dot, milestone title + one-line description to the right. Generous 32px vertical gap between entries.
- **Visual hierarchy:** Statement > biography > timeline > philosophy line, established purely through size and weight, not color.

## 7.4 Experience

- **Timeline structure:** Vertical line running down the left (mobile) or center-left (desktop) of the section; each role is a card offset to the right of the line, connected by a short horizontal connector to a dot on the line.
- **Card contents:** Company name (H4) + role title (Body, muted) on one line; date range (monospace, muted, right-aligned on desktop); 2–4 bullet achievement points (Body, with a small dash "–" not a bullet glyph, for a cleaner technical look); tech-tag chips at the bottom of the card (reuses badge system).
- **Icons:** A single minimal building/company-mark placeholder (line icon) only if no logo is available; prefer actual company logotypes rendered small and grayscale if available, to keep monochrome consistency.
- **Hover interaction:** Card lifts (per 3.2), connecting dot on the timeline scales up slightly (1 → 1.3) and briefly turns solid black if it wasn't already, reinforcing the card-to-timeline relationship.
- **Spacing:** 64px between role cards vertically.

## 7.5 Skills

No progress bars — instead, **grouped capability cards**.

- **Layout:** Grid of category cards — Programming, AI/LLMs, Backend, Databases, Android, Cloud, DevOps, Tools — each its own bordered card (per 3.2) containing: category label (Overline style) + icon-free list of technology chips (badge system, pill style) wrapped naturally within the card.
- **Grouping rationale:** Combine "AI" and "LLMs" into one card if content is light, to avoid too many thin cards; keep "Android" as its own card given it's a headline specialty.
- **Interaction:** On hover, individual tech chips within a card invert briefly (black bg/white text) — a small, satisfying "these are real, distinct tools" micro-moment, not the whole card.
- **No proficiency indication at all** — no dots, no bars, no percentages. Recruiters read presence-in-list as competence; forcing a numeric self-rating reads as either falsely precise or insecure. This is a deliberate premium-portfolio convention (mirrors how Linear/Vercel team pages list stacks).

## 7.6 Featured Projects

The strongest section — given the most layout variation budget.

- **Featured project (top, full-width):** One project gets a full-width spotlight card: large project screenshot/mockup (framed in a thin black browser/device frame) on top or left, with Problem / Solution / Impact laid out as three short labeled columns beneath (or beside, if space allows) using Overline labels ("PROBLEM", "SOLUTION", "IMPACT") followed by 1–2 sentence descriptions. Tech chips row beneath. GitHub + Live Demo buttons (Secondary + Primary) bottom-right.
- **Remaining projects (2-column grid below):** Standard project cards: image on top (16:9, black border frame), title (H4), one-line description, tech chips, and two small icon+text links (GitHub, Live Demo) at the card bottom, separated by the card's bottom padding, not a divider line.
- **Card hover:** Image scales very slightly (1.0 → 1.03, 300ms) inside its frame (clipped, no overflow), card lifts per 3.2, and a small arrow icon beside "View Project" (if the whole card is a link) shifts 4px right.
- **Layout variation rule:** Featured project = full-width horizontal; all others = grid cards. Never more than one full-width spotlight at a time, to preserve hierarchy.

## 7.7 AI Engineering

A capability showcase, not a logo wall.

- **Layout:** 4-column grid (2-column tablet, 1-column mobile) of capability cards: Agentic AI, LLMs & RAG, Prompt Engineering, Multi-Agent Systems, Tool Calling, Model Evaluation, AI Automation — pick 6–8 of these as individual cards.
- **Card contents:** Small line icon (abstract — e.g., a node-cluster icon, not a brand logo) + capability title (H4) + 2-sentence explanation of what Vicky specifically does in that area (framed as capability, e.g., "Designing multi-step agent workflows that call external tools and reason over intermediate results," not just the buzzword alone).
- **Optional supporting element:** one horizontal "process strip" beneath the grid showing a simplified left-to-right flow (Prompt → Reasoning/Tool Call → Retrieval → Response) as a thin-line diagram with 4 small labeled nodes — visually reinforces "Agentic AI" literacy without a screenshot.
- **Tone:** entirely text+icon based, no product logos (OpenAI/Anthropic/etc.) to keep it about Vicky's capability, not vendor affiliation.

## 7.8 Android Development

- **Layout:** Two-column — left: a phone mockup (single, centered, black-bordered device frame with rounded corners echoing an actual phone, displaying a screenshot or subtle animated UI demo of Vicky's app); right: capability list (Architecture & MVVM, Clean Architecture, Jetpack Compose, Firebase Integration, Performance Optimization, Motion & Animation) presented as a vertical list of short labeled rows (icon + label + one-line description), similar density to the Skills cards but narrower.
- **Phone mockup detail:** Use a generic, modern device outline (no branded logo), with a subtle drop shadow (shadow-modal token) to lift it off the white background since this is the one place a slightly more tactile presentation earns its place (physical product context).
- **Micro-animation:** the phone mockup's screen content can gently auto-scroll or cross-fade between 2–3 screenshots every 4–5 seconds, framed exactly like an App Store preview — subtle, slow, no jarring cuts (crossfade 600ms).
- **Mobile behavior:** phone mockup stacks on top, scaled down to ~70% width, centered; capability list follows beneath in single column.

## 7.9 Research

- **Layout:** Single-column, generous reading width (680px), for a more editorial, credible tone.
- **Structure per entry:** Paper title (H3) → venue/conference + year (Overline, monospace) → abstract (Body, 3–5 lines, with a "Read more" text-link expansion if long) → Methodology and Results as two side-by-side labeled mini-columns (or stacked on mobile) using the same Overline-label pattern as Projects → link row (Paper PDF, DOI, GitHub if code released) using icon+text links.
- **Visual treatment:** Very restrained — this section should feel closer to a journal listing than a marketing card; use a top divider line before each entry rather than a full bordered card, to keep the tone academic and understated.

## 7.10 Technical Blogs

- **Layout:** 3-column card grid (2-column tablet, 1-column mobile), reusing the base card system with a cover image slot.
- **Card contents:** Cover image (16:9, subtle grayscale-on-hover-removed treatment — i.e., image can be in muted color at rest and shift to full color on hover, a nice small signal of interactivity within the monochrome system) → category badge (rounded-rect style, top-left overlay on image or just above title) → title (H4, max 2 lines, ellipsis overflow) → meta row: reading time + date (Small/Meta style, monospace for numbers) → tag chips row (small, max 2–3 shown).
- **Hover interaction:** Cover image shifts from 90%-desaturated to full color (400ms) + card lifts — this is the single deliberate "color" moment in the entire site, used precisely because blog cover images are the one place full-color imagery already lives naturally (e.g. diagrams, screenshots).
- **Grid overflow:** "View all articles" ghost button/link centered beneath the grid if more posts exist than the initial grid shows (paginate or link to a full blog index).

## 7.11 Certifications

- **Layout:** Compact 3–4 column grid of small cards, tighter padding (20px) than standard cards since content density is lower.
- **Card contents:** Issuing organization logo (small, grayscale, 32px height max) → certification title (Body, weight 600) → issue date + optional expiry (Small/Meta, monospace) → optional "Verify" text-link if a public credential URL exists.
- **No badges/graphics beyond the issuer's own logo** — resist the urge to add colorful certificate icons; the issuer logo itself provides enough visual variety.

## 7.12 Contact

- **Layout:** Two-column — left: large heading ("Let's build something," or similar, H2/Display-adjacent scale) + short availability statement (Body Large, e.g. "Currently open to select AI engineering and Android roles.") + social links row (GitHub, LinkedIn, X/Twitter, Email) as icon+label ghost links; right: the contact form (Name, Email, Message fields per 3.3, Primary submit button "Send Message" with a small send-icon).
- **Availability indicator:** small black pulsing dot + text label ("Available for new projects") near the top of the left column — the one place motion communicates status, as established in Section 5.
- **Form submission feedback:** On submit, button label transitions to a 3-dot loading state (per 3.10), then to a checkmark + "Message sent" confirmation state inline (no modal, no page redirect), reverting after 4 seconds or on next interaction.
- **Mobile order:** Form appears first (primary action), heading/availability/social links follow beneath — mobile users scanning by thumb should reach the actionable form fastest.

## 7.13 Footer

- **Background:** Inverted — solid black (#000000), white text — the one deliberate color inversion in the whole site, functioning as a clear "you've reached the end" signal.
- **Layout:** Single row (desktop) — left: small wordmark/node mark (white version) + copyright line; right: secondary nav links (same as main nav, small text) + social icons (white line icons).
- **Mobile:** Stacks to centered single column, generous 64px vertical padding.
- **Tone:** No CTA repetition here — footer is for wayfinding and closure, not another sales pitch.

---

# 8. Responsive Strategy

**Breakpoints:**
- Mobile: 0–639px
- Tablet: 640–1023px
- Laptop: 1024–1439px
- Desktop: 1440–1919px
- Ultra-wide: 1920px+

**General adaptation rules:**
1. **Type scales down, never truncates meaning** — headline sizes reduce per the scale in Section 4.1, but headline *copy* stays the same across breakpoints (no shortened mobile-only headlines) to keep messaging consistent.
2. **Multi-column layouts collapse to single column at tablet or mobile** per the table in 6.3 — always outermost-in (rightmost/secondary column moves below primary column, never side-by-side-squeezed).
3. **Section vertical padding compresses** but never disappears — minimum 64px top/bottom padding even on smallest mobile viewports, preserving the "whitespace as design element" principle at every size.
4. **Timelines (Experience, About) shift their vertical line to the left edge on mobile** rather than staying centered, since centered timelines break down under 380–420px content width.
5. **All hover-only interactions have a tap/focus equivalent on touch devices** — e.g., project card image color/scale states trigger on tap-and-hold or simply appear static (full color) by default on touch devices, since hover doesn't exist there. Detect via `(hover: hover)` media feature rather than screen width.
6. **Ultra-wide screens never stretch content** — containers cap at defined max-widths and center; excess space becomes margin, occasionally hosting the node-mark motif as noted in 6.4.
7. **Phone mockup (Android section) and terminal/graph visual (Hero) both scale down proportionally and re-center rather than cropping**, preserving their role as focal visual anchors at every size.

---

# 9. Animation Guidelines

All animation in this system exists to **clarify hierarchy and confirm interactivity** — never to entertain. Standard easing: `cubic-bezier(0.22, 1, 0.36, 1)` (a confident "ease-out-quint" feel) for entrances; `ease-out` (180–220ms) for hover/state changes.

| Animation | Where | Timing/Easing | Trigger |
|---|---|---|---|
| Fade + slide-up (16px) | Hero copy stagger, section headings on scroll-into-view | 500ms, ease-out-quint | On load (hero) / on scroll-into-view (sections), once only |
| Text reveal (line-by-line mask) | Hero headline only | 600ms, staggered 60ms per line | On load |
| Hover lift | All cards | 220ms | Mouse hover / focus |
| Scale (image zoom) | Project card images, blog cover images | 300–400ms | Hover |
| Underline animation | Inline links, nav items | 150ms, left-to-right | Hover |
| Color desaturate→full-color | Blog cover images only | 400ms | Hover |
| Invert (bg/text swap) | Buttons, filter chips | 180ms | Hover/active |
| Breathing opacity | Scroll indicator, availability status dot | 2s loop, ease-in-out | Idle/ambient |
| Crossfade | Android section phone mockup screens | 600ms | Auto, every 4–5s |
| Page transition | Route changes (if multi-page) | 250ms fade | Navigation |
| Loading state | Form submit button | dots pulse, 400ms per dot cycle | On submit |
| Scroll-into-view stagger | Grid items (projects, skills, blog) | 400ms per item, staggered 60–80ms, only first time in viewport | Scroll |

**Rules to prevent overuse:**
- No animation triggers more than once per element per session (no re-triggering fade-ins on scroll up/down repeatedly) — use `viewport once` logic.
- Never animate more than one property group at once beyond opacity+transform pairs (e.g., never combine scale + rotate + color simultaneously).
- Respect `prefers-reduced-motion`: disable all non-essential motion (keep only opacity fades at reduced duration) when the user's OS setting requests it.

---

# 10. Micro Interactions

| Element | Interaction |
|---|---|
| Buttons | Invert colors on hover (180ms), scale(0.98) on press, 2px black focus ring on keyboard focus |
| Cards (project/blog/experience) | Lift + shadow on hover; entire card is clickable (not just the title) with cursor:pointer; internal links (GitHub/Demo icons) stop event propagation so they remain independently clickable |
| Navigation items | Underline sweeps in on hover; active/current section subtly bolded (weight 500→600) via scroll-spy |
| Links (inline) | Underline animates in on hover; external links show a small 12px arrow-out icon inline after the text |
| Forms | Field border darkens on focus; label stays static (no floating-label jump, which can feel gimmicky); inline validation appears beneath field only after blur, not while typing |
| Project cards | Image scale + arrow-shift on "View Project" affordance |
| Icons (social/nav) | Icons alone never animate color — they inherit text link hover/underline behavior when paired with a label; icon-only buttons (e.g. footer social icons) get a simple 4px upward nudge on hover |
| Cursor behavior | Default cursor throughout — no custom cursor replacement (custom cursors read as "flashy," contradicting the brief); only exception is `cursor: pointer` on all interactive elements and `cursor: text` on form fields |

---

# 11. Accessibility

- **Contrast:** Black-on-white body text = 21:1 (far exceeds AAA). Muted grey (#6B7280) restricted to ≥14px text and non-essential meta content only, measured at 4.6:1 (passes AA). Never place muted grey text on the #F7F7F7 secondary background for body copy — verify contrast per background (still passes, ~4.3:1, but treat as the floor, not headroom).
- **Keyboard navigation:** All interactive elements (nav links, buttons, cards, form fields, filter chips) reachable via Tab in logical DOM order matching visual order; skip-to-content link provided as the first focusable element (visually hidden until focused).
- **Focus states:** 2px solid black outline with 2px offset on every focusable element, never removed via `outline: none` without a custom replacement of equal visibility.
- **Touch targets:** Minimum 44×44px for all buttons/icon-buttons on mobile, even where visual size is smaller (use padding to expand hit area, e.g., small footer social icons get invisible padding to reach 44px).
- **ARIA considerations:** Landmark roles for nav/main/footer; `aria-current="page"` on active nav item; accordion-style mobile skill groups get `aria-expanded`; form fields have explicit `<label>` associations (not placeholder-only labeling); decorative elements (node-mark graphics, background dot-grid) marked `aria-hidden="true"`.
- **Readable typography:** Body text never below 15px on mobile / 16px desktop for primary reading content; line-height minimum 1.5 for body copy; line length capped at ~75 characters.
- **Color usage:** Since the entire palette is near-monochrome, no information is ever conveyed by color alone (e.g., form errors use icon + text, not red; availability status uses text + a shape, not a green dot) — this also means the site is inherently friendly to color-vision-deficient users by design.
- **Motion sensitivity:** All scroll/entrance animations respect `prefers-reduced-motion: reduce`.

---

# 12. User Experience Rationale

- **Why monochrome:** For an AI + Android engineer, color easily tips into looking like a generic dev-portfolio template (badges everywhere, gradient hero blobs). Removing color entirely forces every remaining decision — spacing, type, motion — to carry meaning, which is exactly the craftsmanship signal recruiters and senior engineers respond to (this mirrors why tools like Linear and Raycast read as "serious").
- **Why no progress-bar skills:** Numeric self-ratings ("React 90%") are a well-known portfolio anti-pattern — they invite skepticism ("says who?") rather than trust. Grouped capability lists let the breadth and organization of the stack speak for itself.
- **Why the Featured Project gets a unique full-width layout:** Recruiters and hiring engineers scan; a single visually distinct "best work" moment gives them permission to stop scanning and read, which a uniform grid of equal-weight cards doesn't achieve.
- **Why AI Engineering and Android Development are separate dedicated sections (not folded into Skills or Projects):** Vicky's positioning is explicitly dual-specialty. Two dedicated sections let each specialty get its own narrative and visual treatment (capability grid vs. phone mockup) rather than compressing both into generic tech-tag lists, which would flatten the differentiation that makes the profile interesting.
- **Why the one color moment lives in the Blog cover images:** Introducing exactly one deliberate break from monochrome (desaturated → full-color on hover) gives the system a satisfying "reward" moment without diluting the premium restraint everywhere else — and it's contextually justified since blog covers/diagrams naturally contain color already.
- **Why the footer inverts to black:** A hard visual break signals "you've reached the end of the content" without needing a literal "Thank you for scrolling" message — the inversion itself is the closing cue.

---

# 13. Final Design Summary

A 13-section, single-page-feeling portfolio built on:
- **One color pair** (black/white) plus two greys, used with absolute discipline
- **One type family** (Inter) plus one monospace companion, varied only by size/weight
- **One card system, one button system, one badge system**, reused everywhere with only padding/density changing per context
- **One layout rhythm**: alternating white/#F7F7F7 sections, 12-column grid, generous 4px-based spacing scale
- **One motion language**: fade/slide/lift/invert, quintic ease-out, no motion for motion's sake
- **Exactly one deliberate color break** (blog cover hover) and **one deliberate inversion** (footer) as the system's only two "surprises"

The result should read, to a recruiter scrolling on a phone at 11pm or a senior engineer reviewing on a 27" monitor, as a site built with the same rigor Vicky brings to production AI systems and Android apps: intentional, tested at every size, and free of anything that doesn't earn its place.
