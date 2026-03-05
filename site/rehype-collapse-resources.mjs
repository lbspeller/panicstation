// site/rehype-collapse-resources.mjs

function textOf(node) {
  if (!node) return "";
  if (node.type === "text" && typeof node.value === "string") return node.value;
  if (node.type === "element" && Array.isArray(node.children)) {
    return node.children.map(textOf).join("");
  }
  return "";
}

function isResourcesSection(node) {
  if (!node || node.type !== "element" || node.tagName !== "section") return false;
  const title = node.properties?.["data-ps-section"];
  return typeof title === "string" && title.trim().toLowerCase() === "additional resources";
}

export default function rehypeCollapseResources() {
  return (tree) => {
    const root = tree;
    const kids = root.children || [];

    for (const node of kids) {
      if (!isResourcesSection(node)) continue;

      const children = node.children || [];
      const h2 = children.find((c) => c.type === "element" && c.tagName === "h2");
      const content = children.filter((c) => c !== h2);

      // Replace section children with: details(summary=label, content...)
      node.children = [
        {
          type: "element",
          tagName: "details",
          properties: {},
          children: [
            {
              type: "element",
              tagName: "summary",
              properties: { className: ["ps-summary"] },
              children: [{ type: "text", value: textOf(h2).trim() || "Additional resources" }],
            },
            ...content,
          ],
        },
      ];
    }
  };
}