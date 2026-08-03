import { RefObject } from "react";
import { useInView as useFramerInView } from "framer-motion";

export function useInView(ref: RefObject<Element | null>): boolean {
  return useFramerInView(ref, { once: true });
}
