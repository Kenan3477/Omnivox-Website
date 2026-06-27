"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { VoiceWaveV } from "@/components/brand/VoiceWaveV";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDarkHero = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || !isDarkHero
          ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="OMNIVOX AI home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-purple-600/40 to-cyan-500/30 text-cyan-300 font-bold text-lg shadow-lg shadow-cyan-500/10">
            O
          </div>
          <span className="hidden sm:flex items-center font-bold text-white text-lg">
            OMNI<VoiceWaveV className="scale-50 mx-0" />OX
            <span className="text-cyan-400 text-sm ml-1">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                pathname === link.href ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={siteConfig.appLoginUrl} variant="ghost" size="sm" external>
            Sign in
          </Button>
          <Button href="/contact" size="sm">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-400/10 bg-slate-900/98 px-4 pb-6 backdrop-blur-md">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/5 ${
                  pathname === link.href ? "text-cyan-400 bg-cyan-400/5" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-4">
              <Button href={siteConfig.appLoginUrl} variant="secondary" size="md" className="w-full" external>
                Sign in
              </Button>
              <Button href="/contact" size="md" className="w-full">
                Book a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
