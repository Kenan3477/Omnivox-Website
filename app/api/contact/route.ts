import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  agentCount?: string;
  useCase?: string;
  currentStack?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.company?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Webhook placeholder — set CONTACT_WEBHOOK_URL in Vercel env to forward submissions
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "omnivox-website",
          timestamp: new Date().toISOString(),
          ...body,
        }),
      });

      if (!webhookRes.ok) {
        console.error("Webhook failed:", await webhookRes.text());
        return NextResponse.json(
          { error: "Failed to submit enquiry. Please email hello@omnivox.co.uk directly." },
          { status: 502 }
        );
      }
    } else {
      // Log in development / when no webhook configured
      console.log("Contact form submission:", {
        name: body.name,
        email: body.email,
        company: body.company,
        agentCount: body.agentCount,
        useCase: body.useCase,
        currentStack: body.currentStack,
        message: body.message,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
