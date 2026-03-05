// site/rehype-title-tweaks.mjs
function extractText(node) {
  if (!node) return "";
  if (node.type === "text" && typeof node.value === "string") return node.value;
  if (node.type === "element" && Array.isArray(node.children)) {
    return node.children.map(extractText).join("");
  }
  return "";
}

function setChildrenText(node, text) {
  node.children = [{ type: "text", value: text }];
}

export default function rehypeTitleTweaks() {
  return (tree) => {
    const root = tree;
    const kids = root.children || [];

    // Find first H1 in the document
    const h1 = kids.find((n) => n?.type === "element" && n.tagName === "h1");
    if (!h1) return;

    let title = extractText(h1).trim();

    // Remove trailing country identifier like " (USA)" or " (UK)"
    title = title.replace(/\s*\((USA|UK)\)\s*$/i, "").trim();

    const lead = "What to do if…";
    let rest = title;

    // If title starts with the lead phrase, split it; otherwise just keep full title as rest
    if (title.toLowerCase().startsWith(lead.toLowerCase())) {
      rest = title.slice(lead.length).trim();
      // Remove leading punctuation/spaces from the remainder
      rest = rest.replace(/^[:—–\- ]+/, "").trim();
    }

    // Replace H1 with two spans
    h1.children = [
      {
        type: "element",
        tagName: "span",
        properties: { className: ["ps-title-lead"] },
        children: [{ type: "text", value: lead }],
      },
      { type: "element", tagName: "br", properties: {}, children: [] },
      {
        type: "element",
        tagName: "span",
        properties: { className: ["ps-title-main"] },
        children: [{ type: "text", value: rest || title }],
      },
    ];
  };
}