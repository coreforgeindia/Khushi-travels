import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SPECIAL_DEPARTURE_PACKAGES } from "@/data/packages";
import { GOA_SPECIAL_PACKAGE } from "@/data/goa-special-package";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import { getAssetPath } from "@/lib/assets";
import { getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Special Packages from Bangalore | Khushi Travels",
  description:
    "Explore Special fixed-departure packages from Khushi Travels, featuring our 25 Dec 2026 Goa Holiday Package (2 Nights / 3 Days) with stay, meals, water sports, cruise dinner, and sightseeing.",
  alternates: {
    canonical: "https://khushitravel.in/packages/special/",
  },
  openGraph: {
    title: "Special Packages from Bangalore | Khushi Travels",
    description:
      "Explore Special fixed-departure packages from Khushi Travels, including the 25 Dec 2026 Goa Holiday Package at ₹13,999/- per person.",
    url: "https://khushitravel.in/packages/special/",
    siteName: "Khushi Travels",
    type: "website",
    images: [
      getOpenGraphImage(
        "Special group tour packages from Khushi Travels",
        "https://khushitravel.in/images/packages/goa/goa-holiday-package.webp"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Packages from Bangalore | Khushi Travels",
    description:
      "Explore Special fixed-departure group packages including the 25 Dec 2026 Goa Holiday Package.",
    images: ["https://khushitravel.in/images/packages/goa/goa-holiday-package.webp"],
  },
};

export default function SpecialOffersPackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Special Tour Packages from Khushi Travels",
    description:
      "Special fixed-departure and seasonal holiday packages offered by Khushi Travels.",
    itemListElement: SPECIAL_DEPARTURE_PACKAGES.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `https://khushitravel.in/packages/special/${pkg.slug}/`,
      description: pkg.description,
    })),
  };

  const whatsappGoaUrl =
    "https://wa.me/919901333113?text=Hello%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%20Special%20Goa%20Holiday%20Package%20(25%20Dec%202026%2C%202N%2F3D%2C%20%E2%82%B913%2C999%2F-%20per%20person).";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Seasonal & Fixed Departures"
          title="Special Packages"
          description="Curated special fixed-departure group holidays with hotel stays, meals, activities, and sightseeing bundled into transparent per-person pricing."
          activeCategory="exclusive"
          count={SPECIAL_DEPARTURE_PACKAGES.length}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "/packages/" },
              { label: "Special Packages", href: "/packages/special/" },
            ]}
          />

          {/* Featured Special Package: Goa Holiday Package */}
          <div className="relative mt-6 mb-12 bg-gradient-to-br from-[#1a365d] via-[#1a365d] to-[#0b1626] rounded-3xl overflow-hidden shadow-xl border border-amber-500/30 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                    {GOA_SPECIAL_PACKAGE.badge}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-300 border border-white/15">
                    Departure: {GOA_SPECIAL_PACKAGE.departureDate}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {GOA_SPECIAL_PACKAGE.title} &mdash;{" "}
                  <span className="text-amber-400">
                    {GOA_SPECIAL_PACKAGE.duration}
                  </span>
                </h2>

                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  Sun. Sand. Sea. Unforgettable Memories. Enjoy an A/C 3-Star hotel stay (3 sharing),
                  2 breakfasts, 2 lunches, and 2 dinners, 5 exciting water sports activities, a DJ &amp; disco
                  cruise dinner, and guided Goa sightseeing at{" "}
                  <strong className="text-amber-300">
                    {GOA_SPECIAL_PACKAGE.price} {GOA_SPECIAL_PACKAGE.priceUnit}
                  </strong>
                  .
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-center">
                    <div className="text-amber-400 font-semibold text-base sm:text-lg">
                      {GOA_SPECIAL_PACKAGE.price}
                    </div>
                    <div className="text-[11px] text-gray-300">Per Person</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-center">
                    <div className="text-amber-400 font-semibold text-base sm:text-lg">
                      {GOA_SPECIAL_PACKAGE.duration}
                    </div>
                    <div className="text-[11px] text-gray-300">25 Dec 2026</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-center col-span-2 sm:col-span-1">
                    <div className="text-amber-400 font-semibold text-base sm:text-lg">
                      5 Sports + Cruise
                    </div>
                    <div className="text-[11px] text-gray-300">All Meals Included</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={GOA_SPECIAL_PACKAGE.href}
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <span>Explore Full Goa Package Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href={whatsappGoaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-md"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Link
                  href={GOA_SPECIAL_PACKAGE.href}
                  className="block relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#071f3b]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(GOA_SPECIAL_PACKAGE.heroImage)}
                    alt={GOA_SPECIAL_PACKAGE.heroImageAlt}
                    className="w-full h-full object-contain"
                    loading="eager"
                    width={1024}
                    height={1024}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Special Packages */}
          <div className="mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d] mb-6">
              All Special Packages
            </h3>
            <PackageGrid packages={SPECIAL_DEPARTURE_PACKAGES} />
          </div>

          <div className="mb-16">
            <PackageEnquiryCTA
              packageTitle="Special Group Holiday Package"
              duration="2 Nights / 3 Days or Custom"
            />
          </div>
        </div>
      </main>
    </>
  );
}

