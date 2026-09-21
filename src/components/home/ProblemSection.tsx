"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";

const problems = [
  {
    before: "Manual Work",
    pain: "Your team wastes hours on repetitive tasks that never end.",
    after: "Automated Workflows",
    solution: "Intelligent automation that runs 24/7, freeing your team for real work.",
    color: "#4338CA",
    IconBefore: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <rect x="4" y="8" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <rect x="4" y="18" width="24" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <rect x="4" y="28" width="28" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    IconAfter: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <rect x="4" y="8" width="32" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="8,11 12,15 20,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="18" width="24" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="8,21 12,25 20,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="28" width="28" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    before: "Fragmented Systems",
    pain: "Your tools don't talk to each other. Data lives in silos.",
    after: "Connected Intelligence",
    solution: "Unified systems sharing information in real-time across your organisation.",
    color: "#0B57D0",
    IconBefore: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="30" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="10" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    IconAfter: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="15" x2="10" y2="25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="15" x2="30" y2="25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    before: "Outdated Technology",
    pain: "Legacy systems that slow you down and block growth.",
    after: "Modern Infrastructure",
    solution: "Scalable cloud architecture that grows with your business.",
    color: "#B45309",
    IconBefore: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <rect x="8" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <rect x="14" y="26" width="12" height="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="10" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    IconAfter: () => (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <path d="M10 26 Q10 16 20 14 Q30 12 32 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 26 Q6 22 10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="22" cy="26" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="18,24 22,20 26,24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

interface ProblemCardProps {
  p: typeof problems[0];
  index: number;
  reduced: boolean | null;
}

function ProblemCard({ p, index, reduced }: ProblemCardProps) {
  const delay = index * 0.12;

  if (reduced) {
    return (
      <div className="bg-paper p-6 lg:p-7">
        {/* Before */}
        <div className="flex items-center gap-3 mb-3">
          <div className="text-muted" style={{ color: p.color }}>
            <p.IconAfter />
          </div>
          <div
            className="font-mono text-xs text-muted uppercase tracking-widest px-2.5 py-1 border border-line line-through opacity-50"
          >
            {p.before}
          </div>
        </div>

        <p className="text-muted text-xs sm:text-sm mb-4 italic">{p.pain}</p>

        <div className="h-px mb-4" style={{ backgroundColor: p.color, opacity: 0.3 }} />

        <div className="font-heading text-lg font-semibold mb-2" style={{ color: p.color }}>
          {p.after}
        </div>
        <p className="text-muted text-xs sm:text-sm leading-relaxed">{p.solution}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-paper p-6 lg:p-7 group relative overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, backgroundColor: "var(--mist)" }}
    >
      {/* Gradient border sweep on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: p.color }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Icon */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="text-muted transition-opacity"
          style={{ color: p.color }}
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          aria-hidden
        >
          <p.IconAfter />
        </motion.div>

        {/* Strikethrough "before" label */}
        <div className="relative font-mono text-xs text-muted uppercase tracking-widest px-2.5 py-1 border border-line">
          {p.before}
          {/* Animated strikethrough line */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-px origin-left"
            style={{ backgroundColor: p.color }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Pain sentence */}
      <motion.p
        className="text-muted text-xs sm:text-sm mb-4 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {p.pain}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="h-px mb-4 origin-left"
        style={{ backgroundColor: p.color }}
        initial={{ scaleX: 0, opacity: 0.15 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      />

      {/* After — the Nimbrix solution */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="font-heading text-lg font-semibold mb-2" style={{ color: p.color }}>
          {p.after}
        </div>
        <p className="text-muted text-xs sm:text-sm leading-relaxed">{p.solution}</p>
      </motion.div>
    </motion.div>
  );
}

export function ProblemSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-shell border-b border-line bg-mist">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl mb-8 lg:mb-10">
          <FadeUp>
            <SectionLabel number="01">The Problem</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)] tracking-tight text-ink mb-2">
              Technology shouldn&apos;t create{" "}
              <span className="text-muted">more complexity.</span>
            </h2>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
              <span>The problem</span>
              <span className="text-cat-indigo">→</span>
              <span>the Nimbrix way</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Most businesses are drowning in fragmented tools, manual processes, and systems that don&apos;t talk to each other. We engineer the way out.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {problems.map((p, i) => (
            <ProblemCard key={p.before} p={p} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
