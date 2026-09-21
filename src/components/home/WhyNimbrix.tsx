"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, Target, Handshake, Globe2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";

const differentiators = [
  {
    label: "AI-first",
    color: "#4338CA",
    Icon: Bot,
    description:
      "Core architectural principle, not an afterthought. We eliminate repetitive friction in every system we deliver.",
  },
  {
    label: "Engineering-led",
    color: "#0B57D0",
    Icon: Code2,
    description:
      "Reliable architectures over quick hacks. Clean, documented, thoroughly tested code built to scale securely.",
  },
  {
    label: "Outcome-driven",
    color: "#B45309",
    Icon: Target,
    description:
      "We measure success in business outcomes: hours saved, systems unified, and measurable operational velocity.",
  },
  {
    label: "Long-term partner",
    color: "#0F766E",
    Icon: Handshake,
    description:
      "From MVP sprint to managed operations and advisory — we build, maintain, and evolve alongside your business.",
  },
  {
    label: "Global delivery",
    color: "#1E40AF",
    Icon: Globe2,
    description:
      "International engineering standards delivered with the dedication, responsiveness, and efficiency of our team.",
  },
];

function DiffCard({
  d,
  reduced,
}: {
  d: (typeof differentiators)[0];
  reduced: boolean | null;
}) {
  const cardContent = (
    <>
      <div className="flex items-center gap-3 mb-2" style={{ color: d.color }}>
        <d.Icon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        <h3 className="font-heading text-base font-semibold text-ink">
          {d.label}
        </h3>
      </div>

      <p className="text-muted text-xs sm:text-sm leading-relaxed">{d.description}</p>

      {/* Bottom accent */}
      <div
        className="mt-4 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: d.color }}
      />
    </>
  );

  if (reduced) {
    return (
      <div className="bg-paper p-5 border border-line group hover:border-cat-indigo/30 transition-colors">
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      className="bg-paper p-5 border border-line group transition-all cursor-default"
      whileHover={{
        y: -3,
        boxShadow: "0 8px 24px -6px rgba(10,15,28,.08)",
        borderColor: `${d.color}50`,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {cardContent}
    </motion.div>
  );
}

export function WhyNimbrix() {
  const reduced = useReducedMotion();

  return (
    <section className="section-shell border-b border-line bg-mist">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl mb-6 lg:mb-8">
          <FadeUp>
            <SectionLabel number="06">Why Nimbrix</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)] tracking-tight text-ink mb-2">
              Not another{" "}
              <span className="text-accent">software agency.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Any shop can build a website. We help organisations use technology to genuinely work smarter.
            </p>
          </FadeUp>
        </div>

        {/* 3 + 2 Grid */}
        <div className="space-y-3">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {differentiators.slice(0, 3).map((d) => (
              <DiffCard key={d.label} d={d} reduced={reduced} />
            ))}
          </div>
          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {differentiators.slice(3, 5).map((d) => (
              <DiffCard key={d.label} d={d} reduced={reduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
