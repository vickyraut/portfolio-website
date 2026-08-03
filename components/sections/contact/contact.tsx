"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "./contact-form";
import { socialLinks } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";
import { Mail, FileText, Check, Copy } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const emailLink = socialLinks.find((l) => l.label === "Email")?.href.replace("mailto:", "") || "contact@vickyraut.com";
  const linkedinLink = socialLinks.find((l) => l.label === "LinkedIn")?.href || "https://linkedin.com/in/vickyraut";
  const githubLink = socialLinks.find((l) => l.label === "GitHub")?.href || "https://github.com/vickyraut";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id="contact"
      ariaLabelledby="contact-heading"
      bg="primary"
    >
      {/* Section Heading */}
      <Reveal variants={fadeUp}>
        <SectionHeading
          id="contact-heading"
          overline="GET IN TOUCH"
          title="Let's Build Something Intentional"
          description="Have a project in mind or looking for technical leadership in AI Engineering or Android?"
        />
      </Reveal>

      {/* 50/50 Desktop Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & Social Links */}
        <Reveal variants={fadeUp} className="lg:col-span-5 space-y-8">
          {/* Availability Status Badge */}
          <Badge variant="outline" interactive={false} className="gap-2 px-3 py-1.5 rounded-sm bg-background-secondary font-mono text-meta text-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Available for Q3/Q4 AI & Android contracts</span>
          </Badge>

          <div className="space-y-4">
            <h3 className="text-h2 font-bold text-foreground tracking-tight">
              Start a Conversation
            </h3>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Whether you are architecting a multi-agent AI pipeline, building an offline-first Android app, or looking for an engineering consultant, my inbox is always open.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-4 pt-4 border-t border-border">
            {/* Email Contact Row */}
            <div className="flex items-center justify-between p-3.5 rounded-md border border-border bg-card group hover:border-foreground transition-colors duration-200">
              <a
                href={`mailto:${emailLink}`}
                className="flex items-center gap-3 text-body font-medium text-foreground hover:underline"
              >
                <Mail className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>{emailLink}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="size-4 text-foreground" /> : <Copy className="size-4" />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-md border border-border bg-card text-body-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <GithubIcon className="size-4 text-muted-foreground" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-md border border-border bg-card text-body-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                <LinkedinIcon className="size-4 text-muted-foreground" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open("/resume/vicky-raut-resume.pdf", "_blank")}
                className="w-full justify-center"
              >
                <FileText className="size-4 mr-2" />
                <span>Download Official Resume</span>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Contact Form */}
        <Reveal variants={fadeUp} className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-lg border border-border bg-card shadow-xs">
            <h4 className="text-h4 font-bold text-foreground tracking-tight mb-6 pb-4 border-b border-border">
              Send a Direct Message
            </h4>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
};
