---
title: "I Went Under the Hood"
date: "2026-07-21"
category: "encode"
tags: ["encode", "machine-learning", "learning-in-public", "andrew-ng"]
excerpt: "Changed my study track to Andrew Ng's ML Specialization, repointed the site to match, then spent three hours building tools instead of learning."
draft: false
---

I've spent months building on top of these models. Today I started going underneath them.

The study track moved: off Anthropic's Claude course series, onto Andrew Ng's Machine Learning Specialization. Three courses, ten weeks, starting from what the word "learning" even means. The whole site got repointed to match — homepage, Learn hub, the skills tracker on my Hire page. If you'd loaded it this morning it would have told you I was working through Claude 101. That was true a week ago.

This is the fourth time I've changed arcs. CS50 Python, then a Google data analytics cert, then the Anthropic courses, now this. I'm aware of how that reads.

## Why this one is different

The first three all died the same way: I stopped and never formally quit, so the site kept advertising something I wasn't doing. The doc drifted away from the work and nobody was reading the doc.

This time I closed the previous one properly. The Claude course project series was parked at a clean boundary — one project shipped, nothing half-open. The certifications I actually earned stayed on the site, because I earned them. The old quiz section didn't get deleted; it got an archive banner explaining what it was and pointing at what I'm doing now.

That last bit mattered more than it sounds. My instinct was to delete the quizzes — they contradicted the new framing and they were cluttering things up. Then I looked closer: those pages back seven live redirects, and one of them represents a certification with my name on it. Deleting would have destroyed something real to tidy up something inconvenient.

**Rebrand by reframing, not deleting.** If the superseded work was real, say what it was and move on. Don't pretend it didn't happen.

## The actual learning

Arthur Samuel, 1959: machine learning is *the field of study that gives computers the ability to learn without being explicitly programmed.* He wrote a checkers program in the fifties, had it play tens of thousands of games against itself, and it ended up beating him. He wasn't a good checkers player. That turned out not to matter.

I got a few things wrong today and they're worth writing down.

**First one.** I said that if enough people talk to an AI system rudely, it'll learn a negative personality — that we're building our own demons. That's wrong, and it's wrong in a way that turns out to be the most useful thing I learned all day. A deployed model's weights are frozen. Nothing I say to it today changes it tomorrow. Learning already happened, before it shipped.

That splits into two steps that every algorithm in this course has: **fit** and **predict**. Fit is Samuel's program playing ten thousand games against itself. Predict is it sitting down across from Samuel and winning.

**Second one.** I explained supervised learning as: feed in the features, then label the targets. There's no *then*. The answers are already attached before training starts — somebody wrote them in advance. That's the entire reason it's called *supervised*. There's a supervisor, and they did their work before the machine showed up.

**Third one, and this is the one I keep making.** Both times I explained the concept, I described the studying and stopped. Never got to the exam. Fit, no predict. Prediction is the whole point — everything before it is machinery to make one moment work: a question nobody has answered, and the thing answers it.

## The part I'm less proud of

Somewhere in the middle of the day I stopped learning and started building.

An interactive diagram. Then a flashcard tool. Then a daily review template. Then a per-concept teaching page. Four tools in about three hours, each one a reasonable idea, none of them asked for by the actual work.

I threw three of them out.

Here's what taught me anything today: reading the lecture transcript, writing my own notes, saying them out loud, and getting corrected when I was wrong. That loop is free. It requires no tooling. It's the only thing that moved.

I've done this before — there's a post on this site called *Built the School* about the day I sat down to study, built the entire course into my website instead, and completed exactly one quiz. I know the pattern. Knowing it apparently doesn't stop it; it just means I catch it a few hours earlier than I used to.

And when I asked whether we should run a batch of research agents to optimise my study method, the honest answer came back: you have one day of data. There's nothing to optimise yet. Run it plain for a week and you'll know exactly what's broken.

## Where it ended

I can explain supervised learning now. Show it a pile of examples where the answer is already known, it learns the pattern, then it answers a new one. Everything else is names for pieces of that sentence — features, labels, training set, fit, predict, regression, classification.

I still swap regression and classification under pressure. Three times today. I get it right when asked straight and flip it in a list. That's tomorrow's first job, before anything new.

Two lectures in, a hundred to go. The site tells the truth again, which is the only thing I ask of it.
