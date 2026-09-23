"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function InsightsHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px 0px" });
  const reduced = useReducedMotion();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  // Calm looping progress bar for reading indicator
  useEffect(() => {
    if (reduced || !isInView) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => clearInterval(interval);
  }, [reduced, isInView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -2.5;
    const tiltY = ((x - centerX) / centerX) * 3;
    setMousePos({ x: tiltY, y: tiltX });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      initial={reduced ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      style={{
        transform:
          reduced || typeof window === "undefined" || window.innerWidth < 1024
            ? undefined
            : `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
      }}
      className="relative w-full max-w-[480px] flex items-center justify-center p-2"
    >
      {/* Background Silhouette Card 2 (Bottom layer) */}
      <div
        className="absolute w-[88%] h-[280px] bg-paper/60 border border-line/50 rounded-2xl shadow-xs translate-y-6 rotate-2 pointer-events-none"
        aria-hidden
      />

      {/* Background Silhouette Card 1 (Middle layer) */}
      <div
        className="absolute w-[94%] h-[290px] bg-paper/80 border border-line/70 rounded-2xl shadow-xs translate-y-3 -rotate-1 pointer-events-none"
        aria-hidden
      />

      {/* Foreground Active Editorial Card */}
      <div className="relative z-10 w-full bg-paper/95 backdrop-blur-md border border-line/90 rounded-2xl p-6 sm:p-7 shadow-elev-2 transition-transform duration-200 ease-out">
        {/* Ambient teal-blue soft accent */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-[0.07] bg-cat-teal"
          aria-hidden
        />

        {/* Header bar: Research dispatch */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-line text-[11px] font-mono">
          <div className="flex items-center gap-2 text-ink font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>FIELD RESEARCH // ESSAY</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted text-[10px] bg-mist px-2 py-0.5 rounded border border-line/60">
            <Clock className="w-3 h-3 text-cat-teal" />
            <span>7 MIN READ</span>
          </div>
        </div>

        {/* Category tag */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 border border-accent/25 px-2 py-0.5 rounded">
            AI ADVISORY
          </span>
          <span className="font-mono text-[10px] text-muted">
            SEP 2025 · VOL 01
          </span>
        </div>

        {/* Title */}
        <Link
          href="/insights/where-ai-actually-helps"
          className="group block mb-2"
        >
          <h3 className="font-heading text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors leading-snug">
            Where AI Actually Helps Your Business (And Where It Doesn&apos;t)
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted text-xs leading-relaxed mb-4">
          Most advice tells you to adopt everything immediately. A more useful framework:
          the 4 questions to answer before allocating capital.
        </p>

        {/* Stylized Document Lines writing themselves */}
        <div className="space-y-1.5 py-3 px-3.5 bg-mist/60 border border-line/60 rounded-xl mb-4 font-mono text-[11px]">
          <div className="flex items-center text-muted/70">
            <span className="text-accent/60 mr-2">01</span>
            <span className="text-ink/80 font-medium">What is the actual operational output?</span>
          </div>
          <div className="flex items-center text-muted/70">
            <span className="text-accent/60 mr-2">02</span>
            <span>Where does manual time leak right now?</span>
          </div>
          <div className="flex items-center text-muted/70">
            <span className="text-accent/60 mr-2">03</span>
            <span>Does this require predictive or deterministic logic?</span>
            <span className="inline-block w-1.5 h-3 bg-accent ml-1 animate-pulse" />
          </div>
        </div>

        {/* Calm reading progress accent bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-muted">
            <span>READING PROGRESS</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-line/80 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-cat-teal rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-4 pt-3 border-t border-line flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted">
            Published by Nimbrix Engineering
          </span>
          <Link
            href="/insights/where-ai-actually-helps"
            className="font-mono text-xs text-accent hover:text-accent-hover font-semibold flex items-center gap-1 group"
          >
            <span>Read essay</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
