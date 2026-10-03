"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ActivityItem = {
  id: string;
  image: string | null;
  title: string;
  category?: string;
  alt: string;
};

export const activities: ActivityItem[] = [
  {
    "id": "activity-1",
    "image": "/images/activities/1.jpg",
    "title": "Khoảnh khắc hoạt động 01",
    "alt": "Hình ảnh hoạt động thực tế TCN 1"
  },
  {
    "id": "activity-2",
    "image": "/images/activities/2.jpg",
    "title": "Khoảnh khắc hoạt động 02",
    "alt": "Hình ảnh hoạt động thực tế TCN 2"
  },
  {
    "id": "activity-3",
    "image": "/images/activities/3.jpg",
    "title": "Khoảnh khắc hoạt động 03",
    "alt": "Hình ảnh hoạt động thực tế TCN 3"
  },
  {
    "id": "activity-4",
    "image": "/images/activities/4.jpg",
    "title": "Khoảnh khắc hoạt động 04",
    "alt": "Hình ảnh hoạt động thực tế TCN 4"
  },
  {
    "id": "activity-5",
    "image": "/images/activities/5.jpg",
    "title": "Khoảnh khắc hoạt động 05",
    "alt": "Hình ảnh hoạt động thực tế TCN 5"
  },
  {
    "id": "activity-6",
    "image": "/images/activities/6.jpg",
    "title": "Khoảnh khắc hoạt động 06",
    "alt": "Hình ảnh hoạt động thực tế TCN 6"
  },
  {
    "id": "activity-7",
    "image": "/images/activities/7.jpg",
    "title": "Khoảnh khắc hoạt động 07",
    "alt": "Hình ảnh hoạt động thực tế TCN 7"
  },
  {
    "id": "activity-8",
    "image": "/images/activities/8.jpg",
    "title": "Khoảnh khắc hoạt động 08",
    "alt": "Hình ảnh hoạt động thực tế TCN 8"
  },
  {
    "id": "activity-9",
    "image": "/images/activities/9.jpg",
    "title": "Khoảnh khắc hoạt động 09",
    "alt": "Hình ảnh hoạt động thực tế TCN 9"
  },
  {
    "id": "activity-10",
    "image": "/images/activities/10.jpg",
    "title": "Khoảnh khắc hoạt động 10",
    "alt": "Hình ảnh hoạt động thực tế TCN 10"
  },
  {
    "id": "activity-11",
    "image": "/images/activities/11.jpg",
    "title": "Khoảnh khắc hoạt động 11",
    "alt": "Hình ảnh hoạt động thực tế TCN 11"
  },
  {
    "id": "activity-12",
    "image": "/images/activities/12.jpg",
    "title": "Khoảnh khắc hoạt động 12",
    "alt": "Hình ảnh hoạt động thực tế TCN 12"
  },
  {
    "id": "activity-13",
    "image": "/images/activities/13.jpg",
    "title": "Khoảnh khắc hoạt động 13",
    "alt": "Hình ảnh hoạt động thực tế TCN 13"
  },
  {
    "id": "activity-14",
    "image": "/images/activities/14.jpg",
    "title": "Khoảnh khắc hoạt động 14",
    "alt": "Hình ảnh hoạt động thực tế TCN 14"
  },
  {
    "id": "activity-15",
    "image": "/images/activities/15.jpg",
    "title": "Khoảnh khắc hoạt động 15",
    "alt": "Hình ảnh hoạt động thực tế TCN 15"
  },
  {
    "id": "activity-16",
    "image": "/images/activities/16.jpg",
    "title": "Khoảnh khắc hoạt động 16",
    "alt": "Hình ảnh hoạt động thực tế TCN 16"
  }
];

function ActivityVisual({ item, focal = false }: { item: ActivityItem; focal?: boolean }) {
  return item.image ? (
    <Image src={item.image} alt={focal ? item.alt : ""} fill sizes={focal ? "(min-width: 1280px) 730px, (min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 180px, 144px"} className="object-cover" />
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-tcn-beige/50 px-4 text-center text-tcn-green-dark/60">
      <span aria-hidden="true" className={focal ? "font-heading text-4xl opacity-50" : "font-heading text-xl opacity-50"}>{item.id.replace("activity-", "0")}</span>
      <span className={focal ? "text-sm" : "text-xs"}>Ảnh hoạt động · Sẽ cập nhật</span>
    </div>
  );
}

export default function ActivitySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(activities[0].id);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  // Default to no motion until the browser preference is known.
  const [reducedMotion, setReducedMotion] = useState(true);
  const [readyImages, setReadyImages] = useState<Set<string>>(() => new Set());
  const activeIndex = activities.findIndex((item) => item.id === activeId);
  const active = activities[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (hovered || focused || paused || reducedMotion) return;
    const timer = window.setTimeout(() => {
      const next = activities[(activeIndex + 1) % activities.length];
      // Wait for the next full-size image to load before beginning a crossfade.
      if (!next.image || readyImages.has(next.id)) setActiveId(next.id);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, hovered, focused, paused, reducedMotion, readyImages]);

  return (
    <section id="hoat-dong" aria-labelledby="activities-title" className="refined-section scroll-mt-32 bg-tcn-ivory">
      <div className="site-container">
        <div className="section-copy">
          <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-tcn-brown">HÀNH TRÌNH THỰC TẾ</p>
          <h2 id="activities-title">Những điều được chia sẻ được đưa vào đời sống thật</h2>
          <p className="mt-5 text-base leading-[1.7] text-text-secondary">Từ lớp học, workshop, hoạt động cộng đồng đến những chương trình đồng hành trực tiếp, mỗi hành trình đều là cơ hội để kiến thức trở thành trải nghiệm và sự thay đổi trở thành điều có thể nhìn thấy.</p>
        </div>
        <div className="mt-6" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <div ref={galleryRef} tabIndex={-1} aria-label="Hình ảnh hoạt động" className="grid min-w-0 items-start gap-6 outline-none lg:grid-cols-[3fr_2fr]">
            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-tcn-beige/50">
                {activities.map((item, index) => (
                  <div key={item.id} aria-hidden={item.id !== activeId} className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${item.id === activeId ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
                    {item.image ? (
                      <Image src={item.image} alt={item.alt} fill loading={item.id === activeId || index === (activeIndex + 1) % activities.length ? "eager" : "lazy"} sizes="(min-width: 1280px) 730px, (min-width: 1024px) 60vw, 100vw" className="object-cover" onLoad={() => setReadyImages((previous) => new Set(previous).add(item.id))} />
                    ) : <ActivityVisual item={item} focal />}
                  </div>
                ))}
              </div>
              <figcaption className="pt-4">
                {active.category && <div className="text-xs tracking-wide text-tcn-brown">{active.category}</div>}
                <h3 className="mt-2 font-heading text-2xl leading-snug text-tcn-green-dark">{active.title}</h3>
              </figcaption>
            </figure>
            <div className="flex min-w-0 gap-3 overflow-x-auto p-1 pb-3 lg:grid lg:max-h-[540px] lg:grid-cols-2 lg:gap-4 lg:overflow-y-auto" role="group" aria-label="Chọn ảnh hoạt động">
              {activities.map((item) => (
                <button key={item.id} type="button" aria-pressed={item.id === activeId} aria-label={`Xem ${item.title}`} onClick={() => { setActiveId(item.id); galleryRef.current?.focus({ preventScroll: true }); }} className={`w-36 shrink-0 rounded-lg text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tcn-brown lg:w-auto ${item.id === activeId ? "hidden" : "block"}`}>
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-lg"><ActivityVisual item={item} /></span>
                  <span className="mt-2 block text-xs leading-relaxed text-text-secondary">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4 text-xs text-text-secondary">
            <span>{String(activeIndex + 1).padStart(2, "0")} / {activities.length.toString().padStart(2, "0")}</span>
            {!reducedMotion && <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className="min-h-11 rounded px-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-tcn-brown">{paused ? "Tiếp tục tự động" : "Tạm dừng tự động"}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}



