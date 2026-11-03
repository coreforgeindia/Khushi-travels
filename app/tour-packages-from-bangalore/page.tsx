import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import TourDestinationsFilter from "@/components/TourDestinationsFilter";
import { getAssetPath } from "@/lib/assets";
import {
  BUSINESS_ADDRESS,
  BUSINESS_GEO,
  DEFAULT_OG_IMAGE,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tour Packages Bangalore | Khushi Travels",
  description:
    "Explore holiday and pilgrimage tours from Bangalore, with group transport to Coorg, Ooty, Mysore, Tirupati, Jyotirlinga temples and Goa.",
  alternates: {
    canonical:
      "https://khushitravel.in/tour-packages-from-bangalore/",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/tour-packages-from-bangalore/`,
    title: "Tour Packages Bangalore | Khushi Travels",
    description:
      "Explore holiday and pilgrimage tours from Bangalore, with group transport to Coorg, Ooty, Mysore, Tirupati, Jyotirlinga temples and Goa.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tour Packages from Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Packages Bangalore | Khushi Travels",
    description:
      "Explore holiday and pilgrimage tours from Bangalore with group transport to popular destinations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TourPackagesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages-from-bangalore/" },
  ];

  const fleetVehicles = [
    {
      name: "9 Seater Tempo Traveller",
      image: "/images/fleet/9-seater-tempo-traveller-bangalore.webp",
      desc: "Pushback seats · AC · LED TV · USB",
      rate: "₹35",
      unit: "/km",
      slug: "9-seater",
    },
    {
      name: "12-13 Seater Tempo Traveller",
      image: "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-1.webp",
      desc: "Pushback seats · AC · Panoramic windows",
      rate: "₹22",
      unit: "/km",
      slug: "12-14-seater",
    },
    {
      name: "16 Seater Luxury",
      image: "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-1.webp",
      desc: "Pushback seats · AC · LED TV · Large luggage",
      rate: "₹35",
      unit: "/km",
      slug: "16-seater",
    },
    {
      name: "Force Urbania",
      image: "/images/fleet/force-urbania-rental-bangalore.webp",
      desc: "Air suspension · Panoramic windows · Standing height",
      rate: "₹40",
      unit: "/km",
      slug: "force-urbania",
    },
    {
      name: "Toyota Innova Crysta",
      image: "/images/fleet/toyota-innova-crysta-bangalore-1.webp",
      desc: "Captain seats · AC · Smooth ride · 7 seater",
      rate: "₹19",
      unit: "/km",
      slug: "innova-crysta",
    },
    {
      name: "Mini Bus 21 Seater",
      image: "/images/fleet/luxury-minibus-rental-bangalore-1.webp",
      desc: "Pushback seats · AC · LED TV · Washroom",
      rate: "₹33",
      unit: "/km",
      slug: "mini-bus",
    },
    {
      name: "Luxury Bus 35-50 Seater",
      image: "/images/fleet/luxury-50-seater-bus-bangalore-1.webp",
      desc: "Reclining seats · AC · TV · Large groups",
      rate: "₹45",
      unit: "/km",
      slug: "bus-rental",
    },
    {
      name: "Luxury Car Rental",
      image: "/images/fleet/luxury-car-bangalore-1.webp",
      desc: "Executive sedans · Premium comfort · Corporate travel",
      rate: "₹55",
      unit: "/km",
      slug: "luxury-car",
    },
  ];

  const weekendTrips = [
    {
      name: "Nandi Hills",
      dist: "60 km · 1.5 hrs · Sunrise Trek",
      image: "/images/destinations/nandi-hills.webp",
      alt: "Nandi Hills sunrise trek from Bangalore",
    },
    {
      name: "Skandagiri",
      dist: "70 km · 1.5 hrs · Night Trek",
      image: "/images/destinations/nandi-hills.webp",
      alt: "Skandagiri night trek from Bangalore",
    },
    {
      name: "Bannerghatta",
      dist: "25 km · 45 mins · Zoo & Safari",
      image: "/images/destinations/bandipur.webp",
      alt: "Bannerghatta national park from Bangalore",
    },
    {
      name: "Mysore",
      dist: "150 km · 3 hrs · Palace & Zoo",
      image: "/images/destinations/mysore.webp",
      alt: "Mysore weekend trip from Bangalore",
    },
    {
      name: "Savanadurga",
      dist: "60 km · 1.5 hrs · Hill Trek",
      image: "/images/destinations/Shivanasamudra.webp",
      alt: "Savanadurga trek from Bangalore",
    },
    {
      name: "Hogenakkal",
      dist: "150 km · 3 hrs · Boat Rides",
      image: "/images/destinations/hogenakkal.webp",
      alt: "Hogenakkal falls day trip from Bangalore",
    },
  ];

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "Khushi Travels",
    url: `${SITE_URL}/`,
    logo: "https://khushitravel.in/images/khushi-tours-and-travels-logo.webp",
    image: DEFAULT_OG_IMAGE,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    sameAs: [
      "https://www.instagram.com/khushi_travels_",
      "https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/",
      "https://www.youtube.com/@sureshj1169",
    ],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...BUSINESS_GEO,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Khushi Travels offer tour packages from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer custom tour packages from Bangalore across India, pilgrimage, hill stations, beaches, heritage, wildlife, and adventure destinations. We handle transport (own fleet 9-50 seater), hotel booking (Gold & Platinum tiers), and tour guide arrangements (Platinum, for 15+ groups). We've served 500+ tour customers since 2018.",
        },
      },
      {
        "@type": "Question",
        name: "What pilgrimage tour packages from Bangalore do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer pilgrimage tour packages from Bangalore to Tirupati (₹9,500, 2D/1N), Shirdi (₹22,000, 4D/3N), Palani (₹12,500, 3D/2N), Dharmasthala (₹8,500, 2D/1N), Rameswaram (₹18,500, 4D/3N), Srisailam (₹14,500, 3D/2N), Puri Jagannath (₹35,000, 5D/4N), and Varanasi (₹38,000, 5D/4N). All packages include comfortable vehicle, professional driver, and fuel.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hotel booking with your tour packages from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Gold package includes vehicle + hotel booking (3★ or 4★ verified hotels). Our Platinum package includes vehicle + hotel + dedicated tour guide for groups of 15+. All hotels are pre-verified for quality, cleanliness, and location. The Silver package is transport-only if you already have accommodation arranged.",
        },
      },
      {
        "@type": "Question",
        name: "What vehicles are available for tour packages from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depending on your group size, 9 seater luxury tempo traveller (Maharaja pushback seats, LED TV, USB), 12-13 seater tempo traveller (pushback seats, panoramic windows), Force Urbania (air suspension, standing height, panoramic windows), 16 seater tempo traveller, 20 seater mini bus, 35-50 seater luxury bus, and Toyota Innova Crysta for smaller groups. All 100% owned, sanitized, and GPS-tracked.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a tour from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking 7-14 days in advance for popular destinations like Coorg, Ooty, Goa, and Tirupati. During peak season (November-February), 3-4 weeks advance booking is advised for preferred hotels and vehicle availability. However, we can arrange last-minute tours with 24-48 hours notice for most destinations, just WhatsApp us.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize my tour package from Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Share your destination, travel dates, group size, budget, and preferred activities. We'll design a custom itinerary with the perfect vehicle, route, halts, meals, and accommodation, all within your budget.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 text-center"
        style={{
          backgroundImage: `url('${getAssetPath("/images/hero-bg.webp")}')`,
          backgroundPosition: "center 25%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 24, 46, 0.85) 0%, rgba(13, 27, 50, 0.72) 35%, rgba(10, 24, 46, 0.88) 72%, rgba(10, 24, 46, 0.98) 100%)",
          }}
        ></div>

        <div className="container-custom w-full relative z-10 text-center py-6 sm:py-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Breadcrumbs items={breadcrumbs} />

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a182e]/70 backdrop-blur-md rounded-full text-white/90 text-xs font-semibold tracking-wider uppercase mb-5 border border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Tour Packages from Bangalore</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight max-w-4xl mx-auto mb-5 text-balance">
              Tour Packages <span className="text-brand-amber whitespace-nowrap">from Bangalore</span> Across India
            </h1>

            {/* Supporting text */}
            <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Pilgrimage tours &middot; Hill station getaways &middot; Beach holidays &middot; Heritage trails &middot;
              Wildlife safaris &middot; Adventure trips. Complete tour packages{" "}
              <strong className="text-white font-semibold">from Bangalore</strong> with our own fleet of 9&ndash;50
              seater vehicles, verified hotel booking, and experienced tour guides for 15+ groups. 500+ tour customers
              served since 2018.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-3.5 mb-8">
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20book%20a%20tour%20package%20from%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full gradient-amber text-white font-heading font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 hover:-translate-y-0.5 transition-all"
              >
                Plan Your Tour
              </a>
              <a
                href="tel:+919901333113"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm font-heading font-bold text-sm sm:text-base hover:-translate-y-0.5 transition-all"
              >
                Call +91 99013 33113
              </a>
            </div>

            {/* Trust Indicator Row */}
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-2.5 bg-[#0a182e]/85 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/15 text-xs sm:text-[13px] text-white/90 shadow-lg max-w-full">
              <div className="inline-flex items-center gap-1.5 font-semibold">
                <span className="text-brand-amber font-bold">Since 2018</span>
                <span className="text-white/60 font-normal">Based in Bengaluru</span>
              </div>
              <div className="inline-flex items-center gap-2 text-white/80">
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" aria-hidden="true"></span>
                <span className="text-brand-amber font-semibold">Since 2018</span>
              </div>
              <div className="inline-flex items-center gap-2 text-white/80">
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" aria-hidden="true"></span>
                <span>
                  100% Own Fleet
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-white/80">
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" aria-hidden="true"></span>
                <span>
                  Hotel Booking Available
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-emerald-300 font-medium">
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" aria-hidden="true"></span>
                <span>&lt; 5 min reply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white -mt-12 relative z-20 mb-0 pb-0">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">500+</p>
              <p className="text-xs text-gray-500 mt-1">Tour customers served</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">28</p>
              <p className="text-xs text-gray-500 mt-1">Destinations from Bangalore</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">Since 2018</p>
              <p className="text-xs text-gray-500 mt-1">Serving Bengaluru</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-brand-navy text-2xl md:text-3xl">100%</p>
              <p className="text-xs text-gray-500 mt-1">Owned fleet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PILGRIMAGE TOUR CARD */}
      <section className="bg-white pt-16 pb-12" id="featured-pilgrimage">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div
              className="group relative rounded-2xl shadow-xl border border-brand-amber/35 hover:border-brand-amber/60 hover:shadow-2xl transition-all overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a365d 0%, #132244 50%, #0f1f3d 100%)" }}
            >
              <div className="relative z-10 grid md:grid-cols-[280px_1fr]">
                {/* Image panel */}
                <div className="relative min-h-[220px] md:min-h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/destinations/tirupati.webp")}
                    alt="12 Dwadasha Jyotirlinga Darshana pilgrimage tour"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a365d] via-[#1a365d]/40 to-transparent"></div>
                  <div className="absolute top-3 left-3 gradient-amber text-brand-navy text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                    Featured
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 md:top-auto md:bottom-4 md:left-4 md:right-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gradient-amber flex items-center justify-center shadow-md shrink-0">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                      <span className="text-white font-heading font-bold text-sm leading-tight">
                        Spiritual
                        <br />
                        <span className="text-brand-amber text-[10px] uppercase tracking-wider font-semibold">
                          Pilgrimage
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-7 lg:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-brand-amber bg-brand-amber/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-brand-amber/15">
                      Proposed Pilgrimage Package
                    </span>
                    <span className="w-px h-3 bg-white/10" aria-hidden="true"></span>
                    <span className="text-[10px] text-brand-amber font-semibold">
                      Proposed 25 Day Yatra &bull; Bengaluru Departure
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-0.5">
                    <Link href="/packages/pilgrimage/12-jyotirlinga-yatra/" className="hover:text-brand-amber transition-colors">
                      25 Day 12 Jyotirlinga <span className="text-brand-amber">Spiritual Yatra</span>
                    </Link>
                  </h3>
                  <p className="text-amber-200/90 text-sm font-semibold mb-3">
                    Twelve Sacred Jyotirlingas. More Sacred Destinations. One Unforgettable Journey.
                  </p>

                  <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">
                    Join Khushi Tours &amp; Travels on a proposed 25-day pilgrimage from Bengaluru, visiting India&apos;s
                    twelve revered Jyotirlingas and exploring additional spiritual destinations including Mathura,
                    Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri, subject to the final confirmed itinerary.
                  </p>

                  {/* Highlights grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">25 Days</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        Proposed Yatra
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">12</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        Jyotirlingas
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">+6</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        Sacred Sites
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">AC Volvo</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        Transport
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">3-Star</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        Deluxe Stay
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl py-2 px-1 text-center border border-white/5">
                      <span className="block text-brand-amber font-heading font-semibold text-base">Pure Veg</span>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest block leading-tight mt-0.5">
                        3-Time Food
                      </span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
                    <div>
                      <span className="text-xs uppercase font-bold text-brand-amber tracking-wider block">Pricing</span>
                      <div className="flex items-baseline gap-2.5 flex-wrap">
                        <span className="text-lg md:text-xl font-heading font-semibold text-white">₹1,49,999</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Link
                        href="/packages/pilgrimage/12-jyotirlinga-yatra/"
                        className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg gradient-amber text-brand-navy text-sm font-heading font-bold shadow-lg shadow-brand-amber/15 hover:shadow-brand-amber/30 hover:-translate-y-0.5 transition-all"
                      >
                        View Tour Details &amp; Itinerary &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Guarantees */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400">No hidden charges</span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                      Cancellation terms are confirmed with each booking
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Slider Section */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Our Fleet</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">Vehicles for Your Tour Package from Bangalore</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              All our vehicles are 100% owned, sanitized, GPS-tracked, and driven by experienced chauffeurs.
            </p>
          </div>

          <div
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "thin" }}
          >
            {fleetVehicles.map((v) => (
              <div
                key={v.name}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div
                  className="h-44 bg-gray-100 bg-center bg-cover"
                  style={{ backgroundImage: `url('${v.image}')` }}
                ></div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-brand-navy text-base">{v.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{v.desc}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="font-heading font-bold text-brand-amber text-lg">
                      {v.rate}
                      <span className="text-xs font-normal text-gray-400">{v.unit}</span>
                    </span>
                    <a
                      href={`https://wa.me/919901333113?text=${encodeURIComponent(
                        `Hi Khushi Travels, I want to book ${v.name} for tour package from Bangalore.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold bg-brand-navy hover:bg-brand-amber hover:text-brand-navy text-white px-4 py-2 rounded-full transition-all"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/best-tempo-traveller-fleet-bangalore/"
              className="inline-flex items-center gap-2 text-brand-amber font-bold text-sm hover:text-brand-navy transition-all"
            >
              View Full Fleet Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-h2 text-brand-navy mt-3">
                From Vehicle Rental to <span className="text-brand-amber">Complete Tour Packages</span> from Bangalore
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">⏱</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-navy text-lg">Started 2018, Vehicle Rental</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      Khushi Travels began as a premium vehicle rental service in Bangalore, offering luxury tempo
                      travellers, Force Urbania, and buses to groups and families across Karnataka.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-navy text-lg">Expanded 2020, Tour Packages</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      Customers wanted more, so we added complete tour packages from Bangalore with hotel booking,
                      itinerary planning, and tour guides for groups of 15+. Pilgrimage, hill stations, beaches, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">★</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-navy text-lg">Today, 500+ Tour Customers</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      We&apos;ve served over 500 tour customers from Bangalore to destinations across India, from
                      Tirupati to Goa, Coorg to Varanasi. Our team focuses on dependable group travel and clear booking support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-brand-navy text-lg mb-4">
                  Why Book Tour Packages from Bangalore with Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    100% owned fleet, 9 seater to 50 seater buses
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Verified hotel booking included in packages
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Experienced tour guides for groups of 15+
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Professional drivers, GPS tracking, 24/7 support
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Custom itineraries for families, corporate, &amp; student groups
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              Booking a Tour Package <span className="text-brand-amber">from Bangalore</span>
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Three simple steps to your perfect getaway. We handle everything, from vehicle to accommodation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mb-5 text-2xl font-heading font-bold group-hover:bg-brand-navy group-hover:text-white transition-all">
                1
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">Choose Your Tour</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Browse our destinations, pilgrimage, hill stations, beaches, heritage, wildlife, or adventure. Pick
                your favourite or tell us your preference.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mb-5 text-2xl font-heading font-bold group-hover:bg-brand-navy group-hover:text-white transition-all">
                2
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">Select Package Tier</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Choose Silver (transport only), Gold (transport + hotel), or Platinum (all-inclusive with tour guide for
                15+). We&apos;ll share a detailed quote on WhatsApp.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mb-5 text-2xl font-heading font-bold group-hover:bg-brand-navy group-hover:text-white transition-all">
                3
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-3">Enjoy Your Trip</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Relax in our luxury vehicles with professional driver. We handle the itinerary, hotel check-ins, and
                route, you just enjoy the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Filter Section */}
      <section className="bg-white section-py" id="all-packages">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Destinations</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              Tour Packages <span className="text-brand-amber">from Bangalore</span>
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Browse 28+ destinations across 6 categories. Prices are per group (up to 12 pax). All packages include
              vehicle, driver, fuel, and tolls.
            </p>
          </div>

          <TourDestinationsFilter />

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-3">
              Don&apos;t see your destination? We cover 50+ more routes from Bangalore.
            </p>
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20a%20custom%20tour%20package%20from%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber hover:bg-amber-400 text-brand-navy font-bold rounded-xl transition-all shadow-sm"
            >
              Ask for Custom Package &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Package Tiers Section */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Package Tiers</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              Choose Your Tour Package <span className="text-brand-amber">from Bangalore</span>
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Three tiers to match your needs and budget. All packages include vehicle, driver, fuel, tolls, and 24/7
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Silver */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 text-2xl">
                  🚗
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-xl mb-1">Silver</h3>
                <p className="text-sm text-gray-400 mb-4">Transport only</p>
                <p className="font-heading font-bold text-brand-navy text-2xl mb-6">
                  Best Price<span className="text-xs font-normal text-gray-400">/group</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Vehicle + driver + fuel + tolls
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    GPS-tracked, sanitized vehicle
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Professional chauffeur
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      , 
                    </span>
                    Hotel booking
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      , 
                    </span>
                    Tour guide
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20a%20Silver%20tour%20package%20from%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-amber hover:text-brand-navy text-white font-bold px-5 py-3 rounded-xl transition-all text-sm"
              >
                Get Silver Quote
              </a>
            </div>

            {/* Gold */}
            <div className="bg-brand-navy rounded-2xl p-8 shadow-xl relative text-white flex flex-col justify-between">
              <span className="absolute -top-3 right-6 bg-brand-amber text-brand-navy text-xs font-bold px-4 py-1.5 rounded-full">
                Most Popular
              </span>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-amber/20 text-brand-amber flex items-center justify-center mb-5 text-2xl">
                  🏨
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-1">Gold</h3>
                <p className="text-white/60 text-sm mb-4">Transport + Hotel</p>
                <p className="font-heading font-bold text-white text-2xl mb-6">
                  Best Value<span className="text-xs font-normal text-white/40">/group</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    Vehicle + driver + fuel + tolls
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    GPS-tracked, sanitized vehicle
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    Professional chauffeur
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    Verified hotel booking (3★/4★)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/40">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white/30 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      , 
                    </span>
                    Tour guide
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20a%20Gold%20tour%20package%20from%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-white text-brand-navy font-bold px-5 py-3 rounded-xl transition-all text-sm"
              >
                Get Gold Quote
              </a>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-brand-amber flex items-center justify-center mb-5 text-2xl">
                  👑
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-xl mb-1">Platinum</h3>
                <p className="text-sm text-gray-400 mb-4">All-inclusive</p>
                <p className="font-heading font-bold text-brand-navy text-2xl mb-6">
                  Ultimate<span className="text-xs font-normal text-gray-400">/group</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Vehicle + driver + fuel + tolls
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    GPS-tracked, sanitized vehicle
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Professional chauffeur
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Verified hotel booking (3★/4★)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    Dedicated tour guide (15+ groups)
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20a%20Platinum%20tour%20package%20from%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-amber hover:text-brand-navy text-white font-bold px-5 py-3 rounded-xl transition-all text-sm"
              >
                Get Platinum Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              Why Khushi Travels for Tour Packages <span className="text-brand-amber">from Bangalore</span>
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              What sets us apart from other tour operators in Bangalore.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-amber/10 text-brand-amber flex items-center justify-center mb-4 text-2xl">
                🚐
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">100% Owned Fleet</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every vehicle, from 9 seater tempo traveller to 50 seater bus, is owned by us. No third-party
                vehicles, no quality compromises.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-2xl">
                🏨
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">Verified Hotels</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                All hotels in our Gold and Platinum packages are pre-verified for quality, cleanliness, location, and
                guest reviews.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-2xl">
                🧭
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">Tour Guide (15+)</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Platinum package includes experienced tour guides for groups of 15+. They handle sightseeing
                coordination, tickets, and local knowledge.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 text-2xl">
                📞
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-base mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We&apos;re available 24/7 on WhatsApp and phone. Need help during your tour? One message and we&apos;re
                there. Average reply time: under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Getaways Section */}
      <section className="bg-gray-50 section-py">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">Weekend Getaways</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">
              Quick Weekend Trips <span className="text-brand-amber">from Bangalore</span>
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Short drives for quick escapes. Perfect for family outings, student trips, and last-minute plans.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weekendTrips.map((trip) => (
              <div
                key={trip.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex"
              >
                <div className="w-24 h-24 shrink-0 bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(trip.image)}
                    alt={trip.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-brand-navy text-sm">{trip.name}</h3>
                  <p className="text-xs text-gray-400">{trip.dist}</p>
                  <a
                    href={`https://wa.me/919901333113?text=${encodeURIComponent(
                      `Hi Khushi Travels, I want to book a vehicle to ${trip.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-amber hover:text-brand-navy mt-1 inline-block"
                  >
                    Book &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="gradient-amber section-py text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-h2 font-bold mb-4">
            Ready to Book Your Tour Package from Bangalore?
          </h2>
          <p className="text-body text-white/90 mb-8">
            Tell us your destination, group size, dates, and budget. We&apos;ll create a custom itinerary and send a
            quote in 5 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20book%20a%20tour%20package%20from%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-brand-navy font-heading font-bold shadow-xl hover:-translate-y-1 transition-all"
            >
              Get Package Details
            </a>
            <a
              href="tel:+919901333113"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-white/30 text-white font-heading font-bold hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white section-py">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-heading text-h2 text-brand-navy mt-3">Tour Packages from Bangalore, FAQs</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mt-4">
              Everything you need to know about booking tour packages from Bangalore with Khushi Travels.
            </p>
          </div>
          <div className="space-y-3">
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm" open>
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>Does Khushi Travels offer tour packages from Bangalore?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  Yes. We offer custom tour packages <strong>from Bangalore</strong> across India, pilgrimage, hill
                  stations, beaches, heritage, wildlife, and adventure destinations. We handle transport (own fleet 9-50
                  seater), hotel booking (Gold &amp; Platinum tiers), and tour guide arrangements (Platinum, for 15+
                  groups). We&apos;ve served <strong>500+ tour customers</strong> since 2018.
                </p>
              </div>
            </details>
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>What pilgrimage tour packages from Bangalore do you offer?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  We offer pilgrimage tour packages from Bangalore to, <strong>Tirupati</strong> (₹9,500, 2D/1N),{" "}
                  <strong>Shirdi</strong> (₹22,000, 4D/3N), <strong>Palani</strong> (₹12,500, 3D/2N),{" "}
                  <strong>Dharmasthala</strong> (₹8,500, 2D/1N), <strong>Rameswaram</strong> (₹18,500, 4D/3N),{" "}
                  <strong>Srisailam</strong> (₹14,500, 3D/2N), <strong>Puri Jagannath</strong> (₹35,000, 5D/4N), and{" "}
                  <strong>Varanasi</strong> (₹38,000, 5D/4N). All packages include comfortable vehicle, professional
                  driver, and fuel.
                </p>
              </div>
            </details>
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>Do you provide hotel booking with your tour packages from Bangalore?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  Yes. Our <strong>Gold package</strong> includes vehicle + hotel booking (3★ or 4★ verified hotels). Our{" "}
                  <strong>Platinum package</strong> includes vehicle + hotel + dedicated tour guide for groups of 15+.
                  All hotels are pre-verified for quality, cleanliness, and location. The Silver package is
                  transport-only if you already have accommodation arranged.
                </p>
              </div>
            </details>
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>What vehicles are available for tour packages from Bangalore?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  Depending on your group size, <strong>9 seater luxury tempo traveller</strong> (Maharaja pushback
                  seats, LED TV, USB), <strong>12-13 seater tempo traveller</strong> (pushback seats, panoramic
                  windows), <strong>Force Urbania</strong> (air suspension, standing height, panoramic windows),{" "}
                  <strong>16 seater tempo traveller</strong>, <strong>20 seater mini bus</strong>,{" "}
                  <strong>35-50 seater luxury bus</strong>, and <strong>Toyota Innova Crysta</strong> for smaller
                  groups. All 100% owned, sanitized, and GPS-tracked.
                </p>
              </div>
            </details>
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>How far in advance should I book a tour from Bangalore?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  We recommend booking <strong>7-14 days in advance</strong> for popular destinations like Coorg, Ooty,
                  Goa, and Tirupati. During peak season (November-February), <strong>3-4 weeks advance booking</strong>{" "}
                  is advised for preferred hotels and vehicle availability. However, we can arrange last-minute tours
                  with <strong>24-48 hours notice</strong> for most destinations, just WhatsApp us.
                </p>
              </div>
            </details>
            <details className="faq-item bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between text-gray-800 font-heading font-bold text-base gap-4 cursor-pointer select-none">
                <span>Can I customize my tour package from Bangalore?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <div className="mt-4 text-body text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <p>
                  Absolutely. Share your <strong>destination, travel dates, group size, budget, and preferred
                  activities</strong>. We&apos;ll design a custom itinerary with the perfect vehicle, route, halts,
                  meals, and accommodation, all within your budget.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Popular Destinations Link Block */}
      <section className="bg-gray-50 py-10 border-t border-gray-100">
        <div className="container-custom max-w-5xl">
          <h3 className="text-xs text-gray-400 font-semibold uppercase tracking-widest text-center mb-6">
            Popular Tour Destinations from Bangalore
          </h3>
          <div className="mx-auto text-center text-sm leading-relaxed text-gray-600">
            <p>
              <span className="font-semibold text-brand-navy">Pilgrimage:</span> Tirupati | Shirdi | Palani |
              Dharmasthala | Rameswaram | Srisailam | Puri Jagannath | Varanasi
            </p>
            <p className="mt-2">
              <span className="font-semibold text-brand-navy">Hill Stations:</span> Coorg | Ooty | Chikmagalur |
              Wayanad | Kodaikanal
            </p>
            <p className="mt-2">
              <span className="font-semibold text-brand-navy">Beaches:</span> Goa | Pondicherry | Gokarna | Mangalore
            </p>
            <p className="mt-2">
              <span className="font-semibold text-brand-navy">Heritage:</span> Mysore | Hampi | Belur &amp; Halebidu |
              Badami &amp; Aihole
            </p>
            <p className="mt-2">
              <span className="font-semibold text-brand-navy">Wildlife:</span> Kabini | Bandipur | Dandeli
            </p>
            <p className="mt-2">
              <span className="font-semibold text-brand-navy">Adventure:</span> Sakleshpur | Kudremukh | Skandagiri |
              Kunti Betta | Coorg Trekking
            </p>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
