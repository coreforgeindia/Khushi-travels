import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  NORMAL_PACKAGES,
  SPECIAL_PACKAGES,
  WEEKEND_PACKAGES,
  SPECIAL_DEPARTURE_PACKAGES,
} from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageCard from "@/components/packages/PackageCard";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import FeaturedPackageCarousel, {
  type FeaturedPackage,
} from "@/components/packages/FeaturedPackageCarousel";
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

const FEATURED_PACKAGES: FeaturedPackage[] = [
  {
    title: "12 Jyotirlinga Tour Package from Bangalore",
    destination: "Pan-India pilgrimage",
    duration: "Proposed 25 Days / 24 Nights",
    description:
      "Review the proposed all-India yatra covering the twelve Jyotirlinga shrines. Ask Khushi Travels to confirm the itinerary, dates, transport and current package price.",
    image: "/images/destinations/jyotirlingas/somnath.webp",
    imageAlt: "Somnath temple on the Gujarat coast, part of the 12 Jyotirlinga yatra",
    href: "/packages/pilgrimage/12-jyotirlinga-yatra/",
    actionLabel: "View 12 Jyotirlinga yatra",
  },
  {
    title: "Goa Special Holiday Package (25 Dec 2026)",
    destination: "Goa • 25 Dec 2026 Departure",
    duration: "2 Nights / 3 Days • ₹13,999/- Per Person",
    description:
      "A/C 3-Star hotel stay (3 sharing), 2 breakfasts, 2 lunches & 2 dinners, 5 water sports, DJ & disco cruise dinner, and Goa sightseeing.",
    image: "/images/packages/goa/goa-holiday-package.webp",
    imageAlt: "Goa Special Holiday Package departing 25 Dec 2026 at ₹13,999 per person",
    href: "/packages/special/goa-holiday-package/",
    actionLabel: "View Goa Special Package",
  },
  {
    title: "Goa Coastal Road Trip Package",
    destination: "North and South Goa",
    duration: "4 Days / 3 Nights",
    description:
      "Explore the customizable Goa road-trip package for coastal sightseeing and private Tempo Traveller group travel.",
    image: "/images/destinations/goa.webp",
    imageAlt: "Coastal Goa holiday package from Bangalore",
    href: "/packages/holiday/goa/",
    actionLabel: "Explore Goa road trip",
  },
  {
    title: "Nava Tirupati Temple Tour Package",
    destination: "Nava Tirupati and South India temples",
    duration: "7 Days / 6 Nights",
    description:
      "See the South India temple circuit itinerary featuring Nava Tirupati, Navagraha and Pancha Bhoota temples, along with other listed pilgrimage stops.",
    image: "/images/destinations/Rameswaram.webp",
    imageAlt: "Rameswaram temple destination in the South India pilgrimage circuit",
    href: "/packages/pilgrimage/south-india-temple-circuit/",
    actionLabel: "View Nava Tirupati circuit",
  },
  {
    title: "Kashi, Triveni and Ayodhya Yatra",
    destination: "Varanasi, Prayagraj and Ayodhya",
    duration: "4 Days / 3 Nights",
    description:
      "Review the listed pilgrimage plan for Kashi Vishwanath, Triveni Sangam and Ayodhya, then contact the team to confirm inclusions and current pricing.",
    image: "/images/destinations/ayodhya.webp",
    imageAlt: "Ayodhya Ram Mandir, a stop on the Kashi Triveni Ayodhya yatra",
    href: "/packages/pilgrimage/kashi-triveni-ayodhya/",
    actionLabel: "View Ayodhya yatra",
  },
  {
    title: "Mahakaleshwar Jyotirlinga, Ujjain",
    destination: "Ujjain, Madhya Pradesh",
    duration: "Featured in the proposed 12 Jyotirlinga yatra",
    description:
      "Ujjain's Mahakaleshwar shrine is featured in the proposed 12 Jyotirlinga itinerary. It is not presented here as a separate confirmed package.",
    image: "/images/destinations/jyotirlingas/mahakaleshwar.webp",
    imageAlt: "Mahakaleshwar Jyotirlinga temple in Ujjain",
    href: "/packages/pilgrimage/12-jyotirlinga-yatra/#mahakaleshwar-jyotirlinga",
    actionLabel: "See Ujjain in the yatra",
  },
];

export default function PackagesHubPage() {
  const allCount =
    NORMAL_PACKAGES.length +
    SPECIAL_PACKAGES.length +
    WEEKEND_PACKAGES.length +
    SPECIAL_DEPARTURE_PACKAGES.length;

  return (
    <>
      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Complete Tour Directory"
          title="Tour Packages"
          description="Choose from four curated collections: family holidays, sacred pilgrimage journeys, weekend getaways, and special fixed-departure packages from Bangalore."
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

          {/* Category Cards Overview (4 Categories) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
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
                View Pilgrimage Yatras →
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

            {/* Special Packages */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500 text-[#111]">
                  Fixed Departure
                </span>
                <h2 className="font-heading font-bold text-xl text-[#1a365d] mt-2 mb-2">
                  Special Packages
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  All-inclusive fixed departures like the 25 Dec 2026 Goa Holiday Package (2N/3D, ₹13,999/- per person) with stay, meals, water sports &amp; cruise.
                </p>
              </div>
              <Link
                href="/packages/special/"
                className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#1a365d] hover:text-amber-700 border-t border-amber-200/70 pt-3"
              >
                Explore Special Packages →
              </Link>
            </div>
          </div>

          <section className="my-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  For teams and company groups
                </p>
                <h2 className="mt-1 font-heading text-xl font-bold text-[#1a365d] sm:text-2xl">
                  Corporate Weekend Packages from Bangalore
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                  Plan a weekend outing or group getaway for your team with
                  chauffeur-driven group transport. Choose from the listed
                  weekend destinations, then enquire to discuss dates, group
                  size, pickup points and a suitable itinerary.
                </p>
              </div>
              <a
                href="https://wa.me/919901333113?text=Hello%20Khushi%20Travels%2C%20we%20are%20planning%20a%20corporate%20weekend%20group%20trip%20from%20Bangalore.%20Please%20share%20available%20destinations%20and%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1a365d] px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-500 hover:text-[#111]"
              >
                Enquire about a corporate trip
              </a>
            </div>
            <WeekendDestinationCarousel
              withinContainer={true}
              eyebrow="Weekend group travel"
              title="Browse All 18 Weekend Getaways"
              subtitle="Explore the destination itineraries, then confirm trip details, availability and inclusions with Khushi Travels."
              viewAllText="View all weekend packages →"
              viewAllHref="/packages/weekend/"
            />
          </section>

          {/* Special Packages Preview */}
          <div className="my-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                  Special Packages
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Fixed-departure special packages with stay, meals, activities, and sightseeing
                </p>
              </div>
              <Link
                href="/packages/special/"
                className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
              >
                View Special Packages →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SPECIAL_DEPARTURE_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
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

          <div className="my-14 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <FeaturedPackageCarousel
              packages={FEATURED_PACKAGES}
              label="Pilgrimage and group holiday highlights"
              title="Explore Featured Tour Packages"
              description="Browse the 12 Jyotirlinga yatra, Goa, Nava Tirupati, Ayodhya and Ujjain highlights. Package dates, inclusions and prices should be confirmed with our team."
            />
            <div className="mt-4 text-right">
              <Link
                href="/packages/pilgrimage/"
                className="text-sm font-bold text-amber-700 hover:text-amber-800"
              >
                Browse all pilgrimage packages →
              </Link>
            </div>
          </div>

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
