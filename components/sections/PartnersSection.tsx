import Image from "next/image";
import styles from "./PartnersSection.module.css";

export type Partner = {
  id: string;
  name: string;
  logo?: string;
  category?: string;
};

export const partners: Partner[] = [
  {
    "id": "acb",
    "name": "ACB",
    "logo": "/images/partners/acb.png"
  },
  {
    "id": "aia",
    "name": "AIA",
    "logo": "/images/partners/aia.png"
  },
  {
    "id": "gln",
    "name": "GLN",
    "logo": "/images/partners/gln.png"
  },
  {
    "id": "heu",
    "name": "HEU",
    "logo": "/images/partners/heu.png"
  },
  {
    "id": "mbbank",
    "name": "MB Bank",
    "logo": "/images/partners/mbbank.png"
  },
  {
    "id": "msb",
    "name": "MSB",
    "logo": "/images/partners/msb.png"
  },
  {
    "id": "vcb",
    "name": "Vietcombank",
    "logo": "/images/partners/vcb.png"
  },
  {
    "id": "vpbank",
    "name": "VPBank",
    "logo": "/images/partners/vpbank.png"
  }
];

export default function PartnersSection({ items = partners }: { items?: Partner[] }) {
  return (
    <section id="khach-hang-doi-tac" aria-labelledby="partners-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">KHÁCH HÀNG &amp; ĐỐI TÁC</p>
          <h2 id="partners-title">Những tổ chức, cộng đồng và đối tác đã cùng TCN tạo nên những hành trình ý nghĩa</h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary">TCN đồng hành cùng nhiều cá nhân, tổ chức, trường học, doanh nghiệp và cộng đồng trong các chương trình đào tạo, Coaching và phát triển con người.</p>
        </div>
        <div className={`${styles.marquee} mt-6`}>
          <label className={styles.pauseControl}>
            <input type="checkbox" className="accent-tcn-green-dark" />
            <span>Tạm dừng chuyển động</span>
          </label>
          <div className={styles.viewport} tabIndex={0} role="region" aria-label="Khách hàng và đối tác, cuộn ngang để xem">
            <div className={styles.track}>
              {/* Equal groups include trailing spacing so the half-width loop joins seamlessly. */}
              {[false, true].map((duplicate) => (
                <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className={`${styles.group} ${duplicate ? styles.duplicate : ""}`}>
                  {items.map((partner) => (
                    <li key={partner.id} className={styles.item}>
                      {partner.logo ? <div className="relative h-10 w-full max-w-[152px]"><Image src={partner.logo} alt={partner.name} fill sizes="(min-width: 640px) 152px, 104px" className="object-contain" /></div> : <span className="text-sm font-medium text-tcn-green-dark/65">{partner.name}</span>}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
