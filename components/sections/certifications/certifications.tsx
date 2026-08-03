"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CertificationCard } from "./certification-card";
import { AchievementCard } from "./achievement-card";
import { certifications, achievements } from "@/data/certifications";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Certifications: React.FC = () => {
  return (
    <SectionWrapper
      id="certifications"
      ariaLabelledby="certifications-heading"
      bg="secondary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="certifications-heading"
          overline="RECOGNITION & CREDENTIALS"
          title="Certifications & Notable Achievements"
          description="Verified technical credentials, leadership roles, and academic honors."
        />
      </Reveal>

      {/* Sub-Section 1: Verified Certifications */}
      <div className="mb-16">
        <Reveal variants={fadeUp}>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
            <h3 className="text-h4 font-mono font-semibold uppercase tracking-[0.1em] text-foreground">
              {"01 // TECHNICAL CERTIFICATIONS"}
            </h3>
            <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
              {"// VERIFIED_CREDENTIALS"}
            </span>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={fadeUp}>
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sub-Section 2: Key Achievements */}
      <div>
        <Reveal variants={fadeUp}>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
            <h3 className="text-h4 font-mono font-semibold uppercase tracking-[0.1em] text-foreground">
              {"02 // KEY ACHIEVEMENTS & HONORS"}
            </h3>
            <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
              {"// LEADERSHIP_&_AWARDS"}
            </span>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <AchievementCard achievement={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
