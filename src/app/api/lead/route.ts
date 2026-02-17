import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";
import { appendLead } from "@/lib/sheets/append-lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    // Append to Google Sheets
    await appendLead(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
  }
}
