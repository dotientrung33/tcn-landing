"use client";

import { useState, type FormEvent } from "react";

export type ConsultationRequest = {
  name: string;
  phone: string;
  interest: "" | "unsure" | "coaching" | "training" | "transformation";
  concern: string;
};

export default function ConsultationForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    "mt-2 block w-full rounded-control border border-tcn-green-dark/20 bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tcn-brown";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;

    for (const key of ["name", "phone", "concern"]) {
      const field = form.elements.namedItem(key) as
        | HTMLInputElement
        | HTMLTextAreaElement;

      field.setCustomValidity(
        field.value.trim() ? "" : "Vui lòng điền thông tin này."
      );
    }

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const request: ConsultationRequest = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      interest: String(
        data.get("interest") ?? ""
      ) as ConsultationRequest["interest"],
      concern: String(data.get("concern") ?? "").trim(),
    };

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể gửi yêu cầu.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Consultation form error:", error);

      setStatus(
        "Chưa thể gửi yêu cầu. Thông tin của bạn vẫn được giữ trong form để bạn thử lại."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[520px] min-w-0 flex-col items-center justify-center rounded-panel bg-tcn-ivory p-6 text-center text-text-primary sm:p-9"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tcn-green-dark text-3xl text-white">
          ✓
        </div>

        <p className="mt-6 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
          TCN ĐÃ TIẾP NHẬN THÔNG TIN
        </p>

        <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug text-tcn-green-dark sm:text-3xl">
          Đăng ký tư vấn thành công!
        </h3>

        <p className="mt-5 max-w-md text-base leading-[1.75] text-text-secondary">
          Cảm ơn bạn đã để lại thông tin. Đội ngũ TCN sẽ liên hệ để cùng bạn
          làm rõ nhu cầu và gợi ý hướng đồng hành phù hợp.
        </p>

        <p className="mt-5 font-heading text-lg font-semibold text-tcn-green-dark">
          Hẹn gặp bạn trong hành trình sắp tới!
        </p>

        <div className="mt-7 h-px w-16 bg-tcn-brown/40" />

        <p className="mt-6 text-sm font-medium leading-relaxed text-tcn-brown">
          Thấu hiểu đúng · Đồng hành phù hợp · Phát triển bền vững.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStatus("");
          }}
          className="btn btn-primary mt-8"
        >
          Gửi một yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Đăng ký tư vấn cùng TCN"
      aria-busy={submitting}
      className="min-w-0 rounded-panel bg-tcn-ivory p-5 text-text-primary sm:p-7"
      onInput={(event) => {
        const field = event.target;

        if (
          field instanceof HTMLInputElement ||
          field instanceof HTMLTextAreaElement
        ) {
          field.setCustomValidity("");
        }

        setStatus("");
      }}
    >
      <div className="mb-6">
        <div className="mb-2 text-xs font-semibold tracking-[0.1em] text-tcn-brown">
          ĐĂNG KÝ TƯ VẤN
        </div>

        <h3 className="font-heading text-xl font-semibold leading-snug text-tcn-green-dark sm:text-2xl">
          Thông tin đăng ký tư vấn
        </h3>

        <div className="mt-3 text-sm leading-relaxed text-text-secondary">
          Để lại thông tin và chia sẻ điều bạn đang quan tâm. TCN sẽ liên hệ để
          cùng bạn làm rõ nhu cầu và gợi ý hướng đồng hành phù hợp.
        </div>
      </div>

      <div className="space-y-5">
        <label
          className="block text-sm font-semibold"
          htmlFor="consultation-name"
        >
          Họ và tên
          <input
            id="consultation-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Nhập họ và tên của bạn"
            className={fieldClass}
          />
        </label>

        <label
          className="block text-sm font-semibold"
          htmlFor="consultation-phone"
        >
          Số điện thoại
          <input
            id="consultation-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Nhập số điện thoại"
            className={fieldClass}
          />
        </label>

        <label
          className="block text-sm font-semibold"
          htmlFor="consultation-interest"
        >
          Bạn đang quan tâm đến{" "}
          <span className="font-normal text-text-secondary">
            (Không bắt buộc)
          </span>

          <select
            id="consultation-interest"
            name="interest"
            defaultValue=""
            className={fieldClass}
          >
            <option value="">Chọn nếu bạn đã có định hướng</option>
            <option value="unsure">Tôi chưa biết mình cần gì</option>
            <option value="coaching">Coaching</option>
            <option value="training">Đào tạo</option>
            <option value="transformation">Đồng hành chuyển hóa</option>
          </select>
        </label>

        <label
          className="block text-sm font-semibold"
          htmlFor="consultation-concern"
        >
          Điều bạn đang muốn được hỗ trợ
          <textarea
            id="consultation-concern"
            name="concern"
            required
            rows={4}
            aria-describedby="consultation-help"
            placeholder="Chia sẻ điều bạn đang băn khoăn hoặc mong muốn thay đổi."
            className={`${fieldClass} resize-y font-normal`}
          />
        </label>
      </div>

      <div
        id="consultation-help"
        className="mt-4 text-sm leading-relaxed text-text-secondary"
      >
        Bạn không cần xác định trước mình phù hợp với Coaching, đào tạo hay một
        hành trình dài hạn. TCN sẽ cùng bạn làm rõ nhu cầu và gợi ý hình thức
        đồng hành phù hợp.
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary mt-6 w-full"
      >
        {submitting ? "Đang gửi yêu cầu…" : "Đăng ký tư vấn"}
      </button>

      {status && (
        <div
          role="alert"
          aria-live="polite"
          className="mt-4 rounded-control border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700"
        >
          {status}
        </div>
      )}
    </form>
  );
}
