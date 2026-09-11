import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo or start an Omnivox pilot. Same-day onboarding, £50 credits, and white-glove setup for qualified teams.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
