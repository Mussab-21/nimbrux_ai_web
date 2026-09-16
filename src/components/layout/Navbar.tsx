"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const solutions = [
  {
    pillar: "01",
    color: "#4338CA",
    label: "Digital & AI",
    href: "/solutions/digital-ai",
    description: "AI, automation, software & data",
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
  },
  {
    pillar: "02",
    color: "#0B57D0",
    label: "Cloud & Security",
    href: "/solutions/cloud-security",
    description: "Cloud, infrastructure & cybersecurity",
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
  },
  {
    pillar: "03",
    color: "#B45309",
    label: "Managed Technology",
    href: "/solutions/managed-technology",
    description: "Ongoing operations & support",
    services: ["Application Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
  },
  {
    pillar: "04",
    color: "#0F766E",
    label: "Consulting & Advisory",
    href: "/solutions/consulting-advisory",
    description: "Strategy, audits & AI advisory",
    services: ["AI Advisory", "IT Strategy", "Technology Audits", "Digital Transformation"],
  },
  {
    pillar: "05",
    color: "#1E40AF",
    label: "Products & IP",
    href: "/solutions/products",
    description: "SaaS products & proprietary tech",
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Nimbrix Labs"],
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
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const openMega = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    timerRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || megaOpen
            ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E3E8EF]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-tight text-ink hover:opacity-80 transition-opacity flex-shrink-0"
          >
            Nimbrix<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {/* Solutions mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              ref={megaRef}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 font-mono text-sm transition-colors rounded-sm",
                  megaOpen ? "text-white" : "text-[#4B5768] hover:text-white"
                )}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    megaOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Mega menu panel */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-[#F4F6F9] border border-[#E3E8EF] shadow-2xl transition-all duration-200 origin-top",
                  megaOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                )}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                role="menu"
              >
                {/* Top bar */}
                <div className="px-8 py-4 border-b border-line flex items-center justify-between">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">Our Solutions</span>
                  <Link
                    href="/solutions"
                    className="font-mono text-xs text-accent hover:text-cat-amber transition-colors flex items-center gap-1"
                  >
                    View all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Pillar grid */}
                <div className="grid grid-cols-5 divide-x divide-line p-2">
                  {solutions.map((s) => (
                    <Link
                      key={s.pillar}
                      href={s.href}
                      role="menuitem"
                      className="group p-5 hover:bg-mist transition-colors flex flex-col gap-3"
                    >
                      {/* Pillar number */}
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest opacity-50"
                        style={{ color: s.color }}
                      >
                        {s.pillar}
                      </span>

                      {/* Label */}
                      <span
                        className="font-heading font-semibold text-sm text-ink group-hover:opacity-90 transition-opacity leading-tight"
                      >
                        {s.label}
                      </span>

                      {/* Description */}
                      <span className="font-mono text-[11px] text-muted leading-snug">
                        {s.description}
                      </span>

                      {/* Sub-services */}
                      <ul className="space-y-1.5 mt-1">
                        {s.services.map((svc) => (
                          <li
                            key={svc}
                            className="font-mono text-[11px] text-muted group-hover:text-muted/80 flex items-center gap-1.5"
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: s.color, opacity: 0.6 }}
                            />
                            {svc}
                          </li>
                        ))}
                      </ul>

                      {/* Bottom accent line */}
                      <div
                        className="h-px mt-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: s.color }}
                      />
                    </Link>
                  ))}
                </div>

                {/* Bottom CTA row */}
                <div className="px-8 py-4 border-t border-line bg-paper flex items-center gap-6">
                  <span className="font-mono text-xs text-muted">
                    Not sure where to start?
                  </span>
                  <Link
                    href="/contact"
                    className="font-mono text-xs text-accent hover:text-cat-amber transition-colors flex items-center gap-1"
                  >
                    Talk to us → we&apos;ll map the right solution
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 font-mono text-sm transition-colors rounded-sm",
                  pathname === link.href
                    ? "text-white"
                    : "text-[#4B5768] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300 group"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        solutions={solutions}
        navLinks={navLinks}
      />
    </>
  );
}
