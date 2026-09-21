"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";

const CYCLE_INTERVAL = 5000;

const pillars = [
  {
    id: "digital-ai",
    pillar: "01",
    color: "#4338CA",
    label: "Digital & AI",
    tagline: "Automate. Augment. Accelerate.",
    description:
      "Custom AI agents, LLM integrations, enterprise software, data pipelines, and web/mobile products.",
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
    href: "/solutions/digital-ai",
  },
  {
    id: "cloud-security",
    pillar: "02",
    color: "#0B57D0",
    label: "Cloud & Security",
    tagline: "Build it right. Keep it safe.",
    description:
      "Cloud architecture, DevOps pipelines, enterprise networks, cybersecurity, and infrastructure design.",
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
    href: "/solutions/cloud-security",
  },
  {
    id: "managed-technology",
    pillar: "03",
    color: "#B45309",
    label: "Managed Technology",
    tagline: "We run it, so you don't have to.",
    description:
      "Application management, managed cloud operations, IT support, and infrastructure monitoring.",
    services: ["Application Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
    href: "/solutions/managed-technology",
  },
  {
    id: "consulting-advisory",
    pillar: "04",
    color: "#0F766E",
    label: "Consulting & Advisory",
    tagline: "Strategy before execution.",
    description:
      "AI advisory, IT strategy, technology audits, and digital transformation roadmaps.",
    services: ["AI Advisory", "IT Strategy", "Technology Audits", "Digital Transformation"],
    href: "/solutions/consulting-advisory",
  },
  {
    id: "products",
    pillar: "05",
    color: "#1E40AF",
    label: "Products & IP",
    tagline: "Building what we wish existed.",
    description:
      "Proprietary SaaS products, AI platforms, automation tools, and Nimbrix Labs research projects.",
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Nimbrix Labs"],
    href: "/solutions/products",
  },
];

export function CapabilityMap() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(pillars[0].id);
  const [isHovered, setIsHovered] = useState(false);
  const [cycleProgress, setCycleProgress] = useState(0);

  const progressStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = pillars.findIndex((p) => p.id === activeId);
  const activePillar = pillars[activeIndex];

  const goToNext = useCallback(() => {
    setCycleProgress(0);
    progressStartRef.current = null;
    setActiveId(pillars[(activeIndex + 1) % pillars.length].id);
  }, [activeIndex]);

  const selectPillar = (id: string) => {
    setActiveId(id);
    setCycleProgress(0);
    progressStartRef.current = null;
  };

  // Auto-cycle via RAF
  useEffect(() => {
    if (reduced || isHovered) return;

    const tick = (now: number) => {
      if (progressStartRef.current === null) progressStartRef.current = now;
      const elapsed = now - progressStartRef.current;
      const pct = Math.min(elapsed / CYCLE_INTERVAL, 1);
      setCycleProgress(pct);
      if (pct >= 1) {
        goToNext();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered, activeId, reduced, goToNext]);

  // Keyboard navigation (arrow keys within tablist)
  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (i + 1) % pillars.length;
      selectPillar(pillars[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (i - 1 + pillars.length) % pillars.length;
      selectPillar(pillars[prev].id);
      tabRefs.current[prev]?.focus();
    }
  };

  return (
    <section className="py-24 lg:py-32 border-b border-line bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <FadeUp>
            <SectionLabel number="02">Capability Map</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-4">
              One partner,{" "}
              <span className="text-accent">five pillars.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-muted text-base leading-relaxed">
              Strategy to software to scale. Select a pillar to explore what we build.
            </p>
          </FadeUp>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {/* Left: pillar tabs */}
          <div
            role="tablist"
            aria-label="Service pillars"
            aria-orientation="vertical"
            className="flex flex-col gap-1 lg:w-[280px] flex-shrink-0 w-full"
          >
            {pillars.map((p, i) => {
              const isActive = p.id === activeId;
              return (
                <div key={p.id} className="relative">
                  <button
                    ref={(el) => { tabRefs.current[i] = el; }}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${p.id}`}
                    id={`tab-${p.id}`}
                    className="w-full flex items-center gap-4 p-4 text-left transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    style={{
                      backgroundColor: isActive ? `${p.color}08` : "transparent",
                    }}
                    onClick={() => selectPillar(p.id)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {/* Left border indicator */}
                    <div className="relative w-0.5 h-10 flex-shrink-0 bg-line overflow-hidden">
                      {isActive && !reduced && (
                        <motion.div
                          className="absolute inset-0 origin-top"
                          style={{ backgroundColor: p.color }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      {isActive && reduced && (
                        <div className="absolute inset-0" style={{ backgroundColor: p.color }} />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="font-mono text-[10px] uppercase tracking-widest"
                          style={{ color: p.color, opacity: isActive ? 1 : 0.5 }}
                        >
                          {p.pillar}
                        </span>
                      </div>
                      <h3
                        className="font-heading text-sm font-semibold transition-colors duration-200"
                        style={{ color: isActive ? p.color : "var(--ink)" }}
                      >
                        {p.label}
                      </h3>
                    </div>

                    <ArrowRight
                      className="w-4 h-4 flex-shrink-0 transition-all duration-200"
                      style={{
                        color: p.color,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateX(0)" : "translateX(-4px)",
                      }}
                    />
                  </button>

                  {/* Auto-cycle progress bar */}
                  {isActive && !reduced && (
                    <div className="h-px bg-line overflow-hidden mx-4">
                      <motion.div
                        className="h-full origin-left"
                        style={{ backgroundColor: p.color, scaleX: cycleProgress }}
                        transition={{ duration: 0 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: animated detail panel */}
          <div className="flex-1 min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                role="tabpanel"
                id={`panel-${activePillar.id}`}
                aria-labelledby={`tab-${activePillar.id}`}
                initial={reduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 lg:p-10 border h-full"
                style={{
                  borderColor: `${activePillar.color}30`,
                  backgroundColor: `${activePillar.color}05`,
                }}
              >
                {/* Pillar number + tagline */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="font-mono text-xs uppercase tracking-widest mb-2"
                      style={{ color: activePillar.color, opacity: 0.7 }}
                    >
                      Pillar {activePillar.pillar}
                    </div>
                    <h3
                      className="font-heading text-3xl lg:text-4xl font-semibold mb-1"
                      style={{ color: activePillar.color }}
                    >
                      {activePillar.label}
                    </h3>
                    <p className="font-mono text-sm text-muted italic">{activePillar.tagline}</p>
                  </div>
                </div>

                <p className="text-muted text-base leading-relaxed mb-6">{activePillar.description}</p>

                {/* Sub-service chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activePillar.services.map((svc) => (
                    <span
                      key={svc}
                      className="font-mono text-xs px-3 py-1.5 border"
                      style={{
                        borderColor: `${activePillar.color}40`,
                        backgroundColor: `${activePillar.color}08`,
                        color: activePillar.color,
                      }}
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={activePillar.href}
                  className="inline-flex items-center gap-2 font-mono text-sm font-semibold group transition-colors"
                  style={{ color: activePillar.color }}
                >
                  Explore {activePillar.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
