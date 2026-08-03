import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    company: "NeuralCraft Systems",
    role: "Senior AI Engineer & LLM Specialist",
    startDate: "2024",
    endDate: "Present",
    location: "Remote",
    achievements: [
      "Architected autonomous multi-agent tool-calling workflows reducing complex reasoning task latency by 42%.",
      "Engineered hybrid vector-sparse RAG retrieval pipelines over multi-domain knowledge bases with sub-100ms P99 retrieval times.",
      "Designed synthetic evaluation benchmarks (evals) to audit LLM hallucination rate and JSON schema adherence across model updates.",
    ],
    techStack: ["Python", "TypeScript", "LangChain", "LlamaIndex", "Pinecone", "FastAPI", "Docker", "OpenAI API"],
  },
  {
    company: "Apex Mobile Technologies",
    role: "Lead Android Developer",
    startDate: "2022",
    endDate: "2024",
    location: "Hybrid",
    achievements: [
      "Led the migration of legacy XML layouts to Jetpack Compose across a 1M+ MAU flagship Android application.",
      "Implemented offline-first room database architecture with encrypted SQLite and background WorkManager synchronization.",
      "Optimized app startup time by 35% through baseline profiles, lazy list memory tuning, and dependency injection refactoring.",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines & Flow", "Hilt", "Room DB", "Retrofit", "JUnit / Espresso"],
  },
  {
    company: "Cognitive AI Labs",
    role: "AI / Mobile Engineer",
    startDate: "2021",
    endDate: "2022",
    location: "On-site",
    achievements: [
      "Integrated lightweight edge ML models (TensorFlow Lite / ONNX) directly into Android applications for real-time camera inference.",
      "Built high-throughput REST APIs and WebSocket stream bridges for streaming model responses with minimal memory overhead.",
      "Published comprehensive developer documentation and internal SDKs used by cross-functional engineering teams.",
    ],
    techStack: ["Kotlin", "Python", "TensorFlow Lite", "PyTorch", "Android SDK", "REST / WebSockets", "Git"],
  },
];
