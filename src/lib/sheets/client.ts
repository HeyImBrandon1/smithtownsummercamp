/**
 * Google Sheets integration via Apps Script web app
 * Simple fetch-based client — no googleapis library needed
 */

export const SCRIPT_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL || "";

/**
 * Append a row to a Google Sheet tab via Apps Script
 * Uses redirect: "manual" because Apps Script returns a 302 on success,
 * and fetch auto-follow changes POST to GET (losing the body).
 */
export async function appendToSheet(tab: string, row: string[]): Promise<void> {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tab, row }),
    redirect: "manual",
  });

  // Apps Script returns 302 on success (redirect to result page)
  if (res.status === 302) {
    return;
  }

  if (!res.ok) {
    const body = await res.text();
    console.error(
      `Apps Script response: status=${res.status} url=${res.url} body=${body.slice(0, 500)}`
    );
    throw new Error(`Apps Script error: ${res.status}`);
  }
}
