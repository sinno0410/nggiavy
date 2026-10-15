import hatmuoi0 from "../../../assets/images/projects/hatmuoi/hatmuoi-0.webp";
import hatmuoi1 from "../../../assets/images/projects/hatmuoi/hatmuoi-1.webp";
import hatmuoi2 from "../../../assets/images/projects/hatmuoi/hatmuoi-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Hạt Muối Của Biển",
  theme: "light",
  parent: "freelance",
  tags: ["tiktok", "social", "content", "analytics"],
  description:
    "Freelance Social Marketing Executive · 07/2025 – 01/2026<br/><br/>Hạt Muối Của Biển (@_ngththuyz) là kênh TikTok thời trang về check-in chụp ảnh, mẹo tạo dáng, phối đồ và du lịch biển, hướng đến nữ giới trẻ yêu thời trang, nhiếp ảnh và lối sống chill, tích cực. Phụ trách quản lý kênh toàn diện.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi0,
        alt: "TikTok & Instagram",
        caption: "TikTok & Instagram",
      },
    },
    {
      type: "text",
      props: {
        title: "Mục tiêu",
        text: "Xây dựng sự hiện diện mạnh hơn trên social bằng cách tăng tính nhất quán của nội dung, tăng tương tác và đồng bộ nhận diện hình ảnh giữa TikTok và Instagram.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi1,
        alt: "Kết quả – tháng 01/2026",
        caption: "Kết quả – tháng 01/2026",
      },
    },
    {
      type: "list",
      props: {
        title: "Kết quả (TikTok, tháng 01/2026)",
        items: [
          "<b>24K</b> người theo dõi mới",
          "<b>50M</b> tổng lượt xem",
          "<b>2.3M</b> tăng trưởng tương tác",
          "<b>~4.000</b> follower tăng trung bình",
          "<b>531.5K</b> lượt truy cập trang",
          "<b>53</b> booking từ nhãn hàng",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Chiến lược thương hiệu cá nhân & tăng trưởng",
        text: "Xây dựng thương hiệu cá nhân và chiến lược tăng trưởng TikTok cho creator: định vị đối tượng, định hướng nội dung và mục tiêu tăng trưởng tự nhiên dài hạn.",
      },
    },
    {
      type: "list",
      props: {
        title: "Vai trò & phạm vi công việc",
        items: [
          "<b>Chiến lược & định vị:</b> phân tích thị trường, đối thủ và xu hướng TikTok, insight người xem, định vị thương hiệu cá nhân, chiến lược nội dung, content pillar và lịch nội dung.",
          "<b>Vận hành & sản xuất:</b> lên concept, viết kịch bản, quay và đạo diễn, dựng video, thiết kế thumbnail, quản lý quy trình sản xuất và lịch đăng.",
          "<b>Dữ liệu & tối ưu:</b> theo dõi TikTok analytics hằng tuần/tháng, đánh giá hiệu quả từng video và đề xuất, triển khai tối ưu dựa trên dữ liệu.",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hatmuoi2,
        alt: "Nội dung",
        caption: "Nội dung",
      },
    },
    {
      type: "list",
      props: {
        title: "Content pillars",
        items: [
          "<b>Gợi ý phong cách & phối đồ:</b> cách phối trang phục theo dịp và mùa.",
          "<b>Hướng dẫn tạo dáng & chụp ảnh:</b> nội dung thực tế, hữu ích để người xem quay lại kênh.",
          "<b>Hướng dẫn & lifestyle:</b> makeup, outfit giúp tăng niềm tin vào thương hiệu cá nhân.",
          "<b>Trend & challenge:</b> tận dụng xu hướng để tiếp cận người xem mới.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Tối ưu dựa trên dữ liệu",
        items: [
          "60% lượt xem đến từ For You → tối ưu 3 giây đầu và tỷ lệ xem hết video.",
          "80% người xem là nữ → điều chỉnh góc máy, ánh sáng và tone nội dung theo gu thẩm mỹ của họ.",
          "18.8% lượt xem đến từ trang cá nhân → tối ưu bio và ảnh đại diện để chuyển đổi thành follower.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
