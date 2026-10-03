import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="ve-tcn"
      aria-labelledby="about-title"
      className="refined-section about-section scroll-mt-32"
    >
      <div className="site-container grid items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
        
        {/* Image */}
        <div className="order-2 mx-auto w-full lg:order-1">
          <div className="about-placeholder">
            <Image
              src="/images/about/tcn.jpg"
              alt="Các thành viên TCN trong một buổi gặp gỡ"
              fill
              sizes="(min-width: 1280px) 487px, (min-width: 1024px) 42vw, 100vw"
              className="rounded-[24px] object-cover"
              style={{ objectPosition: "50% 65%" }}
            />

            <span className="about-label">
              Thấu hiểu · Đồng hành · Phát triển
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="section-copy order-1 lg:order-2">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
            VỀ TCN
          </p>

          <h2 id="about-title" className="[text-wrap:wrap]">
            Nơi bạn được thấu hiểu trước khi bắt đầu một hành trình thay đổi
          </h2>

          <p className="mt-5 text-base leading-[1.7]">
            Mỗi người tìm đến TCN với một câu chuyện khác nhau: muốn{" "}
            <strong>hiểu mình hơn, cải thiện các mối quan hệ, đồng hành cùng con</strong>{" "}
            hay phát triển <strong>đội ngũ và tổ chức.</strong>
          </p>

          <p className="mt-4 text-base leading-[1.7]">
            <strong className="text-tcn-green-dark">
              TCN là nơi hội tụ những chuyên gia về đào tạo, coaching, số học
              ứng dụng và phát triển con người
            </strong>
            , cùng chung một nền tảng:
          </p>

          <p className="mt-4 font-heading text-xl font-semibold leading-[1.5] text-tcn-green-dark">
            Thấu hiểu con người trước khi tìm cách thay đổi con người.
          </p>

          <p className="mt-4 text-base leading-[1.7]">
            Chúng tôi bắt đầu bằng việc{" "}
            <strong>lắng nghe câu chuyện, làm rõ nhu cầu</strong>, từ đó kết nối
            bạn với chuyên gia và hình thức đồng hành phù hợp.
          </p>

          <div className="mt-6">
            <Link
              href="/ve-tcn"
              className="inline-flex items-center gap-2 font-semibold text-tcn-green-dark transition-colors hover:text-tcn-brown"
            >
              Tìm hiểu thêm về TCN
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <blockquote className="mt-7 border-l-2 border-tcn-green pl-5 font-heading text-xl leading-[1.5] text-tcn-green-dark">
            <p>
              “Mỗi sự thay đổi nhỏ trong một con người có thể tạo ra làn sóng
              chuyển hóa cho cả thế giới.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}