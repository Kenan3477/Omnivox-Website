"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const useCases = [
  { value: "outbound", label: "Outbound" },
  { value: "inbound", label: "Inbound" },
  { value: "both", label: "Both" },
];

const agentCounts = [
  "1–5",
  "6–10",
  "11–20",
  "21–50",
  "50+",
];

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
          currentStack: data.get("currentStack"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-navy-900">Thank you</h3>
        <p className="mt-2 text-navy-600">
          We&apos;ve received your enquiry and will be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:text-accent-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
          placeholder="Company name"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="agentCount" className="block text-sm font-medium text-navy-700 mb-1.5">
            Agent count
          </label>
          <select
            id="agentCount"
            name="agentCount"
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
          >
            <option value="">Select range</option>
            {agentCounts.map((count) => (
              <option key={count} value={count}>{count} agents</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-navy-700 mb-1.5">
            Use case
          </label>
          <select
            id="useCase"
            name="useCase"
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
          >
            <option value="">Select use case</option>
            {useCases.map((uc) => (
              <option key={uc.value} value={uc.value}>{uc.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="currentStack" className="block text-sm font-medium text-navy-700 mb-1.5">
          Current stack
        </label>
        <input
          type="text"
          id="currentStack"
          name="currentStack"
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
          placeholder="e.g. Twilio + HubSpot, legacy dialer, spreadsheets"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors resize-y"
          placeholder="Tell us about your team and what you're looking for..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Book a demo"}
      </Button>
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Book a demo or start a pilot"
            description="Tell us about your team. We'll provision your organisation and credits for a pilot, or walk you through a live demo."
            dark
            align="left"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Get in touch</h2>
              <p className="mt-3 text-navy-600 leading-relaxed">
                Fill in the form and we&apos;ll respond within one business day. For pilots, we can
                provision your org and grant call credits — no Stripe payment required.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 00-1.07-1.916l-7.5-4.615a2.25 2.25 0 00-2.36 0L3.32 4.91a2.25 2.25 0 00-1.07 1.916V19.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021.75 19.5V6.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Email</p>
                    <a href="mailto:hello@omnivox.co.uk" className="text-accent hover:text-accent-dark">
                      hello@omnivox.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">30-minute onboarding call</p>
                    <p className="text-sm text-navy-500">
                      Calendar embed placeholder — connect Calendly or similar in production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-dashed border-navy-200 bg-slate-surface p-8 text-center">
                <p className="text-sm font-medium text-navy-500">Calendar embed</p>
                <p className="mt-2 text-xs text-navy-400">
                  Replace with your Calendly, Cal.com, or HubSpot meetings link
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
