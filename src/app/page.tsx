import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CapabilityMap } from "@/components/home/CapabilityMap";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyNimbrix } from "@/components/home/WhyNimbrix";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Nimbrix — AI-first Technology Transformation",
  description:
    "Nimbrix designs, builds, and operates intelligent technology systems — AI & automation, software engineering, cloud, data, and managed services for ambitious organizations worldwide.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <CapabilityMap />
      <FeaturedWork />
      <IndustriesStrip />
      <HowWeWork />
      <WhyNimbrix />
      <FinalCTA />
    </>
  );
}
