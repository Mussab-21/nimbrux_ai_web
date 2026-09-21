"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useId,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Pause,
  Play,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechIcon } from "@/components/ui/TechIcons";
import { FadeUp } from "@/components/motion/FadeUp";

/* ─────────────────────────────────────────────────────── */
/* Project data                                           */
/* ─────────────────────────────────────────────────────── */
interface ProjectItem {
  slug: string;
  number: string;
  industry: string;
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  tech: string[];
  accentColor: string;
  category: string;
  githubUrl: string;
  visualType: "nlp" | "vision" | "discord" | "figma" | "ai-assistant" | "web-platform";
}

const projects: ProjectItem[] = [
  {
    slug: "resume-matcher",
    number: "01",
    industry: "AI & HR Tech",
    title: "AI Resume Matcher & Gap Analyzer",
    description:
      "AI-driven automated candidate screening pipeline that parses PDF/DOCX resumes, extracts entities, and computes dense semantic similarity against target job descriptions to reveal qualification gaps.",
    challenge: "Manual resume screening is slow, error-prone, and struggles to systematically detect skill gaps.",
    outcome: "Contextual semantic scoring engine extracting entities and quantifying job match percentage in real-time.",
    tech: ["Python", "NLP", "Embeddings", "FastAPI"],
    accentColor: "#4338CA",
    category: "AI & NLP",
    githubUrl: "https://github.com/Mussab-21/resume_matcher",
    visualType: "nlp",
  },
  {
    slug: "fashion-mnist-classifier",
    number: "02",
    industry: "Machine Learning & Vision",
    title: "Fashion-MNIST Classifier",
    description:
      "Interactive Streamlit web application classifying garment imagery in real-time using a custom-trained Convolutional Neural Network (PyTorch) with live class probability distributions and test sample previews.",
    challenge: "Bridging the gap between PyTorch model training and interactive end-user web inference.",
    outcome: "High-accuracy CNN pipeline deployed in an intuitive dashboard with instant probability heatmaps.",
    tech: ["Python", "PyTorch", "Streamlit", "Computer Vision"],
    accentColor: "#FF4B4B",
    category: "Deep Learning",
    githubUrl: "https://github.com/Mussab-21/fashion-mnist-streamlit-cnn",
    visualType: "vision",
  },
  {
    slug: "discord-checkin-bot",
    number: "03",
    industry: "Automation & DevOps",
    title: "Discord Check-In/Check-Out Bot",
    description:
      "Automated attendance tracking and shift management bot for remote teams and Discord communities featuring timezone-aware presence logging, session tracking, and summary exports.",
    challenge: "Tracking member attendance across diverse global timezones inside Discord communities.",
    outcome: "Instant slash command bot tracking active session durations and exporting attendance rosters.",
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
    description:
      "Real-time webhook synchronisation bot connecting Figma design changes and team reviews into Discord channels, alerting design and engineering teams to comments, version updates, and file changes.",
    challenge: "Design feedback remaining siloed away from engineering conversations on Discord.",
    outcome: "Event-driven webhook bridge broadcasting Figma feedback with deep-links directly into Discord channels.",
    tech: ["Discord API", "Figma API", "Python", "FastAPI"],
    accentColor: "#F24E1E",
    category: "Integration & Bots",
    githubUrl: "https://github.com/Mussab-21/figma-discord-bot",
    visualType: "figma",
  },
  {
    slug: "internship-ai-assistant",
    number: "05",
    industry: "Generative AI & Productivity",
    title: "Internship AI Assistant",
    description:
      "Intelligent engineering assistant tool built during Decode Labs internship, automating developer onboarding queries, API contract decomposition, and code summarisation via LLM chains.",
    challenge: "High onboarding overhead deciphering internal tooling and repetitive developer queries.",
    outcome: "Context-aware AI assistant streamlining codebase exploration and internal documentation searches.",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI"],
    accentColor: "#0ACF83",
    category: "Generative AI",
    githubUrl: "https://github.com/Mussab-21/internship-ai-assistant",
    visualType: "ai-assistant",
  },
  {
    slug: "neki-sub-say",
    number: "06",
    industry: "Non-Profit & Web Platform",
    title: "NEIKI Sub Say Foundation Website",
    description:
      "End-to-end full-stack digital platform for an NGO — public impact galleries, donor management, and a Supabase-powered donation flow for a non-profit operating across multiple regions.",
    challenge: "Manual donation tracking in spreadsheets with zero online presence or digital donor portals.",
    outcome: "Complete digital infrastructure launched within 6 weeks, enabling online donor contributions.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    accentColor: "#0B57D0",
    category: "Web & Software",
    githubUrl: "https://github.com/Mussab-21/neiki_foundation",
    visualType: "web-platform",
  },
];

const AUTOPLAY_INTERVAL = 6000;

/* ─────────────────────────────────────────────────────── */
/* Visual panels (unchanged content)                      */
/* ─────────────────────────────────────────────────────── */
function ProjectVisual({ type, title }: { type: ProjectItem["visualType"]; title: string }) {
  switch (type) {
    case "nlp":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cat-indigo" />
              <span className="text-muted">NLP Pipeline // Entity Scorer</span>
            </div>
            <span className="px-2 py-0.5 bg-cat-indigo/20 text-cat-indigo border border-cat-indigo/30">94.2% Match</span>
          </div>
          <div className="space-y-3 my-auto">
            <div className="p-3 bg-mist border border-line rounded">
              <div className="text-[11px] text-muted mb-1">Extracted Entities:</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-cat-indigo/20 text-white rounded text-[10px]">Python 3.11</span>
                <span className="px-2 py-0.5 bg-cat-indigo/20 text-white rounded text-[10px]">PyTorch / Embeddings</span>
                <span className="px-2 py-0.5 bg-cat-indigo/20 text-white rounded text-[10px]">FastAPI Architecture</span>
                <span className="px-2 py-0.5 bg-cat-indigo/20 text-white rounded text-[10px]">Vector Cosine: 0.941</span>
              </div>
            </div>
            <div className="h-2 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cat-indigo to-[#3A86FF] w-[94%]" />
            </div>
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>Cosine Similarity: SBERT Embeddings</span>
            <span className="text-emerald-400">Pass: Candidate Qualified</span>
          </div>
        </div>
      );

    case "vision":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4B4B]" />
              <span className="text-muted">PyTorch CNN // Fashion-MNIST</span>
            </div>
            <span className="px-2 py-0.5 bg-[#FF4B4B]/20 text-[#FF4B4B] border border-[#FF4B4B]/30">Live Inference</span>
          </div>
          <div className="grid grid-cols-12 gap-4 items-center my-auto">
            <div className="col-span-4 aspect-square bg-mist border border-line flex flex-col items-center justify-center p-2 rounded">
              <div className="w-12 h-12 border border-[#FF4B4B]/40 rounded grid grid-cols-4 grid-rows-4 gap-0.5 p-1 bg-black/40">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div key={idx} className="bg-[#FF4B4B]" style={{ opacity: (idx * 17) % 100 / 100 }} />
                ))}
              </div>
              <span className="text-[9px] text-muted mt-2">28x28 Tensor</span>
            </div>
            <div className="col-span-8 space-y-2">
              {[["Sneaker", "98.6%", "98.6%"], ["Ankle Boot", "1.1%", "1.1%"], ["Sandal", "0.3%", "0.3%"]].map(([label, pct, w]) => (
                <div key={label}>
                  <div className="flex justify-between text-[10px] mb-0.5">
                    <span className={label === "Sneaker" ? "text-ink" : "text-muted"}>{label}</span>
                    <span style={{ color: label === "Sneaker" ? "#FF4B4B" : undefined }}>{pct}</span>
                  </div>
                  <div className="h-1.5 bg-line rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: w, backgroundColor: label === "Sneaker" ? "#FF4B4B" : "#E3E8EF" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>Streamlit UI / 10 Classes</span>
            <span className="text-ink">Validation Acc: 92.4%</span>
          </div>
        </div>
      );

    case "discord":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5865F2]" />
              <span className="text-muted">Discord Bot // Presence Dispatcher</span>
            </div>
            <span className="px-2 py-0.5 bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30">Online</span>
          </div>
          <div className="bg-mist border border-line p-3.5 rounded my-auto space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#5865F2] flex items-center justify-center text-ink text-[10px] font-bold">D</span>
              <span className="text-ink font-semibold text-[11px]">AttendanceBot</span>
              <span className="px-1.5 bg-[#5865F2] text-[9px] text-ink rounded font-sans">BOT</span>
              <span className="text-[10px] text-muted">Today at 09:00 AM</span>
            </div>
            <div className="pl-8 text-[11px] text-emerald-400">
              ✓ User @mussab executed <code className="text-[#5865F2] bg-[#5865F2]/10 px-1 rounded">/checkin</code>
            </div>
            <div className="pl-8 text-[10px] text-muted">Session started: 09:00:15 UTC • Status: Active Shift</div>
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>Python Asyncio Engine</span>
            <span className="text-emerald-400">SQLite Logged</span>
          </div>
        </div>
      );

    case "figma":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F24E1E]" />
              <span className="text-muted">Figma Webhook → Discord Bridge</span>
            </div>
            <span className="px-2 py-0.5 bg-[#F24E1E]/20 text-[#F24E1E] border border-[#F24E1E]/30">Webhook Sync</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 bg-mist border border-line rounded">
              <div className="text-[#F24E1E] text-[10px] mb-1 font-semibold">FIGMA EVENT</div>
              <div className="text-ink text-[11px] truncate">Design Token Updated</div>
              <div className="text-[9px] text-muted mt-1">Node: #Frame-104:18</div>
            </div>
            <div className="p-3 bg-mist border border-line rounded">
              <div className="text-[#5865F2] text-[10px] mb-1 font-semibold">DISCORD EMBED</div>
              <div className="text-ink text-[11px] truncate">#design-feed Broadcast</div>
              <div className="text-[9px] text-muted mt-1">Deep Link Dispatched</div>
            </div>
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>Figma REST API v2</span>
            <span className="text-ink">Realtime Broadcast</span>
          </div>
        </div>
      );

    case "ai-assistant":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ACF83]" />
              <span className="text-muted">Decode Labs // AI Engineering Assistant</span>
            </div>
            <span className="px-2 py-0.5 bg-[#0ACF83]/20 text-[#0ACF83] border border-[#0ACF83]/30">LangChain</span>
          </div>
          <div className="space-y-2 my-auto p-3 bg-mist border border-line rounded">
            <div className="text-muted text-[10px]">$ decode-ai query --task &quot;API Contract Decomposition&quot;</div>
            <div className="text-ink text-[11px]">&gt; Context loaded from repo knowledge base.</div>
            <div className="text-emerald-400 text-[10px]">✓ Generated 4 endpoint stubs with typed Pydantic models.</div>
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>OpenAI GPT + LangChain Pipeline</span>
            <span className="text-emerald-400">Stream 200 OK</span>
          </div>
        </div>
      );

    case "web-platform":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-muted">NEIKI Foundation // Production Web</span>
            </div>
            <span className="px-2 py-0.5 bg-accent/20 text-accent border border-accent/30">Live Platform</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 my-auto">
            {[["Supabase", "PostgreSQL Auth", "text-accent"], ["Donations", "Automated Flow", "text-ink"], ["Galleries", "Dynamic CMS", "text-accent"]].map(([title, sub, cls]) => (
              <div key={title} className="p-2.5 bg-mist border border-line text-center rounded">
                <div className={`${cls} font-bold text-sm`}>{title}</div>
                <div className={`text-[9px] mt-0.5 ${title === "Donations" ? "text-emerald-400" : "text-muted"}`}>{sub}</div>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-muted flex justify-between pt-2 border-t border-line">
            <span>Next.js 14 + Tailwind CSS</span>
            <span className="text-ink">Full Stack Shipped</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center font-mono text-xs text-muted">
          {title}
        </div>
      );
  }
}

/* ─────────────────────────────────────────────────────── */
/* Carousel                                               */
/* ─────────────────────────────────────────────────────── */
export function FeaturedWork() {
  const reduced = useReducedMotion();
  const total = projects.length;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPlaying, setIsPlaying] = useState(!reduced);
  const [progress, setProgress] = useState(0);

  // Refs for pause logic
  const sectionRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isFocused = useRef(false);
  const isOffScreen = useRef(false);
  const isTabHidden = useRef(false);
  const progressStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const regionId = useId();

  const shouldAutoplay = isPlaying && !isHovered.current && !isFocused.current && !isOffScreen.current && !isTabHidden.current && !reduced;

  const goTo = useCallback(
    (newIndex: number, dir: 1 | -1 = 1) => {
      setDirection(dir);
      setIndex(newIndex);
      setProgress(0);
      progressStartRef.current = null;
    },
    []
  );

  const goNext = useCallback(() => {
    goTo((index + 1) % total, 1);
  }, [goTo, index, total]);

  const goPrev = useCallback(() => {
    goTo((index - 1 + total) % total, -1);
  }, [goTo, index, total]);

  // Progress bar animation via RAF
  useEffect(() => {
    if (!isPlaying || reduced) return;

    const tick = (now: number) => {
      if (!shouldAutoplay) {
        progressStartRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (progressStartRef.current === null) {
        progressStartRef.current = now;
      }
      const elapsed = now - progressStartRef.current;
      const pct = Math.min(elapsed / AUTOPLAY_INTERVAL, 1);
      setProgress(pct);
      if (pct >= 1) {
        goNext();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, index, shouldAutoplay, goNext, reduced]);

  // Visibility change
  useEffect(() => {
    const onVisibility = () => {
      isTabHidden.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isOffScreen.current = !entry.isIntersecting;
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard arrow nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const p = projects[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const visualVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section
      className="py-24 lg:py-32 border-b border-line"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
            <FadeUp>
              <SectionLabel number="03">Selected Work</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
                Selected work{" "}
                <span className="text-accent">and what we build to learn.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="text-muted text-base leading-relaxed mt-4">
                Open-source projects and client work — built in the open, free to inspect.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-cat-amber transition-colors flex-shrink-0"
            >
              View all projects &amp; case studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Carousel region */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected work"
          id={regionId}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
          onFocus={() => { isFocused.current = true; }}
          onBlur={() => { isFocused.current = false; }}
        >
          {/* Slide */}
          <div
            className="relative border border-line bg-paper overflow-hidden"
            style={{ minHeight: "400px" }}
          >
            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.div
                key={p.slug}
                custom={direction}
                variants={reduced ? {} : { enter: slideVariants.enter, center: slideVariants.center, exit: slideVariants.exit }}
                initial={reduced ? false : "enter"}
                animate="center"
                exit={reduced ? undefined : "exit"}
                transition={transition}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0"
                aria-label={`Project ${index + 1} of ${total}: ${p.title}`}
                aria-roledescription="slide"
              >
                {/* Visual panel */}
                <motion.div
                  key={`visual-${p.slug}`}
                  custom={direction}
                  variants={reduced ? {} : { enter: visualVariants.enter, center: visualVariants.center, exit: visualVariants.exit }}
                  initial={reduced ? false : "enter"}
                  animate="center"
                  exit={reduced ? undefined : "exit"}
                  transition={{ ...transition, duration: 0.6 }}
                  className="lg:col-span-5 min-h-[280px] lg:min-h-[420px] relative overflow-hidden bg-mist border-b lg:border-b-0 lg:border-r border-line"
                >
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${p.accentColor} 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectVisual type={p.visualType} title={p.title} />
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: p.accentColor }}
                  />
                </motion.div>

                {/* Content panel */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-semibold"
                        style={{ color: p.accentColor }}
                      >
                        {p.number}
                      </span>
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">{p.industry}</span>
                      <span className="w-1 h-1 rounded-full bg-line" />
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">{p.category}</span>
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-ink mb-3 leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-6">{p.description}</p>

                    {/* Challenge → Outcome */}
                    <div className="space-y-2.5 mb-6 p-4 bg-mist border border-line/80 rounded">
                      <div className="flex gap-3">
                        <span className="font-mono text-[11px] text-muted/50 uppercase tracking-wider w-18 flex-shrink-0 pt-0.5">
                          Problem
                        </span>
                        <p className="font-mono text-xs text-muted">{p.challenge}</p>
                      </div>
                      <div className="flex gap-3">
                        <span
                          className="font-mono text-[11px] uppercase tracking-wider w-18 flex-shrink-0 pt-0.5"
                          style={{ color: p.accentColor, opacity: 0.9 }}
                        >
                          What we built
                        </span>
                        <p className="font-mono text-xs text-ink/90">{p.outcome}</p>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-8">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted/60 mb-2">
                        Technologies used:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <TechIcon key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2 bg-accent text-white hover:bg-cat-amber hover:text-white transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs border border-line px-4 py-2 text-ink hover:border-accent hover:text-accent transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5 text-muted" />
                      GitHub Repo
                      <ExternalLink className="w-3 h-3 text-muted" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300"
              style={{ backgroundColor: p.accentColor }}
            />
          </div>

          {/* Controls row */}
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="w-9 h-9 border border-line flex items-center justify-center text-muted hover:border-cat-indigo hover:text-cat-indigo transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                className="w-9 h-9 border border-line flex items-center justify-center text-muted hover:border-cat-indigo hover:text-cat-indigo transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Counter */}
            <span className="font-mono text-xs text-muted">
              <span className="text-ink font-semibold">{String(index + 1).padStart(2, "0")}</span>
              {" / "}
              {String(total).padStart(2, "0")}
            </span>

            {/* Progress bar */}
            {!reduced && (
              <div className="flex-1 h-px bg-line relative overflow-hidden max-w-[200px]">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-accent origin-left"
                  style={{ scaleX: progress }}
                  transition={{ duration: 0 }}
                />
              </div>
            )}

            {/* Dot nav */}
            <div className="flex items-center gap-2 ml-auto" role="tablist" aria-label="Project navigation">
              {projects.map((proj, i) => (
                <button
                  key={proj.slug}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to project: ${proj.title}`}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className="transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                  style={{
                    width: i === index ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: i === index ? p.accentColor : "#E3E8EF",
                  }}
                />
              ))}
            </div>

            {/* Play / pause toggle (not shown under reduced-motion) */}
            {!reduced && (
              <button
                onClick={() => setIsPlaying((v) => !v)}
                className="w-9 h-9 border border-line flex items-center justify-center text-muted hover:border-cat-indigo hover:text-cat-indigo transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                aria-pressed={isPlaying}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* aria-live for screen reader announcements when paused */}
          {!isPlaying && (
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              Showing project {index + 1} of {total}: {p.title}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
