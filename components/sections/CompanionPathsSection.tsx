const paths = [
  { title: "HIỂU MÌNH", description: "Khám phá bản thân, cảm xúc, giá trị, điểm mạnh và hướng phát triển phù hợp.", icon: "M12 3a9 9 0 1 0 9 9M12 7v5l3 2M17 3h4v4M21 3l-5 5" },
  { title: "HIỂU NGƯỜI", description: "Thấu hiểu sự khác biệt, cải thiện giao tiếp và xây dựng những mối quan hệ chất lượng hơn.", icon: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6m0 3a5 5 0 0 1 5 5v2" },
  { title: "ĐỒNG HÀNH CÙNG CON", description: "Hiểu tính cách, cảm xúc, tiềm năng và cách đồng hành phù hợp với từng đứa trẻ.", icon: "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 21v-5a5 5 0 0 1 10 0v5M18 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4M15 21v-3a3 3 0 0 1 6 0v3" },
  { title: "CHUYỂN HÓA & PHÁT TRIỂN", description: "Biến nhận thức thành hành động và từng bước tạo ra những thay đổi bền vững trong cuộc sống.", icon: "M4 20h16M7 17v-5m5 5V8m5 9V4M4 9l6-5 4 2 6-4" },
];

export default function CompanionPathsSection() {
  return (
    <section id="dong-hanh" aria-labelledby="paths-title" className="refined-section scroll-mt-32 bg-[#FAF8F5]">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">ĐỒNG HÀNH CÙNG BẠN</p>
          <h2 id="paths-title">Mỗi hành trình bắt đầu từ một nhu cầu khác nhau</h2>
          <p className="mt-5 text-base leading-[1.65] text-text-secondary">Bạn có thể đang muốn hiểu mình hơn, cải thiện một mối quan hệ, đồng hành cùng con hoặc tạo ra một thay đổi tích cực trong cuộc sống. TCN giúp bạn tìm điểm bắt đầu phù hợp.</p>
        </div>
        <ol className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {paths.map(({ title, description, icon }, index) => (
            <li key={title} className="border-t border-tcn-green-dark/15">
              <article className="flex h-full gap-5">
                <span aria-hidden="true" className="font-heading text-3xl text-tcn-green-dark/40">0{index + 1}</span>
                <div className="flex flex-1 flex-col">
                  <svg className="mb-4 text-tcn-green-dark" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon} /></svg>
                  <h3 className="font-sans text-base font-semibold leading-relaxed tracking-wide">{title}</h3>
                  <p className="mt-3 mb-4 text-base leading-[1.65] text-text-secondary">{description}</p>
                  <a href="#dich-vu" aria-label={`Khám phá: ${title}`} className="text-link mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm">Khám phá <span aria-hidden="true">→</span></a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


