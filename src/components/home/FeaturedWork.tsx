"use client";

import { useState, useEffect, useCallback, useId } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Pause,
  Play,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Heart,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/motion/FadeUp";

/* ─────────────────────────────────────────────────────── */
/* Project Item Data                                      */
/* ─────────────────────────────────────────────────────── */
interface ProjectItem {
  slug: string;
  number: string;
  industry: string;
  title: string;
  challenge: string;
  outcome: string;
  tech: string[];
  accentColor: string;
  category: string;
  githubUrl: string;
  caseStudyUrl?: string;
  visualType: "resume" | "fashion" | "discord" | "figma" | "terminal" | "donation";
}

const projects: ProjectItem[] = [
  {
    slug: "resume-matcher",
    number: "01",
    industry: "AI & HR Tech",
    title: "AI Resume Matcher & Gap Analyzer",
    challenge: "Manual resume screening takes hours and misses critical skill matches across complex job descriptions.",
    outcome: "Contextual semantic scoring engine extracting dense entities and computing match percentages in real-time.",
    tech: ["Python", "NLP", "Embeddings", "FastAPI"],
    accentColor: "#4338CA",
    category: "AI & NLP",
    githubUrl: "https://github.com/Mussab-21/resume_matcher",
    visualType: "resume",
  },
  {
    slug: "fashion-mnist-classifier",
    number: "02",
    industry: "Machine Learning & Vision",
    title: "Fashion-MNIST Classifier",
    challenge: "Bridging the gap between raw PyTorch convolutional model training and real-time interactive user inference.",
    outcome: "High-accuracy CNN pipeline deployed in an intuitive dashboard with instant probability heatmaps.",
    tech: ["Python", "PyTorch", "Streamlit", "Computer Vision"],
    accentColor: "#0B57D0",
    category: "Deep Learning",
    githubUrl: "https://github.com/Mussab-21/fashion-mnist-streamlit-cnn",
    visualType: "fashion",
  },
  {
    slug: "discord-checkin-bot",
    number: "03",
    industry: "Automation & DevOps",
    title: "Discord Check-In/Check-Out Bot",
    challenge: "Tracking remote team attendance across multiple timezones resulted in missed shifts and manual spreadsheet logging.",
    outcome: "Instant slash-command bot tracking active session durations with SQLite persistence and exportable rosters.",
    tech: ["Python", "Discord API", "SQLite", "Asyncio"],
    accentColor: "#5865F2",
    category: "Automation & Bots",
    githubUrl: "https://github.com/Mussab-21/discord-checkin-out-bot",
    visualType: "discord",
  },
  {
    slug: "figma-discord-bot",
    number: "04",
    industry: "Developer Tools & Design Ops",
    title: "Figma-Discord Integration Bot",
    challenge: "Design review feedback remained siloed in Figma, causing delays and misaligned engineering discussions.",
    outcome: "Event-driven webhook bridge streaming comments and file updates directly into project Discord channels.",
    tech: ["Discord API", "Figma API", "Python", "FastAPI"],
    accentColor: "#E05638",
    category: "Integration & Bots",
    githubUrl: "https://github.com/Mussab-21/figma-discord-bot",
    visualType: "figma",
  },
  {
    slug: "internship-ai-assistant",
    number: "05",
    industry: "Generative AI & Productivity",
    title: "Internship AI Assistant",
    challenge: "Engineering onboarding suffered from high overhead answering repetitive internal tooling and API architecture questions.",
    outcome: "Context-aware LLM assistant streamlining internal codebase exploration, API contract lookups, and docs.",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI"],
    accentColor: "#0F766E",
    category: "Generative AI",
    githubUrl: "https://github.com/Mussab-21/internship-ai-assistant",
    visualType: "terminal",
  },
  {
    slug: "neki-sub-say",
    number: "06",
    industry: "Non-Profit & Web Platform",
    title: "NEIKI Sub Say Foundation Platform",
    challenge: "Manual donation tracking in offline records with zero digital donor transparency or online contribution channels.",
    outcome: "End-to-end web portal enabling secure online donor contributions, impact showcases, and automated receipts.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    accentColor: "#1E40AF",
    category: "Web & Software",
    githubUrl: "https://github.com/Mussab-21/neiki_foundation",
    visualType: "donation",
  },
];

const AUTOPLAY_INTERVAL = 7000;

/* ─────────────────────────────────────────────────────── */
/* 6 Project Animated Output Visuals (Sample Output / Demo) */
/* ─────────────────────────────────────────────────────── */

// 1. AI Resume Matcher Visual
function ResumeVisual({ reduced }: { reduced: boolean | null }) {
  const skills = ["Python", "FastAPI", "PyTorch", "PostgreSQL"];
  return (
    <div className="w-full h-full p-3.5 flex flex-col justify-between bg-paper border border-line rounded">
      {/* Resume Document Header */}
      <div className="flex items-center justify-between border-b border-line pb-2 mb-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cat-indigo" />
          <span className="font-mono text-[11px] font-semibold text-ink">candidate_resume.pdf</span>
        </div>
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-cat-indigo/10 text-cat-indigo rounded">
          Sample output
        </span>
      </div>

      {/* Extracted Entity Tags */}
      <div className="space-y-1.5">
        <div className="text-[10px] font-mono text-muted uppercase tracking-wider">Extracted Entities:</div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, idx) => (
            <motion.span
              key={skill}
              className="font-mono text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded font-medium"
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reduced ? 0 : 0.2 + idx * 0.1 }}
            >
              ✓ {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Circular Match Score Gauge */}
      <div className="mt-3 pt-2 border-t border-line flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-line"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className="text-emerald-600"
                strokeDasharray="94.2, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                initial={reduced ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-mono text-[10px] font-bold text-ink">94%</span>
          </div>
          <div>
            <div className="font-heading text-xs font-semibold text-ink">Semantic Match</div>
            <div className="font-mono text-[10px] text-muted">Senior ML Engineer Role</div>
          </div>
        </div>
        <span className="font-mono text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 border border-emerald-200 rounded">
          Qualified
        </span>
      </div>
    </div>
  );
}

// 2. Fashion-MNIST Classifier Visual
function FashionVisual({ reduced }: { reduced: boolean | null }) {
  const classes = [
    { label: "Ankle boot", pct: 97.4, isTop: true },
    { label: "Sneaker", pct: 2.1, isTop: false },
    { label: "Sandal", pct: 0.5, isTop: false },
  ];

  return (
    <div className="w-full h-full p-3.5 flex flex-col justify-between bg-paper border border-line rounded">
      <div className="flex items-center justify-between border-b border-line pb-2 mb-2">
        <span className="font-mono text-[11px] font-semibold text-ink">CNN Inference Visualizer</span>
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-accent/10 text-accent rounded">
          Sample output
        </span>
      </div>

      <div className="grid grid-cols-12 gap-3 items-center">
        {/* Resolving 28x28 Pixel Grid */}
        <div className="col-span-5 flex flex-col items-center">
          <div className="w-16 h-16 bg-ink/90 p-1 rounded border border-line grid grid-cols-4 gap-0.5 shadow-inner">
            {[0.2, 0.4, 0.8, 0.9, 0.3, 0.9, 1, 0.8, 0.1, 0.7, 0.9, 0.4, 0.0, 0.3, 0.6, 0.2].map((val, i) => (
              <motion.div
                key={i}
                className="w-full h-full rounded-[1px] bg-white"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: val }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
              />
            ))}
          </div>
          <span className="font-mono text-[9px] text-muted mt-1">28x28 Input Tensor</span>
        </div>

        {/* Probability Bars */}
        <div className="col-span-7 space-y-1.5">
          {classes.map((c, idx) => (
            <div key={c.label}>
              <div className="flex justify-between font-mono text-[10px] mb-0.5">
                <span className={c.isTop ? "font-semibold text-ink" : "text-muted"}>{c.label}</span>
                <span className={c.isTop ? "font-bold text-accent" : "text-muted"}>{c.pct}%</span>
              </div>
              <div className="h-1.5 w-full bg-mist rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${c.isTop ? "bg-accent" : "bg-muted/40"}`}
                  initial={reduced ? false : { width: 0 }}
                  animate={{ width: `${c.pct}%` }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-line flex items-center justify-between font-mono text-[10px]">
        <span className="text-muted">Latency: ~14ms</span>
        <span className="text-accent font-semibold">Predicted: Ankle boot</span>
      </div>
    </div>
  );
}

// 3. Discord Check-In Bot Visual
function DiscordVisual({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="w-full h-full p-3.5 flex flex-col justify-between bg-[#2F3136] text-white rounded border border-[#202225] font-sans">
      <div className="flex items-center justify-between border-b border-[#40444B] pb-1.5 mb-1.5">
        <span className="font-mono text-[10px] text-[#8E9297]"># attendance-logs</span>
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#5865F2]/20 text-[#5865F2] rounded">
          Demo
        </span>
      </div>

      {/* User slash command */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs text-[#DCDDDE]">
          <span className="font-semibold text-white">mussab</span>
          <span className="text-[10px] text-[#8E9297]">Today at 09:00 AM</span>
        </div>
        <div className="font-mono text-[11px] text-[#5865F2] bg-[#40444B]/40 px-2 py-1 rounded inline-block">
          /checkin project:client-alpha
        </div>
      </div>

      {/* Bot response embed */}
      <motion.div
        className="mt-2 p-2.5 bg-[#2B2D31] border-l-4 border-[#5865F2] rounded-r text-xs space-y-1"
        initial={reduced ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="font-bold text-white flex items-center gap-1.5 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Session Started Successfully</span>
        </div>
        <p className="text-[10px] text-[#B9BBBE] font-mono">
          Logged @ 09:00:00 UTC · Session timer ticking
        </p>
        <div className="flex items-center justify-between pt-1 border-t border-[#40444B] text-[10px] font-mono text-emerald-400">
          <span>Status: ACTIVE</span>
          <span>⏱ 01h 42m logged</span>
        </div>
      </motion.div>
    </div>
  );
}

// 4. Figma-Discord Bot Visual
function FigmaVisual({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between bg-paper border border-line rounded">
      <div className="flex items-center justify-between border-b border-line pb-1.5 mb-1.5">
        <span className="font-mono text-[10px] font-semibold text-ink">Event Webhook Stream</span>
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-amber-500/10 text-amber-700 rounded">
          Live preview
        </span>
      </div>

      <div className="space-y-2">
        {/* Figma event source */}
        <div className="p-2 border border-line bg-mist/50 rounded flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E05638]" />
            <span className="font-mono text-[10px] text-muted">Figma: Design File Update</span>
          </div>
          <span className="font-mono text-[9px] text-muted">v2.4</span>
        </div>

        {/* Arrow / Packet transmission */}
        <div className="flex items-center justify-center gap-2 py-0.5 text-accent font-mono text-[10px]">
          <motion.div
            className="flex items-center gap-1"
            animate={reduced ? {} : { x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span>Webhook Dispatched</span>
            <ArrowRight className="w-3 h-3" />
          </motion.div>
        </div>

        {/* Discord target embed */}
        <div className="p-2 border border-[#5865F2]/40 bg-[#5865F2]/5 rounded text-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-semibold text-[#5865F2]">#design-reviews</span>
            <span className="font-mono text-[9px] text-emerald-700">Delivered</span>
          </div>
          <p className="font-mono text-[10px] text-ink/80 line-clamp-1">
            💬 Sarah left a comment on &ldquo;Hero Component (Desktop)&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-1 pt-1.5 border-t border-line flex items-center justify-between font-mono text-[9px] text-muted">
        <span>Delivery Latency: 120ms</span>
        <span className="text-accent">Auto-synced</span>
      </div>
    </div>
  );
}

// 5. Internship AI Assistant Visual
function TerminalVisual({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="w-full h-full p-3 bg-[#0A0F1C] text-emerald-400 font-mono text-[10px] rounded border border-line/40 flex flex-col justify-between">
      {/* Terminal bar */}
      <div className="flex items-center justify-between border-b border-line/20 pb-1 mb-1 text-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-1 text-[9px] text-muted">assistant-cli ~ zsh</span>
        </div>
        <span className="text-[9px] text-muted">Demo</span>
      </div>

      {/* Query & stream */}
      <div className="space-y-1.5 flex-1 py-1">
        <div className="text-white/90">
          <span className="text-cat-indigo">$</span> query --topic &ldquo;auth token flow&rdquo;
        </div>
        <motion.div
          className="text-emerald-300/90 leading-relaxed text-[10px]"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          → Retrieved 3 docs from vector DB
          <br />
          → JWT access token expires in 15m; refresh stored in HttpOnly cookie.
        </motion.div>
        {!reduced && (
          <motion.span
            className="inline-block w-1.5 h-3 bg-emerald-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        )}
      </div>

      <div className="pt-1.5 border-t border-line/20 flex items-center justify-between text-[9px] text-muted">
        <span>Model: GPT-4o · RAG</span>
        <span className="text-emerald-400">Ready</span>
      </div>
    </div>
  );
}

// 6. NEIKI Foundation Platform Visual
function DonationVisual({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="w-full h-full p-3.5 flex flex-col justify-between bg-paper border border-line rounded">
      <div className="flex items-center justify-between border-b border-line pb-1.5 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span className="font-mono text-[11px] font-semibold text-ink">Donation Portal</span>
        </div>
        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-blue-500/10 text-blue-700 rounded">
          Sample output
        </span>
      </div>

      {/* Amount selector */}
      <div className="space-y-1.5">
        <div className="text-[10px] font-mono text-muted">Select Contribution:</div>
        <div className="flex gap-2">
          {["$25", "$50", "$100"].map((amt, idx) => (
            <span
              key={amt}
              className={`font-mono text-[10px] px-2.5 py-1 rounded border ${
                idx === 1
                  ? "border-accent bg-accent text-white font-semibold"
                  : "border-line bg-mist text-ink"
              }`}
            >
              {amt}
            </span>
          ))}
        </div>
      </div>

      {/* Progress towards goal */}
      <div className="mt-2 space-y-1">
        <div className="flex justify-between font-mono text-[10px]">
          <span className="text-muted">Campaign Goal</span>
          <span className="font-bold text-ink">$14,250 / $20,000</span>
        </div>
        <div className="h-1.5 w-full bg-mist rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-cat-teal rounded-full"
            initial={reduced ? false : { width: 0 }}
            animate={{ width: "71%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </div>

      <div className="mt-2 pt-1.5 border-t border-line flex items-center justify-between font-mono text-[10px]">
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Supabase Secured
        </span>
        <span className="text-muted">Instant Receipt</span>
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
  reduced,
}: {
  type: ProjectItem["visualType"];
  reduced: boolean | null;
}) {
  switch (type) {
    case "resume":
      return <ResumeVisual reduced={reduced} />;
    case "fashion":
      return <FashionVisual reduced={reduced} />;
    case "discord":
      return <DiscordVisual reduced={reduced} />;
    case "figma":
      return <FigmaVisual reduced={reduced} />;
    case "terminal":
      return <TerminalVisual reduced={reduced} />;
    case "donation":
      return <DonationVisual reduced={reduced} />;
  }
}

/* ─────────────────────────────────────────────────────── */
/* Main FeaturedWork Component                             */
/* ─────────────────────────────────────────────────────── */
export function FeaturedWork() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const regionId = useId();

  const total = projects.length;
  const currentProject = projects[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
    setProgress(0);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
    setProgress(0);
  }, [total]);

  // Autoplay loop with smooth timer progress
  useEffect(() => {
    if (reduced || paused) return;

    const interval = 100;
    const step = (interval / AUTOPLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          next();
          return 0;
        }
        return old + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [paused, reduced, next]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      className="section-shell border-b border-line bg-mist"
      id="work"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Selected work carousel"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 lg:mb-8 gap-4">
          <div className="max-w-xl">
            <FadeUp>
              <SectionLabel number="03">Selected Work</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[clamp(1.75rem,2.4vw,2.5rem)] tracking-tight text-ink mb-1">
                Selected work{" "}
                <span className="text-accent">and what we build to learn.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Open-source engineering and prototype systems — built in the open with verifiable architecture.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-cat-amber transition-colors font-medium flex-shrink-0"
            >
              View all projects &amp; case studies
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Carousel Container */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected work showcase"
          id={regionId}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative bg-paper border border-line shadow-elev-1 overflow-hidden"
        >
          {/* Autoplay Progress Bar */}
          {!reduced && (
            <div className="h-[2.5px] w-full bg-line overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-100 ease-linear origin-left"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Slide Content */}
          <div className="p-6 lg:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.slug}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}: ${currentProject.title}`}
              >
                {/* Header Row: Number + Category + Title */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${currentProject.accentColor}50`,
                        backgroundColor: `${currentProject.accentColor}10`,
                        color: currentProject.accentColor,
                      }}
                    >
                      {currentProject.number} / 0{total}
                    </span>
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">
                      {currentProject.industry} · {currentProject.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg lg:text-xl font-bold text-ink">
                    {currentProject.title}
                  </h3>
                </div>

                {/* Main 3-Stage Connected Area (Desktop horizontal / Mobile stack) */}
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-3 items-center">
                  {/* Stage 1: THE PROBLEM */}
                  <motion.div
                    className="lg:col-span-4 p-4 rounded border border-amber-500/30 bg-amber-500/[0.04] flex flex-col justify-between h-full min-h-[170px]"
                    initial={reduced ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-amber-700 font-mono text-[11px] font-semibold uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-xs text-body leading-relaxed">
                        {currentProject.challenge}
                      </p>
                    </div>

                    {/* Small pain micro-visual */}
                    <div className="mt-3 pt-2 border-t border-amber-500/20 flex items-center justify-between text-[10px] font-mono text-amber-800/80">
                      <span>Friction Point</span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[9px] font-semibold">
                        Manual Bottleneck
                      </span>
                    </div>
                  </motion.div>

                  {/* Stage 2: CONNECTOR (Transformation Node) */}
                  <div className="lg:col-span-3 flex flex-col lg:flex-row items-center justify-center py-2 lg:py-0">
                    <div className="flex items-center w-full justify-center">
                      <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-amber-400/40 to-cat-indigo" />
                      <div className="px-3 py-1.5 rounded-full border border-cat-indigo/40 bg-cat-indigo/10 flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-cat-indigo animate-pulse" />
                        <span className="font-heading text-[11px] font-bold text-cat-indigo tracking-tight">
                          Nimbrix Engine
                        </span>
                      </div>
                      <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-cat-indigo to-emerald-500/50" />
                    </div>
                    <div className="font-mono text-[9px] text-muted text-center mt-1 lg:hidden">
                      Automated Pipeline ↓
                    </div>
                  </div>

                  {/* Stage 3: THE SOLUTION / WHAT WE BUILT */}
                  <motion.div
                    className="lg:col-span-4 p-4 rounded border border-emerald-500/30 bg-emerald-500/[0.04] flex flex-col justify-between h-full min-h-[170px]"
                    initial={reduced ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-emerald-700 font-mono text-[11px] font-semibold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>What We Built</span>
                      </div>
                      <p className="text-xs text-body leading-relaxed mb-3">
                        {currentProject.outcome}
                      </p>
                    </div>

                    {/* Live project-specific animated output */}
                    <div className="h-[140px] w-full">
                      <ProjectVisual type={currentProject.visualType} reduced={reduced} />
                    </div>
                  </motion.div>
                </div>

                {/* Footer Row: Tech tags + Action buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-line gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted mr-1">
                      Stack:
                    </span>
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 bg-mist text-ink border border-line rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    {currentProject.githubUrl && (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-line bg-paper text-ink font-mono text-xs hover:border-accent hover:text-accent transition-colors rounded-sm"
                      >
                        <GitBranch className="w-3.5 h-3.5 text-muted" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                    <Link
                      href={`/work`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent text-white font-mono text-xs font-semibold hover:bg-cat-amber transition-colors rounded-sm"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Bar: Navigation Arrows + Counter + Dots + Play/Pause */}
          <div className="bg-mist/80 border-t border-line px-6 py-2.5 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {projects.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => {
                    setIndex(i);
                    setProgress(0);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-muted"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows & Pause button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPaused((p) => !p)}
                className="p-1.5 text-muted hover:text-ink transition-colors rounded"
                aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
              >
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <div className="h-3 w-px bg-line mx-1" />

              <button
                onClick={prev}
                className="p-1.5 border border-line bg-paper text-ink hover:bg-accent hover:text-white transition-colors rounded-sm"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-1.5 border border-line bg-paper text-ink hover:bg-accent hover:text-white transition-colors rounded-sm"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
