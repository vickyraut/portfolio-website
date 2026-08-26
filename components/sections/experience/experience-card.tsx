"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechTag } from "@/components/shared/tech-tag";
import { ExperienceEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  entry: ExperienceEntry;
  onHoverChange?: (isHovered: boolean) => void;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  entry,
  onHoverChange,
  className,
}) => {
  return (
    <Card
      interactive
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn("w-full transition-all duration-220 ease-out", className)}
    >
      {/* Header Row: Company, Role & Duration */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-border">
        <div>
          <h3 className="text-h4 font-bold text-foreground tracking-tight">
            {entry.company}
          </h3>
          <p className="text-body font-medium text-muted-foreground mt-0.5">
            {entry.role}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 sm:self-start">
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-muted-foreground bg-background-secondary px-3 py-1 rounded-sm border-border"
          >
            {entry.startDate} - {entry.endDate}
          </Badge>
        </div>
      </div>

      {/* Achievements List with Technical Dash Bullet */}
      <ul className="space-y-2.5 mb-6 text-body text-foreground/90">
        {entry.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span aria-hidden="true" className="font-mono text-muted-foreground shrink-0 select-none">
              –
            </span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack Chips Row */}
      <div className="flex flex-wrap gap-2 pt-2">
        {entry.techStack.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>
    </Card>
  );
};
