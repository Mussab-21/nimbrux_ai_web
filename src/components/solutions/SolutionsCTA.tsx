"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Code, Layers, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";

const highlights = [
  { icon: ShieldCheck, label: "Full Source & IP Ownership" },
  { icon: Code, label: "Direct Senior Engineering" },
  { icon: Zap, label: "Deterministic Two-Week Sprints" },
  { icon: Layers, label: "Zero Vendor Lock-In" },
];

export function SolutionsCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#070E1B] text-white">
      {/* Background ambient radial gradients (zero filter blur re-rasterization) */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, #2563EB 0%, #1D4ED8 35%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-10 w-[500px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(circle, #4338CA 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 mb-3">
            {"// 04 — GET STARTED"}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-5 leading-tight">
            Ready to turn architecture into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
              production?
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            Tell us what you&apos;re looking to build, modernize, or automate. We&apos;ll schedule an architecture discovery session with zero sales fluff.
          </p>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              whileHover={!reduced ? { scale: 1.02 } : {}}
              whileTap={!reduced ? { scale: 0.98 } : {}}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-semibold rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-200"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-300 hover:text-white font-mono text-sm rounded-lg transition-all duration-200"
            >
              <span>Explore Client Case Studies</span>
            </Link>
          </div>
        </FadeUp>

        {/* Highlight trust badges */}
        <FadeUp delay={0.24}>
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{h.label}</span>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
