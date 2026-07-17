import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seo_title: z.string().min(1),
    jurisdiction: z.enum(["UK", "USA"]),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    last_reviewed: z.string(),
    date_created: z.string(),
  }),
});

export const collections = { guides };
