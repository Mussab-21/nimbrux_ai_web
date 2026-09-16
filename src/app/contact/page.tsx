import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Nimbrix",
  description: "Tell us what you are trying to build or automate. We reply within one business day with an honest assessment of scope, timeline and whether we are a fit.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
