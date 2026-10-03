import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="site-container hero-grid grid items-center gap-12">
        
        {/* Hero Content */}
        <div className="relative z-10">
          <p className="mb-6 flex items-start gap-3 text-xs font-semibold tracking-[0.12em] text-tcn-green-dark sm:text-sm">
            <span
              aria-hidden="true"
              className="mt-2 size-2 shrink-0 rounded-full bg-tcn-green"
            />
            TCN – TRANSFORMATIVE COACHING NETWORK
          </p>

          <h1 id="hero-title" className="hero-title">
            <span className="block">Hiểu mình. Hiểu người.</span>
            <span className="mt-2 block">Chuyển hóa từ bên trong.</span>
          </h1>

          <p className="body-copy mt-6 text-base leading-relaxed sm:text-lg">
            TCN là nơi hội tụ những chuyên gia thấu hiểu con người, khai mở
            tiềm năng và đồng hành cùng mỗi cá nhân, gia đình, đội nhóm và tổ
            chức trên hành trình tạo nên những thay đổi tích cực và bền vững.
          </p>

          <div className="hero-actions mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <a
              href="#hanh-trinh"
              className="btn btn-primary w-full sm:w-auto"
            >
              Khám phá hành trình cùng TCN
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#cong-dong"
              className="btn btn-secondary w-full sm:w-auto"
            >
              Tham gia cộng đồng
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 tracking-wide text-text-secondary sm:text-sm">
            Coaching · Đào tạo · Hành trình chuyển hóa · Cộng đồng
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[32px] bg-[#F3EFE5]">
            <Image
              src="/images/hero/hero.png"
              alt="Đội ngũ chuyên gia TCN"
              fill
              priority
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}