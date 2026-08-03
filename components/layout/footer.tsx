"use client";

import React from "react";
import { Container } from "./container";
import { NodeMark } from "@/components/shared/node-mark";
import { GithubIcon } from "@/components/shared/github-icon";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { navItems, socialLinks, siteMetadata } from "@/lib/constants";
import { Mail, ArrowUp, FileText } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailLink = socialLinks.find((l) => l.label === "Email")?.href || "mailto:contact@vickyraut.com";
  const linkedinLink = socialLinks.find((l) => l.label === "LinkedIn")?.href || "https://linkedin.com/in/vickyraut";
  const githubLink = socialLinks.find((l) => l.label === "GitHub")?.href || "https://github.com/vickyraut";

  return (
    <footer className="w-full bg-foreground text-background py-16 md:py-20 border-t border-neutral-800 relative" aria-label="Site Footer">
      <Container width="standard">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <NodeMark className="size-5 text-background" />
              <span className="font-mono text-h4 font-bold tracking-tight text-background">
                {siteMetadata.name.toUpperCase()}
              </span>
            </div>

            <p className="text-body-sm text-neutral-400 max-w-sm leading-relaxed">
              AI Engineer & Android Developer crafting autonomous agent systems, hybrid RAG pipelines, and high-performance native mobile applications.
            </p>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-overline font-mono text-neutral-400 uppercase tracking-[0.12em] block mb-2">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-body-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-background hover:underline transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Credentials (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-overline font-mono text-neutral-400 uppercase tracking-[0.12em] block mb-2">
              CONNECT
            </span>
            <div className="flex flex-col space-y-2.5 text-body-sm">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-background transition-colors"
              >
                <GithubIcon className="size-4" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-background transition-colors"
              >
                <LinkedinIcon className="size-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={emailLink}
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-background transition-colors"
              >
                <Mail className="size-4" />
                <span>Email</span>
              </a>

              <a
                href="/resume/vicky-raut-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-background transition-colors pt-1"
              >
                <FileText className="size-4" />
                <span>Official Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-meta font-mono text-neutral-400">
          <div>
            © {currentYear} {siteMetadata.name}. All rights reserved.
          </div>

          <div className="text-center md:text-right">
            Built with Next.js, TypeScript and Tailwind CSS
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-neutral-700 hover:border-background text-neutral-300 hover:text-background transition-colors shrink-0"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
