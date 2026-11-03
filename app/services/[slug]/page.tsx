import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCoverage from "@/components/ServiceCoverage";
import { SERVICES_DATA } from "@/data/services";
import { FAQS_DATA } from "@/data/faqs";
import { getAssetPath } from "@/lib/assets";
import {
  createSeoTitle,
  DEFAULT_OG_IMAGE,
  getOpenGraphImage,
  limitMetaDescription,
} from "@/lib/seo";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  const title = createSeoTitle(service.metaTitle);
  const description = limitMetaDescription(service.metaDescription);

  return {
    title,
    description,
    alternates: {
      canonical: `https://khushitravel.in/services/${service.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://khushitravel.in/services/${service.slug}/`,
      images: [getOpenGraphImage(`${service.title} | Khushi Travels`)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: service.title, href: `/services/${service.slug}/` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "TravelAgency",
      name: "Khushi Tours and Travels",
      telephone: "+91 99013 33113",
      url: "https://khushitravel.in/",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Service Hero */}
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
            {service.eyebrow}
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-4 text-balance">
            {service.title}
          </h1>

          <p className="text-amber-200/90 font-semibold text-base sm:text-lg mb-6">
            {service.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/919901333113?text=${encodeURIComponent(
                service.ctaQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-amber text-white font-heading font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
            >
              {service.ctaText}
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

      {/* Content & Highlight Box */}
      <section className="bg-white section-py">
        <div className="container-custom max-w-4xl">
          {/* Highlighted Callout */}
          <div className="bg-amber-50/60 border-l-4 border-brand-amber rounded-r-2xl p-6 sm:p-8 mb-12 text-left">
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              {service.highlightText}
            </p>
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-6 text-left text-gray-700 text-sm sm:text-base leading-relaxed mb-16">
            {service.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 3-Column Features */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {service.features.map((feat) => (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-bold text-brand-navy text-base mb-1">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={FAQS_DATA} />

      <ServiceCoverage />
    </>
  );
}
