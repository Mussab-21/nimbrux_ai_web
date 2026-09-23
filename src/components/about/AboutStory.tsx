"use client";

import { MapPin, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutStory() {
  const reduced = useReducedMotion();

  return (
    <section id="story" className="py-20 lg:py-24 border-b border-line bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story narrative */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="lg:col-span-7"
          >
            <SectionLabel>Our story</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-6">
              Why we <span className="text-accent">exist</span>
            </h2>

            <div className="space-y-4 text-muted text-base leading-relaxed max-w-2xl">
              <p>
                Nimbrix started from a frustration: too many technology companies were selling capabilities,
                not outcomes. Too much consulting that produced slide decks. Too many development shops
                that disappeared after launch.
              </p>
              <p>
                We built Nimbrix to be the partner we&apos;d want to work with — one that understands
                business problems first, builds real systems second, and stays engaged after delivery
                to make sure things actually work in production.
              </p>
              <p>
                We&apos;re based in Pakistan and built for global clients. That combination gives our clients
                serious engineering capability at a cost structure that makes ambitious projects feasible.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Direction & Location Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* What we're building toward card */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : 0.1, ease: EASE }}
              className="p-6 sm:p-7 bg-mist/60 border border-line rounded-2xl shadow-2xs hover:shadow-elev-1 transition-all"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What We&apos;re Building Toward</span>
              </div>
              <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3">
                We&apos;re a growing company. Right now, we&apos;re best at project-based AI, software,
                and data engagements — and selectively taking on advisory and managed services work.
              </p>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                The five-pillar model is where we&apos;re going: a full-capability technology partner
                across AI, cloud, software, managed services, and our own products. We&apos;re building
                toward that deliberately, not pretending it&apos;s already here.
              </p>
            </motion.div>

            {/* Location & Delivery Card */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : 0.18, ease: EASE }}
              className="flex items-start gap-4 p-5 sm:p-6 bg-paper border border-line rounded-2xl shadow-2xs hover:border-line hover:shadow-elev-1 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                  Pakistan · Global Delivery
                </div>
                <div className="text-muted text-xs sm:text-sm leading-relaxed">
                  Headquartered in Pakistan. Working with clients across the Middle East, UK, Europe,
                  and North America.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
