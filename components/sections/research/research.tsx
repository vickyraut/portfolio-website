"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ResearchCard } from "./research-card";
import { research } from "@/data/research";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Research: React.FC = () => {
  return (
    <SectionWrapper
      id="research"
      ariaLabelledby="research-heading"
      bg="secondary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="research-heading"
          overline="RESEARCH & PUBLICATIONS"
          title="Peer-Reviewed Publications & Technical Papers"
          description="Academic research focusing on multi-agent orchestration, retrieval systems, and model optimization."
        />
      </Reveal>

      {/* Editorial Single-Column Reading List */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-[840px] mx-auto space-y-8"
      >
        {research.map((entry) => (
          <motion.div key={entry.title} variants={fadeUp}>
            <ResearchCard entry={entry} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
