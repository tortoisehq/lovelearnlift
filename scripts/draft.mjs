// LOCAL-ONLY draft tool. Not deployed, not a server, not reachable by anyone
// but you running it on your own machine. Replaces the E38 admin.astro +
// api/draft.js public route (pulled per E38 decision: no reason for this to
// be internet-reachable while it's a single-user tool).
//
// Run:
//   node --env-file=.env.local scripts/draft.mjs path/to/session-notes.txt
//   cat notes.txt | node --env-file=.env.local scripts/draft.mjs
//
// Same call shape as the old draft.js — system prompt + one user message,
// direct fetch against the Anthropic REST API, no SDK dependency.

async function readInput() {
  const filePath = process.argv[2];
  if (filePath) {
    const fs = await import("node:fs/promises");
    return fs.readFile(filePath, "utf8");
  }
  // No file arg — read stdin.
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

const sessionText = (await readInput()).trim();

if (!sessionText) {
  console.error("No input. Pass a file path or pipe text in via stdin.");
  process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY not set. Run with --env-file=.env.local");
  process.exit(1);
}

const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    system: "No-fluff editor. Tighten my draft, keep my voice, then give me 3 title options.",
    messages: [{ role: "user", content: sessionText }],
  }),
});

if (!apiRes.ok) {
  console.error(`Upstream failure: ${apiRes.status}`);
  process.exit(1);
}

const data = await apiRes.json();
let draft = "";
for (const block of data.content) {
  if (block.type === "text") draft += block.text;
}

console.log(draft);
