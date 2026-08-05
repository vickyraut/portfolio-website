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
    "I build intelligent agentic systems and native Android software with absolute emphasis on precision, speed, and architectural clarity.",
  bio: "With a strong engineering foundation in native Android development and applied artificial intelligence, I design software that bridges complex backend model reasoning with seamless user experiences. My work spans agentic AI workflows, retrieval-augmented generation (RAG) pipelines, tool calling, and high-performance Kotlin/Android apps.",
  philosophy: "// I build systems that reason, not just respond.",
  milestones: [
    {
      year: "2026",
      title: "Agentic AI & Advanced RAG Systems",
      description: "Designing multi-agent workflows, tool-calling pipelines, and autonomous decision systems.",
    },
    {
      year: "2024 - 2025",
      title: "AI Engineering & LLM Integration",
      description: "Pivoted deeply into LLM architectures, vector retrieval, and production AI application development.",
    },
    {
      year: "2022 - 2024",
      title: "Native Android Software Engineering",
      description: "Architected Kotlin apps utilizing Jetpack Compose, Clean Architecture, and high-throughput local databases.",
    },
    {
      year: "2021",
      title: "Computer Science & Systems Foundation",
      description: "Graduated with honors, focusing on algorithm design, systems programming, and machine learning fundamentals.",
    },
  ] as Milestone[],
  orbitTechnologies: [
    {
      id: "ai-llm",
      name: "AI / LLM",
      category: "Agentic AI & Foundation Models",
      targetSection: "#ai-engineering",
      ringIndex: 0,
      initialAngle: 0,
      duration: 22,
      direction: "clockwise",
    },
    {
      id: "android",
      name: "Android",
      category: "Native Mobile OS & Kotlin",
      targetSection: "#android",
      ringIndex: 1,
      initialAngle: 120,
      duration: 30,
      direction: "counter-clockwise",
    },
    {
      id: "github",
      name: "GitHub",
      category: "Software Systems & Engineering",
      targetSection: "#skills",
      ringIndex: 2,
      initialAngle: 240,
      duration: 38,
      direction: "clockwise",
    },
  ] as OrbitTechnology[],
};

