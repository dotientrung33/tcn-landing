# TCN Landing Page

Nền tảng Next.js, TypeScript, Tailwind CSS và App Router.

## Chạy local

Yêu cầu Node.js >= 20.9 và npm.

```sh
npm ci
npm run dev
```

Mở http://localhost:3000.

## Kiểm tra và build

```sh
npm run typecheck
npm run build
npm start
```

## Cấu trúc

- `app/`: layout, trang và CSS toàn cục.
- `components/sections/`: dành cho các section độc lập khi triển khai landing page.
- `components/`: dành cho component dùng chung.
- `public/`: ảnh và tài nguyên tĩnh.

Chỉ thêm `lib/` khi có hàm tiện ích hoặc logic dùng chung thực tế.
Trang hiện tại là demo nhỏ của design system, chưa phải landing page thật.
CSS sử dụng mobile-first; chưa triển khai nội dung hoặc giao diện landing page.

## Design system

- Tokens nằm trong `app/globals.css` với Tailwind CSS v4 `@theme`.
- Màu: `tcn-green-dark`, `tcn-green`, `tcn-green-light`, `tcn-brown-dark`, `tcn-brown`, `tcn-beige`, `tcn-ivory`, `white`, `text-primary`, `text-secondary`. Dùng với `bg-*`, `text-*`, `border-*`.
- Font: `font-heading` (Playfair Display), `font-sans` (Plus Jakarta Sans). Cấu hình variable fonts qua `next/font/google`, subset Latin và Vietnamese, `display: swap`. Lần build cần mạng để tải font; trình duyệt nhận font từ ứng dụng.
- `site-container`: tối đa 1200px (gồm padding), căn giữa; padding 16/24/32px tại mobile/640px/1024px.
- `section-spacing`: khoảng cách dọc 48/64/96px tại cùng các breakpoint.
- Heading h1–h3 co giãn bằng `clamp`; `body-copy` giới hạn 65ch.
- Nút: `btn btn-primary`, `btn btn-secondary`; liên kết: `text-link`. Nút cao tối thiểu 48px, có hover, focus-visible, disabled và hỗ trợ reduced motion.
- Bo góc: `rounded-control` (12px), `rounded-panel` (24px).
- Nút chính dùng Green Dark với chữ trắng để giữ độ tương phản; Green sáng dùng làm màu nhấn.
