"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, Target, Handshake, Globe2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

const differentiators = [
  {
    label: "AI-first",
    color: "#4338CA",
    Icon: Bot,
    description:
      "We look for opportunities to eliminate repetitive work in every engagement — not as an add-on, but as a core design principle. If it can be automated intelligently, we'll architect it that way.",
  },
  {
    label: "Engineering-led",
    color: "#0B57D0",
    Icon: Code2,
    description:
      "Solutions are built around reliable architecture, not quick hacks. Every system we deliver is designed to hold up as you scale — readable code, documented, properly tested.",
  },
  {
    label: "Outcome-driven",
    color: "#B45309",
    Icon: Target,
    description:
      "We measure success in business results: hours saved, processes automated, systems connected, revenue enabled. Not lines of code shipped.",
  },
  {
    label: "Long-term partner",
    color: "#0F766E",
    Icon: Handshake,
    description:
      "We build, then we can manage and improve. Most clients start with a project and grow into an ongoing relationship — managed services, advisory, new capabilities as your business evolves.",
  },
  {
    label: "Global delivery, local insight",
    color: "#1E40AF",
    Icon: Globe2,
    description:
      "Built from Pakistan for international clients. We combine global-standard engineering practices with the cost efficiency and dedication of a team that genuinely wants your project to succeed.",
  },
];

function DiffCard({
  d,
  i,
  reduced,
}: {
  d: (typeof differentiators)[0];
  i: number;
  reduced: boolean | null;
}) {
  const cardContent = (
    <>
      {/* Icon with micro-animation */}
      <motion.div
        className="mb-6"
        style={{ color: d.color }}
        whileHover={!reduced ? { scale: 1.15, rotate: 5 } : {}}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      >
        <d.Icon className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      <h3
        className="font-heading text-xl font-semibold mb-4 transition-colors"
        style={{ color: d.color }}
      >
        {d.label}
      </h3>

      <p className="text-muted text-sm leading-relaxed">{d.description}</p>

      {/* Bottom accent */}
      <div
        className="mt-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: d.color }}
      />
    </>
  );

  if (reduced) {
    return (
      <div
        className={`bg-mist p-8 lg:p-10 group hover:bg-paper transition-colors ${
          i === 4 ? "md:col-span-2 lg:col-span-1" : ""
        }`}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-mist p-8 lg:p-10 group transition-colors cursor-default ${
        i === 4 ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      whileHover={{
        y: -4,
        backgroundColor: "var(--paper)",
        boxShadow:
          "0 12px 32px -8px rgba(10,15,28,.10), 0 4px 8px -4px rgba(10,15,28,.06)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {cardContent}
    </motion.div>
  );
}

export function WhyNimbrix() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 border-b border-line bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <FadeUp>
            <SectionLabel number="06">Why Nimbrix</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink mb-6">
              Not another{" "}
              <span className="text-accent">software agency.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-muted text-lg leading-relaxed">
              Any shop can build a website. We&apos;re here for the harder problem: helping organisations use technology to genuinely work smarter.
            </p>
          </FadeUp>
        </div>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line"
          stagger={0.08}
        >
          {differentiators.map((d, i) => (
            <StaggerItem key={d.label}>
              <DiffCard d={d} i={i} reduced={reduced} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
