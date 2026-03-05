// site/rehype-wrap-guide-sections.mjs

function norm(s = "") {
  return s.toLowerCase().trim();
}

function sectionClassFromTitle(title) {
  const t = norm(title);

  if (t === "short answer") return "ps-short";
  if (t === "do not do these things") return "ps-dont";
  if (t === "what to do now") return "ps-now";
  if (t === "what can wait") return "ps-wait";
  if (t === "important reassurance") return "ps-reassure";
  if (t === "scope note") return "ps-scope";
  if (t === "important note") return "ps-note";
  if (t === "additional resources") return "ps-resources";

  return "ps-generic";
}

function extractText(node) {
  if (!node) return "";
  if (node.type === "text" && typeof node.value === "string") return node.value;
  if (node.type === "element" && Array.isArray(node.children)) {
    return node.children.map(extractText).join("");
  }
  return "";
}

export default function rehypeWrapGuideSections() {
  return (tree) => {
    const root = tree;
    const children = root.children || [];

    const out = [];
    let current = null;

    const flush = () => {
      if (current) out.push(current);
      current = null;
    };

    for (const node of children) {
      // Detect <h2>
      if (node.type === "element" && node.tagName === "h2") {
        flush();

        const title = extractText(node).trim() || "Section";
        const sectionClass = sectionClassFromTitle(title);

        current = {
          type: "element",
          tagName: "section",
          properties: {
            className: ["ps-card", sectionClass],
            "data-ps-section": title,
          },
          children: [node], // include the h2
        };
        continue;
      }

      // Before first h2: keep as-is (this includes the H1 title)
      if (!current) out.push(node);
      else current.children.push(node);
    }

    flush();
    root.children = out;
  };
}