# Love Learn Lift

The public hub for **Love Learn Lift** ([lovelearnlift.com](https://lovelearnlift.com)) — a 24-month learn-and-build program, documented out loud. (Formerly Tortoise.)

The name is the thesis: slow is fine, consistent is the point. Most projects die from inconsistency long before they die from bad ideas. This site is the artifact of trying not to.

## The two pillars

Every post belongs to one of the two active pillars:

- **Forge** — Building and shipping. Code lands in production; the trade-offs that earned it get written down. Two builds run in parallel: **Workhorse** (Build One) and **Steward** (Build Two).
- **Encode** — Learning in public. Sit down at zero, leave with one thing locked. The misses are part of the data.

_(Earlier pillars — Beacon, Dispatch, Evolve, Endure — are archived from the nav but their routes and posts remain on disk.)_

## What's on the site

- **Encode Learn** (`/encode/learn`) — a masterclass you prove, not just watch: study guides with a question before every answer, plus self-scoring quizzes that resurface what you missed. Guides live as JSON in `src/data/learn/`.
- **Encode homework** (`/encode/homework`) — the standalone quiz engine (`src/components/Quiz.astro`), data in `src/data/homework.json`.
- **Hire Me** (`/hire`) — services, a live skills tracker across Workhorse / Steward / Encode (`src/data/tracks.json`), and certifications (`src/data/certs.json`).
- **Blog** (`/blog`) — all posts, one per pillar page.

## Stack

- Astro 5 with TypeScript strict mode
- Tailwind CSS v3 (via `@astrojs/tailwind`)
- MDX, RSS, and sitemap integrations
- Markdown content collection (`src/content/blog/`) + JSON data (`src/data/`)
- Deployed on Vercel, auto-deploying from `main`

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # serve the built site
```

## Adding content

**A blog post** — create a `.md` file in `src/content/blog/` with this frontmatter:

```yaml
---
title: "Post title"
date: 2026-04-09
category: forge       # forge | encode | ...
tags: ["tag1", "tag2"]
excerpt: "One sentence under 160 characters."
draft: false
---
```

The filename becomes the URL slug (`my-post.md` → `/blog/my-post`). Posts with `draft: true` are excluded from every listing and the RSS feed.

**A Learn guide** — drop one `src/data/learn/<id>.json` (it auto-registers on the hub) and a matching quiz in `src/data/homework.json`.

**A certification** — add an entry to `src/data/certs.json` (optionally an image/PDF under `public/certs/`).

## Key routes

- `/` — landing: pillars, completion calendar, masterclass CTA
- `/forge`, `/forge/workhorse`, `/forge/steward` — the build pillar
- `/encode`, `/encode/learn`, `/encode/homework` — the learn pillar + masterclass
- `/hire` — hire me: services, skills tracker, certifications
- `/blog`, `/blog/[slug]` — posts
- `/rss.xml` — global RSS feed
