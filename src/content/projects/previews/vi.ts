import thumbnail_mekong from "../../../assets/thumbnails/mekong.webp";
import thumbnail_hatmuoi from "../../../assets/thumbnails/hatmuoi.webp";
import thumbnail_semtek from "../../../assets/thumbnails/semtek.webp";
import thumbnail_timeo from "../../../assets/thumbnails/timeo.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Mekong Petrochem – SK ZIC Vietnam",
    slug: "mekong",
    thumbnail: thumbnail_mekong,
    description: "Social media & chiến dịch digital",
  },
  {
    title: "Hạt Muối Của Biển",
    slug: "hatmuoi",
    thumbnail: thumbnail_hatmuoi,
    description: "Xây dựng kênh TikTok (freelance)",
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
] as const satisfies ProjectPreview[];
