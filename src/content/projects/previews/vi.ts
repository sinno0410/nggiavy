import thumbnail_mekong from "../../../assets/thumbnails/mekong.webp";
import thumbnail_hatmuoi from "../../../assets/thumbnails/hatmuoi.webp";
import thumbnail_semtek from "../../../assets/thumbnails/semtek.webp";
import thumbnail_timeo from "../../../assets/thumbnails/timeo.webp";
import thumbnail_ebuzz from "../../../assets/thumbnails/ebuzz.webp";
import thumbnail_sic from "../../../assets/thumbnails/sic.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Mekong Petrochem – SK ZIC Vietnam",
    slug: "mekong",
    thumbnail: thumbnail_mekong,
    description: "Social media & chiến dịch digital",
  },
  {
    title: "Vietnam Swiss Innovation Challenge 2025",
    slug: "sic",
    thumbnail: thumbnail_sic,
    description: "Cuộc thi đổi mới sáng tạo · Top 20",
  },
  {
    title: "E-Buzz Media 2025",
    slug: "ebuzz",
    thumbnail: thumbnail_ebuzz,
    description: "Cuộc thi video ngắn · Top 4 chung cuộc",
  },
  {
    title: "SEMTEK Agency",
    slug: "semtek",
    thumbnail: thumbnail_semtek,
    description: "SEO on-page",
  },
  {
    title: "TIMEO – Tufting Studio",
    slug: "timeo",
    thumbnail: thumbnail_timeo,
    description: "Digital marketing cho studio workshop",
  },
  {
    title: "Hạt Muối Của Biển",
    slug: "hatmuoi",
    thumbnail: thumbnail_hatmuoi,
    description: "Xây dựng kênh TikTok (freelance)",
  },
] as const satisfies ProjectPreview[];
