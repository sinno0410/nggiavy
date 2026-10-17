import rs_advisor from "../../../assets/images/projects/research/advisor.webp";
import rs_presenting from "../../../assets/images/projects/research/presenting.webp";
import rs_presenting_portrait from "../../../assets/images/projects/research/presenting-portrait.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Nghiên cứu khoa học",
  theme: "light",
  tags: ["research", "tiktok", "analytics"],
  description:
    "Nghiên cứu khoa học sinh viên · Khoa Thương mại, ĐH Văn Lang · 2024<br/><br/>Tác giả, dưới sự hướng dẫn trực tiếp của ThS. Nguyễn Hữu Lan Thuỷ. Đề tài đạt điểm cao nhất từ hội đồng phản biện. Nghiên cứu được thực hiện trong vòng 5 tháng. Trong suốt quá trình này, tôi trực tiếp tham gia triển khai các công việc nghiên cứu, từng bước hoàn thiện nội dung và kết quả nhằm đảm bảo tính khoa học, tính thực tiễn của đề tài.",
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
            value: "5 tháng",
            label: "thực hiện nghiên cứu",
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
        supported: ["H1", "H3", "H4", "H5", "H7", "H8", "H9", "H10", "H11", "H12"],
        mediationLabels: ["H11 b, d ✓", "H12 b, d ✓"],
        legend: {
          direct: "Tác động trực tiếp",
          mediation: "Tác động trung gian",
          supported: "Chấp nhận (p < 0,05)",
          rejected: "Bác bỏ",
        },
        note: "8/10 giả thuyết trực tiếp được chấp nhận. Cả bốn yếu tố của streamer đều tạo lòng tin; riêng trạng thái dòng chảy chỉ chịu tác động của sự chuyên nghiệp và tính giải trí (H2, H6 bị bác bỏ). Lòng tin và dòng chảy sau đó thúc đẩy hành vi mua ngẫu hứng, đồng thời làm trung gian cho tác động của sự chuyên nghiệp và tính giải trí (H11b, d và H12b, d).",
      },
    },
    {
      type: "table",
      props: {
        title: "Kết quả kiểm định mối quan hệ trực tiếp",
        text: "Bootstrapping trên SmartPLS. Tác động mạnh nhất là <b>dòng chảy → mua ngẫu hứng (0,556)</b>.",
        columns: ["Giả thuyết", "Mối quan hệ", "Hệ số chuẩn hoá (O)", "Giá trị T", "P value", "Kết quả"],
        rows: [
          ["H1", "Sức hút → Lòng tin", "0,113", "2,300", "0,021", "<b>Chấp nhận</b>"],
          ["H2", "Sức hút → Dòng chảy", "0,076", "1,473", "0,141", "Bác bỏ"],
          ["H3", "Chuyên nghiệp → Lòng tin", "0,264", "5,254", "< 0,001", "<b>Chấp nhận</b>"],
          ["H4", "Chuyên nghiệp → Dòng chảy", "0,167", "3,588", "< 0,001", "<b>Chấp nhận</b>"],
          ["H5", "Tương tác → Lòng tin", "0,111", "2,193", "0,028", "<b>Chấp nhận</b>"],
          ["H6", "Tương tác → Dòng chảy", "0,076", "1,482", "0,139", "Bác bỏ"],
          ["H7", "Giải trí → Lòng tin", "0,245", "4,774", "< 0,001", "<b>Chấp nhận</b>"],
          ["H8", "Giải trí → Dòng chảy", "0,242", "4,762", "< 0,001", "<b>Chấp nhận</b>"],
          ["H9", "Lòng tin → Mua ngẫu hứng", "0,156", "3,377", "0,001", "<b>Chấp nhận</b>"],
          ["H10", "Dòng chảy → Mua ngẫu hứng", "0,556", "13,141", "< 0,001", "<b>Chấp nhận</b>"],
        ],
        minWidth: 640,
      },
    },
    {
      type: "table",
      props: {
        title: "Kết quả kiểm định tác động gián tiếp (trung gian)",
        text: "Lòng tin và dòng chảy truyền tác động của <b>sự chuyên nghiệp</b> và <b>tính giải trí</b> đến quyết định mua; đường gián tiếp mạnh nhất là <b>giải trí → dòng chảy → mua ngẫu hứng (0,135)</b>.",
        columns: ["Giả thuyết", "Đường tác động", "Hệ số gián tiếp", "Giá trị T", "P value", "Kết quả"],
        rows: [
          ["H11a", "Sức hút → Lòng tin → Mua ngẫu hứng", "0,018", "1,822", "0,069", "Bác bỏ"],
          [
            "H11b",
            "Chuyên nghiệp → Lòng tin → Mua ngẫu hứng",
            "0,041",
            "2,834",
            "0,005",
            "<b>Chấp nhận</b>",
          ],
          ["H11c", "Tương tác → Lòng tin → Mua ngẫu hứng", "0,017", "1,778", "0,075", "Bác bỏ"],
          [
            "H11d",
            "Giải trí → Lòng tin → Mua ngẫu hứng",
            "0,038",
            "2,783",
            "0,005",
            "<b>Chấp nhận</b>",
          ],
          ["H12a", "Sức hút → Dòng chảy → Mua ngẫu hứng", "0,042", "1,460", "0,144", "Bác bỏ"],
          [
            "H12b",
            "Chuyên nghiệp → Dòng chảy → Mua ngẫu hứng",
            "0,093",
            "3,406",
            "0,001",
            "<b>Chấp nhận</b>",
          ],
          ["H12c", "Tương tác → Dòng chảy → Mua ngẫu hứng", "0,042", "1,485", "0,138", "Bác bỏ"],
          [
            "H12d",
            "Giải trí → Dòng chảy → Mua ngẫu hứng",
            "0,135",
            "4,343",
            "< 0,001",
            "<b>Chấp nhận</b>",
          ],
        ],
        minWidth: 640,
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
          "<b>Lòng tin:</b> cả bốn yếu tố của streamer đều tác động — mạnh nhất là sự chuyên nghiệp (0,264) và tính giải trí (0,245).",
          "<b>Trạng thái dòng chảy:</b> chỉ sự chuyên nghiệp và tính giải trí cuốn người xem vào livestream; sức hút cá nhân và tính tương tác thì không (H2, H6 bị bác bỏ).",
          "<b>Mua hàng ngẫu hứng:</b> trạng thái dòng chảy là động lực mạnh nhất (0,556), vượt xa lòng tin (0,156).",
          "<b>Trung gian:</b> chỉ sự chuyên nghiệp và tính giải trí tác động đến quyết định mua thông qua lòng tin và dòng chảy; sức hút cá nhân và tính tương tác thì không.",
          "<b>Với người bán nông sản:</b> kết hợp hiểu biết sản phẩm với cách dẫn dắt cuốn hút, giải trí để biến người xem thành người mua.",
          "<b>Ghi nhận:</b> điểm cao nhất từ hội đồng phản biện.",
        ],
      },
    },
    {
      type: "gallery",
      props: {
        variant: "collage",
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
