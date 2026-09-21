"use client";

import Link from "next/link";
import {
  Rocket,
  Building2,
  HeartHandshake,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Factory,
  Truck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import audiencesData from "../../../content/who-we-serve.json";

const audienceIconMap: Record<string, typeof Rocket> = {
  Rocket,
  Building2,
  HeartHandshake,
};

const industries = [
  { id: "startups", label: "Startups & SMBs", Icon: Rocket },
  { id: "retail", label: "Retail & E-commerce", Icon: ShoppingBag },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "healthcare", label: "Healthcare", Icon: HeartPulse },
  { id: "finance", label: "Finance", Icon: TrendingUp },
  { id: "manufacturing", label: "Manufacturing", Icon: Factory },
  { id: "realestate", label: "Real Estate", Icon: Building2 },
  { id: "logistics", label: "Logistics", Icon: Truck },
  { id: "government", label: "Government", Icon: Landmark },
];

export function WhoWeServe() {
  const reduced = useReducedMotion();

  return (
    <section className="section-shell border-b border-line bg-paper content-auto" id="who-we-serve">
      <div className="max-w-7xl mx-auto px-6 w-full py-4 lg:py-6 flex flex-col justify-center">
        {/* Section Header: Centered label, heading, and subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <SectionLabel number="04">Who We Serve</SectionLabel>
          </motion.div>

          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-2xl sm:text-3xl lg:text-[clamp(1.75rem,2.3vw,2.4rem)] tracking-tight text-ink font-bold mb-2.5"
          >
            Built for teams that want to move faster.
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            From first-time founders to established teams and non-profits, we design systems
            around how your business actually works.
          </motion.p>
        </div>

        {/* 3 Columns separated by thin vertical dividers on desktop */}
        <div className="relative border border-line/80 bg-paper/60 rounded-lg overflow-hidden">
          {/* Vertical dividers that draw top-to-bottom on scroll-in */}
          <motion.div
            className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-line/80 z-10"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            aria-hidden
          />
          <motion.div
            className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-line/80 z-10"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-line/80">
            {audiencesData.map((item, index) => {
              const Icon = audienceIconMap[item.icon] || Rocket;
              const accentColor = item.color || "#0B57D0";

              return (
                <motion.div
                  key={item.id}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col p-6 lg:p-7 transition-all duration-300 hover:bg-mist/70 hover:-translate-y-0.5"
                >
                  {/* Outlined Icon Box: spring scale in, tilt/float on hover, brand glow */}
                  <motion.div
                    initial={reduced ? false : { scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="w-12 h-12 rounded-xl border border-line bg-paper flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_18px_rgba(11,87,208,0.12)]"
                    style={{
                      borderColor: undefined,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-y-0.5"
                      style={{ color: accentColor }}
                      aria-hidden
                    />
                  </motion.div>

                  {/* Title with growing gradient underline on hover */}
                  <div className="relative inline-block self-start mb-2.5">
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-ink tracking-tight">
                      {item.title}
                    </h3>
                    <span
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-accent to-cat-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                      aria-hidden
                    />
                  </div>

                  {/* Body text */}
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compact Industry Chips: Single row or max 2 rows wrapping */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 lg:mt-7 pt-4 border-t border-line/80 relative overflow-hidden"
        >
          {/* Subtle slow highlight shimmer across chips */}
          {!reduced && (
            <motion.div
              className="pointer-events-none absolute -inset-y-2 w-1/3 bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "350%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
              aria-hidden
            />
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 whitespace-nowrap flex items-center gap-1.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" aria-hidden />
              Industries we work in:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.id}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.55 + i * 0.03,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/industries#${ind.id}`}
                    className="group inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-muted bg-paper border border-line rounded transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:bg-accent/[0.04] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    aria-label={`Learn about our work in ${ind.label}`}
                  >
                    <ind.Icon
                      className="w-3.5 h-3.5 text-muted/70 group-hover:text-accent transition-colors duration-200"
                      aria-hidden
                    />
                    <span>{ind.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button centred below */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 lg:mt-7 text-center"
        >
          <motion.div
            className="inline-block"
            whileHover={!reduced ? { scale: 1.02 } : {}}
            whileTap={!reduced ? { scale: 0.98 } : {}}
            transition={{ duration: 0.15 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <span>Talk to us</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
