import "server-only";
import Redis from "ioredis";
import { env } from "@/lib/env";
import { logger } from "@/lib/logger";

const g = globalThis as unknown as { _redis?: Redis | null };

/** Shared ioredis client, or `null` when REDIS_URL is unset. */
export function getRedis(): Redis | null {
  if (g._redis !== undefined) return g._redis;
  const url = env().REDIS_URL;
  if (!url) {
    g._redis = null;
    return null;
  }
  try {
    const client = new Redis(url, {
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false,
    });
    client.on("error", (err) => logger.error("redis error", { err: String(err) }));
    g._redis = client;
    return client;
  } catch (err) {
    logger.error("redis init failed", { err: String(err) });
    g._redis = null;
    return null;
  }
}

/**
 * Sliding-window rate limit. **Fails open** (allows the request) when Redis
 * is unavailable so an outage can't take the whole API down.
 */
export async function rateLimit(
  key: string,
  limit: number,
  windowSec: number,
): Promise<{ ok: boolean; remaining: number }> {
  const redis = getRedis();
  if (!redis) return { ok: true, remaining: limit };

  try {
    const now = Date.now();
    const windowKey = `rl:${key}`;
    const member = `${now}-${Math.random()}`;
    const cutoff = now - windowSec * 1000;

    const res = await redis
      .multi()
      .zremrangebyscore(windowKey, 0, cutoff)
      .zadd(windowKey, now, member)
      .zcard(windowKey)
      .pexpire(windowKey, windowSec * 1000)
      .exec();

    const count = (res?.[2]?.[1] as number) ?? 0;
    return { ok: count <= limit, remaining: Math.max(0, limit - count) };
  } catch (err) {
    logger.warn("rate limit check failed; failing open", { err: String(err) });
    return { ok: true, remaining: limit };
  }
}
