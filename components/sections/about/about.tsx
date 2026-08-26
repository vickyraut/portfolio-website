"use client";

import React from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AboutTimeline } from "./about-timeline";
import { ProfileOrbit } from "./profile-orbit";
import { aboutData } from "@/content/about";
import { fadeUp } from "@/lib/animations";

export const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      ariaLabelledby="about-heading"
      bg="secondary"
    >
      {/* Section Header */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="about-heading"
          overline={aboutData.overline}
          title={aboutData.heading}
        />
      </Reveal>

      {/* Two Column Layout (40% / 60% split on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Personal Statement + Integrated Profile Orbit (40% width / 5 cols) */}
        <Reveal variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start flex flex-col gap-6">
          <h3 className="text-h3 font-semibold text-foreground tracking-tight leading-snug">
            {aboutData.statement}
          </h3>
          {/* Integrated Interactive Profile Orbital Visual Widget */}
          <ProfileOrbit />
        </Reveal>

        {/* Right Column: Bio Summary + Timeline + Philosophy (60% width / 7 cols) */}
        <Reveal variants={fadeUp} delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
          {/* Professional Bio Paragraph */}
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            {aboutData.bio}
          </p>

          {/* Key Milestones Timeline */}
          <AboutTimeline milestones={aboutData.milestones} />

          {/* Monospace Code Philosophy Comment Motif */}
          <div className="mt-4 p-4 rounded-md border border-border bg-background text-code font-mono text-muted-foreground">
            <code>{aboutData.philosophy}</code>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
};


