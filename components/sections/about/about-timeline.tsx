"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milestone } from "@/content/about";
import { fadeUp, staggerContainer } from "@/lib/animations";

export interface AboutTimelineProps {
  milestones: Milestone[];
}

export const AboutTimeline: React.FC<AboutTimelineProps> = ({ milestones }) => {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative border-l border-border pl-6 md:pl-8 space-y-8 my-8 ml-2 md:ml-3"
    >
      {milestones.map((item, index) => (
        <motion.div key={index} variants={fadeUp} className="relative group">
          {/* Milestone Connected Dot */}
          <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground border border-background-secondary group-hover:scale-125 transition-transform duration-180" />

          {/* Monospace Year Label */}
          <p className="text-meta font-mono text-muted-foreground uppercase tracking-wider mb-1">
            {item.year}
          </p>

          {/* Milestone Title */}
          <h4 className="text-h4 font-semibold text-foreground tracking-tight">
            {item.title}
          </h4>

          {/* Milestone Description */}
          <p className="text-body text-muted-foreground mt-1 max-w-prose">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
