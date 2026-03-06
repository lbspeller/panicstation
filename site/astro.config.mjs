import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import rehypeWrapGuideSections from "./rehype-wrap-guide-sections.mjs";
import rehypeTitleTweaks from "./rehype-title-tweaks.mjs";
import rehypeCollapseResources from "./rehype-collapse-resources.mjs";
import rehypeInsertMidAdSlot from "./rehype-insert-mid-ad-slot.mjs";


export default defineConfig({
  site: "https://panicstation.org",
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      rehypeTitleTweaks,
      rehypeWrapGuideSections,
      rehypeInsertMidAdSlot,
      rehypeCollapseResources
    ],
  },
});