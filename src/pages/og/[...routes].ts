import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

export const { getStaticPaths, get } = OGImageRoute({
  param: "routes",
  pages: await getCollection("blog"),
  getSlug: (_, page) => page.id.replace(/\.(md|mdx)$/, ".png"),
  getImageOptions: (_, page) => ({
    title: page.data.title,
    description: page.data.description,
    padding: 100,
  }),
});
