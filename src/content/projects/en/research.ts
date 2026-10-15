import rs_advisor from "../../../assets/images/projects/research/advisor.webp";
import rs_presenting from "../../../assets/images/projects/research/presenting.webp";
import rs_presenting_portrait from "../../../assets/images/projects/research/presenting-portrait.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Scientific Research",
  theme: "light",
  tags: ["research", "tiktok", "analytics"],
  description:
    "Student research · Faculty of Commerce, Van Lang University · 2024<br/><br/>Author, under the direct supervision of MSc. Nguyễn Hữu Lan Thuỷ. The study received the highest score from the defense panel, placed in the <b>overall Top 3</b> and was selected for presentation at the research conference.",
  components: [
    {
      type: "live",
      props: {
        eyebrow: "Student research · 2024",
        title: "How streamer social presence drives impulse buying: consumer trust and flow in agricultural-product livestreams on TikTok",
        text: "Applying the S-O-R model, the study looks at how a streamer's social presence shapes trust, flow and impulse buying when Vietnamese farm produce is sold live on TikTok.",
        stats: [
          {
            value: "563",
            label: "valid survey responses",
          },
          {
            value: "4",
            label: "social-presence factors",
          },
          {
            value: "Top 3",
            label: "overall, highest panel score",
          },
        ],
        image: rs_presenting_portrait,
        imageAlt: "Presenting the research",
        viewers: "563",
        comments: ["Is the mango sweet? 🥭", "Add 2kg to my cart!"],
        pinned: {
          title: "Vietnamese farm produce",
          meta: "Live on TikTok Shop",
        },
      },
    },
    {
      type: "text",
      props: {
        title: "01 · Why this topic",
        text: "Vietnam grows a rich range of produce, yet selling it still leans heavily on export markets. As the green transition raises the bar — especially for the EU — the domestic market also needs new, sustainable ways to move quality produce. <b>TikTok live commerce</b> combines visual information, real-time interaction and a push to buy, and can act as a bridge between farmers and consumers while spreading responsible, sustainable consumption. The study set out to find which factors drive impulse buying in these livestreams, giving a scientific basis for marketing strategy and for boosting domestic consumption alongside green-growth goals.",
      },
    },
    {
      type: "sor",
      props: {
        title: "02 · Research model (S-O-R)",
        text: "Twelve hypotheses: four streamer traits (H1–H8) shape consumer trust and flow, which drive impulse buying (H9–H10) and mediate the effect (H11–H12).",
        columns: ["Stimulus (S)", "Organism (O)", "Response (R)"],
        stimuli: [
          ["Personal charisma", "Sức hút cá nhân"],
          ["Professionalism", "Sự chuyên nghiệp"],
          ["Interactivity", "Tính tương tác"],
          ["Entertainment", "Tính giải trí"],
        ],
        organisms: [
          ["Consumer trust", "Lòng tin người tiêu dùng"],
          ["Flow state", "Trạng thái dòng chảy"],
        ],
        response: ["Impulsive buying", "behaviour", "Hành vi mua hàng ngẫu hứng"],
        supported: ["H3", "H4", "H7", "H8", "H9", "H10", "H11", "H12"],
        legend: {
          direct: "Direct effect",
          mediation: "Mediating effect",
          supported: "Positive effect found in the results",
        },
        note: "Professionalism and entertainment lift both trust and flow; trust and flow drive impulse buying directly and carry the streamer's influence through to the purchase.",
      },
    },
    {
      type: "bento",
      props: {
        title: "03 · Method",
        tiles: [
          {
            value: "563",
            label: "valid responses — quantitative survey",
            span: "big",
            tone: "accent",
          },
          {
            image: rs_presenting,
            span: "wide",
            tag: "Defending the research",
          },
          {
            value: "PLS-SEM",
            label: "structural equation modelling",
            tone: "dark",
          },
          {
            value: "SmartPLS 4.0",
            label: "model testing",
            tone: "soft",
          },
        ],
        note: "Data processed with SPSS and SmartPLS 4.0.",
      },
    },
    {
      type: "list",
      props: {
        title: "04 · Key findings & implications",
        items: [
          "<b>Professionalism</b> and <b>entertainment</b> are the streamer traits that build both trust and flow.",
          "<b>Trust</b> and <b>flow</b> push impulse buying directly and carry the streamer's influence through to the purchase.",
          "<b>For produce sellers:</b> pair product expertise with an engaging, entertaining stream to turn viewers into buyers.",
          "<b>Recognition:</b> highest score from the defense panel, overall Top 3, and selected for presentation at the research conference.",
        ],
      },
    },
    {
      type: "gallery",
      props: {
        columns: 2,
        images: [
          {
            src: rs_advisor,
            caption: "With my advisor, MSc. Nguyễn Hữu Lan Thuỷ",
          },
          {
            src: rs_presenting,
            caption: "Presenting the introduction",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
