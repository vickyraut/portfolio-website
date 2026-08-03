"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-4 select-none">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground"
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
        />

        {/* Static background grid lines */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="var(--border, #E5E5E5)" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="var(--border, #E5E5E5)" strokeWidth="1" opacity="0.5" />

        {/* Connected Node Network Lines */}
        <motion.path
          d="M 80 120 L 200 80 L 320 140 L 260 280 L 140 320 L 80 200 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <motion.path
          d="M 200 80 L 140 200 L 260 280 M 80 200 L 200 200 L 320 140 M 140 200 L 140 320"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.4"
        />

        {/* Ambient Animated Nodes */}
        {/* Node 1 */}
        <motion.g
          animate={{ x: [0, 4, -3, 0], y: [0, -5, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="80" cy="120" r="5" fill="currentColor" />
          <circle cx="80" cy="120" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </motion.g>

        {/* Node 2 */}
        <motion.g
          animate={{ x: [0, -5, 4, 0], y: [0, 4, -4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="200" cy="80" r="6" fill="currentColor" />
        </motion.g>

        {/* Node 3 */}
        <motion.g
          animate={{ x: [0, 3, -4, 0], y: [0, -4, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="320" cy="140" r="5" fill="currentColor" />
        </motion.g>

        {/* Central Agent Node (Highlighted) */}
        <motion.g
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="200" cy="200" r="7" fill="currentColor" />
          <circle cx="200" cy="200" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        </motion.g>

        {/* Node 5 */}
        <motion.g
          animate={{ x: [0, -4, 3, 0], y: [0, 3, -5, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="260" cy="280" r="5" fill="currentColor" />
        </motion.g>

        {/* Node 6 */}
        <motion.g
          animate={{ x: [0, 4, -4, 0], y: [0, -3, 4, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="140" cy="320" r="6" fill="currentColor" />
        </motion.g>

        {/* Node 7 */}
        <motion.g
          animate={{ x: [0, -3, 5, 0], y: [0, 5, -3, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="80" cy="200" r="5" fill="currentColor" />
        </motion.g>

        {/* Monospace Code Label Overlay */}
        <text
          x="200"
          y="355"
          textAnchor="middle"
          fill="var(--muted-foreground, #6B7280)"
          fontSize="11"
          fontFamily="var(--font-jetbrains-mono, monospace)"
          letterSpacing="0.08em"
        >
          AGENT_GRAPH :: ACTIVE
        </text>
      </svg>
    </div>
  );
};
