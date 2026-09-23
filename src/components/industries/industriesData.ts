import {
  Rocket,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Factory,
  Building2,
  Truck,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export interface IndustryItem {
  id: string;
  num: string;
  label: string;
  tagline: string;
  color: string;
  icon: LucideIcon;
  context: string;
  challenges: string[];
  solutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "startups",
    num: "01",
    label: "Startups & SMBs",
    tagline: "Launch fast. Scale smart.",
    color: "#4338CA",
    icon: Rocket,
    context:
      "Early-stage companies and small businesses moving fast without a full in-house tech team. We act as your fractional technology partner — building MVPs, setting up automation, and helping you make the right technology bets early.",
    challenges: [
      "No technical co-founder or CTO",
      "Manual processes slowing growth",
      "Basic or no web presence",
      "Tech debt from early shortcuts",
    ],
    solutions: [
      "MVP development (web, mobile, SaaS)",
      "Automation setup (n8n, Make)",
      "Digital presence & marketing sites",
      "Technology advisory & roadmapping",
    ],
  },
  {
    id: "retail",
    num: "02",
    label: "Retail & E-commerce",
    tagline: "Sell more. Operate less.",
    color: "#0B57D0",
    icon: ShoppingBag,
    context:
      "Retail businesses and e-commerce operators who need better systems — online stores, inventory management, order automation, and customer analytics.",
    challenges: [
      "Fragmented inventory across channels",
      "Manual order processing",
      "No customer analytics",
      "Disconnected POS and online store",
    ],
    solutions: [
      "E-commerce platform development",
      "Inventory & order automation",
      "Customer analytics dashboards",
      "CRM & loyalty system integration",
    ],
  },
  {
    id: "education",
    num: "03",
    label: "Education",
    tagline: "Digitize the learning journey.",
    color: "#B45309",
    icon: GraduationCap,
    context:
      "Schools, universities, training providers, and EdTech companies building better digital learning infrastructure and student management systems.",
    challenges: [
      "Paper-based admissions and records",
      "Poor engagement tracking",
      "Disconnected platforms and tools",
      "Manual reporting for faculty and management",
    ],
    solutions: [
      "LMS development and integration",
      "Student portal and admissions systems",
      "Analytics and reporting dashboards",
      "AI-powered tutoring tools",
    ],
  },
  {
    id: "healthcare",
    num: "04",
    label: "Healthcare",
    tagline: "Secure systems. Better outcomes.",
    color: "#0F766E",
    icon: HeartPulse,
    context:
      "Clinics, hospitals, diagnostic centers, and health-tech companies that need compliant, reliable digital infrastructure without the usual IT complexity.",
    challenges: [
      "Manual patient records and scheduling",
      "Compliance and audit complexity",
      "Inefficient internal workflows",
      "No digital patient engagement",
    ],
    solutions: [
      "Patient management systems",
      "Appointment and scheduling platforms",
      "Compliance-ready document systems",
      "Clinical workflow automation",
    ],
  },
  {
    id: "finance",
    num: "05",
    label: "Finance",
    tagline: "Automate the numbers.",
    color: "#0B57D0",
    icon: TrendingUp,
    context:
      "Financial services, accounting firms, and fintech companies using better data infrastructure and automation to serve clients faster with fewer errors.",
    challenges: [
      "Manual reporting and reconciliation",
      "Data locked in spreadsheets",
      "Slow month-end close processes",
      "No real-time operational visibility",
    ],
    solutions: [
      "BI dashboards and financial reporting",
      "Data pipeline automation",
      "Document processing (invoices, contracts)",
      "ERP integration and analytics",
    ],
  },
  {
    id: "manufacturing",
    num: "06",
    label: "Manufacturing",
    tagline: "Digitize operations.",
    color: "#B45309",
    icon: Factory,
    context:
      "Manufacturers and industrial companies moving from paper-based tracking to real-time operational visibility and predictive maintenance systems.",
    challenges: [
      "No real-time production visibility",
      "Paper-based tracking and QA",
      "Maintenance gaps and unplanned downtime",
      "Manual inventory and supply chain",
    ],
    solutions: [
      "Operations dashboards and OEE monitoring",
      "Digital QA and inspection systems",
      "ERP integration",
      "Supply chain analytics",
    ],
  },
  {
    id: "realestate",
    num: "07",
    label: "Real Estate",
    tagline: "Systems for smarter property.",
    color: "#4338CA",
    icon: Building2,
    context:
      "Real estate developers, brokers, and property managers who need better client-facing platforms, internal CRM systems, and project tracking.",
    challenges: [
      "Manual property management and reporting",
      "Disconnected client and project data",
      "No digital listing or showcase platform",
      "Slow sales follow-up processes",
    ],
    solutions: [
      "Property listing and showcase portals",
      "CRM and lead management",
      "Project tracking dashboards",
      "Automated client communication",
    ],
  },
  {
    id: "logistics",
    num: "08",
    label: "Logistics",
    tagline: "Move things. Know everything.",
    color: "#1E40AF",
    icon: Truck,
    context:
      "Logistics, transport, and supply chain companies that need real-time visibility, automated dispatch, and data-driven operations.",
    challenges: [
      "No real-time fleet or shipment tracking",
      "Manual scheduling and dispatch",
      "Disconnected supplier and warehouse data",
      "Reactive rather than predictive operations",
    ],
    solutions: [
      "Fleet and operations dashboards",
      "Automated dispatch and routing",
      "Supply chain analytics",
      "Document and compliance automation",
    ],
  },
  {
    id: "government",
    num: "09",
    label: "Government",
    tagline: "Digital public services.",
    color: "#0F766E",
    icon: Landmark,
    context:
      "Government departments, municipalities, and public sector organizations modernizing citizen-facing services and internal operations.",
    challenges: [
      "Paper-heavy processes and approvals",
      "Outdated infrastructure",
      "Poor citizen digital experience",
      "Siloed department data",
    ],
    solutions: [
      "Digital citizen portals",
      "Internal process automation",
      "Infrastructure modernization",
      "Data integration and reporting",
    ],
  },
];
