// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://trevejo.github.io",
  base: "/blog-cafe-com-pesquisa",
  integrations: [mdx(), sitemap()],
});
