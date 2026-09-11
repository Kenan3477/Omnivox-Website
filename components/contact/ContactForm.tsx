"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

const useCases = [
  { value: "outbound", label: "Outbound" },
  { value: "inbound", label: "Inbound" },
  { value: "both", label: "Both" },
  { value: "agency", label: "Agency / multi-org" },
];

const pilotSteps = [
  { title: "We reply within one business day", detail: "Usually same day for UK/EU enquiries." },
  { title: "Same-day org provisioning", detail: "Pilot org, users, dial methods, wallboard template." },
  { title: "£50 free call credits", detail: "Qualified pilots get starter credits and white-glove setup." },
];

function ContactSidebar() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="space-y-6">
      <div className="border border-stone-300 bg-white p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-amber-800">What happens next</p>
        <ol className="mt-5 space-y-5">
          {pilotSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-stone-300 font-mono text-xs">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-0.5 text-sm text-ink-500">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="border border-stone-300 bg-white p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">Prefer email?</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          Send agent count, dial methods (preview / progressive / power), inbound or not, and timeline.
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}?subject=OMNIVOX%20demo%20request`}
          className="mt-4 inline-flex font-mono text-sm text-amber-800"
        >
          {siteConfig.contactEmail}
        </a>
      </div>
      {calendlyUrl ? (
        <div className="min-h-[480px] overflow-hidden border border-stone-300 bg-white">
          <iframe title="Book a demo with OMNIVOX" src={calendlyUrl} className="h-[480px] w-full border-0" />
        </div>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          agentCount: data.get("agentCount"),
          useCase: data.get("useCase"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMessage(message);
      const subject = encodeURIComponent("OMNIVOX demo request");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\nAgents: ${data.get("agentCount")}\nUse case: ${data.get("useCase")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    }
  }

  if (status === "success") {
    return (
      <div className="border border-live/40 bg-emerald-50 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-ink">Received</h3>
        <p className="mt-2 text-ink-500">We will be in touch within one UK business day.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-ink placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
          Company *
        </label>
        <input type="text" id="company" name="company" required className={inputClass} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="agentCount" className="mb-1.5 block text-sm font-medium">
            Agent count
          </label>
          <input type="text" id="agentCount" name="agentCount" placeholder="e.g. 8" className={inputClass} />
        </div>
        <div>
          <label htmlFor="useCase" className="mb-1.5 block text-sm font-medium">
            Use case
          </label>
          <select id="useCase" name="useCase" className={inputClass}>
            <option value="">Select</option>
            {useCases.map((uc) => (
              <option key={uc.value} value={uc.value}>
                {uc.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          What do you run today?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Preview / power / inbound queues / agency clients…"
          className={`${inputClass} resize-y`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700">
          {errorMessage} Opening your mail client as a fallback.
        </p>
      )}
      <Button type="submit" size="lg" variant="paper" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Book a demo"}
      </Button>
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="border-b border-ink-600 bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <p className="kicker">Contact</p>
          <h1 className="display mt-3 max-w-3xl text-4xl text-paper md:text-5xl">Book a demo or start a pilot.</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-300">
            Same-day org provisioning for qualified teams. £50 credits and white-glove setup. Already on the platform?{" "}
            <a href={siteConfig.appLoginUrl} className="text-amber-300">
              Sign in
            </a>
            .
          </p>
        </div>
      </section>
      <section className="bg-paper py-16 text-ink">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactSidebar />
            <div className="border border-stone-300 bg-white p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
