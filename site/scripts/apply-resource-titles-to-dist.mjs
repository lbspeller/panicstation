import {
  existsSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = fileURLToPath(new URL("..", import.meta.url));
const csvPath = join(siteDir, "src", "data", "external-resource-titles.csv");
const distDir = join(siteDir, "dist");

const trackingNames = new Set([
  "dclid",
  "fbclid",
  "gclid",
  "mc_cid",
  "mc_eid",
]);

function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const text = String(source || "").replace(/^\uFEFF/, "");

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (quoted) {
      if (character === '"') {
        if (text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"' && field.length === 0) {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }

  return rows;
}

function normalizeComparable(value) {
  return String(value || "")
    .trim()
    .replace(/\/$/, "")
    .replace(/^https?:\/\//i, "")
    .toLowerCase();
}

function rowLabel(row) {
  const manualOverride = String(row.manual_override || "").trim();
  if (manualOverride) return manualOverride;

  const displayLabel = String(row.display_label || "").trim();
  if (displayLabel) return displayLabel;

  const siteName = String(row.site_name || "").trim();
  const pageTitle = String(row.page_title || "").trim();

  if (siteName && pageTitle) {
    if (normalizeComparable(siteName) === normalizeComparable(pageTitle)) {
      return pageTitle;
    }
    return `${siteName} — ${pageTitle}`;
  }

  return pageTitle || siteName;
}

function decodeHtmlAttributes(value) {
  return String(value || "")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeUrl(value) {
  let url;
  try {
    url = new URL(decodeHtmlAttributes(String(value || "").trim()));
  } catch {
    return "";
  }

  if (!/^https?:$/.test(url.protocol)) return "";

  url.hash = "";
  url.hostname = url.hostname.toLowerCase();

  if (
    (url.protocol === "http:" && url.port === "80") ||
    (url.protocol === "https:" && url.port === "443")
  ) {
    url.port = "";
  }

  url.pathname = (url.pathname || "/").replace(/\/{2,}/g, "/");
  if (url.pathname !== "/") {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }

  for (const key of [...url.searchParams.keys()]) {
    const lower = key.toLowerCase();
    if (lower.startsWith("utm_") || trackingNames.has(lower)) {
      url.searchParams.delete(key);
    }
  }

  return url.toString();
}

function loadLabels() {
  if (!existsSync(csvPath)) {
    throw new Error(`Resource-title CSV not found: ${csvPath}`);
  }

  const rows = parseCsv(readFileSync(csvPath, "utf8"));
  if (rows.length === 0) return new Map();

  const headers = rows[0].map((value) => String(value || "").trim());
  const labels = new Map();

  for (const values of rows.slice(1)) {
    if (values.every((value) => !String(value || "").trim())) continue;

    const row = Object.fromEntries(
      headers.map((header, index) => [header, values[index] ?? ""]),
    );
    const label = rowLabel(row);
    if (!label) continue;

    for (const candidate of [row.url, row.normalized_url, row.final_url]) {
      const exact = String(candidate || "").trim();
      if (!exact) continue;
      labels.set(exact, label);

      const normalized = normalizeUrl(exact);
      if (normalized) labels.set(normalized, label);
    }
  }

  return labels;
}

function htmlFiles(directory) {
  const output = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...htmlFiles(fullPath));
    else if (entry.isFile() && extname(entry.name).toLowerCase() === ".html") {
      output.push(fullPath);
    }
  }
  return output;
}

function getAttribute(openTag, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = openTag.match(
    new RegExp(`\\s${escaped}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"),
  );
  return match ? (match[1] ?? match[2] ?? "") : "";
}

function setAttribute(openTag, name, value) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const attributePattern = new RegExp(
    `(\\s${escapedName}\\s*=\\s*)(?:"[^"]*"|'[^']*')`,
    "i",
  );
  const replacement = ` ${name}="${escapeHtml(value)}"`;

  if (attributePattern.test(openTag)) {
    return openTag.replace(attributePattern, replacement);
  }

  return openTag.replace(/>$/, `${replacement}>`);
}

const labels = loadLabels();
let changedFiles = 0;
let changedLinks = 0;
let alreadyCsvLinks = 0;
let unmatchedProcessedLinks = 0;

const sectionPattern = /<section\b(?=[^>]*class=(?:"[^"]*\bps-resources\b[^"]*"|'[^']*\bps-resources\b[^']*'))[^>]*>[\s\S]*?<\/section>/gi;
const anchorPattern = /(<a\b[^>]*>)([\s\S]*?)(<\/a>)/gi;

for (const filePath of htmlFiles(distDir)) {
  const original = readFileSync(filePath, "utf8");
  let fileChanged = false;

  const updated = original.replace(sectionPattern, (sectionHtml) =>
    sectionHtml.replace(anchorPattern, (whole, openTag, innerHtml, closeTag) => {
      const processedUrl = getAttribute(openTag, "data-ps-source-url");
      const sourceKind = getAttribute(openTag, "data-ps-source-label");

      // Hand-written Markdown labels do not receive these attributes and must
      // remain exactly as the author wrote them.
      if (!processedUrl && !sourceKind) return whole;

      const href = getAttribute(openTag, "href");
      const exact = decodeHtmlAttributes(href).trim();
      const normalized = normalizeUrl(exact);
      const label = labels.get(exact) || (normalized ? labels.get(normalized) : "");

      if (!label) {
        unmatchedProcessedLinks += 1;
        return whole;
      }

      if (sourceKind === "csv" && innerHtml === escapeHtml(label)) {
        alreadyCsvLinks += 1;
        return whole;
      }

      let revisedOpenTag = setAttribute(openTag, "data-ps-source-label", "csv");
      if (!processedUrl) {
        revisedOpenTag = setAttribute(
          revisedOpenTag,
          "data-ps-source-url",
          exact,
        );
      }

      changedLinks += 1;
      fileChanged = true;
      return `${revisedOpenTag}${escapeHtml(label)}${closeTag}`;
    }),
  );

  if (fileChanged) {
    writeFileSync(filePath, updated, "utf8");
    changedFiles += 1;
  }
}

console.log(
  `[PanicStation] Resource-title postbuild: ${changedLinks.toLocaleString("en-GB")} ` +
    `link(s) corrected in ${changedFiles.toLocaleString("en-GB")} file(s); ` +
    `${alreadyCsvLinks.toLocaleString("en-GB")} already used CSV labels; ` +
    `${unmatchedProcessedLinks.toLocaleString("en-GB")} processed link(s) had no CSV match.`,
);
