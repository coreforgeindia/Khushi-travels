import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import VehicleCard from "@/components/VehicleCard";
import ServiceCoverage from "@/components/ServiceCoverage";
import { FLEET_DATA } from "@/data/fleet";
import { getAssetPath } from "@/lib/assets";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tempo Traveller Fleet Bangalore | Khushi Travels",
  description:
    "Explore Khushi Travels' Bangalore fleet of 9 to 16 seater Maharaja tempo travellers, Force Urbania vans, executive sedans and luxury buses.",
  alternates: {
    canonical: "https://khushitravel.in/best-tempo-traveller-fleet-bangalore/",
  },
  openGraph: {
    type: "website",
    url: "https://khushitravel.in/best-tempo-traveller-fleet-bangalore/",
    siteName: "Khushi Tours and Travels",
    title: "Tempo Traveller Fleet Bangalore | Khushi Travels",
    description: "Explore Bangalore's premier luxury tempo traveller fleet. 100% owned vehicles: 9-16 seater Maharaja tempo travellers, Force Urbania, and luxury buses.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Khushi Travels Tempo Traveller Fleet Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo Traveller Fleet Bangalore | Khushi Travels",
    description: "Explore Bangalore's premier luxury tempo traveller fleet. 9-16 seater Maharaja & Force Urbania.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FleetPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Fleet", href: "/best-tempo-traveller-fleet-bangalore/" },
  ];

  
  const fleetListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Khushi Travels Fleet Catalog",
    description: "Complete list of luxury tempo travellers, Force Urbania and buses available for rent in Bangalore.",
    numberOfItems: FLEET_DATA.length,
    itemListElement: FLEET_DATA.map((v, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: v.name,
      description: v.description,
      url: `https://khushitravel.in/fleet/${v.slug}/`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetListSchema) }} />
      {/* Fleet Hero */}
      <section
        className="relative flex min-h-screen min-h-[100svh] items-center pt-24 pb-12 sm:pt-28 sm:pb-14 text-center overflow-hidden"
        style={{
          background:
            `linear-gradient(to bottom, rgba(26,54,93,0.92), rgba(26,54,93,0.85), rgba(26,54,93,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            100% Company-Owned Vehicles
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-6 text-balance">
            Bangalore&apos;s Elite{" "}
            <span className="text-brand-amber">Tempo Traveller</span> &amp; Bus Fleet
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            From 9-seater Maharaja pushback recliner tempos to 16-seater Force
            Urbanias and 50-seater luxury coaches. Every vehicle is GPS-tracked,
            regularly serviced, and sanitized before departure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-white/90">
            <span className="font-semibold">
              Pushback Recliner Seats
            </span>
            <span className="text-white/40">&bull;</span>
            <span className="font-semibold">
              Individual AC Vents
            </span>
            <span className="text-white/40">&bull;</span>
            <span className="font-semibold">
              All-India Tourist Permit
            </span>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Browse by Seating Capacity
            </span>
            <h2 className="font-heading text-h2 font-bold text-brand-navy">
              Available Fleet for Rent
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Select any vehicle for detailed specifications, gallery photos, and
              transparent distance rates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {FLEET_DATA.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Inclusions & Safety */}
      <section className="bg-white section-py border-t border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-h2 text-brand-navy font-bold">
              Why Khushi Travels Fleet Stands Out
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We never compromise on safety, comfort, or hygiene.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">
                Authentic Maharaja Seats
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enjoy 1x1 Maharaja luxury seats with zero middle passengers.
                Generous legroom, individual armrests, and deep pushback
                recliners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">
                25-Point Safety Check
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Brakes, suspension, AC filtration, and tire treads are
                comprehensively inspected before every outstation journey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">
                Verified Seasoned Drivers
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our chauffeurs possess 8+ years of commercial highway driving
                experience, with verified background checks and polite demeanor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
