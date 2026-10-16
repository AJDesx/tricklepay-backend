// ---------------------------------------------------------------------------
// Print the effective configuration (#397).
//
// Diagnosing a configuration problem means reasoning about defaults and
// precedence scattered across config.ts. This script resolves the same
// Config loadConfig() would hand the server and prints it, so the answer is
// one command instead of re-deriving it from source.
//
// databaseUrl is the one field that can carry credentials (postgresql://
// user:pass@host/db); it is redacted with the same pattern error responses
// already use, so this script is safe to run against a real environment and
// to paste its output into a bug report or chat.
// ---------------------------------------------------------------------------

import { loadConfig } from "./config.js";
import { redactErrorMessage } from "./error-redaction.js";

function main(): void {
  const config = loadConfig();
  const redacted = { ...config, databaseUrl: redactErrorMessage(config.databaseUrl) };
  console.log(JSON.stringify(redacted, null, 2));
}

main();
