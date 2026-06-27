"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { Starfield } from "@/components/brand/Starfield";

const useCases = [
  { value: "outbound", label: "Outbound" },
  { value: "inbound", label: "Inbound" },
  { value: "both", label: "Both" },
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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900">Thank you</h3>
        <p className="mt-2 text-slate-600">We&apos;ll be in touch within one business day.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name *</label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
        <input type="text" id="company" name="company" required className={inputClass} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="agentCount" className="block text-sm font-medium text-slate-700 mb-1.5">Agent count</label>
          <input type="text" id="agentCount" name="agentCount" placeholder="e.g. 5" className={inputClass} />
        </div>
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-slate-700 mb-1.5">Use case</label>
          <select id="useCase" name="useCase" className={inputClass}>
            <option value="">Select</option>
            {useCases.map((uc) => (
              <option key={uc.value} value={uc.value}>{uc.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
        <textarea id="message" name="message" rows={4} className={`${inputClass} resize-y`} />
      </div>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" size="lg">{status === "loading" ? "Sending..." : "Book a demo"}</Button>
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Starfield />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Book a demo or start a pilot"
            description="We'll provision your org and grant starter credits. Same-day onboarding for pilots."
            dark
            align="left"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-slate-600 leading-relaxed">
                Already have an account?{" "}
                <a href={siteConfig.appLoginUrl} className="text-cyan-600 hover:text-cyan-500 font-medium">
                  Sign in to OMNIVOX AI →
                </a>
              </p>
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="text-sm font-medium text-slate-500">Calendar embed placeholder</p>
                <p className="mt-2 text-xs text-slate-400">Connect Calendly or Cal.com</p>
              </div>
            </div>
            <div className="glass-card-light p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
