# ASSET + REAL DATA PASS — TCN_LANDING

Đã hoàn thành dữ liệu và asset trong phạm vi yêu cầu. Không thêm dependency, không sửa/đổi tên/xóa ảnh gốc, không chạy image optimization pass.

## 1. File code sửa/tạo

- [app/page.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/app/page.tsx)
- [components/sections/ExpertsSection.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/ExpertsSection.tsx)
- [components/sections/ExpertsSection.module.css](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/ExpertsSection.module.css)
- [components/sections/ExpertNetworkCarousel.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/ExpertNetworkCarousel.tsx)
- [components/sections/PartnersSection.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/PartnersSection.tsx)
- [components/sections/CommunitySection.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/CommunitySection.tsx)
- [components/sections/ActivitySection.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/ActivitySection.tsx)
- [components/sections/TestimonialsSection.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/sections/TestimonialsSection.tsx)
- [components/FloatingContact.tsx](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/FloatingContact.tsx)
- [components/FloatingContact.module.css](C:/Users/Trung/OneDrive/Documents/ChatGPT/TCN_LANDING/components/FloatingContact.module.css)

## 2. Expert Network

| Chuyên gia | Asset |
|---|---|
| Hà Thị Hương | public/images/experts/network/ha-thi-huong.jpg |
| Hoa Bông | public/images/experts/network/hoa-bong.jpg |
| Khánh Chi | public/images/experts/network/khanh-chi.jpg |
| Lê Thanh Huyền | public/images/experts/network/le-thanh-huyen.jpg |
| Mai Hà Linh | public/images/experts/network/mai-ha-linh.jpg |
| Thu Hương | public/images/experts/network/thu-huong.jpg |
| Trần Hồng Nhung | public/images/experts/network/tran-hong-nhung.jpg |
| Vũ Thị Hiền | public/images/experts/network/vu-thi-hien.jpg |

Chuyên môn dùng đúng nội dung được cung cấp. Đã bỏ toàn bộ placeholder và disclaimer minh họa của network. Carousel hiển thị 5 người từ 1024px, 3 người từ 768px, 2 người từ 480px và 1 người dưới 480px; tự dịch một người mỗi 3 giây, transition 450ms, loop hai chiều. Có Previous/Next, pause thủ công và pause khi hover/focus. Khi prefers-reduced-motion được bật, không autoplay và không transition; điều hướng thủ công vẫn hoạt động.

## 3. Partners

| Đối tác | Asset |
|---|---|
| ACB | public/images/partners/acb.png |
| AIA | public/images/partners/aia.png |
| GLN | public/images/partners/gln.png |
| HEU | public/images/partners/heu.png |
| MB Bank | public/images/partners/mbbank.png |
| MSB | public/images/partners/msb.png |
| Vietcombank | public/images/partners/vcb.png |
| VPBank | public/images/partners/vpbank.png |

Giữ marquee seamless hiện có, hover/focus pause, checkbox pause và reduced motion. Logo dùng object-contain, khung cao 40px và rộng tối đa 152px để tránh méo hoặc logo vuông quá lớn.

## 4. Community

- **Trạm Bình An**: `public/images/community/tram-binh-an.jpg` → [Tham gia cộng đồng](https://www.facebook.com/groups/trambinhan.group).
- **Đồng Hành Cùng Con Tuổi Dậy Thì | Gia Đình Thấu Hiểu**: `public/images/community/dong-hanh-cung-con.jpg` → [Tham gia cộng đồng](https://www.facebook.com/groups/1045727321331068).
- **SỐ HỌC ỨNG DỤNG TRONG ĐỜI SỐNG**: `public/images/community/so-hoc-ung-dung (2).webp` → [Tham gia cộng đồng](https://www.facebook.com/groups/sohocungdungtrongdoisong).

Giữ bố cục desktop 30% ảnh / 70% nội dung, mobile ảnh trên. Khung ảnh giữ tỷ lệ nguồn: 4:3 cho Trạm Bình An, 3:2 cho hai ảnh còn lại, tránh cắt mất người ở hai mép. Các CTA mở tab mới với rel="noopener noreferrer".

## 5. Activities

Dùng toàn bộ **16 ảnh**, từ `public/images/activities/1.jpg` đến `public/images/activities/16.jpg`, theo thứ tự số. Giữ ảnh lớn, thumbnail bên cạnh trên desktop và cuộn ngang trên mobile; giới hạn chiều cao vùng thumbnail desktop để 16 ảnh không kéo dài section. Giữ autoplay 3 giây, crossfade 500ms, hover/focus pause, pause thủ công và reduced motion. Tên file chỉ là số, nên dùng nhãn trung tính “Khoảnh khắc hoạt động 01–16”, không tự gán tên sự kiện.

## 6–7. Testimonials

| Người chia sẻ | Asset |
|---|---|
| Chị Khánh Chi | public/images/testimonials/khanh-chi.jpg |
| Chị Nguyễn Thu Hà | public/images/testimonials/nguyen-thu-ha.jpg |
| Hoa hậu Vũ Loan | public/images/testimonials/vu-loan.jpg |
| Hoa hậu Jennifer Phạm | public/images/testimonials/jennifer-pham.jpg |
| Chuyên gia Makeup Mai Phan | public/images/testimonials/mai-phan.jpg |

Không có testimonial thiếu ảnh. Giữ nguyên feedback và vai trò được cung cấp; không thêm rating/chức danh. Ảnh Jennifer Phạm là ảnh chụp chung: căn avatar bằng CSS để tập trung vào người gửi feedback, không sửa file gốc. Điều chỉnh độ rộng cột, cỡ chữ các card phụ và bỏ kéo cao card nổi bật theo cả cột để nội dung dài không tạo card quá cao; vẫn giữ một card nổi bật cạnh các card còn lại. Danh sách tiếp tục render thêm testimonial khi bổ sung dữ liệu.

## 8–9. Floating Contact

Component riêng, desktop có 3 nút dọc; mobile có một nút mở/đóng 3 kênh. Có aria-expanded/aria-controls, focus visible, Escape đóng menu, click ngoài đóng menu; z-index 40 thấp hơn header. Giảm độ nổi khi Final CTA xuất hiện.

- [Chat Zalo](https://zalo.me/0985899895)
- [Nhắn Messenger](https://m.me/999544009890329)
- [Theo dõi Fanpage](https://www.facebook.com/profile.php?id=61586161078450)

Cả ba link dùng target="_blank" và rel="noopener noreferrer". Đã kiểm tra đích link trong DOM; không gửi tin nhắn hay thực hiện thao tác trên tài khoản bên ngoài.

## 10. Kiểm tra

- `npm run build`: PASS.
- `npm run typecheck`: PASS.
- 40 asset được cập nhật: HTTP 200.
- Kiểm tra responsive tại desktop lớn 1440px, laptop khoảng 1024px, tablet 768px, mobile 520px và 390px; không có tràn ngang toàn trang.
- Network: xác nhận 5 / 3 / 2 / 1 card, nút trước/sau, tự chuyển và pause khi focus.
- Partners: ảnh tải thành công, object-contain; checkbox pause trả animation-play-state: paused.
- Community: cả 3 ảnh tải thành công và CTA có đúng URL, target, rel.
- Activities: thumbnail cuộn ngang mobile, chọn được ảnh cuối (16).
- Testimonials: cả 5 card hiển thị đầy đủ; chiều cao card desktop khoảng 304–405px, laptop khoảng 350–494px, mobile khoảng 223–355px.
- Floating Contact: menu mobile mở/đóng, Escape hoạt động; kiểm tra form mobile cho thấy nút liên hệ không phủ nút đăng ký tại vị trí đã kiểm tra.
- Reduced motion: đã kiểm tra cơ chế trong code/CSS; chưa giả lập tùy chọn hệ điều hành trong trình duyệt.
- Console không ghi nhận lỗi/cảnh báo trong lượt kiểm tra.

## 11. Asset chưa sử dụng và phạm vi bảo toàn

Không có asset chưa sử dụng trong các thư mục network, partners, community, activities và testimonials đã scan. Ba ảnh trong `public/images/experts/` vẫn dùng cho 3 featured experts, không thay đổi. Đối chiếu hash xác nhận không có ảnh gốc nào bị sửa; đối chiếu mã nguồn xác nhận cả dữ liệu và render của 3 featured experts giữ nguyên. Các section ngoài phạm vi, global styles và dependency không bị sửa.

Preview: [Mở tại #chuyen-gia](http://localhost:3100/#chuyen-gia). Dừng để duyệt, không chuyển sang image optimization.

