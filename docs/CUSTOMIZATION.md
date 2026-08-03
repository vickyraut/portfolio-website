# CUSTOMIZATION.md — Template Personalization & Rebranding Guide

This document explains how another developer can adapt this portfolio codebase to represent their own engineering career, bio, projects, and custom styling.

---

## 🔄 1. Decoupled Content Architecture

0% of personal bio data is hardcoded inside UI components. All content lives inside typed files in `content/*.ts` and `data/*.ts`.

### Step 1: Update Bio & Persona Metadata
Edit `lib/constants.ts`:
```typescript
export const siteMetadata = {
  name: "YOUR NAME",
  title: "YOUR NAME — YOUR TITLE",
  description: "YOUR BIO SUMMARY",
  url: "https://yourdomain.com",
};
```

### Step 2: Replace Work Experience Entries
Edit `content/experience.ts`:
```typescript
export const experience: ExperienceEntry[] = [
  {
    company: "Your Company",
    role: "Your Role",
    startDate: "2024",
    endDate: "Present",
    location: "Remote",
    achievements: ["Achievement 1", "Achievement 2"],
    techStack: ["React", "TypeScript"],
  },
];
```

### Step 3: Replace Projects
Edit `content/projects.ts`:
```typescript
export const projects: ProjectData[] = [
  {
    slug: "my-project",
    title: "My Project",
    featured: true,
    problem: "Problem description",
    solution: "Solution description",
    impact: "Impact metrics",
    techStack: ["Python", "FastAPI"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
  },
];
```

---

## 🎨 2. Theme & Styling Customization

### Changing Font Family
Edit `app/layout.tsx` to replace Google Fonts:
```typescript
import { Outfit, Fira_Code } from "next/font/google";
```

### Modifying Design System Color Variables
Edit `styles/tokens.css` to update base CSS variable tokens.
