"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockupScreens } from "@/content/android";
import { Wifi, Signal, Battery, Layers, CheckCircle } from "lucide-react";

export const PhoneMockup: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % mockupScreens.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeScreen = mockupScreens[currentScreenIndex];

  return (
    <div className="relative w-full max-w-[320px] aspect-[9/18] mx-auto select-none">
      {/* Outer Phone Device Frame */}
      <div className="w-full h-full rounded-[40px] border-[10px] border-foreground bg-background relative shadow-modal overflow-hidden flex flex-col justify-between">
        {/* Top Camera Punch Hole / Speaker Bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-foreground rounded-b-2xl z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-background/20" />
        </div>

        {/* Status Bar */}
        <div className="pt-2 px-6 flex items-center justify-between text-foreground text-[10px] font-mono font-medium z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="size-3" />
            <Wifi className="size-3" />
            <Battery className="size-3.5" />
          </div>
        </div>

        {/* Dynamic Crossfading Screen Content */}
        <div className="relative flex-1 p-5 flex flex-col justify-between overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col justify-between pt-6 pb-2"
            >
              {/* App Navigation Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-foreground" />
                  <span className="text-overline font-mono font-bold text-foreground">
                    {activeScreen.tag}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              </div>

              {/* Central App Card UI Mockup */}
              <div className="my-auto space-y-4">
                <div className="p-4 rounded-lg border border-border bg-background-secondary space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                    ACTIVE MODULE
                  </span>
                  <h4 className="text-h4 font-bold text-foreground tracking-tight">
                    {activeScreen.title}
                  </h4>
                  <p className="text-meta text-muted-foreground">
                    {activeScreen.subtitle}
                  </p>
                </div>

                {/* Metric Badge Box */}
                <div className="p-3 rounded-md bg-foreground text-background flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider">
                    {activeScreen.metrics}
                  </span>
                  <CheckCircle className="size-4" />
                </div>
              </div>

              {/* Bottom Screen Indicator Dots */}
              <div className="flex items-center justify-center gap-2 pt-4">
                {mockupScreens.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentScreenIndex
                        ? "w-6 bg-foreground"
                        : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="pb-2 flex justify-center z-20">
          <div className="w-32 h-1 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
