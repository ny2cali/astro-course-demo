import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Rhythm Nation",
    description: "A community blog for Music Producers and Enthusiasts",
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      customData: `<language>en-us</language>`,
    })),
  });
}
