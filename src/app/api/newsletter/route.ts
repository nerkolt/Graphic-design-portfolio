import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; source?: string };
    const email = body.email?.trim().toLowerCase();
    const source = body.source === "modal" ? "modal" : "footer";

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ ok: false, message: "Add a valid email address." }, { status: 400 });
    }

    if (process.env.NEWSLETTER_WEBHOOK_URL) {
      const response = await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          site: "nour-ltaief-portfolio",
          subscribedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, message: "Newsletter service is not responding." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Subscribed. Watch for the next portfolio drop.",
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Could not read this signup." }, { status: 400 });
  }
}
