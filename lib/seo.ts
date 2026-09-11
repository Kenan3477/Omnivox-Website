import type { Metadata } from "next";
import { faqItems, featureGroups, siteConfig } from "@/lib/constants";

const siteUrl = siteConfig.url;

export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const pageSeo = {
  home: {
    title: "OMNIVOX — Contact centre for outbound teams",
    description:
      "UK/EU cloud contact centre: preview, progressive and power dial, inbound queues and IVR, custom wallboards. £25 a seat, prepaid minutes, no fair-use fiction.",
    path: "/",
    crumb: "Home",
  },
  features: {
    title: "Features: dialer, inbound, wallboards — labelled live or waitlist",
    description:
      "Omnivox capabilities with honest labels. Live: preview, progressive, power, AMD, inbound IVR, wallboards. Predictive is waitlist only.",
    path: "/features",
    crumb: "Features",
  },
  wallboards: {
    title: "Contact-centre wallboards: TV mode, playlists, widgets",
    description:
      "Custom Omnivox wallboards for the floor: drag-and-drop builder, TV mode, playlist rotation, role templates, and about 40 ops widgets.",
    path: "/wallboards",
    crumb: "Wallboards",
  },
  inbound: {
    title: "Inbound ACD and IVR on platform-managed UK numbers",
    description:
      "Omnivox inbound: platform DIDs, queues, ring groups, business hours, voicemail, and a visual IVR studio. No customer carrier account.",
    path: "/inbound",
    crumb: "Inbound",
  },
  pricing: {
    title: "Pricing: £25/seat plus prepaid credits",
    description:
      "Omnivox pricing is £25 per agent per month plus prepaid call credits at about 5p per connected minute. Wallboards and inbound included.",
    path: "/pricing",
    crumb: "Pricing",
  },
  agencies: {
    title: "Agencies: multi-org, isolated credits, same-day onboard",
    description:
      "Run multiple client organisations on Omnivox. Isolated users, campaigns, call data and wallets. £25/seat per client agent.",
    path: "/agencies",
    crumb: "Agencies",
  },
  contact: {
    title: "Book an Omnivox demo or same-day pilot",
    description:
      "Book a demo or start an Omnivox pilot. Same-day org provisioning, £50 credits, and white-glove setup for qualified teams.",
    path: "/contact",
    crumb: "Contact",
  },
  trust: {
    title: "Trust, UK GDPR, and processor controls",
    description:
      "You are the data controller. Omnivox is the processor. DPA at onboarding, DNC, audit logs, recording controls. No SOC 2 theatre.",
    path: "/trust",
    crumb: "Trust",
  },
  faq: {
    title: "FAQ: carrier, minutes, predictive, wallboards, GDPR",
    description:
      "Do I need a carrier? How are minutes billed? Is predictive live? Do you have wallboards? GDPR/DPA? Recording consent?",
    path: "/faq",
    crumb: "FAQ",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How OMNIVOX and Quanterae Solutions collect and use website enquiry and platform data under UK GDPR, including processor roles.",
    path: "/privacy",
    crumb: "Privacy",
  },
  terms: {
    title: "Terms of service and acceptable use",
    description:
      "Terms for using the OMNIVOX contact centre: billing, prepaid credits, acceptable use, and your responsibility for calling compliance.",
    path: "/terms",
    crumb: "Terms",
  },
} as const;

export type PageSeoKey = keyof typeof pageSeo;

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
    group.features.filter((feature) => feature.status === "live").map((feature) => feature.name)
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
      name: "OMNIVOX platform seat",
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
    dateModified: "2026-09-11",
  };
}

export function crumbsFor(key: PageSeoKey) {
  const page = pageSeo[key];
  if (page.path === "/") return [{ name: "Home", path: "/" }];
  return [
    { name: "Home", path: "/" },
    { name: page.crumb, path: page.path },
  ];
}
