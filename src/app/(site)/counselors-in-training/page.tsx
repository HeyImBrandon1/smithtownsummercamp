import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";

export const metadata: Metadata = {
  title: "Counselors in Training",
  description:
    "Join the CIT Program at Smithtown Summer Camp for ages 14-16. Leadership development, mentoring, and hands-on camp experience.",
};

export default function CITPage() {
  return (
    <>
      <PageHeader title="Counselors in Training (CIT)" />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">
            ABOUT COUNSELORS-IN-TRAINING
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Embark on an unforgettable summer adventure with the Counselor-in-Training
            (CIT) Program at Smithtown Summer Camp!
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Designed for teens ages 14 to 16, our CIT program focuses on leadership
            development, hands-on camp experience, and personal growth. CITs engage in
            diverse camp activities, mentor younger campers, and foster lasting friendships
            while building essential skills in communication, problem-solving, and teamwork.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            It&apos;s all about fun, friendship, and valuable learning experiences.
          </p>

          <div className="mt-8 rounded-xl border-2 border-accent bg-accent/10 p-6 text-center">
            <p className="text-lg font-bold text-foreground">Spaces are limited!</p>
            <p className="mt-1 text-muted-foreground">
              Secure your spot in the CIT program today.
            </p>
            <div className="mt-4">
              <CtaButton />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
