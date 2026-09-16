"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    before: "Manual Work",
    after: "Automated Workflows",
    description:
      "Repetitive processes consuming your team's time get replaced with intelligent automation that works 24/7.",
    color: "#4338CA",
    icon: "→",
  },
  {
    before: "Fragmented Systems",
    after: "Connected Intelligence",
    description:
      "Disconnected tools and siloed data become unified systems that share information in real-time.",
    color: "#0B57D0",
    icon: "→",
  },
  {
    before: "Outdated Technology",
    after: "Modern Infrastructure",
    description:
      "Legacy systems holding back your growth get modernized with scalable cloud architecture.",
    color: "#B45309",
    icon: "→",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 border-b border-line bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel number="01">The Problem</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink mb-6">
            Technology shouldn&apos;t create{" "}
            <span className="text-muted">more complexity.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Most businesses are drowning in fragmented tools, manual processes, and systems that don&apos;t talk to each other. We engineer the way out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {problems.map((p) => (
            <div
              key={p.before}
              className="bg-paper p-8 lg:p-10 group hover:bg-mist transition-colors"
            >
              {/* Before */}
              <div className="flex items-center gap-3 mb-6">
                <div className="font-mono text-xs text-muted uppercase tracking-widest px-2.5 py-1 border border-line line-through opacity-60">
                  {p.before}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="flex items-center gap-3 mb-6"
                style={{ color: p.color }}
              >
                <div
                  className="h-px flex-1 opacity-40"
                  style={{ backgroundColor: p.color }}
                />
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </div>

              {/* After */}
              <div
                className="font-heading text-xl font-semibold mb-4"
                style={{ color: p.color }}
              >
                {p.after}
              </div>

              <p className="text-muted text-sm leading-relaxed">
                {p.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-8 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: p.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
