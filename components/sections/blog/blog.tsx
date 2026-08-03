"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { BlogCard } from "./blog-card";
import { blogs } from "@/data/blogs";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Blog: React.FC = () => {
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
          overline="TECHNICAL ARTICLES"
          title="Engineering Insights & Deep Dives"
          description="Articles on AI system design, LLM orchestration, and high-performance Android engineering."
        />
      </Reveal>

      {/* 3-Column Blog Card Grid */}
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
    </SectionWrapper>
  );
};
