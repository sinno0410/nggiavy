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
    "SEO On-page Intern · 05/2024 – 12/2024<br/><br/>Nghiên cứu từ khóa, lên kế hoạch nội dung và audit SEO sau khi đăng bài cho website của agency, sử dụng Ahrefs, Google Search Console và Screaming Frog.",
  components: [
    {
      type: "list",
      props: {
        title: "Từ khóa",
        items: [
          "Thu thập dữ liệu từ khóa bằng Ahrefs và Google Search Console, sau đó chọn lọc theo mức độ liên quan.",
          "Phân tích search intent, độ khó từ khóa và lượng tìm kiếm.",
          "Sắp xếp từ khóa theo <b>cấu trúc SILO</b> để tăng độ uy tín chủ đề và liên kết nội bộ.",
          "Xây dựng <b>lịch nội dung SEO</b> dựa trên cơ hội từ khóa và xu hướng tìm kiếm.",
          "Viết <b>bài chuẩn SEO</b> để tăng khả năng hiển thị tự nhiên.",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek0,
        alt: "Nghiên cứu từ khóa & lịch nội dung",
        caption: "Nghiên cứu từ khóa & lịch nội dung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek1,
        alt: "Cấu trúc SILO",
        caption: "Cấu trúc SILO",
      },
    },
    {
      type: "text",
      props: {
        title: "Audit SEO",
        text: "Audit SEO sau khi đăng bài: rà soát các yếu tố SEO kỹ thuật, metadata, heading, liên kết nội bộ và tối ưu từ khóa để đảm bảo nội dung đạt chuẩn SEO. Dùng Screaming Frog để tìm các yếu tố còn thiếu, giúp tăng khả năng lên top trên trang kết quả tìm kiếm.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: semtek2,
        alt: "Quy trình audit SEO sau đăng bài",
        caption: "Quy trình audit SEO sau đăng bài",
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
