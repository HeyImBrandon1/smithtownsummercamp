import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { ActivityCard } from "@/components/marketing/activity-card";
import { campConfig } from "@/config/camp";

export const metadata: Metadata = {
  title: "Our Activities",
  description:
    "Explore activities at Smithtown Summer Camp — aquatics, athletics, games, arts, and STEM. Something for every camper!",
};

export default function OurActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Our Activities"
        subtitle="Through our unique style of play we're able to find a common ground between campers of all abilities. All of our games and activities are fun and easy to understand. Activities will be modified for the age and ability of each group. We have an activity for everyone!"
      />

      <Section className="bg-muted">
        <div className="grid gap-8 md:grid-cols-2">
          {campConfig.activities.map((activity) => (
            <ActivityCard key={activity.name} {...activity} />
          ))}
        </div>
      </Section>
    </>
  );
}
