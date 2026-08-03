"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { navItems } from "@/lib/constants";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { NodeMark } from "@/components/shared/node-mark";
import { MobileMenu } from "./mobile-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHidden = scrollDirection === "down" && !isMobileMenuOpen;

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md focus:outline-none focus:ring-2 focus:ring-foreground"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -90 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-200 ease-out",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-background border-b border-transparent"
        )}
      >
        <Container width="wide">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-200 ease-out",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Wordmark & Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-2 text-h4 font-bold tracking-tight text-foreground group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md p-1"
            >
              <span>VR</span>
              <NodeMark size={14} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-foreground"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative py-1 text-foreground/80 hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-xs"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out" />
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => window.open("/resume/vicky-raut-resume.pdf", "_blank")}
              >
                Resume
              </Button>

              {/* Mobile Hamburger Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open Navigation Menu"
                className="lg:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md cursor-pointer"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
