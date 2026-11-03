import React from "react";
import type { Metadata } from "next";
import { WEEKEND_PACKAGES } from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import WeekendDestinationCarousel from "@/components/WeekendDestinationCarousel";
import { getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Weekend Packages from Bangalore | Khushi Travels",
  description:
    "Find weekend trips from Bangalore to Coorg, Gokarna, Hampi, Ooty and more, with private group transport and planned itineraries.",
  alternates: {
    canonical: "https://khushitravel.in/packages/weekend/",
  },
  openGraph: {
    title: "Weekend Packages from Bangalore | Khushi Travels",
    description:
      "Find weekend trips from Bangalore to Coorg, Gokarna, Hampi, Ooty and more, with private group transport and planned itineraries.",
    url: "https://khushitravel.in/packages/weekend/",
    siteName: "Khushi Travels",
    type: "website",
    images: [
      getOpenGraphImage(
        "Weekend packages from Bangalore",
        "https://khushitravel.in/images/optimized/og/mysore.webp"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekend Packages from Bangalore | Khushi Travels",
    description:
      "Find weekend trips from Bangalore to Coorg, Gokarna, Hampi, Ooty and more, with private group transport and planned itineraries.",
    images: ["https://khushitravel.in/images/optimized/og/mysore.webp"],
  },
};

export default function WeekendPackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Weekend Packages from Bangalore",
    description: "Weekend trip itineraries departing Bangalore with group transport.",
    itemListElement: WEEKEND_PACKAGES.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `https://khushitravel.in/packages/weekend/${pkg.slug}/`,
      description: pkg.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Friday-Night Getaways from Bangalore"
          title="Weekend Packages"
          description="Pack your bags for the ultimate weekend escape. Depart Bangalore on Friday evening, wake up to misty mountains or coastal breezes, and return recharged by Monday morning with complete sightseeing and transport taken care of."
          activeCategory="weekend"
          count={WEEKEND_PACKAGES.length}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "/packages/" },
              { label: "Weekend Packages", href: "/packages/weekend/" },
            ]}
          />

          {/* Quick Filter Info Note */}
          <div className="mt-4 mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-semibold flex items-center justify-center flex-shrink-0">
                18
              </span>
              <div>
                <strong>Explore Weekend Itineraries</strong>
                <p className="text-gray-600 text-xs">
                  Directly compiled from official tour schedules with Day 0 overnight departures, stay plans, and meal inclusions.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/919901333113?text=Hello%20Khushi%20Travels%2C%20I%20am%20looking%20for%20a%20weekend%20package%20from%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 flex-shrink-0"
            >
              Ask Weekend Dates
            </a>
          </div>

          {/* Airbnb-style Destination Discovery Carousel: All 18 Destinations */}
          <div className="mb-16 bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-100 shadow-sm">
            <WeekendDestinationCarousel
              withinContainer={true}
              eyebrow="18 Friday-Night Destinations"
              title="Browse All 18 Weekend Getaways"
              subtitle="Swipe or scroll through our complete collection of verified weekend road trips from Bangalore."
              viewAllHref=""
              showHeader={true}
            />
          </div>

          <div className="mb-16">
            <PackageEnquiryCTA
              packageTitle="Weekend Group Getaway"
              duration="3 Days / 2 Nights"
            />
          </div>
        </div>
      </main>
    </>
  );
}
