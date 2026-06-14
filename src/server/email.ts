import "server-only";
import { Resend } from "resend";
import { env } from "@/lib/env";
import { logger } from "@/lib/logger";

let cached: Resend | null | undefined;

function getResend(): Resend | null {
  if (cached !== undefined) return cached;
  const key = env().RESEND_API_KEY;
  cached = key ? new Resend(key) : null;
  return cached;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sends a contact-form message via Resend. Returns false (no throw) when
 * email isn't configured or the send fails — caller decides how to respond.
 */
export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const resend = getResend();
  const from = env().CONTACT_FROM_EMAIL;
  const to = env().CONTACT_TO_EMAIL;
  if (!resend || !from || !to) {
    logger.warn("email not configured; skipping send");
    return false;
  }

  const { name, email, subject, message } = input;
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `New message from ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html:
        `<h2>New message from ${escapeHtml(name)}</h2>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` +
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    if (error) {
      logger.error("resend returned error", { err: String(error) });
      return false;
    }
    return true;
  } catch (err) {
    logger.error("email send failed", { err: String(err) });
    return false;
  }
}
