"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  solutions: Array<{
    pillar: string;
    color: string;
    label: string;
    href: string;
    description: string;
  }>;
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, solutions, navLinks }: MobileMenuProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0A0D14]/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0D1018] border-l border-[#1E2430] flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#1E2430]">
          <Link
            href="/"
            onClick={onClose}
            className="font-heading font-bold text-lg text-white"
          >
            Nimbrix<span className="text-[#FFBE0B]">.</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#8A95A3] hover:text-white transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-8">
          {/* Solutions */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3] mb-4">
              Solutions
            </div>
            <div className="space-y-1">
              {solutions.map((s) => (
                <Link
                  key={s.pillar}
                  href={s.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 hover:bg-[#1A1F2A] transition-colors group"
                >
                  <span
                    className="w-1 h-8 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: s.color, opacity: 0.7 }}>
                      {s.pillar}
                    </div>
                    <div className="font-heading font-semibold text-sm text-white">{s.label}</div>
                    <div className="font-mono text-[11px] text-[#8A95A3]">{s.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other links */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3] mb-4">
              Company
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-3 py-2.5 font-mono text-sm text-[#8A95A3] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer CTA */}
        <div className="px-6 py-6 border-t border-[#1E2430]">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white transition-all duration-300 group"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
}
