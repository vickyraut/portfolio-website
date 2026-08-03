"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { TechTag } from "@/components/shared/tech-tag";
import { Button } from "@/components/ui/button";
import { ProjectData } from "@/lib/types";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";

export interface FeaturedProjectProps {
  project: ProjectData;
  className?: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, className }) => {
  return (
    <Card
      interactive
      className={cn("group w-full p-6 md:p-10 mb-12 border-border bg-card", className)}
    >
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-foreground text-background text-overline font-mono uppercase tracking-[0.12em]">
            <Sparkles className="size-3" />
            FEATURED SPOTLIGHT
          </span>
        </div>
        <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
          Case Study Overview
        </span>
      </div>

      {/* Large Featured Device/Browser Frame Container */}
      <div className="relative w-full aspect-[21/9] min-h-[220px] rounded-lg border border-border bg-background-secondary overflow-hidden mb-8 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-background via-background-secondary to-background p-8 flex flex-col items-center justify-center text-center group-hover:scale-[1.02] transition-transform duration-300 ease-out">
          <span className="font-mono text-overline text-muted-foreground uppercase tracking-[0.12em] mb-2">
            Architecture Overview
          </span>
          <h3 className="text-h2 font-bold text-foreground tracking-tight max-w-[640px]">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Title & Description Header */}
      <div className="mb-8">
        <h3 className="text-h2 font-bold text-foreground tracking-tight mb-2">
          {project.title}
        </h3>
      </div>

      {/* Problem / Solution / Impact 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-border">
        {/* Column 1: Problem */}
        <div className="space-y-2">
          <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em] block">
            PROBLEM
          </span>
          <p className="text-body text-foreground/90 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Column 2: Solution */}
        <div className="space-y-2">
          <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em] block">
            SOLUTION
          </span>
          <p className="text-body text-foreground/90 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Column 3: Impact */}
        <div className="space-y-2">
          <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em] block">
            IMPACT
          </span>
          <p className="text-body text-foreground/90 leading-relaxed font-medium">
            {project.impact || "Delivered scalable production impact and measured performance gains."}
          </p>
        </div>
      </div>

      {/* Bottom Footer: Tech Stack Chips & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          {project.githubUrl && (
            <Button
              variant="secondary"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <GithubIcon className="size-4 mr-2" />
              <span>GitHub</span>
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="primary"
              onClick={() => window.open(project.liveUrl, "_blank")}
              className="group/btn"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="size-4 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
