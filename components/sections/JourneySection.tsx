const journeys = [
  {
    title: "Tôi chưa thật sự hiểu mình",
    description: "Tôi muốn thay đổi nhưng đôi khi không biết mình thực sự cần gì, nên bắt đầu từ đâu.",
    icon: "M12 3a9 9 0 1 0 9 9M12 7v5l3 2M17 3h4v4M21 3l-5 5",
  },
  {
    title: "Tôi đang có khoảng cách trong một mối quan hệ",
    description: "Tôi vẫn yêu thương, nhưng đôi khi càng cố gắng kết nối lại càng dễ làm nhau tổn thương.",
    icon: "M9 14l6-6M8 16l-2 2a3 3 0 0 1-4-4l5-5a3 3 0 0 1 4 0M16 8l2-2a3 3 0 0 1 4 4l-5 5a3 3 0 0 1-4 0",
  },
  {
    title: "Tôi muốn hiểu và đồng hành cùng con",
    description: "Tôi muốn con phát triển tốt, nhưng không phải lúc nào tôi cũng hiểu điều con thật sự cần.",
    icon: "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 21v-5a5 5 0 0 1 10 0v5M18 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4M15 21v-3a3 3 0 0 1 6 0v3",
  },
  {
    title: "Tôi đang tìm lại sự cân bằng",
    description: "Công việc, gia đình và những trách nhiệm khiến tôi đôi khi quên mất chính mình.",
    icon: "M12 3v18M7 21h10M4 7h16M5 7l-3 8h6L5 7Zm14 0-3 8h6l-3-8Z",
  },
];

export default function JourneySection() {
  return (
    <section id="hanh-trinh" aria-labelledby="journey-title" className="refined-section journey-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">LẮNG NGHE &amp; THẤU CẢM</p>
          <h2 id="journey-title">Có thể bạn đang ở đây...</h2>
          <p className="mt-4 text-base leading-[1.65] text-text-secondary">Trước khi tìm kiếm một giải pháp, hãy cho phép mình được dừng lại, thấu hiểu và thành thật với những gì đang diễn ra bên trong.</p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map(({ title, description, icon }, index) => (
            <li key={title} className="flex">
              <article aria-labelledby={`journey-card-${index}`} className="flex w-full flex-col rounded-panel border border-tcn-green-dark/10 bg-white p-5 transition-colors hover:border-tcn-green-dark/30 hover:bg-tcn-green-light/40 motion-reduce:transition-none">
                <span className="mb-5 flex size-10 items-center justify-center rounded-full bg-tcn-green-light text-tcn-green-dark">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icon} /></svg>
                </span>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-tcn-brown">Tâm tư 0{index + 1}</p><h3 id={`journey-card-${index}`} className="text-xl leading-snug">{title}</h3>
                <p className="mt-3 mb-4 text-[15px] leading-[1.65] text-text-secondary">“{description}”</p>
                <a href="#ve-tcn" aria-label={`Khám phá điều mình cần: ${title}`} className="text-link mt-auto inline-flex min-h-11 items-center gap-2 text-[13px]">Khám phá điều mình cần <span aria-hidden="true">→</span></a>
              </article>
            </li>
          ))}
        </ul>
        <p className="journey-statement mt-8 text-center">Có những vấn đề không thể giải quyết chỉ bằng việc cố gắng nhiều hơn. Đôi khi chúng ta cần nhìn sâu hơn và hiểu đúng hơn.</p>
      </div>
    </section>
  );
}



