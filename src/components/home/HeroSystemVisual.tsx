"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring } from "framer-motion";

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

function usePhase(reduced: boolean | null): { phase: Phase; subProgress: number } {
  const [phase, setPhase] = useState<Phase>("chaos");
  const [subProgress, setSubProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;

    let elapsed = 0;
    let lastTime: number | null = null;
    let rafId: number;
    const phases: Phase[] = ["chaos", "converge", "processing", "output"];
    let phaseIdx = 0;

    const tick = (now: number) => {
      if (lastTime === null) lastTime = now;
      const delta = now - lastTime;
      lastTime = now;
      elapsed += delta;

      const currentDur = PHASE_DURATIONS[phases[phaseIdx]];
      const phasePct = Math.min(elapsed / currentDur, 1);
      setSubProgress(phasePct);

      if (phasePct >= 1) {
        elapsed = 0;
        phaseIdx = (phaseIdx + 1) % phases.length;
        setPhase(phases[phaseIdx]);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [reduced]);

  return { phase, subProgress };
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
  const { phase, subProgress } = usePhase(reduced);

  // Mouse parallax tilt (desktop only)
  const panelRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const panel = panelRef.current;
    if (!panel) return;

    const onMove = (e: MouseEvent) => {
      const rect = panel.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      rotateX.set(-dy * 5);
      rotateY.set(dx * 5);
    };
    const onLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    panel.addEventListener("mousemove", onMove);
    panel.addEventListener("mouseleave", onLeave);
    return () => {
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced, rotateX, rotateY]);

  if (reduced) {
    return (
      <div className="relative h-[440px] lg:h-[520px] border border-line bg-mist overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />
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
      className="relative h-[440px] lg:h-[520px] border border-cat-indigo/20 bg-mist overflow-hidden cursor-default"
      style={{
        rotateX: rotateX as unknown as number,
        rotateY: rotateY as unknown as number,
        transformPerspective: 1000,
        boxShadow: "0 0 40px rgba(67,56,202,0.06), 0 0 80px rgba(67,56,202,0.04)",
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #4338CA 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cat-indigo/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" aria-hidden />

      {/* SVG canvas — full size */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 440" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {/* Chaotic tangled lines from inputs to centre */}
        {inputChips.map((chip, i) => {
          const x1 = (chip.x / 100) * 400;
          const y1 = (chip.y / 100) * 440;
          const cx2 = 200;
          const cy2 = 220;
          const opacity = isChaos ? 0.25 : isConverge ? 0.5 * (1 - subProgress) : 0;
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
        {isOutput && outputItems.map((item, i) => {
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
        {inputChips.map((chip, i) => {
          const targetX = isChaos ? 0 : isConverge ? 40 * subProgress : 80;
          const jitter = isChaos ? Math.sin(Date.now() / 400 + i) * 3 : 0;
          return (
            <motion.div
              key={chip.id}
              className="text-[9px] font-mono text-muted/70 border border-line/60 px-2 py-1 bg-paper/80 backdrop-blur-sm whitespace-nowrap"
              animate={{
                x: targetX + jitter,
                opacity: isOutput ? 0 : 1,
                scale: isConverge ? 1 - subProgress * 0.15 : 1,
              }}
              transition={{ duration: isConverge ? 0.3 : 0.15 }}
            >
              {chip.label}
            </motion.div>
          );
        })}
      </div>

      {/* ── Centre — core node ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Rotating ring */}
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

          {/* Second ring */}
          <motion.div
            className="absolute w-20 h-20 border border-cat-indigo/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-cat-indigo/15"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Core */}
          <motion.div
            className="relative w-10 h-10 rounded-full border-2 border-cat-indigo/60 bg-cat-indigo/20 flex items-center justify-center"
            animate={{
              borderColor: isOutput ? "rgba(11,87,208,0.8)" : "rgba(67,56,202,0.4)",
              backgroundColor: isOutput ? "rgba(67,56,202,0.2)" : "rgba(67,56,202,0.1)",
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[9px] text-cat-indigo font-bold">N</span>
          </motion.div>

          {/* Orbit labels */}
          {orbitLabels.map((orb, i) => {
            const rad = (orb.angle * Math.PI) / 180;
            const r = 52;
            const ox = Math.cos(rad) * r;
            const oy = Math.sin(rad) * r;
            return (
              <motion.div
                key={orb.id}
                className="absolute font-mono text-[8px] text-muted/60 uppercase tracking-widest"
                style={{ x: ox - 12, y: oy - 6 }}
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
                className="flex items-center gap-2 font-mono text-[10px] border border-cat-indigo/30 bg-paper/90 px-3 py-2 backdrop-blur-sm"
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
