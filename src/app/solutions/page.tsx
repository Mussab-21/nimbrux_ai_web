import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Nimbrix",
  description: "Our service lines across AI and automation, software engineering, data, cloud and advisory — with what each engagement includes and what it delivers.",
  path: "/solutions",
});

const pillars = [
  {
    pillar: "01",
    color: "#4338CA",
    label: "Digital & AI",
    href: "/solutions/digital-ai",
    tagline: "Automate. Augment. Accelerate.",
    description:
      "Custom AI agents, LLM integrations, enterprise software, data pipelines, and web/mobile products.",
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
  },
  {
    pillar: "02",
    color: "#0B57D0",
    label: "Cloud & Security",
    href: "/solutions/cloud-security",
    tagline: "Build it right. Keep it safe.",
    description:
      "Cloud architecture, DevOps pipelines, enterprise networking, cybersecurity, and infrastructure design.",
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
  },
  {
    pillar: "03",
    color: "#B45309",
    label: "Managed Technology",
    href: "/solutions/managed-technology",
    tagline: "We run it, so you don't have to.",
    description:
      "Application management, managed cloud operations, IT support, and infrastructure monitoring.",
    services: ["Application Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
  },
  {
    pillar: "04",
    color: "#0F766E",
    label: "Consulting & Advisory",
    href: "/solutions/consulting-advisory",
    tagline: "Strategy before execution.",
    description:
      "AI advisory, IT strategy, technology audits, and digital transformation roadmaps.",
    services: ["AI Advisory", "IT Strategy", "Technology Audits", "Digital Transformation"],
  },
  {
    pillar: "05",
    color: "#1E40AF",
    label: "Products & IP",
    href: "/solutions/products",
    tagline: "Building what we wish existed.",
    description:
      "Proprietary SaaS products, AI platforms, automation tools, and Nimbrix Labs projects.",
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Nimbrix Labs"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="ai" dot className="mb-8">
              Our Services
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05] mb-8">
              Five pillars,{" "}
              <span className="text-accent">one partner.</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              From AI and software to cloud, managed services, and advisory — Nimbrix covers the full technology stack, so you can work with one partner instead of five vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Capability architecture</SectionLabel>
          <div className="space-y-6 mt-12">
            {pillars.map((p) => (
              <Link
                key={p.pillar}
                href={p.href}
                className="group block border border-line hover:border-line transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Number + color bar */}
                  <div
                    className="lg:col-span-1 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-line transition-colors duration-300"
                    style={{ backgroundColor: `${p.color}06` }}
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: p.color, opacity: 0.7 }}
                    >
                      {p.pillar}
                    </span>
                    <div
                      className="lg:mt-auto w-full lg:w-px lg:h-12 h-px lg:h-full opacity-30"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-6 lg:p-10">
                    <div
                      className="font-mono text-xs italic mb-3"
                      style={{ color: p.color, opacity: 0.7 }}
                    >
                      {p.tagline}
                    </div>
                    <h2
                      className="font-heading text-2xl lg:text-3xl font-semibold mb-4 transition-colors"
                      style={{ color: `${p.color}` }}
                    >
                      {p.label}
                    </h2>
                    <p className="text-muted text-base leading-relaxed mb-6 max-w-xl">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {p.services.map((svc) => (
                        <span
                          key={svc}
                          className="font-mono text-xs px-2.5 py-1 border border-line text-muted"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:col-span-3 flex items-center justify-end p-6 lg:p-10">
                    <div
                      className="inline-flex items-center gap-2 font-mono text-sm transition-all group-hover:gap-3"
                      style={{ color: p.color }}
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
