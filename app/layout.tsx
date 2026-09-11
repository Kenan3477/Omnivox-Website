import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import { organizationGraph, pageSeo } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
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
    default: pageSeo.home.title,
    template: "%s | OMNIVOX",
  },
  description: pageSeo.home.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.poweredBy, url: siteConfig.url }],
  creator: siteConfig.poweredBy,
  publisher: siteConfig.poweredBy,
  category: "business",
  keywords: [
    "OMNIVOX",
    "cloud contact centre",
    "outbound dialer UK",
    "preview dial",
    "power dial",
    "WhatsApp inbox",
    "wallboards",
    "inbound ACD",
    "prepaid call credits",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OMNIVOX — Voice, inbox, wallboards",
    description: pageSeo.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationGraph()} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <PilotBanner />
        <Header />
        <main id="main-content" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
