import { ContactPageContent } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, pageSeo, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  path: "/contact",
  keywords: ["book a demo", "OMNIVOX pilot", "cloud dialer demo"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/contact",
            name: pageSeo.contact.title,
            description: pageSeo.contact.description,
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
