"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { AndroidCapability } from "@/content/android";
import {
  Layers,
  Box,
  Smartphone,
  Database,
  Wifi,
  Flame,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Box,
  Smartphone,
  Database,
  Wifi,
  Flame,
};

export interface TechnologyCardProps {
  capability: AndroidCapability;
  className?: string;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  capability,
  className,
}) => {
  const IconComponent = iconMap[capability.icon] || Smartphone;

  return (
    <Card
      interactive
      className={cn("w-full h-full p-5 flex flex-col justify-between group", className)}
    >
      <div>
        {/* Header Row: Line Icon & Monospace Subtitle */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-md border border-border bg-background-secondary flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-200">
            <IconComponent className="size-4 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            {capability.category || "Architecture"}
          </span>
        </div>

        {/* Tech Title */}
        <h4 className="text-h4 font-bold text-foreground tracking-tight mb-1">
          {capability.title}
        </h4>

        {/* Subtitle */}
        <span className="text-meta font-mono text-muted-foreground mb-2 block">
          {capability.subtitle}
        </span>

        {/* Description */}
        <p className="text-body text-muted-foreground leading-relaxed">
          {capability.description}
        </p>
      </div>
    </Card>
  );
};
