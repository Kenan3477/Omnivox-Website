import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PlaylistStory, WallboardMock } from "@/components/product/WallboardMock";
import { TvBezel } from "@/components/product/TvBezel";

export function WallboardModule() {
  return (
    <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="kicker">Wallboards</p>
            <h2 className="display mt-3 text-3xl text-paper md:text-4xl">The TV on the wall is the product, not a footnote.</h2>
            <p className="mt-4 text-ink-300">
              Drag-and-drop builder. Fullscreen TV mode. Playlist rotation with dwell seconds. Role templates for the
              floor manager, not a generic SaaS KPI row.
            </p>
          </div>
          <Button href="/wallboards" variant="outline">
            Wallboards in full
          </Button>
        </div>
        <div className="mt-10">
          <TvBezel>
            <WallboardMock />
          </TvBezel>
        </div>
        <div className="mt-8">
          <PlaylistStory />
        </div>
        <p className="mt-6 text-sm text-ink-400">
          Share a board with a view link. Not a public unauthenticated URL, not custom HTML, not WhatsApp waiting widgets.{" "}
          <Link href="/wallboards" className="text-amber-300">
            Widget catalogue →
          </Link>
        </p>
      </div>
    </section>
  );
}
