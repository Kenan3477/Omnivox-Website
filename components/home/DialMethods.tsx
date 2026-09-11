import { StatusLabel } from "@/components/ui/StatusLabel";
import type { FeatureStatus } from "@/lib/constants";

const methods: { name: string; status: FeatureStatus; detail: string }[] = [
  { name: "Manual / click-to-call", status: "live", detail: "Browser WebRTC. Mute, hold, keypad, recording." },
  { name: "Preview", status: "live", detail: "Review, skip, or dial. Production pilots." },
  { name: "Progressive", status: "live", detail: "1:1 auto-dial. Shipped — not waitlisted." },
  { name: "Power", status: "live", detail: "Ratio > 1, AMD-gated so voicemail does not eat the floor." },
  { name: "Adaptive Power", status: "waitlist", detail: "Ratio from occupancy / abandon. In development." },
  { name: "Predictive", status: "waitlist", detail: "Statistical / multi-line. Not shipped. Never badged live." },
];

export function DialMethods() {
  return (
    <section className="border-b border-ink-600 bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <p className="kicker">Dial methods · honest availability</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper md:text-4xl">
          Progressive is live. Predictive is not. We will not lie about the dialler.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Twilio AMD sits next to Power: human vs machine routing so agents are not burned on tapes. Adaptive Power
          stays on the waitlist until it actually adjusts from occupancy.
        </p>
        <div className="mt-10 overflow-hidden border border-ink-600">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-900 font-mono text-[10px] uppercase tracking-widest text-ink-400">
              <tr>
                <th className="px-4 py-3 font-medium">Method</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">What it means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700 bg-ink">
              {methods.map((m) => (
                <tr key={m.name}>
                  <td className="px-4 py-4 font-medium text-paper">{m.name}</td>
                  <td className="px-4 py-4">
                    <StatusLabel status={m.status} />
                  </td>
                  <td className="hidden px-4 py-4 text-ink-300 md:table-cell">{m.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
