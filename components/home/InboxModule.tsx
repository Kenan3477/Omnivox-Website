import { InboxMock } from "@/components/product/InboxMock";
import { Button } from "@/components/ui/Button";

export function InboxModule() {
  return (
    <section className="border-b border-ink-600 bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Work → Inbox</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">
          Same /work page as the dialer. Not the same contact card.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Open / Mine / Unassigned / Closed. Channel chips. WhatsApp window open or closed. Failed bubbles say{" "}
          <span className="text-paper">Not sent</span>. Two SMS threads for the same mobile collapse; SMS and WhatsApp
          stay two rows.
        </p>
        <div className="mt-10">
          <InboxMock />
        </div>
        <Button href="/channels#inbox" variant="outline" className="mt-8">
          Inbox rules
        </Button>
      </div>
    </section>
  );
}
