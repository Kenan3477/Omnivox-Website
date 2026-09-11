export type ChatDoc = {
  id: string;
  title: string;
  tags: string[];
  answer: string;
};

export const chatDocs: ChatDoc[] = [
  {
    id: "what",
    title: "What Omnivox is",
    tags: ["what", "omnivox", "product", "platform", "contact centre", "dialer", "who", "omnichannel"],
    answer:
      "Omnivox is a UK/EU cloud contact centre: Twilio voice (preview, progressive, power + AMD, inbound ACD/IVR) and a shared Work Inbox for SMS, WhatsApp, email, live chat, Facebook Messenger DMs, Instagram DMs and X DMs. Catalog has eight channels live in code. An org is only receive/send ready after numbers, WABA, mailbox, widget key or social tokens are configured. Not a Genesys/Zendesk suite, not a Salesforce phone, not a conversational-AI platform, not one-customer-one-timeline.",
  },
  {
    id: "not",
    title: "What Omnivox is not",
    tags: ["not", "tickets", "comments", "broadcast", "unified", "timeline", "mms", "soc2", "predictive live", "ai platform"],
    answer:
      "Do not buy Omnivox for tickets, Instagram/Facebook comments, WhatsApp broadcasts or a stored HSM catalog, MMS, a unified timeline, digital SLA widgets, public unauthenticated wallboard URLs, native WhatsApp without Twilio WABA, or live statistical predictive. AI Voice Agent is a bounded inbound Pilot — not the product identity. SOC2 / ISO27001 / PCI / SSO are not claimed.",
  },
  {
    id: "channels",
    title: "Channels / Channel Types",
    tags: ["channel", "channels", "catalog", "readiness", "whatsapp", "sms", "email", "chat", "facebook", "instagram", "x", "inbox"],
    answer:
      "Admin → Channels → Channel Types is an 8-tile grid. Live in catalog: Voice, SMS, WhatsApp, live chat, email, Facebook DMs, Instagram DMs, X DMs. Catalog live ≠ org-ready. Readiness is GET /api/omni/catalog + GET /api/omni/readiness. There is no product page named Omnichannel matrix. Agents handle digital in Work → Inbox, not on the admin grid.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    tags: ["whatsapp", "waba", "24h", "hx", "template", "meta"],
    answer:
      "WhatsApp is live via Twilio WABA. Free text only inside Meta’s 24h customer-care window. Outside the window: approved Twilio Content SID (HX…) or SMS fallback. Voice call does not open Meta’s window. No broadcasts, no stored HSM catalog. After a voice disposition you can send a WhatsApp template or SMS fallback.",
  },
  {
    id: "inbox",
    title: "Work Inbox",
    tags: ["inbox", "work", "thread", "omni", "conversation", "claim"],
    answer:
      "Work → Inbox. Filters Open / Mine / Unassigned / Closed and channel chips. One OmniConversation per channel — two SMS threads for the same mobile collapse; SMS and WhatsApp for the same number stay two rows. Inbox actions: claim / close / reply. Voice wrap codes are separate. Same /work page as My Interactions; an active call forces My Interactions. Not the same contact card.",
  },
  {
    id: "pricing",
    title: "Pricing",
    tags: ["price", "pricing", "cost", "seat", "£25", "25", "bundle", "unlimited", "fair use"],
    answer:
      "£25 per agent per month is sales policy (not a Stripe per-seat SKU in the app). Prepaid voice credits: about 5p per connected outbound minute, 4p inbound (code defaults), one-minute minimum. Digital (SMS/WhatsApp/email) is not in the Call Credits wallet — do not invent a WhatsApp pence rate. Stripe packs £50, £100, £250, £500. Optional seat + monthly credit bundles.",
  },
  {
    id: "minutes",
    title: "How minutes are billed",
    tags: ["minutes", "credits", "5p", "4p", "wallet", "billing", "top up", "stripe", "connected", "inbound"],
    answer:
      "Voice only in the prepaid wallet. Outbound ~5p/min, inbound ~4p/min, 1-minute minimum. Usage shows in Admin → Call Credits. SMS / WhatsApp / email are not deducted there. Top up via Stripe packs or a pilot credit grant. We run Twilio — no BYOC.",
  },
  {
    id: "carrier",
    title: "Do I need a carrier?",
    tags: ["carrier", "byoc", "twilio", "did", "number", "telecom", "provider"],
    answer:
      "No. Omnivox includes platform-managed UK numbers and telephony. There is no BYOC and no multi-carrier option. We run Twilio. You buy credits and dial.",
  },
  {
    id: "dial",
    title: "Dial methods",
    tags: ["preview", "progressive", "power", "manual", "click to call", "adaptive", "predictive", "amd", "dial"],
    answer:
      "Live today: manual / click-to-call, preview, progressive (1:1), and power (ratio > 1, AMD-gated). Adaptive Power is waitlist (flag default false). Predictive (statistical / multi-line) is not shipped — isPredictiveLiveAllowed() is always false. Never treat predictive as live.",
  },
  {
    id: "amd",
    title: "Answering machine detection",
    tags: ["amd", "voicemail", "machine", "answering", "human"],
    answer:
      "Twilio AMD is live. Human vs machine routing so agents are not burned on voicemail. It sits next to Power dial — that is why auto-dial is usable on a real floor.",
  },
  {
    id: "wallboards",
    title: "Wallboards",
    tags: ["wallboard", "dashboard", "tv", "playlist", "widget", "kpi", "floor", "digital waiting"],
    answer:
      "Custom wallboards are a first-class product. Builder, TV mode, playlist dwell, shareable view links, role templates, ~40 widgets. DIGITAL_WAITING is real: inbox waitingOnAgent in the last 24h. Not per-channel WhatsApp tiles. Not public unauthenticated kiosk URLs, not HTML injection.",
  },
  {
    id: "inbound",
    title: "Inbound / ACD / IVR",
    tags: ["inbound", "acd", "ivr", "queue", "did", "hours", "voicemail", "ring group", "flow"],
    answer:
      "Inbound is a contact-centre stack: platform-managed UK DIDs, queues, overflow, ring groups, hours, voicemail, visual flow builder (hours, IVR, collect, audio, TTS, queue, voicemail, end, transfers). Conference transfer / whisper / barge is off by default. AI Voice Agent is a bounded inbound Pilot.",
  },
  {
    id: "workspace",
    title: "Agent workspace",
    tags: ["agent", "workspace", "softphone", "webrtc", "disposition", "callback", "status"],
    answer:
      "Browser WebRTC softphone. Click-to-call, mute/hold/keypad/recording, contact card, scripts, voice wrap codes, callbacks, statuses (Available, Unavailable, Break, Lunch, Training, Meeting). Digital is a separate Inbox view on /work.",
  },
  {
    id: "gdpr",
    title: "GDPR, DPA, recording",
    tags: ["gdpr", "dpa", "privacy", "controller", "processor", "recording", "consent", "tps", "pecr", "dnc", "2fa"],
    answer:
      "You are the data controller. Omnivox is the processor. DPA at onboarding. UK/EU GDPR. PECR and TPS remain your job. DNC is enforced before dial. Recording is configurable; consent is yours. 2FA is live for admins when ENABLE_2FA is on. We do not claim SOC 2, ISO 27001, PCI-DSS, or SSO/SAML.",
  },
  {
    id: "pilot",
    title: "Pilot and demo",
    tags: ["pilot", "demo", "onboard", "credits", "same day", "trial"],
    answer:
      "Qualified pilots get same-day onboarding, a £50 voice-credit grant (manual, not the £10 starter env default), and white-glove setup. Login is IP-whitelisted; self-serve /WL. No public sandbox. Book a demo from Contact or email hello@omnivox.co.uk. Sign-in: https://omnivox.vercel.app/login.",
  },
  {
    id: "agencies",
    title: "Agencies",
    tags: ["agency", "agencies", "multi-org", "client", "invoice"],
    answer:
      "Agencies run multiple client organisations: separate users, contacts, campaigns, call data, credit wallets, and per-org DIDs/accounts. No reseller channel-pack SKU. £25/seat per client agent. Wallboards can sit on each client floor.",
  },
  {
    id: "integrations",
    title: "Integrations",
    tags: ["integration", "zoho", "salesforce", "hubspot", "api", "webhook", "stripe"],
    answer:
      "Live: Stripe (billing), Twilio (voice/SMS/WhatsApp), Zoho CRM (OAuth import). HubSpot is live-narrow: OAuth plus completed calls written as call engagements — not a HubSpot-native phone. Salesforce is not implemented. Webhooks/API keys have a UI; we do not sell a public developer platform.",
  },
  {
    id: "mobile",
    title: "Mobile",
    tags: ["mobile", "ios", "android", "app store", "pwa"],
    answer:
      "Agents work in the browser (WebRTC). Expo WebView / PWA-ish wrapper only. No App Store / Play Store Voice app. Native mobile is Coming.",
  },
  {
    id: "coaching",
    title: "Supervisor tools",
    tags: ["whisper", "barge", "takeover", "listen", "coaching", "ai disposition", "conference"],
    answer:
      "Conference bridge is off by default. Until it is on for a deploy, transfer / listen / whisper / barge return 501. AI dispositioning and live coaching transcripts are Coming — not the product identity.",
  },
  {
    id: "signin",
    title: "Sign in",
    tags: ["sign in", "login", "account", "whitelist"],
    answer:
      "Sign in at https://omnivox.vercel.app/login. Do not use omnivox-ai.vercel.app or froniter-ai-frontend.vercel.app. The login is IP-whitelisted; request access via /WL. For a new org, book a demo rather than self-serve signup.",
  },
  {
    id: "contact",
    title: "Contact",
    tags: ["email", "hello", "contact", "sales"],
    answer:
      "Email hello@omnivox.co.uk or use the form on /contact. We typically reply within one UK business day — often the same day.",
  },
];

export const suggestedQuestions = [
  "Do you have WhatsApp?",
  "Is predictive live?",
  "How are minutes billed?",
  "Do you have wallboards?",
  "What’s included for £25?",
];
