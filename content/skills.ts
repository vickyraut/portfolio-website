import type { SkillCategory } from "@/lib/types";

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    items: ["Kotlin", "Python", "TypeScript", "JavaScript", "Java", "SQL", "C++", "HTML/CSS"],
  },
  {
    category: "AI & LLMs",
    items: ["LangChain", "LlamaIndex", "RAG Systems", "Multi-Agent Workflows", "Vector Embeddings", "Prompt Engineering", "Tool Calling", "Evals & Benchmarks"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Next.js App Router", "REST APIs", "WebSockets", "gRPC", "Microservices"],
  },
  {
    category: "Android",
    items: ["Jetpack Compose", "Coroutines & Flow", "Clean Architecture", "Hilt / Dagger", "Room Database", "WorkManager", "TensorFlow Lite", "Retrofit"],
  },
  {
    category: "Databases",
    items: ["Pinecone", "ChromaDB", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Vector DBs"],
  },
  {
    category: "Cloud",
    items: ["Vercel", "AWS (S3, EC2, Lambda)", "Google Cloud Platform", "Firebase", "Docker", "Edge Functions"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Cursor", "Linux / Bash", "Postman", "Android Studio", "VS Code", "CI/CD Pipelines", "Figma"],
  },
];
