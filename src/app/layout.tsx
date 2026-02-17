import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smithtownsummercamp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smithtown Summer Camp | Summer Camp at Knox School in St. James, NY",
    template: "%s | Smithtown Summer Camp",
  },
  description:
    "Experience the ultimate summer at Smithtown Summer Camp at Knox School. 40 acres of activities, swimming, STEM, arts, athletics and more for ages 5-16 in St. James, Long Island.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Smithtown Summer Camp",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 506,
        alt: "Smithtown Summer Camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
