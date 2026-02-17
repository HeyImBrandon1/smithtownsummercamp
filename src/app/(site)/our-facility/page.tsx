import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Our Facility",
  description:
    "Explore Smithtown Summer Camp's 40-acre facility at Knox School — gymnasium, on-campus pool, STEM classrooms, and more.",
};

const facilities = [
  {
    title: "Gymnasium",
    description:
      "Embark on active adventure in our state-of-the-art indoor gymnasium at our campground this summer! Our organized and fun sports programs for kids, led by experienced instructors, promise an energetic blend of exercise and enjoyment.",
    image: "/images/facility/gymnasium.jpg",
  },
  {
    title: "On Campus Pool",
    description:
      "Dive into daily instructional swims at our on-campus pool, guided by certified instructors who ensure a safe and enjoyable aquatic learning experience. Campers will not only cool off but also refine their swimming skills, making each day a refreshing and educational adventure.",
    image: "/images/facility/pool.jpg",
  },
  {
    title: "S.T.E.M. Classrooms",
    description:
      "Step into our cutting-edge indoor STEM classroom on campus, where innovation comes to life through hands-on experiments and interactive learning. Equipped with state-of-the-art technology, this space fosters creativity and critical thinking, providing campers with a dynamic environment to explore the wonders of science, technology, engineering, and mathematics.",
    image: "/images/facility/stem-classroom.jpg",
  },
];

export default function OurFacilityPage() {
  return (
    <>
      <PageHeader
        title="Welcome to Our Campground at Knox School"
        subtitle="Discover a summer paradise for kids at our extraordinary camp facility, sprawling across 40 acres of serene waterfront property in St. James, on the North Shore of Long Island."
      />

      {/* Aerial campus image */}
      <div className="relative h-64 w-full md:h-96">
        <Image
          src="/images/facility/campus-aerial.jpg"
          alt="Knox School aerial view"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Facility sections */}
      {facilities.map((facility, index) => (
        <Section
          key={facility.title}
          className={index % 2 === 0 ? "bg-white" : "bg-muted"}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-3xl font-bold text-foreground">{facility.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {facility.description}
              </p>
            </div>
            <div className={`relative aspect-video overflow-hidden rounded-xl shadow-md ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
