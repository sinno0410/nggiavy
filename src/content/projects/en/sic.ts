import sicPitchVideo from "../../../assets/videos/sic-pitch.mp4";
import sic_cost from "../../../assets/images/projects/sic/cost.webp";
import sic_customer from "../../../assets/images/projects/sic/customer.webp";
import sic_growth from "../../../assets/images/projects/sic/growth.webp";
import sic_innovation from "../../../assets/images/projects/sic/innovation.webp";
import sic_investment from "../../../assets/images/projects/sic/investment.webp";
import sic_place from "../../../assets/images/projects/sic/place.webp";
import sic_product from "../../../assets/images/projects/sic/product.webp";
import sic_promotion from "../../../assets/images/projects/sic/promotion.webp";
import sic_summary from "../../../assets/images/projects/sic/summary.webp";
import sic_team from "../../../assets/images/projects/sic/team.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Vietnam Swiss Innovation Challenge 2025",
  theme: "light",
  tags: ["strategy", "research", "content"],
  description:
    "International innovation competition · Van Lang University × FHNW (Switzerland) · 2025<br/><br/>Team Trashionistas — <b>LopLoop</b>, high-fashion handbags made from old tyres. Idea & business model, market research, brand building and pitching in English. Made the <b>Top 20</b> out of 400+ students.",
  components: [
    {
      type: "stats",
      props: {
        title: "The competition in numbers",
        items: [
          {
            value: "400+",
            label: "students",
          },
          {
            value: "25",
            label: "universities",
          },
          {
            value: "3",
            label: "rounds, all in English",
          },
          {
            value: "Top 20",
            label: "our team, Trashionistas",
          },
        ],
        note: "Competition-wide figures from Van Lang University.",
      },
    },
    {
      type: "text",
      props: {
        title: "01 · What is SIC 2025?",
        text: "The <b>Vietnam Swiss Innovation Challenge</b> is an international innovation competition run by the <b>Faculty of Commerce, Van Lang University</b> with the <b>University of Applied Sciences and Arts Northwestern Switzerland (FHNW)</b>. The 2025 theme, <i>“Innovating for Impacts: Sustainable Solutions for an Inclusive Asia”</i>, asked teams of up to three students to design a business, product or service built around sustainability. The winning team represents Vietnam at the international final in Switzerland.",
      },
    },
    {
      type: "list",
      props: {
        title: "My role in Trashionistas",
        items: [
          "<b>Idea & business model</b> – shaping LopLoop from a problem into a product and a way to make money.",
          "<b>Market & customer research</b> – defining who buys and why.",
          "<b>Brand building</b> – mission, slogan and brand story.",
          "<b>Pitching</b> – presenting the idea in English before the judges.",
        ],
      },
    },
    {
      type: "rounds",
      props: {
        title: "02 · Our path in the competition",
        text: "Out of 400+ students, Trashionistas made it through the idea round into the Top 20 and pitched LopLoop live.",
        rounds: [
          {
            label: "Round 1 · Jul 2025",
            title: "Idea Generation",
            subtitle: "Proposal & video",
            text: "A written business proposal and an introduction video for LopLoop, submitted in English. The Top 20 teams moved on.",
            link: {
              label: "View the proposal",
              href: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
            },
          },
          {
            label: "Round 2 · 30 Aug 2025",
            title: "Top 20",
            subtitle: "Idea Innovation",
            text: "A 5-minute pitch and 5 minutes of Q&A with the judges at Van Lang University. Our journey ended here, with the Top 8 going on to the final.",
            highlight: true,
          },
        ],
      },
    },
    {
      type: "stats",
      props: {
        title: "03 · The problem: tyres nobody wants",
        items: [
          {
            value: "400,000 t",
            label: "rubber waste released in Vietnam every year",
          },
          {
            value: "40%",
            label: "burned",
          },
          {
            value: "50%",
            label: "landfilled",
          },
          {
            value: "Only 10%",
            label: "recycled",
          },
        ],
        note: "Source: VWRA, 2022 — leading to soil and air pollution, fire hazards and wasted resources.",
      },
    },
    {
      type: "text",
      props: {
        text: "And a paradox in sustainable fashion: <i>“Why invest in yet another organic, 100% natural item when the real solution to protecting the environment lies in simply continuing to wear what you already own?”</i> People with taste and ideals still struggle to find products that show who they are.",
      },
    },
    {
      type: "table",
      props: {
        title: "04 · The idea: LopLoop",
        text: "<b>A high-fashion handbag brand made from old tyres.</b> Slogan: <i>“Your style, your stand.”</i> — core values: individuality, transparency and eco-consciousness.",
        columns: ["", "Executive summary"],
        rows: [
          [
            "Situation",
            "Fashion is moving towards sustainability and recycling unusual materials, while millions of scrap tyres are thrown away every year.",
          ],
          ["Complication", "No handbag brand positions itself as both high-end and sustainable."],
          [
            "Question",
            "How do we build a unique fashion business with a sustainable message, superior materials and a breakthrough story?",
          ],
          [
            "Answer",
            "<b>LopLoop</b> — high-fashion handbags from old tyres, recovering capital after <b>2 years</b>.",
          ],
        ],
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "stats",
      props: {
        title: "Projected impact",
        items: [
          {
            value: "8.5+ t",
            label: "of old tyres reused",
          },
          {
            value: "VND 7.42B+",
            label: "revenue generated",
          },
          {
            value: "8,640+",
            label: "young people inspired to protect the environment",
          },
        ],
        note: "Targets from the business proposal, contributing to SDG 12 and SDG 15.",
      },
    },
    {
      type: "text",
      props: {
        title: "Brand story",
        text: "<i>“There is a paradox in fashion: the more beautiful, the more harmful. We believe personality doesn't have to cost the environment, and sustainable fashion doesn't have to be dull. That's why we created LopLoop — where bags made from old tyres become a statement of living with style and responsibility. Because living boldly means living true, and living green.”</i>",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_summary,
        alt: "LopLoop executive summary",
        caption: "Executive summary",
      },
    },
    {
      type: "list",
      props: {
        title: "05 · Target customer: #IdentityShapers",
        items: [
          "<b>Who:</b> women aged 23–29 (young Millennials and mature Gen Z), willing to pay VND 700,000–2,000,000 per bag.",
          "<b>What they do:</b> buy on design, uniqueness and how well a bag reflects their style; look for products that are “different, with a story”.",
          "<b>What they think:</b> they want to be seen as having taste; sustainability is a bonus, not the main reason — and they are sensitive to greenwashing.",
          "<b>Insight:</b> <i>style-driven customers buy bags not just for utility but to express their personal taste. They choose products that are truly fashionable, with sustainability as an added advantage that makes them proud to talk about it.</i>",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_customer,
        alt: "Customer segmentation",
        caption: "Fashion × sustainability matrix",
      },
    },
    {
      type: "list",
      props: {
        title: "06 · Product & production",
        items: [
          "<b>Value proposition:</b> sustainable materials, high durability, high fashion — 98% reclaimed rubber, 30×18×6 cm, 550 g, water-resistant lining, recycled leather and a silver chain strap.",
          "<b>Partners:</b> recycled rubber from Ngoc Anh Binh (Caosuvina) and manufacturing by An Phuc, both ISO 9001.",
          "<b>R&D roadmap:</b> TDP from recycled tyres with water-based PU (with Tyromer, 2029–2030) for smoother, multi-coloured, odour-free bags.",
          "<b>Circular after-sales:</b> collecting used bags, trade-in discounts and C2C bag exchanges, feeding material back into new products.",
          "<b>Road to market:</b> 17 steps from collecting and sorting tyres, odour removal and surface treatment to cutting, heat pressing, sewing, durability testing and packaging.",
        ],
      },
    },
    {
      type: "gallery",
      props: {
        columns: 3,
        images: [
          {
            src: sic_product,
            caption: "Product templates & value proposition",
          },
          {
            src: sic_innovation,
            caption: "Material innovation & circular after-sales",
          },
          {
            src: sic_place,
            caption: "Channels & road-to-market process",
          },
        ],
      },
    },
    {
      type: "table",
      props: {
        title: "07 · 3-year business & communication plan",
        text: "Website as the core sales channel, Shopee and TikTok Shop for reach, Facebook and Instagram for leads and community.",
        columns: ["Phase", "Year", "Objective", "Key tactics", "Products sold", "Budget"],
        rows: [
          [
            "Awareness",
            "2027",
            "Build brand & product positioning",
            "Social buzz, PR, KOL/KOC, email",
            "540",
            "VND 120.5M",
          ],
          [
            "Consideration",
            "2028",
            "Highlight the product's distinct value",
            "Social buzz, remarketing, affiliate",
            "2,160",
            "VND 296.3M",
          ],
          [
            "Conversion",
            "2029",
            "Turn prospects into customers",
            "Loyalty, sale promos, referral, membership",
            "5,400",
            "VND 660.1M",
          ],
        ],
        minWidth: 760,
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_promotion,
        alt: "3-year strategy",
        caption: "3-year business & communication strategy",
      },
    },
    {
      type: "stats",
      props: {
        title: "08 · Finance & call for investment",
        items: [
          {
            value: "VND 1.12M",
            label: "retail price per bag (VAT incl.)",
          },
          {
            value: "VND 609K",
            label: "total cost per bag",
          },
          {
            value: "34–41%",
            label: "profit / revenue per unit",
          },
          {
            value: "2 years",
            label: "payback period",
          },
          {
            value: "VND 905M",
            label: "investment called for, for 23% equity",
          },
          {
            value: "VND 3B",
            label: "company valuation",
          },
        ],
      },
    },
    {
      type: "table",
      props: {
        title: "Revenue & profit objectives",
        columns: ["", "2027", "2028", "2029"],
        rows: [
          ["Products sold", "540", "2,160", "5,400"],
          ["Revenue (VND)", "559.5M", "2.24B", "5.59B"],
          ["Pre-tax profit (VND)", "−43.3M", "756.2M", "2.29B"],
          ["Profit / revenue", "−7.74%", "33.79%", "41%"],
        ],
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "gallery",
      props: {
        columns: 3,
        images: [
          {
            src: sic_cost,
            caption: "Cost management",
          },
          {
            src: sic_growth,
            caption: "Growth management",
          },
          {
            src: sic_investment,
            caption: "Call for investment",
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "09 · Pitching",
        text: "Presenting LopLoop's target customers in the Idea Innovation round. <a href=\"https://drive.google.com/file/d/1PHSEMzxhkOnCcs8KQPA2ZICAd1JK86Wt/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Watch the introduction video ↗</a> · <a href=\"https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">View the full business proposal ↗</a>",
      },
    },
    {
      type: "media",
      props: {
        type: "video",
        src: sicPitchVideo,
        caption: "Pitching in the Idea Innovation round",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_team,
        alt: "Team Trashionistas",
        caption: "Team Trashionistas – Vy Nguyen, Thuong Hoang, Khanh Nguyen",
      },
    },
  ],
} as const satisfies ProjectContent;
