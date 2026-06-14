import { z } from "zod";

/**
 * Single, validated source of truth for environment variables.
 * Backend vars are optional — when unset the matching service degrades
 * gracefully so the site still builds and runs (e.g. local dev, CI).
 */
const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Public (exposed to the browser)
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_CDN_URL: z.string().url().optional(),

  // MongoDB
  MONGODB_URI: z.string().min(1).optional(),

  // Redis
  REDIS_URL: z.string().min(1).optional(),

  // Resend (email)
  RESEND_API_KEY: z.string().min(1).optional(),
  CONTACT_FROM_EMAIL: z.string().min(1).optional(), // may be "Name <email>" form
  CONTACT_TO_EMAIL: z.string().email().optional(),

  // Cloudflare R2 (S3-compatible)
  R2_ACCOUNT_ID: z.string().min(1).optional(),
  R2_ACCESS_KEY_ID: z.string().min(1).optional(),
  R2_SECRET_ACCESS_KEY: z.string().min(1).optional(),
  R2_BUCKET: z.string().min(1).optional(),
  R2_ENDPOINT: z.string().url().optional(),

  // Privacy / abuse protection
  IP_HASH_SALT: z.string().min(16).optional(),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
});

export type Env = z.infer<typeof EnvSchema>;

let cached: Env | undefined;

export function env(): Env {
  if (cached) return cached;
  if (process.env.SKIP_ENV_VALIDATION === "true") {
    return process.env as unknown as Env;
  }
  const parsed = EnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues.map(
      (i) => `  - ${i.path.join(".")}: ${i.message}`,
    );
    throw new Error(`Invalid environment variables:\n${issues.join("\n")}`);
  }
  cached = parsed.data;
  return cached;
}
