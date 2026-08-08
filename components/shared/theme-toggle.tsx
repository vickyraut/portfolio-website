"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 p-0 flex items-center justify-center shrink-0 border-border hover:border-foreground transition-colors"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4 text-foreground transition-transform duration-200 shrink-0" />
        ) : (
          <Moon className="size-4 text-foreground transition-transform duration-200 shrink-0" />
        )
      ) : (
        <span className="size-4 block" />
      )}
    </Button>
  );
};
