// Quick harness — calls api/draft.js's handler directly with mock req/res.
// Verifies the two gates Miles wrote, without needing vercel dev.
import handler from "../api/draft.js";

process.env.ADMIN_KEY = "test123";

function mockRes(label) {
  return {
    _label: label,
    status(code) {
      this.code = code;
      return this;
    },
    json(body) {
      console.log(`[${this._label}] status=${this.code} body=${JSON.stringify(body)}`);
      return this;
    },
  };
}

// Test 1: wrong method
handler({ method: "GET", headers: {} }, mockRes("GET, no key"));

// Test 2: right method, wrong/missing key
handler({ method: "POST", headers: {} }, mockRes("POST, no key"));

// Test 3: right method, right key
handler({ method: "POST", headers: { "x-admin-key": "test123" } }, mockRes("POST, right key"));
