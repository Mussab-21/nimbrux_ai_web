"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INDUSTRIES_DATA, type IndustryItem } from "./industriesData";

const EASE = [0.22, 1, 0.36, 1] as const;

interface IndustriesExplorerProps {
  initialIndustryId?: string;
  activeIndustryId?: string;
  onIndustryChange?: (id: string) => void;
}

export function IndustriesExplorer({
  initialIndustryId,
  activeIndustryId: controlledId,
  onIndustryChange,
}: IndustriesExplorerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const [internalIdx, setInternalIdx] = useState(() => {
    if (initialIndustryId) {
      const found = INDUSTRIES_DATA.findIndex((ind) => ind.id === initialIndustryId);
      if (found !== -1) return found;
    }
    return 0;
  });

  // Sync if controlled externally
  useEffect(() => {
    if (controlledId) {
      const found = INDUSTRIES_DATA.findIndex((ind) => ind.id === controlledId);
      if (found !== -1) setInternalIdx(found);
    }
  }, [controlledId]);

  const activeIdx = internalIdx;
  const activeIndustry: IndustryItem = INDUSTRIES_DATA[activeIdx];

  const handleSelect = useCallback(
    (idx: number) => {
      setInternalIdx(idx);
      if (onIndustryChange) {
        onIndustryChange(INDUSTRIES_DATA[idx].id);
      }
    },
    [onIndustryChange]
  );

  // Left/Right arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentIdx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (currentIdx + 1) % INDUSTRIES_DATA.length;
      handleSelect(next);
      const nextBtn = document.getElementById(`sector-tab-${next}`);
      nextBtn?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (currentIdx - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length;
      handleSelect(prev);
      const prevBtn = document.getElementById(`sector-tab-${prev}`);
      prevBtn?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      handleSelect(0);
      document.getElementById("sector-tab-0")?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = INDUSTRIES_DATA.length - 1;
      handleSelect(last);
      document.getElementById(`sector-tab-${last}`)?.focus();
    }
  };

  // Scroll active tab into view horizontally on mobile
  useEffect(() => {
    const activeTab = document.getElementById(`sector-tab-${activeIdx}`);
    if (activeTab && tabListRef.current) {
      const container = tabListRef.current;
      const scrollLeft =
        activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIdx]);

  return (
    <section
      id="explorer"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-paper relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with animated draw-in label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <SectionLabel number="09">9 SECTORS</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink">
              Operational reality{" "}
              <span className="text-accent">by sector</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted max-w-sm">
            Select an industry to inspect the recurring operational bottlenecks we dismantle
            and the exact software systems we deploy.
          </div>
        </div>

        {/* Desktop & Tablet: 9-Tile Selector Row / Wrap Grid */}
        {/* Mobile: Horizontally scrollable sticky pill bar */}
        <div className="relative mb-6 sm:mb-8">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Industries and sectors"
            className="sticky top-[62px] lg:static z-30 lg:z-auto bg-paper/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b lg:border-b-0 border-line py-2.5 lg:py-0 -mx-6 px-6 lg:mx-0 lg:px-0 flex lg:grid lg:grid-cols-9 gap-2 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isActive = activeIdx === idx;
              const Icon = ind.icon;

              return (
                <button
                  key={ind.id}
                  id={`sector-tab-${idx}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`sector-panel-${ind.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleSelect(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="group relative flex-shrink-0 lg:flex-shrink p-2.5 sm:p-3 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-w-[124px] sm:min-w-[140px] lg:min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: isActive ? `${ind.color}0D` : "#FFFFFF",
                    borderColor: isActive ? ind.color : "#E3E8EF",
                    boxShadow: isActive
                      ? `0 4px 16px ${ind.color}1E`
                      : "0 1px 2px rgba(10,15,28,0.03)",
                  }}
                >
                  {/* Sliding highlight animation */}
                  {isActive && (
                    <motion.div
                      layoutId="active-industry-tile"
                      className="absolute inset-0 rounded-xl border pointer-events-none"
                      style={{
                        borderColor: ind.color,
                        boxShadow: `0 0 16px ${ind.color}25`,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* Icon with fill and lift */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 transition-all duration-200 group-hover:scale-110"
                    style={{
                      backgroundColor: isActive ? ind.color : `${ind.color}15`,
                      color: isActive ? "#FFFFFF" : ind.color,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Sector Number */}
                  <span
                    className="font-mono text-[9px] uppercase tracking-wider font-semibold mb-0.5"
                    style={{ color: isActive ? ind.color : "#64748B" }}
                  >
                    Sector {ind.num}
                  </span>

                  {/* Industry Label */}
                  <span
                    className="font-heading text-xs font-semibold leading-tight line-clamp-1"
                    style={{ color: isActive ? "#0A0F1C" : "#4B5768" }}
                  >
                    {ind.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Panel: Single-view ~80% viewport card */}
        <div
          id={`sector-panel-${activeIndustry.id}`}
          role="tabpanel"
          aria-labelledby={`sector-tab-${activeIdx}`}
          className="relative bg-paper border border-line rounded-2xl p-6 sm:p-8 lg:p-10 shadow-elev-1 overflow-hidden"
        >
          {/* Subtle corner brand glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10 transition-colors duration-500"
            style={{ backgroundColor: activeIndustry.color }}
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative z-10 flex flex-col justify-between"
            >
              {/* Top Banner: Sector Header & Position Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-8 border-b border-line">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span
                      className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border"
                      style={{
                        color: activeIndustry.color,
                        backgroundColor: `${activeIndustry.color}12`,
                        borderColor: `${activeIndustry.color}35`,
                      }}
                    >
                      Sector {activeIndustry.num}
                    </span>
                    <span className="font-mono text-xs sm:text-sm italic" style={{ color: activeIndustry.color }}>
                      &ldquo;{activeIndustry.tagline}&rdquo;
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-3 tracking-tight">
                    {activeIndustry.label}
                  </h3>

                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {activeIndustry.context}
                  </p>
                </div>

                {/* Position Indicator Badge ("03 / 09") */}
                <div className="flex items-center gap-2 self-start font-mono text-xs bg-mist px-3 py-1.5 rounded-lg border border-line flex-shrink-0">
                  <span className="font-bold text-ink">{activeIndustry.num}</span>
                  <span className="text-muted/60">/</span>
                  <span className="text-muted">09</span>
                </div>
              </div>

              {/* Two Columns: Challenges vs What We Build */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
                {/* Column 1: Operational Challenges */}
                <div className="bg-mist/40 border border-line/70 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line/60">
                    <div className="w-6 h-6 rounded-md bg-amber-500/15 text-amber-600 flex items-center justify-center">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-ink">
                      Operational Bottlenecks We Eliminate
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {activeIndustry.challenges.map((challenge, cIdx) => (
                      <motion.li
                        key={challenge}
                        initial={reduced ? false : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: reduced ? 0 : 0.05 + cIdx * 0.06,
                          ease: EASE,
                        }}
                        className="flex items-start gap-3 text-xs sm:text-sm text-muted font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 flex-shrink-0 mt-2" />
                        <span className="leading-snug">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: What We Build */}
                <div
                  className="border rounded-xl p-5 sm:p-6"
                  style={{
                    backgroundColor: `${activeIndustry.color}06`,
                    borderColor: `${activeIndustry.color}25`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line/60">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={{
                        backgroundColor: `${activeIndustry.color}20`,
                        color: activeIndustry.color,
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className="font-mono text-xs uppercase tracking-wider font-bold"
                      style={{ color: activeIndustry.color }}
                    >
                      Engineered Systems We Deliver
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {activeIndustry.solutions.map((solution, sIdx) => (
                      <motion.li
                        key={solution}
                        initial={reduced ? false : { opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: reduced ? 0 : 0.05 + sIdx * 0.06,
                          ease: EASE,
                        }}
                        className="flex items-start gap-3 text-xs sm:text-sm text-ink/80 font-mono font-medium"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: activeIndustry.color }}
                        />
                        <span className="leading-snug">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Action Strip */}
              <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>
                    Have a non-standard workflow in {activeIndustry.label}? We architect custom systems.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/contact?industry=${activeIndustry.id}`}
                    className="relative group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-xs font-semibold shadow-xs hover:shadow-elev-1 active:scale-[0.98] transition-all duration-200 overflow-hidden rounded-sm"
                  >
                    <span
                      className="absolute top-0 bottom-0 left-0 w-6 bg-white/20 -skew-x-12 -translate-x-12 group-hover:translate-x-56 transition-transform duration-600 ease-in-out pointer-events-none"
                      aria-hidden
                    />
                    <span className="relative z-10">Talk to us about {activeIndustry.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors px-3 py-2.5 rounded border border-line bg-paper hover:border-line"
                  >
                    <span>View all services</span>
                    <ChevronRight className="w-3 h-3 text-muted/60" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
