import ebuzz_award from "../../../assets/images/projects/ebuzz/award.webp";
import ebuzz_award_me from "../../../assets/images/projects/ebuzz/award-me.webp";
import ebuzz_bts_round1_video from "../../../assets/videos/ebuzz-bts-round1.mp4";
import ebuzz_bts_video from "../../../assets/videos/ebuzz-bts.mp4";
import ebuzz_coming_soon_video from "../../../assets/videos/ebuzz-coming-soon.mp4";
import ebuzz_ebuzz_bts from "../../../assets/images/projects/ebuzz/ebuzz-bts.webp";
import ebuzz_ebuzz_coming_soon from "../../../assets/images/projects/ebuzz/ebuzz-coming-soon.webp";
import ebuzz_ebuzz_round1 from "../../../assets/images/projects/ebuzz/ebuzz-round1.webp";
import ebuzz_ebuzz_trailer from "../../../assets/images/projects/ebuzz/ebuzz-trailer.webp";
import ebuzz_round1_video from "../../../assets/videos/ebuzz-round1.mp4";
import ebuzz_stage_final from "../../../assets/images/projects/ebuzz/stage-final.webp";
import ebuzz_stage_present from "../../../assets/images/projects/ebuzz/stage-present.webp";
import ebuzz_stage_results from "../../../assets/images/projects/ebuzz/stage-results.webp";
import ebuzz_stage_team from "../../../assets/images/projects/ebuzz/stage-team.webp";
import ebuzz_storyboard_1 from "../../../assets/images/projects/ebuzz/storyboard-1.webp";
import ebuzz_storyboard_2 from "../../../assets/images/projects/ebuzz/storyboard-2.webp";
import ebuzz_storyboard_3 from "../../../assets/images/projects/ebuzz/storyboard-3.webp";
import ebuzz_storyboard_4 from "../../../assets/images/projects/ebuzz/storyboard-4.webp";
import ebuzz_trailer_video from "../../../assets/videos/ebuzz-trailer.mp4";

import type { ProjectContent } from "../../types";

export default {
  title: "E-Buzz Media 2025",
  theme: "light",
  tags: ["content", "tiktok", "strategy"],
  description:
    "Short video competition · Van Lang University × Laneige Vietnam × TikTok · 2025<br/><br/>Team Đẹp (E10) — project management, video direction, idea & script, communication plan and the final presentation. Four rounds, one short film, <b>Top 4 overall</b> and the <b>High-Quality Video</b> award.",
  components: [
    {
      type: "stats",
      props: {
        title: "The competition in numbers",
        items: [
          {
            value: "1,800+",
            label: "students joined",
          },
          {
            value: "350–400",
            label: "competing videos",
          },
          {
            value: "6M+",
            label: "views on TikTok & social",
          },
          {
            value: "4",
            label: "rounds",
          },
          {
            value: "Top 4",
            label: "overall ranking",
          },
          {
            value: "1",
            label: "High-Quality Video award",
          },
        ],
        note: "Competition-wide figures from the organisers.",
      },
    },
    {
      type: "text",
      props: {
        title: "01 · What is E-Buzz Media?",
        text: "E-Buzz Media is an annual content-creation and communication competition for students, run by the <b>Faculty of Public Relations & Communication, Van Lang University</b>. The 2025 edition partnered with <b>Laneige Vietnam</b> and TikTok under the message <i>“Spotlight on you”</i>. Teams went through <i>The Awakening</i>, <i>Power Up</i> and <i>The Culmination</i> before the five best teams met in the grand final.",
      },
    },
    {
      type: "list",
      props: {
        title: "My role in Team Đẹp (E10)",
        items: [
          "<b>Project & on-set management</b> – timeline, task assignment and shoot preparation.",
          "<b>Video director</b> – directing the shoots and giving edit feedback cut by cut.",
          "<b>Idea & script</b> – insight, big idea, script and storyboard.",
          "<b>Communication plan</b> – the launch sequence for the film.",
          "<b>Presenting</b> on stage at the grand final.",
        ],
      },
    },
    {
      type: "rounds",
      props: {
        title: "02 · Four rounds to the Top 4",
        text: "From a 60-second product video to a short film and a stage presentation.",
        rounds: [
          {
            label: "Round 1",
            title: "The Awakening",
            subtitle: "Khai Mở",
            text: "A 45–60s video, <i>“Comfort zone vs. Spotlight zone”</i>: a sluggish morning turns around once she cares for her skin with Laneige Water Bank.",
          },
          {
            label: "Round 2",
            title: "Power Up",
            subtitle: "Dưỡng Năng",
            text: "Turning the idea into a short film: insight and big idea, a script rewritten through several versions, and a 40-scene storyboard in three acts.",
            link: {
              label: "Open the original script",
              href: "https://docs.google.com/spreadsheets/d/1WmXZWtCEhWOmz11FiawDQEZoOxeq0W4igbwUX4rAXnY/edit?usp=sharing",
            },
          },
          {
            label: "Round 3",
            title: "The Culmination",
            subtitle: "Tinh Hoa",
            text: "Shooting and editing the film <b>“Ánh Sáng”</b>, launched with a five-step campaign: Poster → Coming soon → Trailer → Official → BTS.",
            link: {
              label: "Watch on TikTok",
              href: "https://www.tiktok.com/@poeoenty_/video/7509836124106296584",
            },
          },
          {
            label: "Grand final",
            title: "Top 4",
            subtitle: "High-Quality Video award",
            text: "Presenting the creative idea, execution plan, communication plan and results on stage — finishing <b>Top 4 overall</b> and winning the <b>High-Quality Video</b> award.",
            highlight: true,
          },
        ],
      },
    },
    {
      type: "reels",
      props: {
        title: "The competition videos",
        text: "Round 1's product video and the official film that took Team Đẹp to the final — both with sound.",
        reels: [
          {
            src: ebuzz_round1_video,
            poster: ebuzz_ebuzz_round1,
            caption: "Round 1 · Comfort zone vs. Spotlight zone",
          },
          {
            embed: "https://www.tiktok.com/player/v1/7509836124106296584",
            caption: "Official film · Ánh Sáng",
            href: "https://www.tiktok.com/@poeoenty_/video/7509836124106296584",
            hrefLabel: "TikTok",
          },
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "video",
        src: ebuzz_bts_round1_video,
        caption: "Behind the scenes · Round 1 with Laneige Water Bank",
      },
    },
    {
      type: "text",
      props: {
        title: "03 · Insight & big idea",
        text: "<b>Insight:</b> living at today's rushed pace, everyone wants instant results. People give up on skincare after a few days without visible change — and turn away from their dreams at the first obstacle. Yet every good thing takes time: lasting change starts with small, steady, quiet steps and an unshakeable belief in yourself.<br/><br/><b>Big idea:</b> <i>“Patience is the deepest form of love. Being patient with your skin is learning to be patient with yourself.”</i>",
      },
    },
    {
      type: "text",
      props: {
        title: "04 · Script & storyboard",
        text: "“Ánh Sáng” follows a young woman who dreams of becoming a tour guide, told with the three-act structure (Save the Cat): her first tour goes wrong and she nearly quits; a talk with her mother about her grandfather — a soldier who loved his country — rekindles her; she trains every day, with Laneige Water Bank as a quiet companion; and she returns as a confident guide who inspires others. <a href=\"https://docs.google.com/spreadsheets/d/1WmXZWtCEhWOmz11FiawDQEZoOxeq0W4igbwUX4rAXnY/edit?usp=sharing\" target=\"_blank\" rel=\"noopener\">Open the original script ↗</a>",
      },
    },
    {
      type: "gallery",
      props: {
        columns: 2,
        images: [
          {
            src: ebuzz_storyboard_1,
            caption: "Act 1 – Setup & inciting incident",
          },
          {
            src: ebuzz_storyboard_2,
            caption: "Act 2.1 – Confrontation",
          },
          {
            src: ebuzz_storyboard_3,
            caption: "Act 2.2 – Recovery",
          },
          {
            src: ebuzz_storyboard_4,
            caption: "Act 3 – Rise & inspire",
          },
        ],
      },
    },
    {
      type: "gallery",
      props: {
        title: "05 · Launch campaign",
        text: "Five posts built anticipation before and after the official film: Poster → Coming soon → Trailer → Official → BTS. <a href=\"https://www.tiktok.com/@poeoenty_/video/7509836124106296584\" target=\"_blank\" rel=\"noopener\">Watch the full film on TikTok ↗</a>",
        columns: 3,
        images: [
          {
            src: ebuzz_ebuzz_coming_soon,
            video: ebuzz_coming_soon_video,
            caption: "Coming soon",
          },
          {
            src: ebuzz_ebuzz_trailer,
            video: ebuzz_trailer_video,
            caption: "Trailer",
          },
          {
            src: ebuzz_ebuzz_bts,
            video: ebuzz_bts_video,
            caption: "Behind the scenes",
          },
        ],
      },
    },
    {
      type: "gallery",
      props: {
        title: "06 · Grand final",
        text: "Team Đẹp presented on stage and was honoured with the High-Quality Video award.",
        columns: 2,
        images: [
          {
            src: ebuzz_award_me,
            caption: "Me with the High-Quality Video award",
          },
          {
            src: ebuzz_award,
            caption: "Team Đẹp receiving the award",
          },
          {
            src: ebuzz_stage_results,
            caption: "Presenting the communication results",
          },
          {
            src: ebuzz_stage_present,
            caption: "Introducing Team Đẹp – E10",
          },
          {
            src: ebuzz_stage_team,
            caption: "On stage at the grand final",
          },
          {
            src: ebuzz_stage_final,
            caption: "Team Đẹp – E10",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
