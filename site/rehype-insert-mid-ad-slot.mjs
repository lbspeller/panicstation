// site/rehype-insert-mid-ad-slot.mjs
//
// Inserts a collapsed ad container between the “Short answer” and
// “Do not do these things” sections on guide pages.
//
// This runs AFTER rehype-wrap-guide-sections, so those sections are already
// wrapped into <section data-ps-section="..."> nodes.

function isElement(node, tag) {
  return !!node && node.type === "element" && node.tagName === tag;
}

function getSectionTitle(sectionNode) {
  if (!isElement(sectionNode, "section")) return "";
  const t = sectionNode.properties?.["data-ps-section"];
  return typeof t === "string" ? t.trim() : "";
}

function makeAdSlotNode() {
  return {
    type: "element",
    tagName: "div",
    properties: {
      id: "ps-mid-ad",
      className: ["ps-ad-slot", "ps-ad-slot-mid"],
      hidden: true,                 // collapsed by default
      "aria-hidden": "true",
      "data-ps-ad-slot": "mid",     // for later scripts
    },
    children: [],
  };
}

export default function rehypeInsertMidAdSlot() {
  return (tree) => {
    const root = tree;
    const children = root.children || [];
    if (!children.length) return;

    // Find the "Short answer" section, then insert immediately after it,
    // but only if the next meaningful section is "Do not do these things".
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      const title = getSectionTitle(node);
      if (title !== "Short answer") continue;

      // Find next section node after Short answer
      let j = i + 1;
      while (j < children.length && !isElement(children[j], "section")) j++;

      const nextTitle = getSectionTitle(children[j]);
      if (nextTitle !== "Do not do these things") return;

      // Avoid double-inserting if it’s already there
      const already =
        children[i + 1] &&
        isElement(children[i + 1], "div") &&
        children[i + 1].properties?.id === "ps-mid-ad";

      if (already) return;

      // Insert the ad slot right after the Short answer section
      children.splice(i + 1, 0, makeAdSlotNode());
      root.children = children;
      return;
    }
  };
}