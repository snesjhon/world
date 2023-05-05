import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://snesjhon.com",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
