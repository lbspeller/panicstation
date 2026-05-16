import { CATEGORIES, CATEGORY_FULL, type CategoryKey } from "./categories";

export const SITE_URL = "https://panicstation.org";
export const SITE_NAME = "PanicStation.org";
export const SITE_DESCRIPTION =
  "A free, plain-English guide library for stressful everyday situations.";
export const SUPPORT_EMAIL = "support@panicstation.org";
export const LOGO_URL = `${SITE_URL}/android-chrome-512x512.png`;

export function canonicalUrl(pathname = "/") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_URL).toString();
}

export function jurisdictionInfo(value: string) {
  const normal = String(value || "").toLowerCase();

  if (normal === "uk" || normal === "gb" || normal === "united kingdom") {
    return {
      code: "uk",
      frontmatter: "UK",
      label: "UK",
      guidesLabel: "UK guides",
      language: "en-GB",
      href: "/uk/",
    };
  }

  return {
    code: "us",
    frontmatter: "USA",
    label: "USA",
    guidesLabel: "USA guides",
    language: "en-US",
    href: "/us/",
  };
}

export function categoryKeyFromFullCategory(category: string): CategoryKey | null {
  const match = CATEGORIES.find((item) => CATEGORY_FULL[item.key] === category);
  return match?.key || null;
}

export function categoryLabelFromKey(key: string) {
  return CATEGORIES.find((item) => item.key === key)?.label || key;
}

export function categoryLabelFromFullCategory(category: string) {
  const key = categoryKeyFromFullCategory(category);
  return key ? categoryLabelFromKey(key) : category;
}

export function categoryPath(jurisdiction: string, category: string) {
  const jur = jurisdictionInfo(jurisdiction);
  const key = categoryKeyFromFullCategory(category);

  if (!key) return `/${jur.code}/`;

  return `/${jur.code}/category/${key}/`;
}

export function deriveGuideDescription(title: string, category: string) {
  return `Plain-English PanicStation.org guide for ${title}, in the ${category} category.`;
}

export function textDescription(text: string, fallback: string) {
  const cleaned = String(text || "")
    .replace(/\r\n/g, "\n")
    .replace(/^#+\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)[0];

  return cleaned || fallback;
}

function schemaDateTime(dateValue: string) {
  const value = String(dateValue || "").trim();

  if (!value) {
    return undefined;
  }

  /*
    Guide frontmatter currently stores dates as YYYY-MM-DD.
    Google's Rich Results Test may warn when Article datePublished/dateModified
    have no timezone, so convert date-only values to a full ISO-style datetime.
  */
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value}T00:00:00+00:00`;
  }

  return value;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SUPPORT_EMAIL,
      contactType: "customer support",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };
}

export function buildHomeStructuredData() {
  return [
    websiteSchema(),
    organizationSchema(),
  ];
}

export function breadcrumbListSchema(
  items: Array<{
    name: string;
    url: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildGuideStructuredData({
  title,
  category,
  tags = [],
  lastReviewed,
  jurisdiction,
  pathname,
}: {
  title: string;
  category: string;
  tags?: string[];
  lastReviewed: string;
  jurisdiction: string;
  pathname: string;
}) {
  const jur = jurisdictionInfo(jurisdiction);
  const pageUrl = canonicalUrl(pathname);
  const categoryHref = canonicalUrl(categoryPath(jur.code, category));
  const categoryLabel = categoryLabelFromFullCategory(category);
  const reviewedDateTime = schemaDateTime(lastReviewed);

  const organizationRef = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  };

  const cleanTags = (tags || [])
    .map((tag) => String(tag || "").trim())
    .filter(Boolean);

  const about = [
    category,
    ...cleanTags,
  ]
    .map((name) => String(name || "").trim())
    .filter(Boolean)
    .map((name) => ({
      "@type": "Thing",
      name,
    }));

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: deriveGuideDescription(title, category),
    author: organizationRef,
    publisher: organizationRef,
    datePublished: reviewedDateTime,
    dateModified: reviewedDateTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    inLanguage: jur.language,
    articleSection: category,
    keywords: cleanTags,
    about,
  };

  const breadcrumbs = breadcrumbListSchema([
    {
      name: SITE_NAME,
      url: canonicalUrl("/"),
    },
    {
      name: jur.guidesLabel,
      url: canonicalUrl(jur.href),
    },
    {
      name: categoryLabel,
      url: categoryHref,
    },
    {
      name: title,
      url: pageUrl,
    },
  ]);

  return [article, breadcrumbs];
}

export function buildCategoryStructuredData({
  title,
  description,
  jurisdiction,
  categoryLabel,
  categoryPathname,
  guides,
}: {
  title: string;
  description: string;
  jurisdiction: string;
  categoryLabel: string;
  categoryPathname: string;
  guides: Array<{
    title: string;
    pathname: string;
  }>;
}) {
  const jur = jurisdictionInfo(jurisdiction);
  const pageUrl = canonicalUrl(categoryPathname);

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: jur.language,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: canonicalUrl(guide.pathname),
      })),
    },
  };

  const breadcrumbs = breadcrumbListSchema([
    {
      name: SITE_NAME,
      url: canonicalUrl("/"),
    },
    {
      name: jur.guidesLabel,
      url: canonicalUrl(jur.href),
    },
    {
      name: categoryLabel,
      url: pageUrl,
    },
  ]);

  return [collectionPage, breadcrumbs];
}