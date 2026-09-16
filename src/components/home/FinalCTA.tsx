import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-40 bg-paper relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/0 left-1/0 -translate-x-1/0 -translate-y-1/0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(255, 190, 11, 0.04)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #0B57D0 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8">
          Let&apos;s build something
        </div>

        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-ink mb-6 leading-[1.05]">
          Have a problem{" "}
          <span className="text-accent">worth solving?</span>
        </h2>

        <p className="text-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Tell us what you&apos;re trying to build, automate, or transform. We&apos;ll map the right approach and give you an honest assessment — no pitch decks, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/solutions"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-line text-muted font-mono text-sm hover:border-cat-indigo hover:text-cat-indigo transition-all duration-300"
          >
            Explore our capabilities
          </Link>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-16 pt-12 border-t border-line flex flex-wrap justify-center gap-8">
          {[
            { label: "AI-first engineering" },
            { label: "Outcome-focused" },
            { label: "Global delivery" },
            { label: "Long-term partnership" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wider"
            >
              <span className="w-1 h-1 rounded-full bg-accent" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
