import ConsultationForm from "@/components/ConsultationForm";
export const finalCTA = {
  solutionsHref: "#dich-vu",
};

export default function FinalCTASection() {

  return (
    <section id="ket-noi" aria-labelledby="final-cta-title" className="refined-section w-full scroll-mt-32 bg-tcn-green-dark text-white">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-green-light">BẮT ĐẦU HÀNH TRÌNH CỦA BẠN</p>
          <h2 id="final-cta-title" className="text-white">Mỗi hành trình thay đổi đều bắt đầu từ một bước nhỏ</h2>
          <p className="mt-6 text-base leading-relaxed text-white/85">Bạn không cần biết ngay mình cần Coaching, một chương trình đào tạo hay một hành trình dài hạn. Hãy bắt đầu bằng việc chia sẻ điều bạn đang quan tâm. TCN sẽ cùng bạn nhìn rõ nhu cầu và kết nối với hình thức đồng hành phù hợp.</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={finalCTA.solutionsHref} className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 px-7 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-white sm:w-auto">Khám phá giải pháp đồng hành</a>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-sm text-tcn-green-light sm:flex-row sm:flex-wrap sm:gap-x-6">
          <span>Thấu hiểu đúng.</span><span>Đồng hành phù hợp.</span><span>Phát triển bền vững.</span>
        </div>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}

