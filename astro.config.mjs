import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import pdf from "astro-pdf";

// https://astro.build/config
export default defineConfig({
  site: "https://snesjhon.com",
  integrations: [
    react(),
    mdx(),
    sitemap(),
    // pdf({
    //   baseOptions: {
    //     pdf: {
    //       scale: 0.93,
    //       margin: {
    //         top: "0.1in",
    //         bottom: "0.1in",
    //         left: "0.2in",
    //         right: "0.2in",
    //       },
    //     },
    //   },
    //   pages: {
    //     "/resume": true,
    //   },
    // }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
