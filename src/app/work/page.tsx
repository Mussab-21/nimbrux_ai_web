import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudies } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "Real projects, real outcomes. Browse Nimbrix case studies across AI, software, data, and cloud.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="bg-[#0A0D14] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-[#1E2430]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="software" dot className="mb-8">
              Case Studies
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] mb-8">
              Real projects,{" "}
              <span className="text-[#FFBE0B]">real outcomes.</span>
            </h1>
            <p className="text-[#8A95A3] text-xl leading-relaxed">
              We partner with organizations to build systems that actually work. Here&apos;s a selection of what we&apos;ve shipped.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {caseStudies.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-[#8A95A3]">Case studies coming soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {caseStudies.map((cs, i) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="group block border border-[#1E2430] p-8 lg:p-12 hover:bg-[#0D1018] transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className="font-mono text-xs uppercase tracking-widest opacity-50"
                          style={{ color: cs.accentColor }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                          {cs.industry}
                        </span>
                        <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                          {cs.category}
                        </span>
                      </div>
                      <h2
                        className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-3 group-hover:opacity-80 transition-opacity"
                        style={{ color: cs.accentColor }}
                      >
                        {cs.title}
                      </h2>
                      <p className="text-[#8A95A3] text-base leading-relaxed mb-6 max-w-xl">
                        {cs.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cs.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 font-mono text-xs border border-[#1E2430] text-[#8A95A3]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex justify-end">
                      <div
                        className="inline-flex items-center gap-2 font-mono text-sm transition-all group-hover:gap-3"
                        style={{ color: cs.accentColor }}
                      >
                        View case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
