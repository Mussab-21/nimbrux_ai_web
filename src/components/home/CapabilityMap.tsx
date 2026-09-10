"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    id: "digital-ai",
    pillar: "01",
    color: "#8338EC",
    label: "Digital & AI",
    tagline: "Automate. Augment. Accelerate.",
    description:
      "Custom AI agents, LLM integrations, enterprise software, data pipelines, and web/mobile products.",
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
    href: "/solutions/digital-ai",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="ai-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#8338EC" />
            <line x1="20" y1="20" x2="40" y2="0" stroke="#8338EC" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="0" y2="40" stroke="#8338EC" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="40" y2="40" stroke="#8338EC" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-pattern)" />
      </svg>
    ),
  },
  {
    id: "cloud-security",
    pillar: "02",
    color: "#FFBE0B",
    label: "Cloud & Security",
    tagline: "Build it right. Keep it safe.",
    description:
      "Cloud architecture, DevOps pipelines, enterprise networks, cybersecurity, and infrastructure design.",
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
    href: "/solutions/cloud-security",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="cloud-pattern" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#FFBE0B" strokeWidth="0.5" />
            <rect x="16" y="16" width="16" height="16" rx="2" fill="none" stroke="#FFBE0B" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
      </svg>
    ),
  },
  {
    id: "managed-technology",
    pillar: "03",
    color: "#FB5607",
    label: "Managed Technology",
    tagline: "We run it, so you don't have to.",
    description:
      "Application management, managed cloud operations, IT support, and infrastructure monitoring.",
    services: ["Application Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
    href: "/solutions/managed-technology",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="managed-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="40" y2="20" stroke="#FB5607" strokeWidth="0.5" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="#FB5607" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="3" fill="none" stroke="#FB5607" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#managed-pattern)" />
      </svg>
    ),
  },
  {
    id: "consulting-advisory",
    pillar: "04",
    color: "#FF006E",
    label: "Consulting & Advisory",
    tagline: "Strategy before execution.",
    description:
      "AI advisory, IT strategy, technology audits, and digital transformation roadmaps.",
    services: ["AI Advisory", "IT Strategy", "Technology Audits", "Digital Transformation"],
    href: "/solutions/consulting-advisory",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="advisory-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="40" stroke="#FF006E" strokeWidth="0.5" />
            <line x1="40" y1="0" x2="0" y2="40" stroke="#FF006E" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#advisory-pattern)" />
      </svg>
    ),
  },
  {
    id: "products",
    pillar: "05",
    color: "#FF3333",
    label: "Products & IP",
    tagline: "Building what we wish existed.",
    description:
      "Proprietary SaaS products, AI platforms, automation tools, and Nimbrix Labs research projects.",
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Nimbrix Labs"],
    href: "/solutions/products",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="products-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="none" stroke="#FF3333" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#products-pattern)" />
      </svg>
    ),
  },
];

export function CapabilityMap() {
  const [active, setActive] = useState<string | null>(null);

  const activePillar = pillars.find((p) => p.id === active);

  return (
    <section className="py-24 lg:py-32 border-b border-[#1E2430] bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: label + detail panel */}
          <div className="lg:w-[340px] flex-shrink-0">
            <SectionLabel number="02">Capability Map</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-white mb-6">
              One partner,{" "}
              <span className="text-[#FFBE0B]">five pillars.</span>
            </h2>
            <p className="text-[#8A95A3] text-base leading-relaxed mb-10">
              Strategy to software to scale. Hover a pillar to explore what we build.
            </p>

            {/* Detail panel */}
            <div
              className="p-6 border transition-all duration-300 min-h-[180px]"
              style={{
                borderColor: activePillar ? `${activePillar.color}40` : "#1E2430",
                backgroundColor: activePillar ? `${activePillar.color}08` : "transparent",
              }}
            >
              {activePillar ? (
                <>
                  <div
                    className="font-mono text-xs uppercase tracking-widest mb-3"
                    style={{ color: activePillar.color, opacity: 0.7 }}
                  >
                    Pillar {activePillar.pillar}
                  </div>
                  <h3
                    className="font-heading text-xl font-semibold mb-2"
                    style={{ color: activePillar.color }}
                  >
                    {activePillar.label}
                  </h3>
                  <p className="font-mono text-xs text-[#8A95A3] italic mb-4">
                    {activePillar.tagline}
                  </p>
                  <p className="text-[#8A95A3] text-sm leading-relaxed mb-4">
                    {activePillar.description}
                  </p>
                  <Link
                    href={activePillar.href}
                    className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors group"
                    style={{ color: activePillar.color }}
                  >
                    Explore {activePillar.label}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              ) : (
                <p className="font-mono text-sm text-[#8A95A3]/50 italic">
                  Hover a pillar on the right to explore our capabilities →
                </p>
              )}
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="flex-1 grid grid-cols-1 gap-3">
            {pillars.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="relative block border overflow-hidden cursor-pointer transition-all duration-300 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FFBE0B]"
                style={{
                  borderColor: active === p.id ? `${p.color}60` : "#1E2430",
                  backgroundColor: active === p.id ? `${p.color}06` : "transparent",
                }}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.id)}
                onBlur={() => setActive(null)}
              >
                {/* Background SVG pattern */}
                {p.bgPattern}

                <div className="relative z-10 flex items-center gap-6 p-5 md:p-6">
                  {/* Pillar number */}
                  <div
                    className="font-mono text-xs uppercase tracking-widest w-8 text-center flex-shrink-0 transition-opacity"
                    style={{ color: p.color, opacity: active === p.id ? 1 : 0.4 }}
                  >
                    {p.pillar}
                  </div>

                  {/* Color bar */}
                  <div
                    className="w-0.5 h-10 flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: p.color,
                      opacity: active === p.id ? 1 : 0.2,
                    }}
                  />

                  {/* Label */}
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div>
                      <h3
                        className="font-heading text-lg md:text-xl font-semibold transition-colors duration-300"
                        style={{ color: active === p.id ? p.color : "white" }}
                      >
                        {p.label}
                      </h3>
                      <div className="hidden md:flex flex-wrap gap-3 mt-1">
                        {p.services.map((svc) => (
                          <span
                            key={svc}
                            className="font-mono text-[11px] text-[#8A95A3] transition-colors"
                            style={{ color: active === p.id ? `${p.color}90` : undefined }}
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowRight
                      className="w-4 h-4 flex-shrink-0 transition-all duration-300 opacity-60 md:opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      style={{ color: p.color }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
