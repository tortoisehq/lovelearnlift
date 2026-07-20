// One real end-to-end call against draft.js's handler.
// Run with: node --env-file=.env.local scripts/test-draft-live.mjs
import handler from "../api/draft.js";

function mockRes() {
  return {
    status(code) { this.code = code; return this; },
    json(body) {
      console.log(`status=${this.code}`);
      console.log(body.draft ? body.draft : JSON.stringify(body));
    },
  };
}

const req = {
  method: "POST",
  headers: { "x-admin-key": process.env.ADMIN_KEY },
  body: {
    sessionText: "Today the endpoint gates finally worked. Method check, key check, both fired right. Tired but it shipped.",
  },
};

await handler(req, mockRes());
