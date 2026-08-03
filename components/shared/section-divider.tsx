import React from "react";
import { cn } from "@/lib/utils";

export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  withNodeMark?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  withNodeMark = false,
  className,
  ...props
}) => {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn("w-full relative flex items-center justify-center my-0", className)}
      {...props}
    >
      <div className="w-full border-t border-border" />
      {withNodeMark && (
        <span
          className="absolute w-1.5 h-1.5 rounded-full bg-foreground border border-background shadow-xs"
          title="Node Mark"
        />
      )}
    </div>
  );
};
