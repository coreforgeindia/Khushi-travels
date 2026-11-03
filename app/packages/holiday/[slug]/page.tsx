import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  NORMAL_PACKAGES,
  getPackageBySlug,
  getPackagesByCategory,
} from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageItinerary from "@/components/packages/PackageItinerary";
import PackageInclusions from "@/components/packages/PackageInclusions";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import PackageCard from "@/components/packages/PackageCard";
import { getAssetPath } from "@/lib/assets";
import {
  createSeoTitle,
  DEFAULT_OG_IMAGE,
  getOpenGraphImage,
  limitMetaDescription,
} from "@/lib/seo";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return NORMAL_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const pkg = getPackageBySlug("normal", params.slug);
  if (!pkg) return { title: "Package Not Found | Khushi Travels" };
  const title = createSeoTitle(pkg.title);
  const description = limitMetaDescription(pkg.description);

  return {
    title,
    description,
    alternates: {
      canonical: `https://khushitravel.in/packages/holiday/${pkg.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://khushitravel.in/packages/holiday/${pkg.slug}/`,
      images: [getOpenGraphImage(`${pkg.title} holiday package from Bangalore`)],
      siteName: "Khushi Travels",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function NormalPackageDetailPage({ params }: PageProps) {
  const pkg = getPackageBySlug("normal", params.slug);
  if (!pkg) {
    notFound();
  }

  const relatedPackages = getPackagesByCategory("normal")
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: ["Family", "Corporate", "Group"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((day, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `${day.day}: ${day.title}`,
        description: day.schedule.join(" "),
      })),
    },
    offers: {
      "@type": "Offer",
      price: pkg.priceStatus.includes("₹") ? pkg.priceStatus : "Contact for Quote",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Khushi Tours and Travels",
      telephone: "+91 99013 33113",
      url: "https://khushitravel.in/",
    },
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Khushi Travels, I want to book the tour: "${pkg.title}" (${pkg.duration}). Please share vehicle availability and best rates.`
  );
  const whatsappUrl = `https://wa.me/919901333113?text=${whatsappMsg}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <div className="relative bg-[#1a365d] text-white pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath(pkg.image)}
              alt={pkg.title}
              className="w-full h-full object-cover opacity-25 filter blur-xs"
            loading="lazy"
            decoding="async"
            decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/80 to-transparent"></div>
          </div>

          <div className="container-custom max-w-5xl mx-auto relative z-10">
            <PackageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Tour Packages", href: "/packages/" },
                { label: "Holiday Packages", href: "/packages/holiday/" },
                { label: pkg.title, href: `/packages/holiday/${pkg.slug}/` },
              ]}
            />

            <div className="mt-6 flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-amber-500 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                Holiday Tour
              </span>
              <span className="bg-white/10 backdrop-blur-md text-gray-200 text-xs px-3 py-1 rounded-full border border-white/20">
                ⏱ {pkg.duration}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full border border-white/20">
                📍 {pkg.destination}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              {pkg.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
              {pkg.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <a
                href="tel:+919901333113"
                className="inline-flex items-center gap-2 bg-white text-[#1a365d] hover:bg-gray-100 font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Call: +91 99013 33113
              </a>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="container-custom max-w-5xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-heading font-bold text-xl text-[#1a365d] mb-4">
                  Package Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ★
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading font-bold text-2xl text-[#1a365d]">
                    Proposed Tour Itinerary
                  </h2>
                  <span className="text-xs text-gray-500 font-medium">
                    Customizable for your group
                  </span>
                </div>
                <PackageItinerary itinerary={pkg.itinerary} />
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1a365d] mb-4">
                  Inclusions & Booking Policy
                </h2>
                <PackageInclusions
                  inclusions={pkg.inclusions}
                  exclusions={pkg.exclusions}
                  bookingTerms={pkg.bookingTerms}
                  priceStatus={pkg.priceStatus}
                />
              </div>

              <PackageEnquiryCTA
                packageTitle={pkg.title}
                duration={pkg.duration}
              />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm lg:sticky lg:top-28">
                <div className="text-xs font-bold text-gray-500 uppercase mb-1">Indicative Tariff</div>
                <div className="text-xl font-semibold text-[#1a365d] mb-4">
                  {pkg.priceStatus}
                </div>

                <div className="space-y-3 py-4 border-y border-gray-100 text-xs text-gray-700 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-bold text-[#1a365d]">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Pickup:</span>
                    <span className="font-bold text-[#1a365d]">Doorstep Anywhere Bangalore</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Billing:</span>
                    <span className="font-bold text-[#1a365d]">Transparent Per-Km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Chauffeur:</span>
                    <span className="font-bold text-emerald-700">Verified Chauffeur</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="tel:+919901333113"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1a365d] hover:bg-[#1a365d] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Call: +91 99013 33113
                  </a>
                </div>

                <div className="mt-5 text-center">
                  <Link
                    href="/packages/holiday/"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    ← Back to All Holiday Packages
                  </Link>
                </div>
              </div>

              {pkg.suggestedVehicles && pkg.suggestedVehicles.length > 0 && (
                <div className="bg-slate-100/70 rounded-2xl p-5 border border-slate-200 text-xs">
                  <h4 className="font-bold text-[#1a365d] mb-2 uppercase tracking-wider text-[11px]">
                    Recommended Vehicles
                  </h4>
                  <ul className="space-y-1.5 text-gray-700">
                    {pkg.suggestedVehicles.map((v, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <Link
                      href="/best-tempo-traveller-fleet-bangalore/"
                      className="text-amber-700 font-bold hover:underline text-[11px]"
                    >
                      Explore Our Fleet →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a365d]">
                  Explore Other Packages
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Custom family and corporate tours from Bangalore
                </p>
              </div>
              <Link
                href="/packages/holiday/"
                className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((relPkg) => (
                <PackageCard key={relPkg.slug} pkg={relPkg} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
