"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechIcon } from "@/components/ui/TechIcons";
import type { CaseStudyMeta } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PortfolioGridProps {
  caseStudies: CaseStudyMeta[];
}

export function PortfolioGrid({ caseStudies }: PortfolioGridProps) {
  const reduced = useReducedMotion();

  return (
    <section id="case-studies" className="py-20 lg:py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel number={String(caseStudies.length).padStart(2, "0")}>
              CLIENT WORK
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink">
              Engineered systems in <span className="text-accent">production</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted max-w-sm">
            Inspect real architecture decisions, technical challenges, and verified outcomes across {caseStudies.length} client engagements.
          </div>
        </div>

        {/* 2-Column Responsive Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: reduced ? 0 : 0.05 + (i % 2) * 0.1,
                ease: EASE,
              }}
              className="group relative bg-paper border border-line rounded-2xl p-6 sm:p-8 hover:border-line hover:shadow-elev-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner ambient glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: cs.accentColor || "#0B57D0" }}
                aria-hidden
              />

              {/* Card Top: Number + Industry + Category */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                    style={{
                      color: cs.accentColor,
                      backgroundColor: `${cs.accentColor}12`,
                      borderColor: `${cs.accentColor}30`,
                    }}
                  >
                    CASE {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-line" />
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    {cs.industry}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-line" />
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    {cs.category}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/work/${cs.slug}`} className="group/title block mb-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink group-hover/title:text-accent transition-colors leading-snug">
                    {cs.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {cs.summary}
                </p>

                {/* Outcome Pill */}
                <div className="mb-6 p-3 bg-mist/60 border border-line/60 rounded-xl">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-ink uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>MEASURED OUTCOME</span>
                  </div>
                  <p className="text-xs text-muted font-mono leading-relaxed line-clamp-2">
                    {cs.outcome}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Tech Stack & Actions */}
              <div>
                {/* Tech stack with icons */}
                <div className="flex flex-wrap items-center gap-2 mb-6 pt-4 border-t border-line/60">
                  {cs.tech.map((t) => (
                    <TechIcon key={t} name={t} />
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="relative group/btn inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2.5 bg-accent text-white hover:bg-cat-amber hover:text-white transition-all duration-200 rounded-sm shadow-2xs overflow-hidden"
                  >
                    <span
                      className="absolute top-0 bottom-0 left-0 w-6 bg-white/20 -skew-x-12 -translate-x-12 group-hover/btn:translate-x-44 transition-transform duration-500 ease-in-out pointer-events-none"
                      aria-hidden
                    />
                    <span className="relative z-10">View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  {cs.githubUrl && (
                    <a
                      href={cs.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs border border-line px-3.5 py-2 text-muted hover:border-ink hover:text-ink transition-colors rounded-sm bg-paper"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3 text-muted/60" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: cs.accentColor || "#0B57D0" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
