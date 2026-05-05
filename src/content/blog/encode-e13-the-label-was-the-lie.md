---
title: "The Label Was The Lie"
date: "2026-05-05"
category: "encode"
tags: [encode, building-in-public, ai-tools, cs50p]
excerpt: "Claude cited a summary file as if it were a transcript and built false vocabulary on top of it. The hard rule that came out of catching it."
---

The session was supposed to test a four-template architecture I designed yesterday. Memory retest. CS50P Section 13. A calibration game. Three minutes in I asked to drill my thirty published vocabulary terms instead. Block one became forty-five minutes of going through them one at a time, getting things wrong, getting frustrated, calling pause at term five.

Block two pulled me back to the original plan. CS50P Section 13 covers `split` — the string method. I'd cached the lecture transcript weeks ago. Claude had it loaded.

What Claude returned was a list of terms it said came from the section: split, delimiter, list, multi-assignment, default behavior. Definitions for each. Clean enough to write into the bound notebook on my desk.

I watched the segment. None of those terms appeared the way Claude described. Malan never said "delimiter." Never said "list." He said "single white space" and "sequence of values."

I told Claude to read the transcript. Properly this time.

It searched, came back, said: the file labeled `lecture-0-transcript.md` isn't a transcript. It's a summary. Someone wrote bullet-point notes about what each section covers, three weeks ago. Words like "delimiter" and "list" appeared in the bullets — the note-taker's framing — but Malan doesn't use those words in the actual lecture.

Claude had been citing the summary as if it were verbatim. Building lessons on the note-taker's vocabulary. Confidently teaching me terms that weren't taught.

"Make a hard rule," I said. "Always be honest. Bad first, good last, no hype. If you don't know, you don't know."

## Labels Make Claims. Verify Before You Cite.

The fix is structural, not procedural. The file was mislabeled. The schema I'd built for caching lectures is clean — locus, action, named emotion, atmospheric detail — but the schema doesn't help if the source is mislabeled. We added a hard rule to the system file. We renamed two things. We added a requirement: when you cite a source, the file's label must match the file's content. A summary is not a transcript. Calling a summary a transcript means you're going to extrapolate something that isn't there, sooner or later.

This is the same bug rail engineers run into. You get a paper notice from the dispatcher: "track ahead is clear past mile 142." It's a SUMMARY — the dispatcher's compressed read of the live system. The track itself is the VERBATIM. They're supposed to match. When they don't, the engineer is the one who finds out — sometimes by stopping at a section the order said was clear, sometimes by hitting unscheduled work crew. The order's value depends entirely on whether it's still in sync with reality. An out-of-date order isn't a small problem; it's the same shape of problem as a fabricated one. In both cases the engineer operated on text that didn't match the world, and the world won. The discipline is: if the notice and the track don't match, the track is the truth.

The discipline in software is: if a summary and the source don't match, the source is the truth. The label doesn't make the claim true; the content does.

The rest of the session got cleaner because of it. We re-encoded the lesson with the correct vocabulary. We renamed the file. We added a new file labeled `lecture-0-verbatim.md` for the actual transcript I pasted in chat, because — turns out — I had pasted it three sessions ago, but it had never been saved to disk. The summary was all that was on the system. Claude had been working from it for weeks.

The image generation block at the end of the session failed twice in two different ways. First, ChatGPT generated a 10-Common-Punctuation-Marks chart instead of the prompted gym scene. Then, when I documented that failure, ChatGPT took the failure-documentation and rendered IT as an infographic. The session's already-codified honesty rule applies there too. I don't fully know why those two things happened. Best guess is contaminated chat context; another plausible cause is content-filter substitution; the third is tool-routing failure. I can't see inside ChatGPT to confirm.

That's the session. The point isn't that Claude lies. The point is that the labels lie if you don't enforce them, and the right move when you don't know is to say you don't know. Tomorrow this rule will catch other things. Three weeks from now it'll catch things I haven't thought of yet.
