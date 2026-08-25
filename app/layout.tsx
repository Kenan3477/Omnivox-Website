import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import { organizationGraph } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
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
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.poweredBy, url: siteConfig.url }],
  creator: siteConfig.poweredBy,
  publisher: siteConfig.poweredBy,
  category: "business",
  keywords: [
    "OMNIVOX AI",
    "cloud dialer",
    "preview dial",
    "outbound dialer UK",
    "contact centre software",
    "prepaid call credits",
    "UK GDPR dialer",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNIVOX AI — Cloud dialer for outbound sales teams",
    description: siteConfig.description,
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
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationGraph()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PilotBanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
