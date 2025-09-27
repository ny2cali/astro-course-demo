// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// import { date, format } from "date-fns";

// 3. Define your collection(s)
const postsCollection = defineCollection({
  // type: "data",
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
