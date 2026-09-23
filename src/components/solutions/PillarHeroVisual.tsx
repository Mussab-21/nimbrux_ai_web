"use client";

import { useEffect, useRef } from "react";
import {
  Sparkles,
  Shield,
  Activity,
  Compass,
  Server,
  Cloud,
} from "lucide-react";
import { useReducedMotion, useInView } from "framer-motion";

interface PillarHeroVisualProps {
  pillar: string;
  color: string;
  label: string;
}

export function PillarHeroVisual({ pillar, color, label }: PillarHeroVisualProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "50px" });

  // Mouse parallax tilt via CSS variables (desktop only, zero React state overhead)
  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;

    let rect: DOMRect | null = null;
    let rafId: number;

    const onMouseEnter = () => {
      rect = el.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!rect) rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--tilt-x", `${-y * 6}deg`);
        el.style.setProperty("--tilt-y", `${x * 6}deg`);
      });
    };

    const onMouseLeave = () => {
      rect = null;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
      });
    };

    el.addEventListener("mouseenter", onMouseEnter, { passive: true });
    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none flex items-center justify-center">
      {/* Ambient background glow behind glass panel */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      {/* Tilt Container (CSS vars) */}
      <div
        ref={containerRef}
        aria-label={`${label} architecture preview`}
        className="relative z-10 w-full bg-paper/95 backdrop-blur-md border border-line/80 rounded-2xl p-5 sm:p-6 shadow-elev-2 transition-transform duration-200 ease-out"
        style={{
          transform: reduced
            ? "none"
            : "perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
          boxShadow: `0 8px 30px -4px rgba(10, 15, 28, 0.08), 0 0 0 1px ${color}15`,
        }}
      >
        {pillar === "01" && (
          <VisualPillar01 color={color} inView={isInView} reduced={reduced} />
        )}
        {pillar === "02" && (
          <VisualPillar02 color={color} inView={isInView} reduced={reduced} />
        )}
        {pillar === "03" && (
          <VisualPillar03 color={color} inView={isInView} reduced={reduced} />
        )}
        {pillar === "04" && (
          <VisualPillar04 color={color} inView={isInView} reduced={reduced} />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 01: Digital & AI Visualizer                                        */
/* ─────────────────────────────────────────────────────────────────── */
function VisualPillar01({
  color,
  inView,
  reduced,
}: {
  color: string;
  inView: boolean;
  reduced: boolean | null;
}) {
  return (
    <div className="flex flex-col justify-between h-[280px] font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/70 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" style={{ color }} />
          <span className="font-semibold text-ink text-[12px]">AI Workflow Pipeline</span>
        </div>
        <span
          className="text-[10px] font-medium px-2 py-0.5 rounded border"
          style={{
            color,
            backgroundColor: `${color}10`,
            borderColor: `${color}30`,
          }}
        >
          Sample Pipeline (Illustrative)
        </span>
      </div>

      {/* 3 Processing stages with flowing connector lines */}
      <div className="relative my-auto py-3">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#E3E8EF" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#E3E8EF" strokeWidth="2" strokeDasharray="3 3" />
          {!reduced && inView && (
            <>
              <circle r="3.5" fill={color}>
                <animateMotion path="M 60 40 L 175 40" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#0F766E">
                <animateMotion path="M 175 40 L 290 40" dur="2.4s" begin="1s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>

        <div className="grid grid-cols-3 gap-2.5 relative z-10 text-center">
          <div className="bg-paper p-3 rounded-lg border border-line shadow-xs">
            <div className="text-[10px] text-muted uppercase tracking-wider mb-1">01 Ingest</div>
            <div className="font-semibold text-ink text-[11px] truncate">Raw Docs</div>
          </div>
          <div
            className="bg-paper p-3 rounded-lg border shadow-xs"
            style={{ borderColor: `${color}40` }}
          >
            <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color }}>
              02 LLM Engine
            </div>
            <div className="font-semibold text-[11px] truncate" style={{ color }}>
              Extract &amp; Schema
            </div>
          </div>
          <div className="bg-paper p-3 rounded-lg border border-emerald-300 shadow-xs">
            <div className="text-[10px] text-emerald-600 uppercase tracking-wider mb-1">03 Route</div>
            <div className="font-semibold text-emerald-700 text-[11px] truncate">ERP &amp; Webhook</div>
          </div>
        </div>
      </div>

      {/* Output audit verification - honest, truthful labels */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line/70 text-[11px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Sample output: Validated</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Automated dispatch</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 02: Cloud & Security Visualizer                                    */
/* ─────────────────────────────────────────────────────────────────── */
function VisualPillar02({
  color,
  inView,
  reduced,
}: {
  color: string;
  inView: boolean;
  reduced: boolean | null;
}) {
  return (
    <div className="flex flex-col justify-between h-[280px] font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/70 pb-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" style={{ color }} />
          <span className="font-semibold text-ink text-[12px]">Cloud &amp; Security Topology</span>
        </div>
        <span
          className="text-[10px] font-medium px-2 py-0.5 rounded border"
          style={{
            color,
            backgroundColor: `${color}10`,
            borderColor: `${color}30`,
          }}
        >
          Sample Architecture
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-between px-2 py-3">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <path
            d="M 50 50 Q 160 12 270 50"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.4"
          />
          <path
            d="M 50 50 Q 160 88 270 50"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.4"
          />
          {!reduced && inView && (
            <circle r="3.5" fill={color}>
              <animateMotion path="M 50 50 Q 160 12 270 50" dur="2.8s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>

        {/* Primary region node */}
        <div className="relative z-10 bg-paper p-3 rounded-lg border border-line shadow-xs text-center min-w-[80px]">
          <Server className="w-4 h-4 mx-auto mb-1" style={{ color }} />
          <div className="text-[10px] font-bold text-ink">us-east-1</div>
          <div className="text-[9px] text-emerald-600 flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </div>
        </div>

        {/* Security Shield Hub */}
        <div
          className="relative z-10 w-12 h-12 rounded-full border-2 bg-paper shadow-md flex items-center justify-center"
          style={{ borderColor: `${color}60` }}
        >
          <Shield className="w-5 h-5" style={{ color }} />
        </div>

        {/* Replica region node */}
        <div className="relative z-10 bg-paper p-3 rounded-lg border border-line shadow-xs text-center min-w-[80px]">
          <Cloud className="w-4 h-4 mx-auto mb-1" style={{ color }} />
          <div className="text-[10px] font-bold text-ink">eu-west-1</div>
          <div className="text-[9px] text-emerald-600 flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Replica
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line/70 text-[11px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>End-to-end TLS 1.3</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Zero-Trust IAM Policy</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* 03: Managed Technology Visualizer                                  */
/* ─────────────────────────────────────────────────────────────────── */
function VisualPillar03({
  color,
}: {
  color: string;
  inView: boolean;
  reduced: boolean | null;
}) {
  return (
    <div className="flex flex-col justify-between h-[280px] font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/70 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4" style={{ color }} />
          <span className="font-semibold text-ink text-[12px]">Telemetry &amp; Uptime Monitor</span>
        </div>
        <span
          className="text-[10px] font-medium px-2 py-0.5 rounded border"
          style={{
            color,
            backgroundColor: `${color}10`,
            borderColor: `${color}30`,
          }}
        >
          Sample Telemetry
        </span>
      </div>

      <div className="my-auto py-2">
        <div className="flex items-center justify-between text-[11px] text-muted mb-2">
          <span>Latency Metric (Illustrative)</span>
          <span className="font-semibold text-emerald-600">Sample Healthy</span>
        </div>

        <div className="h-16 bg-mist/60 rounded-lg border border-line p-2 relative overflow-hidden flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40" aria-hidden>
            <path
              d="M 0 28 Q 15 32 30 20 T 60 22 T 85 14 T 100 18"
              fill="none"
              stroke={color}
              strokeWidth="2"
            />
            <path
              d="M 0 28 Q 15 32 30 20 T 60 22 T 85 14 T 100 18 L 100 40 L 0 40 Z"
              fill={color}
              fillOpacity="0.08"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-line/70 text-[10px] text-center">
        <div className="bg-paper py-1.5 px-2 rounded border border-line">
          <div className="text-muted text-[9px]">API Gateway</div>
          <div className="text-emerald-600 font-bold">Operational</div>
        </div>
        <div className="bg-paper py-1.5 px-2 rounded border border-line">
          <div className="text-muted text-[9px]">Databases</div>
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

/* ─────────────────────────────────────────────────────────────────── */
/* 04: Consulting & Advisory Visualizer                               */
/* ─────────────────────────────────────────────────────────────────── */
function VisualPillar04({
  color,
}: {
  color: string;
  inView: boolean;
  reduced: boolean | null;
}) {
  const steps = [
    { num: "01", title: "Audit & Assessment", tag: "Phase 1" },
    { num: "02", title: "Architecture Blueprint", tag: "Phase 2" },
    { num: "03", title: "AI Viability & ROI", tag: "Phase 3" },
    { num: "04", title: "Execution Roadmap", tag: "Implementation" },
  ];

  return (
    <div className="flex flex-col justify-between h-[280px] font-mono text-xs">
      <div className="flex items-center justify-between border-b border-line/70 pb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4" style={{ color }} />
          <span className="font-semibold text-ink text-[12px]">Advisory Engagement Flow</span>
        </div>
        <span
          className="text-[10px] font-medium px-2 py-0.5 rounded border"
          style={{
            color,
            backgroundColor: `${color}10`,
            borderColor: `${color}30`,
          }}
        >
          Strategy Roadmap
        </span>
      </div>

      <div className="my-auto space-y-2 py-1">
        {steps.map((s) => (
          <div
            key={s.num}
            className="flex items-center justify-between bg-paper p-2.5 rounded-lg border border-line text-[11px]"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] border"
                style={{
                  color,
                  backgroundColor: `${color}10`,
                  borderColor: `${color}40`,
                }}
              >
                {s.num}
              </span>
              <span className="font-medium text-ink">{s.title}</span>
            </div>
            <span className="text-[10px] text-muted">{s.tag}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line/70 text-[11px]">
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>ROI &amp; Risk Assessed</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>Vendor Neutral</span>
        </div>
      </div>
    </div>
  );
}
