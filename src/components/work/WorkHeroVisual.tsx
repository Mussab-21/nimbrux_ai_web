"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import type { CaseStudyMeta } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

interface WorkHeroVisualProps {
  caseStudies: CaseStudyMeta[];
}

export function WorkHeroVisual({ caseStudies }: WorkHeroVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px 0px" });
  const reduced = useReducedMotion();

  // Featured subset (first 4 case studies)
  const featured = caseStudies.slice(0, 4);

  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"outcome" | "challenge">("outcome");
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto-cycle through featured projects every 4.5s
  useEffect(() => {
    if (reduced || !isInView || isPaused || featured.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featured.length);
      // Alternate viewMode quietly on cycle
      setViewMode((prev) => (prev === "outcome" ? "challenge" : "outcome"));
    }, 4500);

    return () => clearInterval(interval);
  }, [reduced, isInView, isPaused, featured.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 4;
    setMousePos({ x: tiltY, y: tiltX });
  };

  if (featured.length === 0) return null;

  const current = featured[activeIdx];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setMousePos({ x: 0, y: 0 });
      }}
      initial={reduced ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      style={{
        transform:
          reduced || typeof window === "undefined" || window.innerWidth < 1024
            ? undefined
            : `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
      }}
      className="relative w-full max-w-[500px] bg-paper/95 backdrop-blur-md border border-line/90 rounded-2xl p-5 sm:p-6 shadow-elev-2 transition-transform duration-200 ease-out"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10 transition-colors duration-500"
        style={{ backgroundColor: current.accentColor || "#0B57D0" }}
        aria-hidden
      />

      {/* Header bar: Live Results Board */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-line text-[11px] font-mono">
        <div className="flex items-center gap-2 text-ink font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>SHIPPED SYSTEMS ARCHIVE</span>
        </div>
        <div className="text-[10px] text-muted flex items-center gap-1.5 bg-mist px-2 py-0.5 rounded border border-line/60">
          <Sparkles className="w-3 h-3 text-accent" />
          <span>PROJECT {String(activeIdx + 1).padStart(2, "0")} / 0{featured.length}</span>
        </div>
      </div>

      {/* Main card body with flip/cross-fade between "The Ask" and "What Shipped" */}
      <div className="relative min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Meta & Title */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border"
                  style={{
                    color: current.accentColor,
                    backgroundColor: `${current.accentColor}12`,
                    borderColor: `${current.accentColor}30`,
                  }}
                >
                  {current.industry}
                </span>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                  {current.category}
                </span>
              </div>

              <Link
                href={`/work/${current.slug}`}
                className="group inline-block"
              >
                <h3 className="font-heading text-lg sm:text-xl font-bold text-ink leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {current.title}
                </h3>
              </Link>
            </div>

            {/* Quiet Toggle Pill: The Ask vs What Shipped */}
            <div className="my-3.5">
              <div className="inline-flex items-center gap-1 p-0.5 bg-mist rounded-lg border border-line/70 text-[10px] font-mono mb-2.5">
                <button
                  type="button"
                  onClick={() => setViewMode("outcome")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    viewMode === "outcome"
                      ? "bg-paper text-ink font-semibold shadow-2xs border border-line"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>What Shipped</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("challenge")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    viewMode === "challenge"
                      ? "bg-paper text-ink font-semibold shadow-2xs border border-line"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                  <span>The Ask</span>
                </button>
              </div>

              {/* Dynamic text block */}
              <div className="bg-mist/50 border border-line/60 rounded-xl p-3 text-xs text-muted leading-relaxed font-mono min-h-[72px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={viewMode + current.slug}
                    initial={reduced ? false : { opacity: 0, x: viewMode === "outcome" ? 6 : -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduced ? undefined : { opacity: 0, x: viewMode === "outcome" ? -6 : 6 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="line-clamp-3"
                  >
                    {viewMode === "outcome" ? current.outcome : current.challenge}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-line/60">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted/70 mr-1">
                STACK:
              </span>
              {current.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-muted bg-paper px-2 py-0.5 rounded border border-line shadow-2xs"
                >
                  {t}
                </span>
              ))}
              {current.tech.length > 4 && (
                <span className="font-mono text-[10px] text-muted/60">
                  +{current.tech.length - 4}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom selector row & Case study link */}
      <div className="mt-4 pt-3.5 border-t border-line flex items-center justify-between gap-3">
        {/* Project switch buttons */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Featured case studies">
          {featured.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveIdx(idx);
                  setViewMode("outcome");
                }}
                className={`relative px-2 py-1 rounded font-mono text-[10px] font-semibold transition-all ${
                  isActive
                    ? "bg-ink text-white shadow-2xs"
                    : "text-muted hover:text-ink bg-mist border border-line/60"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>

        <Link
          href={`/work/${current.slug}`}
          className="font-mono text-xs text-accent hover:text-accent-hover font-semibold flex items-center gap-1 group"
        >
          <span>Deep-dive</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
