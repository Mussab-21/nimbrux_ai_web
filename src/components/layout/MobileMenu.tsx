"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-paper border-l border-line flex flex-col shadow-elev-3"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[64px] border-b border-line bg-mist/50">
              <Link
                href="/"
                onClick={onClose}
                className="font-heading font-bold text-lg text-ink flex items-center"
              >
                <span>Nimbrix</span>
                <span className="text-accent ml-0.5">.</span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-ink transition-colors rounded-sm"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable body with staggered items */}
            <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-7">
              {/* Our Services */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted font-semibold mb-3">
                  Our Services
                </div>
                <div className="space-y-1.5">
                  {solutions.map((s, idx) => (
                    <motion.div
                      key={s.pillar}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={s.href}
                        onClick={onClose}
                        className="flex items-center gap-3 p-2.5 rounded hover:bg-mist transition-colors group"
                      >
                        <span
                          className="w-1 h-7 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-semibold text-sm text-ink group-hover:text-accent transition-colors">
                              {s.label}
                            </span>
                            <span
                              className="font-mono text-[10px] font-semibold"
                              style={{ color: s.color }}
                            >
                              {s.pillar}
                            </span>
                          </div>
                          <div className="font-mono text-[11px] text-muted truncate">
                            {s.description}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted font-semibold mb-3">
                  Company
                </div>
                <div className="space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.28 + idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block px-3 py-2 font-mono text-sm text-ink hover:text-accent hover:bg-mist rounded transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-5 border-t border-line bg-mist/40">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-accent to-cat-indigo text-white font-mono text-sm font-semibold hover:opacity-95 active:scale-[0.98] transition-all shadow-elev-1 rounded-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
