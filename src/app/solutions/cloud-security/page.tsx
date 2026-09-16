import { PillarPage } from "@/components/solutions/PillarPage";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cloud and security services",
  description: "Cloud architecture, DevOps pipelines, infrastructure and security hardening for teams that need reliable, cost-controlled systems that scale properly.",
  path: "/solutions/cloud-security",
});

export default function CloudSecurityPage() {
  return (
    <PillarPage
      pillar="02"
      color="#0B57D0"
      label="Cloud & Security"
      tagline="Build it right. Keep it safe."
      heroHeading="Infrastructure that scales and stays secure."
      heroDescription="From cloud architecture and DevOps pipelines to enterprise networks and cybersecurity — we design infrastructure that performs, scales, and protects your business."
      services={[
        {
          name: "Cloud & DevOps",
          description:
            "Cloud architecture design, migration, and ongoing optimization across AWS, Azure, and GCP — with CI/CD pipelines and containerization as standard.",
          items: [
            "AWS / Azure / GCP architecture",
            "Cloud migration & lift-and-shift",
            "CI/CD pipeline setup",
            "Docker & Kubernetes",
            "Infrastructure as Code (Terraform)",
            "Cloud cost optimization",
          ],
        },
        {
          name: "Enterprise Networks",
          description:
            "LAN/WAN design, SD-WAN, Wi-Fi infrastructure, and network modernization for offices, campuses, and multi-site organizations.",
          items: [
            "LAN / WAN design & implementation",
            "SD-WAN",
            "Enterprise Wi-Fi",
            "Network monitoring & management",
            "Switching & routing",
            "Structured cabling",
          ],
        },
        {
          name: "Cybersecurity",
          description:
            "Security posture assessments, firewall deployment, IAM, endpoint protection, and Zero Trust architecture for organizations that take risk seriously.",
          items: [
            "Security posture assessment",
            "Firewall deployment & configuration",
            "IAM & MFA implementation",
            "Zero Trust architecture",
            "Endpoint security",
            "Vulnerability assessment",
          ],
        },
        {
          name: "Infrastructure",
          description:
            "Server deployment, virtualization, storage, and data center design for organizations building or modernizing their physical and hybrid infrastructure.",
          items: [
            "Server deployment & virtualization",
            "Storage solutions",
            "Data center design",
            "Backup & disaster recovery",
            "Hybrid infrastructure",
            "Hardware procurement advisory",
          ],
        },
      ]}
      included={[
        "Infrastructure discovery & audit",
        "Architecture design document",
        "Vendor & technology recommendations",
        "Phased implementation plan",
        "Security hardening checklist",
        "Deployment & configuration",
        "Testing & validation",
        "Runbook & documentation",
        "Handoff & knowledge transfer",
      ]}
      caseStudies={[]}
    />
  );
}
