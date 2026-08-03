"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResearchEntry } from "@/lib/types";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";

export interface ResearchCardProps {
  entry: ResearchEntry;
  className?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ entry, className }) => {
  return (
    <Card
      interactive
      className={cn("w-full p-6 md:p-8 bg-card border-border mb-8 group", className)}
    >
      {/* Conference Venue & Year Tag */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em]">
          {entry.venue} · {entry.year}
        </span>
        <span className="font-mono text-meta text-muted-foreground hidden sm:inline-block">
          {"// PEER_REVIEWED"}
        </span>
      </div>

      {/* Paper Title */}
      <h3 className="text-h3 font-bold text-foreground tracking-tight mb-4 leading-tight">
        {entry.title}
      </h3>

      {/* Abstract Paragraph */}
      <div className="mb-6">
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
          ABSTRACT
        </span>
        <p className="text-body text-foreground/90 leading-relaxed">
          {entry.abstract}
        </p>
      </div>

      {/* Methodology & Key Results 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border mb-6">
        {/* Column 1: Methodology */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
            METHODOLOGY
          </span>
          <p className="text-body text-muted-foreground leading-relaxed">
            {entry.methodology}
          </p>
        </div>

        {/* Column 2: Key Results */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
            KEY RESULTS
          </span>
          <p className="text-body text-foreground/90 font-medium leading-relaxed">
            {entry.results}
          </p>
        </div>
      </div>

      {/* Bottom Action Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {entry.paperUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(entry.paperUrl, "_blank")}
            className="group/btn"
          >
            <FileText className="size-4 mr-1.5" />
            <span>Read Paper</span>
            <ArrowUpRight className="size-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        )}

        {entry.codeUrl && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(entry.codeUrl, "_blank")}
          >
            <GithubIcon className="size-4 mr-1.5" />
            <span>Source Code</span>
          </Button>
        )}
      </div>
    </Card>
  );
};
