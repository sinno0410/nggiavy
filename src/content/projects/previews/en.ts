import thumbnail_mekong from "../../../assets/thumbnails/mekong.webp";
import thumbnail_semtek from "../../../assets/thumbnails/semtek.webp";
import thumbnail_timeo from "../../../assets/thumbnails/timeo.webp";
import thumbnail_ebuzz from "../../../assets/thumbnails/ebuzz.webp";
import thumbnail_sic from "../../../assets/thumbnails/sic.webp";
import thumbnail_freelance from "../../../assets/thumbnails/freelance.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Mekong Petrochem – SK ZIC Vietnam",
    slug: "mekong",
    thumbnail: thumbnail_mekong,
    description: "Social media & digital campaigns",
  },
  {
    title: "SEMTEK Agency",
    slug: "semtek",
    thumbnail: thumbnail_semtek,
    description: "On-page SEO",
  },
  {
    title: "TIMEO – Tufting Studio",
    slug: "timeo",
    thumbnail: thumbnail_timeo,
    description: "Digital marketing for a workshop studio",
  },
  {
    title: "E-Buzz Media 2025",
    slug: "ebuzz",
    thumbnail: thumbnail_ebuzz,
    description: "Short video competition · Top 4 overall",
  },
  {
    title: "Vietnam Swiss Innovation Challenge 2025",
    slug: "sic",
    thumbnail: thumbnail_sic,
    description: "Innovation competition · Top 20",
  },
  {
    title: "Freelance",
    slug: "freelance",
    thumbnail: thumbnail_freelance,
    description: "Freelance projects · TikTok & social",
  },
] as const satisfies ProjectPreview[];
