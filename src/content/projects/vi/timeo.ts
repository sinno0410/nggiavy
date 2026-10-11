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
    "Digital Marketing Intern · 01/2024 – 04/2024<br/><br/>Xây dựng hành trình khách hàng, kế hoạch nội dung và quản lý fanpage cho TIMEO, studio workshop tufting.",
  components: [
    {
      type: "text",
      props: {
        title: "Customer journey map",
        text: "Thiết kế hành trình khách hàng gồm 7 giai đoạn để hiểu rõ cách khách hàng <b>biết đến</b>, <b>đặt lịch</b> và <b>gắn bó</b> với workshop. Bản đồ hành trình trở thành nền tảng chiến lược cho marketing và cải thiện dịch vụ, chỉ ra những thời điểm then chốt ảnh hưởng đến quyết định đặt lịch và mức độ tương tác.",
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
        title: "Insight, timeline & lịch nội dung",
        text: "Xây dựng insight thương hiệu và kế hoạch nội dung social hằng tuần cho fanpage, tập trung vào nội dung theo mùa, bắt trend và hài hước để thu hút lượt truy cập.",
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
        alt: "Lịch nội dung",
        caption: "Lịch nội dung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo3,
        alt: "Nội dung social hằng tuần",
        caption: "Nội dung social hằng tuần",
      },
    },
    {
      type: "list",
      props: {
        title: "Bài đăng tiêu biểu",
        items: [
          "<a href=\"https://www.facebook.com/share/p/1EYdw7A8YM/\" target=\"_blank\" rel=\"noopener\">Bài đăng 1</a>",
          "<a href=\"https://www.facebook.com/share/p/1AQj65z8gv/\" target=\"_blank\" rel=\"noopener\">Bài đăng 2</a>",
          "<a href=\"https://www.facebook.com/share/p/15ASRjaqKf/\" target=\"_blank\" rel=\"noopener\">Bài đăng 3</a>",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "So với cùng kỳ trước, fanpage Facebook dù đã tạm dừng quảng cáo vẫn <b>tăng 48% lượt tiếp cận</b> và <b>tăng 8.7% lượt truy cập</b>, trong khi số người theo dõi và liên hệ vẫn ổn định.<br/><br/>Theo đánh giá bằng Fanpage Karma, các bài đăng liên tục nằm trong <b>top 10</b>, một số bài đạt <b>tỷ lệ tương tác cao nhất (#1)</b> so với đối thủ. Tỷ lệ tương tác mỗi bài phần lớn cao hơn mức trung bình <b>0.34%</b> của ngành thủ công mỹ nghệ.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo4,
        alt: "Tỷ lệ tương tác mỗi bài",
        caption: "Tỷ lệ tương tác mỗi bài",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: timeo5,
        alt: "Kết quả",
        caption: "Kết quả",
      },
    },
  ],
} as const satisfies ProjectContent;
