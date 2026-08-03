# ASSETS.md — Asset Specifications, Vector Icons & Media Guidelines

This document details image specs, icon standards, favicons, OpenGraph previews, and file placement rules across the codebase.

---

## 🖼️ 1. Directory Structure for Assets

```
public/
├── favicon.ico
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
├── window.svg
├── og-image.png                 # 1200x630 OpenGraph & Twitter preview image
├── images/
│   ├── blog/                    # Article cover image thumbnails (16:9 ratio)
│   │   ├── agent-architecture.png
│   │   ├── compose-performance.png
│   │   └── hybrid-search.png
│   └── projects/                # Featured project screenshots & diagrams (16:9 ratio)
│       ├── agentmesh.png
│       ├── kronosync.png
│       ├── semantic-rag.png
│       └── edgecam.png
└── resume/
    └── vicky-raut-resume.pdf    # Official downloadable PDF resume
```

---

## 🎨 2. Icon System & Guidelines

All UI icons in this project adhere to strict design system rules:

1. **Stroke Width:** 1.5px or 2px stroke width (`stroke-[1.5]`).
2. **Color Rule:** Icons are NEVER independently colored with ad-hoc colors. Icons inherit text color (`text-foreground` or `text-muted-foreground`).
3. **Brand Icons:** Brand icons (GitHub, LinkedIn) are implemented as clean inline SVG vector components:
   - [components/shared/github-icon.tsx](file:///x:/portfolio-website/components/shared/github-icon.tsx)
   - [components/shared/linkedin-icon.tsx](file:///x:/portfolio-website/components/shared/linkedin-icon.tsx)

---

## 📐 3. OpenGraph & Social Previews

- **File Path:** `public/og-image.png`
- **Dimensions:** `1200px` x `630px`
- **Format:** PNG / WebP
- **Aesthetic:** High-contrast monochrome background with `VR` logo mark, title, and capability statement.

---

## 📄 4. Favicon Generator

- **File Path:** [app/icon.tsx](file:///x:/portfolio-website/app/icon.tsx)
- **Engine:** Next.js `@vercel/og` `ImageResponse`
- **Size:** `32px` x `32px`
- **Prerendering:** 100% static prerendered PNG favicon.
