import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { campConfig } from "@/config/camp";

export function SiteFooter() {
  const { contact, footerLinks } = siteConfig;

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & address */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Smithtown Summer Camp"
              width={200}
              height={99}
              className="mb-4 h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed opacity-90">
              {contact.address.name}
              <br />
              {contact.address.street}
              <br />
              {contact.address.city}, {contact.address.state} {contact.address.zip}
            </p>
            <p className="mt-2 text-sm opacity-90">{contact.phone}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-90 transition hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Contact Us</h3>
            <p className="text-sm opacity-90">
              Phone:{" "}
              <a href={`tel:${contact.phone}`} className="hover:underline">
                {contact.phone}
              </a>
            </p>
            <p className="mt-1 text-sm opacity-90">
              Email:{" "}
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm opacity-70">
          &copy;{campConfig.season} Smithtown Summer Camp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
