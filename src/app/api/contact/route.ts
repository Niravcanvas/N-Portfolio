import { NextResponse } from "next/server";
import { ContactSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/server/redis";
import { clientIp, hashIp, capUserAgent } from "@/server/request";
import { saveContactMessage } from "@/lib/data/contact";
import { sendContactEmail } from "@/server/email";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ok = () => NextResponse.json({ ok: true });

export async function POST(req: Request) {
  // 1. Parse + validate body.
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const { name, email, subject, message, company } = parsed.data;

  // 2. Honeypot: bots fill `company`. Silently accept + discard so they can't
  //    detect the trap.
  if (company && company.trim().length > 0) {
    logger.info("contact honeypot triggered");
    return ok();
  }

  // 3. Rate limit by hashed IP (fails open if Redis is down).
  const ip = clientIp(req.headers);
  const ipHash = hashIp(ip);
  const { ok: allowed } = await rateLimit(
    `contact:${ipHash ?? ip}`,
    5, // 5 messages
    60 * 60, // per hour
  );
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  // 4. Persist + email (both degrade gracefully). Succeed if either lands.
  const userAgent = capUserAgent(req.headers);
  const [stored, emailed] = await Promise.all([
    saveContactMessage({ name, email, subject, message, ipHash, userAgent }),
    sendContactEmail({ name, email, subject, message }),
  ]);

  if (!stored && !emailed) {
    logger.error("contact message dropped — no sink available");
    return NextResponse.json(
      { error: "Could not send message. Please email directly." },
      { status: 503 },
    );
  }

  return ok();
}
