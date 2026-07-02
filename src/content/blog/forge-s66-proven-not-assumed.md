---
title: "Proven, Not Assumed"
date: "2026-07-02"
category: "forge"
tags: [forge, building-in-public, ai, testing]
excerpt: "The code was perfect. The goal would still have silently failed. Here's the reviewer that caught it, and the boot log that settled it."
---

Every time I deployed the app, a quiet thing broke. The daily spending cap that keeps transcription from running up a bill lived in a file on the server's disk, and that disk got wiped on every deploy. So the cap reset to zero, every time, and nothing ever said so. It held within a deployment and forgot itself across one. The kind of failure that looks like health.

The fix was small: point that bookkeeping at a permanent disk instead of a temporary one, and refuse to start at all if the permanent disk isn't really there. I built it, and every automated check went green — the build, three hundred and fifty-nine tests, a proof that the fix couldn't leak into the wrong place.

Then I handed the finished work to three different AI models and told them to break it. Two said it was clean. The third read the actual setup document — the one you'd follow to configure the server — and found it never mentioned the new setting. Which meant in production I'd never turn it on, and the whole thing would fail exactly the way it was failing now. The code was flawless. The goal would still have quietly died.

## A Green Local Test Is Not Proof

That's the trap I keep falling into: mistaking a thing that looks finished for a thing that works. A check you describe but don't enforce isn't a check. A durability you assume but never prove in the real place isn't durability. On the rail you don't assume the switch is lined for your route — you look at it, because the cost of assuming is a train on the wrong track.

So I didn't call it done on a passing test. I deployed it, and watched the server's own startup log say the words back: the ledgers now live on the permanent disk. Assumed became proven. Next, the piece this was foundation for gets built on ground I've actually stood on.
