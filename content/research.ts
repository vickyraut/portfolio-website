import type { ResearchEntry } from "@/lib/types";

export const research: ResearchEntry[] = [
  {
    title: "Autonomous Multi-Agent Tool Orchestration in Complex Reasoning Domains",
    venue: "IEEE Conference on Artificial Intelligence (CAI)",
    year: 2025,
    abstract: "This paper presents a graph-based stateful orchestration framework for multi-agent LLM systems performing complex tool calling. By decoupling intent planning from function execution and introducing schema verification at intermediate nodes, we eliminate cyclic agent loops and invalid API payloads.",
    methodology: "Implemented a deterministic finite state machine (FSM) over asynchronous Python event loops, evaluating tool calling against a benchmark suite of 1,500 multi-step reasoning tasks.",
    results: "Achieved a 68% reduction in task execution step failures and a 2.3x speedup in end-to-end task completion latency compared to standard ReAct agent baselines.",
    paperUrl: "https://arxiv.org/abs/2501.00000",
    codeUrl: "https://github.com/vickyraut/agentmesh-orchestrator",
  },
  {
    title: "Hybrid Sparse-Dense Retrieval Fusion for Multi-Turn Technical Question Answering",
    venue: "ACM SIGIR Workshop on Neural Information Retrieval",
    year: 2024,
    abstract: "Standard dense vector embeddings struggle to preserve exact keyword matching in domain-specific technical documentation. We introduce a Reciprocal Rank Fusion (RRF) algorithm combining BM25 sparse keyword indices with fine-tuned dense embeddings.",
    methodology: "Evaluated hybrid retrieval over 100,000 dense technical document chunks, applying neural cross-encoder reranking on top-50 candidate passages before context synthesis.",
    results: "Increased retrieval Precision@5 from 64.2% to 91.4% and Mean Reciprocal Rank (MRR) by 28.5% over pure vector search baselines.",
    paperUrl: "https://arxiv.org/abs/2408.00000",
    codeUrl: "https://github.com/vickyraut/semantic-rag-engine",
  },
];
