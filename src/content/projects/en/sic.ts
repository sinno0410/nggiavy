import sicPitchVideo from "../../../assets/videos/sic-pitch.mp4";

import type { ProjectContent } from "../../types";

export default {
  title: "Vietnam Swiss Innovation Challenge 2025",
  theme: "light",
  tags: ["strategy", "research", "content"],
  description:
    "International innovation competition · Van Lang University × FHNW (Switzerland) · 2025<br/><br/>Team Trashionistas — <b>Lop Loop</b>, bags and shoes made from old tyres. Idea & business model, market research, brand building and pitching in English. Made the <b>Top 20</b> out of 400+ students.",
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
        text: "The <b>Vietnam Swiss Innovation Challenge</b> is an international innovation competition run by the <b>Faculty of Commerce, Van Lang University</b> with the <b>University of Applied Sciences and Arts Northwestern Switzerland (FHNW)</b>. The 2025 theme, <i>“Innovating for Impacts: Sustainable Solutions for an Inclusive Asia”</i>, asked teams of up to three students to design a business, product or service built around sustainability — environmental models, social products or smart technology. The winning team represents Vietnam at the international final in Switzerland.",
      },
    },
    {
      type: "list",
      props: {
        title: "My role in Trashionistas",
        items: [
          "<b>Idea & business model</b> – shaping Lop Loop from a problem into a product and a way to make money.",
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
        text: "Out of 400+ students, Trashionistas made it through the idea round into the Top 20 and pitched Lop Loop live.",
        rounds: [
          {
            label: "Round 1 · Jul 2025",
            title: "Idea Generation",
            subtitle: "Proposal & video",
            text: "A written business proposal and an introduction video for Lop Loop, submitted in English. The Top 20 teams moved on.",
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
      type: "text",
      props: {
        title: "03 · The idea: Lop Loop",
        text: "<b>Mission:</b> giving forgotten materials a second life — turning old tyres into bags and shoes that express each person's identity: sustainable for the planet, meaningful for people.<br/><br/><b>Slogan:</b> <i>“Your style, your stand.”</i>",
      },
    },
    {
      type: "text",
      props: {
        title: "Brand story",
        text: "<i>“There is a paradox in fashion: the more beautiful, the more harmful. And people with taste and ideals find it hardest to discover products that show who they are. We believe personality doesn't have to cost the environment, and sustainable fashion doesn't have to be dull. That's why we created Lop Loop — where bags and shoes made from old tyres become a statement of living with style and responsibility. Because living boldly means living true, and living green.”</i>",
      },
    },
    {
      type: "text",
      props: {
        title: "04 · Pitching",
        text: "Presenting Lop Loop's target customers in the Idea Innovation round — Gen Z who want to express their individuality through fashion. <a href=\"https://drive.google.com/file/d/1PHSEMzxhkOnCcs8KQPA2ZICAd1JK86Wt/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Watch the introduction video ↗</a> · <a href=\"https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">View the business proposal ↗</a>",
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
  ],
} as const satisfies ProjectContent;
