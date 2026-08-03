"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PhoneMockup } from "./phone-mockup";
import { TechnologyCard } from "./technology-card";
import { androidCapabilities } from "@/data/android";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Android: React.FC = () => {
  return (
    <SectionWrapper
      id="android"
      ariaLabelledby="android-heading"
      bg="primary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="android-heading"
          overline="ANDROID ENGINEERING"
          title="Native Mobile Architecture & High-Performance Apps"
          description="Crafting reactive, offline-first Android software with modern Kotlin toolchains."
        />
      </Reveal>

      {/* Two Column Layout (Phone Mockup Left / Tech Grid Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Interactive Phone Device Mockup (5 cols) */}
        <Reveal variants={fadeUp} className="lg:col-span-5 flex justify-center">
          <PhoneMockup />
        </Reveal>

        {/* Right Column: 6 Architectural Technology Cards (7 cols) */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {androidCapabilities.map((capability) => (
            <motion.div key={capability.id} variants={fadeUp}>
              <TechnologyCard capability={capability} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
