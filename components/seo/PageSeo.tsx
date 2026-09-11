import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  crumbsFor,
  faqPageJsonLd,
  pageSeo,
  softwareApplicationJsonLd,
  webPageJsonLd,
  type PageSeoKey,
} from "@/lib/seo";

export function PageSeo({
  page,
  type = "WebPage",
  includeApp = false,
  includeFaq = false,
}: {
  page: PageSeoKey;
  type?: "WebPage" | "ContactPage" | "AboutPage" | "FAQPage";
  includeApp?: boolean;
  includeFaq?: boolean;
}) {
  const seo = pageSeo[page];
  const data: object[] = [
    webPageJsonLd({ path: seo.path, name: seo.title, description: seo.description, type }),
    breadcrumbJsonLd(crumbsFor(page)),
  ];
  if (includeApp) data.push(softwareApplicationJsonLd());
  if (includeFaq) data.push(faqPageJsonLd());
  return <JsonLd data={data} />;
}
