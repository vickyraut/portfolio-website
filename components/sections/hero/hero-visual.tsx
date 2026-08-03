"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface GraphNode {
  id: string;
  label: string;
  cx: number;
  cy: number;
  r: number;
  role: "supervisor" | "planner" | "agent" | "memory" | "tool";
  driftX: number[];
  driftY: number[];
  duration: number;
  delay: number;
}

export interface GraphEdge {
  id: string;
  sourceId: string;
  targetId: string;
  type: "primary" | "dashed";
}

export interface DataPacket {
  id: string;
  sourceId: string;
  targetId: string;
  duration: number;
  delay: number;
}

// 7-Node Agent Architecture Topology
const GRAPH_NODES: GraphNode[] = [
  {
    id: "supervisor",
    label: "Supervisor",
    cx: 200,
    cy: 200,
    r: 7,
    role: "supervisor",
    driftX: [0, 2, -2, 0],
    driftY: [0, -2, 2, 0],
    duration: 12,
    delay: 0,
  },
  {
    id: "planner",
    label: "Planner",
    cx: 200,
    cy: 80,
    r: 6,
    role: "planner",
    driftX: [0, -4, 3, 0],
    driftY: [0, 3, -4, 0],
    duration: 9.5,
    delay: 0.1,
  },
  {
    id: "agent-alpha",
    label: "Agent Alpha",
    cx: 320,
    cy: 140,
    r: 5,
    role: "agent",
    driftX: [0, 3, -4, 0],
    driftY: [0, -4, 3, 0],
    duration: 10,
    delay: 0.3,
  },
  {
    id: "tool-engine",
    label: "Tool Engine",
    cx: 260,
    cy: 280,
    r: 5,
    role: "tool",
    driftX: [0, -3, 4, 0],
    driftY: [0, 4, -3, 0],
    duration: 8.5,
    delay: 0.2,
  },
  {
    id: "rag-memory",
    label: "RAG Memory",
    cx: 140,
    cy: 320,
    r: 6,
    role: "memory",
    driftX: [0, 4, -3, 0],
    driftY: [0, -4, 2, 0],
    duration: 11,
    delay: 0.5,
  },
  {
    id: "agent-beta",
    label: "Agent Beta",
    cx: 80,
    cy: 200,
    r: 5,
    role: "agent",
    driftX: [0, -4, 3, 0],
    driftY: [0, 4, -4, 0],
    duration: 9,
    delay: 0.4,
  },
  {
    id: "evaluator",
    label: "Evaluator",
    cx: 80,
    cy: 120,
    r: 5,
    role: "agent",
    driftX: [0, 4, -2, 0],
    driftY: [0, -4, 3, 0],
    duration: 10.5,
    delay: 0.6,
  },
];

// Edges connecting graph nodes
const GRAPH_EDGES: GraphEdge[] = [
  // Outer Ring Bounds
  { id: "e1", sourceId: "evaluator", targetId: "planner", type: "primary" },
  { id: "e2", sourceId: "planner", targetId: "agent-alpha", type: "primary" },
  { id: "e3", sourceId: "agent-alpha", targetId: "tool-engine", type: "primary" },
  { id: "e4", sourceId: "tool-engine", targetId: "rag-memory", type: "primary" },
  { id: "e5", sourceId: "rag-memory", targetId: "agent-beta", type: "primary" },
  { id: "e6", sourceId: "agent-beta", targetId: "evaluator", type: "primary" },

  // Inner Orchestration Connections (Dashed)
  { id: "e7", sourceId: "planner", targetId: "supervisor", type: "dashed" },
  { id: "e8", sourceId: "supervisor", targetId: "agent-alpha", type: "dashed" },
  { id: "e9", sourceId: "supervisor", targetId: "tool-engine", type: "dashed" },
  { id: "e10", sourceId: "supervisor", targetId: "rag-memory", type: "dashed" },
  { id: "e11", sourceId: "agent-beta", targetId: "supervisor", type: "dashed" },
  { id: "e12", sourceId: "evaluator", targetId: "supervisor", type: "dashed" },
];

// Animated Signal Packets Moving Across Graph
const DATA_PACKETS: DataPacket[] = [
  { id: "p1", sourceId: "planner", targetId: "supervisor", duration: 2.8, delay: 0 },
  { id: "p2", sourceId: "supervisor", targetId: "agent-alpha", duration: 3.2, delay: 1.2 },
  { id: "p3", sourceId: "supervisor", targetId: "tool-engine", duration: 2.5, delay: 0.5 },
  { id: "p4", sourceId: "rag-memory", targetId: "supervisor", duration: 3.5, delay: 1.8 },
  { id: "p5", sourceId: "agent-beta", targetId: "evaluator", duration: 2.9, delay: 2.1 },
];

// Live Console System Messages
const SYSTEM_MESSAGES = [
  "AGENT_GRAPH :: ACTIVE",
  "ROUTING REQUEST...",
  "LANGGRAPH :: DISPATCH",
  "HYBRID RAG :: MEMORY_UPDATED",
  "STATE_FSM :: GRAPH_COMPILED",
  "TOOL_CALL :: EXECUTING",
  "7 AGENTS ONLINE",
  "INFERENCE :: LATENCY 38ms",
];

export const HeroVisual: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  // Cycle system messages every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % SYSTEM_MESSAGES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Map nodes for O(1) lookup
  const nodeMap = useMemo(() => {
    const map = new Map<string, GraphNode>();
    GRAPH_NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  // Compute outer polygon string dynamically for boundary line
  const outerPolygonD = useMemo(() => {
    const outerIds = [
      "evaluator",
      "planner",
      "agent-alpha",
      "tool-engine",
      "rag-memory",
      "agent-beta",
    ];
    const points = outerIds
      .map((id) => {
        const n = nodeMap.get(id);
        return n ? `${n.cx},${n.cy}` : "";
      })
      .filter(Boolean);
    return `M ${points.join(" L ")} Z`;
  }, [nodeMap]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-4 select-none group cursor-pointer"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground transition-opacity duration-300"
      >
        {/* Outer subtle boundary frame */}
        <rect
          x="20"
          y="20"
          width="360"
          height="360"
          rx="16"
          stroke="var(--border, #E5E5E5)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="transition-colors duration-300"
        />

        {/* Static background grid lines */}
        <line
          x1="20"
          y1="200"
          x2="380"
          y2="200"
          stroke="var(--border, #E5E5E5)"
          strokeWidth="1"
          opacity={isHovered ? "0.6" : "0.35"}
          className="transition-opacity duration-300"
        />
        <line
          x1="200"
          y1="20"
          x2="200"
          y2="380"
          stroke="var(--border, #E5E5E5)"
          strokeWidth="1"
          opacity={isHovered ? "0.6" : "0.35"}
          className="transition-opacity duration-300"
        />

        {/* Primary Outer Topology Boundary Line */}
        <motion.path
          d={outerPolygonD}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity={isHovered ? "0.95" : "0.8"}
          className="transition-opacity duration-300"
        />

        {/* Inner Routing Lines (Dashed with Animated Offset) */}
        {GRAPH_EDGES.filter((e) => e.type === "dashed").map((edge) => {
          const source = nodeMap.get(edge.sourceId);
          const target = nodeMap.get(edge.targetId);
          if (!source || !target) return null;

          return (
            <motion.line
              key={edge.id}
              x1={source.cx}
              y1={source.cy}
              x2={target.cx}
              y2={target.cy}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={isHovered ? "0.55" : "0.4"}
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{
                duration: isHovered ? 6 : 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Animated Data Packets (Signal Circles traversing edge paths) */}
        {DATA_PACKETS.map((packet) => {
          const source = nodeMap.get(packet.sourceId);
          const target = nodeMap.get(packet.targetId);
          if (!source || !target) return null;

          const activeDuration = isHovered ? packet.duration * 0.7 : packet.duration;

          return (
            <motion.circle
              key={packet.id}
              r="2.5"
              fill="currentColor"
              initial={{ cx: source.cx, cy: source.cy, opacity: 0 }}
              animate={{
                cx: [source.cx, target.cx],
                cy: [source.cy, target.cy],
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration: activeDuration,
                repeat: Infinity,
                delay: packet.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Graph Nodes */}
        {GRAPH_NODES.map((node) => {
          const isSupervisor = node.role === "supervisor";

          if (isSupervisor) {
            return (
              <g key={node.id}>
                {/* Supervisor Outer Breathing Ring Halo */}
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="16"
                  stroke="currentColor"
                  strokeWidth="1"
                  animate={{
                    scale: isHovered ? [1, 1.35, 1] : [1, 1.25, 1],
                    opacity: isHovered ? [0.8, 0.2, 0.8] : [0.5, 0.15, 0.5],
                  }}
                  transition={{
                    duration: isHovered ? 2.5 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Supervisor Inner Core */}
                <motion.g
                  animate={{ scale: isHovered ? [1, 1.12, 1] : [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill="currentColor" />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 7}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                </motion.g>
              </g>
            );
          }

          return (
            <motion.g
              key={node.id}
              animate={{
                x: node.driftX,
                y: node.driftY,
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            >
              <circle cx={node.cx} cy={node.cy} r={node.r} fill="currentColor" />
              {node.role === "planner" || node.role === "memory" ? (
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 5}
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity={isHovered ? "0.5" : "0.3"}
                />
              ) : null}
            </motion.g>
          );
        })}

        {/* Live Monospace System Console Messages */}
        <g transform="translate(200, 355)">
          <AnimatePresence mode="wait">
            <motion.text
              key={msgIndex}
              x="0"
              y="0"
              textAnchor="middle"
              fill="var(--muted-foreground, #6B7280)"
              fontSize="11"
              fontFamily="var(--font-jetbrains-mono, monospace)"
              letterSpacing="0.08em"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: isHovered ? 1 : 0.85, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {SYSTEM_MESSAGES[msgIndex]}
            </motion.text>
          </AnimatePresence>
        </g>
      </svg>
    </div>
  );
};
