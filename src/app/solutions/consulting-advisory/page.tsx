import { PillarPage } from "@/components/solutions/PillarPage";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technology consulting and advisory",
  description: "AI advisory, technology audits and IT strategy for leaders deciding what to build, what to buy and what to leave alone. Honest assessments, not decks.",
  path: "/solutions/consulting-advisory",
});

export default function ConsultingAdvisoryPage() {
  return (
    <PillarPage
      pillar="04"
      color="#0F766E"
      label="Consulting & Advisory"
      tagline="Strategy before execution."
      heroHeading="Know exactly where technology will actually help you."
      heroDescription="We help organizations cut through the AI hype, the vendor noise, and the generic advice — to identify the technology investments that will genuinely move the needle on their business."
      services={[
        {
          name: "AI Advisory",
          description:
            "A structured engagement to identify where AI will actually benefit your business — not just where it sounds impressive. ROI-focused, honest, and implementation-ready.",
          items: [
            "AI readiness assessment",
            "Use-case identification & prioritization",
            "AI opportunity mapping",
            "ROI modelling",
            "AI vendor & tool selection",
            "Implementation roadmap",
          ],
        },
        {
          name: "IT Strategy",
          description:
            "A technology roadmap aligned to your business objectives — covering what to build, what to buy, what to retire, and in what order.",
          items: [
            "IT landscape assessment",
            "Technology roadmap",
            "Build vs buy analysis",
            "Architecture recommendations",
            "Budget & resource planning",
            "Vendor selection guidance",
          ],
        },
        {
          name: "Technology Audits",
          description:
            "Objective assessment of your current systems — identifying technical debt, security gaps, performance issues, and modernization priorities.",
          items: [
            "Codebase & architecture review",
            "Infrastructure audit",
            "Cloud cost audit",
            "Security posture assessment",
            "Technology cost analysis",
            "Executive audit report",
          ],
        },
        {
          name: "Digital Transformation",
          description:
            "End-to-end transformation planning — from process redesign and automation strategy to organizational change and capability roadmaps.",
          items: [
            "Process discovery & mapping",
            "Digital maturity assessment",
            "Automation opportunity analysis",
            "Change management planning",
            "Phased transformation roadmap",
            "Success metrics & KPIs",
          ],
        },
      ]}
      included={[
        "Structured discovery interviews",
        "Process & system documentation review",
        "Stakeholder workshops",
        "Findings & analysis report",
        "Recommendations with rationale",
        "Prioritized action plan",
        "Executive summary",
        "Q&A session",
        "60-day follow-up check-in",
      ]}
      caseStudies={[]}
    />
  );
}
