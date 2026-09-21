"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Activity,
  Compass,
  Layers,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";

interface StartingPointOption {
  id: string;
  label: string;
  category: string;
  icon: typeof Cpu;
  pillarTitle: string;
  pillarSlug: string;
  pillarNumber: string;
  summary: string;
  deliverables: string[];
  timeline: string;
}

const finderOptions: StartingPointOption[] = [
  {
    id: "ai-workflows",
    label: "Automate manual workflows & processes",
    category: "AI & Automation",
    icon: Cpu,
    pillarTitle: "Digital & AI Solutions",
    pillarSlug: "digital-ai",
    pillarNumber: "01",
    summary:
      "Eliminate repetitive manual data entry, unstructured document processing, and human bottleneck handoffs with autonomous, auditable AI agents and workflow pipelines.",
    deliverables: [
      "Custom multi-step agent orchestration",
      "Document extraction & OCR intelligence",
      "Bi-directional legacy system API hooks",
      "Real-time auditable execution logs",
    ],
    timeline: "2–6 weeks for production pilot",
  },
  {
    id: "cloud-security",
    label: "Modernize cloud & secure infrastructure",
    category: "Cloud & Cyber",
    icon: Cloud,
    pillarTitle: "Cloud, Infrastructure & Cyber Security",
    pillarSlug: "cloud-security",
    pillarNumber: "02",
    summary:
      "Migrate legacy monolithic systems to resilient, auto-scaling multi-cloud architectures hardened with zero-trust network policies and automated compliance guardrails.",
    deliverables: [
      "Zero-trust VPC & perimeter architecture",
      "Infrastructure-as-Code (Terraform / OpenTofu)",
      "Multi-region failover & automated backups",
      "SOC2 / ISO 27001 compliance hardening",
    ],
    timeline: "3–8 weeks for core migration",
  },
  {
    id: "managed-ops",
    label: "Stabilize 24/7 mission-critical operations",
    category: "SRE & Managed Tech",
    icon: Activity,
    pillarTitle: "Managed Technology Services",
    pillarSlug: "managed-technology",
    pillarNumber: "03",
    summary:
      "Prevent downtime and offload operational toil with 24/7/365 SRE monitoring, automated incident remediation, and proactive performance optimization backed by strict SLAs.",
    deliverables: [
      "24/7/365 active telemetry & on-call response",
      "Automated self-healing infrastructure triggers",
      "Sub-15-minute critical incident SLA guarantee",
      "Continuous cost optimization & capacity reviews",
    ],
    timeline: "1–2 weeks onboarding & telemetry rollout",
  },
  {
    id: "tech-advisory",
    label: "Validate tech roadmap & AI feasibility",
    category: "Advisory & Strategy",
    icon: Compass,
    pillarTitle: "Technology & Advisory Consulting",
    pillarSlug: "consulting-advisory",
    pillarNumber: "04",
    summary:
      "Independent technical leadership to evaluate technical debt, audit architecture risks, assess AI viability, and deliver actionable executive blueprints before capital allocation.",
    deliverables: [
      "Comprehensive architectural audit & debt inventory",
      "AI feasibility, unit cost, and risk matrix",
      "Target-state roadmap & engineering team topology",
      "Executive & board-level strategy presentations",
    ],
    timeline: "2–4 weeks structured discovery",
  },
  {
    id: "platforms-ip",
    label: "Deploy pre-built IP & modular accelerators",
    category: "Accelerators & IP",
    icon: Layers,
    pillarTitle: "Products, Platforms & Proprietary IP",
    pillarSlug: "products",
    pillarNumber: "05",
    summary:
      "Fast-track time-to-market using battle-tested modular engines, data ingestion pipelines, and governance frameworks adapted specifically to your proprietary domain.",
    deliverables: [
      "Pre-engineered data ingestion & ETL engines",
      "High-throughput vector indexing pipelines",
      "Standardized security & audit middleware",
      "Full IP ownership & self-hosting rights",
    ],
    timeline: "1–3 weeks rapid implementation",
  },
];

export function ServiceFinder() {
  const [selectedId, setSelectedId] = useState<string>("ai-workflows");
  const reduced = useReducedMotion();

  const activeOption =
    finderOptions.find((opt) => opt.id === selectedId) ?? finderOptions[0];
  const Icon = activeOption.icon;

  return (
    <section className="section-shell bg-paper/60 border-t border-line relative overflow-hidden py-16 sm:py-24">
      {/* Background subtle radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(11,87,208,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <FadeUp>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-cat-indigo mb-2">
              {"// 02 — STARTING POINT FINDER"}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-tight text-ink">
              Where does your engineering journey start?
            </h2>
            <p className="text-muted text-sm sm:text-base mt-3">
              Select your immediate technical priority to see the matching capability pillar, typical architecture deliverables, and expected delivery horizon.
            </p>
          </FadeUp>
        </div>

        {/* Finder grid: Left buttons list, Right recommendation card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Options Column */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {finderOptions.map((opt) => {
              const isSelected = opt.id === selectedId;
              const OptIcon = opt.icon;

              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  className={`group relative text-left p-3.5 sm:p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-cat-indigo shadow-sm"
                      : "bg-paper/40 border-line/70 hover:bg-white hover:border-line"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-cat-indigo text-white"
                          : "bg-surface text-muted group-hover:text-ink"
                      }`}
                    >
                      <OptIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted mb-0.5">
                        {opt.category}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isSelected ? "text-ink font-bold" : "text-ink/80"
                        }`}
                      >
                        {opt.label}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                      isSelected
                        ? "bg-cat-indigo scale-100"
                        : "bg-line scale-75 group-hover:scale-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Solution Recommendation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-line rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOption.id}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Badge & Pillar info */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-line/60">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cat-indigo/10 border border-cat-indigo/20 text-cat-indigo font-mono text-xs">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Recommended Capability</span>
                      </div>
                      <div className="font-mono text-xs text-muted">
                        Pillar {activeOption.pillarNumber} of 05
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center text-cat-indigo shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-ink">
                        {activeOption.pillarTitle}
                      </h3>
                    </div>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                      {activeOption.summary}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="mb-6">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted mb-3">
                        Key Architectural Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeOption.deliverables.map((deliv, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-ink/90 bg-surface/60 rounded-md p-2 border border-line/40"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cat-indigo shrink-0 mt-0.5" />
                            <span className="leading-snug">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer with timeline & action link */}
                  <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted font-mono">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>Cadence: {activeOption.timeline}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/solutions/${activeOption.pillarSlug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cat-indigo text-white font-mono text-xs font-semibold rounded hover:bg-cat-indigo/90 transition-colors shadow-sm"
                      >
                        <span>View Pillar Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-muted hover:text-ink transition-colors"
                      >
                        <span>Inquire</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
