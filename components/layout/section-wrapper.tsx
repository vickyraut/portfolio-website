import React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerProps } from "./container";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  ariaLabelledby?: string;
  bg?: "primary" | "secondary" | "invert";
  useContainer?: boolean;
  containerWidth?: ContainerProps["width"];
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  ariaLabelledby,
  bg = "primary",
  useContainer = true,
  containerWidth = "standard",
  className,
  children,
  ...props
}) => {
  const bgClasses = {
    primary: "bg-background text-foreground",
    secondary: "bg-background-secondary text-foreground",
    invert: "bg-invert-bg text-invert-fg",
  };

  const content = useContainer ? (
    <Container width={containerWidth}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-20 md:py-30 lg:py-40 w-full relative",
        bgClasses[bg],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
};
