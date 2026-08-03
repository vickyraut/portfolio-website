export interface AICapability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const aiCapabilities: AICapability[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Designing autonomous multi-step decision workflows that dynamically select tools, execute actions, and self-correct based on feedback loops.",
    icon: "Bot",
  },
  {
    id: "llm-applications",
    title: "LLM Applications",
    description: "Building production-ready LLM application architectures with strict JSON output validation, fallback routing, and low-latency streaming.",
    icon: "Cpu",
  },
  {
    id: "rag-systems",
    title: "RAG Systems",
    description: "Engineering hybrid vector-sparse retrieval pipelines with semantic reranking and reciprocal rank fusion over large enterprise datasets.",
    icon: "Database",
  },
  {
    id: "multi-agent-systems",
    title: "Multi-Agent Systems",
    description: "Orchestrating specialized agent teams with distributed state machines, role allocation, and structured inter-agent message passing.",
    icon: "Network",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Developing systematic prompt optimization techniques, few-shot contextual framing, and chain-of-thought reasoning protocols.",
    icon: "MessageSquareCode",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Automating end-to-end business workflows by coupling AI model decisioning with backend API webhooks and data pipelines.",
    icon: "Workflow",
  },
  {
    id: "tool-calling",
    title: "Tool Calling",
    description: "Configuring deterministic function execution interfaces enabling models to safely query databases, APIs, and computational tools.",
    icon: "Wrench",
  },
  {
    id: "model-evaluation",
    title: "Model Evaluation",
    description: "Implementing rigorous synthetic evals, hallucination detection benchmarks, and cost-latency profiling for model selection.",
    icon: "CheckCircle2",
  },
];

export const processSteps = [
  { step: "01", label: "User Intent & Prompt", description: "Structured Intent Framing" },
  { step: "02", label: "Reasoning & Tool Execution", description: "Dynamic Plan & Function Execution" },
  { step: "03", label: "Context Retrieval", description: "Contextual Vector Synthesis" },
  { step: "04", label: "Verified Output", description: "Verified Output Generation" },
] as const;
