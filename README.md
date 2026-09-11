# OMNIVOX marketing site

Public site for **OMNIVOX** — a UK/EU cloud contact centre for outbound sales and inbound voice, operated by Quanterae Solutions.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Deployed on Vercel

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — dial methods, wallboard, inbound, comparison |
| `/features` | Live / Waitlist / Coming labels |
| `/wallboards` | Builder, TV mode, playlists, widgets |
| `/inbound` | DIDs, ACD, hours, IVR studio |
| `/pricing` | £25 seat + calculator |
| `/agencies` | Multi-org |
| `/trust` | Controller / processor |
| `/faq` | Carrier, minutes, predictive, GDPR |
| `/contact` | Demo / pilot form |
| `/privacy` `/terms` | Legal |

## Environment

| Variable | Description |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | Forward contact form submissions |
| `OPENAI_API_KEY` | Optional. Site helper uses product facts without it; with it, answers are phrased by the model against the same facts |
| `OPENAI_CHAT_MODEL` | Optional. Defaults to `gpt-4o-mini` |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional calendar embed on Contact |

Sign-in CTA points at `siteConfig.appLoginUrl` in `lib/constants.ts` (current Vercel app). Do not invent a custom domain.

## Build

```bash
npm run build
npm start
```

## Licence

Proprietary — Omnivox / Quanterae Solutions
