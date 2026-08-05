"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutData, OrbitTechnology } from "@/content/about";
import { fadeUp } from "@/lib/animations";

// Pixel-perfect monochrome SVG brand icons for all 15 technologies
const TechIcon: React.FC<{ id: string; className?: string }> = ({ id, className = "w-4 h-4" }) => {
  switch (id) {
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-4 0-5 1.5-5 3.5v2.5h6v1H6c-2 0-4 1.5-4 4.5s2 4.5 4 4.5h2v-2.5c0-2 1.5-3.5 3.5-3.5h4.5v-2.5c0-2-1.5-3.5-3.5-3.5H12z" />
          <path d="M12 22c4 0 5-1.5 5-3.5v-2.5h-6v-1h7c2 0 4-1.5 4-4.5s-2-4.5-4-4.5h-2v2.5c0 2-1.5 3.5-3.5 3.5H9v2.5c0 2 1.5 3.5 3.5 3.5H12z" />
          <circle cx="9" cy="5" r="0.75" fill="currentColor" />
          <circle cx="15" cy="19" r="0.75" fill="currentColor" />
        </svg>
      );
    case "langchain":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "langgraph":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <line x1="8.5" y1="10.8" x2="15.5" y2="6.7" />
          <line x1="8.5" y1="13.2" x2="15.5" y2="17.3" />
        </svg>
      );
    case "ai-llm":
    case "openai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 1 4.9 4h.1a5 5 0 0 1 4.3 7.5 5 5 0 0 1-2.4 6.6 5 5 0 0 1-7.4 1.9h-.1a5 5 0 0 1-4.3-7.5 5 5 0 0 1 2.4-6.6A5 5 0 0 1 12 2z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "fastapi":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "chromadb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "android":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7" />
          <path d="M12 4a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z" />
          <line x1="8" y1="2" x2="10" y2="4" />
          <line x1="16" y1="2" x2="14" y2="4" />
          <circle cx="9.5" cy="7" r="0.75" fill="currentColor" />
          <circle cx="14.5" cy="7" r="0.75" fill="currentColor" />
        </svg>
      );
    case "kotlin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="2 2 22 2 12 12 22 22 2 22 2 2" />
        </svg>
      );
    case "compose":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "room":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
    case "retrofit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 2l4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="M7 22l-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12.5c0 4.5-3.5 8-8 8H6a4 4 0 0 1-4-4c0-3.5 2.5-6.5 6-7 1.5-2.5 4.5-4 7.5-3.5 3.5.5 6 3.5 6.5 6.5z" />
          <rect x="7" y="12" width="2.5" height="2.5" rx="0.5" />
          <rect x="10.5" y="12" width="2.5" height="2.5" rx="0.5" />
          <rect x="14" y="12" width="2.5" height="2.5" rx="0.5" />
          <rect x="10.5" y="8.5" width="2.5" height="2.5" rx="0.5" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M18 8.5V12a4 4 0 0 1-4 4H8.5" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
};

export const ProfileOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTechId, setActiveTechId] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMouseOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveTechId(null);
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleScrollToSection = (targetSection: string) => {
    const el = document.querySelector(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Concentric radii calibrated for left-column integration
  // Desktop: Ring 0: 72px, Ring 1: 122px, Ring 2: 172px (Fits within 400px x 400px container)
  const ringRadii = [72, 122, 172];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className="w-full mt-4 flex flex-col items-center justify-center relative select-none"
    >
      {/* Integrated Orbit Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-[390px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(800px) rotateX(${mouseOffset.y * -3}deg) rotateY(${mouseOffset.x * 3}deg) translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 6}px, 0)`,
        }}
      >
        {/* Subtle Ambient Background Radial Glow */}
        <div className="absolute inset-0 rounded-full bg-radial from-foreground/5 via-transparent to-transparent blur-xl pointer-events-none" />

        {/* Orbit Rings (Concentric circles) */}
        {ringRadii.map((radius, idx) => (
          <div
            key={`ring-${idx}`}
            className="absolute rounded-full border border-border/60 dark:border-zinc-800/80 pointer-events-none transition-colors duration-300"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              boxShadow: isHovered
                ? "0 0 15px rgba(0,0,0,0.03)"
                : "none",
            }}
          />
        ))}

        {/* Central Focal Point: Professional Black & White Portrait */}
        <div className="relative z-20 flex flex-col items-center justify-center group cursor-pointer">
          {/* Subtle Outer Pulsing Ring */}
          <div className="absolute -inset-2 rounded-full border border-foreground/20 dark:border-foreground/30 animate-pulse pointer-events-none" />

          {/* Glassmorphic Image Frame */}
          <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full overflow-hidden border-2 border-foreground/30 dark:border-foreground/40 shadow-xl bg-background transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/vicky-portrait.png"
              alt="Vicky Raut Professional Portrait"
              fill
              sizes="(max-width: 640px) 88px, 104px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Orbiting Technology Nodes */}
        {aboutData.orbitTechnologies.map((tech: OrbitTechnology) => {
          const radius = ringRadii[tech.ringIndex] || 120;
          const isClockwise = tech.direction === "clockwise";
          const animName = isClockwise ? "orbit-cw" : "orbit-ccw";
          const counterAnimName = isClockwise ? "counter-orbit-cw" : "counter-orbit-ccw";
          const isItemActive = activeTechId === tech.id;

          return (
            <div
              key={tech.id}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                animation: shouldReduceMotion
                  ? "none"
                  : `${animName} ${tech.duration}s linear infinite`,
                animationPlayState: isHovered ? "paused" : "running",
                transform: `rotate(${tech.initialAngle}deg)`,
              }}
            >
              {/* Position node on ring radius */}
              <div
                className="absolute pointer-events-auto"
                style={{
                  transform: `translateY(-${radius}px)`,
                }}
              >
                {/* Counter-rotate node to maintain upright orientation */}
                <div
                  style={{
                    animation: shouldReduceMotion
                      ? "none"
                      : `${counterAnimName} ${tech.duration}s linear infinite`,
                    animationPlayState: isHovered ? "paused" : "running",
                    transform: `rotate(-${tech.initialAngle}deg)`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleScrollToSection(tech.targetSection)}
                    onMouseEnter={() => setActiveTechId(tech.id)}
                    onMouseLeave={() => setActiveTechId(null)}
                    onFocus={() => {
                      setIsHovered(true);
                      setActiveTechId(tech.id);
                    }}
                    onBlur={() => {
                      setIsHovered(false);
                      setActiveTechId(null);
                    }}
                    aria-label={`${tech.name} (${tech.category}) - Click to view section`}
                    className={`relative group flex items-center justify-center p-2 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isItemActive
                        ? "scale-125 bg-foreground text-background border-foreground shadow-lg z-30"
                        : "bg-background/90 dark:bg-zinc-900/90 text-foreground border-border/80 hover:border-foreground hover:bg-background shadow-xs z-10"
                    }`}
                  >
                    <TechIcon id={tech.id} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />

                    {/* Interactive Tooltip Popover */}
                    <div
                      role="tooltip"
                      id={`tooltip-${tech.id}`}
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-900 text-[11px] font-medium shadow-xl pointer-events-none transition-all duration-200 ${
                        isItemActive
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-1 scale-95"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="font-semibold tracking-tight">{tech.name}</span>
                        <span className="text-[9px] opacity-80 font-mono">{tech.category}</span>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground dark:border-t-zinc-100" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global CSS Keyframes */}
      <style jsx global>{`
        @keyframes orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes counter-orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes counter-orbit-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};
