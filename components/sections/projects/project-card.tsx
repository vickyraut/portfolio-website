"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { TechTag } from "@/components/shared/tech-tag";
import { Button } from "@/components/ui/button";
import { ProjectData } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const category =
    project.category ||
    (project.techStack.includes("Kotlin") || project.techStack.includes("Android")
      ? "Android App"
      : project.techStack.includes("LangChain") ||
        project.techStack.includes("Python") ||
        project.techStack.includes("FastAPI")
      ? "AI Project"
      : "Featured Project");

  return (
    <Card
      interactive
      className={cn("group flex flex-col justify-between h-full p-6 md:p-8", className)}
    >
      <div>
        {/* Project Thumbnail Image / Frame */}
        <div className="relative w-full aspect-video rounded-md border border-border bg-background-secondary overflow-hidden mb-6 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-background-secondary via-background to-background-secondary flex flex-col items-center justify-center p-6 text-center group-hover:scale-[1.03] transition-transform duration-300 ease-out">
            <span className="font-mono text-overline text-muted-foreground uppercase tracking-[0.12em] mb-1">
              {category}
            </span>
            <span className="text-h4 font-semibold text-foreground tracking-tight">
              {project.title}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-h4 font-bold text-foreground tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Solution Summary */}
        <p className="text-body text-muted-foreground leading-relaxed mb-6">
          {project.solution}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Card Action Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="group/btn"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="size-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        )}

        {project.githubUrl && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <GithubIcon className="size-4 mr-1.5" />
            <span>GitHub</span>
          </Button>
        )}
      </div>
    </Card>
  );
};
