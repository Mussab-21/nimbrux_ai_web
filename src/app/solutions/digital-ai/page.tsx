import { PillarPage } from "@/components/solutions/PillarPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital & AI Solutions",
  description:
    "Custom AI agents, LLM integrations, enterprise software, data pipelines, and web/mobile products. Nimbrix Digital & AI pillar.",
};

export default function DigitalAIPage() {
  return (
    <PillarPage
      pillar="01"
      color="#8338EC"
      label="Digital & AI"
      tagline="Automate. Augment. Accelerate."
      heroHeading="Intelligent systems that work inside your business."
      heroDescription="We build the AI, software, and data infrastructure that lets your organization work faster, smarter, and with less manual effort — without disrupting what already works."
      services={[
        {
          name: "AI & Automation",
          description:
            "Custom LLM integrations, document intelligence, workflow automation, and AI agents that eliminate repetitive work and augment your team's capabilities.",
          items: [
            "AI agents & autonomous workflows",
            "RAG systems & document intelligence",
            "LLM integrations (GPT, Claude, Gemini)",
            "n8n & Make workflow automation",
            "AI chatbots & copilots",
            "AI-powered business process automation",
          ],
        },
        {
          name: "Enterprise Software",
          description:
            "Custom web applications, CRM/ERP systems, business portals, and workflow tools designed for your specific operations — not off-the-shelf templates.",
          items: [
            "Custom CRM & ERP systems",
            "Business process portals",
            "HR & workflow management systems",
            "API integrations & middleware",
            "Legacy system modernization",
            "Internal tools & dashboards",
          ],
        },
        {
          name: "Data & Analytics",
          description:
            "Data pipelines, BI dashboards, and forecasting systems that turn your raw data into decisions — not just reports.",
          items: [
            "BI dashboards (Power BI, custom)",
            "Data pipelines & warehouses",
            "Real-time reporting systems",
            "Predictive analytics & forecasting",
            "KPI & operations dashboards",
            "Data visualization",
          ],
        },
        {
          name: "Web & Mobile",
          description:
            "Scalable web applications, SaaS platforms, customer portals, and mobile apps built on modern stacks with performance and maintainability first.",
          items: [
            "Corporate & marketing websites",
            "SaaS platforms & web apps",
            "Customer & client portals",
            "Mobile applications",
            "API development",
            "Third-party integrations",
          ],
        },
      ]}
      included={[
        "Requirements discovery & scoping",
        "Technical architecture design",
        "UI/UX design (for digital products)",
        "Agile development in sprints",
        "Code review & quality standards",
        "Testing & QA",
        "Deployment & launch support",
        "Documentation",
        "30-day post-launch support",
        "Source code ownership",
      ]}
      caseStudies={[
        {
          slug: "neki-sub-say",
          title: "NEIKI Sub Say Foundation",
          description:
            "End-to-end full-stack web platform with Supabase-powered donation flow and custom impact galleries.",
        },
        {
          slug: "atc-corporate",
          title: "ATC Corporate",
          description:
            "Complete digital presence redesign using a custom design system for a leading engineering firm.",
        },
      ]}
    />
  );
}
