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
          backgroundImage: "radial-gradient(circle at 1px 1px, #8338EC 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-[#8338EC]/8 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-[#FFBE0B]/6 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — copy */}
          <div>
            <Badge pillar="ai" dot className="mb-8">
              AI-first Technology Partner
            </Badge>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8 text-white">
              We turn complex{" "}
              <span className="text-[#FFBE0B]">technology</span>
              {" "}into business advantage.
            </h1>

            <p className="text-[#8A95A3] text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
              Nimbrix designs, builds, and operates intelligent systems — AI, software, data, cloud — so you can focus on what your business is actually for.
            </p>

            {/* Capability strip */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["AI & Automation", "Software Engineering", "Data & Analytics", "Cloud & Security", "Managed Services"].map((cap) => (
                <span key={cap} className="font-mono text-[11px] text-[#8A95A3] uppercase tracking-wider">
                  {cap} <span className="text-[#1E2430]">·</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#1E2430] text-[#8A95A3] font-mono text-sm hover:border-[#8338EC] hover:text-[#8338EC] transition-all duration-300"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Right — animated visual panel */}
          <div className="relative h-[440px] lg:h-[520px] bg-[#0D1018] border border-[#1E2430] overflow-hidden">
            {/* Grid pattern inside */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #8338EC 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />

            {/* Glow blob inside panel */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#8338EC]/12 rounded-full blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FFBE0B]/8 rounded-full blur-3xl" aria-hidden />

            {/* Central content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              {/* Pulsing palette dots */}
              <div className="flex gap-3">
                {["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#FF3333"].map((c, i) => (
                  <div
                    key={c}
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: c, animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>

              {/* Data flow diagram */}
              <div className="flex flex-col items-center gap-3 font-mono text-sm">
                <div className="px-4 py-2 border border-[#1E2430] text-[#8A95A3] text-xs">
                  BUSINESS PROBLEM
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-4 bg-gradient-to-b from-[#8338EC] to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8338EC]" />
                </div>
                <div className="px-6 py-3 border border-[#8338EC]/40 bg-[#8338EC]/8 text-[#8338EC] text-xs font-semibold tracking-widest uppercase">
                  Nimbrix Intelligence
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE0B]" />
                  <div className="w-px h-4 bg-gradient-to-b from-[#FFBE0B] to-transparent" />
                </div>
                <div className="px-4 py-2 border border-[#FFBE0B]/30 text-[#FFBE0B] text-xs">
                  BUSINESS OUTCOME
                </div>
              </div>

              {/* Tag line */}
              <p className="font-mono text-[11px] text-[#8A95A3]/40 uppercase tracking-widest">
                inputs → systems → outcomes
              </p>
            </div>

            {/* Corner labels */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-[#8A95A3]/30 uppercase tracking-widest">AI</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-[#8A95A3]/30 uppercase tracking-widest">CLOUD</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-[#8A95A3]/30 uppercase tracking-widest">DATA</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-[#8A95A3]/30 uppercase tracking-widest">SOFTWARE</span>
          </div>
        </div>
      </div>

      {/* Tech strip scroll */}
      <div className="relative border-t border-[#1E2430] overflow-hidden bg-[#070A0F] py-4">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...techStrip, ...techStrip].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-widest text-[#8A95A3]/50"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-[#1E2430]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
