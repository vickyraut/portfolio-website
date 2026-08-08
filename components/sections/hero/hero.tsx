"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./hero-visual";
import { ScrollIndicator } from "./scroll-indicator";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[calc(100dvh-80px)] flex items-center justify-center bg-background py-12 lg:py-0 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Hero Text & CTAs (60% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Overline Role Label */}
            <motion.p
              variants={fadeUp}
              className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em] mb-4"
            >
              AI ENGINEER · ANDROID DEVELOPER
            </motion.p>

            {/* Main Display Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-display font-bold text-foreground tracking-tight max-w-[720px]"
            >
              Building intelligent systems, from LLM agents to Android apps.
            </motion.h1>

            {/* Subheading Description */}
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-muted-foreground mt-6 max-w-[560px]"
            >
              Specializing in agentic AI workflows, RAG systems, and native high-performance Android engineering.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Button
                variant="primary"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.hash = "projects";
                  }
                }}
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                onClick={() => window.open("/resume/vicky-raut-resume.pdf", "_blank")}
              >
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Hero Graphic Visual (40% width on desktop) */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroVisual />
          </motion.div>
        </motion.div>
      </div>

      {/* Breathing Scroll Indicator at bottom center */}
      <ScrollIndicator />
    </section>
  );
};
