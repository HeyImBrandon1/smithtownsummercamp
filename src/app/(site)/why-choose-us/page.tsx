import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why choose Smithtown Summer Camp? Family atmosphere, exceptional partnerships, affordable pricing, professional food service, and 40-acre state-of-the-art facility.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader title="Why Choose Us" />

      {/* Camp Family */}
      <Section className="bg-white">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Camp Family</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Here at Smithtown Summer Camp, we&apos;re more than just a camp; we&apos;re a
              family. Our goal here at our summer camp is to create a safe and reliable
              atmosphere that allows your children to learn and experience countless amounts
              of activities and athletics.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              As soon as campers become a part of our vibrant community, they seamlessly
              integrate into our extended family, forging a reciprocal connection. Our
              commitment is to understand and support each camper individually, providing
              them with enriching, thoughtfully curated activities and unique daily
              experiences. This creates a welcoming atmosphere that promotes personal
              development, enjoyment, and a love for learning.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
            <Image
              src="/images/camp-family.jpg"
              alt="Camp family"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Exceptional Partnerships */}
      <Section title="Exceptional Partnerships" className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our collaboration with the prestigious Knox School, the Town of Smithtown, and
            Smithtown Summer Camp enables us to offer your children an unparalleled camp
            experience. These partnerships allow us to maintain affordable pricing while
            providing top-notch facilities and a diverse range of activities.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/camp-logos.png"
            alt="Partner logos"
            width={400}
            height={576}
            className="h-auto w-80"
          />
        </div>
      </Section>

      {/* Lower Prices */}
      <Section title="Lower Prices, Superior Quality" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Smithtown Summer Camp, we believe that every child should have access to an
            exceptional summer experience. Our commitment to affordability doesn&apos;t mean
            compromising on quality. With cutting-edge facilities and engaging programs, we
            ensure that your child enjoys the best camp on Long Island without breaking the
            bank.
          </p>
        </div>
      </Section>

      {/* Food */}
      <Section title="Food & Nutrition" className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            All meals are prepared on site by Culinart, a professional food service
            organization who provides food service to all of Knox School year round. The
            meals are carefully selected and prepared to be nutritious and delicious. Our
            camp staff takes nut allergies seriously and we work with families to accommodate
            special diets. We also make sure that any special food needs are carefully
            monitored and delivered. Campers also enjoy a wide assortment of snacks and ices
            between activities.
          </p>
        </div>
      </Section>

      {/* Campground */}
      <Section
        title="State Of The Art Campground At Knox School"
        className="bg-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Discover a summer paradise for kids at our extraordinary camp facility,
            sprawling across 40 acres of serene waterfront property at Knox School in St.
            James, on the North Shore of Long Island. From captivating outdoor spaces to
            versatile indoor facilities, every moment is a playground of laughter, learning,
            and adventure!
          </p>
        </div>
      </Section>
    </>
  );
}
