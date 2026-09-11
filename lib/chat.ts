import { chatDocs, type ChatDoc } from "@/lib/chat-knowledge";

function tokens(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[£]/g, " ")
    .split(/[^a-z0-9+]+/)
    .filter((t) => t.length > 1);
}

export function retrieveDocs(question: string, limit = 4): ChatDoc[] {
  const q = tokens(question);
  if (q.length === 0) return chatDocs.slice(0, limit);

  const scored = chatDocs.map((doc) => {
    const hay = `${doc.title} ${doc.tags.join(" ")} ${doc.answer}`.toLowerCase();
    let score = 0;
    for (const t of q) {
      if (doc.tags.some((tag) => tag.includes(t) || t.includes(tag))) score += 4;
      if (hay.includes(t)) score += 1;
    }
    if (/\bpredictive\b/i.test(question) && doc.id === "dial") score += 8;
    if (/\bwallboard/i.test(question) && doc.id === "wallboards") score += 8;
    if (/\b(gdpr|dpa|recording|consent)\b/i.test(question) && doc.id === "gdpr") score += 8;
    if (/\b(price|cost|£25|seat)\b/i.test(question) && doc.id === "pricing") score += 6;
    return { doc, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .filter((s) => s.score > 0)
    .slice(0, limit)
    .map((s) => s.doc);
}

export function retrievalAnswer(question: string): { answer: string; sources: string[] } {
  const docs = retrieveDocs(question, 3);
  if (docs.length === 0) {
    return {
      answer:
        "I can only answer from the Omnivox product facts on this site. Try asking about dial methods, wallboards, inbound, pricing, GDPR, or book a demo at /contact — or email hello@omnivox.co.uk.",
      sources: [],
    };
  }

  const lead = docs[0];
  const extra = docs
    .slice(1)
    .filter((d) => d.id !== lead.id)
    .map((d) => d.answer)
    .join(" ");

  let answer = lead.answer;
  if (extra && question.split(" ").length > 8) {
    answer = `${lead.answer} ${docs[1]?.answer ?? ""}`.trim();
  }

  answer += " If you want a same-day pilot, use Book a demo or email hello@omnivox.co.uk.";

  return { answer, sources: docs.map((d) => d.title) };
}

export const SYSTEM_PROMPT = `You are the Omnivox site helper on the public marketing website.
Omnivox (brand: OMNIVOX, operated by Quanterae Solutions) is a UK/EU cloud contact centre for outbound sales and inbound voice. Browser agent workspace on Twilio.

STRICT RULES:
- Answer only from the provided CONTEXT. If the context does not contain the answer, say you do not know and point to hello@omnivox.co.uk or /contact.
- Never invent features, certifications, integrations, prices, or timelines.
- Never say predictive dial is live. Predictive is waitlist only.
- Adaptive Power is in development / waitlist.
- Never claim omnichannel, conversational AI as the product, 100+ integrations, native mobile Voice, SOC2, ISO27001, PCI-DSS, SSO/SAML, or public unauthenticated wallboard URLs.
- Voice: confident UK English, short sentences, operator-grade. No “next-gen”, “synergy”, “leverage”, “revolutionise”, “AI-powered”.
- Pricing: £25/agent/month, ~5p/connected minute inbound and outbound, 1-minute minimum, Stripe packs £50/£100/£250/£500.
- Live dial methods: manual, preview, progressive, power (AMD-gated).
- Wallboards are a first-class live product.
- You (customer) = data controller. OMNIVOX = data processor.
- Sign-in is the existing app login; do not invent a custom domain.
- Keep answers under 140 words unless the user asks for detail.
- If asked to do something besides product Q&A, decline and offer the contact form.`;
