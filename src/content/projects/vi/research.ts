import rs_advisor from "../../../assets/images/projects/research/advisor.webp";
import rs_presenting from "../../../assets/images/projects/research/presenting.webp";
import rs_presenting_portrait from "../../../assets/images/projects/research/presenting-portrait.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Nghiên cứu khoa học",
  theme: "light",
  tags: ["research", "tiktok", "analytics"],
  description:
    "Nghiên cứu khoa học sinh viên · Khoa Thương mại, ĐH Văn Lang · 2024<br/><br/>Tác giả, dưới sự hướng dẫn trực tiếp của ThS. Nguyễn Hữu Lan Thuỷ. Đề tài đạt điểm cao nhất từ hội đồng phản biện, lọt <b>Top 3 chung cuộc</b> và được chọn trình bày tại hội nghị khoa học.",
  components: [
    {
      type: "live",
      props: {
        eyebrow: "Nghiên cứu khoa học · 2024",
        title: "Ảnh hưởng sự hiện diện xã hội của Streamer đến hành vi mua hàng ngẫu hứng: khám phá lòng tin người tiêu dùng và trạng thái dòng chảy trong livestream ngành nông sản trên TikTok",
        text: "Vận dụng mô hình S-O-R, nghiên cứu phân tích cách sự hiện diện xã hội của streamer tác động đến lòng tin, trạng thái dòng chảy và hành vi mua hàng ngẫu hứng khi nông sản Việt được bán qua livestream TikTok.",
        stats: [
          {
            value: "563",
            label: "mẫu khảo sát hợp lệ",
          },
          {
            value: "4",
            label: "yếu tố hiện diện xã hội",
          },
          {
            value: "Top 3",
            label: "chung cuộc, điểm cao nhất hội đồng",
          },
        ],
        image: rs_presenting_portrait,
        imageAlt: "Thuyết trình nghiên cứu",
        viewers: "563",
        comments: ["Xoài này ngọt không shop? 🥭", "Chốt cho mình 2 ký nha!"],
        pinned: {
          title: "Nông sản Việt",
          meta: "Đang livestream trên TikTok Shop",
        },
      },
    },
    {
      type: "text",
      props: {
        title: "01 · Ý tưởng hình thành",
        text: "Việt Nam có nguồn nông sản phong phú nhưng việc tiêu thụ vẫn phụ thuộc đáng kể vào thị trường xuất khẩu. Khi chuyển đổi xanh nâng chuẩn chất lượng — đặc biệt với thị trường EU — thị trường nội địa cũng cần những mô hình kinh doanh mới, bền vững để thúc đẩy tiêu dùng nông sản chất lượng. <b>Livestream thương mại trên TikTok</b> kết hợp truyền tải thông tin trực quan, tương tác trực tiếp và kích thích quyết định mua, có thể trở thành cầu nối giữa nhà sản xuất và người tiêu dùng, đồng thời lan tỏa lối tiêu dùng có trách nhiệm. Nghiên cứu ra đời để tìm ra các yếu tố tác động đến hành vi mua hàng ngẫu hứng qua livestream nông sản, làm cơ sở khoa học cho chiến lược tiếp thị và hướng thúc đẩy tiêu thụ nội địa song hành cùng mục tiêu chuyển đổi xanh.",
      },
    },
    {
      type: "model",
      props: {
        title: "02 · Mô hình nghiên cứu (S-O-R)",
        text: "Kích thích → Trạng thái → Phản hồi: streamer làm gì, người xem cảm nhận ra sao, và họ hành động thế nào.",
        stages: [
          {
            code: "S",
            title: "Sự hiện diện xã hội của streamer",
            subtitle: "Kích thích",
            items: [
              {
                label: "Sức hút cá nhân",
              },
              {
                label: "Sự chuyên nghiệp",
                highlight: true,
              },
              {
                label: "Tính tương tác",
              },
              {
                label: "Tính giải trí",
                highlight: true,
              },
            ],
          },
          {
            code: "O",
            title: "Trạng thái người xem",
            subtitle: "Trạng thái",
            items: [
              {
                label: "Lòng tin người tiêu dùng",
                highlight: true,
              },
              {
                label: "Trạng thái dòng chảy",
                highlight: true,
              },
            ],
          },
          {
            code: "R",
            title: "Hành vi",
            subtitle: "Phản hồi",
            items: [
              {
                label: "Mua hàng ngẫu hứng",
                highlight: true,
              },
            ],
          },
        ],
        legend: "Tác động tích cực được kết quả nghiên cứu xác nhận",
        note: "Lòng tin và trạng thái dòng chảy vừa tác động trực tiếp đến hành vi mua hàng ngẫu hứng, vừa đóng vai trò trung gian giữa sự hiện diện của streamer và quyết định mua.",
      },
    },
    {
      type: "bento",
      props: {
        title: "03 · Phương pháp",
        tiles: [
          {
            value: "563",
            label: "mẫu hợp lệ — nghiên cứu định lượng",
            span: "big",
            tone: "accent",
          },
          {
            image: rs_presenting,
            span: "wide",
            tag: "Bảo vệ đề tài",
          },
          {
            value: "PLS-SEM",
            label: "mô hình cấu trúc tuyến tính",
            tone: "dark",
          },
          {
            value: "SmartPLS 4.0",
            label: "kiểm định mô hình",
            tone: "soft",
          },
        ],
        note: "Dữ liệu xử lý bằng SPSS và SmartPLS 4.0.",
      },
    },
    {
      type: "list",
      props: {
        title: "04 · Kết quả & hàm ý",
        items: [
          "<b>Sự chuyên nghiệp</b> và <b>tính giải trí</b> của streamer là hai yếu tố tạo ra cả lòng tin lẫn trạng thái dòng chảy.",
          "<b>Lòng tin</b> và <b>trạng thái dòng chảy</b> thúc đẩy trực tiếp hành vi mua ngẫu hứng và truyền tải ảnh hưởng của streamer đến quyết định mua.",
          "<b>Với người bán nông sản:</b> kết hợp hiểu biết sản phẩm với cách dẫn dắt cuốn hút, giải trí để biến người xem thành người mua.",
          "<b>Ghi nhận:</b> điểm cao nhất từ hội đồng phản biện, Top 3 chung cuộc và được chọn trình bày tại hội nghị khoa học.",
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
            caption: "Cùng giảng viên hướng dẫn – ThS. Nguyễn Hữu Lan Thuỷ",
          },
          {
            src: rs_presenting,
            caption: "Trình bày phần giới thiệu đề tài",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
