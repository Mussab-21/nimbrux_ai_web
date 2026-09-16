import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, Users, Shield, Target } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "About Nimbrix",
  description: "Who we are, how we work, and what we will and will not take on. An engineering-led AI and software company built for long-term client relationships.",
  path: "/about",
});

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    label: "Outcome-first",
    description: "We measure success in business results, not deliverables. Every technical decision traces back to a business outcome.",
    color: "#0B57D0",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: "Honest advice",
    description: "If a project won't work, we'll tell you before we take your money. If AI won't actually help, we'll say so.",
    color: "#4338CA",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    label: "Engineering quality",
    description: "We build things properly. Clean code, documented systems, proper architecture — so it works today and holds up at scale.",
    color: "#B45309",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Long-term partnership",
    description: "Projects end; relationships shouldn't. Most of our best outcomes come from clients we work with over years, not weeks.",
    color: "#0F766E",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-[0.05]"
          style={{ backgroundColor: "#0B57D0" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="ai" dot className="mb-8">
              About Nimbrix
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05] mb-8">
              Built to solve{" "}
              <span className="text-accent">harder problems.</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Nimbrix is an AI-first technology company. We design, build, and operate intelligent systems for ambitious organizations — the ones that want to actually use technology, not just buy it.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Our story</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-8">
                Why we exist
              </h2>
              <div className="space-y-5 text-muted text-base leading-relaxed">
                <p>
                  Nimbrix started from a frustration: too many technology companies were selling capabilities, not outcomes. Too much consulting that produced slide decks. Too many development shops that disappeared after launch.
                </p>
                <p>
                  We built Nimbrix to be the partner we&apos;d want to work with — one that understands business problems first, builds real systems second, and stays engaged after delivery to make sure things actually work.
                </p>
                <p>
                  We&apos;re based in Pakistan and built for global clients. That combination gives our clients serious engineering capability at a cost that makes ambitious projects feasible.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* What we're building toward */}
              <div className="p-8 border border-line">
                <div className="font-mono text-xs text-accent/60 uppercase tracking-widest mb-4">What we&apos;re building toward</div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  We&apos;re a growing company. Right now, we&apos;re best at project-based AI, software, and data engagements — and selectively taking on advisory and managed services work.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The five-pillar model is where we&apos;re going: a full-capability technology partner across AI, cloud, software, managed services, and our own products. We&apos;re building toward that deliberately, not pretending it&apos;s already here.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 border border-line">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-sm text-ink mb-1">Pakistan · Global Delivery</div>
                  <div className="text-muted text-sm">
                    Headquartered in Pakistan. Working with clients across the Middle East, UK, Europe, and North America.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-line bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>How we operate</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-16">
            What we stand for
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {values.map((v) => (
              <div key={v.label} className="bg-mist p-8 lg:p-10 group hover:bg-paper transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 border border-line group-hover:border-opacity-100 transition-colors" style={{ color: v.color }}>
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold" style={{ color: v.color }}>
                    {v.label}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">
              Work with us
            </h2>
            <p className="text-muted text-base max-w-lg">
              If you have a technology problem worth solving and want a partner who&apos;ll be honest with you about what will and won&apos;t work — get in touch.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
