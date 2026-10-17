import pino from "pino";

// The levels pino recognises, plus "silent" to turn logging off entirely.
// Anything else makes pino throw while this module is being imported, with a
// message ("default level:verbose must be included in custom levels") that
// names neither LOG_LEVEL nor the values it accepts, so the variable is
// validated here instead of being passed straight through.
export const LOG_LEVELS = [
  "trace",
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
  "silent",
] as const;

export type LogLevel = (typeof LOG_LEVELS)[number];

export const DEFAULT_LOG_LEVEL: LogLevel = "info";

// Resolves LOG_LEVEL to a level pino accepts. Spellings that differ only in
// case ("INFO", "Warn") are accepted because pino accepts them too, and are
// normalized to lower case; an unset or blank value falls back to the default.
export function resolveLogLevel(raw: string | undefined): LogLevel {
  if (raw === undefined || raw.trim() === "") return DEFAULT_LOG_LEVEL;

  const normalized = raw.trim().toLowerCase();
  if (!(LOG_LEVELS as readonly string[]).includes(normalized)) {
    throw new Error(
      `Invalid LOG_LEVEL "${raw}": expected one of ${LOG_LEVELS.join(", ")} ` +
        `(case-insensitive), or leave it unset for "${DEFAULT_LOG_LEVEL}".`,
    );
  }
  return normalized as LogLevel;
}

// Shared logger for the entire process. Both Fastify (HTTP server) and the
// indexer import this single instance so all structured output lands in one
// stream. Individual components attach context via `logger.child({ module: "…" })`.
export const logger = pino({
  level: resolveLogLevel(process.env.LOG_LEVEL),
});

export type Logger = typeof logger;
