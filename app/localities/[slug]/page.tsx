import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import { LOCALITIES_DATA } from "@/data/localities";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";
import {
  createSeoTitle,
  DEFAULT_OG_IMAGE,
  getOpenGraphImage,
  limitMetaDescription,
} from "@/lib/seo";

interface LocalityPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return LOCALITIES_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export function generateMetadata({ params }: LocalityPageProps): Metadata {
  const loc = LOCALITIES_DATA.find((l) => l.slug === params.slug);
  if (!loc) return { title: "Locality Not Found" };
  const title = createSeoTitle(`Tempo Traveller in ${loc.name} Bangalore`);
  const description = limitMetaDescription(
    `Rent a luxury tempo traveller in ${loc.name}, Bangalore. Explore group vehicles for local, outstation and airport travel with doorstep pickup.`
  );

  return {
    title,
    description,
    alternates: {
      canonical: `https://khushitravel.in/localities/${loc.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://khushitravel.in/localities/${loc.slug}/`,
      images: [getOpenGraphImage(`Tempo traveller rental in ${loc.name}, Bangalore`)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function LocalityDetailPage({ params }: LocalityPageProps) {
  const loc = LOCALITIES_DATA.find((l) => l.slug === params.slug);
  if (!loc) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Bangalore Localities", href: "/#service-coverage" },
    { label: loc.name, href: `/localities/${loc.slug}/` },
  ];

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Tempo Traveller Rental in ${loc.name}`,
    description: `Luxury tempo traveller rental and tour booking service in ${loc.name}, Bengaluru.`,
    provider: { "@id": "https://khushitravel.in/#organization" },
    url: `https://khushitravel.in/localities/${loc.slug}/`,
    areaServed: {
      "@type": "Place",
      name: `${loc.name}, Bengaluru`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }} />
      {/* Locality Hero */}
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
            Doorstep Pickup in {loc.name}
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-4 text-balance">
            Tempo Traveller in{" "}
            <span className="text-brand-amber">{loc.name}</span>, Bangalore
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {loc.heroSummary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20need%20a%20tempo%20traveller%20pickup%20in%20${encodeURIComponent(
                loc.name
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              Book Pickup in {loc.name}
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

      {/* Highlights & Service Info */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div>
                <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1">
                  Local Hubs &amp; Coverage
                </span>
                <h2 className="font-heading text-2xl font-bold text-brand-navy">
                  Serving All Areas Around {loc.name}
                </h2>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you live in gated communities or work in IT tech parks
                across {loc.name}, Khushi Travels guarantees prompt arrival right
                at your apartment lobby or corporate gate.
              </p>

              <div>
                <h3 className="font-heading font-bold text-brand-navy text-sm uppercase tracking-wider mb-3">
                  Major Landmarks &amp; Colonies Covered:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((l) => (
                    <span
                      key={l}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-brand-navy border border-gray-200"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 space-y-4 text-left">
              <h3 className="font-heading font-bold text-brand-navy text-lg">
                Why Residents in {loc.name} Choose Us
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start">
                  <span>
                    Zero dead-mileage billing from garage to {loc.name}.
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    Direct expressway access for quick exits toward Mysore,
                    Tirupati, and airport corridors.
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    100% company-owned luxury fleet with authenticated Maharaja
                    recliners.
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    Transparent distance rates starting at ₹18/km with no hidden
                    surprises.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS_DATA} />

      <ServiceCoverage />
    </>
  );
}
