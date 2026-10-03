export default function TransformationJourneySection() {
  return (
    <section
      id="hanh-trinh-chuyen-hoa"
      aria-labelledby="transformation-title"
      className="refined-section scroll-mt-32 bg-[#F5F1EA]"
    >
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
            HÀNH TRÌNH CHUYỂN HÓA
          </p>

          <h2 id="transformation-title">
            Biết chưa chắc đã làm được.
            <br />
            Làm được chưa chắc đã duy trì được.
          </h2>

          <p className="mt-6 text-base leading-[1.7] text-text-secondary">
            Có những điều chúng ta đã hiểu từ rất lâu.
          </p>

          <p className="mt-3 text-base leading-[1.7] text-text-secondary">
            Ta biết mình cần bình tĩnh hơn khi nói chuyện với con. Biết một
            mối quan hệ cần được lắng nghe và vun đắp. Biết mình cần thay đổi
            một thói quen, một cách phản ứng hay một cách làm việc.
          </p>

          <div className="mt-6 border-l-2 border-tcn-brown/40 pl-5">
            <p className="font-heading text-xl font-semibold leading-relaxed text-tcn-green-dark sm:text-2xl">
              Nhưng từ biết đến hành động là một khoảng cách.
              <br />
              Từ hành động đến duy trì được sự thay đổi lại là một khoảng cách khác.
            </p>
          </div>

          <p className="mt-6 text-base leading-[1.7] text-text-secondary">
            Vì vậy, TCN không chỉ giúp bạn{" "}
            <strong className="font-semibold text-tcn-green-dark">
              nhìn ra điều cần thay đổi
            </strong>
            , mà còn đồng hành để bạn{" "}
            <strong className="font-semibold text-tcn-green-dark">
              thực hành, điều chỉnh và duy trì sự thay đổi
            </strong>
            , từng bước biến điều mình hiểu thành điều mình thực sự làm được
            trong cuộc sống.
          </p>

          <div className="mt-8 rounded-2xl bg-white/60 px-6 py-6 sm:px-8 sm:py-7">
            <p className="font-heading text-xl font-semibold leading-relaxed text-tcn-green-dark sm:text-2xl">
              “Chuyển hóa không phải là biết thêm thật nhiều.
              <br className="hidden sm:block" />
              Mà là sống được với những điều mình đã hiểu.”
            </p>
          </div>

          <div className="mt-7">
            <a
              href="#ket-noi"
              className="inline-flex items-center gap-2 font-semibold text-tcn-green-dark transition-colors hover:text-tcn-brown"
            >
              Tìm hiểu hành trình chuyển hóa
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}