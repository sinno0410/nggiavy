export const social = [
  { url: "mailto:nggiavy.0410@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/nggiavy0410/", name: "linkedin" },
  { url: "https://zalo.me/0349649247", name: "zalo" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x" | "zalo";
}[];
