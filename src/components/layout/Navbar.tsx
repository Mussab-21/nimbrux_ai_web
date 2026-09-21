"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  ArrowRight,
  Sparkles,
  Shield,
  Activity,
  Compass,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const services = [
  {
    pillar: "01",
    color: "#4338CA",
    label: "Digital & AI",
    href: "/solutions/digital-ai",
    description: "AI agents, LLM automation, software & data pipelines",
    icon: Sparkles,
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
  },
  {
    pillar: "02",
    color: "#0B57D0",
    label: "Cloud & Security",
    href: "/solutions/cloud-security",
    description: "Cloud architecture, DevOps & enterprise cybersecurity",
    icon: Shield,
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
  },
  {
    pillar: "03",
    color: "#B45309",
    label: "Managed Technology",
    href: "/solutions/managed-technology",
    description: "24/7 ongoing systems operations, maintenance & support",
    icon: Activity,
    services: ["App Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
  },
  {
    pillar: "04",
    color: "#0F766E",
    label: "Consulting & Advisory",
    href: "/solutions/consulting-advisory",
    description: "Strategic AI roadmaps, technical audits & architecture",
    icon: Compass,
    services: ["AI Advisory", "IT Strategy", "Tech Audits", "Transformation"],
  },
  {
    pillar: "05",
    color: "#1E40AF",
    label: "Products & IP",
    href: "/solutions/products",
    description: "Proprietary SaaS platforms, internal tools & lab ventures",
    icon: Layers,
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Labs"],
  },
];

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();

  const megaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll progress for the thin top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isOver = window.scrollY > 24;
          setScrolled((prev) => (prev !== isOver ? isOver : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setHoveredNav(null);
  }, [pathname]);

  // Escape key & outside click listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    const handlePointerDown = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const openMega = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    timerRef.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const isScrolledOrOpen = scrolled || megaOpen;
  const isServicesActive = pathname.startsWith("/solutions");

  return (
    <>
      {/* Brand gradient scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-cat-indigo via-accent to-cat-teal"
        style={{ scaleX }}
        aria-hidden
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolledOrOpen
            ? "bg-paper/95 border-b border-line shadow-elev-1"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300",
            scrolled ? "h-[62px]" : "h-[72px]"
          )}
        >
          {/* Logo with entrance & hover accent dot */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="font-heading font-bold text-xl tracking-tight text-ink flex items-center group flex-shrink-0"
              aria-label="Nimbrix homepage"
            >
              <span>Nimbrix</span>
              <span className="text-accent ml-0.5 inline-block transition-transform duration-300 group-hover:scale-150 group-hover:translate-x-0.5">
                .
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 relative"
            role="navigation"
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* "Our Services" mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredNav("services");
                openMega();
              }}
              onMouseLeave={() => {
                closeMega();
              }}
              ref={megaRef}
            >
              <button
                className={cn(
                  "relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-sm transition-colors rounded-sm cursor-pointer",
                  isServicesActive || megaOpen ? "text-accent font-medium" : "text-muted hover:text-ink"
                )}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={() => setMegaOpen((v) => !v)}
              >
                {hoveredNav === "services" && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-mist border border-line/80 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                Our Services
                <motion.span
                  animate={{ rotate: megaOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
                {isServicesActive && !hoveredNav && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                  />
                )}
              </button>

              {/* Mega menu panel */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    key="mega"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "top center" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-paper border border-line shadow-elev-3 overflow-hidden rounded-md"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    role="menu"
                  >
                    {/* Brand gradient top accent bar */}
                    <div className="h-[2px] bg-gradient-to-r from-cat-indigo via-accent to-cat-teal" />

                    {/* Top bar */}
                    <div className="px-6 py-3.5 border-b border-line bg-mist/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-ink uppercase tracking-widest">
                          Our Services
                        </span>
                        <span className="font-mono text-[11px] text-muted">
                          — 5 integrated engineering pillars
                        </span>
                      </div>
                      <Link
                        href="/solutions"
                        className="font-mono text-xs text-accent hover:text-cat-amber transition-colors flex items-center gap-1 font-medium"
                      >
                        View all services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Pillar grid */}
                    <div className="grid grid-cols-5 divide-x divide-line p-1">
                      {services.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                          <motion.div
                            key={s.pillar}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: idx * 0.04 }}
                          >
                            <Link
                              href={s.href}
                              role="menuitem"
                              className="group p-4 hover:bg-mist/70 transition-all flex flex-col h-full gap-2 rounded-sm"
                            >
                              <div className="flex items-center justify-between">
                                <div
                                  className="w-7 h-7 rounded flex items-center justify-center transition-transform group-hover:scale-110"
                                  style={{ backgroundColor: `${s.color}12`, color: s.color }}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span
                                  className="font-mono text-[10px] uppercase tracking-wider font-semibold opacity-60"
                                  style={{ color: s.color }}
                                >
                                  {s.pillar}
                                </span>
                              </div>

                              <div className="flex items-center justify-between mt-1">
                                <span className="font-heading font-semibold text-sm text-ink group-hover:text-accent transition-colors leading-tight">
                                  {s.label}
                                </span>
                                <ArrowRight
                                  className="w-3 h-3 text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0"
                                  style={{ color: s.color }}
                                />
                              </div>

                              <span className="font-mono text-[11px] text-muted leading-snug line-clamp-2">
                                {s.description}
                              </span>

                              <ul className="space-y-1 mt-auto pt-2 border-t border-line/60">
                                {s.services.map((svc) => (
                                  <li
                                    key={svc}
                                    className="font-mono text-[10px] text-muted group-hover:text-ink/80 flex items-center gap-1.5 transition-colors"
                                  >
                                    <span
                                      className="w-1 h-1 rounded-full flex-shrink-0"
                                      style={{ backgroundColor: s.color, opacity: 0.7 }}
                                    />
                                    {svc}
                                  </li>
                                ))}
                              </ul>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="px-6 py-3 border-t border-line bg-mist/60 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted">
                        Not sure where to start?
                      </span>
                      <Link
                        href="/contact"
                        className="font-mono text-xs text-accent hover:text-cat-amber transition-colors flex items-center gap-1.5 font-medium"
                      >
                        Talk to us → we&apos;ll map the right solution
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav links with sliding hover pill & active indicator */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredNav === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 font-mono text-sm transition-colors rounded-sm",
                    isActive ? "text-accent font-medium" : "text-muted hover:text-ink"
                  )}
                >
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-mist border border-line/80 rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  {link.label}
                  {isActive && !isHovered && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Start a Project CTA Button + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold shadow-elev-1 hover:shadow-elev-2 active:scale-[0.97] transition-all duration-200 overflow-hidden rounded-sm"
            >
              {/* Shine sweep effect */}
              <span
                className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 -skew-x-12 -translate-x-16 group-hover:translate-x-48 transition-transform duration-700 ease-in-out pointer-events-none"
                aria-hidden
              />
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              className="lg:hidden p-2 text-muted hover:text-ink transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        solutions={services}
        navLinks={navLinks}
      />
    </>
  );
}
