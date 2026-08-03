"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  className,
}) => {
  return (
    <Card
      interactive={false}
      className={cn("w-full h-full flex flex-col justify-between p-6", className)}
    >
      <div>
        {/* Category Label in Monospace Overline Style */}
        <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em] mb-4 block">
          {category.category}
        </span>

        {/* Technology Pill Chips with Hover Inversion */}
        <div className="flex flex-wrap gap-2">
          {category.items.map((item) => (
            <Badge key={item} variant="skill">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
