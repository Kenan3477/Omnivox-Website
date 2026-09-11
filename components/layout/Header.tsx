"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { LogoMark, Wordmark } from "@/components/brand/Wordmark";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink-600 ${
        scrolled || mobileOpen ? "bg-ink/95 backdrop-blur-md" : "bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="OMNIVOX home">
          <LogoMark className="h-8 w-8" />
          <Wordmark compact />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "bg-ink-700 text-signal-300"
                  : "text-ink-200 hover:bg-ink-800 hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={siteConfig.appLoginUrl} variant="ghost" size="sm" external>
            Sign in
          </Button>
          <Button href="/contact" size="sm">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-200 hover:bg-ink-800 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-600 bg-ink px-4 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-3 text-base ${
                  pathname === link.href ? "bg-ink-700 text-signal-300" : "text-ink-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={siteConfig.appLoginUrl} variant="secondary" className="w-full" external>
                Sign in
              </Button>
              <Button href="/contact" className="w-full">
                Book a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
