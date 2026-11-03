import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import { ROUTES_DATA } from "@/data/routes";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";
import {
  createSeoTitle,
  DEFAULT_OG_IMAGE,
  getOpenGraphImage,
  limitMetaDescription,
} from "@/lib/seo";

interface RoutePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ROUTES_DATA.map((r) => ({
    slug: r.slug,
  }));
}

export function generateMetadata({ params }: RoutePageProps): Metadata {
  const route = ROUTES_DATA.find((r) => r.slug === params.slug);
  if (!route) return { title: "Route Not Found" };
  const title = createSeoTitle(`Bangalore to ${route.destination} Tempo Traveller`);
  const description = limitMetaDescription(
    `Hire a tempo traveller from Bangalore to ${route.destination}. ${route.description}`
  );

  return {
    title,
    description,
    alternates: {
      canonical: `https://khushitravel.in/routes/${route.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://khushitravel.in/routes/${route.slug}/`,
      images: [getOpenGraphImage(`Bangalore to ${route.destination} tempo traveller tour`)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function RouteDetailPage({ params }: RoutePageProps) {
  const route = ROUTES_DATA.find((r) => r.slug === params.slug);
  if (!route) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/packages/" },
    { label: `Bangalore to ${route.destination}`, href: `/routes/${route.slug}/` },
  ];

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `Bangalore to ${route.destination} Tour`,
    description: route.description,
    touristType: ["Family", "Corporate Group", "Leisure Travelers"],
    provider: {
      "@type": "TravelAgency",
      name: "Khushi Tours and Travels",
      telephone: "+91 99013 33113",
      url: "https://khushitravel.in/",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      {/* Route Hero */}
      <section
        className="relative flex min-h-screen min-h-[100svh] items-center pt-24 pb-12 sm:pt-28 sm:pb-14 text-center overflow-hidden"
        style={{
          background:
            `linear-gradient(to bottom, rgba(26,54,93,0.92), rgba(26,54,93,0.85), rgba(26,54,93,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            Outstation Road Trip from Bengaluru
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-4 text-balance">
            Bangalore to{" "}
            <span className="text-brand-amber">{route.destination}</span> Tempo
            Traveller Rental
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {route.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20book%20a%20tempo%20traveller%20from%20Bangalore%20to%20${encodeURIComponent(
                route.destination
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Get Instant WhatsApp Quote
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

      {/* Route Details Card */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="space-y-6 text-left">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(route.image)}
                  alt={`Bangalore to ${route.destination} travel scenery`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={500}
                />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-brand-navy mb-3">
                  Trip Overview &amp; Route Guidance
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Traveling from Bengaluru to {route.destination} with a family or
                  corporate team is smoothest when everyone travels together. Our
                  luxury tempo travellers eliminate the stress of self-driving on
                  highways, toll delays, and cramped seating.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">
                  Must-Visit Sightseeing Highlights
                </h3>
                <ul className="space-y-2.5">
                  {route.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-gray-700 flex items-start gap-2.5"
                    >
                      <span className="text-brand-amber font-bold">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Trip Stats Panel */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-6 text-left">
              <div>
                <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1">
                  Trip Metrics
                </span>
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  Route Specifications
                </h3>
              </div>

              <div className="space-y-4 divide-y divide-gray-200/80 text-sm">
                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-500">Approx Distance</span>
                  <span className="font-bold text-brand-navy">
                    ~{route.distanceKm} km
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-500">Average Drive Time</span>
                  <span className="font-bold text-brand-navy">
                    {route.durationHrs}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-500">Starting Per-Km Rate</span>
                  <span className="font-bold text-brand-amber text-base">
                    ₹18 / km
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-500">Recommended Vehicles</span>
                  <span className="font-semibold text-brand-navy text-right">
                    9, 12, 14 Seater TT or Urbania
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-500">Doorstep Pickup</span>
                  <span className="text-emerald-700 font-semibold">Anywhere in Bangalore</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200/70 text-xs text-gray-600 leading-relaxed space-y-2">
                <p className="font-bold text-brand-navy">
                  Why Book Khushi Travels on this Route?
                </p>
                <p>
                  Chauffeurs experienced on this exact route, familiar with the
                  cleanest highway washroom stops, authentic food joints, and optimal
                  departure timing to bypass Bangalore city traffic.
                </p>
              </div>

              <a
                href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20please%20send%20quote%20for%20Bangalore%20to%20${encodeURIComponent(
                  route.destination
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 rounded-xl gradient-amber text-white font-heading font-bold text-sm shadow hover:-translate-y-0.5 transition-all"
              >
                Inquire for {route.destination} Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS_DATA} />

      <ServiceCoverage />
    </>
  );
}
