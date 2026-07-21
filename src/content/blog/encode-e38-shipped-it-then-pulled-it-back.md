---
title: "Shipped It, Then Took It Back Down"
date: "2026-07-20"
category: "encode"
tags: ["encode", "claude", "learning-in-public", "building-in-public"]
excerpt: "Shipped a live Claude tool on the site, pulled it back to local-only the same day, and fixed the Learn page's stale quiz pitch while I was in there."
draft: false
---

I got the draft tool live today. Paste session notes into a page on the site, hit a button, an endpoint on the other end calls Claude, a tightened draft and three titles come back. Gates first, method check, key check, body check, then the real call. It ran on the actual site, gated behind an admin key, and I proved it end to end with a live test in the browser.

Then I looked at what I'd actually built. A public URL, on a real domain, waiting for a second user, guarded by a key I'd typed as `test123` to unblock testing and never gone back to change.

![Two panels. Left, a warm cream card labelled "BEFORE — live, public, waiting": lovelearnlift.com/admin, the key test123, an API key one guess away. Right, a dark card labelled "AFTER — local only": a terminal command running the same tool with no server and no route to find.](./E38-public-vs-local.svg)

My own rule says the teach-others layer comes after mastery, after the lane gets picked. Not now, not on project one. I wrote that rule myself in June and broke it in July without noticing, because shipping felt like progress and progress felt like permission to keep going.

So I pulled it. `/admin` is gone from the site. The same tool runs as a script on my own machine now, no server, nothing for a stranger to find. And since I was already in there breaking my own rules, I fixed the bigger one: the Learn page still sold itself as a masterclass with quizzes at three difficulties, weeks after I'd already moved to learning by building six real projects instead. Quizzes archived, not deleted. Learn now shows the actual series, one shipped, one building, four to come, because the site should say what's true, not what used to be.

P2 starts next session: an agent that can look something up and act on it.
