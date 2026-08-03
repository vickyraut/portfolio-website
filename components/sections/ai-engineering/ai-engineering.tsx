"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CapabilityCard } from "./capability-card";
import { ProcessStrip } from "./process-strip";
import { aiCapabilities } from "@/data/ai";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const AIEngineering: React.FC = () => {
  return (
    <SectionWrapper
      id="ai-engineering"
      ariaLabelledby="ai-engineering-heading"
      bg="secondary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="ai-engineering-heading"
          overline="AI ENGINEERING & SYSTEMS"
          title="Autonomous Agents, RAG & LLM Architecture"
          description="A capability showcase focused on system design, probabilistic reasoning, and production execution."
        />
      </Reveal>

      {/* 4-Column Capability Grid */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {aiCapabilities.map((capability) => (
          <motion.div key={capability.id} variants={fadeUp}>
            <CapabilityCard capability={capability} />
          </motion.div>
        ))}
      </motion.div>

      {/* Process Strip Flow Diagram */}
      <ProcessStrip />
    </SectionWrapper>
  );
};
