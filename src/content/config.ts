import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['forge', 'encode']),
    tags: z.array(z.string()).max(4).default([]),
    excerpt: z.string().max(160),
    draft: z.boolean().default(false),
  }),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    session: z.string(),                  // e.g. "S14-2026-05-04"
    task: z.string().nullable().optional(), // e.g. "T14-1" — nullable for session-level lessons
    pillar: z.string(),                   // e.g. "P10 Reality Testing"
    analogy_domain: z.string(),           // e.g. "RAILWAY"
    excerpt: z.string().max(200),
    tags: z.array(z.string()).max(6).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, lessons };
