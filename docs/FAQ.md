# FAQ.md — Technical Frequently Asked Questions (30 Q&As)

This document answers 30 common architectural, design, performance, and customization questions regarding this repository.

---

## 🏛️ Architecture & Framework

#### Q1: Why Next.js 16 App Router instead of Pages Router?
Next.js 16 App Router provides native React 19 Server Components, automated static page generation, Turbopack builds, and unified metadata route handlers (`sitemap.ts`, `robots.ts`, `icon.tsx`).

#### Q2: Is Server-Side Rendering (SSR) required for this portfolio?
No. All 7 application routes are 100% statically prerendered (SSG) at build time, yielding sub-50ms static CDN responses and zero server cold-starts.

#### Q3: How is state managed across sections?
Global state is intentionally avoided. UI interactions (e.g. mobile drawer overlay, experience card hover, contact form inputs) use local React component state or custom hooks (`useScrollDirection`, `useSyncExternalStore`).

#### Q4: Why Tailwind CSS v4 instead of v3?
Tailwind v4 provides high-performance CSS compilation using `@tailwindcss/postcss` and native `@theme inline` variables without needing complex `tailwind.config.js` setups.

#### Q5: Why Framer Motion instead of CSS keyframe animations?
Framer Motion enables scroll-triggered viewport detection (`whileInView`), physics-based spring easing (`EASE_OUT_QUINT`), layout transitions, and crossfading DOM nodes via `AnimatePresence`.

---

## 🎨 Design & Styling

#### Q6: Why a strict monochrome design system?
Monochrome design forces content and architectural clarity to take center stage, eliminating visual noise and presenting a clean, modern aesthetic reminiscent of high-end software docs (Vercel, Stripe).

#### Q7: Are there any colored visual elements?
Only two deliberate exceptions exist: the green availability pulse dot (`bg-emerald-500`) in the Contact section and the technical blog thumbnail images on hover.

#### Q8: How is spatial scale managed?
All vertical section padding follows a 4px grid scale using extensions: mobile `py-20` (80px), tablet `py-30` (120px), and desktop `py-40` (160px).

#### Q9: What fonts are used?
**Inter** for UI headings and body copy (`--font-inter`) and **JetBrains Mono** for technical overlines, code blocks, metadata, and dates (`--font-jetbrains-mono`).

#### Q10: How is responsive layout handled?
Tailwind breakpoint utilities (`sm:`, `md:`, `lg:`, `xl:`) drive multi-column layout shifts cleanly.

---

## 🤖 AI & Android Sections

#### Q11: Why are there no progress bars for skills?
Progress percentages (e.g. "85% Python") are arbitrary and non-verifiable. Grouped capability cards show technological scope cleanly without fake numbers.

#### Q12: What is the 4-step process strip in AI Engineering?
A horizontal flow diagram detailing `PROMPT` → `REASONING & TOOL CALL` → `RETRIEVAL` → `RESPONSE` to visually demonstrate multi-agent pipeline literacy.

#### Q13: How does the PhoneMockup component work?
It renders a modern smartphone frame with notch and status bar, automatically crossfading between 3 styled app UI screens via Framer Motion `AnimatePresence` every 4.5 seconds.

---

## 🔍 SEO & Performance

#### Q14: How is JSON-LD implemented?
The `<JsonLd />` component renders `<script type="application/ld+json">` schemas for `Person`, `WebSite`, and `ItemList` (`SoftwareApplication`).

#### Q15: How are dynamic favicons generated?
`app/icon.tsx` uses `@vercel/og` ImageResponse to generate a static 32x32 PNG icon at build time.

#### Q16: How is sitemap.xml generated?
`app/sitemap.ts` exports dynamic `MetadataRoute.Sitemap` entries including root URLs, projects, and blog articles.

#### Q17: How is robots.txt generated?
`app/robots.ts` exports `MetadataRoute.Robots` defining search engine crawler rules and sitemap location.

#### Q18: What is the target Lighthouse score?
100/100 across Performance, Accessibility, Best Practices, and SEO.

---

## 🛠️ Customization & Deployment

#### Q19: Where is bio data stored?
Strictly inside `content/about.ts`, `content/experience.ts`, `content/projects.ts`, `content/skills.ts`, `content/ai.ts`, `content/android.ts`, `content/research.ts`, `content/blogs.ts`, `content/certifications.ts`, and `lib/constants.ts`.

#### Q20: Can I deploy this to Vercel?
Yes. Connect your repository to Vercel and it will auto-detect Next.js and deploy in under 2 minutes.

#### Q21: Can I deploy this to Netlify or GitHub Pages?
Yes. Run `npm run build` to generate static output for any host.

#### Q22: How do I change the resume PDF?
Replace the file at `public/resume/vicky-raut-resume.pdf`.

#### Q23: How do I update social links?
Edit `socialLinks` in `lib/constants.ts`.

#### Q24: How do I add new projects?
Add entries to `projects` array in `content/projects.ts`.

#### Q25: How do I handle contact form submissions?
The contact form has client-side validation built in. Connect `handleSubmit` in `components/sections/contact/contact-form.tsx` to Formspree or Resend API.

---

## ⚡ Quality & Code Standards

#### Q26: Are there any TypeScript `any` types in the codebase?
Zero `any` types. Strict typing is enforced across all components and data structures.

#### Q27: How are icons imported?
Icons use Lucide React line icons or custom SVG components ([components/shared/github-icon.tsx](file:///x:/portfolio-website/components/shared/github-icon.tsx), [components/shared/linkedin-icon.tsx](file:///x:/portfolio-website/components/shared/linkedin-icon.tsx)).

#### Q28: How is dark mode configured?
Dark mode is the default and only theme in this design system.

#### Q29: Is this repository open-source?
Yes, under the MIT License.

#### Q30: How do I contribute?
Read [CONTRIBUTING.md](file:///x:/portfolio-website/CONTRIBUTING.md) and open a pull request!
