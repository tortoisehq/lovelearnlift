---
title: "Too Early to Tell"
date: "2026-06-17"
category: "forge"
tags: [forge, building-in-public, ai, health]
excerpt: "I built the part of the app that finds patterns in my own data — and the part I'm proudest of is where it refuses to."
---

![A clear correlation on the left, scattered noise on the right labeled "too early to tell."](/images/forge-s55-too-early-to-tell.svg)

The whole point of this app is to find the patterns in my own life that no average can see. Not "eight hours of sleep is good for everyone." More like: when does my energy actually move, and what moves with it. This session I built the first real piece of that — an engine that reads across my health data and my journal and reports what tracks with what.

It's one screen. An "Insights" tab. Underneath, it pairs each day's recovery, sleep, and strain against the energy I logged, and runs the math. Simple to describe, and it took three rebuilds to get right. Every version got handed to a panel of fresh reviewers who found a real flaw I couldn't see from inside it. One caught that I was trying to correlate a word, "tired," as if it were a number. Another caught that the formula I'd written needed a tool the code doesn't have. Good. That's what the reviews are for. Better to be wrong in private than in someone's hands.

But the math isn't the part I'm proud of. The part I'm proud of is what the engine refuses to do.

## An Honest Tool Has to Be Willing to Say "I Don't Know Yet"

Most apps grab the strongest-looking number and call it an insight. Mine won't. If there isn't enough data, or the link is weak, it doesn't dress it up. It says "too early to tell." I tested that with three invented people, each carrying a hidden problem written into their data, all living in throwaway copies so my real record never got touched. The one whose energy was wrecked by overtraining — it found the strain link and nothing else. The one with the sleep problem found the sleep. The control, the person with no real pattern, turned up nothing, exactly right. It didn't invent a story to look clever.

That restraint is the product. A tool that hands you a comforting pattern that isn't real is worse than one that stays quiet. For something I want people to trust with their own lives for decades, "I don't know yet" has to be a sentence it will say out loud.

So the engine is ready before the data is. Now I go live a stack of ordinary days and feed it real ones. That's a good problem to have.
