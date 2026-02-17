import type { Metadata } from "next";
import { Users, Shield, Award } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Meet Our Staff",
  description:
    "Meet the dedicated team at Smithtown Summer Camp — counselors, supervisors, and directors with decades of experience.",
};

const staffTiers = [
  {
    title: "Our Counselors",
    icon: Users,
    description:
      'Our counselors are selected for their maturity, high energy, and a genuine passion for working with children. They receive training from supervisors and youth development experts to become nurturing mentors for our campers.',
  },
  {
    title: "Head Counselors and Supervisors",
    icon: Shield,
    description:
      'Our leadership team combines a deep love for educating children with years of experience. They provide guidance and encouragement to create memorable and enriching experiences for every camper.',
  },
  {
    title: "Camp Directors and Administration",
    icon: Award,
    description:
      'Our team of professionals brings decades of combined experience in camp management, education, and athletics. Their role is ensuring a safe, healthy, and happy environment for all children.',
  },
];

export default function MeetOurStaffPage() {
  return (
    <>
      <PageHeader title="Meet Our Staff" />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl space-y-8">
          {staffTiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-xl border bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <tier.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{tier.title}</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
