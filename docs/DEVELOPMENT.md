# DEVELOPMENT.md — Developer Workflow & Coding Standards

This document serves as the implementation manual for engineers building upon or extending this codebase.

---

## 🛠️ 1. Developer Setup

### Clone & Install
```bash
git clone https://github.com/vickyraut/portfolio-website.git
cd portfolio-website
npm install
```

### Dev Scripts
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Run Next.js production build & type check
npm run lint     # Run ESLint validation
```

---

## ➕ 2. How to Add a New Section

To add a new section (e.g. `Testimonials`):

1. **Define Content Type (`lib/types.ts`):**
   ```typescript
   export interface TestimonialEntry {
     id: string;
     quote: string;
     author: string;
     role: string;
   }
   ```

2. **Create Content & Data File (`content/testimonials.ts` & `data/testimonials.ts`):**
   ```typescript
   import type { TestimonialEntry } from "@/lib/types";

   export const testimonials: TestimonialEntry[] = [
     { id: "1", quote: "Vicky is an exceptional AI engineer.", author: "Jane Doe", role: "CTO" }
   ];
   ```

3. **Build Modular Section Component (`components/sections/testimonials/testimonials.tsx`):**
   ```tsx
   "use client";

   import React from "react";
   import { SectionWrapper } from "@/components/layout/section-wrapper";
   import { SectionHeading } from "@/components/shared/section-heading";
   import { Reveal } from "@/components/shared/reveal";
   import { fadeUp } from "@/lib/animations";

   export const Testimonials: React.FC = () => {
     return (
       <SectionWrapper id="testimonials" ariaLabelledby="testimonials-heading" bg="primary">
         <Reveal variants={fadeUp}>
           <SectionHeading id="testimonials-heading" overline="FEEDBACK" title="Testimonials" />
         </Reveal>
       </SectionWrapper>
     );
   };
   ```

4. **Export in Barrel (`components/sections/testimonials/index.ts`) & Mount in `app/page.tsx`.**

---

## 🧪 3. Quality Control Checklist

Before opening a pull request, run:

```bash
# 1. Type Check & Production Build
npm run build

# 2. Linter Quality Audit
npm run lint
```
