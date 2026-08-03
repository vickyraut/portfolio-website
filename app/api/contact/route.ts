import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Server-side Zod validation
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form input. Please check the fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = result.data;

    // Honeypot spam check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "contact@vickyraut.com";

    // Demo Mode fallback if RESEND_API_KEY is not configured
    if (!apiKey || apiKey === "re_123456789_placeholder") {
      console.log("[API /api/contact - Demo Mode]", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message:
          "Thank you! Your message has been received (Demo mode — configure RESEND_API_KEY to send real emails).",
      });
    }

    // Initialize Resend Client
    const resend = new Resend(apiKey);

    // Send Email via Resend API
    const data = await resend.emails.send({
      from: "Vicky Raut Portfolio <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="border-b: 2px solid #111; padding-bottom: 8px;">New Contact Submission</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
          <h3 style="font-size: 14px; text-transform: uppercase; color: #666;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json(
        { success: false, error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("[API /api/contact Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
