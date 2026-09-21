"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { fadeUpVariants } from "./variants";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Override: animate on mount instead of whileInView */
  onMount?: boolean;
}

/**
 * Wraps children in a scroll-triggered fade-up reveal.
 * Skips animation entirely when prefers-reduced-motion is set.
 */
export function FadeUp({ children, className, delay = 0, onMount = false }: FadeUpProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const sharedProps = {
    initial: "hidden",
    variants: {
      hidden: fadeUpVariants.hidden,
      visible: {
        ...(fadeUpVariants.visible as object),
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          delay,
        },
      },
    },
    className,
  };

  if (onMount) {
    return (
      <motion.div animate="visible" {...sharedProps}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      {...sharedProps}
    >
      {children}
    </motion.div>
  );
}
