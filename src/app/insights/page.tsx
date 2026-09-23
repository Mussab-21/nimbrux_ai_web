import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getInsights } from "@/lib/content";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { InsightsArticlesGrid } from "@/components/insights/InsightsArticlesGrid";

export const metadata: Metadata = buildMetadata({
  title: "Insights on AI and software delivery",
  description:
    "Practical, non-hype writing on where AI actually helps, how to scope automation projects, and how to avoid the common software delivery failures.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero with Article Stack Visual */}
      <InsightsHero />

      {/* Dispatches & Essays Grid */}
      <InsightsArticlesGrid insights={insights} />
    </div>
  );
}
