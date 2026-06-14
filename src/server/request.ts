import "server-only";
import { createHash } from "node:crypto";
import { env } from "@/lib/env";

/** Best-effort client IP from proxy headers (VPS behind nginx / Cloudflare). */
export function clientIp(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") ??
    headers.get("x-real-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

/**
 * Salted SHA-256 of an IP for use as a rate-limit key. Returns `null` when
 * IP_HASH_SALT isn't set (rate-limiting then degrades) — raw IPs are never
 * stored or used.
 */
export function hashIp(ip: string): string | null {
  const salt = env().IP_HASH_SALT;
  if (!salt) return null;
  return createHash("sha256").update(salt + ip).digest("hex");
}

/** User-agent string, length-capped to bound storage and log-injection risk. */
export function capUserAgent(headers: Headers): string {
  return (headers.get("user-agent") ?? "").slice(0, 256);
}
