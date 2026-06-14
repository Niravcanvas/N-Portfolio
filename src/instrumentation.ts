/**
 * Runs once on server startup. Re-validates env so a misconfigured runtime
 * fails fast with a readable error instead of surfacing as runtime `undefined`.
 */
export async function register() {
  const { env } = await import("@/lib/env");
  env();
}
