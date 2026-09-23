import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";

export const metadata: Metadata = buildMetadata({
  title: "About Nimbrix",
  description:
    "Who we are, how we work, and what we will and will not take on. An engineering-led AI and software company built for long-term client relationships.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero with Nimbrix Core Visual */}
      <AboutHero />

      {/* Story Narrative & Direction */}
      <AboutStory />

      {/* Values & Operational Tenets */}
      <AboutValues />

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-2">
              Work with us
            </h2>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              If you have a technology problem worth solving and want a partner who&apos;ll be honest
              with you about what will and won&apos;t work — get in touch.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group relative inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold shadow-elev-1 hover:shadow-elev-2 active:scale-[0.98] transition-all duration-300 overflow-hidden rounded-sm"
          >
            <span
              className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 -skew-x-12 -translate-x-16 group-hover:translate-x-64 transition-transform duration-700 ease-in-out pointer-events-none"
              aria-hidden
            />
            <span className="relative z-10">Start a Conversation</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
