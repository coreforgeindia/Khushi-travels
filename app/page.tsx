import React from "react";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
import HomeOfferMarquee from "@/components/HomeOfferMarquee";

export const metadata: Metadata = {
  title: "Luxury Tempo Traveller Bangalore | Khushi Travels",
  description:
    "Hire luxury tempo travellers, Force Urbania and buses in Bangalore. Compare group vehicles for local trips, holidays and pilgrimages.",
  keywords: [
    "luxury tempo traveller Bangalore",
    "tempo traveller rental Bangalore",
    "9 seater tempo traveller Bangalore",
    "12 seater tempo traveller Bangalore",
    "16 seater tempo traveller Bangalore",
    "Force Urbania Bangalore",
    "Maharaja seats tempo traveller",
    "tempo traveller for outstation trips",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Luxury Tempo Traveller Bangalore | Khushi Travels",
    description:
      "Hire luxury tempo travellers, Force Urbania and buses in Bangalore for local trips, holidays and pilgrimages.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Khushi Tours & Travels Bangalore Homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Tempo Traveller Bangalore | Khushi Travels",
    description:
      "Hire luxury tempo travellers, Force Urbania and buses in Bangalore for local trips, holidays and pilgrimages.",
    images: [DEFAULT_OG_IMAGE],
  },
};

import Link from "next/link";
import dynamic from "next/dynamic";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";

// Lazy-loaded below-the-fold components for optimized initial page load performance
const FeaturedPilgrimageCard = dynamic(
  () => import("@/components/FeaturedPilgrimageCard"),
  {
    loading: () => (
      <div className="py-12 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="h-[480px] bg-slate-900/10 rounded-3xl animate-pulse" />
        </div>
      </div>
    ),
  }
);

const FleetRows = dynamic(
  () => import("@/components/FleetRow"),
  {
    loading: () => (
      <section className="bg-gray-50 section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 bg-gray-200/60 rounded-xl mb-12 animate-pulse" />
          <div className="h-[500px] bg-gray-200/40 rounded-2xl animate-pulse" />
        </div>
      </section>
    ),
  }
);

const WeekendDestinationCarousel = dynamic(
  () => import("@/components/WeekendDestinationCarousel"),
  {
    loading: () => (
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="container-custom">
          <div className="h-16 max-w-md bg-gray-200/60 rounded-xl mb-8 animate-pulse" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="w-36 h-48 bg-gray-100 rounded-2xl animate-pulse flex-none" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const PopularDestinationsSection = dynamic(
  () => import("@/components/PopularDestinationsSection"),
  {
    loading: () => (
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="h-16 max-w-md mx-auto bg-gray-200/60 rounded-xl mb-12 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-72 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const FAQAccordion = dynamic(
  () => import("@/components/FAQAccordion"),
  {
    loading: () => (
      <section className="bg-white py-16">
        <div className="container-custom max-w-4xl">
          <div className="h-14 max-w-sm mx-auto bg-gray-200/60 rounded-xl mb-8 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-16 bg-gray-50 rounded-xl animate-pulse border border-gray-100" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const ServiceCoverage = dynamic(
  () => import("@/components/ServiceCoverage"),
  {
    loading: () => (
      <section className="bg-slate-50/80 py-16 border-t border-slate-200/80">
        <div className="container-custom" style={{ maxWidth: "90%" }}>
          <div className="h-16 max-w-md mx-auto bg-slate-200/60 rounded-xl mb-10 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-80 bg-white rounded-2xl border border-slate-200/80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      {/* ===== HERO CINEMATIC ===== */}
      <section
        className="hero-cinematic relative overflow-hidden pb-12 sm:pb-14"
        style={
          {
            "--hero-bg-image": `url(${getAssetPath("/images/hero-bg.webp")})`,
          } as React.CSSProperties
        }
      >
        <div className="container-custom w-full relative z-10">
          <div className="max-w-2xl text-left">
            {/* Brand Message Eyebrow */}
            <div className="flex items-center gap-3 text-brand-gold font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2.5 lg:mb-3">
              <span>TRAVEL TOGETHER. TRAVEL BETTER.</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading hero-title text-white font-bold tracking-tight leading-[1.08] mb-2.5 sm:mb-3.5 lg:mb-5 text-balance">
              Luxury Tempo <br className="hidden sm:inline" />
              <span className="text-[#f59e0b]">Traveller</span> in Bangalore
            </h1>

            {/* Supporting Description */}
            <p className="hero-desc text-[#E2E8F0] mb-3.5 sm:mb-5 lg:mb-7 font-normal">
              Premium tempo travellers and luxury buses for family trips,
              pilgrimages, corporate tours, and group travel from Bangalore. Safe,
              comfortable, and reliable travel with professional drivers.
            </p>

            {/* CTA Buttons - Stacked on Mobile, Side-by-Side on Desktop */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 w-full sm:w-auto max-w-md sm:max-w-none">
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I'm%20interested%20in%20booking%20a%20luxury%20tempo%20traveller."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-[52px] sm:h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full gradient-amber text-[#111111] font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center whitespace-nowrap group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Book on WhatsApp</span>
              </a>
              <a
                href="tel:+919901333113"
                className="w-full sm:w-auto h-[52px] sm:h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1a365d]/40 hover:bg-[#1a365d]/60 sm:bg-white/10 sm:hover:bg-white/20 text-white border border-white/20 sm:border-white/25 backdrop-blur-md sm:backdrop-blur-sm font-heading font-bold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all text-center whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 text-brand-amber shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call +91 99013 33113</span>
              </a>
            </div>

            {/* Trust Badges - Mobile: Balanced 2x2 Glass Grid | Desktop: Original Inline Layout */}
            <div className="grid grid-cols-2 gap-2 sm:hidden w-full max-w-sm">
              <div className="min-h-[38px] flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#1a365d]/65 backdrop-blur-md border border-white/15 text-white shadow-sm overflow-hidden">
                <span className="font-bold text-white text-[10.5px] min-[360px]:text-[11px] shrink-0">Since 2018</span>
                <span className="text-white/70 text-[9.5px] min-[360px]:text-[10px] truncate">Bengaluru</span>
              </div>
              <div className="min-h-[38px] flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#1a365d]/65 backdrop-blur-md border border-white/15 text-white shadow-sm overflow-hidden">
                <svg className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium text-white/95 text-[10.5px] min-[360px]:text-[11px] whitespace-nowrap">100% Owned Fleet</span>
              </div>
              <div className="min-h-[38px] flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#1a365d]/65 backdrop-blur-md border border-white/15 text-white shadow-sm overflow-hidden">
                <svg className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-white/95 text-[10.5px] min-[360px]:text-[11px] whitespace-nowrap">GPS Monitored</span>
              </div>
              <div className="min-h-[38px] flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#1a365d]/65 backdrop-blur-md border border-white/15 text-white shadow-sm overflow-hidden">
                <svg className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium text-white/95 text-[10.5px] min-[360px]:text-[11px] whitespace-nowrap">Chauffeur Driven</span>
              </div>
            </div>

            {/* Desktop & Tablet: Preserved Original Inline Layout */}
            <div className="hidden sm:flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-1 sm:gap-y-1.5 text-[11px] sm:text-xs text-white/80 max-w-sm sm:max-w-none">
              <span className="flex items-center gap-1.5 font-semibold text-white whitespace-nowrap">
                <span className="text-brand-amber">Since 2018</span>
              </span>
              <span>&bull;</span>
              <span className="whitespace-nowrap">100% Owned Fleet</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="whitespace-nowrap">GPS Monitored</span>
              <span>&bull;</span>
              <span className="whitespace-nowrap">Chauffeur Driven</span>
            </div>
          </div>
        </div>
        <HomeOfferMarquee />
      </section>

      {/* ===== QUICK STATS COUNTERS ===== */}
      <section className="bg-white relative z-20 py-8 sm:py-10 md:py-12 border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                500+
              </p>
              <p className="text-xs text-gray-500 mt-1">Tour customers served</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                28
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Destinations from Bangalore
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                Since 2018
              </p>
              <p className="text-xs text-gray-500 mt-1">Serving Bengaluru</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">
                100%
              </p>
              <p className="text-xs text-gray-500 mt-1">Owned fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PILGRIMAGE TOUR SHOWCASE ===== */}
      <FeaturedPilgrimageCard />

      {/* ===== ABOUT / AEO ANSWER BLOCK ===== */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-left">
              <strong className="text-brand-navy">Khushi Travels</strong> is
              Bangalore&apos;s premier provider for{" "}
              <strong className="text-brand-navy">
                luxury tempo travellers in Bangalore
              </strong>
              . We offer an elite fleet ranging from 7 to 50 seater vehicles,
              including{" "}
              <strong className="text-brand-navy">Maharaja pushback seats</strong>,{" "}
              <strong className="text-brand-navy">Force Urbania</strong>, and
              premium luxury buses. All our vehicles are 100% owned, sanitized,
              and staffed with professional chauffeurs. Book instantly via
              WhatsApp for 24/7 support and the most transparent tempo traveller
              rental prices in Bangalore.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  100% Owned Fleet
                </h3>
                <p className="text-sm text-gray-500">
                  We don&apos;t use third-party vehicles. You get exactly the luxury
                  tempo you book.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  24/7 WhatsApp Support
                </h3>
                <p className="text-sm text-gray-500">
                  Instant confirmation and support for your luxury tempo traveller
                  booking.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12V7a3 3 0 013-3h8a3 3 0 013 3v5m-14 0h14m-14 0a2 2 0 00-2 2v4a2 2 0 002 2h1m12-8a2 2 0 012 2v4a2 2 0 01-2 2h-1m-12 0v2m12-2v2m-12-2h12"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">
                  Maharaja Seating
                </h3>
                <p className="text-sm text-gray-500">
                  Premium 1x1 Maharaja seats available in our 9, 12, and 13 seater
                  luxury tempos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLEET: 4 ALTERNATING ROWS ===== */}
      <FleetRows />

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
              Simple 3-Step Process
            </span>
            <h2 className="font-heading text-h1 text-brand-navy">
              How Booking Works
            </h2>
            <p className="text-gray-500 text-base mt-2">
              Reserve your tempo traveller in under two minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-semibold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                1
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Choose Vehicle &amp; Route
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Select your preferred tempo traveller, Urbania, or bus according
                to group size and luggage needs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-semibold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                2
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Instant Quote in 5 Mins
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Send a quick WhatsApp with your dates. Get a transparent,
                itemized rate with zero hidden costs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-amber text-white font-heading font-semibold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/25">
                3
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">
                Confirmed &amp; Dispatched
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Pay a small advance to secure your dates. Chauffeur and sanitized
                vehicle arrive at your doorstep on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS: SOUTH INDIA ROAD TRIPS (Mobile Carousel + Desktop Grid) ===== */}
      <PopularDestinationsSection />

      {/* ===== TRENDING WEEKEND GETAWAYS: AIRBNB-STYLE DESTINATION DISCOVERY CAROUSEL ===== */}
      <WeekendDestinationCarousel />

      {/* ===== AMBER CTA BANNER ===== */}
      <section className="gradient-amber py-16 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-h1 font-bold mb-4 text-balance">
            Ready to Travel in Absolute Comfort?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Whether it&apos;s a family vacation, wedding shuttle, or company offsite,
            Khushi Travels delivers immaculate vehicles and verified chauffeurs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20need%20a%20tempo%20traveller%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-brand-navy font-heading font-bold text-sm shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              Get Instant WhatsApp Quote
            </a>
            <Link
              href="/hire-tempo-traveller-bangalore/"
              className="px-8 py-4 rounded-full bg-brand-navy/20 hover:bg-brand-navy/30 text-white border border-white/30 font-heading font-bold text-sm transition-all"
            >
              Contact Booking Desk
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <FAQAccordion items={FAQS_DATA} />

      {/* ===== SERVICE COVERAGE ===== */}
      <ServiceCoverage />
    </>
  );
}
