"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { BlogCard } from "./blog-card";
import { blogs } from "@/data/blogs";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { PenLine } from "lucide-react";

export const Blog: React.FC = () => {
  const hasPosts = blogs && blogs.length > 0;

  return (
    <SectionWrapper
      id="blog"
      ariaLabelledby="blog-heading"
      bg="primary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="blog-heading"
          overline="TECHNICAL WRITING"
          title="Technical Writing & Engineering Notes"
          description="Documenting engineering insights, experiments, and lessons learned as I continue exploring AI systems and Android development."
        />
      </Reveal>

      {/* Render Articles or Minimal Editorial Empty State */}
      {hasPosts ? (
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogs.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <Reveal variants={fadeUp}>
          <div className="max-w-[760px] mx-auto">
            <Card
              interactive={false}
              className="p-8 md:p-12 text-center border-dashed border-border bg-card/50 backdrop-blur-xs flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Subtle Editorial Icon */}
              <div className="w-12 h-12 rounded-full border border-border bg-background-secondary flex items-center justify-center mb-5 text-foreground/80 shadow-xs">
                <PenLine className="size-5 stroke-[1.5]" />
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/80 font-mono text-meta text-muted-foreground mb-4">
                <span className="size-1.5 rounded-full bg-foreground/60 animate-pulse" />
                <span className="uppercase tracking-[0.12em] text-[11px]">Drafting in Progress</span>
              </div>

              {/* Empty State Heading */}
              <h3 className="text-h3 font-serif md:text-h2 font-semibold text-foreground tracking-tight mb-3">
                Currently working on my first technical articles.
              </h3>

              {/* Context Description */}
              <p className="text-body text-muted-foreground max-w-[540px] leading-relaxed mx-auto">
                Articles covering multi-agent system design, RAG pipelines, and high-performance Android engineering will be published here as projects conclude.
              </p>
            </Card>
          </div>
        </Reveal>
      )}
    </SectionWrapper>
  );
};
