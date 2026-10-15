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
      type: "sor",
      props: {
        title: "02 · Mô hình nghiên cứu (S-O-R)",
        text: "12 giả thuyết: bốn yếu tố của streamer (H1–H8) tác động đến lòng tin và trạng thái dòng chảy; hai trạng thái này dẫn đến mua hàng ngẫu hứng (H9–H10) và đóng vai trò trung gian (H11–H12).",
        columns: ["Kích thích (S)", "Chủ thể (O)", "Phản ứng (R)"],
        stimuli: [
          ["Sức hút cá nhân", "Personal Charisma"],
          ["Sự chuyên nghiệp", "Professionalism"],
          ["Tính tương tác", "Interactivity"],
          ["Tính giải trí", "Entertainment"],
        ],
        organisms: [
          ["Lòng tin người tiêu dùng", "Consumer Trust"],
          ["Trạng thái dòng chảy", "Flow State"],
        ],
        response: ["Hành vi mua hàng", "ngẫu hứng", "Impulsive Buying Behavior"],
        supported: ["H3", "H4", "H7", "H8", "H9", "H10", "H11", "H12"],
        legend: {
          direct: "Tác động trực tiếp",
          mediation: "Tác động trung gian",
          supported: "Tác động tích cực theo kết quả nghiên cứu",
        },
        note: "Sự chuyên nghiệp và tính giải trí nâng cả lòng tin lẫn trạng thái dòng chảy; hai yếu tố này vừa thúc đẩy trực tiếp hành vi mua ngẫu hứng, vừa truyền tải ảnh hưởng của streamer đến quyết định mua.",
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
