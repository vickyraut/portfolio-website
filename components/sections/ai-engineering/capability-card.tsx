"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { AICapability } from "@/content/ai";
import {
  Bot,
  Cpu,
  Database,
  Network,
  MessageSquareCode,
  Workflow,
  Wrench,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Cpu,
  Database,
  Network,
  MessageSquareCode,
  Workflow,
  Wrench,
  CheckCircle2,
};

export interface CapabilityCardProps {
  capability: AICapability;
  className?: string;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  capability,
  className,
}) => {
  const IconComponent = iconMap[capability.icon] || Bot;

  return (
    <Card
      interactive
      className={cn("w-full h-full p-6 flex flex-col justify-between group", className)}
    >
      <div>
        {/* Abstract Minimal Line Icon */}
        <div className="w-10 h-10 rounded-md border border-border bg-background-secondary flex items-center justify-center text-foreground mb-4 group-hover:bg-foreground group-hover:text-background transition-colors duration-200">
          <IconComponent className="size-5 stroke-[1.5]" />
        </div>

        {/* Capability Title */}
        <h3 className="text-h4 font-bold text-foreground tracking-tight mb-2">
          {capability.title}
        </h3>

        {/* Capability Explanation Description */}
        <p className="text-body text-muted-foreground leading-relaxed">
          {capability.description}
        </p>
      </div>
    </Card>
  );
};
