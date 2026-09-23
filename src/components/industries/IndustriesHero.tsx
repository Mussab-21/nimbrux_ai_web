"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { INDUSTRIES_DATA, type IndustryItem } from "./industriesData";

const EASE = [0.22, 1, 0.36, 1] as const;

interface IndustriesHeroProps {
  onSelectIndustry?: (id: string) => void;
}

export function IndustriesHero({ onSelectIndustry }: IndustriesHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { margin: "100px 0px" });
  const reduced = useReducedMotion();

  // Active highlighted node index for orbit visual
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<IndustryItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Parallax tilt on visual card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto-cycle through the 9 nodes softly when in view
  useEffect(() => {
    if (reduced || !isInView || isPaused) return;

    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % INDUSTRIES_DATA.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [reduced, isInView, isPaused]);

  // Spotlight mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || reduced) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroRef.current.style.setProperty("--spotlight-x", `${x}px`);
    heroRef.current.style.setProperty("--spotlight-y", `${y}px`);

    // Subtle 3D tilt calculation (-4 to +4 deg)
    const centerX = rect.width * 0.75;
    const centerY = rect.height * 0.5;
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 4;
    setMousePos({ x: tiltY, y: tiltX });
  };

  const scrollToExplorer = () => {
    const el = document.getElementById("explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNodeClick = (ind: IndustryItem) => {
    if (onSelectIndustry) {
      onSelectIndustry(ind.id);
    }
    const el = document.getElementById("explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayIndustry = hoveredNode || INDUSTRIES_DATA[activeNodeIndex];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90svh] lg:h-[90svh] flex flex-col justify-between overflow-hidden pt-[72px] bg-paper border-b border-line"
      style={{
        ["--spotlight-x" as string]: "50%",
        ["--spotlight-y" as string]: "40%",
      }}
    >
      {/* Background dot grid + cursor spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0B57D0 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), rgba(11,87,208,0.08), transparent 70%)",
          }}
        />
      </div>

      {/* Main hero grid: Left copy, Right visual */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 lg:py-2 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Copy with line-by-line reveal */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <Badge pillar="data" dot className="mb-4">
                INDUSTRIES & SECTORS
              </Badge>
            </motion.div>

            {/* Tagline label */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
              className="font-mono text-xs uppercase tracking-widest text-muted mb-3 flex items-center gap-2"
            >
              <span className="w-5 h-px bg-accent/60" />
              <span>9 Sectors · One Unified Engineering Platform</span>
            </motion.div>

            {/* Headline with brand blue gradient phrase */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={reduced ? false : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.1rem,2.9vw,3.35rem)] font-bold tracking-tight text-ink leading-[1.12]"
              >
                Technology problems{" "}
                <span className="inline-block bg-gradient-to-r from-accent via-cat-blue to-cat-indigo bg-clip-text text-transparent pb-1">
                  don&apos;t respect sector lines.
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 lg:mb-8"
            >
              We work across 9 industries. The technology changes; the goal doesn&apos;t: help you
              operate better, serve customers better, and scale without adding proportional operational
              overhead.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={scrollToExplorer}
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold shadow-elev-1 hover:shadow-elev-2 active:scale-[0.98] transition-all duration-200 overflow-hidden rounded-sm"
              >
                {/* Shine sweep effect */}
                <span
                  className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-transform duration-700 ease-in-out pointer-events-none"
                  aria-hidden
                />
                <span className="relative z-10">Explore 9 Sectors</span>
                <ChevronDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-muted font-mono text-sm hover:border-accent hover:text-accent bg-paper/60 transition-all duration-300 rounded-sm"
              >
                <span>Talk to an Engineer</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated "9 industries, one platform" visualizer panel */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
              style={{
                transform:
                  reduced || typeof window === "undefined" || window.innerWidth < 1024
                    ? undefined
                    : `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredNode(null);
              }}
              className="relative w-full max-w-[490px] bg-paper/95 backdrop-blur-md border border-line/90 rounded-2xl p-4 sm:p-5 shadow-elev-2 transition-transform duration-200 ease-out"
            >
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-line text-[11px] font-mono">
                <div className="flex items-center gap-2 text-ink font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>CROSS-SECTOR MATRIX</span>
                </div>
                <div className="text-[10px] text-muted flex items-center gap-1.5 bg-mist px-2 py-0.5 rounded border border-line/60">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span>9 SECTORS CONNECTED</span>
                </div>
              </div>

              {/* Constellation Canvas */}
              <div className="relative h-[290px] sm:h-[310px] w-full flex items-center justify-center overflow-hidden rounded-xl bg-mist/40 border border-line/40">
                {/* Concentric subtle rings */}
                <div
                  className="absolute w-[240px] sm:w-[260px] h-[240px] sm:h-[260px] rounded-full border border-line/60 pointer-events-none"
                  aria-hidden
                />
                <div
                  className="absolute w-[150px] sm:w-[170px] h-[150px] sm:h-[170px] rounded-full border border-line/40 pointer-events-none"
                  aria-hidden
                />

                {/* SVG connection lines from center to 9 orbiting nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden>
                  {INDUSTRIES_DATA.map((ind, i) => {
                    const angle = (i * 40 - 90) * (Math.PI / 180);
                    const radius = 114;
                    const cx = 230; // Center coordinate
                    const cy = 150;
                    const x = cx + Math.cos(angle) * radius;
                    const y = cy + Math.sin(angle) * radius;
                    const isActive = ind.id === displayIndustry.id;

                    return (
                      <g key={ind.id}>
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${Math.cos(angle) * radius}px)`}
                          y2={`calc(50% + ${Math.sin(angle) * radius}px)`}
                          stroke={isActive ? ind.color : "#E3E8EF"}
                          strokeWidth={isActive ? "1.75" : "1"}
                          strokeDasharray={isActive ? "none" : "3 3"}
                          className="transition-colors duration-300"
                        />
                        {/* Pulse dot along line when node is active */}
                        {!reduced && isInView && isActive && (
                          <circle r="2.5" fill={ind.color} opacity="0.9">
                            <animateMotion
                              path={`M ${cx} ${cy} L ${x} ${y}`}
                              dur="1.8s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Central Nimbrix Core */}
                <motion.div
                  initial={reduced ? false : { scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                  className="relative z-20 w-14 h-14 rounded-2xl border-2 border-accent/70 bg-paper shadow-md flex flex-col items-center justify-center cursor-pointer group"
                  onClick={scrollToExplorer}
                  style={{
                    boxShadow: "0 0 24px rgba(11,87,208,0.15)",
                  }}
                  title="Click to view all sectors"
                >
                  <span className="font-heading font-bold text-lg text-accent group-hover:scale-110 transition-transform">
                    N
                  </span>
                  <span className="font-mono text-[7px] uppercase tracking-wider text-muted/80">CORE</span>
                </motion.div>

                {/* 9 Orbiting Sector Nodes */}
                {INDUSTRIES_DATA.map((ind, i) => {
                  const angle = (i * 40 - 90) * (Math.PI / 180);
                  const radius = 114;
                  const ox = Math.cos(angle) * radius;
                  const oy = Math.sin(angle) * radius;
                  const isActive = ind.id === displayIndustry.id;
                  const Icon = ind.icon;

                  return (
                    <motion.div
                      key={ind.id}
                      className="absolute z-20"
                      style={{
                        left: `calc(50% + ${ox}px - 17px)`,
                        top: `calc(50% + ${oy}px - 17px)`,
                      }}
                      initial={reduced ? false : { scale: 0, opacity: 0 }}
                      animate={{
                        scale: isActive ? 1.18 : 1,
                        opacity: 1,
                      }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.04, ease: EASE }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNodeClick(ind)}
                        onMouseEnter={() => {
                          setHoveredNode(ind);
                          setActiveNodeIndex(i);
                        }}
                        onFocus={() => {
                          setHoveredNode(ind);
                          setActiveNodeIndex(i);
                        }}
                        aria-label={`Sector ${ind.num}: ${ind.label}`}
                        className="group relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl border bg-paper shadow-2xs flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                        style={{
                          borderColor: isActive ? ind.color : "#E3E8EF",
                          backgroundColor: isActive ? `${ind.color}12` : "#FFFFFF",
                          boxShadow: isActive ? `0 0 16px ${ind.color}35` : undefined,
                        }}
                      >
                        <Icon
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: ind.color }}
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Active sector info bar at bottom of card */}
              <div className="mt-3 p-3 bg-mist/60 border border-line/60 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${displayIndustry.color}15` }}
                  >
                    <displayIndustry.icon className="w-3.5 h-3.5" style={{ color: displayIndustry.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      <span className="font-semibold" style={{ color: displayIndustry.color }}>
                        Sector {displayIndustry.num}
                      </span>
                      <span className="text-muted/60">·</span>
                      <span className="font-semibold text-ink truncate">{displayIndustry.label}</span>
                    </div>
                    <p className="text-[11px] text-muted italic truncate leading-tight">
                      {displayIndustry.tagline}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleNodeClick(displayIndustry)}
                  className="font-mono text-[10px] text-accent hover:text-accent-hover font-semibold flex items-center gap-1 flex-shrink-0 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
