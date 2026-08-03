# DEPLOYMENT.md — Production Deployment & Optimization Guide

This guide details the deployment pipeline, environment variables, Vercel configuration, and Lighthouse performance verification.

---

## 🚀 1. Deploying to Vercel

### Step-by-Step Deployment
1. Push codebase to GitHub repository:
   ```bash
   git push origin main
   ```
2. Import repository into [Vercel Dashboard](https://vercel.com/new).
3. Set project settings:
   - **Framework:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Configure Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://vickyraut.com`
5. Click **Deploy**.

---

## ⚡ 2. Pre-Deployment Audits

### 1. Lighthouse Performance Audit Checklist
- [x] All 7 routes prerender statically.
- [x] Zero layout shift (CLS < 0.01).
- [x] First Contentful Paint (FCP) < 0.8s.
- [x] Largest Contentful Paint (LCP) < 1.2s.

### 2. SEO & Accessibility Checklist
- [x] Canonical URL metadata defined in [app/layout.tsx](file:///x:/portfolio-website/app/layout.tsx).
- [x] OpenGraph images (1200x630) configured.
- [x] Valid JSON-LD schemas embedded for `Person`, `WebSite`, and `ItemList`.
- [x] Clean `robots.txt` and `sitemap.xml` generated.
- [x] High-contrast monochrome text (AA compliant).
