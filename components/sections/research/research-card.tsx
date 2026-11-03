"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResearchEntry } from "@/lib/types";
import { ArrowUpRight, FileText, Award, Calendar, BookOpen, User } from "lucide-react";
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
      {/* Top Header Tag: Journal & Peer-Reviewed Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em]">
          {entry.venue}
        </span>
        <Badge variant="invert" interactive={false} className="font-mono">
          Peer-Reviewed Publication
        </Badge>
      </div>

      {/* Paper Title */}
      <h3 className="text-h3 font-bold text-foreground tracking-tight mb-4 leading-tight">
        {entry.title}
      </h3>

      {/* Verified Publication Metadata Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {entry.journal && (
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-foreground bg-background-secondary px-2.5 py-1 rounded-sm border-border flex items-center gap-1.5"
          >
            <BookOpen className="size-3 text-muted-foreground shrink-0" />
            <span>{entry.journal}</span>
          </Badge>
        )}
        {entry.volume && (
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-muted-foreground bg-background-secondary px-2.5 py-1 rounded-sm border-border"
          >
            {entry.volume}
          </Badge>
        )}
        {entry.issue && (
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-muted-foreground bg-background-secondary px-2.5 py-1 rounded-sm border-border"
          >
            {entry.issue}
          </Badge>
        )}
        {(entry.publicationDate || entry.year) && (
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-muted-foreground bg-background-secondary px-2.5 py-1 rounded-sm border-border flex items-center gap-1.5"
          >
            <Calendar className="size-3 text-muted-foreground shrink-0" />
            <span>{entry.publicationDate || entry.year}</span>
          </Badge>
        )}
        {entry.author && (
          <Badge
            variant="outline"
            interactive={false}
            className="font-mono text-meta text-muted-foreground bg-background-secondary px-2.5 py-1 rounded-sm border-border flex items-center gap-1.5"
          >
            <User className="size-3 text-muted-foreground shrink-0" />
            <span>Author: {entry.author}</span>
          </Badge>
        )}
      </div>

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
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
        {entry.paperUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(entry.paperUrl, "_blank", "noopener,noreferrer")}
            aria-label={`Read research paper: ${entry.title}`}
            className="group/btn"
          >
            <FileText className="size-4 mr-1.5" />
            <span>Read Research Paper</span>
            <ArrowUpRight className="size-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        )}

        {entry.codeUrl && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(entry.codeUrl, "_blank", "noopener,noreferrer")}
            aria-label={`View source code repository for ${entry.title}`}
          >
            <GithubIcon className="size-4 mr-1.5" />
            <span>Source Code</span>
          </Button>
        )}

        {entry.certificateUrl && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(entry.certificateUrl, "_blank", "noopener,noreferrer")}
            aria-label={`View publication certificate for ${entry.title}`}
          >
            <Award className="size-4 mr-1.5" />
            <span>Certificate</span>
          </Button>
        )}
      </div>
    </Card>
  );
};
