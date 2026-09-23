"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { InsightMeta } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

interface InsightsArticlesGridProps {
  insights: InsightMeta[];
}

export function InsightsArticlesGrid({ insights }: InsightsArticlesGridProps) {
  const reduced = useReducedMotion();

  return (
    <section id="articles" className="py-20 lg:py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel number={String(insights.length).padStart(2, "0")}>
              DISPATCHES &amp; ESSAYS
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink">
              Notes from the <span className="text-accent">field</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted max-w-sm">
            Unfiltered frameworks on AI economics, automation scoping, and pragmatic engineering.
          </div>
        </div>

        {/* Articles Grid */}
        {insights.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-mono text-muted">Articles coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {insights.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: reduced ? 0 : 0.05 + i * 0.08,
                  ease: EASE,
                }}
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block bg-paper border border-line rounded-2xl p-7 sm:p-8 hover:border-accent/40 hover:shadow-elev-2 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Subtle hover background accent glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-accent"
                    aria-hidden
                  />

                  <div>
                    {/* Category & Read time */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                        {article.category}
                      </span>
                      <span className="font-mono text-xs text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted/60" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read action */}
                  <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-accent font-semibold">
                    <span>Read dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
