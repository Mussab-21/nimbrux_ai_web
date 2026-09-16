"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const techStrip = [
  "Next.js", "Python", "Node.js", "React", "AWS", "Azure",
  "LangChain", "n8n", "PostgreSQL", "Docker", "Tailwind", "TypeScript",
  "Supabase", "Framer Motion", "OpenAI", "Gemini", "Power BI",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-cat-indigo/10 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — copy */}
          <div>
            <Badge pillar="ai" dot className="mb-8">
              AI-first Technology Partner
            </Badge>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8 text-ink">
              We turn complex{" "}
              <span className="text-accent">technology</span>
              {" "}into business advantage.
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
              Nimbrix designs, builds, and operates intelligent systems — AI, software, data, cloud — so you can focus on what your business is actually for.
            </p>

            {/* Capability strip */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["AI & Automation", "Software Engineering", "Data & Analytics", "Cloud & Security", "Managed Services"].map((cap) => (
                <span key={cap} className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  {cap} <span className="text-line">·</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 border border-line text-muted font-mono text-sm hover:border-cat-indigo hover:text-cat-indigo transition-all duration-300"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Right — animated visual panel */}
          <div className="relative h-[440px] lg:h-[520px] bg-mist border border-line overflow-hidden">
            {/* Grid pattern inside */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />

            {/* Glow blob inside panel */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-cat-indigo/10 rounded-full blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" aria-hidden />

            {/* Central content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              {/* Pulsing palette dots */}
              <div className="flex gap-3">
                {["#0B57D0", "#B45309", "#0F766E", "#4338CA", "#1E40AF"].map((c, i) => (
                  <div
                    key={c}
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: c, animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>

              {/* Data flow diagram */}
              <div className="flex flex-col items-center gap-3 font-mono text-sm">
                <div className="px-4 py-2 border border-line text-muted text-xs">
                  BUSINESS PROBLEM
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-4 bg-gradient-to-b from-cat-indigo to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cat-indigo" />
                </div>
                <div className="px-6 py-3 border border-cat-indigo/40 bg-cat-indigo/10 text-cat-indigo text-xs font-semibold tracking-widest uppercase">
                  Nimbrix Intelligence
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="w-px h-4 bg-gradient-to-b from-accent to-transparent" />
                </div>
                <div className="px-4 py-2 border border-accent/30 text-accent text-xs">
                  BUSINESS OUTCOME
                </div>
              </div>

              {/* Tag line */}
              <p className="font-mono text-[11px] text-muted/40 uppercase tracking-widest">
                inputs → systems → outcomes
              </p>
            </div>

            {/* Corner labels */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-muted/30 uppercase tracking-widest">AI</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-muted/30 uppercase tracking-widest">CLOUD</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-muted/30 uppercase tracking-widest">DATA</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-muted/30 uppercase tracking-widest">SOFTWARE</span>
          </div>
        </div>
      </div>

      {/* Tech strip scroll */}
      <div className="relative border-t border-line overflow-hidden bg-mist py-4">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...techStrip, ...techStrip].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-widest text-muted/50"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-line" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
