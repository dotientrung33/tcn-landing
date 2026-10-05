"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "./TestimonialsSection";
import styles from "./TestimonialsCarousel.module.css";

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const count = items.length;
  const [position, setPosition] = useState(count);
  const [visible, setVisible] = useState(1);
  const [moving, setMoving] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      setVisible(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    update();
    preference.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => { preference.removeEventListener("change", update); window.removeEventListener("resize", update); };
  }, []);

  function step(direction: number) {
    if (busy.current || count < 2) return;
    setExpanded(null);
    if (reduced) setPosition((current) => count + ((current - count + direction + count) % count));
    else {
      busy.current = true;
      setMoving(true);
      setPosition((current) => current + direction);
    }
  }

  useEffect(() => {
    if (reduced || hovered || focused || paused || expanded || count < 2) return;
    const timer = window.setInterval(() => {
      if (busy.current) return;
      busy.current = true;
      setMoving(true);
      setPosition((current) => current + 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reduced, hovered, focused, paused, expanded, count]);

  useEffect(() => {
    if (!moving) return;
    const timer = window.setTimeout(() => {
      setMoving(false);
      setPosition((current) => count + ((current - count + count) % count));
      busy.current = false;
    }, reduced ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [moving, reduced, count]);

  if (!count) return null;
  return (
    <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Cảm nhận khách hàng" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${position * 100 / visible}%)`, transition: moving && !reduced ? "transform 450ms ease" : "none" }}>
          {[...items, ...items, ...items].map((item, index) => {
            const active = index >= position && index < position + Math.min(visible, count);
            const opened = expanded === item.id;
            const long = item.quote.length > 200;
            const quoteId = `testimonial-quote-${item.id}-${index}`;
            return (
              <div key={`${item.id}-${index}`} className={styles.slide} aria-hidden={!active} inert={!active}>
                <figure className={styles.card}>
                  <div className={styles.avatar}>
                    {item.image && <Image src={item.image} alt={item.name} fill sizes="72px" className="object-cover" style={{ objectPosition: item.imagePosition ?? "50% 25%" }} />}
                  </div>
                  <span className={styles.quoteMark} aria-hidden="true">”</span>
                  <figcaption>
                    <h3 className={styles.name}>{item.name}</h3>
                    {item.role && <div className={styles.role}>{item.role}</div>}
                    {item.context && <div className={styles.context}>{item.context}</div>}
                  </figcaption>
                  <blockquote id={quoteId} className={`${styles.quote} ${!opened ? styles.preview : ""}`}>{item.quote}</blockquote>
                  {long && <button type="button" className={styles.readMore} aria-expanded={opened} aria-controls={quoteId} aria-label={`${opened ? "Thu gọn" : "Đọc thêm"} cảm nhận của ${item.name}`} onClick={() => setExpanded(opened ? null : item.id)}>{opened ? "Thu gọn" : "Đọc thêm"} <span aria-hidden="true">{opened ? "−" : "+"}</span></button>}
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.controls}>
        <span className={styles.progress} aria-label="Vị trí cảm nhận">{((position % count) + count) % count + 1} / {count}</span>
        {!reduced && <button type="button" className={styles.pause} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Tiếp tục tự động" : "Tạm dừng tự động"}</button>}
        <button type="button" aria-label="Cảm nhận trước" onClick={() => step(-1)}>←</button>
        <button type="button" aria-label="Cảm nhận tiếp theo" onClick={() => step(1)}>→</button>
      </div>
    </div>
  );
}
