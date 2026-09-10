import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Industries — Who We Work With",
  description:
    "Nimbrix works across 9 industries: startups, retail, education, healthcare, finance, manufacturing, real estate, logistics, and government.",
};

const industries = [
  {
    id: "startups",
    emoji: "🚀",
    label: "Startups & SMBs",
    tagline: "Launch fast. Scale smart.",
    color: "#8338EC",
    context:
      "Early-stage companies and small businesses moving fast without a full in-house tech team. We act as your fractional technology partner — building MVPs, setting up automation, and helping you make the right technology bets early.",
    problems: [
      "No technical co-founder or CTO",
      "Manual processes slowing growth",
      "Basic or no web presence",
      "Tech debt from early shortcuts",
    ],
    solutions: [
      "MVP development (web, mobile, SaaS)",
      "Automation setup (n8n, Make)",
      "Digital presence & marketing sites",
      "Technology advisory & roadmapping",
    ],
  },
  {
    id: "retail",
    emoji: "🛍️",
    label: "Retail & E-commerce",
    tagline: "Sell more. Operate less.",
    color: "#FFBE0B",
    context:
      "Retail businesses and e-commerce operators who need better systems — online stores, inventory management, order automation, and customer analytics.",
    problems: [
      "Fragmented inventory across channels",
      "Manual order processing",
      "No customer analytics",
      "Disconnected POS and online store",
    ],
    solutions: [
      "E-commerce platform development",
      "Inventory & order automation",
      "Customer analytics dashboards",
      "CRM & loyalty system integration",
    ],
  },
  {
    id: "education",
    emoji: "📚",
    label: "Education",
    tagline: "Digitize the learning journey.",
    color: "#FB5607",
    context:
      "Schools, universities, training providers, and EdTech companies building better digital learning infrastructure and student management systems.",
    problems: [
      "Paper-based admissions and records",
      "Poor engagement tracking",
      "Disconnected platforms and tools",
      "Manual reporting for faculty and management",
    ],
    solutions: [
      "LMS development and integration",
      "Student portal and admissions systems",
      "Analytics and reporting dashboards",
      "AI-powered tutoring tools",
    ],
  },
  {
    id: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    tagline: "Secure systems. Better outcomes.",
    color: "#FF006E",
    context:
      "Clinics, hospitals, diagnostic centers, and health-tech companies that need compliant, reliable digital infrastructure without the usual IT complexity.",
    problems: [
      "Manual patient records and scheduling",
      "Compliance and audit complexity",
      "Inefficient internal workflows",
      "No digital patient engagement",
    ],
    solutions: [
      "Patient management systems",
      "Appointment and scheduling platforms",
      "Compliance-ready document systems",
      "Clinical workflow automation",
    ],
  },
  {
    id: "finance",
    emoji: "💹",
    label: "Finance",
    tagline: "Automate the numbers.",
    color: "#FFBE0B",
    context:
      "Financial services, accounting firms, and fintech companies using better data infrastructure and automation to serve clients faster with fewer errors.",
    problems: [
      "Manual reporting and reconciliation",
      "Data locked in spreadsheets",
      "Slow month-end close processes",
      "No real-time operational visibility",
    ],
    solutions: [
      "BI dashboards and financial reporting",
      "Data pipeline automation",
      "Document processing (invoices, contracts)",
      "ERP integration and analytics",
    ],
  },
  {
    id: "manufacturing",
    emoji: "🏭",
    label: "Manufacturing",
    tagline: "Digitize operations.",
    color: "#FB5607",
    context:
      "Manufacturers and industrial companies moving from paper-based tracking to real-time operational visibility and predictive maintenance systems.",
    problems: [
      "No real-time production visibility",
      "Paper-based tracking and QA",
      "Maintenance gaps and unplanned downtime",
      "Manual inventory and supply chain",
    ],
    solutions: [
      "Operations dashboards and OEE monitoring",
      "Digital QA and inspection systems",
      "ERP integration",
      "Supply chain analytics",
    ],
  },
  {
    id: "realestate",
    emoji: "🏗️",
    label: "Real Estate",
    tagline: "Systems for smarter property.",
    color: "#8338EC",
    context:
      "Real estate developers, brokers, and property managers who need better client-facing platforms, internal CRM systems, and project tracking.",
    problems: [
      "Manual property management and reporting",
      "Disconnected client and project data",
      "No digital listing or showcase platform",
      "Slow sales follow-up processes",
    ],
    solutions: [
      "Property listing and showcase portals",
      "CRM and lead management",
      "Project tracking dashboards",
      "Automated client communication",
    ],
  },
  {
    id: "logistics",
    emoji: "🚛",
    label: "Logistics",
    tagline: "Move things. Know everything.",
    color: "#FF3333",
    context:
      "Logistics, transport, and supply chain companies that need real-time visibility, automated dispatch, and data-driven operations.",
    problems: [
      "No real-time fleet or shipment tracking",
      "Manual scheduling and dispatch",
      "Disconnected supplier and warehouse data",
      "Reactive rather than predictive operations",
    ],
    solutions: [
      "Fleet and operations dashboards",
      "Automated dispatch and routing",
      "Supply chain analytics",
      "Document and compliance automation",
    ],
  },
  {
    id: "government",
    emoji: "🏛️",
    label: "Government",
    tagline: "Digital public services.",
    color: "#FF006E",
    context:
      "Government departments, municipalities, and public sector organizations modernizing citizen-facing services and internal operations.",
    problems: [
      "Paper-heavy processes and approvals",
      "Outdated infrastructure",
      "Poor citizen digital experience",
      "Siloed department data",
    ],
    solutions: [
      "Digital citizen portals",
      "Internal process automation",
      "Infrastructure modernization",
      "Data integration and reporting",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-[#0A0D14] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-[#1E2430]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="data" dot className="mb-8">
              Industries
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] mb-8">
              Technology problems{" "}
              <span className="text-[#FFBE0B]">don&apos;t respect sector lines.</span>
            </h1>
            <p className="text-[#8A95A3] text-xl leading-relaxed">
              We work across 9 industries. The technology changes; the goal doesn&apos;t: help you operate better, serve customers better, and grow without adding proportional operational complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>9 sectors</SectionLabel>
          <div className="space-y-6 mt-12">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                className="border border-[#1E2430] overflow-hidden group hover:border-[#1E2430] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Icon + label */}
                  <div className="lg:col-span-3 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#1E2430] flex items-center gap-4">
                    <span className="text-4xl flex-shrink-0" role="img" aria-hidden>{ind.emoji}</span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: ind.color, opacity: 0.7 }}>
                        Sector {String(i + 1).padStart(2, "0")}
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-white">{ind.label}</h2>
                      <div className="font-mono text-xs text-[#8A95A3] italic mt-1">{ind.tagline}</div>
                    </div>
                  </div>

                  {/* Context */}
                  <div className="lg:col-span-4 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#1E2430]">
                    <p className="text-[#8A95A3] text-sm leading-relaxed">{ind.context}</p>
                  </div>

                  {/* Problems + solutions */}
                  <div className="lg:col-span-4 p-6 lg:p-8 grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono text-[10px] text-[#8A95A3]/50 uppercase tracking-widest mb-3">Challenges</div>
                      <ul className="space-y-1.5">
                        {ind.problems.map((p) => (
                          <li key={p} className="flex items-start gap-1.5 font-mono text-[11px] text-[#8A95A3]">
                            <span className="w-1 h-1 rounded-full bg-[#FF3333]/50 flex-shrink-0 mt-1.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: ind.color, opacity: 0.7 }}>We build</div>
                      <ul className="space-y-1.5">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-1.5 font-mono text-[11px] text-white/60">
                            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: ind.color, opacity: 0.6 }} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA column */}
                  <div className="lg:col-span-1 p-6 lg:p-4 flex lg:items-center lg:justify-center border-t lg:border-t-0 lg:border-l border-[#1E2430]">
                    <Link
                      href="/contact"
                      className="font-mono text-xs text-[#8A95A3] hover:text-[#FFBE0B] transition-colors flex items-center gap-1.5"
                      style={{ color: ind.color, opacity: 0.7 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1E2430]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl text-white mb-2">Don&apos;t see your sector?</h2>
            <p className="text-[#8A95A3] text-base">The underlying problems are often the same — get in touch and we&apos;ll tell you honestly whether we can help.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-4 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
