"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";
import { ExperienceCard } from "./experience-card";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ entries }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative border-l border-border pl-6 md:pl-10 space-y-12 md:space-y-16 ml-3 md:ml-4"
    >
      {entries.map((entry, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div key={index} variants={fadeUp} className="relative group">
            {/* Timeline Dot & Connector */}
            <div className="absolute -left-[31px] md:-left-[47px] top-8 flex items-center">
              {/* Timeline Dot */}
              <span
                className={cn(
                  "w-3 h-3 rounded-full border border-background transition-all duration-200 ease-out",
                  isHovered
                    ? "bg-foreground scale-125 shadow-xs"
                    : "bg-muted-foreground/40 group-hover:bg-foreground group-hover:scale-110"
                )}
              />
              {/* Connector Line */}
              <span
                className={cn(
                  "h-[1px] transition-all duration-200 ease-out",
                  isHovered
                    ? "w-4 md:w-8 bg-foreground"
                    : "w-4 md:w-8 bg-border group-hover:bg-foreground/50"
                )}
              />
            </div>

            {/* Experience Card */}
            <ExperienceCard
              entry={entry}
              onHoverChange={(hovering) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setHoveredIndex(hovering ? index : null);
                }
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
