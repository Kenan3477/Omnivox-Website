import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { PlaylistStory, WallboardMock } from "@/components/product/WallboardMock";
import { TvBezel } from "@/components/product/TvBezel";
import { wallboardTemplates, wallboardThemes, wallboardWidgets } from "@/lib/constants";
import { StatusLabel } from "@/components/ui/StatusLabel";

export const metadata: Metadata = {
  title: "Wallboards",
  description:
    "Custom contact-centre wallboards: drag-and-drop builder, TV mode, playlist rotation, role templates, and ~40 ops widgets. Built for the floor.",
};

export default function WallboardsPage() {
  return (
    <>
      <section className="border-b border-ink-600 bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <p className="kicker">Wallboards</p>
          <h1 className="display mt-3 max-w-4xl text-4xl text-paper md:text-5xl">
            A 16:9 TV on the wall. Occupancy, AMD, power ratio, credits — readable from the floor.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            First-class product, included on every seat. Builder, TV mode, playlists, shareable view links, role-aware
            templates. Not a generic SaaS KPI strip.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <StatusLabel status="live" />
            <span className="font-mono text-[11px] text-ink-400">Included · not a premium SKU</span>
          </div>
          <div className="mt-8">
            <TvBezel caption="Operations wallboard · Dark Ops · Manchester floor">
              <WallboardMock />
            </TvBezel>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-600 bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl text-paper">Playlist rotation</h2>
          <p className="mt-3 max-w-2xl text-ink-300">
            Sequence boards with dwell seconds. A wall TV that actually changes: operations, then capacity, then the
            campaign that is burning supply.
          </p>
          <div className="mt-8">
            <PlaylistStory />
          </div>
        </div>
      </section>

      <section className="border-b border-ink-600 bg-ink py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl text-paper">Builder, TV mode, templates</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="border border-ink-600 bg-panel p-6">
              <h3 className="font-display text-xl font-bold text-paper">Drag-and-drop builder</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Grid, resize, lock. Widgets scoped to Me, Campaign, or Organisation. Build the board the shift actually
                watches.
              </p>
            </article>
            <article className="border border-ink-600 bg-panel p-6">
              <h3 className="font-display text-xl font-bold text-paper">TV / wall mode</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Fullscreen, wall density, themes: {wallboardThemes.join(", ")}. Designed for a mounted display, not only
                a browser tab.
              </p>
            </article>
            <article className="border border-ink-600 bg-panel p-6">
              <h3 className="font-display text-xl font-bold text-paper">Share a board</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                View link for the people who need it. Not a public unauthenticated internet kiosk, not custom HTML/CSS
                injection.
              </p>
            </article>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wallboardTemplates.map((t) => (
              <article key={t.role} className="border border-ink-600 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal-400">Template</p>
                <h3 className="mt-2 font-semibold text-paper">{t.role}</h3>
                <p className="mt-2 text-sm text-ink-300">{t.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl text-paper">Widget catalogue a floor manager cares about</h2>
          <p className="mt-3 max-w-2xl text-ink-300">
            About 40 widgets in product. Marketed here: the ones that belong on a dialler wall. No SMS/WhatsApp waiting.
            No “80+ Connex reports”.
          </p>
          <div className="mt-8 overflow-x-auto border border-ink-600">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-ink-900 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Widget</th>
                  <th className="px-4 py-3 font-medium">Scope</th>
                  <th className="px-4 py-3 font-medium">Why it is on the wall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-700">
                {wallboardWidgets.map((w) => (
                  <tr key={w.name}>
                    <td className="px-4 py-3 text-paper">{w.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-signal-300">{w.scope}</td>
                    <td className="px-4 py-3 text-ink-300">{w.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button href="/contact" className="mt-10">
            Book a demo
          </Button>
        </div>
      </section>
      <CTABand />
    </>
  );
}
