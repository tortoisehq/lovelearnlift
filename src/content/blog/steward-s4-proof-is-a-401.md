---
title: "Proof Is a 401, Not a Thumbs-Up"
date: "2026-06-13"
category: "forge"
build: "steward"
tags: [forge, building-in-public, deploy, rail-worker]
excerpt: "A voice app that turns a rough shift into a filed grievance just went live — after the server twice tried to ship the wrong thing."
---

Quick recap of what I'm building, for anyone just tuning in: a voice app for rail workers. You talk into your phone about getting hosed at work, it interviews you, digs the exact rule out of the union agreement, and hands you back a grievance that's ready to file. A union rep that lives in your pocket and never sleeps through a night shift.

Today's job was unglamorous but huge: take the "brain" that already works on my laptop and get it running on the actual internet — behind a locked door, so nobody can ever read anyone else's grievances.

This is where computers are comedy. I told the server "go live." It cheerfully built the *wrong app* — twice — like handing someone your truck keys and watching them drive off in the neighbor's. Then it choked on one missing file it swore wasn't missing. Found the gremlin (a little inventory list that quietly fell out of the box during shipping), taped the hole, tried again. Third time: it lived.

## Proof Is a 401, Not a Thumbs-Up

The screen flashed "Deploy Complete!" with a happy green check. I didn't believe it. "Complete" is what the computer *says* — it isn't proof. So I knocked on the door without a key, and it slammed in my face: **401 — who are you, go away.** That rejection is the whole win. The old version let anyone wander in. Now the lock actually locks. You only trust a deploy when you poke it and it behaves.

**🚦 Road to launch**

**ALPHA** — just me, filing a real one from my phone:
- ✅ The brain (finds violations, cites the contract)
- ✅ Interview → written grievance
- ✅ Live, locked-down backend ← *today*
- ⬜ App on my phone + thumbprint login
- ⬜ Talk to it, hear it talk back
- ⬜ File a real grievance

**BETA** — hand it to the crew:
- ⬜ All of the above, solid enough for other people to lean on

Backend's live and locked. Next stop: get this onto an actual phone so I can log in with my thumb and admire the empty room I just built.
