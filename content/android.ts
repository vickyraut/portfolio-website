export interface AndroidCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: string;
}

export interface AndroidMockupScreen {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  metrics: string;
}

export const androidCapabilities: AndroidCapability[] = [
  {
    id: "mvvm",
    title: "MVVM Architecture",
    subtitle: "State Management & Unidirectional Flow",
    description: "Separating UI state from business logic using StateFlow, SharedFlow, and ViewModel lifecycle handlers for deterministic UI rendering.",
    category: "Architecture",
    icon: "Layers",
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    subtitle: "Decoupled Domain & Data Layers",
    description: "Enforcing clear boundaries between UI, domain use-cases, and repository data sources for high testability and maintainability.",
    category: "Architecture",
    icon: "Box",
  },
  {
    id: "jetpack-compose",
    title: "Jetpack Compose",
    subtitle: "Declarative UI Framework",
    description: "Building responsive, hardware-accelerated native UIs with declarative composables, custom state hoisting, and smooth animations.",
    category: "UI Framework",
    icon: "Smartphone",
  },
  {
    id: "room",
    title: "Room Database",
    subtitle: "Offline-First Encrypted Storage",
    description: "Architecting local SQLite relational schemas with Room ORM, Flow reactive queries, and automatic schema migrations.",
    category: "Database",
    icon: "Database",
  },
  {
    id: "retrofit",
    title: "Retrofit & OkHttp",
    subtitle: "Type-Safe REST & HTTP Client",
    description: "Handling asynchronous REST APIs with type-safe interfaces, custom interceptors, auth token refresh, and JSON serialization.",
    category: "Networking",
    icon: "Wifi",
  },
  {
    id: "firebase",
    title: "Firebase Integration",
    subtitle: "Realtime & Push Infrastructure",
    description: "Integrating Firebase FCM push notifications, Analytics, Crashlytics, and Remote Config for real-time app telemetry.",
    category: "Cloud Services",
    icon: "Flame",
  },
];

export const mockupScreens: AndroidMockupScreen[] = [
  {
    id: "screen-1",
    title: "KronoSync Mobile",
    subtitle: "Offline-First Sync Engine",
    tag: "JETPACK COMPOSE + ROOM",
    metrics: "P99 Sync Latency < 45ms",
  },
  {
    id: "screen-2",
    title: "EdgeCam Vision",
    subtitle: "Realtime Camera Inference",
    tag: "TENSORFLOW LITE + CAMERAX",
    metrics: "60 FPS Offline Detection",
  },
  {
    id: "screen-3",
    title: "Neural Notes",
    subtitle: "On-Device LLM Summarizer",
    tag: "CLEAN ARCHITECTURE + FLOW",
    metrics: "Zero Cloud Data Transfer",
  },
];
