import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Smithtown Summer Camp. Call 631-382-0021 or email Director@SmithtownSummerCamp.com. Located at Knox School in St. James, NY.",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Send us a Message" />

      <Section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Call our Directors at{" "}
              <a href={`tel:${contact.phone}`} className="font-bold text-primary hover:underline">
                {contact.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${contact.email}`} className="font-bold text-primary hover:underline">
                {contact.email}
              </a>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-muted-foreground hover:text-primary">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{contact.address.name}</p>
                  <p className="text-muted-foreground">
                    {contact.address.street}
                    <br />
                    {contact.address.city}, {contact.address.state} {contact.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
