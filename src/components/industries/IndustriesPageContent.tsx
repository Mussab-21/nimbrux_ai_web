"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustriesHero } from "./IndustriesHero";
import { IndustriesExplorer } from "./IndustriesExplorer";

export function IndustriesPageContent() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("startups");

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <IndustriesHero onSelectIndustry={setSelectedIndustryId} />

      {/* Single-view Explorer Section */}
      <IndustriesExplorer
        activeIndustryId={selectedIndustryId}
        onIndustryChange={setSelectedIndustryId}
      />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 border-t border-line bg-mist/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-3 tracking-tight">
              Don&apos;t see your sector?
            </h2>
            <p className="text-muted text-base max-w-xl leading-relaxed">
              The underlying operational problems are often the same — get in touch and we&apos;ll
              tell you honestly whether we can help.
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
