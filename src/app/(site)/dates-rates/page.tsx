import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { PricingTable } from "@/components/marketing/pricing-table";
import { campConfig } from "@/config/camp";

export const metadata: Metadata = {
  title: "Dates & Rates",
  description: `Smithtown Summer Camp ${campConfig.season} dates, pricing, and weekly schedule. Camp runs ${campConfig.weeks.length} weeks.`,
};

export default function DatesRatesPage() {
  return (
    <>
      <PageHeader title="Dates & Rates" />

      {/* Enroll Online CTA */}
      <Section className="bg-accent">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-accent-foreground">ENROLL ONLINE</h2>
          <p className="mt-2 text-accent-foreground/80">
            Enrolling in camp is quick and easy.
          </p>
          <div className="mt-4">
            <CtaButton variant="primary" />
          </div>
        </div>
      </Section>

      {/* Dates */}
      <Section title="Dates" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Camp runs for {campConfig.weeks.length} consecutive weeks beginning June 28th
            through August 21st. We know that plans can change, that&apos;s why we offer
            the added convenience of being able to rearrange your weeks later on, giving
            you the ultimate flexibility to make your summer plans perfect.
          </p>
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Rates" className="bg-muted">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <PricingTable
            title="Camp Rates"
            subtitle="Early Bird Discount Pricing"
            tiers={campConfig.pricing.regular}
          />
          <PricingTable
            title="CIT Rates"
            subtitle="Ages 14–18"
            tiers={campConfig.pricing.cit}
          />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          All payment plans must be paid in full by {campConfig.pricing.paymentDeadline}. All
          payments are non-refundable.
        </p>
      </Section>

      {/* Sibling Discount */}
      <Section className="bg-camp-green text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Sibling Discount</h2>
          <p className="mt-2 text-lg">
            Each sibling will receive an automatic {campConfig.pricing.siblingDiscount}%
            discount on the registration form.
          </p>
        </div>
      </Section>

      {/* Schedule */}
      <Section title="Schedule" className="bg-white">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-3 text-left font-medium">Week</th>
                <th className="px-6 py-3 text-left font-medium">Dates</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {campConfig.weeks.map((week) => (
                <tr key={week.number} className="hover:bg-muted/50">
                  <td className="px-6 py-3 font-medium">Week {week.number}</td>
                  <td className="px-6 py-3 text-muted-foreground">
                    {week.start} – {week.end}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
