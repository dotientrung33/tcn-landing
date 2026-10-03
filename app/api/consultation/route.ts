import { NextResponse } from "next/server";

type ConsultationRequest = {
  name?: string;
  phone?: string;
  interest?: string;
  concern?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationRequest;

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const concern = String(body.concern ?? "").trim();

    if (!name || !phone || !concern) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng điền đầy đủ thông tin bắt buộc.",
        },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Missing GOOGLE_SHEETS_WEBHOOK_URL");

      return NextResponse.json(
        {
          success: false,
          message: "Hệ thống tiếp nhận chưa được cấu hình.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        phone,
        interest,
        concern,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message || "Google Apps Script rejected request"
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Consultation submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể gửi yêu cầu tư vấn.",
      },
      { status: 500 }
    );
  }
}
