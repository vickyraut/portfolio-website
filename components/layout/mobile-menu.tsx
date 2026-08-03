"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { NodeMark } from "@/components/shared/node-mark";
import { X } from "lucide-react";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 md:hidden overflow-y-auto"
        >
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between h-14 border-b border-border pb-4">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center gap-2 text-h4 font-bold tracking-tight text-foreground"
            >
              <span>VR</span>
              <NodeMark size={14} />
            </a>
            <button
              onClick={onClose}
              aria-label="Close Mobile Menu"
              className="p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md cursor-pointer"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.05 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[28px] font-bold text-foreground hover:text-muted-foreground transition-colors tracking-tight"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Footer CTAs inside overlay */}
          <div className="pt-6 border-t border-border flex flex-col gap-4">
            <Button
              variant="secondary"
              className="w-full justify-center"
              onClick={() => {
                onClose();
                window.open("/resume/vicky-raut-resume.pdf", "_blank");
              }}
            >
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
