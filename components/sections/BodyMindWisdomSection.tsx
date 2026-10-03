const pillars = [
  {
    label: "THÂN",
    keywords: "Sức khỏe – Năng lượng – Hành động",
    description: "Khi cơ thể có đủ năng lượng và được chăm sóc đúng cách, con người có nền tảng tốt hơn để hành động và tạo ra kết quả tích cực.",
    color: "bg-tcn-green",
    number: "01",
  },
  {
    label: "TÂM",
    keywords: "Cảm xúc – Mối quan hệ – Yêu thương",
    description: "Khi tâm ổn định, con người dễ dàng thấu hiểu bản thân, kết nối với người khác và xây dựng những mối quan hệ lành mạnh hơn.",
    color: "bg-tcn-brown",
    number: "02",
  },
  {
    label: "TRÍ",
    keywords: "Tư duy – Nhận thức – Định hướng",
    description: "Khi nhận thức rõ ràng, con người có khả năng nhìn xa hơn, hiểu sâu hơn và đưa ra những lựa chọn phù hợp với điều mình mong muốn.",
    color: "bg-tcn-green-dark",
    number: "03",
  },
];

export default function BodyMindWisdomSection() {
  return (
    <section id="than-tam-tri" aria-labelledby="balance-title" className="refined-section scroll-mt-32 bg-[#F5F1EA]">
      <div className="site-container">
        <div className="section-copy text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">TRIẾT LÝ PHÁT TRIỂN CON NGƯỜI</p>
          <h2 id="balance-title">Chuyển hóa bắt đầu từ sự cân bằng bên trong</h2>
          <p className="mx-auto mt-5 text-base leading-[1.65] text-text-secondary">TCN phát triển con người dựa trên ba nền tảng liên kết với nhau: Thân – Tâm – Trí. Khi một phần thay đổi, toàn bộ hệ thống bên trong cũng bắt đầu chuyển động.</p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-[440px]">
            <svg viewBox="0 0 440 420" className="h-auto w-full" role="img" aria-labelledby="balance-visual-title balance-visual-description">
              <title id="balance-visual-title">Sự liên kết giữa Thân, Tâm và Trí</title>
              <desc id="balance-visual-description">Ba đỉnh Thân, Tâm và Trí kết nối thành một tam giác cân bằng trong vòng tròn chung.</desc>
              <circle cx="220" cy="220" r="155" fill="var(--color-white)" fillOpacity=".6" />
              <circle cx="220" cy="220" r="155" fill="none" stroke="var(--color-tcn-green-dark)" strokeOpacity=".13" />
              <path d="M220 79 80 323h280L220 79Z" fill="none" stroke="var(--color-tcn-green-dark)" strokeOpacity=".25" strokeWidth="1.5" strokeLinejoin="round" />
              <g fill="none" stroke="var(--color-tcn-green-dark)" strokeOpacity=".18" strokeWidth="1.5">
                <path d="M220 79v161M80 323l140-83 140 83" />
              </g>
              <circle cx="220" cy="240" r="38" fill="var(--color-white)" />
              <g fill="none" stroke="var(--color-tcn-green-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M220 258v-30m0 12c-17 0-23-11-22-20 15 0 22 8 22 20Zm0-8c0-17 11-25 22-24 0 16-8 24-22 24Z" />
              </g>
              <circle cx="220" cy="79" r="48" fill="var(--color-tcn-green-light)" stroke="var(--color-tcn-green)" strokeWidth="2" />
              <circle cx="80" cy="323" r="48" fill="var(--color-tcn-brown)" />
              <circle cx="360" cy="323" r="48" fill="var(--color-tcn-green-dark)" />
              <g textAnchor="middle" dominantBaseline="central" fontFamily="var(--font-sans)" fontSize="18" fontWeight="600">
                <text x="220" y="79" fill="var(--color-tcn-green-dark)">THÂN</text>
                <text x="80" y="323" fill="var(--color-white)">TÂM</text>
                <text x="360" y="323" fill="var(--color-white)">TRÍ</text>
              </g>
              <circle cx="150" cy="201" r="4" fill="var(--color-tcn-green)" />
              <circle cx="290" cy="201" r="4" fill="var(--color-tcn-green-dark)" />
              <circle cx="220" cy="323" r="4" fill="var(--color-tcn-brown)" />
            </svg>
          </figure>

          <div className="divide-y divide-tcn-green-dark/10">
            {pillars.map(({ label, keywords, description, color, number }) => (
              <article key={label} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-4">
                  <span aria-hidden="true" className="text-xs text-text-secondary">{number}</span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-3 font-sans text-base font-semibold tracking-[0.1em]">
                      <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${color}`} />{label}
                    </h3>
                    <p className="mt-2 text-base font-semibold leading-[1.65] text-tcn-green-dark">{keywords}</p>
                    <p className="mt-2 text-base leading-[1.65] text-text-secondary">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center font-heading text-xl font-semibold leading-relaxed text-tcn-green-dark sm:text-2xl">Thân an → Tâm tĩnh → Trí sáng</p>
      </div>
    </section>
  );
}


