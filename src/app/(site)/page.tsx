import Image from "next/image";
import { Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { CountdownTimer } from "@/components/marketing/countdown-timer";
import { ProgramCard } from "@/components/marketing/program-card";
import { campConfig } from "@/config/camp";

const programImages: Record<string, string> = {
  "early-program": "/images/programs/early-program.jpg",
  "lower-camp": "/images/programs/lower-camp.jpg",
  "middle-camp": "/images/programs/middle-camp.jpg",
  "upper-camp": "/images/programs/upper-camp.jpg",
  "cit-program": "/images/programs/cit-program.jpg",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            Open For Registration
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Experience The Ultimate Summer
          </h1>
          <div className="mt-10">
            <CountdownTimer />
          </div>
          <div className="mt-8">
            <CtaButton size="lg" />
          </div>
        </div>
      </section>

      {/* Discovery */}
      <Section
        title="DISCOVER Smithtown Summer Camp at Knox School"
        className="bg-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Smithtown Summer Camp at Knox School offers a secure and child-focused
            environment, creating a community where children of all ages discover their
            true potential while enjoying unforgettable summer experiences. The essence of
            joy serves as a driving force, motivating them to envision significant goals
            for themselves.
          </p>
          <div className="mt-6">
            <CtaButton href="/enroll" external={false} />
          </div>
        </div>
      </Section>

      {/* Facility Preview */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Discover a summer paradise for kids at our extraordinary camp facility,
            sprawling across 40 acres of serene waterfront property in St. James, on the
            North Shore of Long Island. From captivating outdoor spaces to versatile indoor
            facilities, every moment is a playground of laughter, learning, and adventure!
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
            <Image
              src="/images/facility/gymnasium.jpg"
              alt="Camp Gymnasium"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
            <Image
              src="/images/facility/stem-classroom.jpg"
              alt="STEM Classroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Program Levels */}
      <Section title="Explore Our Programs" className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {campConfig.programs.map((program) => (
            <ProgramCard
              key={program.slug}
              {...program}
              image={programImages[program.slug] || "/images/placeholder.jpg"}
            />
          ))}
        </div>
      </Section>

      {/* Pool Feature */}
      <section className="bg-primary py-12 text-center text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xl font-bold uppercase tracking-wide md:text-2xl">
            On Campus Pool With Daily Swim Instruction From Certified Teachers
          </p>
        </div>
      </section>

      {/* Staff */}
      <Section
        title="Celebrating Excellence: Meet our Dynamic and Passionate Camp Staff"
        className="bg-white"
      >
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            As soon as campers become a part of our vibrant community, they seamlessly
            integrate into our extended family, forging a reciprocal connection. Our
            commitment is to understand and support each camper individually, providing them
            with enriching, thoughtfully curated activities and unique daily experiences.
            This creates a welcoming atmosphere that promotes personal development,
            enjoyment, and a love for learning.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our exceptional team at camp is comprised of educators, sports specialists, and
            passionate individuals who not only love working with children but are also
            dedicated and live for camp. Some of them have grown up as campers themselves.
            Fueled by unwavering passion and dedication, they transform each day into a
            vibrant tapestry of memorable experiences, creating an environment where every
            camper&apos;s journey is guided by inspiration, care, and boundless enthusiasm.
          </p>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-accent py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <CountdownTimer />
          <div className="mt-8">
            <CtaButton variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
