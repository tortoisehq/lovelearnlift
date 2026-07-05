---
title: "Four Strangers Read My Plan Before I Shipped It"
date: "2026-07-05"
category: "forge"
tags: [forge, building-in-public, ai, product]
excerpt: "I built a calorie tracker into my app and put it on my phone. The part worth telling is what four AIs caught before I shipped."
---

![An honest calorie estimate shown as a range, not a single fake-precise number](/images/forge-s68-fuel.svg)

I built the first real piece of a food tracker into my app today. You talk or snap a photo, it estimates the calories, and you tap once to fix what it got wrong. It's on my phone tonight, updating live without a trip through any app store.

But the feature isn't the part worth telling. The part worth telling is what happened before I shipped it.

I had four different AIs read my plan. Not my own in-house checker, the one that had already looked it over and said fine. Four outside ones, each in its own window, each told to tear the plan apart and assume it was wrong. They came back agreeing on the same thing my fast check had missed: I'd shaped the data for the screen, not for the vault it has to live in for the next twenty years. The "small tweak later" I'd quietly promised myself would have been a full rebuild.

## Kill your own plan before it costs you

So I did. I threw out my own design and rebuilt it the right way before a single screen reached my phone. That's the discipline I keep relearning, on the railway and building this alike: the thing that looks finished and the thing that is finished are two different things, and the gap between them is where everything gets lost.

There's a harder half. I also accused one of those AIs of inventing a piece of code that it said already existed. It was right. My own search was broken, and I'd trusted it over a straight answer. I had to say so out loud. Before you call someone else wrong, check your own instrument first.

Tomorrow the tracker gets its real brain wired in. The screen already knows the shape it's waiting for.
