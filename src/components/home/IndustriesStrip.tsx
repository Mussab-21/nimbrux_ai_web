"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const industries = [
  {
    id: "startups",
    label: "Startups & SMBs",
    tagline: "Launch fast. Scale smart.",
    problems: ["No technical co-founder", "Manual operations", "Basic web presence"],
    solutions: ["MVP development", "Automation setup", "Digital presence"],
    color: "#4338CA",
    emoji: "🚀",
  },
  {
    id: "retail",
    label: "Retail & E-commerce",
    tagline: "Sell more. Operate less.",
    problems: ["Fragmented inventory", "Poor online experience", "Manual order processing"],
    solutions: ["E-commerce platforms", "Inventory automation", "Analytics dashboards"],
    color: "#0B57D0",
    emoji: "🛍️",
  },
  {
    id: "education",
    label: "Education",
    tagline: "Digitize the learning journey.",
    problems: ["Paper-based systems", "Poor engagement tracking", "Disconnected platforms"],
    solutions: ["LMS platforms", "Student portals", "Analytics & reporting"],
    color: "#B45309",
    emoji: "📚",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    tagline: "Secure systems. Better outcomes.",
    problems: ["Manual records", "Compliance complexity", "Inefficient workflows"],
    solutions: ["Patient management", "Compliance systems", "Workflow automation"],
    color: "#0F766E",
    emoji: "🏥",
  },
  {
    id: "finance",
    label: "Finance",
    tagline: "Automate the numbers.",
    problems: ["Manual reporting", "Data silos", "Slow reconciliation"],
    solutions: ["BI dashboards", "Data pipelines", "Automation workflows"],
    color: "#0B57D0",
    emoji: "💹",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    tagline: "Digitize operations.",
    problems: ["No real-time visibility", "Paper-based tracking", "Maintenance gaps"],
    solutions: ["Operations dashboards", "Digital tracking", "ERP integration"],
    color: "#B45309",
    emoji: "🏭",
  },
  {
    id: "realestate",
    label: "Real Estate",
    tagline: "Systems for smarter property.",
    problems: ["Manual property management", "Disconnected client data", "Slow reporting"],
    solutions: ["Property portals", "CRM systems", "Reporting automation"],
    color: "#4338CA",
    emoji: "🏗️",
  },
  {
    id: "logistics",
    label: "Logistics",
    tagline: "Move things. Know everything.",
    problems: ["No tracking visibility", "Manual scheduling", "Disconnected fleet data"],
    solutions: ["Fleet dashboards", "Operations automation", "Supply chain analytics"],
    color: "#1E40AF",
    emoji: "🚛",
  },
  {
    id: "government",
    label: "Government",
    tagline: "Digital public services.",
    problems: ["Paper-heavy processes", "Outdated infrastructure", "Poor citizen experience"],
    solutions: ["Digital portals", "Process automation", "Infrastructure modernization"],
    color: "#0F766E",
    emoji: "🏛️",
  },
];

export function IndustriesStrip() {
  const [active, setActive] = useState<string>(industries[0].id);

  const activeIndustry = industries.find((i) => i.id === active);

  return (
    <section className="py-24 lg:py-32 border-b border-line bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel number="04">Industries</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink mb-4">
            We work across{" "}
            <span className="text-accent">every sector.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl">
            Select an industry to see the problems we solve and the systems we build.
          </p>
        </div>

        {/* Scrollable industry strip */}
        <div className="overflow-x-auto -mx-6 px-6 pb-4">
          <div className="flex gap-3 min-w-max">
            {industries.map((ind) => (
              <button
                key={ind.id}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-6 py-4 border transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: active === ind.id ? `${ind.color}60` : "#E3E8EF",
                  backgroundColor: active === ind.id ? `${ind.color}08` : "transparent",
                }}
                onClick={() => setActive(ind.id)}
                onMouseEnter={() => setActive(ind.id)}
                onFocus={() => setActive(ind.id)}
                aria-pressed={active === ind.id}
                aria-label={`${ind.label} industry`}
              >
                <span className="text-2xl" role="img" aria-hidden>{ind.emoji}</span>
                <span
                  className="font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors"
                  style={{ color: active === ind.id ? ind.color : "#4B5768" }}
                >
                  {ind.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div
          className="mt-6 p-6 lg:p-8 border transition-all duration-300 min-h-[140px] grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            borderColor: activeIndustry ? `${activeIndustry.color}40` : "#E3E8EF",
            backgroundColor: activeIndustry ? `${activeIndustry.color}06` : "transparent",
          }}
        >
          {activeIndustry ? (
            <>
              <div>
                <div
                  className="font-heading text-xl font-semibold mb-1"
                  style={{ color: activeIndustry.color }}
                >
                  {activeIndustry.label}
                </div>
                <div className="font-mono text-xs text-muted italic">
                  {activeIndustry.tagline}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">Common Challenges</div>
                <ul className="space-y-1.5">
                  {activeIndustry.problems.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-mono text-xs text-muted">
                      <span className="w-1 h-1 rounded-full bg-cat-navy/60 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: activeIndustry.color, opacity: 0.7 }}>
                  What We Build
                </div>
                <ul className="space-y-1.5">
                  {activeIndustry.solutions.map((s) => (
                    <li key={s} className="flex items-center gap-2 font-mono text-xs text-ink/70">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: activeIndustry.color, opacity: 0.6 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="col-span-3 flex items-center justify-center">
              <p className="font-mono text-sm text-muted/40 italic">
                Select an industry above to see what we&apos;ve solved →
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
