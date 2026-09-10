import { PillarPage } from "@/components/solutions/PillarPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Technology Services",
  description:
    "Application management, managed cloud operations, IT helpdesk, and infrastructure monitoring. Nimbrix Managed Technology pillar.",
};

export default function ManagedTechnologyPage() {
  return (
    <PillarPage
      pillar="03"
      color="#FB5607"
      label="Managed Technology"
      tagline="We run it, so you don't have to."
      heroHeading="Your technology, reliably managed."
      heroDescription="Once we build it, we can keep it running. Application management, cloud operations, and IT support — SLA-based, predictable, and treated like it's our own infrastructure."
      services={[
        {
          name: "Application Management",
          description:
            "Ongoing maintenance, monitoring, updates, and support for web applications, APIs, and software products we've built or inherited.",
          items: [
            "Application health monitoring",
            "Bug fixes & patches",
            "Feature enhancements",
            "Performance optimization",
            "Dependency & security updates",
            "SLA-based response times",
          ],
        },
        {
          name: "Managed Cloud",
          description:
            "Proactive management of your cloud environment — cost optimization, uptime, backups, and scaling — so you're never caught off-guard.",
          items: [
            "Cloud infrastructure monitoring",
            "Cost optimization & rightsizing",
            "Backup management",
            "Scaling & capacity planning",
            "Incident response",
            "Monthly reporting",
          ],
        },
        {
          name: "IT Helpdesk",
          description:
            "First and second-line IT support for your team — device management, access requests, software issues, and general technical troubleshooting.",
          items: [
            "Remote technical support",
            "Software & access management",
            "Device configuration",
            "Onboarding/offboarding support",
            "Ticketing & escalation",
            "SLA-based response",
          ],
        },
        {
          name: "Infrastructure Monitoring",
          description:
            "Proactive monitoring of servers, networks, and services with alerting and reporting — so issues get caught before they become outages.",
          items: [
            "Server & network monitoring",
            "Uptime & availability tracking",
            "Alert management",
            "Performance dashboards",
            "Incident reporting",
            "Escalation protocols",
          ],
        },
      ]}
      included={[
        "Initial environment audit",
        "SLA agreement & response tiers",
        "Monitoring tool setup",
        "Escalation playbook",
        "Monthly health reports",
        "Scheduled maintenance windows",
        "On-demand support hours",
        "Quarterly reviews",
      ]}
      caseStudies={[]}
    />
  );
}
