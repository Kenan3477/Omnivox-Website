export type ChannelId =
  | "voice"
  | "sms"
  | "whatsapp"
  | "chat"
  | "email"
  | "facebook"
  | "instagram"
  | "x";

export type ChannelRecord = {
  id: ChannelId;
  name: string;
  catalogLive: true;
  direction: "Both";
  agentView: string;
  routing: string;
  widget: string;
  setup: string;
  orgReadyHint: string;
  never: string;
  limits: string[];
};

/** Admin → Channels → Channel Types. Catalog live ≠ this org can receive tomorrow. */
export const channelCatalog: ChannelRecord[] = [
  {
    id: "voice",
    name: "Voice",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → My Interactions + queues. Softphone WebRTC. Not an OmniConversation.",
    routing: "ACD, overflow, ring groups, flows/IVR, hours, voicemail.",
    widget: "Live calls, occupancy, AMD, pacing.",
    setup: "Platform DID on the org.",
    orgReadyHint: "Needs a platform DID on the org.",
    never: "No BYOC. Twilio only.",
    limits: ["Twilio voice only", "No customer carrier"],
  },
  {
    id: "sms",
    name: "SMS",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter SMS.",
    routing: "DID must be SMS-capable and have an SMS campaign. Digital route + schedule.",
    widget: "Inbox report; Digital waiting.",
    setup: "SMS-capable DID + smsCampaignId.",
    orgReadyHint: "Needs an SMS-capable number (UK 07 / Twilio sms:true) plus campaign. 01/02 landlines are voice-only unless sms:true.",
    never: "No MMS product. Self-send to the org number is blocked.",
    limits: ["No MMS", "Closed threads reuse then reopen"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter WhatsApp.",
    routing: "Twilio WABA + campaign on the DID. Digital route + schedule.",
    widget: "Inbox report; Digital waiting.",
    setup: "Twilio WABA + number. Outside 24h: HX Content SID.",
    orgReadyHint: "Needs WABA + number configured on this org. Catalog live is not org-ready.",
    never: "No broadcasts, no stored HSM catalog, no native WhatsApp without Twilio WABA. Voice does not open Meta’s 24h window.",
    limits: [
      "24h customer-care window",
      "Free text only inside the window",
      "Outside window: approved Twilio Content SID (HX…) or SMS fallback",
    ],
  },
  {
    id: "chat",
    name: "Live chat",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter Chat.",
    routing: "Embed iframe /chat-widget?key=…. Campaign required. Org from widget key.",
    widget: "Inbox report; Digital waiting.",
    setup: "Widget key + campaign.",
    orgReadyHint: "Needs a widget key on the org.",
    never: "Own widget, not Intercom.",
    limits: ["Visitor body does not choose the org"],
  },
  {
    id: "email",
    name: "Email",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter Email.",
    routing: "Mailbox + campaign. Inbound parse (SendGrid/Mailgun). Replies need SMTP.",
    widget: "Inbox report.",
    setup: "Mailbox + SMTP to send.",
    orgReadyHint: "Needs a mailbox configured. Internal welcome/reset From is a separate path.",
    never: "Not a helpdesk ticket product.",
    limits: ["SMTP required to send"],
  },
  {
    id: "facebook",
    name: "Facebook",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter Facebook.",
    routing: "Page ID + access token. Webhook by Page ID. Social account + campaign.",
    widget: "Inbox report.",
    setup: "Page ID + access token.",
    orgReadyHint: "Needs a Page token on this org. Catalog live ≠ Facebook live for a demo org.",
    never: "DMs only. Not Page comments, ads, or feed.",
    limits: ["Messenger DMs only"],
  },
  {
    id: "instagram",
    name: "Instagram",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter Instagram.",
    routing: "Professional account. Same Meta webhook, account ID.",
    widget: "Inbox report.",
    setup: "Professional account token.",
    orgReadyHint: "Needs a professional IG account token.",
    never: "DMs only. Not comments, story replies, or ads.",
    limits: ["DMs only"],
  },
  {
    id: "x",
    name: "X",
    catalogLive: true,
    direction: "Both",
    agentView: "Work → Inbox, channel filter X.",
    routing: "X user id + token. Account Activity webhook.",
    widget: "Inbox report.",
    setup: "X user id + token.",
    orgReadyHint: "Needs X tokens on this org.",
    never: "DMs only. Not tweets or mentions.",
    limits: ["DMs only"],
  },
];

export const channelNever = [
  "One customer, one timeline, any channel",
  "Tickets",
  "Instagram or Facebook comments",
  "WhatsApp broadcasts / stored HSM catalog",
  "MMS",
  "TikTok, LinkedIn, Telegram",
  "Digital SLA widgets",
  "Public unauthenticated wallboard URLs",
];
