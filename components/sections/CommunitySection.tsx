import Image from "next/image";

export type Community = {
  id: string;
  name: string;
  description: string;
  image: string | null;
  href: string | null;
};

export const communities: Community[] = [
  { id: "tram-binh-an", name: "TRẠM BÌNH AN", description: "Không gian kết nối và nuôi dưỡng sự bình an từ bên trong, nơi mỗi người có thể lắng lại, chia sẻ và tiếp tục hành trình hiểu mình.", image: "/images/community/tram-binh-an.webp", href: "https://www.facebook.com/groups/trambinhan.group" },
  { id: "gia-dinh-thau-hieu", name: "ĐỒNG HÀNH CÙNG CON TUỔI DẬY THÌ | GIA ĐÌNH THẤU HIỂU", description: "Cộng đồng dành cho cha mẹ muốn hiểu con sâu hơn, cải thiện giao tiếp và xây dựng mối quan hệ gia đình bằng sự thấu hiểu.", image: "/images/community/dong-hanh-cung-con.webp", href: "https://www.facebook.com/groups/1045727321331068" },
  { id: "so-hoc-ung-dung", name: "SỐ HỌC ỨNG DỤNG TRONG ĐỜI SỐNG", description: "Không gian chia sẻ góc nhìn ứng dụng Numerology vào hiểu mình, hiểu người và ra quyết định trong đời sống.", image: "/images/community/so-hoc-ung-dung (2).optimized.webp", href: "https://www.facebook.com/groups/sohocungdungtrongdoisong" },
];

export default function CommunitySection() {
  return (
    <section id="cong-dong" aria-labelledby="community-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">CỘNG ĐỒNG</p>
          <h2 id="community-title">Một hành trình thay đổi sẽ bền vững hơn khi bạn không đi một mình</h2>
          <p className="mt-5 text-base leading-[1.7] text-text-secondary">Cộng đồng TCN tạo ra những không gian để mỗi người được kết nối, chia sẻ, thực hành, phản tư và duy trì hành trình phát triển của mình trong đời sống thực tế.</p>
        </div>
        <div className="mt-9 divide-y divide-tcn-green-dark/10 border-y border-tcn-green-dark/10">
          {communities.map((community) => (
            <article key={community.id} aria-labelledby={`community-${community.id}`} className="grid items-center gap-5 py-7 md:grid-cols-[3fr_7fr] md:gap-8 lg:gap-10">
              <div className={`relative ${community.id === "tram-binh-an" ? "aspect-[4/3]" : "aspect-[3/2]"} min-w-0 overflow-hidden rounded-xl bg-tcn-beige/50`}>
                {community.image ? <Image src={community.image} alt={`Sinh hoạt cộng đồng ${community.name}`} fill sizes="(min-width: 1280px) 353px, (min-width: 1024px) calc((100vw - 104px) * 0.3), (min-width: 768px) calc((100vw - 80px) * 0.3), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)" className="object-cover" /> : <div className="flex h-full items-center justify-center px-5 text-center text-sm text-tcn-green-dark/60">Ảnh sinh hoạt cộng đồng · Sẽ cập nhật</div>}
              </div>
              <div className="section-copy">
                <h3 id={`community-${community.id}`} className="font-heading text-xl leading-snug text-tcn-green-dark sm:text-2xl">{community.name}</h3>
                <p className="mt-3 text-base leading-[1.7] text-text-secondary">{community.description}</p>
                {community.href && community.href !== "#" ? <a href={community.href} target="_blank" rel="noopener noreferrer" className="text-link mt-4 inline-flex min-h-11 items-center gap-2 text-sm">Tham gia cộng đồng <span aria-hidden="true">→</span></a> : <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary"><span aria-disabled="true" className="inline-flex min-h-11 items-center gap-2">Tham gia cộng đồng <span aria-hidden="true">→</span></span><span className="text-xs">Link tham gia · Sẽ cập nhật</span></div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
