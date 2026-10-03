export type FocusArea = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string | null;
};

export const focusAreas: FocusArea[] = [
  {
    id: "phat-trien-ban-than",
    title: "HIỂU MÌNH & PHÁT TRIỂN BẢN THÂN",
    description: "Thấu hiểu bản thân, nhận diện tiềm năng, cảm xúc, thói quen, tư duy và những năng lực cần thiết để chủ động phát triển chính mình.",
    tags: ["Thấu hiểu bản thân", "Quản trị cảm xúc", "Tư duy và niềm tin"],
    href: null,
  },
  {
    id: "moi-quan-he-gia-dinh",
    title: "MỐI QUAN HỆ & GIA ĐÌNH",
    description: "Hiểu mình, hiểu người và phát triển năng lực giao tiếp để xây dựng những mối quan hệ chất lượng trong gia đình và cuộc sống.",
    tags: ["Hôn nhân", "Giao tiếp", "Xây dựng mối quan hệ chất lượng"],
    href: null,
  },
  {
    id: "cha-me-dong-hanh-cung-con",
    title: "CHA MẸ & ĐỒNG HÀNH CÙNG CON",
    description: "Giúp cha mẹ hiểu con sâu hơn, nhận diện tiềm năng, cải thiện giao tiếp và cá nhân hóa hành trình phát triển của trẻ.",
    tags: ["Đồng hành tuổi dậy thì", "Giao tiếp cha mẹ – con", "Phát hiện tiềm năng"],
    href: null,
  },
  {
    id: "leadership-phat-trien-to-chuc",
    title: "LEADERSHIP & PHÁT TRIỂN TỔ CHỨC",
    description: "Các chương trình dành cho doanh nghiệp, nhà quản lý và đội nhóm nhằm nâng cao chất lượng lãnh đạo, mối quan hệ trong tổ chức và hiệu suất làm việc.",
    tags: ["Leadership", "Phối hợp đội nhóm", "Coaching trong quản lý"],
    href: null,
  },
];

// Retain the component name and anchor to preserve existing page composition and links.
export default function FeaturedProgramsSection({ areas = focusAreas }: { areas?: FocusArea[] }) {
  return (
    <section id="chuong-trinh" aria-labelledby="focus-areas-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">LĨNH VỰC ĐỒNG HÀNH</p>
          <h2 id="focus-areas-title">Những lĩnh vực TCN tập trung phát triển</h2>
          <p className="mt-5 text-base leading-[1.65] text-text-secondary">Từ cá nhân, gia đình đến đội nhóm và doanh nghiệp, TCN kết nối Coaching, đào tạo và chuyên môn của mạng lưới chuyên gia để thiết kế những giải pháp phù hợp với từng nhu cầu phát triển.</p>
        </div>
        <ol className="mt-7 grid gap-x-10 md:grid-cols-2">
          {areas.map((area, index) => (
            <li key={area.id} className="flex gap-4 border-t border-tcn-green-dark/15 py-5">
              <span aria-hidden="true" className="shrink-0 pt-0.5 font-heading text-xl text-tcn-brown">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="font-sans text-base font-semibold leading-relaxed text-tcn-green-dark">{area.title}</h3>
                <div className="mt-2 text-base leading-[1.65] text-text-secondary">{area.description}</div>
                {area.tags && <ul aria-label="Chủ đề liên quan" className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-relaxed text-tcn-brown">{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                {area.href && <a href={area.href} aria-label={`Khám phá: ${area.title}`} className="text-link mt-2 inline-flex min-h-11 items-center gap-2 text-sm">Khám phá <span aria-hidden="true">→</span></a>}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 border-l-2 border-tcn-brown/30 pl-4 text-sm leading-relaxed text-text-secondary">TCN kết nối và phối hợp cùng mạng lưới chuyên gia phù hợp để thiết kế chương trình doanh nghiệp theo nhu cầu thực tế.</div>
      </div>
    </section>
  );
}


