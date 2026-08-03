"use client";

import React from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export interface RevealProps extends HTMLMotionProps<"div"> {
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  children: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

