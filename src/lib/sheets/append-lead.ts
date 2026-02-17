/**
 * Append a lead to the "Leads" tab in Google Sheets
 * FIRE-AND-FORGET: Never throws, handles all errors internally
 */

import { appendToSheet } from "./client";
import { formatSheetDate } from "@/lib/utils/format";

export type LeadRow = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  childrenCount: string;
};

/**
 * Columns: Date, First Name, Last Name, Email, Phone, Source, Children Count
 */
export async function appendLead(data: LeadRow): Promise<void> {
  try {
    await appendToSheet("Leads", [
      formatSheetDate(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.source,
      data.childrenCount,
    ]);
  } catch (error) {
    console.error("Failed to append lead to Google Sheets:", error);
  }
}
