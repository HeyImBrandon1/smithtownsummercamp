export const siteConfig = {
  name: "Smithtown Summer Camp",
  description:
    "Experience the ultimate summer at Smithtown Summer Camp at Knox School. 40 acres of activities, swimming, STEM, arts, athletics and more for ages 5-16.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://smithtownsummercamp.com",

  contact: {
    phone: "631-382-0021",
    phoneFormatted: "(631) 382-0021",
    email: "Director@SmithtownSummerCamp.com",
    address: {
      name: "The Knox School",
      street: "541 Long Beach Road",
      city: "St. James",
      state: "NY",
      zip: "11780",
    },
  },

  enrollment: {
    url: "https://smithtown.campmanagement.com/enroll",
    label: "Enroll Now",
  },

  nav: [
    { label: "Enroll Now", href: "/enroll" },
    { label: "Dates & Rates", href: "/dates-rates" },
    { label: "Our Facility", href: "/our-facility" },
    { label: "Our Activities", href: "/our-activities" },
    { label: "Counselors in Training", href: "/counselors-in-training" },
    { label: "Food & Nutrition", href: "/food-nutrition" },
    { label: "Meet Our Staff", href: "/meet-our-staff" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Contact Us", href: "/contact" },
  ],

  topNav: [
    { label: "Dates & Rates", href: "/dates-rates" },
    { label: "FAQ", href: "/faq" },
  ],

  footerLinks: [
    { label: "Dates & Rates", href: "/dates-rates" },
    { label: "Enroll", href: "/enroll" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;
