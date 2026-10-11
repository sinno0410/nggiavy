export type TagVariant =
  | "gray"
  | "social"
  | "content"
  | "ads"
  | "seo"
  | "strategy"
  | "event"
  | "tiktok"
  | "analytics"
  | "research";

export const tagLabels = {
  gray: "Gray",
  social: "Social Media",
  content: "Content",
  ads: "Paid Ads",
  seo: "SEO",
  strategy: "Strategy",
  event: "Event",
  tiktok: "TikTok",
  analytics: "Analytics",
  research: "Research",
} as const satisfies Record<TagVariant, string>;
