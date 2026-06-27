import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo or start a pilot with Omnivox. We'll provision your organisation and call credits for same-day onboarding.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
