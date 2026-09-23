"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Code2, Shield, Database, Cpu } from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const ABOUT_NODES = [
  {
    id: "ai",
    label: "AI & Automation",
    tag: "INTELLIGENT AGENTS",
    color: "#4338CA",
    icon: Sparkles,
    angle: -90, // Top
  },
  {
    id: "software",
    label: "Modern Software",
    tag: "SCALABLE SYSTEMS",
    color: "#0B57D0",
    icon: Code2,
    angle: 0, // Right
  },
  {
    id: "data",
    label: "Data & Pipelines",
    tag: "ANALYTICS ENGINES",
    color: "#B45309",
    icon: Database,
    angle: 90, // Bottom
  },
  {
    id: "cloud",
    label: "Cloud & Security",
    tag: "DEVOPS INFRASTRUCTURE",
    color: "#0F766E",
    icon: Shield,
    angle: 180, // Left
  },
];

export function AboutHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px 0px" });
  const reduced = useReducedMotion();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slow, calm rotation of active highlighted node
  useEffect(() => {
    if (reduced || !isInView || isPaused) return;

    const interval = setInterval(() => {
      setActiveNodeIdx((prev) => (prev + 1) % ABOUT_NODES.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [reduced, isInView, isPaused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -2.5;
    const tiltY = ((x - centerX) / centerX) * 3;
    setMousePos({ x: tiltY, y: tiltX });
  };

  const activeNode = ABOUT_NODES[activeNodeIdx];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setMousePos({ x: 0, y: 0 });
      }}
      initial={reduced ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      style={{
        transform:
          reduced || typeof window === "undefined" || window.innerWidth < 1024
            ? undefined
            : `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
      }}
      className="relative w-full max-w-[490px] bg-paper/95 backdrop-blur-md border border-line/90 rounded-2xl p-5 sm:p-6 shadow-elev-2 transition-transform duration-200 ease-out"
    >
      {/* Soft ambient corner glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-10 transition-colors duration-500"
        style={{ backgroundColor: activeNode.color }}
        aria-hidden
      />

      {/* Header status bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-line text-[11px] font-mono">
        <div className="flex items-center gap-2 text-ink font-semibold">
          <Cpu className="w-3.5 h-3.5 text-accent" />
          <span>ENGINEERING FOUNDATION</span>
        </div>
        <div className="text-[10px] text-muted flex items-center gap-1.5 bg-mist px-2 py-0.5 rounded border border-line/60">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>GLOBAL DELIVERY</span>
        </div>
      </div>

      {/* Central Core & Orbit Canvas */}
      <div className="relative h-[280px] sm:h-[300px] w-full flex items-center justify-center overflow-hidden rounded-xl bg-mist/30 border border-line/50">
        {/* Concentric rings */}
        <div
          className="absolute w-[240px] sm:w-[250px] h-[240px] sm:h-[250px] rounded-full border border-line/60 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute w-[150px] sm:w-[160px] h-[150px] sm:h-[160px] rounded-full border border-line/40 pointer-events-none"
          aria-hidden
        />

        {/* SVG connection lines from center to 4 nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden>
          {ABOUT_NODES.map((node, i) => {
            const angleRad = (node.angle * Math.PI) / 180;
            const radius = 106;
            const cx = 225;
            const cy = 145;
            const x = cx + Math.cos(angleRad) * radius;
            const y = cy + Math.sin(angleRad) * radius;
            const isActive = i === activeNodeIdx;

            return (
              <g key={node.id}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${Math.cos(angleRad) * radius}px)`}
                  y2={`calc(50% + ${Math.sin(angleRad) * radius}px)`}
                  stroke={isActive ? node.color : "#E3E8EF"}
                  strokeWidth={isActive ? "1.75" : "1"}
                  strokeDasharray={isActive ? "none" : "3 3"}
                  className="transition-colors duration-300"
                />
                {!reduced && isInView && isActive && (
                  <circle r="2.5" fill={node.color} opacity="0.9">
                    <animateMotion
                      path={`M ${cx} ${cy} L ${x} ${y}`}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Nimbrix Core */}
        <motion.div
          initial={reduced ? false : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          className="relative z-20 w-16 h-16 rounded-2xl border-2 border-accent/60 bg-paper shadow-md flex flex-col items-center justify-center cursor-default"
          style={{
            boxShadow: "0 0 24px rgba(11,87,208,0.16)",
          }}
        >
          <span className="font-heading font-bold text-xl text-accent">N</span>
          <span className="font-mono text-[7px] uppercase tracking-widest text-muted/80">CORE</span>
        </motion.div>

        {/* 4 Cardinal Nodes */}
        {ABOUT_NODES.map((node, i) => {
          const angleRad = (node.angle * Math.PI) / 180;
          const radius = 106;
          const ox = Math.cos(angleRad) * radius;
          const oy = Math.sin(angleRad) * radius;
          const isActive = i === activeNodeIdx;
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              className="absolute z-20"
              style={{
                left: `calc(50% + ${ox}px - 18px)`,
                top: `calc(50% + ${oy}px - 18px)`,
              }}
              initial={reduced ? false : { scale: 0, opacity: 0 }}
              animate={{
                scale: isActive ? 1.15 : 1,
                opacity: 1,
              }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.06, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => setActiveNodeIdx(i)}
                onMouseEnter={() => setActiveNodeIdx(i)}
                className="group relative w-9 h-9 rounded-xl border bg-paper shadow-2xs flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none cursor-pointer"
                style={{
                  borderColor: isActive ? node.color : "#E3E8EF",
                  backgroundColor: isActive ? `${node.color}15` : "#FFFFFF",
                  boxShadow: isActive ? `0 0 16px ${node.color}35` : undefined,
                }}
                aria-label={node.label}
              >
                <Icon
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: node.color }}
                />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Active node details bar */}
      <div className="mt-3.5 p-3 bg-mist/60 border border-line/60 rounded-xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${activeNode.color}18` }}
          >
            <activeNode.icon className="w-3.5 h-3.5" style={{ color: activeNode.color }} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="font-semibold" style={{ color: activeNode.color }}>
                {activeNode.tag}
              </span>
              <span className="text-muted/60">·</span>
              <span className="font-semibold text-ink truncate">{activeNode.label}</span>
            </div>
            <p className="text-[11px] text-muted italic truncate leading-tight">
              Production engineering pillar
            </p>
          </div>
        </div>

        <span className="font-mono text-[9px] uppercase tracking-wider text-muted bg-paper px-2 py-0.5 rounded border border-line/70 flex-shrink-0">
          0{activeNodeIdx + 1} / 04
        </span>
      </div>
    </motion.div>
  );
}
