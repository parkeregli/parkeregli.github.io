import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://parkeregli.github.io",
  base: import.meta.env.DEV ? "" : "/parkeregli.github.io",
  integrations: [mdx(), sitemap()],
});
