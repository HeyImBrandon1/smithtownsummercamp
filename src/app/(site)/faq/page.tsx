import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { campConfig } from "@/config/camp";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Smithtown Summer Camp — hours, lunch, discounts, payment plans, what to pack, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={campConfig.faq} />

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground">Join The Fun!</h2>
            <p className="mt-2 text-muted-foreground">
              Ready to give your child the best summer ever?
            </p>
            <div className="mt-4">
              <CtaButton size="lg" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
