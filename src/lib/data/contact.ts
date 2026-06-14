import "server-only";
import { getDb } from "@/server/db/client";
import { ContactMessageModel } from "@/server/db/schemas/contactMessage";
import { logger } from "@/lib/logger";

/** Persists a contact message. Returns false (no throw) when the DB is
 *  unavailable so the request can still succeed via email alone. */
export async function saveContactMessage(doc: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipHash: string | null;
  userAgent: string;
}): Promise<boolean> {
  const conn = getDb();
  if (!conn) return false;
  try {
    await conn; // ensure connected
    await ContactMessageModel.create({
      name: doc.name,
      email: doc.email,
      subject: doc.subject,
      message: doc.message,
      ipHash: doc.ipHash ?? undefined,
      userAgent: doc.userAgent,
    });
    return true;
  } catch (err) {
    logger.error("failed to persist contact message", { err: String(err) });
    return false;
  }
}
