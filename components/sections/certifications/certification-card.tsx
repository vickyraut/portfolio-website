"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { TechTag } from "@/components/shared/tech-tag";
import { Button } from "@/components/ui/button";
import { Certification } from "@/lib/types";
import { ArrowUpRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CertificationCardProps {
  certification: Certification;
  className?: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  className,
}) => {
  return (
    <Card
      interactive
      className={cn("w-full h-full p-6 flex flex-col justify-between group", className)}
    >
      <div>
        {/* Header: Award Icon & Issuer */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-overline font-mono text-muted-foreground uppercase tracking-[0.12em]">
            {certification.issuer}
          </span>
          <Award className="size-4 text-muted-foreground shrink-0 group-hover:text-foreground transition-colors duration-200" />
        </div>

        {/* Certification Title */}
        <h3 className="text-h4 font-bold text-foreground tracking-tight mb-2">
          {certification.name}
        </h3>

        {/* Date Badge */}
        <div className="mb-4">
          <span className="font-mono text-meta text-muted-foreground bg-background-secondary px-2.5 py-1 rounded-sm border border-border inline-block">
            Issued: {certification.issueDate}
            {certification.expiryDate ? ` · Expires: ${certification.expiryDate}` : ""}
          </span>
        </div>

        {/* Skills Chips */}
        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {certification.skills.map((skill) => (
              <TechTag key={skill} label={skill} />
            ))}
          </div>
        )}
      </div>

      {/* Credential Action Link */}
      {certification.verifyUrl && (
        <div className="pt-4 border-t border-border mt-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(certification.verifyUrl, "_blank")}
            className="w-full justify-between group/btn"
          >
            <span>Verify Credential</span>
            <ArrowUpRight className="size-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      )}
    </Card>
  );
};
