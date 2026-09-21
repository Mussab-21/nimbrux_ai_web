import {
  Sparkles,
  Shield,
  Activity,
  Compass,
  Layers,
  LucideIcon,
} from "lucide-react";

export interface ServicePillar {
  pillar: string;
  id: string;
  color: string;
  label: string;
  href: string;
  tagline: string;
  description: string;
  services: string[];
  bullets: string[];
  tech: string[];
  icon: LucideIcon;
}

export const servicePillars: ServicePillar[] = [
  {
    pillar: "01",
    id: "digital-ai",
    color: "#4338CA",
    label: "Digital & AI",
    href: "/solutions/digital-ai",
    tagline: "Automate. Augment. Accelerate.",
    description:
      "Custom AI agents, LLM integrations, enterprise software, data pipelines, and web/mobile products built around your core workflows.",
    services: ["AI & Automation", "Enterprise Software", "Data & Analytics", "Web & Mobile"],
    bullets: [
      "Custom LLM & agent workflow automation",
      "Full-stack web, mobile and enterprise software",
      "High-throughput data pipelines & real-time analytics",
      "Production deployment with monitoring & QA",
    ],
    tech: ["Python", "FastAPI", "Next.js", "PyTorch", "LangChain", "n8n"],
    icon: Sparkles,
  },
  {
    pillar: "02",
    id: "cloud-security",
    color: "#0B57D0",
    label: "Cloud & Security",
    href: "/solutions/cloud-security",
    tagline: "Build it right. Keep it safe.",
    description:
      "Cloud architecture, DevOps pipelines, enterprise networking, cybersecurity, and infrastructure design that stands up to audits.",
    services: ["Cloud & DevOps", "Enterprise Networks", "Cybersecurity", "Infrastructure"],
    bullets: [
      "Zero-trust cloud architecture & identity access (IAM)",
      "Automated CI/CD deployment pipelines & staging environments",
      "Vulnerability assessment, secrets vaulting & compliance",
      "Multi-region failover, backup & disaster recovery",
    ],
    tech: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    icon: Shield,
  },
  {
    pillar: "03",
    id: "managed-technology",
    color: "#B45309",
    label: "Managed Technology",
    href: "/solutions/managed-technology",
    tagline: "We run it, so you don't have to.",
    description:
      "24/7 ongoing systems operations, maintenance, database management, and active infrastructure monitoring so your team stays focused.",
    services: ["Application Management", "Managed Cloud", "IT Helpdesk", "Monitoring"],
    bullets: [
      "24/7 telemetry, latency & uptime monitoring",
      "SLA-backed incident triage, response & resolution",
      "Proactive dependency updates, security patches & backups",
      "Database tuning, indexing & operational cost audits",
    ],
    tech: ["Datadog", "Grafana", "Prometheus", "PagerDuty", "Linux"],
    icon: Activity,
  },
  {
    pillar: "04",
    id: "consulting-advisory",
    color: "#0F766E",
    label: "Consulting & Advisory",
    href: "/solutions/consulting-advisory",
    tagline: "Strategy before execution.",
    description:
      "Independent technical audits, AI strategy roadmaps, and fractional engineering leadership before you commit capital to build.",
    services: ["AI Advisory", "IT Strategy", "Technology Audits", "Digital Transformation"],
    bullets: [
      "Technical audits of codebases, databases & system design",
      "Generative AI feasibility assessment & ROI calculation",
      "Legacy migration roadmap with phased risk management",
      "Fractional CTO advisory for growing leadership teams",
    ],
    tech: ["System Design", "Roadmaps", "Compliance", "Architecture"],
    icon: Compass,
  },
  {
    pillar: "05",
    id: "products",
    color: "#1E40AF",
    label: "Products & IP",
    href: "/solutions/products",
    tagline: "Building what we wish existed.",
    description:
      "Proprietary SaaS platforms, document intelligence systems, internal automation tools, and research from Nimbrix Labs.",
    services: ["AI Platforms", "SaaS Products", "Automation Tools", "Nimbrix Labs"],
    bullets: [
      "Turnkey document intelligence & parsing engines",
      "Team attendance, scheduling & notification bots",
      "Developer APIs, webhooks & SDK integrations",
      "Emerging AI research prototypes from Nimbrix Labs",
    ],
    tech: ["TypeScript", "Vector DBs", "Redis", "OpenAI", "Webhooks"],
    icon: Layers,
  },
];
