import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getCaseStudies } from "@/lib/content";
import { WorkHero } from "@/components/work/WorkHero";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";

export const metadata: Metadata = buildMetadata({
  title: "Client work and case studies",
  description:
    "Shipped client projects with the problem, the approach and the measured outcome for each — plus open-source engineering work from the Nimbrix lab.",
  path: "/work",
});

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero with Results Board Visual */}
      <WorkHero caseStudies={caseStudies} />

      {/* Responsive Portfolio Grid */}
      <PortfolioGrid caseStudies={caseStudies} />
    </div>
  );
}
