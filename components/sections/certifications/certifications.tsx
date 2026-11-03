"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { CertificationCard } from "./certification-card";
import { AchievementCard } from "./achievement-card";
import { certifications, achievements } from "@/data/certifications";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GraduationCap } from "lucide-react";

export const Certifications: React.FC = () => {
  const hasCertifications = certifications && certifications.length > 0;
  const hasAchievements = achievements && achievements.length > 0;
  const hasAnyCredentials = hasCertifications || hasAchievements;

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
          overline="CONTINUOUS LEARNING"
          title="Professional Development"
          description="Continuously strengthening my engineering foundation through hands-on projects, technical learning, and practical implementation."
        />
      </Reveal>

      {/* Render Credentials if Available, or Minimal Clean Empty State */}
      {hasAnyCredentials ? (
        <div className="space-y-16">
          {hasCertifications && (
            <div>
              <Reveal variants={fadeUp}>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
                  <h3 className="text-h4 font-mono font-semibold uppercase tracking-[0.1em] text-foreground">
                    {"01 / Technical Certifications"}
                  </h3>
                  <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
                    {"Verified Credentials"}
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
          )}

          {hasAchievements && (
            <div>
              <Reveal variants={fadeUp}>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
                  <h3 className="text-h4 font-mono font-semibold uppercase tracking-[0.1em] text-foreground">
                    {"02 / Achievements & Recognition"}
                  </h3>
                  <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
                    {"Leadership & Awards"}
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
          )}
        </div>
      ) : (
        <Reveal variants={fadeUp}>
          <div className="max-w-[760px] mx-auto">
            <Card
              interactive={false}
              className="p-8 md:p-12 text-center border-dashed border-border bg-card/50 backdrop-blur-xs flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Subtle Academic / Engineering Icon */}
              <div className="w-12 h-12 rounded-full border border-border bg-background-secondary flex items-center justify-center mb-5 text-foreground/80 shadow-xs">
                <GraduationCap className="size-5 stroke-[1.5]" />
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/80 font-mono text-meta text-muted-foreground mb-4">
                <span className="size-1.5 rounded-full bg-foreground/60" />
                <span className="uppercase tracking-[0.12em] text-[11px]">Engineering Track</span>
              </div>

              {/* Empty State Heading */}
              <h3 className="text-h3 font-serif md:text-h2 font-semibold text-foreground tracking-tight mb-3">
                Focused on building practical engineering experience.
              </h3>

              {/* Context Description */}
              <p className="text-body text-muted-foreground max-w-[540px] leading-relaxed mx-auto">
                Prioritizing real-world system architecture, applied deep learning research, and open-source implementation. Verified credentials will be documented as earned.
              </p>
            </Card>
          </div>
        </Reveal>
      )}
    </SectionWrapper>
  );
};
