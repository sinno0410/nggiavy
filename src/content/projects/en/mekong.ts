import mekong0 from "../../../assets/images/projects/mekong/mekong-0.webp";
import mekong1 from "../../../assets/images/projects/mekong/mekong-1.webp";
import mekong2 from "../../../assets/images/projects/mekong/mekong-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Mekong Petrochem – SK ZIC Vietnam",
  theme: "light",
  tags: ["social", "content", "ads", "event"],
  description:
    "Social Media Marketing · Apr 2025 – May 2026<br/><br/>In-house social media marketing for the lubricant brands SK ZIC and Mekong Petrochem (SK Group): building the content strategy across channels, running digital campaigns and supporting brand events.",
  components: [
    {
      type: "text",
      props: {
        title: "Social content strategy",
        text: "Developed a comprehensive content plan by defining the role and objectives of each platform, aligning the overall content strategy with the customer journey, and structuring how content supports brand awareness, customer education and sales.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong0,
        alt: "Social Content Strategy",
        caption: "Social Content Strategy",
      },
    },
    {
      type: "text",
      props: {
        title: "Zalo Mini App – digital campaign",
        text: "Planned and executed a Zalo Mini App communication campaign for <b>Chăm Xe</b> across Facebook fanpages, Google GDN, YouTube and Zalo OA, covering audience analysis, content pillars, the content calendar, campaign timeline and paid media strategy.<br/><br/>The campaign reached <b>over 9 million people in 3 months</b> and achieved <b>39% of the annual registration KPI</b>.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong1,
        alt: "Zalo Mini App Campaign",
        caption: "Zalo Mini App Campaign",
      },
    },
    {
      type: "text",
      props: {
        title: "Event activation",
        text: "Responsible for event communication: planning and executing promotional content across digital channels to support event activation and increase audience engagement.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong2,
        alt: "Event Activation",
        caption: "Event Activation",
      },
    },
    {
      type: "list",
      props: {
        title: "Events",
        items: [
          "<a href=\"https://skzic.com.vn/vn/green-pop-up-2025.html\" target=\"_blank\" rel=\"noopener\">Green Pop Up – ZIC x Ve Chai Ơi</a>",
          "<a href=\"https://skzic.com.vn/vn/sk-zic-tai-ashura-calisthenics-battle-2025.html\" target=\"_blank\" rel=\"noopener\">ZIC x Ashura Calisthenics Battle</a>",
          "<a href=\"https://mekongpetro.com/vn/hoa-dau-mekong-tai-business-va-library-lan-thu-7.html\" target=\"_blank\" rel=\"noopener\">Mekong x YBA – Business & Library #7</a>",
          "<a href=\"https://tuoitre.vn/hoa-dau-mekong-tao-dau-an-tai-hoi-cho-mua-thu-2025-20251102140843013.htm\" target=\"_blank\" rel=\"noopener\">Mekong x Autumn Fair 2025</a>",
          "<a href=\"https://skzic.com.vn/vn/sk-zic-tai-cho-tet-cong-doan-xuan-2026.html\" target=\"_blank\" rel=\"noopener\">Trade Union Tet Fair 2026</a>",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
