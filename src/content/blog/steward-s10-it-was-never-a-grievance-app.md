---
title: "It Was Never a Grievance App"
date: "2026-06-17"
category: "forge"
build: "steward"
tags: [forge, building-in-public, steward, voice]
excerpt: "Four sessions stuck at the wall, then the app talked back on a real phone — and the bug it surfaced changed what I think I'm building."
---

For four sessions the two-way voice loop existed everywhere except the one place it mattered: a phone in a railroader's hand. It compiled. It passed every check. It was reviewed clean by three separate models. And it had never once run on a device, because nobody had actually kicked the build. The wall was never the code. The wall was me parking the last step.

This session it landed. A locomotive engineer talks into the phone about what happened on the job. The app speaks a follow-up question back — out loud — listens for the spoken answer, asks the next, and turns the whole conversation into a cited grievance. Eight turns deep on the first real run, recognition clean, the thing finally doing what it was built to do.

Then the device did what no test could: it broke honestly. The report came back as an error. Pulling the phone's own logs and running a local repro of the brain, the cause was almost funny — a safety deadline I'd added to stop a hang was strangling a report that legitimately takes thirty-seven seconds, because I'd set the limit at thirty. A real workload, not a hang. Measured on hardware, fixed, reinstalled.

## It Was Never a Grievance App

Watching it work, the real shape showed up. This isn't a grievance app. It's an engine: speak it, and it fills the right rail form and sends it to the right person. Grievances are just the first form, and the hardest one — every article it cites has to be verified against the actual contract, or it stays silent. A leave request, a time claim, a defect report? Those are easier. Same engine, a new template, a new recipient.

Run the math on it and the case stops being subtle. A crew of ten thousand grievances, three in four accepted, a couple hundred dollars each — that's most of two million dollars recovered, against roughly a thousand dollars of compute. The cost is a rounding error.

The form a wrecked worker never sits down to write, written for them. One's proven. The rest are templates.
