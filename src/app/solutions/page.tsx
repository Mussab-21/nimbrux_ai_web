import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { ServicesShowcase } from "@/components/solutions/ServicesShowcase";
import { ServiceFinder } from "@/components/solutions/ServiceFinder";
import { EngagementTimeline } from "@/components/solutions/EngagementTimeline";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Nimbrix",
  description: "Our service lines across AI and automation, software engineering, data, cloud and advisory — with what each engagement includes and what it delivers.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Premium Animated Hero with Service Constellation */}
      <SolutionsHero />

      {/* Sticky Split Storytelling Showcase */}
      <ServicesShowcase />

      {/* Interactive Starting Point Mini-Finder */}
      <ServiceFinder />

      {/* 4-Step Engagement Timeline */}
      <EngagementTimeline />

      {/* High-Impact Solutions CTA */}
      <SolutionsCTA />
    </div>
  );
}

