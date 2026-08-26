export interface ProjectData {
  slug: string
  title: string
  featured: boolean
  image: string
  problem: string
  solution: string
  impact: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  category?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  startDate: string
  endDate: string | "Present"
  location?: string
  achievements: string[]
  techStack: string[]
  logo?: string
}

export type SkillCategoryName =
  | "Programming"
  | "AI"
  | "LLMs"
  | "AI & LLMs"
  | "Backend"
  | "Databases"
  | "Android"
  | "Cloud"
  | "DevOps"
  | "Tools"
  | (string & {})

export interface SkillCategory {
  category: SkillCategoryName
  items: string[]
}

export interface Certification {
  name: string
  issuer: string
  issuerLogo?: string
  issueDate: string
  expiryDate?: string
  verifyUrl?: string
  skills?: string[]
}

export interface AchievementEntry {
  id: string
  title: string
  category: string
  organization: string
  year: string
  description: string
  highlight?: string
}

export interface ResearchEntry {
  title: string
  venue: string
  year: number
  abstract: string
  methodology: string
  results: string
  paperUrl?: string
  codeUrl?: string
  certificateUrl?: string
}

export interface BlogPostFrontmatter {
  title: string
  slug: string
  coverImage: string
  category: string
  tags: string[]
  publishedAt: string
  readingTime: string
}
