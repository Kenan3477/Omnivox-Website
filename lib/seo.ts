import type { Metadata } from "next";
import { faqItems, siteConfig } from "@/lib/constants";
import { softwareFeatureList } from "@/lib/product";

const siteUrl = siteConfig.url;

export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const pageSeo = {
  home: {
    title: "OMNIVOX — UK/EU contact centre for campaigns and inbox",
    description:
      "UK and EU cloud contact centre with preview, progressive, and power dial, Work Inbox (WhatsApp 24-hour sessions), floor wallboards, and prepaid voice at about 5p outbound and 4p inbound.",
    path: "/",
  },
  features: {
    title: "Contact centre features: dial, inbox, wallboards",
    description:
      "OMNIVOX features: preview, progressive, and power dial (AMD on progressive and power), Work Inbox, inbound ACD, floor wallboards, prepaid credits, and UK GDPR tools. Predictive Live is waitlist only.",
    path: "/features",
  },
  pricing: {
    title: "Contact centre pricing: £25/seat plus voice credits",
    description:
      "OMNIVOX pricing is £25 per agent per month plus prepaid voice credits at about 5p outbound and 4p inbound. Digital is not in Call Credits. No bundled fair-use minute caps.",
    path: "/pricing",
  },
  agencies: {
    title: "Contact centre for agencies and multi-client teams",
    description:
      "Onboard agency clients in a day on OMNIVOX. Isolated orgs, pilot credit grants, inbox and wallboards per client, £25 per seat.",
    path: "/agencies",
  },
  contact: {
    title: "Book an OMNIVOX demo or same-day pilot",
    description:
      "Book a demo or start an OMNIVOX pilot. We provision your organisation, grant starter credits, and can have agents working the same day.",
    path: "/contact",
  },
  trust: {
    title: "Trust, UK GDPR, and contact centre security controls",
    description:
      "How OMNIVOX handles data as your processor: DPA, DNC registry, audit logs, recording controls, and UK GDPR roles. No invented SOC 2 or ISO claims.",
    path: "/trust",
  },
  privacy: {
    title: "Privacy Policy for the OMNIVOX website",
    description:
      "How OMNIVOX and Quanterae Solutions collect and use website enquiry and platform data under UK GDPR, including processor roles.",
    path: "/privacy",
  },
  terms: {
    title: "OMNIVOX terms of service and acceptable use",
    description:
      "Terms for using OMNIVOX: billing, prepaid credits, acceptable use, and your responsibility for calling compliance.",
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

const logoUrl = `${siteUrl}/logo`;
const screenshotUrl = `${siteUrl}/opengraph-image`;

const logoObject = {
  "@type": "ImageObject",
  url: logoUrl,
  width: 512,
  height: 512,
  caption: siteConfig.name,
};

const screenshotObject = {
  "@type": "ImageObject",
  url: screenshotUrl,
  width: 1200,
  height: 630,
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
        image: screenshotObject,
        email: siteConfig.contactEmail,
        description: siteConfig.description,
        areaServed: "United Kingdom and the European Union",
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contactEmail,
          contactType: "sales",
          availableLanguage: "English",
          areaServed: "GB",
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
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#app`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    image: screenshotObject,
    screenshot: screenshotObject,
    featureList: [...softwareFeatureList],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      logo: logoUrl,
    },
    offers: {
      "@type": "Offer",
      name: "OMNIVOX platform seat",
      price: "25.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/pricing`,
      priceValidUntil: "2027-12-31",
      category: "SaaS",
      description:
        "£25 per agent per month, plus prepaid voice credits at approximately 5p outbound and 4p inbound per connected minute.",
    },
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
    dateModified: "2026-09-15",
  };
}
