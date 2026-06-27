import Link from "next/link";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/agencies", label: "For Agencies" },
  ],
  company: [
    { href: "/contact", label: "Contact" },
    { href: "/trust", label: "Trust & Security" },
    { href: "https://status.omnivox.co.uk", label: "Status" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-navy-200">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white font-bold text-lg">
                O
              </div>
              <span className="font-display text-xl font-bold text-white">Omnivox</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-navy-400">
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 md:flex-row">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} Omnivox. All rights reserved.
          </p>
          <p className="text-sm text-navy-400">
            Built for UK &amp; EU sales teams
          </p>
        </div>
      </div>
    </footer>
  );
}
