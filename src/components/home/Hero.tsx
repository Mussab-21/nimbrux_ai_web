"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { HeroSystemVisual } from "./HeroSystemVisual";
import { Marquee } from "@/components/motion/Marquee";

const rotatingWords = ["advantage", "automation", "intelligence", "scale"];
const WORD_INTERVAL = 3000;

const techStrip = [
  "Next.js", "Python", "Node.js", "React", "AWS", "Azure",
  "LangChain", "n8n", "PostgreSQL", "Docker", "Tailwind", "TypeScript",
  "Supabase", "Framer Motion", "OpenAI", "Gemini", "Power BI",
];

export function Hero() {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, WORD_INTERVAL);
    return () => clearInterval(timer);
  }, [reduced]);

  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE, delay: d },
    }),
  };

  return (
    <section className="relative min-h-[90svh] lg:h-[90svh] flex flex-col justify-between overflow-hidden pt-[72px] snap-start">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Base dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient radial gradients (zero blur re-rasterization) */}
        <div
          className="absolute top-10 left-[10%] w-[550px] h-[550px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(67, 56, 202, 0.08) 0%, rgba(67, 56, 202, 0) 70%)",
          }}
          aria-hidden
        />
        <div
          className="absolute bottom-10 right-[5%] w-[450px] h-[450px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(11, 87, 208, 0.05) 0%, rgba(11, 87, 208, 0) 70%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 lg:py-3 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left — copy with staggered entrance */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge pillar="ai" dot className="mb-4">
                AI-first Technology Partner
              </Badge>
            </motion.div>

            {/* Headline with rotating word */}
            <motion.h1
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.1rem,2.8vw,3.25rem)] leading-[1.12] tracking-tight mb-4 text-ink"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
            >
              We turn complex{" "}
              <span className="text-accent">technology</span>
              {" "}into business{" "}
              {reduced ? (
                <span className="text-accent">advantage.</span>
              ) : (
                <span className="inline-flex items-baseline" style={{ minWidth: "180px" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      className="text-accent"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {rotatingWords[wordIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              )}
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-4 max-w-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
            >
              Nimbrix designs, builds, and operates intelligent systems — AI, software, data, cloud — so you can focus on what your business is actually for.
            </motion.p>

            {/* Capability strip */}
            <motion.div
              className="flex flex-wrap gap-x-2 gap-y-1 mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.32}
            >
              {["AI & Automation", "Software Engineering", "Data & Analytics", "Cloud & Security", "Managed Services"].map((cap) => (
                <span key={cap} className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  {cap} <span className="text-line">·</span>
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <motion.div
                whileHover={!reduced ? { scale: 1.02 } : {}}
                whileTap={!reduced ? { scale: 0.98 } : {}}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-muted font-mono text-sm hover:border-cat-indigo hover:text-cat-indigo transition-all duration-300"
              >
                Explore Capabilities
              </Link>
            </motion.div>
          </div>

          {/* Right — HeroSystemVisual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="w-full"
          >
            <HeroSystemVisual />
          </motion.div>
        </div>
      </div>

      {/* Tech strip marquee */}
      <div className="relative border-t border-line bg-mist py-3">
        <Marquee speed={35} className="py-0">
          {techStrip.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-widest text-muted/50"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-line" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
