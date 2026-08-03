"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SkillCategoryCard } from "./skill-category-card";
import { skills } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Skills: React.FC = () => {
  return (
    <SectionWrapper
      id="skills"
      ariaLabelledby="skills-heading"
      bg="secondary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="skills-heading"
          overline="SKILLS & CAPABILITIES"
          title="Technical Stack & Developer Toolbox"
          description="Production-tested frameworks, agentic AI systems, and native mobile architecture."
        />
      </Reveal>

      {/* Responsive Grid of Category Cards */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skills.map((category) => (
          <motion.div key={category.category} variants={fadeUp}>
            <SkillCategoryCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
