"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/motion/Marquee";
import { servicePillars, type ServicePillar } from "@/lib/services-data";

const ROTATING_WORDS = ["scale", "automation", "intelligence", "growth"];
const ROTATE_INTERVAL = 2500;

const TECH_STRIP = [
  "Next.js", "Python", "Node.js", "React", "AWS", "Azure",
  "LangChain", "n8n", "PostgreSQL", "Docker", "Tailwind", "TypeScript",
  "Supabase", "Framer Motion", "OpenAI", "Gemini", "Power BI",
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function SolutionsHero() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { margin: "100px" });

  const [wordIndex, setWordIndex] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState<ServicePillar | null>(null);

  // Rotating headline word
  useEffect(() => {
    if (reduced || !isInView) return;
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [reduced, isInView]);

  // Spotlight cursor tracking via CSS variables in rAF (Zero React state overhead)
  useEffect(() => {
    if (reduced) return;
    const hero = heroRef.current;
    if (!hero) return;

    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        hero.style.setProperty("--spotlight-x", `${x}px`);
        hero.style.setProperty("--spotlight-y", `${y}px`);
      });
    };

    hero.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90svh] lg:h-[90svh] flex flex-col justify-between overflow-hidden pt-[72px] bg-paper"
      style={{
        ["--spotlight-x" as string]: "50%",
        ["--spotlight-y" as string]: "40%",
      }}
    >
      {/* Background dot grid + cursor spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Cursor-driven spotlight with soft radial falloff */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), rgba(11,87,208,0.08), transparent 70%)",
          }}
        />
      </div>

      {/* Main content: Copy left, Constellation right */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 lg:py-2 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left: Copy with staggered entrance */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Animated Badge */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <Badge pillar="ai" dot className="mb-4">
                OUR SERVICES
              </Badge>
            </motion.div>

            {/* H1 with rotating brand blue word */}
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.1rem,2.8vw,3.25rem)] font-bold tracking-tight text-ink leading-[1.12] mb-4"
            >
              Services engineered for{" "}
              <span className="inline-block relative overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={reduced ? false : { y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={reduced ? undefined : { y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="inline-block bg-gradient-to-r from-accent via-cat-blue to-cat-indigo bg-clip-text text-transparent pb-1"
                  >
                    {ROTATING_WORDS[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 lg:mb-8"
            >
              We design, build, and operate resilient AI, software, cloud, and automation
              systems tailored to how your business actually works — unified under one engineering partner.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300 shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("services-showcase")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-muted font-mono text-sm hover:border-accent hover:text-accent bg-paper/60 transition-all duration-300"
              >
                <span>Explore services</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right: Service Constellation */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[440px] h-[340px] sm:h-[380px] lg:h-[400px] flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div
                className="absolute w-[290px] sm:w-[330px] h-[290px] sm:h-[330px] rounded-full border border-line/80 pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-full border border-line/60 pointer-events-none"
                aria-hidden
              />

              {/* Central Glowing Nimbrix Core */}
              <motion.div
                initial={reduced ? false : { scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                className="relative z-20 w-16 h-16 rounded-2xl border-2 border-accent/60 bg-paper shadow-lg flex flex-col items-center justify-center cursor-default"
                style={{
                  boxShadow: "0 0 32px rgba(11,87,208,0.18)",
                }}
              >
                <span className="font-heading font-bold text-xl text-accent">N</span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-muted/80">CORE</span>
              </motion.div>

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden>
                {servicePillars.map((p, i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const radius = 135;
                  const cx = 220;
                  const cy = 190;
                  const x = cx + Math.cos(angle) * radius;
                  const y = cy + Math.sin(angle) * radius;
                  const isHovered = hoveredPillar?.id === p.id;

                  return (
                    <g key={p.id}>
                      <line
                        x1={cx}
                        y1={cy}
                        x2={x}
                        y2={y}
                        stroke={isHovered ? p.color : "#E3E8EF"}
                        strokeWidth={isHovered ? "1.75" : "1"}
                        strokeDasharray={isHovered ? "none" : "4 4"}
                        className="transition-colors duration-300"
                      />
                      {/* Pulse along line when active/in view */}
                      {!reduced && isInView && (
                        <circle
                          r="2.5"
                          fill={p.color}
                          opacity={isHovered ? 0.9 : 0.4}
                        >
                          <animateMotion
                            path={`M ${cx} ${cy} L ${x} ${y}`}
                            dur={`${2.8 + i * 0.4}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* 5 Orbiting Service Nodes */}
              {servicePillars.map((p, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const radius = 135;
                const ox = Math.cos(angle) * radius;
                const oy = Math.sin(angle) * radius;
                const isHovered = hoveredPillar?.id === p.id;
                const isOtherHovered = hoveredPillar !== null && !isHovered;
                const Icon = p.icon;

                return (
                  <motion.div
                    key={p.id}
                    className="absolute z-20"
                    style={{
                      left: `calc(50% + ${ox}px - 26px)`,
                      top: `calc(50% + ${oy}px - 26px)`,
                    }}
                    initial={reduced ? false : { scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1.15 : isOtherHovered ? 0.9 : 1,
                      opacity: isOtherHovered ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.08, ease: EASE }}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(`pillar-panel-${p.id}`)}
                      onMouseEnter={() => setHoveredPillar(p)}
                      onMouseLeave={() => setHoveredPillar(null)}
                      onFocus={() => setHoveredPillar(p)}
                      onBlur={() => setHoveredPillar(null)}
                      aria-label={`${p.label}: ${p.tagline}`}
                      className="group relative w-13 h-13 rounded-xl border border-line bg-paper shadow-sm flex items-center justify-center transition-all duration-300 hover:border-accent hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                      style={{
                        borderColor: isHovered ? p.color : undefined,
                        boxShadow: isHovered ? `0 0 20px ${p.color}30` : undefined,
                      }}
                    >
                      <Icon
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: p.color }}
                      />

                      {/* Floating tooltip label card on hover */}
                      {isHovered && (
                        <motion.div
                          initial={reduced ? false : { opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-paper border border-line shadow-elev-2 rounded-lg text-left pointer-events-none z-30"
                        >
                          <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold" style={{ color: p.color }}>
                            <span>{p.pillar}</span>
                            <span>·</span>
                            <span>{p.label}</span>
                          </div>
                          <p className="text-[11px] text-muted line-clamp-2 mt-0.5 leading-snug">
                            {p.tagline}
                          </p>
                          <div className="font-mono text-[9px] text-accent mt-1 flex items-center gap-1">
                            <span>Scroll to details</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </div>
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom of Hero: Scroll cue + Tech Strip marquee */}
      <div className="relative z-10 w-full">
        {/* Subtle scroll cue */}
        <div className="flex items-center justify-center pb-2">
          <button
            type="button"
            onClick={() => scrollToSection("services-showcase")}
            className="group flex flex-col items-center gap-1 text-muted/60 hover:text-accent transition-colors"
            aria-label="Scroll to services showcase"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-px h-3.5 bg-line group-hover:bg-accent transition-colors" />
          </button>
        </div>

        {/* Thin technology marquee */}
        <div className="border-t border-line bg-mist/60 py-2.5">
          <Marquee speed={32} className="py-0">
            {TECH_STRIP.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-5 px-5 font-mono text-xs uppercase tracking-widest text-muted/60"
              >
                {tech}
                <span className="w-1 h-1 rounded-full bg-line" aria-hidden />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
