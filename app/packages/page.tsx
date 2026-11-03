import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  NORMAL_PACKAGES,
  SPECIAL_PACKAGES,
  WEEKEND_PACKAGES,
} from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageCard from "@/components/packages/PackageCard";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import WeekendDestinationCarousel from "@/components/WeekendDestinationCarousel";
import { getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tour Packages from Bangalore | Khushi Travels",
  description:
    "Browse holiday, pilgrimage, and weekend packages from Bangalore. Compare family holidays, temple journeys, and short getaways with Khushi Travels.",
  alternates: {
    canonical: "https://khushitravel.in/packages/",
  },
  openGraph: {
    title: "Tour Packages from Bangalore | Khushi Travels",
    description:
      "Browse holiday, pilgrimage and weekend trips from Bangalore with group transport and planned itineraries.",
    url: "https://khushitravel.in/packages/",
    siteName: "Khushi Travels",
    type: "website",
    images: [
      getOpenGraphImage(
        "Holiday, pilgrimage and weekend packages from Bangalore",
        "https://khushitravel.in/images/optimized/og/mysore.webp"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Packages from Bangalore | Khushi Travels",
    description:
      "Browse holiday, pilgrimage and weekend trips from Bangalore with group transport and planned itineraries.",
    images: ["https://khushitravel.in/images/optimized/og/mysore.webp"],
  },
};

export default function PackagesHubPage() {
  const allCount =
    NORMAL_PACKAGES.length + SPECIAL_PACKAGES.length + WEEKEND_PACKAGES.length;
  const featuredJyotirlinga = SPECIAL_PACKAGES.find(
    (pkg) => pkg.slug === "12-jyotirlinga-yatra"
  );


  return (
    <>
      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Complete Tour Directory"
          title="Tour Packages"
          description="Choose from three clear collections: family holidays, sacred pilgrimage journeys, and weekend getaways from Bangalore."
          activeCategory="all"
          count={allCount}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "/packages/" },
            ]}
          />

          {/* Category Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {/* Holiday Packages */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h2 className="font-heading font-bold text-xl text-[#1a365d] mt-3 mb-2">
                  Holiday Packages
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Classic family holidays, temple visits, and scenic escapes to Tirupati, Coorg, Ooty, Mysore, Goa, and Pondicherry.
                </p>
              </div>
              <Link
                href="/packages/holiday/"
                className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#1a365d] hover:text-amber-600 border-t border-gray-100 pt-3"
              >
                Browse Holiday Packages →
              </Link>
            </div>

            {/* Pilgrimage Packages */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#1a365d] rounded-2xl p-6 shadow-md text-white flex flex-col justify-between border border-amber-500/30">
              <div>
                <h2 className="font-heading font-bold text-xl text-white mt-3 mb-2">
                  Pilgrimage Packages
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  Flagship 25 Day 12 Jyotirlinga pilgrimage across India, South India temple circuits, and Karnataka shrines.
                </p>
              </div>
              <Link
                href="/packages/pilgrimage/"
                className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-amber-400 hover:text-amber-300 border-t border-white/10 pt-3"
              >
                View Special Yatras →
              </Link>
            </div>

            {/* Weekend Packages */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h2 className="font-heading font-bold text-xl text-[#1a365d] mt-3 mb-2">
                  Weekend Packages
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Friday-night departures with overnight travel to Gokarna, Dandeli rafting, Hampi ruins, Munnar tea hills, and Gandikota canyon.
                </p>
              </div>
              <Link
                href="/packages/weekend/"
                className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#1a365d] hover:text-amber-600 border-t border-gray-100 pt-3"
              >
                Explore 18 Weekend Trips →
              </Link>
            </div>
          </div>

          {/* Weekend Highlights Preview: Airbnb-style Horizontal Destination Carousel */}
          <div className="my-12">
            <WeekendDestinationCarousel
              withinContainer={true}
              eyebrow=""
              title="Trending Weekend Getaways"
              subtitle="Friday night departures with homestays, breakfast & sightseeing."
              viewAllText="View all 18 →"
              viewAllHref="/packages/weekend/"
            />
          </div>

          {/* Holiday Packages Preview */}
          <div className="my-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                  Popular Holiday Packages
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Customizable private family and group tours with doorstep Bangalore pickup
                </p>
              </div>
              <Link
                href="/packages/holiday/"
                className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
              >
                View all {NORMAL_PACKAGES.length} →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NORMAL_PACKAGES.slice(0, 3).map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </div>

          {featuredJyotirlinga && (
            <section className="my-12" aria-labelledby="featured-pilgrimage-title">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Featured Pilgrimage</p>
                  <h2 id="featured-pilgrimage-title" className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                    12 Jyotirlinga Spiritual Yatra
                  </h2>
                </div>
                <Link href="/packages/pilgrimage/" className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700">
                  View pilgrimage packages
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PackageCard
                  pkg={featuredJyotirlinga}
                  showSpecialOfferBadge
                />
              </div>
            </section>
          )}

          <div className="my-16">
            <PackageEnquiryCTA
              packageTitle="Group Travel Package"
              duration="Custom Duration"
            />
          </div>
        </div>
      </main>
    </>
  );
}
