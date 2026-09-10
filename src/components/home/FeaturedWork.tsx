import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const caseStudies = [
  {
    slug: "neki-sub-say",
    number: "01",
    industry: "Non-Profit",
    title: "NEIKI Sub Say Foundation",
    description:
      "End-to-end full-stack digital platform — impact galleries, donor management, and a Supabase-powered donation flow for a non-profit operating across multiple regions.",
    challenge: "Manual donation tracking, no online presence, disconnected volunteer management.",
    outcome: "Complete digital infrastructure launched within 6 weeks.",
    tech: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    accentColor: "#FFBE0B",
    category: "Web & Software",
  },
  {
    slug: "atc-corporate",
    number: "02",
    industry: "Engineering & Construction",
    title: "ATC Corporate",
    description:
      "Complete digital presence redesign for a leading contracting firm, built on a custom \"Steel & Brass\" design system. Corporate site, project showcase, and technical documentation system.",
    challenge: "Outdated web presence not matching the scale and quality of the company's actual work.",
    outcome: "Modern digital brand reflecting the company's capabilities and portfolio.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    accentColor: "#8338EC",
    category: "Web Design",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1E2430]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <SectionLabel number="03">Selected Work</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Real projects,{" "}
              <span className="text-[#FFBE0B]">real outcomes.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-sm text-[#FFBE0B] hover:text-[#FB5607] transition-colors flex-shrink-0"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block border border-[#1E2430] hover:border-[#1E2430] transition-all duration-300 overflow-hidden"
              style={{
                "--accent": cs.accentColor,
              } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image panel */}
                <div
                  className={`lg:col-span-7 aspect-video relative overflow-hidden bg-[#0D1018] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {/* Placeholder visual */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${cs.accentColor} 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="w-16 h-16 border-2 opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ borderColor: cs.accentColor }}
                      />
                      <span className="font-mono text-xs text-[#8A95A3]/40 uppercase tracking-widest">
                        {cs.title}
                      </span>
                    </div>
                  </div>
                  {/* Color overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundColor: cs.accentColor }}
                  />
                </div>

                {/* Content panel */}
                <div
                  className={`lg:col-span-5 p-8 lg:p-10 xl:p-14 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-mono text-xs uppercase tracking-widest opacity-50"
                      style={{ color: cs.accentColor }}
                    >
                      {cs.number}
                    </span>
                    <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                      {cs.industry}
                    </span>
                  </div>

                  <h3
                    className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-4 group-hover:text-white transition-colors leading-tight"
                  >
                    {cs.title}
                  </h3>

                  <p className="text-[#8A95A3] text-sm leading-relaxed mb-8">
                    {cs.description}
                  </p>

                  {/* Challenge → Outcome */}
                  <div className="space-y-3 mb-8">
                    <div className="flex gap-3">
                      <span className="font-mono text-[11px] text-[#8A95A3]/50 uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">Challenge</span>
                      <p className="font-mono text-xs text-[#8A95A3]">{cs.challenge}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider w-16 flex-shrink-0 pt-0.5" style={{ color: cs.accentColor, opacity: 0.7 }}>Outcome</span>
                      <p className="font-mono text-xs text-white/70">{cs.outcome}</p>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 font-mono text-[11px] border border-[#1E2430] text-[#8A95A3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center gap-2 font-mono text-sm transition-colors group-hover:gap-3"
                    style={{ color: cs.accentColor }}
                  >
                    View case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: cs.accentColor }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
