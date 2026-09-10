import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechIcon } from "@/components/ui/TechIcons";

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
    accentColor: "#8338EC",
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
      "Real-time webhook synchronization bot connecting Figma design changes and team reviews into Discord channels, alerting design and engineering teams to comments, version updates, and file changes.",
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
      "Intelligent engineering assistant tool built during Decode Labs internship, automating developer onboarding queries, API contract decomposition, and code summarization via LLM chains.",
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
    accentColor: "#FFBE0B",
    category: "Web & Software",
    githubUrl: "https://github.com/Mussab-21/neiki_foundation",
    visualType: "web-platform",
  },
];

function ProjectVisual({ type, title }: { type: ProjectItem["visualType"]; title: string }) {
  switch (type) {
    case "nlp":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8338EC]" />
              <span className="text-[#8A95A3]">NLP Pipeline // Entity Scorer</span>
            </div>
            <span className="px-2 py-0.5 bg-[#8338EC]/20 text-[#8338EC] border border-[#8338EC]/30">94.2% Match</span>
          </div>

          <div className="space-y-3 my-auto">
            <div className="p-3 bg-[#131824] border border-[#1E2430] rounded">
              <div className="text-[11px] text-[#8A95A3] mb-1">Extracted Entities:</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-[#8338EC]/20 text-white rounded text-[10px]">Python 3.11</span>
                <span className="px-2 py-0.5 bg-[#8338EC]/20 text-white rounded text-[10px]">PyTorch / Embeddings</span>
                <span className="px-2 py-0.5 bg-[#8338EC]/20 text-white rounded text-[10px]">FastAPI Architecture</span>
                <span className="px-2 py-0.5 bg-[#8338EC]/20 text-white rounded text-[10px]">Vector Cosine: 0.941</span>
              </div>
            </div>

            <div className="h-2 bg-[#1E2430] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8338EC] to-[#3A86FF] w-[94%]" />
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>Cosine Similarity: SBERT Embeddings</span>
            <span className="text-emerald-400">Pass: Candidate Qualified</span>
          </div>
        </div>
      );

    case "vision":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4B4B]" />
              <span className="text-[#8A95A3]">PyTorch CNN // Fashion-MNIST</span>
            </div>
            <span className="px-2 py-0.5 bg-[#FF4B4B]/20 text-[#FF4B4B] border border-[#FF4B4B]/30">Live Inference</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center my-auto">
            <div className="col-span-4 aspect-square bg-[#131824] border border-[#1E2430] flex flex-col items-center justify-center p-2 rounded">
              <div className="w-12 h-12 border border-[#FF4B4B]/40 rounded grid grid-cols-4 grid-rows-4 gap-0.5 p-1 bg-black/40">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div key={idx} className="bg-[#FF4B4B]" style={{ opacity: (idx * 17) % 100 / 100 }} />
                ))}
              </div>
              <span className="text-[9px] text-[#8A95A3] mt-2">28x28 Tensor</span>
            </div>

            <div className="col-span-8 space-y-2">
              <div>
                <div className="flex justify-between text-[10px] text-white mb-0.5">
                  <span>Sneaker</span>
                  <span className="text-[#FF4B4B]">98.6%</span>
                </div>
                <div className="h-1.5 bg-[#1E2430] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF4B4B] w-[98.6%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-[#8A95A3] mb-0.5">
                  <span>Ankle Boot</span>
                  <span>1.1%</span>
                </div>
                <div className="h-1.5 bg-[#1E2430] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8A95A3] w-[1.1%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-[#8A95A3] mb-0.5">
                  <span>Sandal</span>
                  <span>0.3%</span>
                </div>
                <div className="h-1.5 bg-[#1E2430] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8A95A3] w-[0.3%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>Streamlit UI / 10 Classes</span>
            <span className="text-white">Validation Acc: 92.4%</span>
          </div>
        </div>
      );

    case "discord":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5865F2]" />
              <span className="text-[#8A95A3]">Discord Bot // Presence Dispatcher</span>
            </div>
            <span className="px-2 py-0.5 bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30">Online</span>
          </div>

          <div className="bg-[#181D29] border border-[#2B3245] p-3.5 rounded my-auto space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-[10px] font-bold">D</span>
              <span className="text-white font-semibold text-[11px]">AttendanceBot</span>
              <span className="px-1.5 py-0.2 bg-[#5865F2] text-[9px] text-white rounded font-sans">BOT</span>
              <span className="text-[10px] text-[#8A95A3]">Today at 09:00 AM</span>
            </div>
            <div className="pl-8 text-[11px] text-emerald-400">
              ✓ User @mussab executed <code className="text-[#5865F2] bg-[#5865F2]/10 px-1 rounded">/checkin</code>
            </div>
            <div className="pl-8 text-[10px] text-[#8A95A3]">
              Session started: 09:00:15 UTC • Status: Active Shift
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>Python Asyncio Engine</span>
            <span className="text-emerald-400">SQLite Logged</span>
          </div>
        </div>
      );

    case "figma":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F24E1E]" />
              <span className="text-[#8A95A3]">Figma Webhook → Discord Bridge</span>
            </div>
            <span className="px-2 py-0.5 bg-[#F24E1E]/20 text-[#F24E1E] border border-[#F24E1E]/30">Webhook Sync</span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 bg-[#131824] border border-[#1E2430] rounded">
              <div className="text-[#F24E1E] text-[10px] mb-1 font-semibold">FIGMA EVENT</div>
              <div className="text-white text-[11px] truncate">Design Token Updated</div>
              <div className="text-[9px] text-[#8A95A3] mt-1">Node: #Frame-104:18</div>
            </div>
            <div className="p-3 bg-[#131824] border border-[#1E2430] rounded">
              <div className="text-[#5865F2] text-[10px] mb-1 font-semibold">DISCORD EMBED</div>
              <div className="text-white text-[11px] truncate">#design-feed Broadcast</div>
              <div className="text-[9px] text-[#8A95A3] mt-1">Deep Link Dispatched</div>
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>Figma REST API v2</span>
            <span className="text-white">Realtime Broadcast</span>
          </div>
        </div>
      );

    case "ai-assistant":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ACF83]" />
              <span className="text-[#8A95A3]">Decode Labs // AI Engineering Assistant</span>
            </div>
            <span className="px-2 py-0.5 bg-[#0ACF83]/20 text-[#0ACF83] border border-[#0ACF83]/30">LangChain</span>
          </div>

          <div className="space-y-2 my-auto p-3 bg-[#131824] border border-[#1E2430] rounded">
            <div className="text-[#8A95A3] text-[10px]">$ decode-ai query --task &quot;API Contract Decomposition&quot;</div>
            <div className="text-white text-[11px]">
              &gt; Context loaded from repo knowledge base.
            </div>
            <div className="text-emerald-400 text-[10px]">
              ✓ Generated 4 endpoint stubs with typed Pydantic models.
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>OpenAI GPT + LangChain Pipeline</span>
            <span className="text-emerald-400">Stream 200 OK</span>
          </div>
        </div>
      );

    case "web-platform":
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-[#1E2430] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBE0B]" />
              <span className="text-[#8A95A3]">NEIKI Foundation // Production Web</span>
            </div>
            <span className="px-2 py-0.5 bg-[#FFBE0B]/20 text-[#FFBE0B] border border-[#FFBE0B]/30">Live Platform</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-auto">
            <div className="p-2.5 bg-[#131824] border border-[#1E2430] text-center rounded">
              <div className="text-[#FFBE0B] font-bold text-sm">Supabase</div>
              <div className="text-[9px] text-[#8A95A3] mt-0.5">PostgreSQL Auth</div>
            </div>
            <div className="p-2.5 bg-[#131824] border border-[#1E2430] text-center rounded">
              <div className="text-white font-bold text-sm">Donations</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">Automated Flow</div>
            </div>
            <div className="p-2.5 bg-[#131824] border border-[#1E2430] text-center rounded">
              <div className="text-[#FFBE0B] font-bold text-sm">Galleries</div>
              <div className="text-[9px] text-[#8A95A3] mt-0.5">Dynamic CMS</div>
            </div>
          </div>

          <div className="text-[10px] text-[#8A95A3] flex justify-between pt-2 border-t border-[#1E2430]">
            <span>Next.js 14 + Tailwind CSS</span>
            <span className="text-white">Full Stack Shipped</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#8A95A3]">
          {title}
        </div>
      );
  }
}

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1E2430]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <SectionLabel number="03">Selected Work</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Real projects,{" "}
              <span className="text-[#FFBE0B]">proven implementations.</span>
            </h2>
            <p className="text-[#8A95A3] text-base leading-relaxed mt-4">
              A curated selection of shipped systems, AI pipelines, and community automation tools built and open-sourced by our team.
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-sm text-[#FFBE0B] hover:text-[#FB5607] transition-colors flex-shrink-0"
          >
            View all projects &amp; case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="group block border border-[#1E2430] hover:border-[#2B3245] transition-all duration-300 bg-[#0A0D14] overflow-hidden"
              style={{
                "--accent": p.accentColor,
              } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual / Screenshot / Mockup panel */}
                <div
                  className={`lg:col-span-6 min-h-[260px] lg:min-h-[320px] relative overflow-hidden bg-[#0D1018] border-b lg:border-b-0 border-[#1E2430] ${
                    i % 2 === 1 ? "lg:order-2 lg:border-l border-[#1E2430]" : "lg:border-r border-[#1E2430]"
                  }`}
                >
                  {/* Subtle background mesh */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${p.accentColor} 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                    aria-hidden
                  />

                  {/* Themed project visual graphic */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectVisual type={p.visualType} title={p.title} />
                  </div>

                  {/* Color overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: p.accentColor }}
                  />
                </div>

                {/* Content panel */}
                <div
                  className={`lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-semibold"
                        style={{ color: p.accentColor }}
                      >
                        {p.number}
                      </span>
                      <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                        {p.industry}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#1E2430]" />
                      <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-3 group-hover:text-white transition-colors leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-[#8A95A3] text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>

                    {/* Challenge → Outcome */}
                    <div className="space-y-2.5 mb-6 p-4 bg-[#0D1018] border border-[#1E2430]/80 rounded">
                      <div className="flex gap-3">
                        <span className="font-mono text-[11px] text-[#8A95A3]/50 uppercase tracking-wider w-18 flex-shrink-0 pt-0.5">
                          Problem
                        </span>
                        <p className="font-mono text-xs text-[#8A95A3]">{p.challenge}</p>
                      </div>
                      <div className="flex gap-3">
                        <span
                          className="font-mono text-[11px] uppercase tracking-wider w-18 flex-shrink-0 pt-0.5"
                          style={{ color: p.accentColor, opacity: 0.9 }}
                        >
                          Result
                        </span>
                        <p className="font-mono text-xs text-white/90">{p.outcome}</p>
                      </div>
                    </div>

                    {/* Tech stack with logos */}
                    <div className="mb-8">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#8A95A3]/60 mb-2">
                        Technologies Used:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <TechIcon key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: View Case Study & GitHub Repo */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1E2430]">
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2 bg-[#FFBE0B] text-[#0A0D14] hover:bg-[#FB5607] hover:text-white transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs border border-[#1E2430] px-4 py-2 text-white hover:border-[#FFBE0B] hover:text-[#FFBE0B] transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5 text-[#8A95A3]" />
                      GitHub Repo
                      <ExternalLink className="w-3 h-3 text-[#8A95A3]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: p.accentColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
