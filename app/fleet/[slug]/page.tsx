import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import { FLEET_DATA } from "@/data/fleet";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";
import {
  createSeoTitle,
  DEFAULT_OG_IMAGE,
  getOpenGraphImage,
  limitMetaDescription,
} from "@/lib/seo";

interface FleetPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return FLEET_DATA.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export function generateMetadata({ params }: FleetPageProps): Metadata {
  const vehicle = FLEET_DATA.find((v) => v.slug === params.slug);
  if (!vehicle) return { title: "Vehicle Not Found" };
  const title = createSeoTitle(`${vehicle.name} Rental Bangalore`);
  const description = limitMetaDescription(vehicle.description);

  return {
    title,
    description,
    alternates: {
      canonical: `https://khushitravel.in/fleet/${vehicle.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://khushitravel.in/fleet/${vehicle.slug}/`,
      images: [getOpenGraphImage(`${vehicle.name} rental in Bangalore`)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function VehicleDetailPage({ params }: FleetPageProps) {
  const vehicle = FLEET_DATA.find((v) => v.slug === params.slug);
  if (!vehicle) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Fleet", href: "/best-tempo-traveller-fleet-bangalore/" },
    { label: vehicle.name, href: `/fleet/${vehicle.slug}/` },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.description,
    image: `https://khushitravel.in${vehicle.image}`,
    brand: {
      "@type": "Brand",
      name: "Khushi Tours And Travels",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: vehicle.ratePerKm,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: vehicle.ratePerKm,
        priceCurrency: "INR",
        unitCode: "KMT",
        unitText: "per kilometer",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Header */}
      <section
        className="relative flex min-h-screen min-h-[100svh] items-center pt-24 pb-12 sm:pt-28 sm:pb-14 overflow-hidden text-center"
        style={{
          background:
            `linear-gradient(to bottom, rgba(26,54,93,0.92), rgba(26,54,93,0.85), rgba(26,54,93,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            {vehicle.subtitle}
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-4 text-balance">
            {vehicle.name}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {vehicle.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(
                vehicle.name
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919901333113"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-heading font-bold text-sm transition-all"
            >
              Call +91 99013 33113
            </a>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(vehicle.image)}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={500}
                />
              </div>

              {vehicle.gallery.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow border border-gray-100 aspect-[16/10]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(img)}
                        alt={`${vehicle.name} interior / exterior ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={400}
                        height={250}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications & Rate Breakdown */}
            <div className="space-y-8 text-left">
              <div>
                <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-1">
                  Pricing &amp; Rates
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-heading font-bold text-brand-navy">
                    ₹{vehicle.ratePerKm}
                  </span>
                  <span className="text-gray-500 font-semibold text-lg">
                    / km
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Driver Allowance: ₹{vehicle.driverAllowance} / day &bull; Minimum
                  300 km/day for outstation
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-4">
                  Key Amenities &amp; Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {vehicle.features.map((feat) => (
                    <li key={feat} className="flex items-start">
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                  Recommended For
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {vehicle.idealFor}
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
                <h4 className="font-heading font-bold text-brand-navy text-base">
                  Transparent Fare Assurance
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No hidden platform charges or surge multipliers. All trips include
                  verified chauffeur, sanitised interiors, passenger luggage
                  assistance, and GPS speed tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS_DATA} />

      <ServiceCoverage />
    </>
  );
}
