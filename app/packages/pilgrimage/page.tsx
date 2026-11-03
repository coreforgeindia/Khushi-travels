import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SPECIAL_PACKAGES } from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import PilgrimagePaymentOffer from "@/components/PilgrimagePaymentOffer";
import { getAssetPath } from "@/lib/assets";
import SpecialOfferSticker from "@/components/SpecialOfferSticker";
import { getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pilgrimage Packages from Bangalore | Khushi Travels",
  description:
    "Browse pilgrimage tours from Bangalore, including the 12 Jyotirlinga Yatra, South India temple circuits and Karnataka shrine journeys with group transport.",
  alternates: {
    canonical: "https://khushitravel.in/packages/pilgrimage/",
  },
  openGraph: {
    title: "Pilgrimage Packages from Bangalore | Khushi Travels",
    description:
      "Browse pilgrimage tours from Bangalore, including the 12 Jyotirlinga Yatra, South India temple circuits and Karnataka shrine journeys with group transport.",
    url: "https://khushitravel.in/packages/pilgrimage/",
    siteName: "Khushi Travels",
    type: "website",
    images: [
      getOpenGraphImage(
        "Pilgrimage packages from Bangalore",
        "https://khushitravel.in/images/optimized/og/ayodhya.webp"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilgrimage Packages from Bangalore | Khushi Travels",
    description:
      "Browse pilgrimage tours from Bangalore, including the 12 Jyotirlinga Yatra, South India temple circuits and Karnataka shrine journeys with group transport.",
    images: ["https://khushitravel.in/images/optimized/og/ayodhya.webp"],
  },
};

export default function SpecialPackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Special & Pilgrimage Tour Packages from Bangalore",
    description: "Exclusive spiritual and long-distance pilgrimage tours from Bangalore by Khushi Travels.",
    itemListElement: SPECIAL_PACKAGES.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `https://khushitravel.in/packages/pilgrimage/${pkg.slug}/`,
      description: pkg.description,
    })),
  };

  const flagshipJyotirlinga = SPECIAL_PACKAGES.find(
    (p) => p.slug === "12-jyotirlinga-yatra"
  );
  const otherSpecialPackages = SPECIAL_PACKAGES.filter(
    (p) => p.slug !== "12-jyotirlinga-yatra"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Pilgrimage Journeys"
          title="Pilgrimage Packages"
          description="Embark on life-transforming devotional yatras and cultural expeditions across India. Featuring our flagship 25 Day 12 Jyotirlinga pan-India pilgrimage, South India heritage temples, and coastal shrines."
          activeCategory="special"
          count={SPECIAL_PACKAGES.length}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "/packages/" },
              { label: "Pilgrimage Packages", href: "/packages/pilgrimage/" },
            ]}
          />

          {/* Featured 12 Jyotirlinga Showcase Banner */}
          {flagshipJyotirlinga && (
            <div className="relative mt-6 mb-12 bg-gradient-to-br from-[#1a365d] via-[#1a365d] to-[#0b1626] rounded-3xl overflow-visible shadow-xl border border-amber-500/30 text-white">
              <SpecialOfferSticker className="badge-special-position" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 pt-24 pb-6 sm:px-8 sm:pt-24 sm:pb-8 lg:px-10 lg:pt-24 lg:pb-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {flagshipJyotirlinga.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {flagshipJyotirlinga.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center">
                      <div className="text-amber-400 font-semibold text-lg">12</div>
                      <div className="text-[11px] text-gray-300">Jyotirlingas</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center">
                      <div className="text-amber-400 font-semibold text-lg">25 Days</div>
                      <div className="text-[11px] text-gray-300">Pan-India Yatra</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 border border-white/10 text-center col-span-2 sm:col-span-1">
                      <div className="text-amber-400 font-semibold text-lg">8 States</div>
                      <div className="text-[11px] text-gray-300">Sacred Transit</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      href="/packages/pilgrimage/12-jyotirlinga-yatra/"
                      className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
                    >
                      View 25 Day Itinerary & Shrines
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href="https://wa.me/919901333113?text=Hello%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%2025 Day%2012%20Jyotirlinga%20Pilgrimage%20Tour%20from%20Bangalore."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-md"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/destinations/ayodhya.webp")}
                    alt="12 Jyotirlinga Sacred Pilgrimage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-lg text-xs text-amber-300 font-semibold border border-white/10">
                    Departs from Bangalore with Chauffeurs
                  </div>
                </div>
              </div>
            </div>
          )}

          {flagshipJyotirlinga && <PilgrimagePaymentOffer />}

          {/* Other Pilgrimage Packages */}
          <div className="mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d] mb-6">
              Curated Temple Circuits & Extended Yatras
            </h3>
            <PackageGrid packages={otherSpecialPackages} />
          </div>

          <div className="mb-16">
            <PackageEnquiryCTA
              packageTitle="Custom Pilgrimage or Group Yatra"
              duration="4 to 25 Days"
            />
          </div>
        </div>
      </main>
    </>
  );
}
