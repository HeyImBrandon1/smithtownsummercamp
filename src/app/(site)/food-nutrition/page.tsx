import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Food & Nutrition",
  description:
    "Smithtown Summer Camp provides nutritious meals prepared on site by Culinart. Nut-free environment with lunch included.",
};

export default function FoodNutritionPage() {
  return (
    <>
      <PageHeader title="Food & Nutrition" />

      <Section className="bg-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              All meals are prepared on site by Culinart, a professional food service
              organization who provides food service to all of Knox School year round. The
              meals are carefully selected and prepared to be nutritious and delicious. Our
              camp staff takes nut allergies seriously and we work with families to
              accommodate special diets. We also make sure that any special food needs are
              carefully monitored and delivered. Campers also enjoy a wide assortment of
              snacks and ices between activities.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/culinart-logo.png"
              alt="Culinart Food Service"
              width={300}
              height={150}
              className="h-auto w-64"
            />
          </div>
        </div>
      </Section>

      <Section title="Lunch Included" className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Boxed lunches include 1 hot item such as a hamburger, hot dog, chicken tenders,
            chicken sandwich with snack, fruit, cookie and water.
          </p>
        </div>
      </Section>
    </>
  );
}
