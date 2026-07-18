import { rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = fileURLToPath(new URL("..", import.meta.url));
const targets = [
  join(siteDir, ".astro"),
  join(siteDir, "node_modules", ".vite"),
];

for (const target of targets) {
  rmSync(target, { recursive: true, force: true });
}

console.log("[PanicStation] Cleared Astro and Vite generated caches.");
