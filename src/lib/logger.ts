type Level = "debug" | "info" | "warn" | "error";

const order: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };
const min = order[(process.env.LOG_LEVEL as Level) ?? "info"] ?? order.info;

function log(level: Level, msg: string, meta?: Record<string, unknown>) {
  if (order[level] < min) return;
  const line = JSON.stringify({ level, msg, ...meta, ts: new Date().toISOString() });
  // eslint-disable-next-line no-console
  console[level === "debug" ? "log" : level](line);
}

/** Structured, level-aware JSON logger. Never log secrets, tokens, or PII. */
export const logger = {
  debug: (m: string, x?: Record<string, unknown>) => log("debug", m, x),
  info: (m: string, x?: Record<string, unknown>) => log("info", m, x),
  warn: (m: string, x?: Record<string, unknown>) => log("warn", m, x),
  error: (m: string, x?: Record<string, unknown>) => log("error", m, x),
};
