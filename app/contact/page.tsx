import { ContactPageContent } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Book a demo or start a pilot with Omnivox. We'll provision your organisation and call credits for same-day onboarding.";

export const metadata = pageMetadata({
  title: "Contact",
  description,
  path: "/contact",
  keywords: ["book a demo", "OMNIVOX AI pilot", "cloud dialer demo"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/contact",
            name: "Contact OMNIVOX AI",
            description,
            type: "ContactPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageContent />
    </>
  );
}
