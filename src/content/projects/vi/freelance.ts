import thumbnail_hatmuoi from "../../../assets/thumbnails/hatmuoi.webp";

import type { ProjectContent } from "../../types";

// Thêm job freelance mới: tạo trang riêng (vd. src/content/projects/vi/<slug>.ts với `parent: "freelance"`),
// thêm <slug> vào projectIds trong ../index.ts, rồi thêm một mục vào danh sách `jobs` bên dưới (cả en và vi).

export default {
  title: "Freelance",
  theme: "light",
  tags: ["tiktok", "social", "content"],
  description:
    "Các dự án freelance · 2025 – nay<br/><br/>Những dự án tôi tự đảm nhận toàn bộ kênh — từ chiến lược, nội dung, đăng tải đến báo cáo. Chọn một dự án bên dưới để xem chi tiết.",
  components: [
    {
      type: "jobs",
      props: {
        title: "Dự án freelance",
        cta: "Xem dự án",
        jobs: [
          {
            slug: "hatmuoi",
            title: "Hạt Muối Của Biển",
            thumbnail: thumbnail_hatmuoi,
            role: "Freelance Social Marketing Executive",
            period: "07/2025 – 01/2026",
            text: "Quản lý toàn diện kênh TikTok thời trang & du lịch biển (@_ngththuyz): chiến lược thương hiệu cá nhân, nội dung và tăng trưởng.",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
