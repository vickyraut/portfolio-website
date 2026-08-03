# Contributing to Vicky Raut's Portfolio Website

Thank you for your interest in contributing to this repository! This project is maintained as a high-quality open-source template and personal portfolio demonstrator.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
- [Branching Strategy](#branching-strategy)
- [Commit Conventions](#commit-conventions)
- [Code Style & Formatting](#code-style--formatting)
- [Pull Request Process](#pull-request-process)

---

## 📜 Code of Conduct

We expect all contributors to adhere to a respectful, professional environment. Please keep code reviews constructive, objective, and technical.

---

## 🛠️ Development Setup

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Run Verification Commands Before Opening a PR:**
   ```bash
   # Type check and build verification
   npm run build

   # ESLint quality audit
   npm run lint
   ```

---

## 🌿 Branching Strategy

We follow a feature-branch workflow:

- `main`: Production branch. Only stable, fully verified code is merged here.
- `feature/<feature-name>`: New section features or UI component additions.
- `fix/<bug-name>`: Bug fixes, typo corrections, or performance patches.

---

## 💬 Commit Conventions

Commits MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat: add AI Engineering capability cards component`
- `fix: resolve JSX text node comment warning in research card`
- `docs: update deployment instructions in docs/DEPLOYMENT.md`
- `style: refine Tailwind CSS v4 color tokens in styles/tokens.css`
- `refactor: convert useMediaQuery to useSyncExternalStore`

---

## 🎨 Code Style & Formatting

1. **Monochrome Design Discipline:**
   - Do NOT introduce generic bright colors (e.g. plain `#FF0000` red, `#0000FF` blue). Use curated design system tokens (`bg-card`, `border-border`, `text-foreground`, `text-muted-foreground`, `bg-background-secondary`).
2. **Typography Hierarchy:**
   - Headings MUST use predefined semantic typography classes (`text-display`, `text-h2`, `text-h3`, `text-h4`, `text-body-lg`, `text-body`, `text-meta`, `text-overline`).
3. **TypeScript Strictness:**
   - Avoid `any`. Define strict interfaces in `lib/types.ts`.
4. **Accessibility First:**
   - Every interactive element MUST have visible hover/focus states, clean contrast ratio, and proper `aria-*` attributes.

---

## 🚀 Pull Request Process

1. Ensure `npm run lint` and `npm run build` pass locally with **0 errors and 0 warnings**.
2. Open a Pull Request against the `main` branch.
3. Provide a clear title and detailed summary of changes made.
4. Attach screenshots or screen recordings for UI modifications.
