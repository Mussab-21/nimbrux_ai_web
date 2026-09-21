import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
}: PillarPageProps) {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line relative overflow-hidden">
        {/* Bg blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-[0.07]"
          style={{ backgroundColor: color }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar={pillar.toLowerCase()} dot className="mb-8">
              Pillar {pillar} — {label}
            </Badge>

            <div
              className="font-mono text-sm italic mb-4"
              style={{ color: color, opacity: 0.8 }}
            >
              {tagline}
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05] mb-8">
              {heroHeading}
            </h1>

            <p className="text-muted text-xl leading-relaxed mb-10 max-w-2xl">
              {heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 font-mono text-sm font-semibold transition-all duration-300"
                style={{
                  backgroundColor: color,
                  color: "#FFFFFF",
                }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 px-7 py-4 border border-line text-muted font-mono text-sm hover:border-line hover:text-ink transition-all duration-300"
              >
                All Services
              </Link>
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
