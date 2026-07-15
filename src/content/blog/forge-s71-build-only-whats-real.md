---
title: "Five Bugs, One Clean Screen, and Two Bars I Almost Faked"
date: "2026-07-15"
category: "forge"
tags: [forge, building-in-public, ai, testing]
excerpt: "The whole talk-to-your-phone loop went from dead to working live — then the design nearly tricked me into drawing data that didn't exist."
---

![Three macro bars — protein filled and real, carbs and fat left honestly empty, under the line "Build only what the engine returns."](/images/forge-s71-build-only-whats-real.svg)

Some days you fix one thing. This one, the whole machine was on the floor in pieces, and we put it back together live: phone mirrored to the screen, me watching the server logs, fixing, shipping, checking the glass again.

The feature is simple to say. Talk once, and the app sorts what you said into the right places. A meal goes to the food tracker. A thought goes to the journal. That's it. Except in production it was stone dead. Five bugs, stacked like a bad hand of cards. A secret that was never set, so the server threw a 500. A build that never reached the phone, so the mic hit old code. A file named ".audio" that the transcriber flatly refused. A wall of "not allowed" because I was signed in as the wrong account. And a screen that broke trying to open the very note it had just written.

We pulled them one at a time. Each fix went out for real, deployed and reloaded and re-checked on the phone, until I spoke a sentence into it and watched every piece land where it belonged.

![The capture screen reading "Here's what I heard," splitting a spoken meal into a Fuel chip](/images/forge-s71-heres-what-i-heard.png)

Then we built the fun part. Calories are scary numbers. So they're not calories anymore, they're Fuel Points. Ten calories to a point, so your whole day fits in a number you can hold in your head. Meals get filed under "Follow your ABCs": A, B, C for your three meals, S for a snack. Talk, and it fills your letters.

![Calories become Fuel Points, and meals file under A, B, C, and S](/images/forge-s71-fuel-points.svg)

![The white Fuel dashboard: a green ring of Fuel Points and the A/B/C/S meal slots](/images/forge-s71-fuel-dashboard.png)

And here's the part I have to keep, because a good day still needs a gut-check.

## Build only what the engine returns

The design I'd drawn had three neat little bars: protein, carbs, fat. Looked sharp. I was one keystroke from building all three, until I actually read what the food engine hands back. Energy and protein. That's the whole list. It doesn't estimate carbs or fat. Two of those three bars would have been pretty, confident, and completely invented.

So I didn't build them. Protein's real. Carbs and fat sit empty, honestly, until the engine can actually fill them.

That's the whole lesson. A chart is a promise. A bar says "this is true." If there's no data behind it, you didn't visualize anything, you drew a lie and dressed it in a nice color. Cheap to draw. Expensive the moment someone believes it.

Fix the machine. Ship the truth. Leave the empty bars empty until they're not.
