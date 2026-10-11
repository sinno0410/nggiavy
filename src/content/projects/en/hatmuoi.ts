import hatmuoi0 from "../../../assets/images/projects/hatmuoi/hatmuoi-0.webp";
import hatmuoi1 from "../../../assets/images/projects/hatmuoi/hatmuoi-1.webp";
import hatmuoi2 from "../../../assets/images/projects/hatmuoi/hatmuoi-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Hạt Muối Của Biển",
  theme: "light",
  tags: ["tiktok", "social", "content", "analytics"],
  description:
    "Freelance Social Marketing Executive · Jul 2025 – Jan 2026<br/><br/>Hạt Muối Của Biển (@_ngththuyz) is a fashion-focused TikTok channel about photo check-ins, posing tips, outfit inspiration and beach travel, aimed at young women who love fashion, photography and a chill, positive lifestyle. Managed the channel end to end.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi0,
        alt: "TikTok & Instagram",
        caption: "TikTok & Instagram",
      },
    },
    {
      type: "text",
      props: {
        title: "Objective",
        text: "Build a stronger social presence by improving content consistency, increasing engagement and aligning the visual identity across TikTok and Instagram.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi1,
        alt: "Results – January 2026",
        caption: "Results – January 2026",
      },
    },
    {
      type: "list",
      props: {
        title: "Results (TikTok, January 2026)",
        items: [
          "<b>24K</b> new followers gained",
          "<b>50M</b> total post views",
          "<b>2.3M</b> engagement growth",
          "<b>~4,000</b> average follower growth",
          "<b>531.5K</b> page visits",
          "<b>53</b> brand bookings",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Personal branding & growth strategy",
        text: "Developed the creator's personal brand and TikTok growth strategy by defining audience positioning, content direction and long-term organic growth objectives.",
      },
    },
    {
      type: "list",
      props: {
        title: "Roles & responsibilities",
        items: [
          "<b>Strategy & positioning:</b> market and competitor analysis, TikTok trends, audience insights, personal brand positioning, content strategy, pillars and calendar.",
          "<b>Operations & production:</b> concepts and scripts, filming and directing, video editing, thumbnail design, managing the production and upload schedule.",
          "<b>Data & optimization:</b> weekly and monthly TikTok analytics, reviewing each video's performance and running data-driven optimizations.",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi2,
        alt: "Content",
        caption: "Content",
      },
    },
    {
      type: "list",
      props: {
        title: "Content pillars",
        items: [
          "<b>Style & outfit inspiration:</b> outfit pairings for different occasions and seasons.",
          "<b>Posing & photo guides:</b> practical, valuable tips that give viewers a reason to come back.",
          "<b>Tutorials & lifestyle:</b> makeup and outfits that build trust in the personal brand.",
          "<b>Trends & challenges:</b> using platform trends to reach new audiences.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Data-driven optimization",
        items: [
          "60% of traffic came from For You → optimized the first 3 seconds and completion rate.",
          "80% of viewers are female → adjusted angles, lighting and tone to their aesthetic.",
          "18.8% of traffic came from the profile → optimized bio and avatar to convert visits into followers.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
