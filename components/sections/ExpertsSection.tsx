import Image from "next/image";
import ExpertNetworkCarousel from "./ExpertNetworkCarousel";

export type Expert = {
  id: string;
  name: string;
  role: string;
  description?: string;
  specialties: string[];
  image?: { src: string; alt: string; objectPosition?: string };
  profileHref?: string;
};

export type FeaturedExpert = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  specialties?: string[];
  href?: string | null;
};

export const featuredExperts: FeaturedExpert[] = [
  {
    id: "do-tien-trung",
    name: "Đỗ Tiến Trung (Mr. Thấu Hiểu)",
    role: "Trainer · Relationship Coach · Chuyên gia Số học ứng dụng (Numerology)",
    description: "Hơn 15 năm kinh nghiệm trong đào tạo, coaching và phát triển con người. Thế mạnh nổi bật về mối quan hệ, Leadership và đào tạo chuyên môn; ứng dụng Numerology trong thấu hiểu bản thân, thấu hiểu con người và nâng cao chất lượng các mối quan hệ.",
    image: "/images/experts/do-tien-trung.jpg",
    specialties: ["Relationship", "Leadership", "Đào tạo chuyên môn", "Numerology"],
    href: null,
  },
  {
    id: "tran-quynh-chi",
    name: "Trần Quỳnh Chi",
    role: "Trainer · Transformation Coach · Chuyên gia Số học ứng dụng (Numerology)",
    description: "Có nhiều năm kinh nghiệm trong đào tạo, coaching và phát triển con người. Thế mạnh nổi bật về tâm thức, phát triển nội tâm và xây dựng môi trường chuyển hóa; đồng hành trong quá trình nhận thức, thực hành và duy trì sự thay đổi.",
    image: "/images/experts/tran-quynh-chi.jpg",
    specialties: ["Tâm thức", "Môi trường chuyển hóa", "Coaching", "Numerology"],
    href: null,
  },
  {
    id: "nguyen-thi-phuong-thao",
    name: "Nguyễn Thị Phương Thảo",
    role: "Trainer · Parent Coach · Chuyên gia Số học ứng dụng (Numerology)",
    description: "Gần 20 năm kinh nghiệm trong lãnh đạo, điều hành và phát triển con người. Thế mạnh nổi bật về vận hành, tổ chức và triển khai; đồng thời chuyên sâu trong ứng dụng Numerology, KID Talent Map, Relationship Map và Parent Coaching.",
    image: "/images/experts/phuong-thao.jpg",
    specialties: ["Vận hành", "Tổ chức", "KID Talent Map", "Numerology"],
    href: null,
  },
];

export type NetworkExpert = Pick<Expert, "id" | "name" | "role" | "image">;

export const expertNetwork: NetworkExpert[] = [
  {
    "id": "ha-thi-huong",
    "name": "Hà Thị Hương",
    "role": "Định hướng sự nghiệp · Kinh doanh",
    "image": {
      "src": "/images/experts/network/ha-thi-huong.jpg",
      "alt": "Hà Thị Hương"
    }
  },
  {
    "id": "hoa-bong",
    "name": "Hoa Bông",
    "role": "Hướng nghiệp · Numerology",
    "image": {
      "src": "/images/experts/network/hoa-bong.jpg",
      "alt": "Hoa Bông"
    }
  },
  {
    "id": "khanh-chi",
    "name": "Khánh Chi",
    "role": "Phát triển bản thân",
    "image": {
      "src": "/images/experts/network/khanh-chi.jpg",
      "alt": "Khánh Chi"
    }
  },
  {
    "id": "le-thanh-huyen",
    "name": "Lê Thanh Huyền",
    "role": "Thấu hiểu bản thân & con cái · Numerology",
    "image": {
      "src": "/images/experts/network/le-thanh-huyen.jpg",
      "alt": "Lê Thanh Huyền"
    }
  },
  {
    "id": "mai-ha-linh",
    "name": "Mai Hà Linh",
    "role": "Tâm thức · NLP · Cảm xúc",
    "image": {
      "src": "/images/experts/network/mai-ha-linh.jpg",
      "alt": "Mai Hà Linh"
    }
  },
  {
    "id": "thu-huong",
    "name": "Thu Hương",
    "role": "Phát triển bản thân · Nuôi dạy con",
    "image": {
      "src": "/images/experts/network/thu-huong.jpg",
      "alt": "Thu Hương"
    }
  },
  {
    "id": "tran-hong-nhung",
    "name": "Trần Hồng Nhung",
    "role": "Tâm thức · Chữa lành",
    "image": {
      "src": "/images/experts/network/tran-hong-nhung.jpg",
      "alt": "Trần Hồng Nhung"
    }
  },
  {
    "id": "vu-thi-hien",
    "name": "Vũ Thị Hiền",
    "role": "Mối quan hệ · Phát triển bản thân",
    "image": {
      "src": "/images/experts/network/vu-thi-hien.jpg",
      "alt": "Vũ Thị Hiền"
    }
  }
];

function ExpertPortrait({ expert, compact = false }: { expert: NetworkExpert; compact?: boolean }) {
  return (
    <div className={compact ? "relative size-14 shrink-0 overflow-hidden rounded-full bg-tcn-green-light" : "relative aspect-square w-full max-w-[300px] overflow-hidden rounded-xl bg-tcn-beige/55"}>
      {expert.image ? (
        <Image src={expert.image.src} alt={expert.image.alt} fill sizes={compact ? "56px" : "(min-width: 640px) 300px, min(300px, 100vw)"} className="object-cover" style={{ objectPosition: expert.image.objectPosition ?? "50% 30%" }} />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-2 text-center text-tcn-green-dark/60">
          <span aria-hidden="true" className={compact ? "font-heading text-lg" : "font-heading text-5xl opacity-40"}>{expert.id.split("-").at(-1)?.toUpperCase()}</span>
          {!compact && <span className="text-xs tracking-wide">Ảnh chân dung · Sẽ cập nhật</span>}
        </div>
      )}
    </div>
  );
}

export default function ExpertsSection({ featured = featuredExperts, network = expertNetwork, teamHref }: { featured?: FeaturedExpert[]; network?: NetworkExpert[]; teamHref?: string }) {
  return (
    <section id="chuyen-gia" aria-labelledby="experts-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">ĐỘI NGŨ CHUYÊN GIA</p>
          <h2 id="experts-title">Đồng hành cùng bạn là những người thực sự hiểu con người</h2>
          <p className="mt-5 text-base leading-[1.7] text-text-secondary">TCN kết nối những Coach, Trainer và chuyên gia trong nhiều lĩnh vực, cùng chung một định hướng: giúp mỗi người hiểu mình sâu hơn, phát triển từ bên trong và xây dựng những mối quan hệ chất lượng.</p>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((expert) => (
            <article key={expert.id} aria-labelledby={`featured-${expert.id}`} className="flex min-w-0 flex-col border-b border-tcn-green-dark/15 pb-5 transition-colors hover:border-tcn-brown/45">
              <ExpertPortrait expert={{ ...expert, image: { src: expert.image, alt: expert.name } }} />
              <div className="flex flex-1 flex-col pt-5">
                <h3 id={`featured-${expert.id}`} className="text-2xl">{expert.name}</h3>
                <div className="mt-2 text-sm font-medium text-tcn-brown">{expert.role}</div>
                {expert.description && <p className="mt-3 text-base leading-[1.7] text-text-secondary">{expert.description}</p>}
                {!!expert.specialties?.length && (
                  <div className="mt-auto pt-4">
                    <p className="text-xs font-medium text-tcn-brown">THẾ MẠNH</p>
                    <ul aria-label="Thế mạnh" className="mt-2 mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-secondary">
                      {expert.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
                    </ul>
                  </div>
                )}
                {expert.href && (
                  <a href={expert.href} aria-label={`Xem hồ sơ ${expert.name}`} className="text-link mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm">Xem hồ sơ <span aria-hidden="true">→</span></a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-tcn-green-dark/10 pt-10 lg:mt-16">
          <div className="section-copy">
            <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">MẠNG LƯỚI ĐỒNG HÀNH</p>
            <h3 className="font-heading text-2xl leading-snug text-tcn-green-dark sm:text-[28px]">Mạng lưới chuyên gia cùng đồng hành</h3>
            <p className="mt-4 text-base leading-[1.7] text-text-secondary">TCN kết nối Coach, Trainer và chuyên gia trong nhiều lĩnh vực để mang đến những góc nhìn và nguồn lực phù hợp cho từng hành trình phát triển.</p>
          </div>
          <ExpertNetworkCarousel items={network} />
          {teamHref && <a href={teamHref} className="text-link mt-7 inline-flex min-h-11 items-center text-sm">Khám phá đội ngũ chuyên gia</a>}
        </div>

      </div>
    </section>
  );
}



