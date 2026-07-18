---
title: "I Explained It Six Times Before I Wrote a Single Line"
date: "2026-07-18"
category: "encode"
tags: ["encode", "claude", "learning-in-public", "building-in-public"]
excerpt: "My first live Claude API call. I explained it flawlessly six times while the file sat empty, then found my best decisions trapped in dead comments."
draft: false
---

I sat down to write my first real Claude API call. One Node script: paste in my session notes, send them to Claude, get back a tightened draft and three title options. Small. Should have been quick.

It was not quick.

First I fought the machine, and the machine won the early rounds. I tried to run npm commands in a browser tab and got an actual "AccessDenied" page from Amazon. I typed a package.json edit straight into PowerShell and got a ParserError. Terminal, editor, browser — three windows, and for a while I couldn't tell which one wanted what.

Then I did the thing I'm good at. I explained the call back six different ways. The four fields — model, max_tokens, system, messages. Where the API key lives and why it never touches the browser. How the tokenizer chops words into pieces. All of it, cold, flawless.

The whole time, the actual file was empty.

![Two code panels. Left, greyed out: my four decisions written as // comments, labelled "the computer ignores these" — perfect notes, nothing ran. Right, live and running: the same values as real messages.create code, "now it runs" — a draft and three titles came back.](./E36-comments-vs-code.svg)

## Understanding A Thing Is Not The Same As Having Built It

Here's the part that got me. When I finally looked, every one of my decisions was sitting in the file as a `//` comment. Notes to myself. The computer runs code and skips comments — so it had been ignoring every good call I made. Nothing worked until those lines stopped being *about* the program and started *being* the program.

That's the lesson. I could explain the call six ways because explaining is safe and feels like progress. But the gap between "I get it" and "it runs" is where the last real bug hides, and you can't talk your way across it. You have to type.

So I typed. It ran. Claude sent back a tightened draft and three titles — and pulled one of my own lines for the list: "The gun was loaded yesterday; today I built the trigger." The tool quoted me back to myself.

Two hours that didn't feel like two. Next I get this thing off my laptop and onto the site itself, where it's supposed to live.
