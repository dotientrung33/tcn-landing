"use client";


import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Về TCN", "#ve-tcn"], ["Dịch vụ", "#dich-vu"],
  ["Chương trình", "#chuong-trinh"], ["Chuyên gia", "#chuyen-gia"],
  ["Cộng đồng", "#cong-dong"], ["Kiến thức", "#kien-thuc"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header ref={header} className={`site-header ${scrolled ? "is-scrolled" : ""}`} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <a className="skip-link" href="#main-content">Đến nội dung chính</a>
      <div className="site-container header-inner flex items-center justify-between gap-4">
        <a href="#main-content" aria-label="TCN – Trang chủ" className="shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/brand/tcn-logo.svg" alt="TCN – Transformative Coaching Network" width={72} height={72} className="size-[72px] object-contain" />
        </a>
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-4 xl:gap-7 lg:flex">
          {links.map(([label, href]) => <a className="nav-link" key={href} href={href}>{label}</a>)}
        </nav>
        <a href="#ket-noi" className="btn btn-primary hidden px-4 text-sm lg:inline-flex">Kết nối cùng TCN</a>
        <button ref={toggle} type="button" className="flex size-12 items-center justify-center rounded-control text-tcn-green-dark lg:hidden" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Điều hướng di động" hidden={!open} className="mobile-navigation lg:hidden">
        <div className="site-container flex flex-col gap-1 pb-6 pt-2">
          {links.map(([label, href]) => <a className="nav-link rounded-control px-3 py-3" key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="#ket-noi" className="btn btn-primary mt-3" onClick={() => setOpen(false)}>Kết nối cùng TCN</a>
        </div>
      </nav>
    </header>
  );
}

