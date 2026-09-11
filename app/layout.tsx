import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { PilotBanner } from "@/components/layout/PilotBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { ChatWidget } from "@/components/chat/ChatWidget";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OMNIVOX — Contact centre for outbound teams",
    template: "%s | OMNIVOX",
  },
  description: siteConfig.description,
  keywords: [
    "OMNIVOX",
    "cloud contact centre",
    "outbound dialer UK",
    "preview dial",
    "power dial",
    "wallboards",
    "inbound ACD",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OMNIVOX — Preview, power, inbound, wallboards",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNIVOX — Contact centre for outbound teams",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OMNIVOX",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  provider: {
    "@type": "Organization",
    name: siteConfig.poweredBy,
    email: siteConfig.contactEmail,
  },
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "GBP",
    description: "£25 per agent per month plus prepaid call credits at approximately 5p per connected minute.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <PilotBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
