import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getInsights } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Insights on AI and software delivery",
  description: "Practical, non-hype writing on where AI actually helps, how to scope automation projects, and how to avoid the common software delivery failures.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="advisory" dot className="mb-8">
              Insights
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05] mb-8">
              Practical thinking.{" "}
              <span className="text-accent">No fluff.</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Notes on AI, automation, technology strategy, and building better systems — from what we&apos;re actually doing with clients and in our own work.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {insights.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-muted">Articles coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block border border-line p-8 hover:bg-mist transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs text-accent/60 uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="font-mono text-xs text-muted/40">{article.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 font-mono text-xs text-accent group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
