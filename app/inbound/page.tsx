import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { IvrCanvasMock } from "@/components/product/IvrCanvasMock";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { PageSeo } from "@/components/seo/PageSeo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata, pageSeo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: pageSeo.inbound.title,
  description: pageSeo.inbound.description,
  path: "/inbound",
  keywords: ["inbound ACD", "IVR", "UK DID", "contact centre inbound"],
});

const inbound = [
  {
    title: "Platform-managed UK numbers",
    detail: "We provide the DIDs. No customer carrier account. No BYOC. Telephony rides the same prepaid wallet as outbound.",
  },
  {
    title: "ACD, queues, overflow, ring groups",
    detail: "Route to agents, teams, queues. Overflow when the floor is full. Ring groups for small inbound teams.",
  },
  {
    title: "Hours and after-hours",
    detail: "Business hours, after-hours voicemail, greeting audio library. The night message is not an afterthought.",
  },
  {
    title: "Visual flow builder",
    detail: "Hours, IVR menus, collect input, play audio, TTS, queue, voicemail, end call. Built as a contact-centre inbound stack.",
  },
];

export default function InboundPage() {
  return (
    <>
      <PageSeo page="inbound" />
      <section className="border-b border-ink-600 bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Inbound", href: "/inbound" }]} />
          <p className="kicker">Inbound</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">
            Queues, hours, IVR. Not a spare phone number on the side.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            Small contact centres take inbound on platform DIDs while the same agents run preview and power. One wallet.
            One work surface.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <StatusLabel status="live" />
            <span className="text-sm text-ink-400">Included on every seat</span>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-600 bg-panel py-16">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <IvrCanvasMock />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {inbound.map((item) => (
              <article key={item.title} className="border border-ink-600 bg-ink p-6">
                <h2 className="font-display text-xl font-bold text-paper">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-400">
            Attended transfer is not a polished telephony feature yet — labelled Coming on the features page. Supervisor
            listen exists; whisper/barge/take-over is not sold as live coaching.
          </p>
          <Button href="/contact" className="mt-8">
            Book a demo
          </Button>
        </div>
      </section>
      <CTABand />
    </>
  );
}
