---
title: "Parked Isn't Stalled"
date: "2026-07-15"
category: "forge"
build: "steward"
tags: ["steward", "building-in-public", "rail", "ai"]
excerpt: "I plugged my phone in to harden my grievance app, and my own review process talked me out of shipping the big thing."
---

![A rail signal held at stop beside three green check marks, meaning the review caught three problems before they shipped](/images/steward-s27-parked-isnt-stalled.svg)

I plugged my phone into the laptop and walked through Steward the way a tired crew member would — cold, from the login screen in.

The plan was to make the app bulletproof. What actually happened is I ended up dictating the real grievance form out of my own head — every field my local's "Submit a Violation" form actually asks for. Turns out the app only knew about a third of them. Ten fields where the real thing has thirty. That's the kind of gap you only see when you stop reading code and start using the thing.

So I scoped the rebuild. And then my own review process stopped me. Three times.

First it caught that adding those fields means a real database migration on live member data, not a quick screen change. I'd have missed that and broken the save. Then it caught that wiring the violation list straight to citations could quote an article the agreement doesn't support — and a wrong citation lands on a stranger, not on me. Then, on the login side, it found a hole where a lost or handed-off phone could open straight into another member's grievances with no lock at all.

None of that shipped. It got parked, with the reasons written down.

## Parked isn't stalled, it's the gate doing its job

The one thing I did ship was the login flow. Full crest animation, then the sign-in screen, and no fingerprint prompt jumping at you — you tap "Use fingerprint" when you want it. I built it, the review caught a real bug in it, I fixed it, and I watched it work on my actual phone.

Some days the win is the code. Today the win was a reason not to write it yet.
