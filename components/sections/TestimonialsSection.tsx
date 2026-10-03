import TestimonialsCarousel from "./TestimonialsCarousel";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  context?: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "khanh-chi",
    name: "Chị Khánh Chi",
    role: "Trưởng phòng kinh doanh Manulife Đắk Lắk",
    context: "Leadership Coaching",
    quote:
      "Sau khi được Coaching và đồng hành, tôi đã giao tiếp với đội ngũ của mình tốt hơn trên nền tảng của sự thấu hiểu!",
    image: "/images/testimonials/khanh-chi.jpg",
  },
  {
    id: "nguyen-thu-ha",
    name: "Chị Nguyễn Thu Hà",
    role: "Quản lý Dự án Giáo dục, Viettel Solutions",
    context: "Coaching đội nhóm",
    quote:
      "Nhờ sự đồng hành và khai vấn của Coach Đỗ Tiến Trung, tôi đã có cách nhìn rõ hơn về mình và đội nhóm.",
    image: "/images/testimonials/nguyen-thu-ha.jpg",
  },
  {
    id: "vu-loan",
    name: "Hoa hậu Vũ Loan",
    context: "Thấu hiểu bản thân & Gia đình",
    quote:
      "Khi được anh Trung coaching, tôi hiểu rõ hơn về bản thân mình và các con. Từ đó, tôi thay đổi cách giao tiếp với con để ba mẹ con hiểu nhau hơn, và tôi cũng có thể đồng hành cùng các cháu một cách nhẹ nhàng hơn.\n\nMối quan hệ trong gia đình tôi được cải thiện rõ rệt và ngày càng hạnh phúc hơn.",
    image: "/images/testimonials/vu-loan.jpg",
  },
  {
    id: "jennifer-pham",
    name: "Hoa hậu Jennifer Phạm",
    context: "Thấu hiểu & Gắn kết gia đình",
    quote:
      "Cảm ơn anh Trung đã đồng hành cùng tôi trong hành trình hơn 2 năm vừa qua. Sự đồng hành đó giúp tôi hiểu rõ bản thân mình hơn, đồng thời hiểu được tính cách và sự khác biệt của các con.\n\nMối quan hệ trong gia đình tôi ngày càng gắn kết bằng sự thấu hiểu. Điều đó cũng giúp tôi cảm thấy yên tâm hơn mỗi khi phải xa nhà đi công tác.",
    image: "/images/testimonials/jennifer-pham.jpg",
  },
  {
    id: "mai-phan",
    name: "Chuyên gia Makeup Mai Phan",
    context: "Thấu hiểu bản thân & Đội ngũ",
    quote:
      "Cảm ơn anh Trung đã đồng hành và hỗ trợ tôi trong cuộc sống cũng như công việc. Sự đồng hành đó giúp tôi hiểu bản thân mình hơn và hiểu hơn những người đang cùng mình làm việc.\n\nĐiều đó cũng giúp tôi nâng cao hiệu suất trong công việc và góp phần mang đến những thành công nhất định trong sự nghiệp.",
    image: "/images/testimonials/mai-phan.jpg",
  },
  {
    id: "le-kieu-nhung",
    name: "Lê Kiểu Nhung",
    role: "Kinh doanh ngành Sức khỏe",
    context: "Thấu hiểu & Gắn kết gia đình",
    quote:
      "Biết ơn chị Chi vì đã đồng hành cùng gia đình tôi qua Map và Thần số học. Điều ý nghĩa nhất không chỉ là hiểu hơn về năng lượng, tính cách và sự khác biệt của mỗi người, mà từ đó tôi học cách điều chỉnh chính mình: bớt kỳ vọng, bớt áp đặt, biết lắng nghe và đón nhận chồng con đúng với con người của họ hơn.\n\nĐiều hạnh phúc nhất là các con muốn trò chuyện và ở cạnh mẹ nhiều hơn. Con trai 20 tuổi trở nên cởi mở hơn, còn con gái 15 tuổi gần như muốn trở thành một người bạn của mẹ.\n\nVới tôi, đó chính là một sự chuyển hóa đẹp để gia đình ngày càng an vui và hài hòa hơn.",
    image: "/images/testimonials/le-kieu-nhung.jpg",
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