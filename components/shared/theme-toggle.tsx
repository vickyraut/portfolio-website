"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        aria-label="Toggle theme"
        className="w-9 h-9 p-0 flex items-center justify-center border-border"
      >
        <span className="size-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 p-0 flex items-center justify-center border-border hover:border-foreground transition-colors"
    >
      {isDark ? (
        <Sun className="size-4 text-foreground transition-transform duration-200" />
      ) : (
        <Moon className="size-4 text-foreground transition-transform duration-200" />
      )}
    </Button>
  );
};
