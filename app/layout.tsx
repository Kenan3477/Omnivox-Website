import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { PilotBanner } from "@/components/layout/PilotBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Omnivox — Outbound sales calling without the telecom stack",
    template: "%s | Omnivox",
  },
  description: siteConfig.description,
  keywords: [
    "outbound dialer",
    "preview dial",
    "manual dial",
    "contact centre",
    "cloud dialer UK",
    "sales dialer",
    "click to dial",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Omnivox — Outbound sales calling without the telecom stack",
    description: siteConfig.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Omnivox dialer platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnivox — Outbound sales calling without the telecom stack",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Omnivox",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "59",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "59",
      priceCurrency: "GBP",
      unitText: "per agent per month",
    },
  },
  featureList: [
    "Manual dial",
    "Preview dial",
    "Prepaid call credits",
    "Inbound routing",
    "DNC compliance",
    "Call recording",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <PilotBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
