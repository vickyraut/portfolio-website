export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface OrbitTechnology {
  id: string;
  name: string;
  category: string;
  targetSection: string;
  ringIndex: number; // 0: Inner, 1: Middle, 2: Outer
  initialAngle: number; // in degrees
  duration: number; // orbit period in seconds
  direction: "clockwise" | "counter-clockwise";
}

export const aboutData = {
  overline: "ABOUT ME",
  heading: "Engineering systems at the intersection of AI & Android.",
  statement:
    "I work across intelligent AI systems and native Android software, with a focus on precision, performance, and architectural clarity.",
  bio: "My work spans AI agents, LLM applications, RAG pipelines, and native Android development. I enjoy turning complex technical ideas into reliable software, from reasoning workflows and tool-calling systems to high-performance Kotlin applications.",
  philosophy: "// I build systems that reason, not just respond.",
  milestones: [
    {
      year: "2026",
      title: "Agentic AI & RAG Systems",
      description:
        "Designing multi-agent workflows, tool-calling pipelines, and RAG systems using LangGraph, LangChain, and MCP.",
    },
    {
      year: "2024 - 2025",
      title: "AI Engineering & Computer Vision",
      description:
        "Developed a cloud-based smart traffic management system at IIIT Surat, building real-time YOLO vehicle detection pipelines and integrating Django backends with AWS, Raspberry Pi 5, and Jetson Nano deployments.",
    },
    {
      year: "2024 - 2025",
      title: "Club Lead, Enlectic Research Center (ERC)",
      description:
        "Led the college's Enlectic Research Center for 2 years, driving technical research initiatives and mentoring student projects.",
    },
    {
      year: "2023 - 2026",
      title: "B.E. Computer Science",
      description:
        "Pursuing a B.E. in Computer Science (CGPA 8.2) at Government College of Engineering, Avasari, Pune: an NBA-accredited institute, the only government engineering college in Pune.",
    },
    {
      year: "2022 - 2023",
      title: "Native Android Development",
      description:
        "Built and shipped Android applications in Java using MVC/MVVM architecture with a MySQL backend at Mountreach Solutions, implementing features, fixing cross-version compatibility issues, and applying SOLID principles.",
    },
    {
      year: "2020 - 2023",
      title: "Computer Science Foundation",
      description:
        "Completed a Diploma in Computer Engineering at Government Polytechnic Murtizapur, graduating 1st Rank with 89.66%, building core foundations in DSA, OOP, and systems programming.",
    },
    {
      year: "2020",
      title: "School Education",
      description:
        "Completed Class 10th at Jijamata Vidya Mandir, Mumbai, with 89.80% (2nd Rank).",
    },
  ] as Milestone[],
  orbitTechnologies: [
    {
      id: "ai-llm",
      name: "AI / LLM",
      category: "Agentic AI & Foundation Models",
      targetSection: "#ai-engineering",
      ringIndex: 1,
      initialAngle: 0,
      duration: 25,
      direction: "clockwise",
    },
    {
      id: "android",
      name: "Android",
      category: "Native Mobile OS & Kotlin",
      targetSection: "#android",
      ringIndex: 1,
      initialAngle: 90,
      duration: 25,
      direction: "clockwise",
    },
    {
      id: "python",
      name: "Python",
      category: "Machine Learning & AI Backend",
      targetSection: "#ai-engineering",
      ringIndex: 1,
      initialAngle: 180,
      duration: 25,
      direction: "clockwise",
    },
    {
      id: "github",
      name: "GitHub",
      category: "Software Systems & Engineering",
      targetSection: "#skills",
      ringIndex: 1,
      initialAngle: 270,
      duration: 25,
      direction: "clockwise",
    },
  ] as OrbitTechnology[],
};

