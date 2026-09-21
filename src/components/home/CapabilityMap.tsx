"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "50px" });

  const [activeId, setActiveId] = useState(pillars[0].id);
  const [isHovered, setIsHovered] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = pillars.findIndex((p) => p.id === activeId);
  const activePillar = pillars[activeIndex];

  const goToNext = useCallback(() => {
    setActiveId(pillars[(activeIndex + 1) % pillars.length].id);
  }, [activeIndex]);

  const selectPillar = (id: string) => {
    setActiveId(id);
  };

  // Auto-cycle only when in view, no per-frame React setState
  useEffect(() => {
    if (reduced || isHovered || !isInView) return;

    const timer = setTimeout(() => {
      goToNext();
    }, CYCLE_INTERVAL);

    return () => clearTimeout(timer);
  }, [isHovered, activeId, reduced, isInView, goToNext]);

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
    <section ref={sectionRef} className="section-shell border-b border-line bg-paper" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section header */}
        <div className="max-w-xl mb-6 lg:mb-8">
          <FadeUp>
            <SectionLabel number="02">Capability Map</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)] tracking-tight text-ink mb-2">
              One partner,{" "}
              <span className="text-accent">five pillars.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Strategy to software to scale. Select a pillar to explore what we build.
            </p>
          </FadeUp>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Tab list */}
          <div
            role="tablist"
            aria-label="Capabilities"
            className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-1.5"
          >
            {pillars.map((p, i) => {
              const isActive = p.id === activeId;
              return (
                <div key={p.id} className="relative">
                  <button
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${p.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${p.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectPillar(p.id)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className="w-full text-left p-3.5 border transition-all duration-200 flex items-center justify-between gap-3 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    style={{
                      borderColor: isActive ? `${p.color}40` : "#E3E8EF",
                      backgroundColor: isActive ? `${p.color}08` : "transparent",
                    }}
                  >
                    {/* Active accent pill */}
                    <div
                      className="w-1 h-6 rounded-full flex-shrink-0 transition-all duration-200"
                      style={{
                        backgroundColor: isActive ? p.color : "transparent",
                      }}
                    />

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

                  {/* Auto-cycle progress bar (compositor-driven) */}
                  {isActive && !reduced && isInView && !isHovered && (
                    <div className="h-px bg-line overflow-hidden mx-4">
                      <motion.div
                        key={activeId}
                        className="h-full origin-left"
                        style={{ backgroundColor: p.color }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: animated detail panel */}
          <div className="flex-1 min-h-[300px]">
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
                className="p-6 lg:p-7 border h-full"
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
