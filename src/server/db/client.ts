import "server-only";
import mongoose from "mongoose";
import { env } from "@/lib/env";
import { logger } from "@/lib/logger";

// Cache the connection promise on globalThis so dev HMR and warm server
// processes reuse one connection instead of exhausting the pool.
const g = globalThis as unknown as { _mongoose?: Promise<typeof mongoose> };

/**
 * Returns the shared Mongoose connection promise, or `null` when no
 * MONGODB_URI is configured (DB is optional — callers degrade gracefully).
 */
export function getDb(): Promise<typeof mongoose> | null {
  const uri = env().MONGODB_URI;
  if (!uri) return null;

  g._mongoose ??= mongoose
    .connect(uri, { bufferCommands: false })
    .then((m) => {
      logger.info("mongodb connected");
      return m;
    })
    .catch((err) => {
      g._mongoose = undefined; // allow a retry on the next call
      logger.error("mongodb connection failed", { err: String(err) });
      throw err;
    });

  return g._mongoose;
}
