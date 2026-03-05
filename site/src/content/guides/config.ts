import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    jurisdiction: z.enum(["UK", "USA"]),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    last_reviewed: z.string(),
  }),
});

export const collections = { guides };