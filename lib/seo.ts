import type { Metadata } from "next";
import { faqItems, featureGroups, siteConfig } from "@/lib/constants";

const siteUrl = siteConfig.url;

export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const pageSeo = {
  home: {
    title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    description:
      "UK and EU cloud dialer with preview outbound, £25 per seat, prepaid credits, and one wallet for inbound and outbound calls.",
    path: "/",
  },
  features: {
    title: "Cloud dialer features: preview, credits, DNC",
    description:
      "OMNIVOX AI features for outbound teams: preview and manual dial, prepaid credit wallet, inbound routing, campaigns, and UK GDPR tools.",
    path: "/features",
  },
  pricing: {
    title: "Cloud dialer pricing: £25/seat plus credits",
    description:
      "OMNIVOX AI pricing is £25 per agent per month plus prepaid call credits at about 5p per minute. No bundled fair-use minute caps.",
    path: "/pricing",
  },
  agencies: {
    title: "Cloud dialer for agencies and multi-client teams",
    description:
      "Onboard agency clients in a day on OMNIVOX AI. Isolated orgs, pilot credit grants, and one telephony stack at £25 per seat.",
    path: "/agencies",
  },
  contact: {
    title: "Book an OMNIVOX AI demo or same-day pilot",
    description:
      "Book a demo or start an OMNIVOX AI pilot. We provision your organisation, grant starter credits, and can have agents dialling the same day.",
    path: "/contact",
  },
  trust: {
    title: "Trust, UK GDPR, and dialer security controls",
    description:
      "How OMNIVOX AI handles data as your processor: DPA, DNC registry, audit logs, recording controls, and UK GDPR roles for outbound teams.",
    path: "/trust",
  },
  privacy: {
    title: "Privacy Policy for the OMNIVOX AI website",
    description:
      "How OMNIVOX AI and Quanterae Solutions collect and use website enquiry and platform data under UK GDPR, including processor roles.",
    path: "/privacy",
  },
  terms: {
    title: "OMNIVOX AI terms of service and acceptable use",
    description:
      "Terms for using the OMNIVOX AI cloud dialer: billing, prepaid credits, acceptable use, and your responsibility for calling compliance.",
    path: "/terms",
  },
} as const;

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = path === "" || path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: path === "" || path === "/" ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

const logoObject = {
  "@type": "ImageObject",
  url: `${siteUrl}/icon`,
  width: 32,
  height: 32,
  caption: siteConfig.name,
};

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.poweredBy,
        url: siteUrl,
        logo: logoObject,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          caption: siteConfig.name,
        },
        email: siteConfig.contactEmail,
        description: siteConfig.description,
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "AdministrativeArea", name: "European Union" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contactEmail,
          contactType: "sales",
          availableLanguage: ["English"],
          areaServed: ["GB", "EU"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-GB",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function softwareApplicationJsonLd() {
  const availableFeatures = featureGroups.flatMap((group) =>
    group.features.filter((feature) => feature.status === "available").map((feature) => feature.name)
  );

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#app`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    image: `${siteUrl}/opengraph-image`,
    screenshot: `${siteUrl}/opengraph-image`,
    featureList: availableFeatures,
    brand: { "@id": `${siteUrl}/#organization` },
    offers: {
      "@type": "Offer",
      name: "OMNIVOX AI platform seat",
      price: "25.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/pricing`,
      priceValidUntil: "2027-12-31",
      description: "£25 per agent per month, plus prepaid call credits at approximately 5p per connected minute.",
    },
    provider: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ContactPage" | "AboutPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    dateModified: "2026-08-25",
  };
}
