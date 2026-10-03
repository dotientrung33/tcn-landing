"use client";

import Image from "next/image";
import { useState } from "react";

const supportTools = [
  {
    name: "Map For Success",
    tagline: "Thấu hiểu bản thân – Làm chủ cuộc đời",
    description:
      "Map For Success hỗ trợ mỗi người nhìn sâu hơn về điểm mạnh, động lực bên trong, cách tư duy, cách phản ứng và những tiềm năng nổi bật. Bản đồ được sử dụng như một nguồn dữ liệu tham chiếu trong quá trình đồng hành, giúp việc khám phá bản thân và xác định hướng phát triển trở nên rõ ràng hơn.",
    insights: [
      "Điểm mạnh & tiềm năng",
      "Động lực bên trong",
      "Tư duy & hành động",
      "Bài học & thách thức",
      "Định hướng phát triển",
    ],
    image: "/images/maps/map-for-success.jpg",
  },
  {
    name: "Relationship Map",
    tagline: "Thấu hiểu mối quan hệ – Kết nối đúng cách",
    description:
      "Mỗi người bước vào một mối quan hệ với tính cách, nhu cầu cảm xúc, cách giao tiếp và kỳ vọng khác nhau. Relationship Map giúp hai người có thêm góc nhìn về những điểm tương đồng và khác biệt, từ đó hỗ trợ quá trình thấu hiểu, điều chỉnh cách tương tác và xây dựng kết nối phù hợp hơn.",
    insights: [
      "Tính cách",
      "Nhu cầu cảm xúc",
      "Cách giao tiếp",
      "Điểm dễ xung đột",
      "Khả năng kết nối",
    ],
    image: "/images/maps/relationship-map.jpg",
  },
  {
    name: "Career Map",
    tagline: "Định hướng nghề nghiệp – Nâng tầm hiệu suất",
    description:
      "Career Map hỗ trợ nhìn rõ hơn về thế mạnh, xu hướng năng lực, môi trường làm việc phù hợp và những yếu tố ảnh hưởng đến hiệu suất cá nhân. Đây là nguồn dữ liệu tham chiếu trong quá trình định hướng nghề nghiệp, Coaching công việc và xây dựng hướng phát triển phù hợp với mỗi người.",
    insights: [
      "Thế mạnh nghề nghiệp",
      "Năng lực nổi trội",
      "Môi trường phù hợp",
      "Hiệu suất làm việc",
      "Định hướng phát triển",
    ],
    image: "/images/maps/career-map.jpg",
  },
  {
    name: "Kid Talent Map",
    tagline: "Cha mẹ thông thái – Dạy con thành tài",
    description:
      "Mỗi đứa trẻ có một cách học tập, tiếp nhận, biểu đạt cảm xúc và phát triển tiềm năng khác nhau. Kid Talent Map giúp cha mẹ có thêm góc nhìn về đặc điểm, thế mạnh và nhu cầu phát triển của con, từ đó lựa chọn cách giao tiếp, giáo dục và đồng hành phù hợp hơn với từng đứa trẻ.",
    insights: [
      "Tính cách của con",
      "Phong cách học tập",
      "Năng khiếu & tiềm năng",
      "Nhu cầu phát triển",
      "Cách cha mẹ đồng hành",
    ],
    image: "/images/maps/kid-talent-map.jpg",
  },
];

export default function SupportToolsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="cong-cu-dong-hanh"
      aria-labelledby="support-tools-title"
      className="refined-section scroll-mt-32"
    >
      <div className="site-container">

        {/* INTRO */}
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
            CÔNG CỤ HỖ TRỢ QUÁ TRÌNH ĐỒNG HÀNH
          </p>

          <h2 id="support-tools-title">
            Thêm dữ liệu để thấu hiểu sâu hơn
          </h2>

          <p className="mt-5 text-base leading-[1.7] text-text-secondary">
            Trong quá trình Coaching, đào tạo và đồng hành, TCN có thể kết hợp
            các bản đồ thấu hiểu con người để có thêm góc nhìn về bản thân,
            mối quan hệ, nghề nghiệp và hành trình phát triển của con.
          </p>

          <p className="mt-4 text-sm font-semibold leading-7 text-tcn-green-dark">
            Map For Success
            <span className="mx-2 text-tcn-brown">·</span>
            Relationship Map
            <span className="mx-2 text-tcn-brown">·</span>
            Career Map
            <span className="mx-2 text-tcn-brown">·</span>
            Kid Talent Map
          </p>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="support-tools-content"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-tcn-green-dark transition-colors hover:text-tcn-brown"
          >
            {isOpen ? "Thu gọn" : "Tìm hiểu thêm"}

            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        {/* EXPANDED CONTENT */}
        {isOpen && (
          <div
            id="support-tools-content"
            className="mt-8 border-t border-tcn-green-dark/10"
          >
            {supportTools.map((tool) => (
              <article
                key={tool.name}
                className="
                  grid gap-6
                  border-b border-tcn-green-dark/10
                  py-7
                  sm:grid-cols-[155px_1fr]
                  sm:items-center
                  lg:gap-8
                "
              >
                {/* MAP COVER */}
                <div
                  className="
                    relative
                    aspect-[210/297]
                    w-[125px]
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    bg-[#F5F1EA]
                    sm:w-[155px]
                  "
                >
                  <Image
                    src={tool.image}
                    alt={`Bìa ${tool.name}`}
                    fill
                    sizes="(min-width: 640px) 155px, 125px"
                    className="object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="max-w-5xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-tcn-brown">
                    {tool.tagline}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold text-tcn-green-dark sm:text-2xl">
                    {tool.name}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.75] text-text-secondary sm:text-base">
                    {tool.description}
                  </p>

                  {/* INSIGHTS */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-tcn-green-dark">
                      Hỗ trợ thấu hiểu:
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 text-text-secondary">
                      {tool.insights.map((insight, index) => (
                        <span key={insight} className="inline-flex items-center">
                          {insight}

                          {index < tool.insights.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="ml-2 text-tcn-brown"
                            >
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* NOTE */}
            <div className="pt-7">
              <p className="max-w-5xl font-heading text-base leading-[1.7] text-tcn-green-dark sm:text-lg">
                Bản đồ không phải là câu trả lời thay cho bạn. Đó là công cụ
                giúp quá trình thấu hiểu có thêm dữ liệu và góc nhìn, để việc
                đồng hành trở nên phù hợp hơn với từng người.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}