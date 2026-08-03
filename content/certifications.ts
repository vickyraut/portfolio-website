import type { Certification, AchievementEntry } from "@/lib/types";

export const certifications: Certification[] = [
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    issueDate: "2024",
    verifyUrl: "https://coursera.org/verify/specialization",
    skills: ["Neural Networks", "PyTorch", "CNNs", "Sequence Models"],
  },
  {
    name: "Associate Android Developer",
    issuer: "Google Developers",
    issueDate: "2023",
    verifyUrl: "https://developers.google.com/certification/associate-android-developer",
    skills: ["Kotlin", "Jetpack Compose", "Android Architecture Components", "Room DB"],
  },
  {
    name: "LangChain & LlamaIndex AI Architect",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    verifyUrl: "https://coursera.org/verify",
    skills: ["Agentic AI", "RAG Systems", "Vector Embeddings", "Prompt Engineering"],
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["AWS Cloud", "EC2", "S3", "Lambda", "IAM Security"],
  },
];

export const achievements: AchievementEntry[] = [
  {
    id: "research-publication",
    title: "IEEE Research Publication",
    category: "ACADEMIC RESEARCH",
    organization: "IEEE Conference on AI Systems (CAI)",
    year: "2025",
    description: "Published peer-reviewed paper on autonomous multi-agent tool orchestration frameworks in complex reasoning domains.",
    highlight: "Peer-Reviewed Paper",
  },
  {
    id: "diploma-first-rank",
    title: "Diploma First Rank (Gold Medalist)",
    category: "ACADEMIC EXCELLENCE",
    organization: "Board of Technical Education",
    year: "2021",
    description: "Ranked 1st out of 450+ students in Computer Engineering diploma program with a 98.4% aggregate score.",
    highlight: "Rank 1 / 450+",
  },
  {
    id: "android-club-lead",
    title: "Android Development Club Lead",
    category: "LEADERSHIP",
    organization: "Developer Student Clubs",
    year: "2022 – 2024",
    description: "Led technical workshops on Jetpack Compose, Kotlin Coroutines, and Clean Architecture for over 300 student engineers.",
    highlight: "300+ Mentored",
  },
  {
    id: "teaching-assistant",
    title: "Teaching Assistant – AI & Machine Learning",
    category: "ACADEMIC ACCOMPLISHMENT",
    organization: "Department of Computer Science",
    year: "2023 – 2024",
    description: "Assisted professors in grading assignments, conducting lab sessions, and guiding final-year AI capstone projects.",
    highlight: "Capstone Advisor",
  },
  {
    id: "nss-volunteer",
    title: "NSS Technical Volunteer Lead",
    category: "COMMUNITY IMPACT",
    organization: "National Service Scheme (NSS)",
    year: "2022 – 2023",
    description: "Organized digital literacy bootcamps and open-source software drives in rural community centers.",
    highlight: "Community Leadership",
  },
  {
    id: "hackathon-winner",
    title: "National AI Hackathon Grand Champion",
    category: "COMPETITIVE ENGINEERING",
    organization: "National AI & Mobile Challenge",
    year: "2024",
    description: "Won 1st place overall among 120 teams for building an offline-first edge AI camera system for Android.",
    highlight: "1st Place Winner",
  },
];
