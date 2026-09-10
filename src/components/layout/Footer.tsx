import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const footerSolutions = [
  { label: "Digital & AI", href: "/solutions/digital-ai" },
  { label: "Cloud & Security", href: "/solutions/cloud-security" },
  { label: "Managed Technology", href: "/solutions/managed-technology" },
  { label: "Consulting & Advisory", href: "/solutions/consulting-advisory" },
  { label: "Products & IP", href: "/solutions/products" },
];

const footerServices = [
  { label: "AI & Automation", href: "/solutions/digital-ai" },
  { label: "Enterprise Software", href: "/solutions/digital-ai" },
  { label: "Data & Analytics", href: "/solutions/digital-ai" },
  { label: "Cloud & DevOps", href: "/solutions/cloud-security" },
  { label: "Cybersecurity", href: "/solutions/cloud-security" },
  { label: "AI Advisory", href: "/solutions/consulting-advisory" },
];

const footerIndustries = [
  { label: "Startups & SMBs", href: "/industries" },
  { label: "Retail & E-commerce", href: "/industries" },
  { label: "Education", href: "/industries" },
  { label: "Healthcare", href: "/industries" },
  { label: "Finance", href: "/industries" },
  { label: "Manufacturing", href: "/industries" },
];

const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/about#careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1E2430] bg-[#070A0F]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <span className="font-heading font-bold text-xl text-white">
              Nimbrix<span className="text-[#FFBE0B]">.</span>
            </span>
          </Link>
          <p className="font-mono text-sm text-[#8A95A3] leading-relaxed mb-6 max-w-xs">
            AI-first technology transformation partner. We design, build and operate intelligent systems.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#8A95A3] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#FFBE0B]" />
            Pakistan · Global Delivery
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 border border-[#1E2430] text-[#8A95A3] hover:border-[#FFBE0B] hover:text-[#FFBE0B] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m-1.4 9.74h2.81v-8.37H5.06v8.37Z" />
              </svg>
            </a>
            <a
              href="mailto:hello@nimbrix.io"
              className="p-2 border border-[#1E2430] text-[#8A95A3] hover:border-[#FFBE0B] hover:text-[#FFBE0B] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <FooterColumn title="Solutions" links={footerSolutions} />

        {/* Services */}
        <FooterColumn title="Services" links={footerServices} />

        {/* Industries */}
        <FooterColumn title="Industries" links={footerIndustries} />

        {/* Company */}
        <FooterColumn title="Company" links={footerCompany} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2430] max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#8A95A3]">
          © {new Date().getFullYear()} Nimbrix. All rights reserved.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#FFBE0B] hover:text-[#FB5607] transition-colors"
        >
          Start a project
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-mono text-sm text-[#8A95A3] hover:text-[#FFBE0B] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
