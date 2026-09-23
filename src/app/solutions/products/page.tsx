import { PillarPage } from "@/components/solutions/PillarPage";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products and IP — Nimbrix Labs",
  description:
    "Our own AI tooling and SaaS products in development, plus the open-source engineering work that feeds them. Early access and pilots available.",
  path: "/solutions/products",
});

export default function ProductsPage() {
  return (
    <PillarPage
      pillar="05"
      color="#1E40AF"
      label="Products & IP"
      tagline="Building what we wish existed."
      heroHeading="Technology we're building for the long game."
      heroDescription="While we deliver projects for clients, we're also building our own. Nimbrix Labs is where we develop proprietary AI platforms, SaaS tools, and automation systems — products that come out of gaps we see repeatedly in the market."
      highlightPhrase="the long game"
      services={[
        {
          name: "AI Platforms",
          description:
            "Proprietary AI document processing engines, automated data extraction, and multimodal intelligence platforms.",
          items: [
            "Nimbrix AI Document Intelligence",
            "Automated PDF & form processing",
            "Contract & invoice parsing",
            "Custom LLM fine-tuning pipelines",
            "Information extraction APIs",
            "Zero manual review workflows",
          ],
        },
        {
          name: "Automation Engine",
          description:
            "A visual workflow automation engine purpose-built for business operations teams — no-code, AI-native, and dependable.",
          items: [
            "Nimbrix Automation Engine",
            "Visual workflow canvas",
            "Cross-system database synchronization",
            "Multi-step webhook pipelines",
            "Human-in-the-loop approvals",
            "Enterprise event triggers",
          ],
        },
        {
          name: "Nimbrix BI",
          description:
            "Self-serve business intelligence for organizations without an in-house data team — connect tools, see numbers, act on insights.",
          items: [
            "Nimbrix BI platform",
            "Automated tool connectors",
            "Executive KPI dashboards",
            "Real-time revenue metrics",
            "Anomaly & trend detection",
            "Scheduled digest reports",
          ],
        },
        {
          name: "Nimbrix Labs",
          description:
            "R&D sandbox where we prototype new AI agents, open-source utilities, and early-access developer tools.",
          items: [
            "Early access & pilot programs",
            "Open-source utilities & SDKs",
            "Agentic AI design patterns",
            "Vector database optimization",
            "Developer documentation",
            "Technology feasibility research",
          ],
        },
      ]}
      included={[
        "Early access & beta software licenses",
        "Direct feedback channel with core engineers",
        "Priority feature requests & custom builds",
        "Full API keys & webhook integration access",
        "Comprehensive architectural documentation",
        "Security audit reports & sandbox environments",
        "Migration assistance & data import tooling",
        "Dedicated onboarding support",
      ]}
      caseStudies={[]}
    />
  );
}
