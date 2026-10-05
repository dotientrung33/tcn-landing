import TestimonialsCarousel from "./TestimonialsCarousel";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  context?: string;
  image?: string;
  imagePosition?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "khanh-chi",
    name: "Chị Khánh Chi",
    role: "Trưởng phòng kinh doanh Manulife Đắk Lắk",
    context: "Leadership Coaching",
    quote:
      "Sau khi được anh Trung coaching và đồng hành cùng TCN, tôi đã giao tiếp với đội ngũ của mình tốt hơn trên nền tảng của sự thấu hiểu!",
    image: "/images/testimonials/khanh-chi.webp",
  },
  {
    id: "nguyen-thu-ha",
    name: "Chị Nguyễn Thu Hà",
    role: "Quản lý Dự án Giáo dục, Viettel Solutions",
    context: "Coaching đội nhóm",
    quote:
      "Nhờ sự đồng hành và khai vấn của anh Đỗ Tiến Trung cùng TCN, tôi đã có cách nhìn rõ hơn về mình và đội nhóm.",
    image: "/images/testimonials/nguyen-thu-ha.webp",
  },
  {
    id: "vu-loan",
    name: "Hoa hậu Vũ Loan",
    context: "Thấu hiểu bản thân & Gia đình",
    quote:
      "Khi được anh Trung coaching và đồng hành cùng TCN, tôi hiểu rõ hơn về bản thân mình và các con. Từ đó, tôi thay đổi cách giao tiếp với con để ba mẹ con hiểu nhau hơn, và tôi cũng có thể đồng hành cùng các cháu một cách nhẹ nhàng hơn.\n\nMối quan hệ trong gia đình tôi được cải thiện rõ rệt và ngày càng hạnh phúc hơn.",
    image: "/images/testimonials/vu-loan.webp",
  },
  {
    id: "jennifer-pham",
    name: "Hoa hậu Jennifer Phạm",
    context: "Thấu hiểu & Gắn kết gia đình",
    quote:
      "Cảm ơn anh Trung và TCN đã đồng hành cùng tôi trong hành trình hơn 2 năm vừa qua. Sự đồng hành đó giúp tôi hiểu rõ bản thân mình hơn, đồng thời hiểu được tính cách và sự khác biệt của các con.\n\nMối quan hệ trong gia đình tôi ngày càng gắn kết bằng sự thấu hiểu. Điều đó cũng giúp tôi cảm thấy yên tâm hơn mỗi khi phải xa nhà đi công tác.",
    image: "/images/testimonials/jennifer-pham.webp",
    imagePosition: "50% 25%",
  },
  {
    id: "mai-phan",
    name: "Chuyên gia Makeup Mai Phan",
    context: "Thấu hiểu bản thân & Đội ngũ",
    quote:
      "Cảm ơn anh Trung cùng TCN đã đồng hành và hỗ trợ tôi trong cuộc sống cũng như công việc. Sự đồng hành đó giúp tôi hiểu bản thân mình hơn và hiểu hơn những người đang cùng mình làm việc.\n\nĐiều đó cũng giúp tôi nâng cao hiệu suất trong công việc và góp phần mang đến những thành công nhất định trong sự nghiệp.",
    image: "/images/testimonials/mai-phan.webp",
  },
  {
    id: "le-kieu-nhung",
    name: "Lê Kiểu Nhung",
    role: "Kinh doanh ngành Sức khỏe",
    context: "Thấu hiểu & Gắn kết gia đình",
    quote:
      "Biết ơn chị Chi cùng TCN đã đồng hành với gia đình tôi qua Map và Thần số học. Điều ý nghĩa nhất không chỉ là hiểu hơn về năng lượng, tính cách và sự khác biệt của mỗi người, mà từ đó tôi học cách điều chỉnh chính mình: bớt kỳ vọng, bớt áp đặt, biết lắng nghe và đón nhận chồng con đúng với con người của họ hơn.\n\nĐiều hạnh phúc nhất là các con muốn trò chuyện và ở cạnh mẹ nhiều hơn. Con trai 20 tuổi trở nên cởi mở hơn, còn con gái 15 tuổi gần như muốn trở thành một người bạn của mẹ.\n\nVới tôi, đó chính là một sự chuyển hóa đẹp để gia đình ngày càng an vui và hài hòa hơn.",
    image: "/images/testimonials/le-kieu-nhung.webp",
  },
  {
    id: "tra-my",
    name: "Chị Trà My",
    role: "Bệnh viện Vinmec",
    context: "Chuyển hóa bản thân · Sự nghiệp",
    quote:
      "Cảm ơn chị Chi cùng TCN đã đồng hành với em trong một giai đoạn rất đặc biệt – giai đoạn em chuyển mình.\n\nỞ tuổi 39, quyết định bước ra khỏi vùng an toàn để bắt đầu một công việc mới là một trong những lựa chọn khiến em vừa sợ, vừa tự hào nhất. Có hoang mang, có lo lắng, nhưng nếu lúc ấy không bước đi, có lẽ em vẫn đang mắc kẹt trong sự an toàn quen thuộc của mình.\n\nTrong quá trình đồng hành, chị Chi giúp em hiểu hơn về bản thân, nhìn lại những tiềm năng của mình và có thêm niềm tin rằng em có thể làm được nhiều hơn, cống hiến nhiều hơn. Em cũng học cách thực hành lòng biết ơn, Ho’oponopono, nhìn lại những cảm xúc tiêu cực và buông bớt những điều từng khiến mình tổn thương.\n\nKhi bên trong bình an hơn, em cũng vững vàng hơn trước những lựa chọn của cuộc đời. Em đã bước ra khỏi vùng an toàn, thích nghi với môi trường mới và công việc mới. Áp lực nhiều hơn, nhưng cuộc sống lại có ý nghĩa hơn, nhiều màu sắc hơn và em thấy mình trưởng thành hơn mỗi ngày.\n\nCảm ơn chị Chi và TCN đã xuất hiện đúng lúc, giúp em có thêm một phiên bản tốt hơn của chính mình. Để hôm nay khi nhìn lại, em có thể tự hào nói rằng: “Em đã vượt qua chính mình rồi!”",
    image: "/images/testimonials/tra-my.webp",
  },
];

export default function TestimonialsSection({
  items = testimonials,
  moreHref = null,
}: {
  items?: Testimonial[];
  moreHref?: string | null;
}) {
  return (
    <section
      id="cam-nhan"
      aria-labelledby="testimonials-title"
      className="refined-section scroll-mt-32 bg-tcn-ivory"
    >
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
            CẢM NHẬN TỪ KHÁCH HÀNG
          </p>

          <h2 id="testimonials-title">
            Những thay đổi được kể lại từ chính người trải nghiệm
          </h2>

          <p className="mt-5 text-base leading-[1.7] text-text-secondary">
            Mỗi hành trình bắt đầu từ một câu chuyện khác nhau. Những chia sẻ
            dưới đây là cảm nhận từ những khách hàng đã trải nghiệm Coaching,
            các công cụ thấu hiểu và quá trình đồng hành cùng đội ngũ TCN.
          </p>
        </div>

        <TestimonialsCarousel items={items} />

        {moreHref && (
          <a
            href={moreHref}
            className="text-link mt-6 inline-flex min-h-11 items-center text-sm"
          >
            Xem thêm cảm nhận →
          </a>
        )}
      </div>
    </section>
  );
}
