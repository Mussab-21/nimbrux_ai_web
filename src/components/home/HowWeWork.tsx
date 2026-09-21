"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

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

function AnimatedTimeline() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reduced) {
    return (
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-6 pb-8 relative">
            {i < steps.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-line" aria-hidden />
            )}
            <div
              className="w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold relative z-10 bg-paper"
              style={{ borderColor: `${step.color}40`, color: step.color }}
            >
              {step.number}
            </div>
            <div className="flex-1 pt-1.5">
              <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: step.color }}>
                {step.label}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Static full-height track */}
      <div
        className="absolute left-[19px] top-10 w-px bg-line"
        style={{ height: `calc(100% - 80px)` }}
        aria-hidden
      />
      {/* Animated fill */}
      <motion.div
        className="absolute left-[19px] top-10 w-px bg-gradient-to-b from-cat-indigo to-cat-amber origin-top"
        style={{ height: `calc(100% - 80px)`, scaleY: lineHeight as unknown as number }}
        aria-hidden
      />

      <StaggerGroup stagger={0.1} delayChildren={0}>
        {steps.map((step, i) => (
          <StaggerItem key={step.number}>
            <div className="flex gap-6 pb-8 relative group">
              {/* Number circle */}
              <motion.div
                className="w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold relative z-10 bg-paper transition-all duration-300"
                style={{ borderColor: `${step.color}40`, color: step.color }}
                whileInView={{
                  borderColor: step.color,
                  backgroundColor: `${step.color}10`,
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {step.number}
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-1.5">
                <h3
                  className="font-heading text-lg font-semibold mb-2"
                  style={{ color: step.color }}
                >
                  {step.label}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading — sticky */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <FadeUp>
              <SectionLabel number="05">How We Work</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink mb-6">
                From problem{" "}
                <span className="text-accent">to impact.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-muted text-lg leading-relaxed mb-8">
                A structured process that connects advisory, engineering, and managed services — so every engagement has a clear path from discovery to scale.
              </p>
              <div className="font-mono text-sm text-muted">
                <span className="text-accent">Advise</span>
                {" → "}
                <span className="text-cat-amber">Build</span>
                {" → "}
                <span className="text-cat-indigo">Deploy</span>
                {" → "}
                <span className="text-cat-teal">Manage</span>
                {" → "}
                <span className="text-ink">Scale</span>
              </div>
            </FadeUp>
          </div>

          {/* Right: animated steps */}
          <AnimatedTimeline />
        </div>
      </div>
    </section>
  );
}
