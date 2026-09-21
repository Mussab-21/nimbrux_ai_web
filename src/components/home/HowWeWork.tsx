"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";

const steps = [
  {
    number: "01",
    label: "Discover",
    description: "We start by understanding your business, not your technology. What problem needs solving? What's the outcome you need?",
    color: "#4338CA",
  },
  {
    number: "02",
    label: "Assess",
    description: "Audit your current systems, data flows, and technology stack. Identify the highest-leverage automation and modernisation opportunities.",
    color: "#0B57D0",
  },
  {
    number: "03",
    label: "Design",
    description: "Architecture diagrams, UX wireframes, and a phased implementation roadmap. No surprises during build.",
    color: "#B45309",
  },
  {
    number: "04",
    label: "Build",
    description: "Agile development in focused sprints. Weekly progress. Working software shipped early, refined continuously.",
    color: "#0F766E",
  },
  {
    number: "05",
    label: "Deploy",
    description: "Production-grade deployment, training, and go-live support. We don't disappear at handoff.",
    color: "#4338CA",
  },
  {
    number: "06",
    label: "Optimise",
    description: "Post-launch monitoring, performance tuning, and user feedback integration. Systems improve over time.",
    color: "#0B57D0",
  },
  {
    number: "07",
    label: "Scale",
    description: "Managed services, new capabilities, and ongoing partnership as your business grows. From project to long-term technology partner.",
    color: "#B45309",
  },
];

function CompactTimeline() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* 4 + 3 Grid */}
      <div className="space-y-4">
        {/* Row 1: Steps 01 - 04 */}
        <div className="relative">
          {/* Horizontal connecting track across Row 1 */}
          <div className="hidden lg:block absolute top-5 left-6 right-6 h-px bg-line" aria-hidden />
          {!reduced && (
            <motion.div
              className="hidden lg:block absolute top-5 left-6 right-6 h-px bg-gradient-to-r from-cat-indigo via-cat-blue to-cat-amber origin-left"
              style={{ scaleX: lineWidth as unknown as number }}
              aria-hidden
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.slice(0, 4).map((step) => (
              <div
                key={step.number}
                className="bg-mist p-4 border border-line hover:border-cat-indigo/40 transition-colors group relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold relative z-10 bg-paper transition-all"
                    style={{ borderColor: `${step.color}60`, color: step.color }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-heading text-sm font-semibold" style={{ color: step.color }}>
                    {step.label}
                  </h3>
                </div>
                <p className="text-muted text-xs leading-relaxed line-clamp-3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Steps 05 - 07 */}
        <div className="relative">
          {/* Horizontal connecting track across Row 2 */}
          <div className="hidden lg:block absolute top-5 left-6 right-6 h-px bg-line" aria-hidden />
          {!reduced && (
            <motion.div
              className="hidden lg:block absolute top-5 left-6 right-6 h-px bg-gradient-to-r from-cat-teal via-cat-indigo to-cat-amber origin-left"
              style={{ scaleX: lineWidth as unknown as number }}
              aria-hidden
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {steps.slice(4, 7).map((step) => (
              <div
                key={step.number}
                className="bg-mist p-4 border border-line hover:border-cat-indigo/40 transition-colors group relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold relative z-10 bg-paper transition-all"
                    style={{ borderColor: `${step.color}60`, color: step.color }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-heading text-sm font-semibold" style={{ color: step.color }}>
                    {step.label}
                  </h3>
                </div>
                <p className="text-muted text-xs leading-relaxed line-clamp-3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="section-shell border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <FadeUp>
              <SectionLabel number="05">How We Work</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)] tracking-tight text-ink mb-1">
                From problem{" "}
                <span className="text-accent">to impact.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <div className="font-mono text-xs text-muted">
              <span className="text-accent">Advise</span>
              {" → "}
              <span className="text-cat-amber">Build</span>
              {" → "}
              <span className="text-cat-indigo">Deploy</span>
              {" → "}
              <span className="text-cat-teal">Manage</span>
              {" → "}
              <span className="text-ink font-semibold">Scale</span>
            </div>
          </FadeUp>
        </div>

        {/* 4 + 3 Timeline Grid */}
        <CompactTimeline />
      </div>
    </section>
  );
}
