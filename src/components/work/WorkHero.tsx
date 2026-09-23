"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { WorkHeroVisual } from "./WorkHeroVisual";
import type { CaseStudyMeta } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

interface WorkHeroProps {
  caseStudies: CaseStudyMeta[];
}

export function WorkHero({ caseStudies }: WorkHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || reduced) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--spotlight-x", `${x}px`);
    heroRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const scrollToCases = () => {
    const el = document.getElementById("case-studies");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Main hero grid: Copy left, Visual right */}
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
              <Badge pillar="software" dot className="mb-4">
                PORTFOLIO &amp; CASE STUDIES
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
              <span>Production Systems · Measured Outcomes</span>
            </motion.div>

            {/* Headline with brand blue gradient phrase */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={reduced ? false : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.2rem,3.1vw,3.5rem)] font-bold tracking-tight text-ink leading-[1.12]"
              >
                Client work,{" "}
                <span className="inline-block bg-gradient-to-r from-accent via-cat-blue to-cat-indigo bg-clip-text text-transparent pb-1">
                  proven outcomes.
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
              We engineer scalable software, AI pipelines, and workflow automation bots.
              Explore our open-source repositories and production case studies below.
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
                onClick={scrollToCases}
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold shadow-elev-1 hover:shadow-elev-2 active:scale-[0.98] transition-all duration-200 overflow-hidden rounded-sm cursor-pointer"
              >
                <span
                  className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-transform duration-700 ease-in-out pointer-events-none"
                  aria-hidden
                />
                <span className="relative z-10">Browse Case Studies</span>
                <ChevronDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-muted font-mono text-sm hover:border-accent hover:text-accent bg-paper/60 transition-all duration-300 rounded-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Results Board Visual */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <WorkHeroVisual caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
}
