import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";
import { CheckIcon, XIcon } from "@/components/ui/Icons";

const omnivox = [
  "One prepaid credit wallet",
  "Preview dial out of the box",
  "£25/agent platform fee",
  "~5p/min inbound & outbound",
  "Platform-managed telephony",
  "Same-day pilot onboarding",
];

const diy = [
  "Build your own dialer from scratch",
  "Separate carrier contracts",
  "Webhook and telecom plumbing",
  "Multiple surprise invoices",
  "Spreadsheet compliance",
  "Weeks of developer time",
];

export function Comparison() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compare"
          title="OMNIVOX AI vs building it yourself"
          description="We're built for manual and preview outbound that actually works — with transparent credits."
          light
        />

        <div className="grid gap-8 md:grid-cols-2">
          <AnimateOnScroll>
            <div className="glass-card-light p-8 h-full border-cyan-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-6">OMNIVOX AI</h3>
              <ul className="space-y-4">
                {omnivox.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="glass-card-light p-8 h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-6">DIY stack + spreadsheets</h3>
              <ul className="space-y-4">
                {diy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400">
                      <XIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
