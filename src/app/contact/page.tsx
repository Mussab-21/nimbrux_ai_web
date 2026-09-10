import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Tell us about your challenge. We'll give you an honest assessment and a clear path forward.",
};

export default function ContactPage() {
  return <ContactForm />;
}
