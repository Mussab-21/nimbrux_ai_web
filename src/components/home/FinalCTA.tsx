"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

const trustBadges = [
  { label: "AI-first engineering" },
  { label: "Outcome-focused" },
  { label: "Global delivery" },
  { label: "Long-term partnership" },
];

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="section-shell bg-paper relative overflow-hidden">
      {/* Animated drifting blobs */}
      {!reduced && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
            style={{ backgroundColor: "rgba(67,56,202,0.05)" }}
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: "rgba(180,83,9,0.04)" }}
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 }}
            aria-hidden
          />
        </>
      )}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #0B57D0 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
        <FadeUp>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
            Let&apos;s build something
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.1rem,2.8vw,3.25rem)] tracking-tight text-ink mb-4 leading-[1.1]">
            Have a problem{" "}
            <span className="text-accent">worth solving?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us what you&apos;re trying to build, automate, or transform. We&apos;ll map the right approach and give you an honest assessment — no pitch decks, no pressure.
          </p>
        </FadeUp>

        <FadeUp delay={0.22}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.div
              whileHover={!reduced ? { scale: 1.02 } : {}}
              whileTap={!reduced ? { scale: 0.98 } : {}}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-muted font-mono text-sm hover:border-cat-indigo hover:text-cat-indigo transition-all duration-300"
            >
              Explore our capabilities
            </Link>
          </div>
        </FadeUp>

        {/* Staggered trust badges */}
        <StaggerGroup
          className="mt-10 pt-8 border-t border-line flex flex-wrap justify-center gap-6"
          stagger={0.1}
          delayChildren={0.1}
        >
          {trustBadges.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {item.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
