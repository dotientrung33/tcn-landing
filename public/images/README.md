# Asset hình ảnh TCN Landing

Lưu hình ảnh của project trong các thư mục dưới đây. Chỉ thêm asset thật đã được chọn để sử dụng; các tên file ví dụ không phải ảnh có sẵn.

## Cấu trúc và mục đích

| Thư mục | Nội dung |
| --- | --- |
| `brand/` | Logo, logo phụ, icon thương hiệu, favicon và các asset nhận diện TCN. |
| `hero/` | Ảnh Hero chính và các visual Hero. |
| `about/` | Ảnh giới thiệu TCN, workshop và hoạt động đại diện thương hiệu. |
| `programs/` | Ảnh Numerology for Life, Relationship Program, Parenting & Kid Development, Trạm Bình An và các chương trình khác. |
| `experts/` | Ảnh ba chuyên gia chính và các chuyên gia đồng hành. |
| `community/` | Ảnh cộng đồng, hoạt động cộng đồng và group. |
| `testimonials/` | Ảnh khách hàng/học viên dùng cho testimonial. |
| `activities/` | Ảnh workshop, talkshow, training, coaching và hoạt động thực tế. |
| `partners/` | Logo đối tác, đơn vị đồng hành, trường học và doanh nghiệp. |

## Quy ước đặt tên

- Dùng chữ thường, bao gồm phần mở rộng của file.
- Không dấu tiếng Việt.
- Không dùng khoảng trắng.
- Dùng dấu `-` để ngăn cách các từ.
- Tên file mô tả rõ nội dung; có thể thêm số thứ tự như `-01`, `-02` cho cùng một nhóm ảnh.

## Ví dụ

Các đường dẫn sau tính từ `public/images/`:

```text
brand/tcn-logo.png
hero/hero-coaching-main.jpg
about/tcn-about-main.jpg
programs/numerology-for-life.jpg
programs/relationship-program.jpg
programs/parenting-kid-development.jpg
programs/tram-binh-an.jpg
experts/do-tien-trung.jpg
experts/expert-02.jpg
experts/expert-03.jpg
activities/workshop-parenting-01.jpg
community/tram-binh-an-community.jpg
partners/eek-logo.png
```

Khi dùng trong giao diện Next.js, đường dẫn bắt đầu bằng `/images/`, ví dụ `/images/brand/tcn-logo.png` (không có tiền tố `public/`).

## Tự động tối ưu hình ảnh

1. Copy ảnh gốc vào folder phù hợp.
2. Đặt tên chữ thường, không dấu, không khoảng trắng, dùng dấu `-`.
3. Tại thư mục gốc project, chạy `npm run optimize-images`.
4. Sau khi có WebP, ưu tiên dùng `.webp` trong website. Script không tự sửa đường dẫn trong component.

Ví dụ: `public/images/experts/do-tien-trung.jpg` → chạy `npm run optimize-images` → tạo `public/images/experts/do-tien-trung.webp`. Ảnh JPG gốc vẫn được giữ nguyên.

Script quét đệ quy JPG/JPEG/PNG và WebP nguồn, kể cả phần mở rộng viết hoa; bỏ qua SVG, AVIF, README, symlink, thư mục logo `brand/` và `partners/`. Output nằm cùng thư mục với nguồn. JPG/PNG tạo `.webp`; WebP nguồn tạo `.optimized.webp`, không ghi đè nguồn. WebP có JPG/PNG cùng tên được coi là output và không xử lý tiếp. Output được tạo lại khi nguồn hoặc script có thời gian sửa đổi mới hơn.

| Folder | Chiều rộng tối đa | WebP quality |
| --- | --- | --- |
| `hero/` | 1280px | 84 |
| `about/`, `programs/` | 1600px | 80 |
| `activities/` | Trong khung 1920 × 1920px | 82 |
| `experts/` | 720px | 86 |
| `experts/network/` | Trong khung 320 × 480px | 86 |
| `maps/` | 480px | 88 |
| `community/` | 1200px | 80 |
| `testimonials/` | Trong khung 480 × 720px | 86 |
| `brand/`, `partners/` | Giữ nguyên file nguồn | Không chuyển đổi |
| Ảnh ở gốc hoặc folder khác | 1600px | 80 |

Quy tắc thư mục cụ thể được ưu tiên, sau đó đến folder cấp đầu tiên dưới `public/images/`. Kích thước phù hợp ảnh Hero khoảng 487–560px, About toàn chiều rộng trên tablet, ảnh hoạt động khoảng 715px desktop/toàn chiều rộng tablet, chân dung chuyên gia tối đa 300px, avatar mạng lưới 80px, avatar khách hàng 72px và bìa Map 125–155px. Ảnh không bị upscale hoặc crop; giữ aspect ratio và tự xoay theo EXIF trước khi xuất. Output không giữ metadata EXIF/GPS; file nguồn không bị sửa, đổi tên hoặc xóa.

Report hiển thị kích thước pixel, dung lượng trước/sau, số byte quy đổi KB/MB tiết kiệm và phần trăm giảm cho từng file. Tổng dung lượng và tỷ lệ giảm tính tất cả các cặp nguồn/output xử lý thành công, gồm file skipped. Đây là dung lượng asset tương ứng, không phải dung lượng tải trang thực tế qua `next/image`; giữ nguồn để backup khiến tổng dung lượng thư mục tăng. Số âm nghĩa là WebP lớn hơn nguồn.

Không dùng cùng tên cơ sở cho nhiều nguồn trong một thư mục (ví dụ `anh.jpg` và `anh.png`), vì cả hai sẽ tạo `anh.webp`. Script báo lỗi và bỏ qua các nguồn trùng output; ảnh nhiều frame cũng được báo lỗi để tránh mất animation. Nếu có lỗi, script tiếp tục các file khác rồi kết thúc với mã lỗi khác 0.
