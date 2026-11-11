import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import GoaSpecialEnquiryForm from "@/components/packages/GoaSpecialEnquiryForm";
import { GOA_SPECIAL_PACKAGE } from "@/data/goa-special-package";
import { getAssetPath } from "@/lib/assets";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Goa Holiday Package (25 Dec 2026) | Special Package | Khushi Travels",
  description:
    "Book Khushi Travels' Special Goa Holiday Package departing 25 Dec 2026 (2 Nights / 3 Days) at ₹13,999/- per person. Includes A/C 3-Star hotel stay, 6 meals, 5 water sports, DJ cruise dinner, and Goa sightseeing.",
  keywords: [
    "Goa holiday package from Bangalore",
    "Goa special package 25 Dec 2026",
    "Goa 2 nights 3 days package 13999",
    "Goa package with cruise dinner and water sports",
    "Khushi Travels Goa package",
    "Goa New Year Christmas group tour package",
  ],
  alternates: {
    canonical: `${SITE_URL}/packages/special/goa-holiday-package/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/packages/special/goa-holiday-package/`,
    title: "Goa Holiday Package (25 Dec 2026) | Special Package | Khushi Travels",
    description:
      "2 Nights / 3 Days Goa Holiday Package departing 25 Dec 2026 at ₹13,999/- per person with 3-Star A/C stay, meals, 5 water sports, DJ cruise dinner & sightseeing.",
    images: [
      {
        url: `${SITE_URL}/images/packages/goa/goa-holiday-package.webp`,
        width: 1024,
        height: 1024,
        alt: GOA_SPECIAL_PACKAGE.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa Holiday Package (25 Dec 2026) | Khushi Travels",
    description:
      "2 Nights / 3 Days Special Goa Package at ₹13,999/- per person: A/C 3-Star stay, 6 meals, 5 water sports, DJ cruise dinner & Goa sightseeing.",
    images: [`${SITE_URL}/images/packages/goa/goa-holiday-package.webp`],
  },
};

export default function GoaSpecialPackagePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/packages/" },
    { label: "Special Packages", href: "/packages/special/" },
    { label: "Goa Holiday Package", href: "/packages/special/goa-holiday-package/" },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: b.href }))
  );

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Goa Holiday Package (25 Dec 2026 Special Departure)",
    description:
      "2 Nights / 3 Days Goa Holiday Package departing 25 Dec 2026 at ₹13,999/- per person, including A/C 3-Star hotel stay (3 sharing), 2 breakfasts, 2 lunches, 2 dinners, 5 water sports activities, DJ & disco cruise dinner, and Goa sightseeing.",
    url: `${SITE_URL}/packages/special/goa-holiday-package/`,
    image: `${SITE_URL}/images/packages/goa/goa-holiday-package.webp`,
    touristType: ["Groups", "Friends", "Families", "Holiday Travellers"],
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: "13999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-11-11",
      url: `${SITE_URL}/packages/special/goa-holiday-package/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GOA_SPECIAL_PACKAGE.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const whatsappUrl =
    "https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20book%20the%20Special%20Goa%20Holiday%20Package%20(25%20Dec%202026%2C%202N%2F3D%2C%20%E2%82%B913%2C999%2F-%20per%20person).";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 text-white"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.96) 0%, rgba(26,54,93,0.92) 100%)",
        }}
      >
        <div className="container-custom relative z-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-amber text-[#111]">
                  {GOA_SPECIAL_PACKAGE.badge}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-200 border border-white/15">
                  Departure: {GOA_SPECIAL_PACKAGE.departureDate}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
                Goa Holiday <span className="text-brand-amber">Package</span>
              </h1>

              <p className="font-heading text-base sm:text-xl text-amber-200/95 font-semibold">
                {GOA_SPECIAL_PACKAGE.subtitle}
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Celebrate December in Goa with Khushi Tour &amp; Travels&apos; special{" "}
                <strong className="text-white">2 Nights / 3 Days</strong> holiday package departing{" "}
                <strong className="text-amber-300">25 Dec 2026</strong>. Enjoy an A/C 3-Star hotel stay (3 sharing),
                all 6 meals, 5 thrilling water sports activities, an evening DJ &amp; disco cruise dinner, and iconic
                Goa sightseeing.
              </p>

              {/* Quick Highlight Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Departure
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    {GOA_SPECIAL_PACKAGE.departureDate}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Duration
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    {GOA_SPECIAL_PACKAGE.duration}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Package Price
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    {GOA_SPECIAL_PACKAGE.price} {GOA_SPECIAL_PACKAGE.priceUnit}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Stay
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    A/C 3-Star (3 Sharing)
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Meals
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    2B &bull; 2L &bull; 2D
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-brand-amber tracking-wider block">
                    Activities
                  </span>
                  <span className="text-white text-sm font-bold block mt-0.5">
                    5 Sports + Cruise
                  </span>
                </div>
              </div>

              {/* Price & CTA Strip */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-amber tracking-wider block">
                    All-Inclusive Special Fare
                  </span>
                  <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    {GOA_SPECIAL_PACKAGE.price}{" "}
                    <span className="text-sm font-semibold text-amber-200">
                      / Per Person
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href="#enquiry"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-3 rounded-xl gradient-amber text-brand-navy font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  >
                    Book Your Goa Getaway
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all whitespace-nowrap"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right Main Poster */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-amber-400/40 bg-[#071f3b]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(GOA_SPECIAL_PACKAGE.heroImage)}
                  alt={GOA_SPECIAL_PACKAGE.heroImageAlt}
                  className="w-full h-full object-contain"
                  loading="eager"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGE INCLUSIONS OVERVIEW STRIP ===== */}
      <section className="bg-amber-50 border-y border-amber-200 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-brand-navy">
          <p className="font-medium text-center sm:text-left">
            <strong className="font-bold">Booking Desk:</strong> Call{" "}
            <a href="tel:+919901333113" className="font-bold underline hover:text-amber-700">
              +91 99013 33113
            </a>{" "}
            or{" "}
            <a href="tel:+919632721942" className="font-bold underline hover:text-amber-700">
              +91 96327 21942
            </a>{" "}
            for seat availability, boarding details, and complete trip schedule.
          </p>
          <Link
            href="/packages/special/"
            className="font-bold text-brand-navy hover:text-amber-700 underline shrink-0"
          >
            &larr; All Special Packages
          </Link>
        </div>
      </section>

      {/* ===== 1. HOTEL STAY & MEALS ===== */}
      <section className="bg-white section-py" id="stay-meals">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#0a2342]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(GOA_SPECIAL_PACKAGE.stayDetails.poster)}
                  alt={GOA_SPECIAL_PACKAGE.stayDetails.posterAlt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block">
                Inclusion 01 &bull; Accommodation &amp; Dining
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                Comfortable Hotel Stay &amp; Delicious Food
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Relax after a full day of beaches and activities in a comfortable, safe A/C 3-Star hotel located
                close to Goa&apos;s popular beaches and attractions, with six included meals across your stay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h3 className="font-heading font-bold text-brand-navy text-base mb-3">
                    {GOA_SPECIAL_PACKAGE.stayDetails.heading}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {GOA_SPECIAL_PACKAGE.stayDetails.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-amber mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h3 className="font-heading font-bold text-brand-navy text-base mb-3">
                    Meals Included
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {GOA_SPECIAL_PACKAGE.stayDetails.meals.map((meal) => (
                      <div
                        key={meal}
                        className="bg-white rounded-xl px-4 py-2.5 border border-slate-200 font-semibold text-sm text-brand-navy flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{meal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. 5 EXCITING WATER SPORTS ===== */}
      <section className="bg-slate-50 section-py border-t border-slate-200/80" id="water-sports">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block">
                Inclusion 02 &bull; Beach Adventure
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                {GOA_SPECIAL_PACKAGE.waterSports.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Feel the thrill on Goa&apos;s coastline with five action-packed water sports activities bundled into
                the package.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {GOA_SPECIAL_PACKAGE.waterSports.activities.map((activity, idx) => (
                  <div
                    key={activity.title}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-start gap-3"
                  >
                    <span className="w-8 h-8 rounded-xl gradient-amber text-brand-navy font-heading font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-brand-navy text-base">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-0.5">{activity.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#072643]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(GOA_SPECIAL_PACKAGE.waterSports.poster)}
                  alt={GOA_SPECIAL_PACKAGE.waterSports.posterAlt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. CRUISE DINNER ===== */}
      <section className="bg-white section-py border-t border-slate-200/80" id="cruise-dinner">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#081b38]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(GOA_SPECIAL_PACKAGE.cruiseDinner.poster)}
                  alt={GOA_SPECIAL_PACKAGE.cruiseDinner.posterAlt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block">
                Inclusion 03 &bull; Evening Experience
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                {GOA_SPECIAL_PACKAGE.cruiseDinner.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Experience Goa&apos;s night vibes on the water aboard an illuminated cruise ship with music,
                dancing, and a generous buffet dinner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {GOA_SPECIAL_PACKAGE.cruiseDinner.highlights.map((item) => (
                  <div
                    key={item}
                    className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center gap-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-amber shrink-0" />
                    <span className="font-semibold text-sm text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. SIGHTSEEING IN GOA ===== */}
      <section className="bg-slate-50 section-py border-t border-slate-200/80" id="sightseeing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block">
                Inclusion 04 &bull; Heritage &amp; Beaches
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
                {GOA_SPECIAL_PACKAGE.sightseeing.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Explore Goa&apos;s coastal forts, vibrant heritage lanes, historic churches, scenic palm-lined
                avenues, and iconic beaches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {GOA_SPECIAL_PACKAGE.sightseeing.spots.map((spot) => (
                  <div
                    key={spot.name}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                      {spot.category}
                    </span>
                    <h3 className="font-heading font-bold text-brand-navy text-base mt-0.5">
                      {spot.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#0e2d4b]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(GOA_SPECIAL_PACKAGE.sightseeing.poster)}
                  alt={GOA_SPECIAL_PACKAGE.sightseeing.posterAlt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGE GALLERY & SCHEDULE NOTE ===== */}
      <section className="bg-white section-py border-t border-slate-200/80" id="package-flyers">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Complete Visual Overview
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
              Goa Holiday Package Posters &amp; Highlights
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Review all five official package flyers covering pricing, stay &amp; meals, water sports, cruise dinner,
              and Goa sightseeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GOA_SPECIAL_PACKAGE.posters.map((poster) => (
              <figure
                key={poster.src}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
              >
                <div className="aspect-square bg-[#071f3b] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(poster.src)}
                    alt={poster.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <figcaption className="p-3.5 text-center">
                  <div className="font-heading font-bold text-xs text-brand-navy">
                    {poster.title}
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                    {poster.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-amber-50/80 border border-amber-200 p-5 sm:p-6 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy mb-1.5">
              Trip Schedule &amp; Booking Confirmation
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The 25 December 2026 Goa Holiday Package runs for 2 Nights / 3 Days at ₹13,999/- per person. Complete
              day-wise timings, boarding/pickup points, room allocation, and booking terms are shared upon enquiry with
              our travel team.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY & BOOKING SECTION ===== */}
      <section className="bg-brand-navy section-py text-white" id="enquiry">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-5">
              <span className="text-xs uppercase font-bold text-brand-amber tracking-widest inline-block">
                Book Your Goa Getaway Now
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance">
                Reserve Your Seats for 25 Dec 2026
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Contact Khushi Tour &amp; Travels directly to confirm group availability, full day-wise itinerary,
                boarding location, and seat booking for the ₹13,999/- per person Goa Special Package.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                {GOA_SPECIAL_PACKAGE.contactPhones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-amber hover:bg-amber-400 text-brand-navy font-bold text-sm transition-all shadow-lg"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>Call {phone.display}</span>
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="md:col-span-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                Goa Package Enquiry
              </h3>
              <p className="text-xs text-white/65 mb-5">
                Send your traveller count to check seat availability on WhatsApp.
              </p>
              <GoaSpecialEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section className="bg-gray-50 section-py border-t border-gray-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Package Information
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {GOA_SPECIAL_PACKAGE.faqs.map((faq) => (
              <details
                key={faq.question}
                className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all"
              >
                <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                  <span>{faq.question}</span>
                  <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}

