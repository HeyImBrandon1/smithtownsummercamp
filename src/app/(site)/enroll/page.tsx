import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { LeadCaptureForm } from "@/components/forms/lead-capture-form";
import { campConfig } from "@/config/camp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: `Register for Smithtown Summer Camp ${campConfig.season}. Quick and easy online enrollment.`,
};

export default function EnrollPage() {
  return (
    <>
      <PageHeader title={`${campConfig.season} Summer Camp Registration`} />

      {/* External enrollment link */}
      <Section className="bg-accent">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-accent-foreground">
            Click Below For Our Registration Software
          </h2>
          <div className="mt-4">
            <a
              href={siteConfig.enrollment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              Enroll Now <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Section>

      {/* Lead capture form */}
      <Section title="Tell Us About Yourself" className="bg-white">
        <div className="mx-auto max-w-lg">
          <LeadCaptureForm />
        </div>
      </Section>
    </>
  );
}
