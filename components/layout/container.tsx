import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "standard" | "wide" | "reading";
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  width = "standard",
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  const widthClasses = {
    standard: "max-w-[1200px]",
    wide: "max-w-[1440px]",
    reading: "max-w-[680px]",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-6 md:px-10 lg:px-16",
        widthClasses[width],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
