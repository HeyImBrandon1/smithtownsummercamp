/**
 * Append a contact form submission to the "Contact" tab in Google Sheets
 * FIRE-AND-FORGET: Never throws, handles all errors internally
 */

import { appendToSheet } from "./client";
import { formatSheetDate } from "@/lib/utils/format";

export type ContactRow = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * Columns: Date, First Name, Last Name, Email, Phone, Message
 */
export async function appendContact(data: ContactRow): Promise<void> {
  try {
    await appendToSheet("Contact", [
      formatSheetDate(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.message,
    ]);
  } catch (error) {
    console.error("Failed to append contact to Google Sheets:", error);
  }
}
