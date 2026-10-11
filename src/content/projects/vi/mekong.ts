import mekong0 from "../../../assets/images/projects/mekong/mekong-0.webp";
import mekong1 from "../../../assets/images/projects/mekong/mekong-1.webp";
import mekong2 from "../../../assets/images/projects/mekong/mekong-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Mekong Petrochem – SK ZIC Vietnam",
  theme: "light",
  tags: ["social", "content", "ads", "event"],
  description:
    "Social Media Marketing · 04/2025 – 05/2026<br/><br/>Phụ trách social media in-house cho hai thương hiệu dầu nhớt SK ZIC và Hóa Dầu Mekong (SK Group): xây dựng chiến lược nội dung đa kênh, triển khai chiến dịch digital và truyền thông sự kiện.",
  components: [
    {
      type: "text",
      props: {
        title: "Chiến lược nội dung social",
        text: "Xây dựng kế hoạch nội dung tổng thể: xác định vai trò và mục tiêu của từng nền tảng, gắn chiến lược nội dung với hành trình khách hàng, và định hình cách nội dung hỗ trợ nhận diện thương hiệu, giáo dục khách hàng và bán hàng.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong0,
        alt: "Chiến lược nội dung social",
        caption: "Chiến lược nội dung social",
      },
    },
    {
      type: "text",
      props: {
        title: "Zalo Mini App – chiến dịch digital",
        text: "Lên kế hoạch và triển khai chiến dịch truyền thông Zalo Mini App cho <b>Chăm Xe</b> trên fanpage Facebook, Google GDN, YouTube và Zalo OA: phân tích đối tượng, xây dựng content pillar, lịch nội dung, timeline chiến dịch và chiến lược quảng cáo.<br/><br/>Chiến dịch đạt <b>hơn 9 triệu lượt tiếp cận trong 3 tháng</b> và hoàn thành <b>39% KPI đăng ký của cả năm</b>.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong1,
        alt: "Chiến dịch Zalo Mini App",
        caption: "Chiến dịch Zalo Mini App",
      },
    },
    {
      type: "text",
      props: {
        title: "Truyền thông sự kiện",
        text: "Phụ trách truyền thông sự kiện: lên kế hoạch và triển khai nội dung quảng bá trên các kênh digital nhằm hỗ trợ kích hoạt sự kiện và tăng tương tác với khán giả.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: mekong2,
        alt: "Truyền thông sự kiện",
        caption: "Truyền thông sự kiện",
      },
    },
    {
      type: "list",
      props: {
        title: "Các sự kiện",
        items: [
          "<a href=\"https://skzic.com.vn/vn/green-pop-up-2025.html\" target=\"_blank\" rel=\"noopener\">Green Pop Up – ZIC x Ve Chai Ơi</a>",
          "<a href=\"https://skzic.com.vn/vn/sk-zic-tai-ashura-calisthenics-battle-2025.html\" target=\"_blank\" rel=\"noopener\">ZIC x Ashura Calisthenics Battle</a>",
          "<a href=\"https://mekongpetro.com/vn/hoa-dau-mekong-tai-business-va-library-lan-thu-7.html\" target=\"_blank\" rel=\"noopener\">Mekong x YBA – Business & Library #7</a>",
          "<a href=\"https://tuoitre.vn/hoa-dau-mekong-tao-dau-an-tai-hoi-cho-mua-thu-2025-20251102140843013.htm\" target=\"_blank\" rel=\"noopener\">Mekong x Hội chợ mùa Thu 2025</a>",
          "<a href=\"https://skzic.com.vn/vn/sk-zic-tai-cho-tet-cong-doan-xuan-2026.html\" target=\"_blank\" rel=\"noopener\">Chợ Tết Công đoàn 2026</a>",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
