// TODO: điền email và các mạng xã hội của bạn
export const social = [
  { url: "mailto:", name: "mail" },
  { url: "https://github.com/sinno0410", name: "github" },
  //{ url: "https://www.linkedin.com/in/your-name/", name: "linkedin" },
  //{ url: "https://x.com/your-name", name: "x" },
  //{ url: "https://www.instagram.com/your-name/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
