import Image from "next/image";

type FooterLink = { label: string; href: string | null };

export const footerContacts: FooterLink[] = [
  { label: "Email", href: null },
  { label: "Điện thoại", href: null },
  { label: "Facebook", href: null },
  { label: "Zalo", href: null },
];

const navigation: { title: string; links: FooterLink[] }[] = [
  { title: "KHÁM PHÁ", links: [
    { label: "Về TCN", href: "#ve-tcn" },
    { label: "Giải pháp", href: "#dich-vu" },
    { label: "Lĩnh vực", href: "#chuong-trinh" },
    { label: "Chuyên gia", href: "#chuyen-gia" },
  ] },
  { title: "ĐỒNG HÀNH", links: [
    { label: "Cộng đồng", href: "#cong-dong" },
    { label: "Hoạt động", href: "#hoat-dong" },
    { label: "Cảm nhận", href: "#cam-nhan" },
  ] },
  { title: "KẾT NỐI", links: footerContacts },
];

export default function Footer() {
  return (
    <footer className="w-full bg-tcn-ivory py-12 text-text-primary sm:py-14">
      <div className="site-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          <div className="min-w-0">
            <a href="#main-content" aria-label="TCN — về đầu trang" className="inline-flex min-h-11 items-center font-heading text-3xl font-semibold text-tcn-green-dark"><Image src="/images/brand/tcn-logo.svg" alt="TCN – Transformative Coaching Network" width={112} height={112} className="size-28 object-contain" /></a>
            <p className="mt-4 text-base leading-relaxed text-tcn-green-dark">Nơi hội tụ những chuyên gia thấu hiểu con người, khai mở tiềm năng và đồng hành cùng sự phát triển bền vững.</p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">Từ cá nhân, gia đình đến đội nhóm và tổ chức, TCN kết nối những chuyên môn phù hợp để mỗi hành trình được đồng hành theo cách riêng.</p>
          </div>
          {navigation.map((group, index) => (
            <nav key={group.title} aria-labelledby={`footer-group-${index}`} className="min-w-0">
              <h2 id={`footer-group-${index}`} className="font-sans text-xs font-semibold tracking-[0.1em] text-tcn-brown">{group.title}</h2>
              <ul className="mt-4 space-y-1">
                {group.links.map((link) => <li key={link.label}>{link.href ? <a href={link.href} className="inline-flex min-h-11 items-center text-sm text-tcn-green-dark underline-offset-4 hover:underline">{link.label}</a> : <span className="inline-flex min-h-11 flex-wrap items-center gap-x-2 text-sm text-text-secondary"><span>{link.label}</span><span className="text-xs">· Sẽ cập nhật</span></span>}</li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-tcn-green-dark/10 pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-tcn-brown">Together, We Transform Lives.</span>
          <span>© TCN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
