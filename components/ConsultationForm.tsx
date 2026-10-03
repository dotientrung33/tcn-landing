"use client";

import { useState, type FormEvent } from "react";

export type ConsultationRequest = {
  name: string;
  phone: string;
  interest: "" | "unsure" | "coaching" | "training" | "transformation";
  concern: string;
};

// Supply an API/webhook adapter from a client component when reception is ready.
type Props = {
  onSubmitRequest?: (request: ConsultationRequest) => Promise<void>;
};

export default function ConsultationForm({ onSubmitRequest }: Props) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fieldClass = "mt-2 block w-full rounded-control border border-tcn-green-dark/20 bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tcn-brown";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    for (const key of ["name", "phone", "concern"]) {
      const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : "Vui lòng điền thông tin này.");
    }
    if (!form.reportValidity()) return;
    if (!onSubmitRequest) {
      setStatus("Form đang được kết nối với hệ thống tiếp nhận.");
      return;
    }
    const data = new FormData(form);
    const request: ConsultationRequest = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      interest: String(data.get("interest") ?? "") as ConsultationRequest["interest"],
      concern: String(data.get("concern") ?? "").trim(),
    };
    setSubmitting(true);
    setStatus("");
    try {
      await onSubmitRequest(request);
      setStatus("Yêu cầu tư vấn đã được hệ thống tiếp nhận.");
    } catch {
      setStatus("Chưa thể gửi yêu cầu. Thông tin vẫn được giữ trong form để bạn thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Đăng ký tư vấn cùng TCN" aria-busy={submitting} className="min-w-0 rounded-panel bg-tcn-ivory p-5 text-text-primary sm:p-7" onInput={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
      setStatus("");
    }}>
      <div className="mb-6">
        <div className="mb-2 text-xs font-semibold tracking-[0.1em] text-tcn-brown">ĐĂNG KÝ TƯ VẤN</div>
        <h3 className="font-heading text-xl font-semibold leading-snug text-tcn-green-dark sm:text-2xl">Thông tin đăng ký tư vấn</h3>
        <div className="mt-3 text-sm leading-relaxed text-text-secondary">Để lại thông tin và chia sẻ điều bạn đang quan tâm. TCN sẽ liên hệ để cùng bạn làm rõ nhu cầu và gợi ý hướng đồng hành phù hợp.</div>
      </div>
      <div className="space-y-5">
        <label className="block text-sm font-semibold" htmlFor="consultation-name">Họ và tên
          <input id="consultation-name" name="name" type="text" required autoComplete="name" placeholder="Nhập họ và tên của bạn" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold" htmlFor="consultation-phone">Số điện thoại
          <input id="consultation-phone" name="phone" type="tel" required autoComplete="tel" placeholder="Nhập số điện thoại" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold" htmlFor="consultation-interest">Bạn đang quan tâm đến <span className="font-normal text-text-secondary">(Không bắt buộc)</span>
          <select id="consultation-interest" name="interest" defaultValue="" className={fieldClass}>
            <option value="">Chọn nếu bạn đã có định hướng</option>
            <option value="unsure">Tôi chưa biết mình cần gì</option>
            <option value="coaching">Coaching</option>
            <option value="training">Đào tạo</option>
            <option value="transformation">Đồng hành chuyển hóa</option>
          </select>
        </label>
        <label className="block text-sm font-semibold" htmlFor="consultation-concern">Điều bạn đang muốn được hỗ trợ
          <textarea id="consultation-concern" name="concern" required rows={4} aria-describedby="consultation-help" placeholder="Chia sẻ điều bạn đang băn khoăn hoặc mong muốn thay đổi." className={`${fieldClass} resize-y font-normal`} />
        </label>
      </div>
      <div id="consultation-help" className="mt-4 text-sm leading-relaxed text-text-secondary">Bạn không cần xác định trước mình phù hợp với Coaching, đào tạo hay một hành trình dài hạn. TCN sẽ cùng bạn làm rõ nhu cầu và gợi ý hình thức đồng hành phù hợp.</div>
      <button type="submit" disabled={submitting} className="btn btn-primary mt-6 w-full">{submitting ? "Đang gửi yêu cầu…" : "Đăng ký tư vấn"}</button>
      <div role="status" aria-live="polite" className="mt-3 text-sm leading-relaxed text-tcn-green-dark">{status}</div>
    </form>
  );
}
