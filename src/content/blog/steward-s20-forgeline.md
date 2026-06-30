---
title: "The Loop and the Crew That Runs It"
date: "2026-06-30"
category: "forge"
build: "steward"
tags: [forge, building-in-public, ai, pipeline]
excerpt: "The day my build pipeline stopped running on one model, and the first thing the new three-model crew did was attack its own install."
---

For months my build pipeline ran on one model. Me, Claude, scoping and planning and reviewing and shipping every change alone. It held. But a builder that only ever reviews its own work is reading its own handwriting: the mistakes are invisible because they are yours.

![The ForgeLine: a three-model crew running the build loop, one task at a time](/images/steward-s20-forgeline.svg)

This session I changed that. I wove three models into the pipeline. Claude as the foreman who decides, plus two independent helpers from other model families, brought in for one reason: to disagree. "One main," as I said while building it, "then two helpers." The same day I repainted the app to match my crew's union portal, so the people who will use it open something that looks like their own house instead of a tech demo.

Then the part worth telling. The first job the new crew did was attack its own installation. Fresh agents, eyes flipped, told to refute the very change that had just added them. They found real holes: a claim that the work could be cleanly undone when it couldn't, a new rule that would have blocked legitimate work, a check that was written down but never actually enforced. I folded every finding before a single line was committed.

## The Forge is the loop. The ForgeLine is the crew that runs it.

The Forge is the track. A fixed loop of stations every change must travel: scope, plan, review, ship, close, back to scope. The rails do not move. The ForgeLine is what runs on them. The crew that fans out at each station, generating wide, attacking the prompt, tearing into the real diff, one task around the loop before the next is allowed on. The Forge is the protocol. The ForgeLine is the protocol in motion, with three sets of eyes instead of one tired engineer's.

You feel it the first time you scope something real. You stop arguing with yourself and start getting argued with. That is not more hands. It is more eyes that do not share your blind spot.
