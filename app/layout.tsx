import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    template: "%s | OMNIVOX AI",
  },
  description: siteConfig.description,
  keywords: [
    "OMNIVOX AI",
    "cloud dialer",
    "preview dial",
    "outbound dialer UK",
    "contact centre software",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    description: siteConfig.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "OMNIVOX AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OMNIVOX AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "GBP",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <PilotBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
