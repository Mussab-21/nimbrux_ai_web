"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillarHeroVisual } from "./PillarHeroVisual";
import { servicePillars } from "@/lib/services-data";

interface Service {
  name: string;
  description: string;
  items: string[];
}

interface CaseStudyRef {
  slug: string;
  title: string;
  description: string;
}

interface PillarPageProps {
  pillar: string;
  color: string;
  label: string;
  tagline: string;
  heroHeading: string;
  heroDescription: string;
  services: Service[];
  included: string[];
  caseStudies: CaseStudyRef[];
  tech?: string[];
  highlightPhrase?: string;
}

function renderHeroHeading(heading: string, pillar: string, customHighlight?: string) {
  // Determine key phrase for brand-blue gradient treatment
  let phraseToHighlight = customHighlight;
  if (!phraseToHighlight) {
    if (heading.includes("Intelligent systems")) phraseToHighlight = "Intelligent systems";
    else if (heading.includes("Infrastructure")) phraseToHighlight = "Infrastructure";
    else if (heading.includes("reliably managed")) phraseToHighlight = "reliably managed";
    else if (heading.includes("actually help you")) phraseToHighlight = "actually help you";
    else {
      // fallback to first two words
      const parts = heading.split(" ");
      phraseToHighlight = parts.slice(0, 2).join(" ");
    }
  }

  if (!heading.includes(phraseToHighlight)) {
    return heading;
  }

  const parts = heading.split(phraseToHighlight);
  return (
    <>
      {parts[0]}
      <span className="inline-block bg-gradient-to-r from-accent via-cat-blue to-cat-indigo bg-clip-text text-transparent pb-1">
        {phraseToHighlight}
      </span>
      {parts.slice(1).join(phraseToHighlight)}
    </>
  );
}

export function PillarPage({
  pillar,
  color,
  label,
  tagline,
  heroHeading,
  heroDescription,
  services,
  included,
  caseStudies,
  tech,
  highlightPhrase,
}: PillarPageProps) {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Fallback to tech from servicePillars if not explicitly provided
  const pillarData = servicePillars.find((p) => p.pillar === pillar);
  const techStack = tech || pillarData?.tech || [];

  // Spotlight cursor tracking via CSS variables in rAF (Zero React state overhead)
  useEffect(() => {
    if (reduced) return;
    const hero = heroRef.current;
    if (!hero) return;

    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        hero.style.setProperty("--spotlight-x", `${x}px`);
        hero.style.setProperty("--spotlight-y", `${y}px`);
      });
    };

    hero.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  const taglineWords = tagline.split(" ");

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[90svh] lg:h-[90svh] flex flex-col justify-between overflow-hidden pt-[72px] bg-paper border-b border-line"
        style={{
          ["--spotlight-x" as string]: "50%",
          ["--spotlight-y" as string]: "40%",
        }}
      >
        {/* Background dot grid + cursor spotlight */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-500"
            style={{
              background: `radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), ${color}14, transparent 70%)`,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:py-4 w-full flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge pillar={pillar.toLowerCase()} dot className="mb-4">
                  PILLAR {pillar} — {label.toUpperCase()}
                </Badge>
              </motion.div>

              {/* Tagline staggered per word */}
              <div
                className="font-mono text-sm italic mb-3 flex flex-wrap"
                style={{ color, opacity: 0.9 }}
              >
                {taglineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: reduced ? 0 : 0.08 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-1.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Line-by-line reveal H1 with brand-blue gradient on key word/phrase */}
              <div className="overflow-hidden mb-5">
                <motion.h1
                  initial={reduced ? false : { y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: reduced ? 0 : 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(2.2rem,3.2vw,3.6rem)] tracking-tight text-ink leading-[1.1]"
                >
                  {renderHeroHeading(heroHeading, pillar, highlightPhrase)}
                </motion.h1>
              </div>

              {/* Paragraph fade up */}
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: reduced ? 0 : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
              >
                {heroDescription}
              </motion.p>

              {/* Buttons with shine sweep and arrow nudge */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: reduced ? 0 : 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <Link
                  href="/contact"
                  className="relative group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold shadow-elev-1 hover:shadow-elev-2 active:scale-[0.98] transition-all duration-200 overflow-hidden rounded-sm"
                >
                  {/* Shine sweep effect */}
                  <span
                    className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-transform duration-700 ease-in-out pointer-events-none"
                    aria-hidden
                  />
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/solutions"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-line text-muted font-mono text-sm hover:border-accent hover:text-accent bg-paper/60 transition-all duration-300 rounded-sm"
                >
                  <span>All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
                </Link>
              </motion.div>

              {/* STACK chips row */}
              {techStack.length > 0 && (
                <motion.div
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: reduced ? 0 : 0.4 }}
                  className="flex items-center gap-2 pt-2 border-t border-line/60"
                >
                  <span className="font-mono text-[10px] uppercase text-muted/70 tracking-wider">
                    Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-muted bg-paper px-2 py-0.5 rounded border border-line shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right visual side */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <PillarHeroVisual pillar={pillar} color={color} label={label} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Services in this pillar</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-16">
            What we <span style={{ color }}>build</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {services.map((svc) => (
              <div key={svc.name} className="bg-paper p-8 lg:p-10 group hover:bg-mist transition-colors">
                <h3
                  className="font-heading text-xl font-semibold mb-3 group-hover:opacity-90 transition-opacity"
                  style={{ color }}
                >
                  {svc.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-mono text-xs text-muted">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: color, opacity: 0.6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 border-b border-line bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Engagement scope</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-6">
            What&apos;s included
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            Our engagements are clear-scoped from the start. Here&apos;s what every {label} project includes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 border border-line"
              >
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color, opacity: 0.7 }}
                />
                <span className="font-mono text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.length > 0 && (
        <section className="py-24 border-b border-line">
          <div className="max-w-7xl mx-auto px-6">
            <SectionLabel>Real projects</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-12">
              Related work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="group border border-line p-8 hover:border-line transition-all"
                  style={{ borderColor: `#E3E8EF` }}
                >
                  <h3
                    className="font-heading text-xl mb-3 transition-colors group-hover:opacity-80"
                    style={{ color }}
                  >
                    {cs.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{cs.description}</p>
                  <div
                    className="inline-flex items-center gap-2 font-mono text-xs transition-colors group"
                    style={{ color }}
                  >
                    View case study
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-6">
            Ready to{" "}
            <span style={{ color }}>get started?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Tell us about your challenge. We&apos;ll give you an honest assessment and a clear path forward.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 font-mono text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: color, color: "#FFFFFF" }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
