import semtek0 from "../../../assets/images/projects/semtek/semtek-0.webp";
import semtek1 from "../../../assets/images/projects/semtek/semtek-1.webp";
import semtek2 from "../../../assets/images/projects/semtek/semtek-2.webp";
import semtek3 from "../../../assets/images/projects/semtek/semtek-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "SEMTEK Agency",
  theme: "light",
  tags: ["seo", "content", "research"],
  description:
    "SEO On-page Intern · May 2024 – Dec 2024<br/><br/>Keyword research, content planning and post-publish SEO audits for the agency's website, using Ahrefs, Google Search Console and Screaming Frog.",
  components: [
    {
      type: "list",
      props: {
        title: "Keywords",
        items: [
          "Gathered keyword data with Ahrefs and Google Search Console, then refined and filtered it for relevance.",
          "Analyzed search intent, keyword difficulty and search volume.",
          "Organized keywords into a <b>SILO structure</b> to build topical authority and internal linking.",
          "Built an <b>SEO content calendar</b> based on keyword opportunities and search trends.",
          "Wrote <b>SEO-optimized articles</b> to improve organic visibility.",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek0,
        alt: "Keyword Research & Content Calendar",
        caption: "Keyword Research & Content Calendar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek1,
        alt: "SILO Structure",
        caption: "SILO Structure",
      },
    },
    {
      type: "text",
      props: {
        title: "SEO audit",
        text: "Performed post-publish SEO audits covering technical SEO elements, metadata, headings, internal links and keyword optimization to make sure content met SEO standards. Used Screaming Frog to find incomplete elements and improve the chance of ranking higher in the SERPs.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek2,
        alt: "Post-Publication SEO Audit",
        caption: "Post-Publication SEO Audit",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek3,
        alt: "Screaming Frog",
        caption: "Screaming Frog",
      },
    },
  ],
} as const satisfies ProjectContent;
