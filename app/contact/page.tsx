import { ContactPageContent } from "@/components/contact/ContactForm";
import { PageSeo } from "@/components/seo/PageSeo";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageSeo page="contact" type="ContactPage" />
      <ContactPageContent />
    </>
  );
}
