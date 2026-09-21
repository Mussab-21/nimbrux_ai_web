"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Activity,
  Compass,
  Layers,
  Server,
  Cloud,
} from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { servicePillars } from "@/lib/services-data";

/* ─────────────────────────────────────────────────────── */
/* 5 Custom Animated Visualizers for Each Service          */
/* ─────────────────────────────────────────────────────── */

// 1. Digital & AI: Workflow node graph with flowing data packets & ticks
function VisualDigitalAI({ inView, reduced }: { inView: boolean; reduced: boolean | null }) {
  return (
    <div className="relative w-full h-[260px] sm:h-[280px] bg-mist border border-line/80 rounded-lg p-5 overflow-hidden flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cat-indigo" />
          <span className="font-semibold text-ink text-[11px]">AI Workflow Pipeline</span>
        </div>
        <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Live System
        </span>
      </div>

      {/* 3 Processing stages with flowing connector lines */}
      <div className="relative my-auto py-2">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#E3E8EF" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#E3E8EF" strokeWidth="2" strokeDasharray="3 3" />
          {!reduced && inView && (
            <>
              <circle r="3" fill="#4338CA">
                <animateMotion path="M 60 40 L 170 40" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#0F766E">
                <animateMotion path="M 170 40 L 270 40" dur="2s" begin="0.8s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>

        <div className="grid grid-cols-3 gap-2 relative z-10 text-center">
          <div className="bg-paper p-2.5 rounded border border-line shadow-xs">
            <div className="text-[10px] text-muted uppercase tracking-wider mb-1">01 Ingest</div>
            <div className="font-semibold text-ink text-[11px] truncate">Raw Docs</div>
          </div>
          <div className="bg-paper p-2.5 rounded border border-cat-indigo/40 shadow-xs">
            <div className="text-[10px] text-cat-indigo uppercase tracking-wider mb-1">02 LLM Engine</div>
            <div className="font-semibold text-cat-indigo text-[11px] truncate">Extract &amp; Schema</div>
          </div>
          <div className="bg-paper p-2.5 rounded border border-emerald-300 shadow-xs">
            <div className="text-[10px] text-emerald-600 uppercase tracking-wider mb-1">03 Route</div>
            <div className="font-semibold text-emerald-700 text-[11px] truncate">ERP &amp; Webhook</div>
          </div>
        </div>
      </div>

      {/* Ticking outputs */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line/60 text-[10px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Entity extraction: 99.4%</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Automated dispatch</span>
        </div>
      </div>
    </div>
  );
}

// 2. Cloud & Security: Multi-region topology with live health & traffic arcs
function VisualCloudSecurity({ inView, reduced }: { inView: boolean; reduced: boolean | null }) {
  return (
    <div className="relative w-full h-[260px] sm:h-[280px] bg-mist border border-line/80 rounded-lg p-5 overflow-hidden flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-cat-blue" />
          <span className="font-semibold text-ink text-[11px]">Multi-Region Cloud Topology</span>
        </div>
        <span className="text-[10px] text-cat-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
          Zero-Trust IAM
        </span>
      </div>

      {/* Visual Region Nodes */}
      <div className="relative my-auto flex items-center justify-between px-3 py-4">
        {/* Connection Arcs SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <path d="M 50 50 Q 150 15 250 50" fill="none" stroke="#0B57D0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          <path d="M 50 50 Q 150 85 250 50" fill="none" stroke="#0B57D0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          {!reduced && inView && (
            <circle r="3" fill="#0B57D0">
              <animateMotion path="M 50 50 Q 150 15 250 50" dur="2.4s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>

        {/* Region 1 */}
        <div className="relative z-10 bg-paper p-3 rounded-lg border border-line shadow-xs text-center">
          <Server className="w-4 h-4 text-cat-blue mx-auto mb-1" />
          <div className="text-[10px] font-bold text-ink">us-east-1</div>
          <div className="text-[9px] text-emerald-600 flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </div>
        </div>

        {/* Security Shield Hub */}
        <div className="relative z-10 w-12 h-12 rounded-full border-2 border-cat-blue/50 bg-paper shadow-md flex items-center justify-center">
          <Shield className="w-5 h-5 text-cat-blue" />
        </div>

        {/* Region 2 */}
        <div className="relative z-10 bg-paper p-3 rounded-lg border border-line shadow-xs text-center">
          <Cloud className="w-4 h-4 text-cat-blue mx-auto mb-1" />
          <div className="text-[10px] font-bold text-ink">eu-west-1</div>
          <div className="text-[9px] text-emerald-600 flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Replica
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line/60 text-[10px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>End-to-end TLS 1.3</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Failover &lt; 300ms</span>
        </div>
      </div>
    </div>
  );
}

// 3. Managed Technology: Telemetry dashboard with live sparkline & uptime
function VisualManagedTechnology() {
  return (
    <div className="relative w-full h-[260px] sm:h-[280px] bg-mist border border-line/80 rounded-lg p-5 overflow-hidden flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cat-amber" />
          <span className="font-semibold text-ink text-[11px]">Telemetry &amp; Uptime Monitor</span>
        </div>
        <span className="text-[10px] text-cat-amber bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          99.98% SLA
        </span>
      </div>

      {/* Latency Sparkline Graph */}
      <div className="my-auto py-2">
        <div className="flex items-center justify-between text-[10px] text-muted mb-1.5">
          <span>Global Latency Trend</span>
          <span className="text-emerald-600 font-bold">38ms avg</span>
        </div>

        <div className="h-14 bg-paper rounded border border-line p-2 relative overflow-hidden flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40" aria-hidden>
            <path
              d="M 0 28 Q 15 32 30 20 T 60 22 T 85 14 T 100 18"
              fill="none"
              stroke="#B45309"
              strokeWidth="2"
            />
            <path
              d="M 0 28 Q 15 32 30 20 T 60 22 T 85 14 T 100 18 L 100 40 L 0 40 Z"
              fill="#B45309"
              fillOpacity="0.08"
            />
          </svg>
        </div>
      </div>

      {/* Health Badges */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-line/60 text-[10px] text-center">
        <div className="bg-paper py-1.5 px-2 rounded border border-line">
          <div className="text-muted text-[9px]">API Gateway</div>
          <div className="text-emerald-600 font-bold">Operational</div>
        </div>
        <div className="bg-paper py-1.5 px-2 rounded border border-line">
          <div className="text-muted text-[9px]">PostgreSQL</div>
          <div className="text-emerald-600 font-bold">Healthy</div>
        </div>
        <div className="bg-paper py-1.5 px-2 rounded border border-line">
          <div className="text-muted text-[9px]">Queues</div>
          <div className="text-emerald-600 font-bold">0 Pending</div>
        </div>
      </div>
    </div>
  );
}

// 4. Consulting & Advisory: Phased strategy roadmap timeline
function VisualConsulting() {
  const steps = [
    { num: "01", title: "Audit & Assessment", tag: "Week 1" },
    { num: "02", title: "Architecture Blueprint", tag: "Week 2" },
    { num: "03", title: "AI Viability & ROI", tag: "Week 3" },
    { num: "04", title: "Phased Execution Roadmap", tag: "Ready to build" },
  ];

  return (
    <div className="relative w-full h-[260px] sm:h-[280px] bg-mist border border-line/80 rounded-lg p-5 overflow-hidden flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-cat-teal" />
          <span className="font-semibold text-ink text-[11px]">Advisory Engagement Flow</span>
        </div>
        <span className="text-[10px] text-cat-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
          Strategy First
        </span>
      </div>

      <div className="my-auto space-y-2 py-1">
        {steps.map((s) => (
          <div key={s.num} className="flex items-center justify-between bg-paper p-2 rounded border border-line text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-50 border border-cat-teal/40 text-cat-teal flex items-center justify-center font-bold text-[10px]">
                {s.num}
              </span>
              <span className="font-medium text-ink">{s.title}</span>
            </div>
            <span className="text-[9px] text-muted/80">{s.tag}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-line/60 text-[10px] text-muted">
        <span>No vendor lock-in</span>
        <span className="text-cat-teal font-semibold">Actionable deliverables</span>
      </div>
    </div>
  );
}

// 5. Products & IP: Modular product block stack & mock API endpoint
function VisualProducts() {
  return (
    <div className="relative w-full h-[260px] sm:h-[280px] bg-mist border border-line/80 rounded-lg p-5 overflow-hidden flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-accent" />
          <span className="font-semibold text-ink text-[11px]">Nimbrix Labs &amp; IP Stack</span>
        </div>
        <span className="text-[10px] text-accent bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
          SaaS &amp; Internal IP
        </span>
      </div>

      {/* Mock Terminal / API block */}
      <div className="my-auto bg-[#0A0F1C] text-slate-300 p-3.5 rounded-lg border border-slate-800 text-[10px] space-y-1.5 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
          <span className="text-[9px] text-emerald-400">POST /api/v1/extract</span>
          <span className="text-[9px]">200 OK · 142ms</span>
        </div>
        <div className="text-slate-400">
          <span className="text-accent">&gt;</span> parsing document buffer...
        </div>
        <div className="text-emerald-400 font-medium">
          <span className="text-accent">&gt;</span> 42 entities mapped with 0 schemas broken
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line/60 text-[10px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-accent font-bold">✓</span>
          <span>Developer SDKs &amp; Webhooks</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-accent font-bold">✓</span>
          <span>Turnkey deployment</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/* Main Sticky Split-Scroll Showcase Component             */
/* ─────────────────────────────────────────────────────── */

export function ServicesShowcase() {
  const reduced = useReducedMotion();
  const showcaseRef = useRef<HTMLElement>(null);
  const isInView = useInView(showcaseRef, { margin: "100px" });

  const [activePillarId, setActivePillarId] = useState(servicePillars[0].id);

  // IntersectionObserver to observe which panel is centered in viewport
  useEffect(() => {
    const panels = servicePillars.map((p) => document.getElementById(`pillar-panel-${p.id}`));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("pillar-panel-", "");
            setActivePillarId(id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    panels.forEach((p) => {
      if (p) observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPanel = (id: string) => {
    const el = document.getElementById(`pillar-panel-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const getVisualComponent = (pillarId: string) => {
    switch (pillarId) {
      case "digital-ai":
        return <VisualDigitalAI inView={isInView} reduced={reduced} />;
      case "cloud-security":
        return <VisualCloudSecurity inView={isInView} reduced={reduced} />;
      case "managed-technology":
        return <VisualManagedTechnology />;
      case "consulting-advisory":
        return <VisualConsulting />;
      case "products":
        return <VisualProducts />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={showcaseRef}
      id="services-showcase"
      className="border-b border-line bg-paper relative"
    >
      {/* Mobile Sticky Horizontal Pill Bar */}
      <div className="lg:hidden sticky top-[62px] z-30 bg-paper/95 backdrop-blur-none border-b border-line py-2.5 px-4 overflow-x-auto flex gap-2 no-scrollbar">
        {servicePillars.map((p) => {
          const isActive = activePillarId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => scrollToPanel(p.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all border"
              style={{
                borderColor: isActive ? p.color : "#E3E8EF",
                backgroundColor: isActive ? `${p.color}12` : "transparent",
                color: isActive ? p.color : "#4B5768",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              <span>{p.pillar}</span>
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT (Sticky on Desktop): Vertical Navigator with Progress Rail */}
          <div className="hidden lg:block lg:col-span-4 sticky top-[100px] h-fit self-start">
            <SectionLabel number="01">Service Pillars</SectionLabel>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-ink mb-2">
              Full-lifecycle engineering.
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
              From initial technical architecture and AI pilots to ongoing cloud operations and custom IP.
            </p>

            {/* Vertical list with active layoutId indicator */}
            <div className="relative border-l border-line pl-4 space-y-2">
              {servicePillars.map((p) => {
                const isActive = activePillarId === p.id;
                const Icon = p.icon;

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => scrollToPanel(p.id)}
                    className="relative w-full text-left py-2 px-3 rounded-md transition-all flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                  >
                    {/* Active sliding pill indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-showcase-pill"
                        className="absolute inset-0 rounded-md border"
                        style={{
                          borderColor: `${p.color}40`,
                          backgroundColor: `${p.color}08`,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-2.5">
                      <span
                        className="font-mono text-xs font-bold transition-colors"
                        style={{ color: isActive ? p.color : "#94A3B8" }}
                      >
                        {p.pillar}
                      </span>
                      <span
                        className="font-heading text-sm transition-colors"
                        style={{
                          color: isActive ? p.color : "#4B5768",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {p.label}
                      </span>
                    </div>

                    <Icon
                      className="relative z-10 w-4 h-4 transition-colors"
                      style={{ color: isActive ? p.color : "#94A3B8" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active Service Panels (Each obeys 10/80/10 rule) */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-16">
            {servicePillars.map((p) => {
              const Icon = p.icon;

              return (
                <div
                  key={p.id}
                  id={`pillar-panel-${p.id}`}
                  className="section-shell min-h-[72svh] flex flex-col justify-center scroll-mt-28"
                >
                  <div
                    className="group relative border border-line bg-paper/95 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:shadow-elev-2"
                    style={{
                      ["--card-color" as string]: p.color,
                    }}
                  >
                    {/* Header Row: Big outlined number + badge */}
                    <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg border flex items-center justify-center shadow-xs"
                          style={{
                            borderColor: `${p.color}40`,
                            backgroundColor: `${p.color}08`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: p.color }} />
                        </div>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-widest text-muted/70">
                            Service Line {p.pillar}
                          </div>
                          <h3 className="font-heading text-xl lg:text-2xl font-bold text-ink">
                            {p.label}
                          </h3>
                        </div>
                      </div>

                      <span
                        className="font-mono text-3xl sm:text-4xl font-black opacity-30 select-none"
                        style={{ color: p.color }}
                      >
                        {p.pillar}
                      </span>
                    </div>

                    {/* Tagline & Description */}
                    <div className="mb-6">
                      <div className="font-mono text-xs italic mb-1.5" style={{ color: p.color }}>
                        {p.tagline}
                      </div>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* 2-Column Content: Bullets on left, Custom Visual on right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
                      {/* Left: What You Get Bullets */}
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-muted/80 mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                          What you get:
                        </div>
                        <ul className="space-y-2.5 mb-6">
                          {p.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5 text-xs text-ink/80 leading-relaxed">
                              <CheckCircle2
                                className="w-4 h-4 flex-shrink-0 mt-0.5"
                                style={{ color: p.color }}
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Sub-services chips */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.services.map((svc) => (
                            <span
                              key={svc}
                              className="font-mono text-[10px] px-2 py-0.5 rounded border border-line bg-mist text-muted"
                            >
                              {svc}
                            </span>
                          ))}
                        </div>

                        {/* Tech stack row */}
                        <div className="flex items-center gap-2 pt-2 border-t border-line/60">
                          <span className="font-mono text-[10px] uppercase text-muted/70">Stack:</span>
                          <div className="flex flex-wrap gap-1">
                            {p.tech.map((t) => (
                              <span key={t} className="font-mono text-[10px] text-muted bg-paper px-1.5 py-0.5 rounded border border-line/60">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Custom Animated Visual */}
                      <div>
                        {getVisualComponent(p.id)}
                      </div>
                    </div>

                    {/* CTA Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                      <Link
                        href={p.href}
                        className="group inline-flex items-center gap-2 font-mono text-sm font-semibold hover:underline"
                        style={{ color: p.color }}
                      >
                        <span>Explore {p.label} in detail</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-line rounded text-xs font-mono text-muted hover:border-ink hover:text-ink transition-colors bg-paper"
                      >
                        <span>Talk to us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
