import Link from "next/link";
import { ChannelExplorer } from "@/components/product/ChannelExplorer";
import { Button } from "@/components/ui/Button";

export function ChannelModule() {
  return (
    <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Admin → Channels → Channel Types</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">
          Eight channels in the catalog. Not ready on an empty org.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Click a tile the way an admin would. Live means the platform implements it. Org-ready is a DID, WABA,
          mailbox, widget key or social token on <em>this</em> organisation. There is no product surface named
          “Omnichannel matrix”.
        </p>
        <div className="mt-10">
          <ChannelExplorer />
        </div>
        <p className="mt-6 text-sm text-ink-400">
          Click path: Sign in → Admin → Channels → Channel Types → WhatsApp. Then Work → Inbox, channel filter
          WhatsApp.{" "}
          <Link href="/channels" className="text-signal-300">
            Full channel truth →
          </Link>
        </p>
        <Button href="/channels" variant="outline" className="mt-6">
          Channel Types
        </Button>
      </div>
    </section>
  );
}
