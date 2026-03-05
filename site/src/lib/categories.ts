export type CategoryKey =
  | "bereavement"
  | "legal"
  | "sexual"
  | "travel"
  | "health"
  | "money"
  | "tech"
  | "work"
  | "home"
  | "safety"
  | "transport";

export const CATEGORIES: Array<{
  key: CategoryKey;
  label: string;            // UI label
  icon: string;             // Font Awesome class (without "fa-solid")
}> = [
  { key: "bereavement", label: "Bereavement & Family Crises",         icon: "fa-heart-crack" },
  { key: "legal",       label: "Legal, Police & Official Matters",    icon: "fa-scale-balanced" },
  { key: "sexual",      label: "Sexual Violence & Sensitive Issues",  icon: "fa-hand" },
  { key: "travel",      label: "Travel, Documents & Abroad",          icon: "fa-passport" },
  { key: "health",      label: "Health & Medical Scares",             icon: "fa-kit-medical" },
  { key: "money",       label: "Money & Financial Emergencies",       icon: "fa-sterling-sign" },
  { key: "tech",        label: "Tech & Digital Loss",                 icon: "fa-lock" },
  { key: "work",        label: "Work & Employment Crises",            icon: "fa-briefcase" },
  { key: "home",        label: "Home & Property Emergencies",         icon: "fa-house-circle-exclamation" },
  { key: "safety",      label: "Personal Safety & Immediate Danger",  icon: "fa-shield-halved" },
  { key: "transport",   label: "Transport & Mobility Issues",         icon: "fa-car-burst" },
];

// The *exact* category strings as used in guide frontmatter (must match your MD files)
export const CATEGORY_FULL: Record<CategoryKey, string> = {
  bereavement: "Death, bereavement & serious family crises",
  health: "Health & medical scares",
  home: "Home & property emergencies",
  legal: "Legal, police, prison & official contact",
  money: "Money & financial emergencies",
  safety: "Personal safety & immediate danger",
  sexual: "Sexual violence & highly sensitive situations",
  tech: "Technology & digital loss",
  transport: "Transport & mobility emergencies",
  travel: "Travel, documents & being abroad",
  work: "Work & employment crises",
};