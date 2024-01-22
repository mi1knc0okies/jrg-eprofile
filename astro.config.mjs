import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jessergraham.com",
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    entryLimit: 10000
  }), robotsTxt(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
    imageService: true,
  }),
});