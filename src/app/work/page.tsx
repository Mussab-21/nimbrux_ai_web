import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { getCaseStudies } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { TechIcon } from "@/components/ui/TechIcons";

export const metadata: Metadata = {
  title: "Work — Projects & Case Studies",
  description:
    "Real projects, real outcomes. Explore production AI pipelines, automation bots, and web platforms shipped by Nimbrix.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="bg-[#0A0D14] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-20 border-b border-[#1E2430]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="software" dot className="mb-6">
              Portfolio &amp; Case Studies
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] mb-6">
              Real projects,{" "}
              <span className="text-[#FFBE0B]">proven outcomes.</span>
            </h1>
            <p className="text-[#8A95A3] text-lg md:text-xl leading-relaxed">
              We engineer scalable software, AI pipelines, and workflow automation bots. Explore our open-source repositories and production case studies below.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {caseStudies.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-[#8A95A3]">Case studies coming soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.slug}
                  className="group block border border-[#1E2430] p-8 lg:p-10 hover:border-[#2B3245] bg-[#0D1018] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className="font-mono text-xs uppercase tracking-widest font-bold"
                          style={{ color: cs.accentColor }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#1E2430]" />
                        <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                          {cs.industry}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#1E2430]" />
                        <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                          {cs.category}
                        </span>
                      </div>

                      <Link href={`/work/${cs.slug}`}>
                        <h2
                          className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-3 hover:underline transition-colors"
                        >
                          {cs.title}
                        </h2>
                      </Link>

                      <p className="text-[#8A95A3] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                        {cs.summary}
                      </p>

                      {/* Tech stack with icons */}
                      <div className="flex flex-wrap gap-2">
                        {cs.tech.map((t) => (
                          <TechIcon key={t} name={t} />
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
                      <Link
                        href={`/work/${cs.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2.5 bg-[#FFBE0B] text-[#0A0D14] hover:bg-[#FB5607] hover:text-white transition-colors w-full sm:w-auto justify-center"
                      >
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {cs.githubUrl && (
                        <a
                          href={cs.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs border border-[#1E2430] px-4 py-2.5 text-white hover:border-[#FFBE0B] hover:text-[#FFBE0B] transition-colors w-full sm:w-auto justify-center"
                        >
                          <GitBranch className="w-3.5 h-3.5 text-[#8A95A3]" />
                          GitHub Repo
                          <ExternalLink className="w-3 h-3 text-[#8A95A3]" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent indicator */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: cs.accentColor }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
