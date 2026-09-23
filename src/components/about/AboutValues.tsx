"use client";

import { Target, Shield, Zap, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.22, 1, 0.36, 1] as const;

const VALUES = [
  {
    icon: Target,
    label: "Outcome-first",
    description:
      "We measure success in business results, not deliverables. Every technical decision traces back to an operational or revenue outcome.",
    color: "#0B57D0",
  },
  {
    icon: Shield,
    label: "Honest advice",
    description:
      "If a project won't work, we'll tell you before we take your money. If AI won't actually help your bottleneck, we'll say so directly.",
    color: "#4338CA",
  },
  {
    icon: Zap,
    label: "Engineering quality",
    description:
      "We build things properly. Clean code, documented systems, proper architecture — so it works today and holds up under production scale.",
    color: "#B45309",
  },
  {
    icon: Users,
    label: "Long-term partnership",
    description:
      "Projects end; relationships shouldn't. Most of our best outcomes come from clients we work with over years, not weeks.",
    color: "#0F766E",
  },
];

export function AboutValues() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 border-b border-line bg-mist/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel number="04">HOW WE OPERATE</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink">
              What we <span className="text-accent">stand for</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted max-w-sm">
            Core operating tenets that govern our technical recommendations and code delivery.
          </div>
        </div>

        {/* 2x2 Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.label}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: reduced ? 0 : 0.06 + i * 0.08,
                  ease: EASE,
                }}
                className="group bg-paper border border-line rounded-2xl p-7 sm:p-8 hover:border-line hover:shadow-elev-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: v.color }}
                  aria-hidden
                />

                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${v.color}15`,
                        color: v.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span
                        className="font-mono text-[10px] uppercase tracking-wider font-semibold block"
                        style={{ color: v.color }}
                      >
                        PRINCIPLE 0{i + 1}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-ink">
                        {v.label}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>

                {/* Bottom accent indicator */}
                <div
                  className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: v.color }}
                >
                  <span className="w-2 h-0.5 rounded-full" style={{ backgroundColor: v.color }} />
                  <span>Nimbrix Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
