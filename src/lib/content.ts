import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface CaseStudyMeta {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  accentColor: string;
  summary: string;
  challenge: string;
  outcome: string;
  tech: string[];
  date: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface InsightMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export function getCaseStudies(): CaseStudyMeta[] {
  const dir = path.join(contentDir, "case-studies");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<CaseStudyMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudyBySlug(slug: string): { meta: CaseStudyMeta; content: string } | null {
  const filePath = path.join(contentDir, "case-studies", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...(data as Omit<CaseStudyMeta, "slug">) }, content };
}

export function getInsights(): InsightMeta[] {
  const dir = path.join(contentDir, "insights");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<InsightMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): { meta: InsightMeta; content: string } | null {
  const filePath = path.join(contentDir, "insights", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...(data as Omit<InsightMeta, "slug">) }, content };
}

export interface TargetAudience {
  id: string;
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export function getWhoWeServe(): TargetAudience[] {
  const filePath = path.join(contentDir, "who-we-serve.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

