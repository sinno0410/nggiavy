import timeo0 from "../../../assets/images/projects/timeo/timeo-0.webp";
import timeo1 from "../../../assets/images/projects/timeo/timeo-1.webp";
import timeo2 from "../../../assets/images/projects/timeo/timeo-2.webp";
import timeo3 from "../../../assets/images/projects/timeo/timeo-3.webp";
import timeo4 from "../../../assets/images/projects/timeo/timeo-4.webp";
import timeo5 from "../../../assets/images/projects/timeo/timeo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TIMEO – Tufting Studio",
  theme: "light",
  tags: ["social", "content", "strategy"],
  description:
    "Digital Marketing Intern · Jan 2024 – Apr 2024<br/><br/>Customer journey, content planning and fanpage management for TIMEO, a tufting workshop studio.",
  components: [
    {
      type: "text",
      props: {
        title: "Customer journey map",
        text: "Designed a customer journey framework across seven stages to better understand how customers <b>discover</b>, <b>book</b> and <b>engage</b> with the workshop. The map became a strategic foundation for marketing and service improvements, highlighting the key moments that influence booking decisions and engagement.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo0,
        alt: "Customer Journey Map",
        caption: "Customer Journey Map",
      },
    },
    {
      type: "text",
      props: {
        title: "Insight, timeline & calendar",
        text: "Built the brand insight and a weekly social content plan for the fanpage, focusing on seasonal, trending and funny content to attract traffic.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo1,
        alt: "Insight & Timeline",
        caption: "Insight & Timeline",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo2,
        alt: "Content Calendar",
        caption: "Content Calendar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo3,
        alt: "Weekly Social Content",
        caption: "Weekly Social Content",
      },
    },
    {
      type: "list",
      props: {
        title: "Sample posts",
        items: [
          "<a href=\"https://www.facebook.com/share/p/1EYdw7A8YM/\" target=\"_blank\" rel=\"noopener\">Post 1</a>",
          "<a href=\"https://www.facebook.com/share/p/1AQj65z8gv/\" target=\"_blank\" rel=\"noopener\">Post 2</a>",
          "<a href=\"https://www.facebook.com/share/p/15ASRjaqKf/\" target=\"_blank\" rel=\"noopener\">Post 3</a>",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Results",
        text: "Compared to the previous period, the Facebook fanpage — even with ads paused — achieved a <b>48% increase in reach</b> and an <b>8.7% rise in visits</b>, while followers and contacts stayed stable.<br/><br/>Measured with Fanpage Karma, the posts consistently ranked in the <b>top 10</b>, and some reached the <b>#1 engagement rate</b> among competitors. Engagement rate per post stayed mostly above the arts & crafts average of <b>0.34%</b>.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo4,
        alt: "Engagement Rate per Post",
        caption: "Engagement Rate per Post",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo5,
        alt: "Results",
        caption: "Results",
      },
    },
  ],
} as const satisfies ProjectContent;
