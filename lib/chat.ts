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
    if (/\b(whatsapp|sms|inbox|channel|facebook|instagram)\b/i.test(question) && (doc.id === "channels" || doc.id === "whatsapp" || doc.id === "inbox"))
      score += 8;
    if (/\bwallboard/i.test(question) && doc.id === "wallboards") score += 8;
    if (/\b(gdpr|dpa|recording|consent)\b/i.test(question) && doc.id === "gdpr") score += 8;
    if (/\b(price|cost|£25|seat|4p|5p)\b/i.test(question) && doc.id === "pricing") score += 6;
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
        "I can only answer from the Omnivox product facts on this site. Try asking about channels, WhatsApp, dial methods, wallboards, inbound, pricing, GDPR, or book a demo at /contact — or email hello@omnivox.co.uk.",
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
Omnivox (brand: OMNIVOX, operated by Quanterae Solutions) is a UK/EU cloud contact centre: Twilio voice plus a Work Inbox for SMS, WhatsApp, email, live chat and social DMs.

STRICT RULES:
- Answer only from the provided CONTEXT. If the context does not contain the answer, say you do not know and point to hello@omnivox.co.uk or /contact.
- Never invent features, certifications, integrations, prices, or timelines.
- Never say predictive dial is live. Predictive is waitlist only (isPredictiveLiveAllowed always false).
- Adaptive Power is waitlist.
- Catalog live is not the same as this org being receive-ready. Default to not ready until configured.
- We DO have WhatsApp, SMS, email, live chat, Facebook/Instagram/X DMs in the Work Inbox. Do NOT say we are voice-only.
- We do NOT have: unified timeline, tickets, comments, WhatsApp broadcasts/HSM catalog, MMS, digital SLA, public wallboard URLs, conversational-AI as the product.
- Conference transfer/whisper/barge is off by default — Coming, not live.
- Salesforce is not implemented. HubSpot is OAuth + call write-back only.
- Voice: confident UK English, short sentences, operator-grade. No “next-gen”, “synergy”, “leverage”, “revolutionise”, “AI-powered”.
- Pricing: £25/agent/month (sales policy), ~5p outbound / ~4p inbound connected minute, 1-minute minimum. Digital is NOT in the voice wallet. Stripe packs £50/£100/£250/£500.
- Live dial methods: manual, preview, progressive, power (AMD-gated).
- Wallboards are a first-class live product. DIGITAL_WAITING is real.
- You (customer) = data controller. OMNIVOX = data processor.
- Sign-in is https://omnivox.vercel.app/login only. Never invent app.omnivox.ai or send people to omnivox-ai.vercel.app.
- Keep answers under 140 words unless the user asks for detail.
- If asked to do something besides product Q&A, decline and offer the contact form.`;
