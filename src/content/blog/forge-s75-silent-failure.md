---
title: "It Wasn't Broken. It Was Quiet."
date: "2026-07-20"
category: "forge"
tags: [forge, building-in-public, ai, testing]
excerpt: "I called my own app three times before I found out it had been eating my data the whole time."
---

![Two phone calls side by side: a short one split into separate filed pieces, a long one collapsed into a single undivided block with no error shown](/images/forge-s75-silent-failure.svg)

I called my own app three times before I found out it was eating my data.

The idea is simple enough. I phone a number, talk for a few minutes about my day — what I ate, how I trained, what's in my head. It transcribes the call, splits what I said into pieces, and files each piece where it belongs. Food goes to the food tracker. Reflections go to the journal.

Saturday it worked. Sixty-nine seconds, five pieces, everything landed exactly where it should.

Monday I talked for four and a half minutes and the whole thing collapsed into one block of text. No error. No warning. The app looked completely fine.

It came down to one number. The model that splits my transcript had a ceiling of 512 tokens on its answer. A short call fits under that. A long call doesn't. It ran out of room mid-sentence, its answer stopped being readable, and the code did exactly what it was built to do — it failed safely and dumped everything into the journal rather than risk losing a word.

Safe, but silent. That's the part that got me.

## Silent failures are the expensive ones

Here's what actually stung. The code already knew. There's a flag in there that gets set when the AI can't sort a capture properly. It's calculated, it's handed along, and then nothing reads it. Nobody ever wired it to the screen.

So for two days the app told me nothing was wrong, because the only part that knew was talking to itself.

The fix wasn't to give the model more room. I had four different AI models pull the thing apart and every one of them said raising the ceiling would make it worse — more pieces, and the extra ones would end up somewhere I can't see. So instead we made it say less. There was a field it had been generating on every single call that nothing anywhere ever read. Deleted it. Suddenly there was room.

![A phone screen showing food logged by voice, with calorie and protein ranges rather than exact numbers](/images/forge-s75-food-landed.svg)

Called it again tonight. Five minutes and ten seconds, longest one yet. My food showed up on my phone with calories on it for the first time since I built the thing.

Now I'm going back through the rest of it, looking for what else in there knows something and isn't saying it.
