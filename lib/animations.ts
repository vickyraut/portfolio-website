import { Variants } from "framer-motion";

/**
 * Standard cubic-bezier easing curve for precision, premium ease-out feel
 * Spec: cubic-bezier(0.22, 1, 0.36, 1) - DESIGN.md Section 9
 */
export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

/**
 * Entrance animation duration (seconds)
 */
export const DURATION_ENTRANCE = 0.5;

/**
 * Hover transition duration (seconds)
 */
export const DURATION_HOVER = 0.22;

/**
 * Page transition duration (seconds)
 */
export const DURATION_PAGE = 0.25;

/**
 * Default slide distance for entrance transitions (px)
 */
export const SLIDE_DISTANCE = 16;

/**
 * Fade Up variant (slides up 16px while fading in)
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: SLIDE_DISTANCE,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_ENTRANCE,
      ease: EASE_OUT_QUINT,
    },
  },
};

/**
 * Fade Down variant (slides down 16px while fading in)
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -SLIDE_DISTANCE,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_ENTRANCE,
      ease: EASE_OUT_QUINT,
    },
  },
};

/**
 * Fade Left variant (slides left 16px while fading in)
 */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: SLIDE_DISTANCE,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_ENTRANCE,
      ease: EASE_OUT_QUINT,
    },
  },
};

/**
 * Fade Right variant (slides right 16px while fading in)
 */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -SLIDE_DISTANCE,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_ENTRANCE,
      ease: EASE_OUT_QUINT,
    },
  },
};

/**
 * Stagger Container variant (choreographs children entrances)
 * @param staggerMs Delay between child animations in seconds (default: 0.08s / 80ms)
 * @param delayChildren Initial delay before starting children animations (default: 0)
 */
export const staggerContainer = (
  staggerMs: number = 0.08,
  delayChildren: number = 0
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerMs,
      delayChildren,
    },
  },
});

/**
 * Hover Lift variant (lifts card by -4px on hover)
 */
export const hoverLift: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    transition: {
      duration: DURATION_HOVER,
      ease: "easeOut",
    },
  },
  hover: {
    y: -4,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    transition: {
      duration: DURATION_HOVER,
      ease: EASE_OUT_QUINT,
    },
  },
};

/**
 * Page Transition variant (smooth route/page crossfade)
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION_PAGE,
      ease: EASE_OUT_QUINT,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION_PAGE,
      ease: "easeIn",
    },
  },
};
