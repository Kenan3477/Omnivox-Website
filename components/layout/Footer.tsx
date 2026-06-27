import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/agencies", label: "Agencies" },
  ],
  company: [
    { href: "/contact", label: "Book a demo" },
    { href: "/trust", label: "Trust & Security" },
    { href: siteConfig.appLoginUrl, label: "Sign in", external: true },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-violet-600/50 to-cyan-600/30 text-cyan-200 font-bold">
                O
              </div>
              <span className="font-display font-bold text-white text-lg">OMNIVOX AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 text-sm">
              <span className="text-slate-600">Powered by </span>
              <span className="text-cyan-400/90">{siteConfig.poweredBy}</span>
            </p>
            <div className="mt-8">
              <Button href="/contact" size="sm">Book a demo</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="text-sm hover:text-cyan-400 transition-colors">{link.label}</a>
                    ) : (
                      <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row text-sm text-slate-600">
          <p>© {new Date().getFullYear()} {siteConfig.poweredBy}. All rights reserved.</p>
          <p>Built for UK &amp; EU sales teams</p>
        </div>
      </div>
    </footer>
  );
}
