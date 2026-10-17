import rs_advisor from "../../../assets/images/projects/research/advisor.webp";
import rs_presenting from "../../../assets/images/projects/research/presenting.webp";
import rs_presenting_portrait from "../../../assets/images/projects/research/presenting-portrait.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Scientific Research",
  theme: "light",
  tags: ["research", "tiktok", "analytics"],
  description:
    "Student research · Faculty of Commerce, Van Lang University · 2024<br/><br/>Author, under the direct supervision of MSc. Nguyễn Hữu Lan Thuỷ. The study received the highest score from the defense panel. It was carried out over 5 months, during which I worked hands-on on every research task, refining the content and results step by step to keep the study scientifically sound and practically useful.",
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
            value: "5 months",
            label: "of hands-on research",
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
        supported: ["H1", "H3", "H4", "H5", "H7", "H8", "H9", "H10", "H11", "H12"],
        mediationLabels: ["H11 b, d ✓", "H12 b, d ✓"],
        legend: {
          direct: "Direct effect",
          mediation: "Mediating effect",
          supported: "Accepted (p < 0.05)",
          rejected: "Rejected",
        },
        note: "8 of 10 direct hypotheses were accepted. All four streamer traits build trust; only professionalism and entertainment create flow (H2 and H6 rejected). Trust and flow then drive impulse buying, and mediate the effect of professionalism and entertainment (H11b, d and H12b, d).",
      },
    },
    {
      type: "table",
      props: {
        title: "Direct-effect test results",
        text: "SmartPLS bootstrapping. The strongest effect is <b>flow → impulse buying (0.556)</b>.",
        columns: ["Hypothesis", "Relationship", "Path coefficient (O)", "T value", "P value", "Result"],
        rows: [
          ["H1", "Charisma → Trust", "0.113", "2.300", "0.021", "<b>Accepted</b>"],
          ["H2", "Charisma → Flow", "0.076", "1.473", "0.141", "Rejected"],
          ["H3", "Professionalism → Trust", "0.264", "5.254", "< 0.001", "<b>Accepted</b>"],
          ["H4", "Professionalism → Flow", "0.167", "3.588", "< 0.001", "<b>Accepted</b>"],
          ["H5", "Interactivity → Trust", "0.111", "2.193", "0.028", "<b>Accepted</b>"],
          ["H6", "Interactivity → Flow", "0.076", "1.482", "0.139", "Rejected"],
          ["H7", "Entertainment → Trust", "0.245", "4.774", "< 0.001", "<b>Accepted</b>"],
          ["H8", "Entertainment → Flow", "0.242", "4.762", "< 0.001", "<b>Accepted</b>"],
          ["H9", "Trust → Impulse buying", "0.156", "3.377", "0.001", "<b>Accepted</b>"],
          ["H10", "Flow → Impulse buying", "0.556", "13.141", "< 0.001", "<b>Accepted</b>"],
        ],
        minWidth: 640,
      },
    },
    {
      type: "table",
      props: {
        title: "Indirect-effect (mediation) test results",
        text: "Trust and flow carry the influence of <b>professionalism</b> and <b>entertainment</b> through to the purchase; the strongest indirect path is <b>entertainment → flow → impulse buying (0.135)</b>.",
        columns: ["Hypothesis", "Path", "Indirect effect", "T value", "P value", "Result"],
        rows: [
          ["H11a", "Charisma → Trust → Impulse buying", "0.018", "1.822", "0.069", "Rejected"],
          [
            "H11b",
            "Professionalism → Trust → Impulse buying",
            "0.041",
            "2.834",
            "0.005",
            "<b>Accepted</b>",
          ],
          ["H11c", "Interactivity → Trust → Impulse buying", "0.017", "1.778", "0.075", "Rejected"],
          [
            "H11d",
            "Entertainment → Trust → Impulse buying",
            "0.038",
            "2.783",
            "0.005",
            "<b>Accepted</b>",
          ],
          ["H12a", "Charisma → Flow → Impulse buying", "0.042", "1.460", "0.144", "Rejected"],
          [
            "H12b",
            "Professionalism → Flow → Impulse buying",
            "0.093",
            "3.406",
            "0.001",
            "<b>Accepted</b>",
          ],
          ["H12c", "Interactivity → Flow → Impulse buying", "0.042", "1.485", "0.138", "Rejected"],
          [
            "H12d",
            "Entertainment → Flow → Impulse buying",
            "0.135",
            "4.343",
            "< 0.001",
            "<b>Accepted</b>",
          ],
        ],
        minWidth: 640,
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
          "<b>Trust:</b> all four streamer traits build it — professionalism (0.264) and entertainment (0.245) matter most.",
          "<b>Flow:</b> only professionalism and entertainment pull viewers into the stream; charisma and interactivity alone do not (H2, H6 rejected).",
          "<b>Impulse buying:</b> flow is by far the strongest driver (0.556), ahead of trust (0.156).",
          "<b>Mediation:</b> only professionalism and entertainment reach the purchase through trust and flow — charisma and interactivity do not.",
          "<b>For produce sellers:</b> pair product expertise with an engaging, entertaining stream to turn viewers into buyers.",
          "<b>Recognition:</b> highest score from the defense panel.",
        ],
      },
    },
    {
      type: "gallery",
      props: {
        variant: "collage",
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
