"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay between children in seconds */
  stagger?: number;
  /** Delay before first child animates */
  delayChildren?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.05,
}: StaggerGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
