import type { Locale } from "../i18n/types";
import certHubspotSeo from "../assets/images/certificates/hubspot-seo.webp";
import certHubspotSocial from "../assets/images/certificates/hubspot-social-media.webp";
import certHubspotContent from "../assets/images/certificates/hubspot-content-marketing.webp";
import certMetaMeasure from "../assets/images/certificates/meta-measure-optimize.webp";
import certMetaSocial from "../assets/images/certificates/meta-social-media-management.webp";
import certMetaAnalytics from "../assets/images/certificates/meta-marketing-analytics.webp";
import awardEbuzz from "../assets/images/projects/ebuzz/award.webp";
import awardSic from "../assets/images/projects/sic/pitch.webp";

// Để thêm ảnh cho một giải thưởng:
// 1. đặt ảnh vào src/assets/images/achievements/
// 2. import ở đầu file, ví dụ: import ebuzz from "../assets/images/achievements/ebuzz.webp";
// 3. thêm `image: ebuzz,` vào giải thưởng tương ứng (cả en và vi)

export interface EducationItem {
  school: string;
  major: string;
  period: string;
  note?: string;
}

export interface AwardItem {
  title: string;
  event: string;
  year?: string;
  description?: string;
  image?: string;
  link?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  image: string;
  /** Public verification link (Coursera). */
  verify?: string;
}

export interface AchievementsContent {
  education: EducationItem[];
  awards: AwardItem[];
  certificates: CertificateItem[];
}

export const achievements: Record<Locale, AchievementsContent> = {
  en: {
    education: [
      {
        school: "Van Lang University",
        major: "Marketing – Digital Marketing",
        period: "2021 – 2025",
        note: "GPA 3.5",
      },
    ],
    awards: [
      {
        title: "Top 4",
        event: "E-Buzz Media 2025",
        year: "2025",
        description:
          "Short video competition by Van Lang University with Laneige Vietnam & TikTok. Made it through 4 rounds to the overall Top 4 and won the High-Quality Video award.",
        image: awardEbuzz,
        link: "/project/ebuzz",
      },
      {
        title: "Top 20",
        event: "Vietnam Swiss Innovation Challenge 2025",
        year: "2025",
        description:
          "International innovation competition by Van Lang University with FHNW (Switzerland). Our circular-fashion idea Lop Loop made the Top 20 and pitched in English in the Idea Innovation round.",
        image: awardSic,
        link: "/project/sic",
      },
      {
        title: "Top 3",
        event: "Scientific Research",
        description:
          "“Research on Streamer Social Presence and Impulsive Buying Behavior” received the highest score from the defense panel, placed in the overall Top 3 and was selected for presentation at the research conference.",
      },
    ],
    certificates: [
      {
        title: "SEO",
        issuer: "HubSpot Academy",
        date: "Mar 2025",
        image: certHubspotSeo,
      },
      {
        title: "Social Media",
        issuer: "HubSpot Academy",
        date: "May 2024",
        image: certHubspotSocial,
      },
      {
        title: "Content Marketing",
        issuer: "HubSpot Academy",
        date: "May 2024",
        image: certHubspotContent,
      },
      {
        title: "Measure and Optimize Social Media Marketing Campaigns",
        issuer: "Meta · Coursera",
        date: "Aug 2024",
        image: certMetaMeasure,
        verify: "https://coursera.org/verify/6I4TFB51KSNQ",
      },
      {
        title: "Social Media Management",
        issuer: "Meta · Coursera",
        date: "Aug 2024",
        image: certMetaSocial,
        verify: "https://coursera.org/verify/I7PI4MQKHBE7",
      },
      {
        title: "Marketing Analytics Foundation",
        issuer: "Meta · Coursera",
        date: "Aug 2024",
        image: certMetaAnalytics,
        verify: "https://coursera.org/verify/G56A0RHQCXPS",
      },
    ],
  },
  vi: {
    education: [
      {
        school: "Đại học Văn Lang",
        major: "Marketing – Digital Marketing",
        period: "2021 – 2025",
        note: "GPA 3.5",
      },
    ],
    awards: [
      {
        title: "Top 4",
        event: "E-Buzz Media 2025",
        year: "2025",
        description:
          "Cuộc thi video ngắn của ĐH Văn Lang cùng Laneige Vietnam & TikTok. Vượt qua 4 vòng thi, vào Top 4 chung cuộc và nhận giải Video chất lượng cao.",
        image: awardEbuzz,
        link: "/project/ebuzz",
      },
      {
        title: "Top 20",
        event: "Vietnam Swiss Innovation Challenge 2025",
        year: "2025",
        description:
          "Cuộc thi đổi mới sáng tạo quốc tế của ĐH Văn Lang cùng FHNW (Thụy Sĩ). Ý tưởng thời trang tuần hoàn Lop Loop lọt Top 20 và pitching bằng tiếng Anh tại vòng Idea Innovation.",
        image: awardSic,
        link: "/project/sic",
      },
      {
        title: "Top 3",
        event: "Nghiên cứu khoa học",
        description:
          "Đề tài “Research on Streamer Social Presence and Impulsive Buying Behavior” đạt điểm cao nhất hội đồng, lọt Top 3 chung cuộc và được chọn trình bày tại hội nghị khoa học.",
      },
    ],
    certificates: [
      {
        title: "SEO",
        issuer: "HubSpot Academy",
        date: "03/2025",
        image: certHubspotSeo,
      },
      {
        title: "Social Media",
        issuer: "HubSpot Academy",
        date: "05/2024",
        image: certHubspotSocial,
      },
      {
        title: "Content Marketing",
        issuer: "HubSpot Academy",
        date: "05/2024",
        image: certHubspotContent,
      },
      {
        title: "Measure and Optimize Social Media Marketing Campaigns",
        issuer: "Meta · Coursera",
        date: "08/2024",
        image: certMetaMeasure,
        verify: "https://coursera.org/verify/6I4TFB51KSNQ",
      },
      {
        title: "Social Media Management",
        issuer: "Meta · Coursera",
        date: "08/2024",
        image: certMetaSocial,
        verify: "https://coursera.org/verify/I7PI4MQKHBE7",
      },
      {
        title: "Marketing Analytics Foundation",
        issuer: "Meta · Coursera",
        date: "08/2024",
        image: certMetaAnalytics,
        verify: "https://coursera.org/verify/G56A0RHQCXPS",
      },
    ],
  },
};
