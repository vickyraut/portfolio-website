"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Projects: React.FC = () => {
  return (
    <SectionWrapper
      id="projects"
      ariaLabelledby="projects-heading"
      bg="primary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="projects-heading"
          overline="SELECTED WORK"
          title="Featured Projects & Engineering Case Studies"
          description="Production systems, autonomous agent workflows, and native mobile apps."
        />
      </Reveal>

      {/* Grid of All Projects (2-column desktop) */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
