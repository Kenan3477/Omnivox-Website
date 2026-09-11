import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { LogoMark, Wordmark } from "@/components/brand/Wordmark";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/wallboards", label: "Wallboards" },
    { href: "/inbound", label: "Inbound" },
    { href: "/pricing", label: "Pricing" },
    { href: "/agencies", label: "Agencies" },
    { href: "/faq", label: "FAQ" },
  ],
  company: [
    { href: "/contact", label: "Book a demo" },
    { href: "/trust", label: "Trust" },
    { href: siteConfig.appLoginUrl, label: "Sign in", external: true },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-site px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="OMNIVOX home">
              <LogoMark />
              <Wordmark compact />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              UK/EU cloud contact centre for outbound sales and inbound voice. Preview, progressive and power dial.
              Custom wallboards on the floor.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-ink-400">by </span>
              <span className="text-ink-200">{siteConfig.poweredBy}</span>
            </p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="mt-3 inline-block font-mono text-sm text-signal-300">
              {siteConfig.contactEmail}
            </a>
            <div className="mt-6">
              <Button href="/contact" size="sm">
                Book a demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-200">Product</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-signal-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-200">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="text-sm hover:text-signal-300">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm hover:text-signal-300">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-200">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-signal-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-600 pt-6 text-xs text-ink-400 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.poweredBy}. OMNIVOX is a product of {siteConfig.poweredBy}.
          </p>
          <p>You are the data controller. We are the processor. UK/EU GDPR.</p>
        </div>
      </div>
    </footer>
  );
}
