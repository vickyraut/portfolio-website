"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/content/ai";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export const ProcessStrip: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full mt-12 pt-8 border-t border-border"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em]">
          EXECUTION FLOW // AGENTIC PIPELINE ARCHITECTURE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            variants={fadeUp}
            className="relative p-5 rounded-md border border-border bg-card flex flex-col justify-between group hover:border-foreground transition-colors duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-meta font-bold text-foreground bg-background-secondary px-2 py-0.5 rounded-sm border border-border">
                  {step.step}
                </span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="size-4 text-muted-foreground hidden lg:block" />
                )}
              </div>

              <h4 className="text-overline font-mono font-semibold text-foreground uppercase tracking-[0.08em] mb-1">
                {step.label}
              </h4>
              <p className="text-meta text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
