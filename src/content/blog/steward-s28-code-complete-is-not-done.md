---
title: "Code-Complete Is Not Done"
date: "2026-07-17"
category: "forge"
build: "steward"
tags: [forge, building-in-public, rail-engineer, shipping]
excerpt: "A grievance report sat finished but broken for four sessions — the cure wasn't more review, it was pushing the deploy."
---

![The capture screen of a rail grievance app: an honest banner reads that these details become the member's written account and this is not the filed form, above the first fields of a violation-capture form.](/images/steward-s28-code-complete-is-not-done.png)

For four sessions, the most important screen in my rail grievance app was finished and broken at the same time. A member speaks or types what happened, and the app turns it into a cited report they review before filing. The code was done. The report never built. Every attempt died on the same server error.

The reflex is to review it again — read the code, hunt the clever bug, add another test. I did some of that. None of it was the fix. The fix was one command: push the backend deploy that had been sitting there, proven and reviewed, waiting for someone to actually ship it. I ran it, watched the health check go green, and drove the whole flow on a real phone. The report built. It even did the hard, honest thing: it cited a real contract article for the part it could ground, and refused to cite the parts it couldn't.

## Code-Complete Is Not Done

"Done" hides three meanings that quietly collapse into one — written, deployed, and used by a real person. They are not the same, and the gap between them is where good work goes to die. A feature that runs on my machine and never ships helps nobody. The discipline sounds boring and it is everything: kick the build, push the deploy, put it on the device, and watch it work before you call it finished.

That same day I stopped treating a custom date picker as clever and swapped it for the one every phone already has. The standard people already know beats the thing you invented. And I started rebuilding the report toward what a real grievance document looks like — from research, not a guess.

Next: put it in a crew member's hands and watch what breaks.
