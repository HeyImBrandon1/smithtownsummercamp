/**
 * Format a price as USD currency
 */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents);
}

/**
 * Get the current date formatted for Google Sheets
 */
export function formatSheetDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

/**
 * Calculate days remaining until camp starts
 */
export function daysUntilCamp(startDate: string): number {
  const now = new Date();
  const camp = new Date(startDate);
  const diff = camp.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
