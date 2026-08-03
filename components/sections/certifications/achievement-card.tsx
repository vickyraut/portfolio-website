"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AchievementEntry } from "@/lib/types";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AchievementCardProps {
  achievement: AchievementEntry;
  className?: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  className,
}) => {
  return (
    <Card
      interactive
      className={cn("w-full h-full p-6 flex flex-col justify-between group", className)}
    >
      <div>
        {/* Header Row: Category Tag & Icon */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em]">
            {achievement.category}
          </span>
          <Trophy className="size-4 text-muted-foreground shrink-0 group-hover:text-foreground transition-colors duration-200" />
        </div>

        {/* Achievement Title */}
        <h3 className="text-h4 font-bold text-foreground tracking-tight mb-1">
          {achievement.title}
        </h3>

        {/* Organization & Year */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-meta text-muted-foreground">
            {achievement.organization} · {achievement.year}
          </span>
        </div>

        {/* Highlight Badge */}
        {achievement.highlight && (
          <div className="mb-3">
            <Badge variant="invert" interactive={false}>
              {achievement.highlight}
            </Badge>
          </div>
        )}

        {/* Description */}
        <p className="text-body text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </Card>
  );
};
