"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, Cpu, CheckCircle } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

interface Step {
  number: string;
  cadence: string;
  title: string;
  subtitle: string;
  description: string;
  milestone: string;
  icon: typeof Search;
}

const steps: Step[] = [
  {
    number: "01",
    cadence: "Days 1–5",
    title: "Discover",
    subtitle: "Audit & Problem Isolation",
    description:
      "Deep-dive technical assessment of existing workflows, data schemas, API dependencies, and infrastructure bottlenecks to determine high-yield opportunities.",
    milestone: "Audit report & target ROI matrix",
    icon: Search,
  },
  {
    number: "02",
    cadence: "Week 2",
    title: "Architect",
    subtitle: "Blueprint & Decision Records",
    description:
      "Draft Architecture Decision Records (ADRs), establish data contracts, zero-trust security perimeters, and deliver an early proof-of-concept prototype.",
    milestone: "System blueprint & live prototype",
    icon: Compass,
  },
  {
    number: "03",
    cadence: "Weeks 3–8",
    title: "Build & Test",
    subtitle: "Iterative Sprint Execution",
    description:
      "Bi-weekly production sprint cycles with full CI/CD test automation, telemetry instrumentation, data pipeline verification, and continuous staging reviews.",
    milestone: "Production-ready release candidate",
    icon: Cpu,
  },
  {
    number: "04",
    cadence: "Week 9+",
    title: "Deploy & Enable",
    subtitle: "Rollout & Operational Handoff",
    description:
      "Canary production deployment, operational runbook handoff, engineering team enablement, and optional SLA-backed 24/7 managed support.",
    milestone: "Live system, runbooks & SLA handover",
    icon: CheckCircle,
  },
];

export function EngagementTimeline() {
  const reduced = useReducedMotion();

  return (
    <section className="section-shell bg-paper border-t border-line relative overflow-hidden py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-cat-indigo mb-2">
              {"// 03 — ENGAGEMENT LIFECYCLE"}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-tight text-ink">
              How an engagement works
            </h2>
            <p className="text-muted text-sm sm:text-base mt-3">
              Predictable cadences, transparent artifacts, and rapid iteration. Every stage produces verifiable code, architecture documentation, and measurable outcomes.
            </p>
          </FadeUp>
        </div>

        {/* Timeline track container */}
        <div className="relative">
          {/* Continuous connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-line/80 z-0"
            aria-hidden
          />

          <StaggerGroup
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            stagger={0.1}
          >
            {steps.map((step) => {
              const StepIcon = step.icon;

              return (
                <StaggerItem key={step.number}>
                  <motion.div
                    whileHover={!reduced ? { y: -3 } : {}}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-line rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full group hover:border-cat-indigo/60 hover:shadow-md transition-colors"
                  >
                    <div>
                      {/* Top bar with step number and cadence */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-surface border border-line flex items-center justify-center font-mono text-xs font-bold text-cat-indigo group-hover:bg-cat-indigo group-hover:text-white transition-colors">
                          {step.number}
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-muted bg-surface/70 px-2.5 py-1 rounded border border-line/40">
                          {step.cadence}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="flex items-center gap-2 mb-1">
                        <StepIcon className="w-4 h-4 text-cat-indigo" />
                        <h3 className="font-heading text-base sm:text-lg font-bold text-ink">
                          {step.title}
                        </h3>
                      </div>
                      <div className="font-mono text-[11px] text-cat-indigo font-medium mb-3">
                        {step.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-muted text-xs leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* Milestone badge */}
                    <div className="pt-3 border-t border-line/50">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                        Milestone Deliverable
                      </div>
                      <div className="text-[11px] font-medium text-ink flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cat-indigo shrink-0" />
                        <span className="line-clamp-1">{step.milestone}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
