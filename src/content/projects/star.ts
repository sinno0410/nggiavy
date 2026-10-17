import type { Locale } from "../../i18n/types";

/** One STAR summary ("Tóm tắt nhanh") shown at the top of a project page. Text may contain <b>. */
export interface StarSummary {
  situation: string;
  task: string;
  action: string;
  result: string;
  metrics: { value: string; label: string }[];
}

export const star: Record<Locale, Record<string, StarSummary>> = {
  vi: {
    mekong: {
      situation:
        "SK ZIC và Hóa Dầu Mekong (SK Group) cần đưa hai thương hiệu dầu nhớt đến gần người chạy xe hơn trên social, đồng thời ra mắt Zalo Mini App <b>“Chăm Xe”</b> dịp Tết 2026.",
      task: "Phụ trách social media in-house: chiến lược kênh, chiến dịch digital, nội dung fanpage thường xuyên và truyền thông sự kiện.",
      action:
        "Phân bổ KPI và ngân sách theo kênh, lên kế hoạch từng kênh, viết content, chạy quảng cáo gắn UTM; góp phần tìm insight và tagline <b>“Chất chuyển động, xanh thời đại”</b>; truyền thông và trực booth tại các sự kiện xanh.",
      result: "38 bài đăng trong T1–T2/2026 đạt 1,17M reach và 55,1K lượt tương tác.",
      metrics: [
        { value: "9M+", label: "lượt tiếp cận trong 3 tháng" },
        { value: "39%", label: "KPI đăng ký của cả năm" },
        { value: "13,81%", label: "ER bài ra mắt Mini App (Zalo)" },
      ],
    },
    semtek: {
      situation: "SEMTEK Agency cần tăng hiển thị tự nhiên trên Google cho website của chính agency, trải trên 6 mảng dịch vụ.",
      task: "Thực tập SEO On-page (05–12/2024): nghiên cứu từ khóa, lên cấu trúc nội dung, viết bài và audit sau khi đăng.",
      action:
        "Nghiên cứu từ khóa bằng Ahrefs và Google Search Console, gom thành cụm theo cấu trúc <b>SILO</b>; lập lịch nội dung và trực tiếp viết bài chuẩn SEO; audit bằng Screaming Frog và Siteliner.",
      result: "Website có lộ trình nội dung rõ ràng, mỗi bài viết có vị trí trong sơ đồ liên kết nội bộ.",
      metrics: [
        { value: "88", label: "từ khóa · 16.340 lượt tìm/tháng" },
        { value: "52", label: "bài viết trong lịch nội dung" },
        { value: "37/37", label: "hạng mục audit hoàn thành" },
      ],
    },
    timeo: {
      situation: "TIMEO là studio workshop tufting tại TP.HCM, cần tăng nhận biết và lượt đặt lịch qua Facebook và Instagram.",
      task: "Thực tập Digital Marketing (01–04/2024): xây hành trình khách hàng, mục tiêu social, lịch nội dung và quản lý fanpage.",
      action:
        "Thiết kế customer journey 7 giai đoạn, đặt mục tiêu SMART, lên lịch nội dung 4 pillar bám theo các dịp trong năm; đăng 16 bài Facebook và 12 bài Instagram.",
      result: "So với cùng kỳ: reach vẫn tăng dù đã tạm dừng quảng cáo, số liên hệ phát sinh đơn tăng 100%.",
      metrics: [
        { value: "+48%", label: "organic reach (20.255)" },
        { value: "+58,7%", label: "tương tác nội dung" },
        { value: "> 1,4", label: "ER mỗi bài (TB ngành 0,6)" },
      ],
    },
    ebuzz: {
      situation:
        "E-Buzz Media 2025 – cuộc thi video ngắn của ĐH Văn Lang × Laneige Vietnam × TikTok, với hơn 1.800 sinh viên và 350–400 video dự thi.",
      task: "Cùng Team Đẹp (E10) đi qua 4 vòng thi: từ video sản phẩm 60 giây đến phim ngắn, chiến dịch ra mắt và thuyết trình chung kết.",
      action:
        "Quản lý dự án và onset, đạo diễn video; phát triển insight, big idea, kịch bản và storyboard 40 cảnh; lên chuỗi 5 nội dung ra mắt phim và thuyết trình trên sân khấu.",
      result: "Phim <b>“Ánh Sáng”</b> ra mắt trên TikTok qua chuỗi Poster → Coming soon → Trailer → Official → BTS.",
      metrics: [
        { value: "Top 4", label: "chung cuộc" },
        { value: "1", label: "giải Video chất lượng cao" },
        { value: "4/4", label: "vòng thi vượt qua" },
      ],
    },
    sic: {
      situation:
        "Vietnam Swiss Innovation Challenge 2025 (ĐH Văn Lang × FHNW Thụy Sĩ), toàn bộ bằng tiếng Anh. Bài toán đội chọn: mỗi năm Việt Nam thải 400.000 tấn cao su, chỉ 10% được tái chế.",
      task: "Cùng đội Trashionistas phát triển một ý tưởng kinh doanh bền vững và pitching trước ban giám khảo.",
      action:
        "Xây ý tưởng và mô hình kinh doanh <b>LopLoop</b> – túi xách cao cấp từ lốp xe cũ; nghiên cứu khách hàng #IdentityShapers; xây thương hiệu “Your style, your stand.” và pitching bằng tiếng Anh.",
      result: "Kế hoạch tài chính với thời gian hoàn vốn 2 năm và mục tiêu tái sử dụng hơn 8,5 tấn lốp xe.",
      metrics: [
        { value: "Top 20", label: "giữa 400+ sinh viên, 25 trường" },
        { value: "905 triệu", label: "VND vốn kêu gọi (kế hoạch)" },
        { value: "3 vòng", label: "thi bằng tiếng Anh" },
      ],
    },
    hatmuoi: {
      situation:
        "Hạt Muối Của Biển (@_ngththuyz) – kênh TikTok thời trang về check-in, tạo dáng và du lịch biển – cần nội dung nhất quán và tăng trưởng bền vững.",
      task: "Freelance Social Marketing Executive (07/2025–01/2026): định vị, chiến lược nội dung và tăng trưởng tự nhiên cho TikTok và Instagram.",
      action:
        "Xây content pillar và lịch nội dung hằng tháng; lên ý tưởng, hook và kịch bản; đọc số liệu mỗi tuần và tối ưu theo vòng lặp nghiên cứu → đăng → phân tích.",
      result: "Kênh tăng trưởng đều khoảng 4.000 follower mỗi tháng, thêm +21K follower Instagram.",
      metrics: [
        { value: "50M", label: "lượt xem bài đăng TikTok" },
        { value: "+24K", label: "follower TikTok mới" },
        { value: "53", label: "booking từ nhãn hàng" },
      ],
    },
    research: {
      situation:
        "Livestream TikTok đang mở ra kênh bán nông sản Việt mới, nhưng chưa rõ yếu tố nào ở streamer khiến người xem mua hàng ngẫu hứng.",
      task: "Tác giả nghiên cứu khoa học sinh viên (Khoa Thương mại, ĐH Văn Lang, 2024), dưới sự hướng dẫn của ThS. Nguyễn Hữu Lan Thuỷ.",
      action: "Xây mô hình S-O-R với 12 giả thuyết, khảo sát trong 5 tháng, phân tích bằng SPSS và SmartPLS 4.0 (PLS-SEM).",
      result:
        "<b>Sự chuyên nghiệp</b> và <b>tính giải trí</b> của streamer thúc đẩy lòng tin và trạng thái dòng chảy, từ đó dẫn đến mua hàng ngẫu hứng.",
      metrics: [
        { value: "Cao nhất", label: "điểm từ hội đồng phản biện" },
        { value: "563", label: "mẫu khảo sát hợp lệ" },
        { value: "0,556", label: "tác động dòng chảy → mua ngẫu hứng" },
      ],
    },
  },
  en: {
    mekong: {
      situation:
        "SK ZIC and Mekong Petrochem (SK Group) wanted their two lubricant brands closer to riders on social, and to launch the <b>“Chăm Xe”</b> Zalo Mini App over Tet 2026.",
      task: "In-house social media: channel strategy, digital campaigns, always-on fanpage content and event communication.",
      action:
        "Allocated KPIs and budget by channel, planned each channel, wrote content and ran UTM-tagged ads; helped find the insight and the tagline <b>“Chất chuyển động, xanh thời đại”</b>; ran comms and staffed the booth at green events.",
      result: "38 posts in Jan–Feb 2026 reached 1.17M people with 55.1K engagements.",
      metrics: [
        { value: "9M+", label: "reach in 3 months" },
        { value: "39%", label: "of the full-year sign-up KPI" },
        { value: "13.81%", label: "ER on the Mini App launch (Zalo)" },
      ],
    },
    semtek: {
      situation: "SEMTEK Agency needed more organic Google visibility for its own website across 6 service lines.",
      task: "On-page SEO internship (May–Dec 2024): keyword research, content structure, writing and post-publication audits.",
      action:
        "Researched keywords with Ahrefs and Google Search Console and grouped them into a <b>SILO</b> structure; built the content calendar and wrote SEO articles myself; audited with Screaming Frog and Siteliner.",
      result: "The site gained a clear content roadmap, with every article placed in the internal-linking map.",
      metrics: [
        { value: "88", label: "keywords · 16,340 searches/mo" },
        { value: "52", label: "articles in the calendar" },
        { value: "37/37", label: "audit items completed" },
      ],
    },
    timeo: {
      situation: "TIMEO, a tufting workshop studio in Ho Chi Minh City, needed more awareness and bookings through Facebook and Instagram.",
      task: "Digital marketing internship (Jan–Apr 2024): customer journey, social objectives, content calendar and fanpage management.",
      action:
        "Designed a 7-stage customer journey, set SMART goals, planned a 4-pillar calendar around key dates, and published 16 Facebook and 12 Instagram posts.",
      result: "Year on year, reach kept growing even with ads paused, and contacts that turned into orders doubled.",
      metrics: [
        { value: "+48%", label: "organic reach (20,255)" },
        { value: "+58.7%", label: "content engagement" },
        { value: "> 1.4", label: "ER per post (industry 0.6)" },
      ],
    },
    ebuzz: {
      situation:
        "E-Buzz Media 2025, a short-video competition by Van Lang University × Laneige Vietnam × TikTok, with 1,800+ students and 350–400 entries.",
      task: "Take Team Đẹp (E10) through 4 rounds: a 60-second product video, a short film, its launch campaign and the final pitch.",
      action:
        "Managed the project and shoots, directed the video; developed the insight, big idea, script and a 40-shot storyboard; planned the 5-step launch and presented on stage.",
      result: "Our film <b>“Ánh Sáng”</b> launched on TikTok via Poster → Coming soon → Trailer → Official → BTS.",
      metrics: [
        { value: "Top 4", label: "overall" },
        { value: "1", label: "High-Quality Video award" },
        { value: "4/4", label: "rounds cleared" },
      ],
    },
    sic: {
      situation:
        "Vietnam Swiss Innovation Challenge 2025 (Van Lang University × FHNW, Switzerland), run entirely in English. Our problem: Vietnam discards 400,000 tonnes of rubber a year and recycles only 10%.",
      task: "With team Trashionistas, develop a sustainable business idea and pitch it to the judges.",
      action:
        "Built the idea and business model for <b>LopLoop</b>, premium handbags made from old tyres; researched the #IdentityShapers audience; built the brand “Your style, your stand.” and pitched in English.",
      result: "A financial plan with a 2-year payback and a target of reusing 8.5+ tonnes of tyres.",
      metrics: [
        { value: "Top 20", label: "of 400+ students, 25 universities" },
        { value: "905M", label: "VND raise (planned)" },
        { value: "3", label: "rounds in English" },
      ],
    },
    hatmuoi: {
      situation:
        "Hạt Muối Của Biển (@_ngththuyz), a fashion TikTok about photo check-ins, posing and beach travel, needed consistent content and steady growth.",
      task: "Freelance social marketing executive (Jul 2025 – Jan 2026): positioning, content strategy and organic growth on TikTok and Instagram.",
      action:
        "Built content pillars and a monthly calendar; wrote ideas, hooks and scripts; read the data weekly and optimised in a research → publish → analyse loop.",
      result: "Steady growth of about 4,000 followers a month, plus +21K followers on Instagram.",
      metrics: [
        { value: "50M", label: "TikTok post views" },
        { value: "+24K", label: "new TikTok followers" },
        { value: "53", label: "brand bookings" },
      ],
    },
    research: {
      situation:
        "TikTok livestreams are opening a new sales channel for Vietnamese farm produce, but it was unclear which streamer traits drive impulse buying.",
      task: "Author of a student research project (Faculty of Commerce, Van Lang University, 2024), supervised by MSc. Nguyễn Hữu Lan Thuỷ.",
      action: "Built an S-O-R model with 12 hypotheses, ran a 5-month survey and analysed it with SPSS and SmartPLS 4.0 (PLS-SEM).",
      result:
        "The streamer's <b>professionalism</b> and <b>entertainment</b> build trust and flow, which in turn drive impulse buying.",
      metrics: [
        { value: "Highest", label: "score from the defence panel" },
        { value: "563", label: "valid responses" },
        { value: "0.556", label: "effect of flow → impulse buying" },
      ],
    },
  },
};
