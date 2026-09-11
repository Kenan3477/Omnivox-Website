import { NextResponse } from "next/server";
import { retrieveDocs, retrievalAnswer, SYSTEM_PROMPT } from "@/lib/chat";

interface ChatBody {
  message?: string;
  history?: { role: "user" | "assistant"; content: string }[];
}

const buckets = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const rec = buckets.get(ip);
  if (!rec || now > rec.reset) {
    buckets.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (rec.count >= 20) return false;
  rec.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many questions. Try again in a minute, or email hello@omnivox.co.uk." }, { status: 429 });
    }

    const body: ChatBody = await request.json();
    const message = body.message?.trim() ?? "";
    if (message.length < 2 || message.length > 600) {
      return NextResponse.json({ error: "Ask a short product question." }, { status: 400 });
    }

    const history = (body.history ?? []).slice(-6);
    const docs = retrieveDocs(message, 5);
    const context = docs.map((d) => `### ${d.title}\n${d.answer}`).join("\n\n");

    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      const completion = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openaiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
          temperature: 0.2,
          max_tokens: 320,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "system", content: `CONTEXT:\n${context}` },
            ...history.map((h) => ({ role: h.role, content: h.content })),
            { role: "user", content: message },
          ],
        }),
      });

      if (completion.ok) {
        const json = (await completion.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const text = json.choices?.[0]?.message?.content?.trim();
        if (text) {
          return NextResponse.json({ answer: text, mode: "llm" });
        }
      }
    }

    const { answer } = retrievalAnswer(message);
    return NextResponse.json({ answer, mode: "facts" });
  } catch {
    return NextResponse.json({ error: "Could not answer just then. Email hello@omnivox.co.uk." }, { status: 400 });
  }
}
