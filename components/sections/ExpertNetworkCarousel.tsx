"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { NetworkExpert } from "./ExpertsSection";
import styles from "./ExpertsSection.module.css";

export default function ExpertNetworkCarousel({ items }: { items: NetworkExpert[] }) {
  // Complete copies on either side allow seamless wrapping in both directions.
  const count = items.length;
  const [position, setPosition] = useState(count);
  const [moving, setMoving] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(1);
  const busy = useRef(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(motion.matches);
      setVisible(window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 3 : window.innerWidth >= 480 ? 2 : 1);
    };
    update();
    motion.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => { motion.removeEventListener("change", update); window.removeEventListener("resize", update); };
  }, []);

  function step(direction: number) {
    if (busy.current || count < 2) return;
    if (reduced) {
      setPosition((current) => count + ((current - count + direction + count) % count));
    } else {
      busy.current = true;
      setMoving(true);
      setPosition((current) => current + direction);
    }
  }

  useEffect(() => {
    if (hovered || focused || paused || reduced || count < 2) return;
    const timer = window.setInterval(() => {
      if (busy.current) return;
      busy.current = true;
      setMoving(true);
      setPosition((current) => current + 1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [hovered, focused, paused, reduced, count]);

  useEffect(() => {
    if (!moving) return;
    // Settle even if a transition is interrupted by resizing or motion settings.
    const timer = window.setTimeout(() => {
      setMoving(false);
      setPosition((current) => count + ((current - count + count) % count));
      busy.current = false;
    }, reduced ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [moving, reduced, count]);

  if (!count) return null;
  return (
    <div className={`${styles.carousel} mt-7`} role="region" aria-roledescription="carousel" aria-label="Mạng lưới chuyên gia" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className={styles.controls}>
        {!reduced && <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Tiếp tục tự động" : "Tạm dừng tự động"}</button>}
        <button type="button" aria-label="Chuyên gia trước" onClick={() => step(-1)}>←</button>
        <button type="button" aria-label="Chuyên gia tiếp theo" onClick={() => step(1)}>→</button>
      </div>
      <div className={styles.viewport}>
        <ul className={styles.track} style={{ transform: `translateX(-${position * 100 / visible}%)`, transition: moving && !reduced ? "transform 450ms ease" : "none" }}>
          {[...items, ...items, ...items].map((expert, index) => (
            <li key={`${index}-${expert.id}`} className={styles.item} aria-hidden={index < position || index >= position + visible}>
              <div className={styles.portrait}>
                {expert.image && <Image src={expert.image.src} alt={expert.image.alt} fill sizes="80px" className="object-cover" style={{ objectPosition: expert.image.objectPosition ?? "50% 30%" }} />}
              </div>
              <p className="mt-3 text-sm font-semibold text-tcn-green-dark">{expert.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">{expert.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
