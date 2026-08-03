import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  overline?: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  overline,
  description,
  id,
  align = "left",
  className,
  ...props
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCentered && "text-center mx-auto max-w-[760px]",
        className
      )}
      {...props}
    >
      {overline && (
        <p className="text-overline font-mono text-muted-foreground mb-3 uppercase tracking-[0.12em]">
          {overline}
        </p>
      )}

      <h2
        id={id}
        className="text-h2 font-bold text-foreground tracking-tight"
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-body-lg text-muted-foreground mt-4 max-w-[680px]",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
