"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Activity,
  Compass,
  Server,
  Cloud,
  Layers,
  Code2,
  BarChart3,
  Smartphone,
  Network,
  Headphones,
  Search,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Service {
  name: string;
  description: string;
  items: string[];
}

interface PillarServicesExplorerProps {
  pillar: string;
  color: string;
  label: string;
  services: Service[];
}

function getServiceIcon(name: string): LucideIcon {
  const lower = name.toLowerCase();
  if (lower.includes("ai &") || lower.includes("automation") || lower.includes("advisory")) return Sparkles;
  if (lower.includes("software") || lower.includes("enterprise")) return Code2;
  if (lower.includes("data") || lower.includes("analytics")) return BarChart3;
  if (lower.includes("web") || lower.includes("mobile")) return Smartphone;
  if (lower.includes("cloud") || lower.includes("devops")) return Cloud;
  if (lower.includes("network")) return Network;
  if (lower.includes("cyber") || lower.includes("security")) return Shield;
  if (lower.includes("infrastructure") && !lower.includes("monitoring")) return Server;
  if (lower.includes("monitoring") || lower.includes("telemetry")) return Activity;
  if (lower.includes("helpdesk") || lower.includes("support")) return Headphones;
  if (lower.includes("audit")) return Search;
  if (lower.includes("strategy")) return Compass;
  if (lower.includes("transformation")) return Zap;
  return Layers;
}

export function PillarServicesExplorer({
  pillar,
  color,
  label,
  services,
}: PillarServicesExplorerProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "50px" });
  const tabListRef = useRef<HTMLDivElement>(null);

  // Auto-cycle tabs slowly (5.5s) only when in view; pause on hover/focus/touch; stop on reduced motion
  useEffect(() => {
    if (reduced || paused || !isInView || services.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [reduced, paused, isInView, services.length]);

  const activeService = services[activeIdx] || services[0];

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (index + 1) % services.length;
      setActiveIdx(nextIdx);
      const nextBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']")[nextIdx];
      nextBtn?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (index - 1 + services.length) % services.length;
      setActiveIdx(prevIdx);
      const prevBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']")[prevIdx];
      prevBtn?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIdx(0);
      const firstBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']")[0];
      firstBtn?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const lastIdx = services.length - 1;
      setActiveIdx(lastIdx);
      const lastBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']")[lastIdx];
      lastBtn?.focus();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 border-b border-line bg-mist/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionLabel>Services in this pillar</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink">
              What we <span style={{ color }}>build</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted">
            Explore {services.length} core capability areas in {label}
          </div>
        </div>

        {/* Tabbed Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (Desktop) / Scrollable Row (Mobile): Selectable Tabs */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label={`${label} sub-services`}
            className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0"
          >
            {services.map((svc, idx) => {
              const isActive = activeIdx === idx;
              const Icon = getServiceIcon(svc.name);

              return (
                <button
                  key={svc.name}
                  id={`tab-${pillar}-${idx}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${pillar}-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="relative text-left p-3.5 sm:p-4 rounded-xl transition-all flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex-shrink-0 lg:flex-shrink w-auto lg:w-full min-w-[200px] lg:min-w-0 bg-paper border border-line/70 hover:border-line"
                >
                  {/* Sliding highlight indicator */}
                  {isActive && (
                    <motion.div
                      layoutId={`active-tab-${pillar}`}
                      className="absolute inset-0 rounded-xl border shadow-xs"
                      style={{
                        borderColor: `${color}40`,
                        backgroundColor: `${color}0A`,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isActive ? `${color}15` : "#F1F5F9",
                        color: isActive ? color : "#64748B",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        className="font-heading text-sm font-semibold transition-colors"
                        style={{
                          color: isActive ? color : "#0A0F1C",
                        }}
                      >
                        {svc.name}
                      </div>
                      <div className="font-mono text-[11px] text-muted">
                        {svc.items.length} deliverables
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className="w-4 h-4 relative z-10 hidden lg:block transition-transform group-hover:translate-x-0.5"
                    style={{
                      color: isActive ? color : "#94A3B8",
                      opacity: isActive ? 1 : 0.4,
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Category Panel */}
          <div className="lg:col-span-8">
            <div
              id={`panel-${pillar}-${activeIdx}`}
              role="tabpanel"
              aria-labelledby={`tab-${pillar}-${activeIdx}`}
              className="bg-paper border border-line rounded-2xl p-6 sm:p-8 lg:p-10 shadow-elev-1 relative overflow-hidden min-h-[380px] flex flex-col justify-between"
            >
              {/* Subtle accent corner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ backgroundColor: color }}
                aria-hidden
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.name}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex-1 flex flex-col justify-between"
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border"
                        style={{
                          color,
                          backgroundColor: `${color}10`,
                          borderColor: `${color}30`,
                        }}
                      >
                        Area 0{activeIdx + 1}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {activeService.name}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink mb-3">
                      {activeService.name}
                    </h3>

                    {activeService.description && (
                      <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                        {activeService.description}
                      </p>
                    )}
                  </div>

                  {/* Staggered Bullet Deliverables */}
                  <div className="pt-4 border-t border-line/60">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted/80 mb-3">
                      Core Scope &amp; Deliverables:
                    </div>

                    <motion.div
                      initial={reduced ? false : "hidden"}
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: reduced ? 0 : 0.04 },
                        },
                      }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {activeService.items.map((item) => (
                        <motion.div
                          key={item}
                          variants={{
                            hidden: { opacity: 0, x: -6 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.25 },
                            },
                          }}
                          className="flex items-start gap-2.5 p-3 rounded-lg border border-line/70 bg-mist/50 hover:bg-mist hover:border-line transition-colors text-xs text-ink/90 leading-relaxed font-mono"
                        >
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color }}
                          />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Explorer Action Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-8 border-t border-line/70">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-muted text-center sm:text-left">
            <span>Not sure which service fits your roadmap?</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-cat-amber transition-colors"
            >
              Talk to us → we&apos;ll map the right solution
            </Link>
          </div>

          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors px-3.5 py-2 rounded border border-line bg-paper hover:border-line shadow-2xs"
          >
            <span>View all services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
