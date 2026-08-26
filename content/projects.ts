import type { ProjectData } from "@/lib/types";

export const projects: ProjectData[] = [
  {
    slug: "agentic-blog-generator",
    title: "Agentic Blog Generator",
    featured: true,
    image: "/images/projects/agentic-blog.png",
    problem:
      "Traditional single-prompt LLM generation produces unstructured content, generic titles, and rigid language constraints — manual SEO research, drafting, and translation are slow and fragmented.",
    solution:
      "Designed a deterministic LangGraph state machine coordinating three specialized agents — SEO title generation, structured long-form content generation, and dynamic multi-language translation — with full LangSmith observability into each step.",
    impact:
      "Delivered a production-ready pipeline generating SEO-optimized, structured blogs in over 20 languages, exposed via both a FastAPI REST endpoint and a Streamlit interface.",
    techStack: ["Python", "LangGraph", "LangChain", "Groq (Llama 3.1)", "FastAPI", "Streamlit", "Pydantic", "LangSmith"],
    githubUrl: "https://github.com/vickyraut/Agentic-Blog-Generator",
    liveUrl: "https://agentic-blog-gen.streamlit.app/",
  },
  {
    slug: "multi-agent-ai-assistant",
    title: "Multi-Agent AI Assistant",
    featured: false,
    image: "/images/projects/multi-agent.png",
    problem:
      "Fragmented AI tools require switching between separate interfaces for web research, news synthesis, and reasoning tasks.",
    solution:
      "Built a unified Streamlit application integrating AI agents for general research, web search, and AI news summarization using LangGraph state-based workflows.",
    impact:
      "Unified multi-tool reasoning and search into a single high-throughput interactive dashboard.",
    techStack: ["Python", "Streamlit", "LangGraph", "LangChain", "Tavily Search", "OpenAI API", "Gemini API", "Tool Calling"],
    githubUrl: "https://github.com/vickyraut/Agentic-Chatbot",
    liveUrl: "https://multiagent-chat.streamlit.app/",
  },
  {
    slug: "real-time-criminal-activity-detection",
    title: "Real-Time Criminal Activity Detection System",
    featured: false,
    image: "/images/projects/cctv-detection.png",
    problem:
      "Manual CCTV monitoring is error-prone and unable to detect fast-moving criminal incidents in real-time.",
    solution:
      "Developed a deep learning-based surveillance system to detect criminal activities from CCTV footage using spatio-temporal video analysis. Findings were published in a peer-reviewed research paper.",
    impact:
      "Delivered real-time spatio-temporal detection with automated alerts and published peer-reviewed research findings.",
    techStack: ["Python", "YOLOv8", "TensorFlow", "OpenCV", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/vickyraut/Real-Time-Criminal-Activity-Detection",
    liveUrl: "https://cctv-surveillance.vercel.app/",
  },
  {
    slug: "touristo",
    title: "Touristo",
    featured: false,
    image: "/images/projects/touristo.png",
    problem:
      "Travelers struggle with disjointed apps for destination discovery, navigation, and booking.",
    solution:
      "Built an Android application for discovering tourist destinations, featuring user authentication, maps integration, and a booking system.",
    impact:
      "Streamlined destination exploration and local booking into a native, responsive mobile experience.",
    techStack: ["Java", "XML", "Firebase", "MySQL", "MVVM", "Google Maps", "PHP", "Payment Gateway"],
    githubUrl: "https://github.com/vickyraut/Touristo_APP",
  },
  {
    slug: "ripe-papaya-detector",
    title: "Ripe Papaya Detector",
    category: "ANDROID • ON-DEVICE AI",
    featured: false,
    image: "/images/projects/papaya-detector.png",
    problem:
      "Sorting fruit ripeness manually or relying on cloud server inference introduces processing latency, network dependencies, and privacy friction.",
    solution:
      "Built a native Android app in Kotlin that runs a self-trained YOLOv8 model on-device via TensorFlow Lite to detect papayas and predict their ripeness stage directly from the camera or gallery images — no server or internet connection required.",
    impact:
      "Enabled 100% offline, zero-latency on-device ML ripeness classification directly on Android mobile devices.",
    techStack: ["Kotlin", "XML", "TensorFlow Lite", "YOLOv8", "Android", "On-Device ML"],
    githubUrl: "https://github.com/vickyraut/RippenPapayaDetector",
  },
  {
    slug: "microblog",
    title: "Microblog",
    featured: false,
    image: "/images/projects/microblog.png",
    problem:
      "Heavy blogging frameworks introduce unnecessary complexity for lightweight, fast technical publishing.",
    solution:
      "Built and deployed a lightweight microblogging web application using Flask, with a clean templated frontend and Docker-based deployment.",
    impact:
      "Achieved instant containerized deployment with minimal resource footprint.",
    techStack: ["Python", "Flask", "Docker", "HTML/CSS"],
    githubUrl: "https://github.com/vickyraut/Microblog-Flask",
    liveUrl: "https://microblog-d8ord8ic.b4a.run/",
  },
];
