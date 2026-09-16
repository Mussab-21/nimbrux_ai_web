import type { Metadata } from "next";

/**
 * Single source of truth for site-wide SEO.
 *
 * SITE_URL must be the canonical production origin, with no trailing slash.
 * Set NEXT_PUBLIC_SITE_URL in Netlify -> Site settings -> Environment variables.
 * Google Search Console verifies ONE origin: pick it, then never emit another.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nimbrix.io"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Nimbrix",
  legalName: "Nimbrix AI (SMC-Private) Limited",
  url: SITE_URL,
  email: "hello@nimbrix.io",
  locale: "en_PK",
  tagline: "AI systems and software engineering for growing businesses",
  description:
    "Nimbrix builds AI document automation, custom software and data systems for growing businesses. Registered in Pakistan, delivering to clients worldwide.",
  address: { city: "Islamabad", region: "Islamabad Capital Territory", country: "PK" },
  social: {
    linkedin: "https://www.linkedin.com/company/nimbrix-ai",
    github: "https://github.com/Mussab-21",
  },
} as const;

type SeoInput = {
  title: string;
  description: string;
  /** Route path beginning with "/" — used for the canonical URL. */
  path: string;
  /** Set true on thin, duplicate or gated pages. */
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Builds a complete, Search-Console-clean metadata object for a page:
 * unique title, unique description, self-referencing canonical, and
 * per-page Open Graph + Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  type = "website",
  publishedTime,
}: SeoInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = {
    url: `${SITE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — ${siteConfig.tagline}`,
  };
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: siteConfig.locale,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

/* ---------------------------------------------------------------- */
/* Structured data (schema.org). Google reads these in Search Console
   under "Enhancements". Keep them accurate — false claims get flagged. */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: SITE_URL,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${a.path}` },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Renders a JSON-LD script tag. Server component safe. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
