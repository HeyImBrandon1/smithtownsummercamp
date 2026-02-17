import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { appendContact } from "@/lib/sheets/append-contact";
import { getResend, FROM_EMAIL } from "@/lib/email/client";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Append to Google Sheets
    await appendContact(data);

    // Send email notification to camp directors
    try {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: siteConfig.contact.email,
        replyTo: data.email,
        subject: `New Contact Form: ${data.firstName} ${data.lastName}`,
        text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`,
      });
    } catch (error) {
      console.error("Failed to send email notification:", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
  }
}
