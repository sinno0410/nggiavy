import sicPitchVideo from "../../../assets/videos/sic-pitch.mp4";
import sic_cost from "../../../assets/images/projects/sic/cost.webp";
import sic_customer from "../../../assets/images/projects/sic/customer.webp";
import sic_growth from "../../../assets/images/projects/sic/growth.webp";
import sic_innovation from "../../../assets/images/projects/sic/innovation.webp";
import sic_investment from "../../../assets/images/projects/sic/investment.webp";
import sic_place from "../../../assets/images/projects/sic/place.webp";
import sic_product from "../../../assets/images/projects/sic/product.webp";
import sic_promotion from "../../../assets/images/projects/sic/promotion.webp";
import sic_summary from "../../../assets/images/projects/sic/summary.webp";
import sic_team from "../../../assets/images/projects/sic/team.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Vietnam Swiss Innovation Challenge 2025",
  theme: "light",
  tags: ["strategy", "research", "content"],
  description:
    "Cuộc thi đổi mới sáng tạo quốc tế · ĐH Văn Lang × FHNW (Thụy Sĩ) · 2025<br/><br/>Team Trashionistas — <b>LopLoop</b>, túi xách thời trang cao cấp từ lốp xe cũ. Ý tưởng & mô hình kinh doanh, nghiên cứu thị trường, xây dựng thương hiệu và pitching bằng tiếng Anh. Lọt <b>Top 20</b> giữa hơn 400 thí sinh.",
  components: [
    {
      type: "stats",
      props: {
        title: "Cuộc thi qua những con số",
        items: [
          {
            value: "400+",
            label: "sinh viên tham gia",
          },
          {
            value: "25",
            label: "trường đại học",
          },
          {
            value: "3",
            label: "vòng thi, toàn bộ bằng tiếng Anh",
          },
          {
            value: "Top 20",
            label: "đội Trashionistas",
          },
        ],
        note: "Số liệu toàn cuộc thi, theo ĐH Văn Lang.",
      },
    },
    {
      type: "text",
      props: {
        title: "01 · SIC 2025 là gì?",
        text: "<b>Vietnam Swiss Innovation Challenge</b> là cuộc thi đổi mới sáng tạo quốc tế do <b>Khoa Thương mại – Trường Đại học Văn Lang</b> tổ chức cùng <b>Đại học Khoa học Ứng dụng Tây Bắc Thụy Sĩ (FHNW)</b>. Chủ đề 2025 <i>“Innovating for Impacts: Sustainable Solutions for an Inclusive Asia”</i> yêu cầu các đội (tối đa 3 người) tạo ra giải pháp kinh doanh, sản phẩm hoặc dịch vụ hướng đến phát triển bền vững. Đội vô địch đại diện Việt Nam tranh tài tại vòng chung kết quốc tế ở Thụy Sĩ.",
      },
    },
    {
      type: "list",
      props: {
        title: "Vai trò của tôi trong Trashionistas",
        items: [
          "<b>Ý tưởng & mô hình kinh doanh</b> – phát triển LopLoop từ vấn đề thành sản phẩm và cách kiếm tiền.",
          "<b>Nghiên cứu thị trường & khách hàng</b> – xác định ai mua và vì sao mua.",
          "<b>Xây dựng thương hiệu</b> – sứ mệnh, slogan và câu chuyện thương hiệu.",
          "<b>Pitching</b> – thuyết trình ý tưởng bằng tiếng Anh trước ban giám khảo.",
        ],
      },
    },
    {
      type: "rounds",
      props: {
        title: "02 · Hành trình của đội",
        text: "Giữa hơn 400 thí sinh, Trashionistas vượt qua vòng ý tưởng, vào Top 20 và pitching trực tiếp dự án LopLoop.",
        rounds: [
          {
            label: "Vòng 1 · 07/2025",
            title: "Idea Generation",
            subtitle: "Proposal & video giới thiệu",
            text: "Nộp business proposal và video giới thiệu LopLoop bằng tiếng Anh. 20 đội xuất sắc nhất đi tiếp.",
            link: {
              label: "Xem proposal",
              href: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
            },
          },
          {
            label: "Vòng 2 · 30/08/2025",
            title: "Top 20",
            subtitle: "Idea Innovation",
            text: "5 phút pitching và 5 phút hỏi đáp cùng ban giám khảo tại ĐH Văn Lang. Hành trình của đội dừng lại ở đây; Top 8 đi tiếp vào Chung kết.",
            highlight: true,
          },
        ],
      },
    },
    {
      type: "stats",
      props: {
        title: "03 · Vấn đề: lốp xe không ai cần",
        items: [
          {
            value: "400.000 tấn",
            label: "cao su thải ra môi trường mỗi năm tại Việt Nam",
          },
          {
            value: "40%",
            label: "bị đốt",
          },
          {
            value: "50%",
            label: "bị chôn lấp",
          },
          {
            value: "Chỉ 10%",
            label: "được tái chế",
          },
        ],
        note: "Nguồn: VWRA, 2022 — gây ô nhiễm đất, không khí, nguy cơ cháy nổ và lãng phí tài nguyên.",
      },
    },
    {
      type: "text",
      props: {
        text: "Và một nghịch lý của thời trang bền vững: <i>“Tại sao phải mua thêm một món đồ hữu cơ, 100% tự nhiên, khi cách bảo vệ môi trường thật sự là tiếp tục dùng những gì mình đang có?”</i> Những người có gu, có lý tưởng vẫn khó tìm được sản phẩm thể hiện cái tôi riêng.",
      },
    },
    {
      type: "table",
      props: {
        title: "04 · Ý tưởng: LopLoop",
        text: "<b>Thương hiệu túi xách thời trang cao cấp làm từ lốp xe cũ.</b> Slogan: <i>“Your style, your stand.”</i> (Phong cách của bạn, lý tưởng của bạn) — giá trị cốt lõi: cá tính, minh bạch và ý thức môi trường.",
        columns: ["", "Tóm tắt"],
        rows: [
          [
            "Bối cảnh",
            "Ngành thời trang dịch chuyển sang bền vững và tái chế vật liệu mới lạ, trong khi hàng triệu lốp xe bị vứt bỏ mỗi năm.",
          ],
          ["Vấn đề", "Chưa có thương hiệu túi xách nào định vị vừa cao cấp vừa bền vững."],
          [
            "Câu hỏi",
            "Làm sao tạo một mô hình thời trang độc đáo với thông điệp bền vững, chất liệu vượt trội và câu chuyện đột phá?",
          ],
          [
            "Lời giải",
            "<b>LopLoop</b> — túi xách thời trang cao cấp từ lốp xe cũ, hoàn vốn sau <b>2 năm</b>.",
          ],
        ],
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "stats",
      props: {
        title: "Tác động dự kiến",
        items: [
          {
            value: "8,5+ tấn",
            label: "lốp xe cũ được tái sử dụng",
          },
          {
            value: "7,42+ tỷ",
            label: "VND doanh thu",
          },
          {
            value: "8.640+",
            label: "người trẻ được truyền cảm hứng bảo vệ môi trường",
          },
        ],
        note: "Mục tiêu trong business proposal, đóng góp cho SDG 12 và SDG 15.",
      },
    },
    {
      type: "text",
      props: {
        title: "Câu chuyện thương hiệu",
        text: "<i>“Có một nghịch lý trong thế giới thời trang: càng đẹp, càng gây hại. Chúng tôi tin rằng cá tính không cần đánh đổi môi trường, và thời trang bền vững không cần tẻ nhạt. Đó là lý do chúng tôi tạo ra LopLoop – nơi những chiếc túi từ lốp xe cũ trở thành tuyên ngôn sống có gu, có trách nhiệm. Vì chúng tôi tin: sống chất là sống thật, và sống xanh.”</i>",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_summary,
        alt: "LopLoop executive summary",
        caption: "Executive summary",
      },
    },
    {
      type: "list",
      props: {
        title: "05 · Khách hàng mục tiêu: #IdentityShapers",
        items: [
          "<b>Họ là ai:</b> nữ, 23–29 tuổi (Millennials trẻ và Gen Z trưởng thành), sẵn sàng chi 700.000–2.000.000 VND cho một chiếc túi.",
          "<b>Họ làm gì:</b> mua dựa trên thiết kế, sự độc đáo và khả năng thể hiện phong cách; tìm sản phẩm “khác biệt, có câu chuyện”.",
          "<b>Họ nghĩ gì:</b> muốn được nhìn nhận là người có gu; bền vững là điểm cộng chứ không phải lý do chính — và rất nhạy cảm với greenwashing.",
          "<b>Insight:</b> <i>khách hàng theo đuổi phong cách mua túi không chỉ để dùng mà để thể hiện gu riêng. Họ chọn sản phẩm thật sự thời trang, và tính bền vững là lợi thế cộng thêm khiến họ tự hào kể về nó.</i>",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_customer,
        alt: "Phân khúc khách hàng",
        caption: "Ma trận Thời trang × Bền vững",
      },
    },
    {
      type: "list",
      props: {
        title: "06 · Sản phẩm & sản xuất",
        items: [
          "<b>Giá trị cốt lõi:</b> vật liệu bền vững, độ bền cao, thời trang cao cấp — 98% cao su tái chế, 30×18×6 cm, 550 g, lót chống nước, da tái chế và quai xích bạc.",
          "<b>Đối tác:</b> cao su tái chế từ Ngọc Anh Bình (Caosuvina), gia công tại An Phúc, đạt chuẩn ISO 9001.",
          "<b>Lộ trình R&D:</b> vật liệu TDP từ lốp tái chế kết hợp PU gốc nước (cùng Tyromer, 2029–2030) để túi mịn, nhiều màu, không mùi.",
          "<b>Hậu mãi tuần hoàn:</b> thu hồi túi cũ, đổi cũ lấy giảm giá, trao đổi túi C2C, đưa vật liệu quay lại sản xuất.",
          "<b>Quy trình ra thị trường:</b> 17 bước từ thu gom, phân loại lốp, khử mùi, xử lý bề mặt đến cắt rập, ép nhiệt, may, kiểm tra độ bền và đóng gói.",
        ],
      },
    },
    {
      type: "gallery",
      props: {
        columns: 3,
        images: [
          {
            src: sic_product,
            caption: "Rập sản phẩm & giá trị cốt lõi",
          },
          {
            src: sic_innovation,
            caption: "Đổi mới vật liệu & hậu mãi tuần hoàn",
          },
          {
            src: sic_place,
            caption: "Kênh phân phối & quy trình ra thị trường",
          },
        ],
      },
    },
    {
      type: "table",
      props: {
        title: "07 · Kế hoạch kinh doanh & truyền thông 3 năm",
        text: "Website là kênh bán chính, Shopee và TikTok Shop để tiếp cận số đông, Facebook và Instagram để tạo lead và cộng đồng.",
        columns: ["Giai đoạn", "Năm", "Mục tiêu", "Chiến thuật chính", "Sản phẩm bán", "Ngân sách"],
        rows: [
          [
            "Awareness",
            "2027",
            "Xây dựng định vị thương hiệu & sản phẩm",
            "Social buzz, PR, KOL/KOC, email marketing",
            "540",
            "120,5 triệu",
          ],
          [
            "Consideration",
            "2028",
            "Nhấn mạnh giá trị khác biệt của sản phẩm",
            "Social buzz, remarketing, affiliate",
            "2.160",
            "296,3 triệu",
          ],
          [
            "Conversion",
            "2029",
            "Chuyển đổi khách tiềm năng thành khách hàng",
            "Loyalty, khuyến mãi, giới thiệu, membership",
            "5.400",
            "660,1 triệu",
          ],
        ],
        minWidth: 760,
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_promotion,
        alt: "Chiến lược 3 năm",
        caption: "Chiến lược kinh doanh & truyền thông 3 năm",
      },
    },
    {
      type: "stats",
      props: {
        title: "08 · Tài chính & gọi vốn",
        items: [
          {
            value: "1,12 triệu",
            label: "VND giá bán mỗi túi (gồm VAT)",
          },
          {
            value: "609 nghìn",
            label: "VND tổng chi phí mỗi túi",
          },
          {
            value: "34–41%",
            label: "lợi nhuận / doanh thu mỗi sản phẩm",
          },
          {
            value: "2 năm",
            label: "thời gian hoàn vốn",
          },
          {
            value: "905 triệu",
            label: "VND vốn kêu gọi, đổi 23% cổ phần",
          },
          {
            value: "3 tỷ",
            label: "VND định giá doanh nghiệp",
          },
        ],
      },
    },
    {
      type: "table",
      props: {
        title: "Mục tiêu doanh thu & lợi nhuận",
        columns: ["", "2027", "2028", "2029"],
        rows: [
          ["Sản phẩm bán ra", "540", "2.160", "5.400"],
          ["Doanh thu (VND)", "559,5 triệu", "2,24 tỷ", "5,59 tỷ"],
          ["Lợi nhuận trước thuế (VND)", "−43,3 triệu", "756,2 triệu", "2,29 tỷ"],
          ["Lợi nhuận / doanh thu", "−7,74%", "33,79%", "41%"],
        ],
        source: "https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing",
      },
    },
    {
      type: "gallery",
      props: {
        columns: 3,
        images: [
          {
            src: sic_cost,
            caption: "Quản lý chi phí",
          },
          {
            src: sic_growth,
            caption: "Quản lý tăng trưởng",
          },
          {
            src: sic_investment,
            caption: "Kêu gọi đầu tư",
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "09 · Pitching",
        text: "Thuyết trình chân dung khách hàng mục tiêu của LopLoop tại vòng Idea Innovation. <a href=\"https://drive.google.com/file/d/1PHSEMzxhkOnCcs8KQPA2ZICAd1JK86Wt/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Xem video giới thiệu ↗</a> · <a href=\"https://drive.google.com/file/d/1luVWu81kIVtgbojrTXti3rV8XJYzKzZ-/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Xem toàn bộ business proposal ↗</a>",
      },
    },
    {
      type: "media",
      props: {
        type: "video",
        src: sicPitchVideo,
        caption: "Pitching tại vòng Idea Innovation",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sic_team,
        alt: "Team Trashionistas",
        caption: "Team Trashionistas – Vỹ Nguyễn, Thương Hoàng, Khánh Nguyễn",
      },
    },
  ],
} as const satisfies ProjectContent;
