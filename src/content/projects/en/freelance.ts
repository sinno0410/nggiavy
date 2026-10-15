import thumbnail_hatmuoi from "../../../assets/thumbnails/hatmuoi.webp";

import type { ProjectContent } from "../../types";

// Thêm job freelance mới: tạo trang riêng (vd. src/content/projects/vi/<slug>.ts với `parent: "freelance"`),
// thêm <slug> vào projectIds trong ../index.ts, rồi thêm một mục vào danh sách `jobs` bên dưới (cả en và vi).

export default {
  title: "Freelance",
  theme: "light",
  tags: ["tiktok", "social", "content"],
  description:
    "Freelance work · 2025 – present<br/><br/>Independent projects where I own the whole channel — strategy, content, publishing and reporting. Pick a project below to see the details.",
  components: [
    {
      type: "jobs",
      props: {
        title: "Freelance projects",
        cta: "View project",
        jobs: [
          {
            slug: "hatmuoi",
            title: "Hạt Muối Của Biển",
            thumbnail: thumbnail_hatmuoi,
            role: "Freelance Social Marketing Executive",
            period: "Jul 2025 – Jan 2026",
            text: "Full management of a fashion & beach-travel TikTok channel (@_ngththuyz): personal-brand strategy, content and growth.",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
