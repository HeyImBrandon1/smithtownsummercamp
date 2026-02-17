import { formatPrice } from "@/lib/utils/format";
import type { PricingTier } from "@/types";

type PricingTableProps = {
  title: string;
  subtitle?: string;
  tiers: readonly PricingTier[];
};

export function PricingTable({ title, subtitle, tiers }: PricingTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="bg-primary px-6 py-4 text-primary-foreground">
        <h3 className="text-xl font-bold">{title}</h3>
        {subtitle && <p className="mt-1 text-sm opacity-90">{subtitle}</p>}
      </div>
      <div className="divide-y">
        {tiers.map((tier) => (
          <div key={tier.label} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="font-medium text-foreground">{tier.label}</p>
              {tier.discount > 0 && (
                <p className="text-sm text-camp-green font-medium">
                  ${tier.discount} off each week
                </p>
              )}
            </div>
            <p className="text-2xl font-bold text-primary">{formatPrice(tier.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
