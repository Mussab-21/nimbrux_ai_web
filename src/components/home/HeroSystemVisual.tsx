"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";

type Phase = "chaos" | "converge" | "processing" | "output";

const PHASE_DURATIONS: Record<Phase, number> = {
  chaos: 2500,
  converge: 2000,
  processing: 2000,
  output: 3500,
};

const inputChips = [
  { id: "spreadsheets", label: "Spreadsheets", x: 12, y: 20 },
  { id: "emails", label: "Emails", x: 8, y: 45 },
  { id: "pdfs", label: "PDFs", x: 14, y: 68 },
  { id: "legacy", label: "Legacy DB", x: 7, y: 85 },
  { id: "crm", label: "CRM", x: 15, y: 10 },
  { id: "forms", label: "Manual Forms", x: 6, y: 57 },
];

const outputItems = [
  { id: "extracted", label: "Extracted" },
  { id: "validated", label: "Validated" },
  { id: "routed", label: "Routed" },
  { id: "deployed", label: "Deployed" },
];

const orbitLabels = [
  { id: "ai", label: "AI", angle: 0 },
  { id: "cloud", label: "Cloud", angle: 90 },
  { id: "data", label: "Data", angle: 180 },
  { id: "software", label: "Software", angle: 270 },
];

function usePhase(reduced: boolean | null, inView: boolean): Phase {
  const [phase, setPhase] = useState<Phase>("chaos");

  useEffect(() => {
    if (reduced || !inView) return;

    const phases: Phase[] = ["chaos", "converge", "processing", "output"];
    const currentIdx = phases.indexOf(phase);
    const nextIdx = (currentIdx + 1) % phases.length;
    const dur = PHASE_DURATIONS[phase];

    const timer = setTimeout(() => {
      setPhase(phases[nextIdx]);
    }, dur);

    return () => clearTimeout(timer);
  }, [phase, reduced, inView]);

  return phase;
}

/* ─────────────────────────────────────────────────────── */
/* Static "output" state for reduced-motion               */
/* ─────────────────────────────────────────────────────── */
function StaticOutputState() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 font-mono text-xs">
      <div className="text-center mb-2">
        <div className="w-10 h-10 rounded-full border-2 border-cat-indigo/60 bg-cat-indigo/10 flex items-center justify-center mx-auto mb-2">
          <span className="text-cat-indigo text-[10px] font-bold">N</span>
        </div>
        <span className="text-cat-indigo text-[10px] uppercase tracking-widest">Nimbrix Intelligence</span>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[160px]">
        {outputItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 py-2 border border-cat-indigo/30 bg-cat-indigo/05"
          >
            <span className="text-emerald-500 font-bold">✓</span>
            <span className="text-ink/80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/* Main animated component                                */
/* ─────────────────────────────────────────────────────── */
export function HeroSystemVisual() {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(panelRef, { margin: "100px" });
  const phase = usePhase(reduced, isInView);

  // Mouse parallax tilt (desktop only with cached bounds to avoid layout thrash)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const panel = panelRef.current;
    if (!panel) return;

    let cachedRect: DOMRect | null = null;

    const onEnter = () => {
      cachedRect = panel.getBoundingClientRect();
    };

    const onMove = (e: MouseEvent) => {
      if (!cachedRect) cachedRect = panel.getBoundingClientRect();
      const cx = cachedRect.left + cachedRect.width / 2;
      const cy = cachedRect.top + cachedRect.height / 2;
      const dx = (e.clientX - cx) / (cachedRect.width / 2);
      const dy = (e.clientY - cy) / (cachedRect.height / 2);
      rotateX.set(-dy * 4);
      rotateY.set(dx * 4);
    };

    const onLeave = () => {
      cachedRect = null;
      rotateX.set(0);
      rotateY.set(0);
    };

    panel.addEventListener("mouseenter", onEnter, { passive: true });
    panel.addEventListener("mousemove", onMove, { passive: true });
    panel.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      panel.removeEventListener("mouseenter", onEnter);
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced, rotateX, rotateY]);

  if (reduced) {
    return (
      <div className="relative h-[360px] lg:h-[400px] xl:h-[420px] border border-line bg-mist overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <StaticOutputState />
      </div>
    );
  }

  const isOutput = phase === "output";
  const isChaos = phase === "chaos";
  const isConverge = phase === "converge";
  const isProcessing = phase === "processing" || isConverge;

  return (
    <motion.div
      ref={panelRef}
      className="relative h-[360px] lg:h-[400px] xl:h-[420px] border border-cat-indigo/20 bg-mist overflow-hidden cursor-default"
      style={{
        rotateX: rotateX as unknown as number,
        rotateY: rotateY as unknown as number,
        transformPerspective: 1000,
        boxShadow: "0 0 30px rgba(67,56,202,0.06)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Ambient glow (radial gradients, zero filter blur) */}
      <div
        className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(67,56,202,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(11,87,208,0.10) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* SVG canvas — full size */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 440"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {/* Tangled lines from inputs to centre */}
        {inputChips.map((chip, i) => {
          const x1 = (chip.x / 100) * 400;
          const y1 = (chip.y / 100) * 440;
          const cx2 = 200;
          const cy2 = 220;
          const opacity = isChaos ? 0.25 : isConverge ? 0.4 : 0;
          const cp1x = x1 + (i % 2 === 0 ? 40 : -40);
          const cp1y = y1 + (i % 3 === 0 ? 30 : -30);
          return (
            <motion.path
              key={chip.id}
              d={`M ${x1} ${y1} Q ${cp1x} ${cp1y} ${cx2} ${cy2}`}
              stroke="#4338CA"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              animate={{ opacity }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {/* Clean output lines from centre to right */}
        {isOutput &&
          outputItems.map((item, i) => {
            const yOut = 160 + i * 36;
            return (
              <motion.line
                key={item.id}
                x1="240"
                y1="220"
                x2="290"
                y2={yOut}
                stroke="#4338CA"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.18 + 0.2 }}
              />
            );
          })}
      </svg>

      {/* ── Left — input chips ── */}
      <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-4">
        {inputChips.map((chip) => {
          const targetX = isChaos ? 0 : isConverge ? 28 : 60;
          return (
            <motion.div
              key={chip.id}
              className="text-[9px] font-mono text-muted/80 border border-line/80 px-2 py-1 bg-paper shadow-sm whitespace-nowrap"
              animate={{
                x: targetX,
                opacity: isOutput ? 0 : 1,
                scale: isConverge ? 0.95 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {chip.label}
            </motion.div>
          );
        })}
      </div>

      {/* ── Centre — core node ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Rotating ring (paused off-screen) */}
          {isInView && (
            <motion.div
              className="absolute w-28 h-28 border border-cat-indigo/30 rounded-full"
              animate={{
                rotate: 360,
                opacity: isOutput ? 0.8 : isChaos ? 0.2 : 0.5,
                scale: isProcessing ? [1, 1.05, 1] : 1,
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.5 },
                scale: { duration: 1.5, repeat: Infinity },
              }}
            />
          )}

          {/* Second ring */}
          {isInView && (
            <motion.div
              className="absolute w-20 h-20 border border-accent/25 rounded-full"
              animate={{
                rotate: -360,
                scale: isProcessing ? [1.05, 1, 1.05] : 1,
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
          )}

          {/* Core box */}
          <motion.div
            className="w-12 h-12 rounded-xl border-2 border-cat-indigo/60 bg-paper flex items-center justify-center shadow-md z-10"
            animate={{
              borderColor: isOutput ? "#0F766E" : "#4338CA",
              boxShadow: isProcessing
                ? "0 0 20px rgba(67,56,202,0.25)"
                : "0 0 8px rgba(67,56,202,0.1)",
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="font-heading font-bold text-base"
              animate={{
                color: isOutput ? "#0F766E" : "#4338CA",
              }}
            >
              {isOutput ? "✓" : "N"}
            </motion.span>
          </motion.div>

          {/* Orbiting capability markers */}
          {orbitLabels.map((orb, i) => {
            const rad = (orb.angle * Math.PI) / 180;
            const r = 52;
            const ox = Math.cos(rad) * r;
            const oy = Math.sin(rad) * r;
            return (
              <motion.div
                key={orb.id}
                className="absolute text-[8px] font-mono text-cat-indigo/70 font-semibold bg-paper px-1 border border-cat-indigo/20 rounded shadow-xs"
                style={{ left: `calc(50% + ${ox}px - 14px)`, top: `calc(50% + ${oy}px - 8px)` }}
                animate={{ opacity: isProcessing || isOutput ? 1 : 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {orb.label}
              </motion.div>
            );
          })}
        </div>

        {/* Label below core */}
        <motion.div
          className="absolute bottom-[38%] font-mono text-[9px] text-cat-indigo/60 uppercase tracking-widest"
          animate={{ opacity: isOutput ? 0.7 : isChaos ? 0.3 : 0.6 }}
        >
          Nimbrix Intelligence
        </motion.div>
      </div>

      {/* ── Right — output cards ── */}
      <div className="absolute right-3 top-0 bottom-0 flex flex-col justify-center gap-2 py-4">
        <AnimatePresence>
          {isOutput &&
            outputItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-2 font-mono text-[10px] border border-cat-indigo/30 bg-paper px-3 py-2 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="text-emerald-500 font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.18 + 0.25, type: "spring", stiffness: 400 }}
                >
                  ✓
                </motion.span>
                <span className="text-ink/80">{item.label}</span>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Phase label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="font-mono text-[9px] text-muted/40 uppercase tracking-widest">
          {isChaos && "inputs → processing"}
          {isConverge && "converging →"}
          {isProcessing && !isConverge && "processing →"}
          {isOutput && "→ clean outputs"}
        </span>
      </div>
    </motion.div>
  );
}
