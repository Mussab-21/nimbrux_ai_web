import { MetadataRoute } from "next";
import { getCaseStudies, getInsights } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticRoutes = [
    "/",
    "/solutions",
    "/solutions/digital-ai",
    "/solutions/cloud-security",
    "/solutions/managed-technology",
    "/solutions/consulting-advisory",
    "/solutions/products",
    "/industries",
    "/work",
    "/insights",
    "/about",
    "/contact",
  ].map((route) => ({
    url: route === "/" ? baseUrl : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const caseStudyRoutes = getCaseStudies().map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(cs.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const insightRoutes = getInsights().map((ins) => ({
    url: `${baseUrl}/insights/${ins.slug}`,
    lastModified: new Date(ins.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...insightRoutes];
}
