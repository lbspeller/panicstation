import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import rehypeWrapGuideSections from "./rehype-wrap-guide-sections.mjs";
import rehypeTitleTweaks from "./rehype-title-tweaks.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const guidesDir = join(__dirname, "src", "content", "guides");

function toSitemapDateTime(value) {
  const date = String(value || "").trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Date(`${date}T00:00:00Z`).toISOString();
  }

  return date || undefined;
}

function readGuideLastmodMap() {
  const map = new Map();

  for (const jurisdiction of ["uk", "us"]) {
    const jurisdictionDir = join(guidesDir, jurisdiction);

    if (!existsSync(jurisdictionDir)) continue;

    for (const file of readdirSync(jurisdictionDir, { withFileTypes: true })) {
      if (!file.isFile() || !file.name.endsWith(".md")) continue;

      const filePath = join(jurisdictionDir, file.name);
      const content = readFileSync(filePath, "utf8");
      const frontmatter = content.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---/)?.[1] || "";
      const lastReviewed = frontmatter.match(/^last_reviewed:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1];
      const lastmod = toSitemapDateTime(lastReviewed);

      if (!lastmod) continue;

      const slug = file.name.replace(/\.md$/, "");
      map.set(`/${jurisdiction}/${slug}/`, lastmod);
    }
  }

  return map;
}

const guideLastmodByPath = readGuideLastmodMap();

export default defineConfig({
  site: "https://panicstation.org",
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;
        const guideLastmod = guideLastmodByPath.get(normalizedPathname);

        if (guideLastmod) {
          item.lastmod = guideLastmod;
        }

        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeTitleTweaks,
      rehypeWrapGuideSections
    ],
  },
});