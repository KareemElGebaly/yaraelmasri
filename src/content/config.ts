import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
};