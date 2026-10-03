"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FloatingContact.module.css";

const channels = [
  { label: "Chat Zalo", href: "https://zalo.me/0985899895", icon: "zalo" },
  { label: "Nhắn Messenger", href: "https://m.me/999544009890329", icon: "messenger" },
  { label: "Theo dõi Fanpage", href: "https://www.facebook.com/profile.php?id=61586161078450", icon: "facebook" },
];

function ContactIcon({ kind }: { kind: string }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "facebook" ? <path d="M14 21V12h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v2H7v4h3v9" /> : <><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 1 1 18 0Z" />{kind === "messenger" ? <path d="m6 13 4-4 3 3 5-4-4 7-4-3-4 1Z" /> : <path d="M8 8h7l-7 7h7" />}</>}
  </svg>;
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const root = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const target = document.getElementById("ket-noi");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setMuted(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [open]);

  return (
    <aside ref={root} aria-label="Liên hệ TCN" className={`${styles.root} ${muted && !open ? styles.muted : ""}`} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button ref={toggle} type="button" className={styles.toggle} aria-label={open ? "Đóng liên hệ" : "Mở liên hệ"} aria-expanded={open} aria-controls="floating-contact-links" onClick={() => setOpen(!open)}>
        {open ? <span aria-hidden="true">×</span> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 1 1 18 0Z" /><path d="M7 10h8M7 14h5" /></svg>}
      </button>
      <nav id="floating-contact-links" aria-label="Kênh liên hệ" className={`${styles.links} ${open ? styles.open : ""}`}>
        {channels.map((channel) => <a key={channel.icon} href={channel.href} target="_blank" rel="noopener noreferrer"><ContactIcon kind={channel.icon} /><span>{channel.label}</span></a>)}
      </nav>
    </aside>
  );
}
