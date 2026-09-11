import { ChannelExplorer } from "@/components/product/ChannelExplorer";
import { InboxMock } from "@/components/product/InboxMock";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { channelNever } from "@/lib/channels";
import { PageSeo } from "@/components/seo/PageSeo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.channels.title,
  description: pageSeo.channels.description,
  path: "/channels",
  keywords: ["Omnivox channels", "WhatsApp inbox", "SMS inbox", "Work Inbox", "Twilio WABA"],
});

export default function ChannelsPage() {
  return (
    <>
      <PageSeo page="channels" />
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Channels", href: "/channels" }]} />
          <p className="kicker">Channel Types</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            Voice plus a digital inbox. Catalog live is not org-ready.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            Recreated from GET /api/omni/catalog and GET /api/omni/readiness. The app has no page named Omnichannel
            matrix. Admins use Admin → Channels. Agents use Work → Inbox.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-600 bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <ChannelExplorer />
          <ol className="mt-8 grid gap-3 text-sm text-ink-300 md:grid-cols-4">
            <li className="border border-ink-600 bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-300">01</p>
              <p className="mt-2 text-paper">Sign in → Admin → Channels</p>
            </li>
            <li className="border border-ink-600 bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-300">02</p>
              <p className="mt-2 text-paper">Channel Types · click WhatsApp</p>
            </li>
            <li className="border border-ink-600 bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-300">03</p>
              <p className="mt-2 text-paper">Read 24h / HX copy · DID via Voice inbound numbers</p>
            </li>
            <li className="border border-ink-600 bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-300">04</p>
              <p className="mt-2 text-paper">Work → Inbox · channel filter WhatsApp</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="inbox" className="scroll-mt-28 border-b border-ink-600 bg-ink py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <p className="kicker">Work Inbox</p>
          <h2 className="display mt-3 text-3xl text-paper">Threads, not tickets. One conversation per channel.</h2>
          <p className="mt-4 max-w-2xl text-ink-300">
            Voice lives on My Interactions. Digital lives as OmniConversation threads. An active call forces My
            Interactions. After a voice wrap you can send SMS / WhatsApp / email — not Facebook or chat.
          </p>
          <div className="mt-10">
            <InboxMock />
          </div>
        </div>
      </section>

      <section className="bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl text-paper">Never claim</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {channelNever.map((item) => (
              <li key={item} className="border border-ink-600 px-4 py-3 text-sm text-ink-300">
                {item}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-10">
            Book a demo
          </Button>
        </div>
      </section>
      <CTABand />
    </>
  );
}
