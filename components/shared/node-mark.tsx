import React from "react";
import { cn } from "@/lib/utils";

export interface NodeMarkProps extends React.SVGProps<SVGSVGElement> {
  variant?: "dark" | "light";
  size?: number;
}

export const NodeMark: React.FC<NodeMarkProps> = ({
  variant = "dark",
  size = 16,
  className,
  ...props
}) => {
  const isLight = variant === "light";
  const strokeColor = isLight ? "#FFFFFF" : "#000000";
  const fillColor = isLight ? "#FFFFFF" : "#000000";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
      {...props}
    >
      {/* Node Dot */}
      <circle cx="4" cy="8" r="2.5" fill={fillColor} />
      {/* Connector Line / Bracket */}
      <path
        d="M6.5 8H13.5M11.5 5.5L14 8L11.5 10.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
