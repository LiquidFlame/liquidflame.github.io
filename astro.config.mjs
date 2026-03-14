import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind"; // <-- 1. The new import

export default defineConfig({
  site: "https://liquidflame.github.io",
  base: "/",
  integrations: [
    mdx(),
    sitemap(),
    pagefind(), // <-- 2. Added to the very end of the array
  ],
});
