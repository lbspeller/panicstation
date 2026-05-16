// site/rehype-title-tweaks.mjs
//
// Guide pages render their visible title server-side in:
// src/pages/[jurisdiction]/[...slug].astro
//
// The Markdown files also contain a first-level H1 title.
// Remove the first rendered Markdown <h1> so the guide title appears only
// in the guide hero card, not again underneath it.

function removeFirstH1FromChildren(children = []) {
  for (let i = 0; i < children.length; i += 1) {
    const node = children[i];

    if (node?.type === "element" && node.tagName === "h1") {
      children.splice(i, 1);
      return true;
    }

    if (node?.type === "element" && Array.isArray(node.children)) {
      const removed = removeFirstH1FromChildren(node.children);
      if (removed) return true;
    }
  }

  return false;
}

export default function rehypeTitleTweaks() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) return;

    removeFirstH1FromChildren(tree.children);
  };
}