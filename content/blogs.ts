import type { BlogPostFrontmatter } from "@/lib/types";

export interface BlogPostData extends BlogPostFrontmatter {
  excerpt: string;
  url?: string;
}

export const blogs: BlogPostData[] = [
  {
    slug: "deterministic-tool-calling-agents",
    title: "Building Deterministic Tool-Calling Agents with LangChain & Pydantic",
    excerpt: "How to eliminate LLM output hallucination and infinite execution loops by enforcing strict Pydantic schemas over structured function calls.",
    coverImage: "/images/blog/agent-architecture.png",
    category: "AI ENGINEERING",
    tags: ["Agentic AI", "LangChain", "Python"],
    publishedAt: "AUG 2026",
    readingTime: "6 MIN READ",
    url: "/blog/deterministic-tool-calling-agents",
  },
  {
    slug: "jetpack-compose-performance-optimization",
    title: "Optimizing Jetpack Compose Performance: Baseline Profiles & Lazy List Tuning",
    excerpt: "A deep dive into measuring recomposition counts, generating Android baseline profiles, and eliminating dropped frames in production apps.",
    coverImage: "/images/blog/compose-performance.png",
    category: "ANDROID",
    tags: ["Kotlin", "Jetpack Compose", "Performance"],
    publishedAt: "JUL 2026",
    readingTime: "8 MIN READ",
    url: "/blog/jetpack-compose-performance-optimization",
  },
  {
    slug: "hybrid-search-bm25-dense-vector-reranking",
    title: "Hybrid Search Architecture: Combining BM25 & Dense Vector Reranking",
    excerpt: "Why dense vector similarity alone fails on domain-specific technical documentation, and how Reciprocal Rank Fusion solves keyword retrieval gaps.",
    coverImage: "/images/blog/hybrid-search.png",
    category: "RAG SYSTEMS",
    tags: ["RAG", "Vector Search", "Python"],
    publishedAt: "JUN 2026",
    readingTime: "10 MIN READ",
    url: "/blog/hybrid-search-bm25-dense-vector-reranking",
  },
];
