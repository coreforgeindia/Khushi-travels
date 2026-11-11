import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

interface HighlightedPackage {
  id: string;
  badge: string;
  secondaryBadge: string;
  title: string;
  duration: string;
  subtitle: string;
  highlights: string[];
  price: string;
  priceSubtext: string;
  image: string;
  imageAlt: string;
  imageBg: string;
  href: string;
  ctaLabel: string;
  whatsappHref: string;
}

const HIGHLIGHTED_PACKAGES: HighlightedPackage[] = [
  {
    id: "12-jyotirlinga",
    badge: "Pilgrimage Package",
    secondaryBadge: "3% Off Nov • EMI Plans",
    title: "12 Jyotirlinga Spiritual Yatra",
    duration: "25 Days / 24 Nights",
    subtitle: "12 Jyotirlingas • Mathura, Ayodhya, Gaya & Puri",
    highlights: [
      "All 12 Sacred Jyotirlingas across 8 States",
      "AC Volvo Coach Transit & 3-Star Deluxe Stays",
      "3-Time Pure Veg Satvik Meals Included",
    ],
    price: "₹1,49,999",
    priceSubtext: "Proposed All-India Yatra",
    image: "/images/destinations/12-jyotirlinga-shiva.jpg",
    imageAlt: "12 Jyotirlinga Spiritual Yatra package poster",
    imageBg: "bg-[#0b1322]",
    href: "/packages/pilgrimage/12-jyotirlinga-yatra/",
    ctaLabel: "View Yatra Package",
    whatsappHref:
      "https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%2025%20Day%2012%20Jyotirlinga%20Spiritual%20Yatra%20package.",
  },
  {
    id: "goa-special",
    badge: "Special Package",
    secondaryBadge: "Departure: 25 Dec 2026",
    title: "Goa Holiday Package",
    duration: "2 Nights / 3 Days",
    subtitle: "A/C 3-Star Hotel Stay (3 Sharing) • All Meals & Cruise",
    highlights: [
      "2 Breakfasts, 2 Lunches & 2 Dinners Included",
      "5 Water Sports: Banana Ride, Jet Ski, Bumper Ski & Boat",
      "Cruise Dinner (DJ & Disco) + Chapora Fort & Beaches",
    ],
    price: "₹13,999/-",
    priceSubtext: "Per Person",
    image: "/images/packages/goa/goa-holiday-package.webp",
    imageAlt:
      "Goa Special Holiday Package — 25 Dec 2026 departure, 2 Nights 3 Days, ₹13,999 per person",
    imageBg: "bg-[#071f3b]",
    href: "/packages/special/goa-holiday-package/",
    ctaLabel: "View Goa Package",
    whatsappHref:
      "https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20book%20the%20Special%20Goa%20Holiday%20Package%20(25%20Dec%202026%2C%202N%2F3D%2C%20%E2%82%B913%2C999%2F-%20per%20person).",
  },
];

export default function HomeFeaturedPackages() {
  return (
    <section
      className="bg-slate-50 py-10 sm:py-12 md:py-14 border-b border-slate-200/80"
      aria-labelledby="home-featured-specials-heading"
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1.5">
              Signature Group Tours
            </span>
            <h2
              id="home-featured-specials-heading"
              className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight"
            >
              Featured Special &amp; Pilgrimage Packages
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Explore our flagship 25-day 12 Jyotirlinga pilgrimage and the 25 Dec 2026 Special Goa Holiday Package.
            </p>
          </div>
          <Link
            href="/packages/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-amber-600 transition-colors shrink-0"
          >
            <span>Explore All 4 Package Categories</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {HIGHLIGHTED_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Left / Top Poster Container (Uncropped 1:1 / Poster Display) */}
              <Link
                href={pkg.href}
                className={`relative aspect-square sm:aspect-auto sm:w-56 md:w-60 shrink-0 ${pkg.imageBg} flex items-center justify-center overflow-hidden`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(pkg.image)}
                  alt={pkg.imageAlt}
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  loading="eager"
                  width={1024}
                  height={1024}
                />
              </Link>

              {/* Right / Bottom Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-navy text-white">
                      {pkg.badge}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      {pkg.secondaryBadge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-brand-navy leading-snug group-hover:text-amber-600 transition-colors">
                    <Link href={pkg.href}>{pkg.title}</Link>
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mt-1">
                    {pkg.duration} &bull; <span className="text-gray-600 font-medium">{pkg.subtitle}</span>
                  </p>

                  <ul className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5 text-xs sm:text-[13px] text-gray-700">
                    {pkg.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
                      {pkg.priceSubtext}
                    </span>
                    <span className="font-heading text-xl font-extrabold text-brand-navy">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={pkg.href}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl gradient-amber text-[#111] font-heading font-bold text-xs shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    >
                      <span>{pkg.ctaLabel}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <a
                      href={pkg.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs shadow-sm transition-colors whitespace-nowrap"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

