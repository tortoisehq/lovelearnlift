// POST /api/draft — the counter between the browser and the kitchen.
// The browser orders here; the ANTHROPIC_API_KEY never leaves the kitchen.
//
// CONTRACT
//   Headers:  x-admin-key: <secret>        (must match process.env.ADMIN_KEY)
//   Body:     { "sessionText": "..." }
//   200 →     { "draft": "<Claude's reply>" }
//   405 →     wrong method (anything but POST)
//   401 →     bad/missing admin key
//   400 →     missing sessionText
//   500 →     upstream failure
//
// Gates [1]-[3] are Miles's, hand-written and tested E38. The Claude call below
// reuses the exact pattern Miles wrote and shipped himself at E36 (draft.js) —
// graduated per today's rule: write once, ship twice, then it's fair to reuse.
// E38 note: calls the REST API directly via fetch instead of @anthropic-ai/sdk —
// the SDK's install kept corrupting on this sandbox's Windows mount (same class
// of quirk as E37's git index.lock). fetch is built into Node; zero install risk.

// [1] EXPORT — one default function named handler, taking (req, res).
//     Vercel's law: this signature is how the platform hands you the request.
export default async function handler(req, res) {

  // [2] METHOD GATE — if req.method is not "POST", respond 405 and return.
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST only" });
    return;
  }

  // [3] KEY GATE — if the admin key header doesn't match, respond 401 and return.
  if (req.headers["x-admin-key"] !== process.env.ADMIN_KEY) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  // [4] BODY GATE — no sessionText, no work to do.
  const { sessionText } = req.body || {};
  if (!sessionText) {
    res.status(400).json({ error: "sessionText required" });
    return;
  }

  // [5] THE CALL — same shape as E36: system prompt sets the job, one user
  // message carries the raw session text, reply comes back as content blocks.
  // Same contract as the SDK, just spoken directly over HTTP.
  try {
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
      res.status(500).json({ error: "upstream failure" });
      return;
    }

    const data = await apiRes.json();
    let draft = "";
    for (const block of data.content) {
      if (block.type === "text") draft += block.text;
    }

    res.status(200).json({ draft });
  } catch (err) {
    res.status(500).json({ error: "upstream failure" });
  }
}
