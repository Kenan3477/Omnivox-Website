import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-700">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          That URL is not part of the OMNIVOX AI site. Head home or book a demo and we will point you to the right place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Back to homepage
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-cyan-700 hover:text-cyan-600">
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}
