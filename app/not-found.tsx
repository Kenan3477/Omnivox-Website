import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="border-b border-ink-600 bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="kicker">404</p>
        <h1 className="display mt-3 text-4xl text-paper">Page not found</h1>
        <p className="mt-4 text-ink-300 leading-relaxed">
          That URL is not on the OMNIVOX site. Head home or book a demo and we will point you to the right place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            Back to homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact
          </Button>
        </div>
        <p className="mt-6">
          <Link href="/faq" className="text-sm text-signal-300">
            Or read the FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
