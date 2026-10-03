type ContentBlock = {
  heading?: string;
  text?: string;
  items?: { title: string; description?: string }[];
  ordered?: boolean;
};

type Service = {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
  message?: string;
  cta: string;
  href: string | null;
};

// Replace href with dedicated landing page URLs when available.
const services: Service[] = [
  {
    id: "coaching-ca-nhan",
    title: "Coaching",
    description: "Đồng hành cá nhân hóa để nhìn rõ vấn đề, khai mở nhận thức và tìm ra hướng đi phù hợp.",
    blocks: [
      { text: "Coaching phù hợp khi bạn đang có một vấn đề, một mục tiêu hoặc một thay đổi cụ thể muốn thực hiện." },
      { heading: "Các hình thức:", items: [
        { title: "Coaching 1:1", description: "Đồng hành với các vấn đề về bản thân, gia đình, mối quan hệ, công việc, đội nhóm và những mục tiêu cá nhân." },
        { title: "Coaching cá nhân + Bản đồ", description: "Kết hợp Coaching với các công cụ bản đồ để giúp khách hàng hiểu sâu hơn về chính mình, người khác và những mô thức đang ảnh hưởng đến vấn đề hiện tại." },
        { title: "VIP Coaching 1:1", description: "Hành trình Coaching chuyên sâu, được thiết kế riêng theo mục tiêu, điểm nghẽn và nhu cầu phát triển của từng khách hàng." },
      ] },
    ],
    cta: "Khám phá Coaching",
    href: null,
  },
  {
    id: "training-workshop",
    title: "Đào tạo",
    description: "Trang bị nhận thức, công cụ và năng lực để hiểu mình, hiểu người và phát triển trong đời sống.",
    blocks: [
      { text: "Các chương trình đào tạo của TCN không được tổ chức như những khóa học rời rạc, mà phát triển theo các lĩnh vực chuyên môn chính:", items: [
        { title: "Hiểu mình & Phát triển bản thân" },
        { title: "Mối quan hệ & Gia đình" },
        { title: "Cha mẹ & Đồng hành cùng con" },
        { title: "Leadership & Team" },
        { title: "Coach – Trainer – Facilitator" },
      ] },
      { heading: "Hình thức triển khai có thể gồm:", text: "Workshop, lớp học chuyên đề, chương trình đào tạo dài hạn, đào tạo doanh nghiệp và các chương trình cộng đồng." },
    ],
    cta: "Xem chương trình đào tạo",
    href: null,
  },
  {
    id: "giai-phap-chuyen-hoa",
    title: "Hành trình chuyển hóa",
    description: "Không chỉ học để biết. Đồng hành để thực hành, thay đổi và đưa điều đã học vào cuộc sống.",
    blocks: [
      { text: "Hành trình chuyển hóa dành cho những người đã thực sự sẵn sàng tạo ra sự thay đổi sâu và bền vững." },
      { text: "Đây không phải là một khóa học đơn lẻ." },
      { heading: "Học viên được đồng hành thông qua một hệ sinh thái gồm:", items: [
        { title: "Đào tạo" }, { title: "Coaching" }, { title: "Thực hành" },
        { title: "Cộng đồng" }, { title: "Hoạt động trải nghiệm" },
        { title: "Checkpoint đánh giá và điều chỉnh" },
      ] },
      { heading: "Hành trình phát triển dựa trên 4 chặng:", ordered: true, items: [
        { title: "Thấu hiểu bản thân" }, { title: "Rèn luyện bản thân" },
        { title: "Ứng dụng vào cuộc sống" }, { title: "Kiến tạo & tự phát triển" },
      ] },
    ],
    message: "Chung một gốc – Chung một cơ chế – Riêng một hành trình.",
    cta: "Tìm hiểu hành trình chuyển hóa",
    href: null,
  },
];

function ServiceContent({ block }: { block: ContentBlock }) {
  const List = block.ordered ? "ol" : "ul";
  return (
    <div className="space-y-3">
      {block.heading && <h4 className="font-sans text-base font-semibold leading-relaxed text-tcn-green-dark">{block.heading}</h4>}
      {block.text && <div className="text-base leading-[1.7] text-text-secondary">{block.text}</div>}
      {block.items && (
        <List className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-3 pl-5 text-base leading-[1.7] marker:text-tcn-brown`}>
          {block.items.map((item) => (
            <li key={item.title}>
              <span className={item.description ? "font-semibold text-tcn-green-dark" : "text-text-primary"}>{item.title}</span>
              {item.description && <div className="mt-1 text-text-secondary">{item.description}</div>}
            </li>
          ))}
        </List>
      )}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="dich-vu" aria-labelledby="services-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="section-copy lg:sticky lg:top-40">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">GIẢI PHÁP ĐỒNG HÀNH</p>
          <h2 id="services-title" className="[text-wrap:wrap]">Mỗi người một điểm xuất phát, mỗi hành trình một cách đồng hành.</h2>
          <p className="mt-5 text-base leading-[1.65] text-text-secondary">TCN không đưa tất cả mọi người vào cùng một chương trình. Tùy vào vấn đề, mục tiêu và mức độ sẵn sàng thay đổi, mỗi người sẽ được lựa chọn hình thức đồng hành phù hợp.</p>
        </div>
        <div className="border-t border-tcn-green-dark/15">
          {services.map((service, index) => (
            <details key={service.id} id={service.id} name="tcn-services" className="group scroll-mt-36 border-b border-tcn-green-dark/15">
              <summary className="group/trigger flex cursor-pointer list-none items-start gap-3 rounded-control py-6 transition-colors hover:text-tcn-brown focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tcn-brown sm:gap-4 [&::-webkit-details-marker]:hidden">
                <span aria-hidden="true" className="mt-1 shrink-0 text-sm font-semibold text-tcn-brown">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl leading-snug sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 text-base leading-[1.65] text-text-secondary">{service.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded px-1 py-1 text-xs font-medium text-tcn-green-dark transition-colors group-hover/trigger:bg-tcn-green-light group-hover/trigger:text-tcn-brown group-focus-visible/trigger:bg-tcn-green-light group-focus-visible/trigger:outline-2 group-focus-visible/trigger:outline-tcn-brown sm:text-sm"><span className="group-open:hidden">Xem thêm</span><span className="hidden group-open:inline">Thu gọn</span><span aria-hidden="true" className="text-xl"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span></span>
              </summary>
              <div className="space-y-5 border-t border-tcn-green-dark/10 pt-5 pb-6 sm:ml-9">
                {service.blocks.map((block, index) => <ServiceContent key={index} block={block} />)}
                {service.message && <div className="border-l-2 border-tcn-brown/40 pl-4 text-base font-semibold leading-[1.7] text-tcn-green-dark">{service.message}</div>}
                {service.href ? <a href={service.href} className="text-link inline-flex min-h-11 items-center gap-2 text-sm">{service.cta}<span aria-hidden="true">→</span></a> : <span aria-disabled="true" title="Trang chi tiết sẽ được cập nhật" className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary">{service.cta}<span aria-hidden="true">→</span><span className="sr-only"> — Trang chi tiết sẽ được cập nhật</span></span>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



