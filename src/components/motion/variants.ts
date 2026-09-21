import type { Variants } from "framer-motion";

/** Shared premium easing – same cubic-bezier used across the whole site */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.45,
  base: 0.6,
  slow: 0.8,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.09,
  loose: 0.12,
} as const;

/* ─── Fade-up (most common scroll reveal) ─── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/* ─── Fade-in (no Y movement) ─── */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/* ─── Slide from right ─── */
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/* ─── Stagger container ─── */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.base,
      delayChildren: 0.05,
    },
  },
};

/* ─── Stagger item (used as child of staggerContainer) ─── */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/* ─── Scale-in (for icons, badges) ─── */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASE },
  },
};
