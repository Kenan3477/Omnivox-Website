import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="OMNIVOX AI home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-violet-600/60 to-cyan-600/40 text-cyan-100 font-bold shadow-glow transition group-hover:shadow-glow-violet">
            O
          </div>
          <span className="font-display font-bold text-white hidden sm:block tracking-tight">OMNIVOX AI</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5"
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

        <details className="lg:hidden relative">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/5 bg-slate-950/95 p-3 shadow-xl backdrop-blur-xl">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <Button href={siteConfig.appLoginUrl} variant="secondary" className="w-full" external>
                  Sign in
                </Button>
                <Button href="/contact" className="w-full">Book a demo</Button>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
