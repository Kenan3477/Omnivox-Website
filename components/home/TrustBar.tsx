import { trustMetrics } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="relative z-20 border-y border-white/5 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
          Built for UK &amp; EU outbound teams
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {trustMetrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-white">{m.value}</p>
              <p className="mt-1 text-xs md:text-sm text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
