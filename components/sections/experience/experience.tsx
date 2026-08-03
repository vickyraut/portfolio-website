"use client";

import React from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ExperienceTimeline } from "./experience-timeline";
import { experience } from "@/data/experience";
import { fadeUp } from "@/lib/animations";

export const Experience: React.FC = () => {
  return (
    <SectionWrapper
      id="experience"
      ariaLabelledby="experience-heading"
      bg="primary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="experience-heading"
          overline="EXPERIENCE"
          title="Work History & Milestones"
          description="A record of technical leadership, agentic AI architecture, and production Android engineering."
        />
      </Reveal>

      {/* Experience Timeline */}
      <ExperienceTimeline entries={experience} />
    </SectionWrapper>
  );
};
