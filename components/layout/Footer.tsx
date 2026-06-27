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
    { href: siteConfig.appLoginUrl, label: "Sign in", external: true },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-purple-600/40 to-cyan-500/30 text-cyan-300 font-bold">
                O
              </div>
              <span className="font-bold text-white text-lg">OMNIVOX AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-cyan-400/80">
              Powered by {siteConfig.poweredBy}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cyan-400/10 pt-8 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} {siteConfig.poweredBy}. All rights reserved.
          </p>
          <p className="text-sm text-cyan-400/60">
            Built for UK &amp; EU sales teams
          </p>
        </div>
      </div>
    </footer>
  );
}
