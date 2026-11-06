import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import {
  INVALID_LANDING_PAGE_SLUGS,
  LANDING_PAGES,
  getLandingPage,
  getLandingPageUrl,
} from "@/lib/landing-pages";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

interface LandingPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

const HOME_URL = "/";
const HUB_SLUG = "best-travel-agency-karnataka";
const BANGALORE_SLUG = "best-travel-agency-bangalore-karnataka";

function getLocationName(page: (typeof LANDING_PAGES)[number]): string {
  if (page.slug === BANGALORE_SLUG) return "Bangalore";
  if (page.tier === "1") return "Karnataka";

  if (page.tier === "3") {
    return page.name
      .replace(/,\s*Bengaluru$/i, "")
      .replace(/\bRbi\b/g, "RBI")
      .replace(/\bHsr\b/g, "HSR")
      .replace(/\bJp\b/g, "JP")
      .replace(/\bKr\b/g, "KR")
      .replace(/\bN\s+R\b/g, "N R")
      .replace(/\bT\s+R\b/g, "T R")
      .replace(/\bS\s+G\b/g, "S G")
      .replace(/\bV\s+V\b/g, "V V")
      .replace(/\bL\s+B\b/g, "L B")
      .replace(/\bG\s+M\b/g, "G M")
      .replace(/\bK\s+R\b/g, "K R");
  }

  const districtNames: Record<string, string> = {
    "best-travel-agency-mangalore-karnataka": "Mangalore (Dakshina Kannada)",
    "best-travel-agency-coorg-karnataka": "Coorg (Kodagu)",
    "best-travel-agency-karwar-karnataka": "Karwar (Uttara Kannada)",
    "best-travel-agency-tumkur-karnataka": "Tumkur (Tumakuru)",
    "best-travel-agency-bangalore-rural-karnataka": "Bangalore Rural",
  };
  return districtNames[page.slug] ?? page.name;
}

function getBreadcrumbs(page: (typeof LANDING_PAGES)[number], locationName: string) {
  if (page.tier === "1") {
    return [{ label: "Home", href: HOME_URL }, { label: "Karnataka", href: getLandingPageUrl(page.slug) }];
  }

  const items = [
    { label: "Home", href: HOME_URL },
    { label: "Karnataka", href: getLandingPageUrl(HUB_SLUG) },
  ];

  if (page.tier === "3") {
    items.push({
      label: "Bangalore",
      href: getLandingPageUrl(BANGALORE_SLUG),
    });
  }

  items.push({ label: locationName, href: getLandingPageUrl(page.slug) });
  return items;
}

function getNearbyPages(page: (typeof LANDING_PAGES)[number]) {
  const siblings = LANDING_PAGES.filter(
    (candidate) =>
      candidate.tier === page.tier &&
      candidate.slug !== page.slug &&
      candidate.parentSlug === page.parentSlug
  );
  const currentIndex = siblings.findIndex((candidate) => candidate.slug > page.slug);
  const start = currentIndex < 0 ? Math.max(0, siblings.length - 5) : Math.max(0, currentIndex - 2);
  return siblings.slice(start, start + 5);
}

function buildFaqs(locationName: string) {
  return [
    {
      question: `Can I request a Tempo Traveller pickup in ${locationName}?`,
      answer:
        `Contact Khushi Travels with your pickup point, travel dates, destination, and group size. The team will confirm whether pickup from ${locationName} can be arranged and which vehicles are available.`,
    },
    {
      question: `What vehicles can I ask about for a trip from ${locationName}?`,
      answer:
        "Khushi Travels offers chauffeur-driven Tempo Travellers and luxury buses. Share your group size and luggage requirements to discuss a suitable option.",
    },
    {
      question: `How do I get a travel quote for ${locationName}?`,
      answer:
        "Call +91 99013 33113 or message on WhatsApp with your pickup point, destination, dates, group size, and preferred vehicle. The team will confirm availability and provide a trip-specific quote.",
    },
    {
      question: `Can I book group travel for a pilgrimage or company trip?`,
      answer:
        "Yes. Khushi Travels arranges chauffeur-driven group travel for family trips, pilgrimages, corporate tours, and other group journeys. Contact the team to discuss your itinerary.",
    },
    {
      question: `Where can I check Tempo Traveller rental pricing?`,
      answer:
        "Visit the pricing page or contact Khushi Travels for a quote based on your route and travel details. No fixed price is quoted on this location page.",
    },
  ];
}

function trimToWordLimit(value: string, limit: number): string {
  if (value.length <= limit) return value;
  return value
    .slice(0, limit + 1)
    .replace(/\s+\S*$/, "")
    .replace(/[,\s]+$/, "")
    .trim();
}

export function generateStaticParams() {
  if (INVALID_LANDING_PAGE_SLUGS.length > 0) {
    console.warn(
      `Omitting malformed landing page slug(s): ${INVALID_LANDING_PAGE_SLUGS.join(", ")}`
    );
  }
  return LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: LandingPageProps): Metadata {
  const page = getLandingPage(params.slug);
  if (!page) return { title: "Page Not Found" };

  const locationName = getLocationName(page);
  const h1Location = page.tier === "3" ? `${locationName}, Bengaluru` : locationName;
  const titlePrefix = "Tempo Traveller in ";
  const titleSuffix = " | Khushi Travels";
  const titleLocation = trimToWordLimit(
    h1Location,
    60 - titlePrefix.length - titleSuffix.length
  );
  const title = `${titlePrefix}${titleLocation}${titleSuffix}`;
  const description = trimToWordLimit(
    `Request chauffeur-driven Tempo Traveller or luxury bus hire in ${h1Location}. 100% owned, GPS-monitored fleet for group trips. Call +91 99013 33113.`,
    155
  );
  const canonical = `${SITE_URL}${getLandingPageUrl(page.slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function LocationLandingPage({ params }: LandingPageProps) {
  const page = getLandingPage(params.slug);
  if (!page) notFound();

  const locationName = getLocationName(page);
  const pageLocation = page.tier === "3" ? `${locationName}, Bengaluru` : locationName;
  const breadcrumbs = getBreadcrumbs(page, pageLocation);
  const faqs = buildFaqs(pageLocation);
  const childPages =
    page.slug === BANGALORE_SLUG
      ? LANDING_PAGES.filter((candidate) => candidate.tier === "3")
      : page.tier === "1"
        ? LANDING_PAGES.filter((candidate) => candidate.tier === "2")
        : [];
  const relatedPages = getNearbyPages(page);
  const waMessage = encodeURIComponent(
    `Hi Khushi Travels, please share a quote for a group trip starting in ${pageLocation}.`
  );

  return (
    <>
      <section
        className="relative overflow-hidden bg-brand-navy py-14 pt-28 text-white sm:py-20 sm:pt-32"
        style={{
          background:
            "linear-gradient(115deg, rgba(26,54,93,.96), rgba(26,54,93,.78)), url('/images/hero-bg.webp') center/cover",
        }}
      >
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-amber-400">
              Khushi Travels · Serving since 2018
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Chauffeur-driven Tempo Travellers and luxury buses for family trips,
              pilgrimages, corporate tours, and group travel. Ask us to confirm
              pickup availability for your location and dates.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/919901333113?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-amber inline-flex min-h-12 items-center justify-center rounded-full px-7 font-heading text-sm font-bold text-[#111]"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919901333113"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 font-heading text-sm font-bold text-white"
              >
                Call +91 99013 33113
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-slate-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-3 py-5 text-center text-xs font-semibold text-brand-navy sm:grid-cols-4 sm:text-sm">
          <span>Since 2018</span>
          <span>100% Owned Fleet</span>
          <span>GPS Monitored</span>
          <span>Chauffeur Driven</span>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-base leading-8 text-slate-600">
            Planning group travel from {pageLocation}? Khushi Travels is a
            Bengaluru-based operator offering a 100% owned, GPS-monitored fleet
            with chauffeur-driven vehicles for family outings, pilgrimage
            journeys, corporate tours, and group travel. Share your pickup point,
            destination, travel dates, and group size so the team can confirm
            whether pickup from {locationName} can be arranged. Vehicle
            availability and a trip-specific quote are confirmed before booking;
            contact us for details rather than relying on a generic online
            estimate.
          </p>
        </div>
      </section>

      <section className="section-py bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-amber">
              Choose for your group
            </p>
            <h2 className="font-heading text-h2 font-bold text-brand-navy">
              Fleet options for trips from {locationName}
            </h2>
            <p className="mt-3 text-gray-600">
              Ask about Tempo Traveller seating options and luxury buses. The
              right vehicle depends on your group size, luggage, and itinerary.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                name: "Luxury Tempo Traveller",
                detail: "Ask about 9, 12, 14, and 16 seater options for group travel.",
              },
              {
                name: "Luxury Bus",
                detail: "A chauffeur-driven option for larger family, pilgrimage, and corporate groups.",
              },
            ].map((vehicle) => (
              <article
                key={vehicle.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  {vehicle.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {vehicle.detail}
                </p>
                <Link
                  href="/best-tempo-traveller-fleet-bangalore/"
                  className="mt-5 inline-flex font-semibold text-brand-navy underline decoration-amber-400 underline-offset-4"
                >
                  Explore the fleet
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="font-heading text-h2 font-bold text-brand-navy">
              Plan a group trip
            </h2>
            <p className="mt-3 text-gray-600">
              Browse route guides from Bengaluru, then confirm a pickup plan
              with Khushi Travels.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Mysore", "/routes/bangalore-to-mysore-tempo-traveller/"],
              ["Coorg", "/routes/bangalore-to-coorg-tempo-traveller/"],
              ["Ooty", "/routes/bangalore-to-ooty-tempo-traveller/"],
              ["Tirupati", "/routes/bangalore-to-tirupati-tempo-traveller/"],
              ["Chikmagalur", "/routes/bangalore-to-chikmagalur-tempo-traveller/"],
              ["Pondicherry", "/routes/bangalore-to-pondicherry-tempo-traveller/"],
            ].map(([destination, href]) => (
              <Link
                key={destination}
                href={href}
                className="rounded-xl border border-slate-200 px-5 py-4 font-semibold text-brand-navy transition hover:border-amber-400 hover:bg-amber-50"
              >
                Bengaluru to {destination} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-gray-50">
        <div className="container-custom grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-heading text-h2 font-bold text-brand-navy">
              Get a trip-specific quote for {locationName}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Rental depends on your route and travel details. Contact the team
              to confirm availability and pricing—no prices are assumed on this
              page.
            </p>
          </div>
          <Link
            href="/tempo-traveller-rent-price-bangalore/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-navy px-7 font-bold text-white transition hover:bg-brand-amber hover:text-brand-navy"
          >
            View pricing information
          </Link>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom">
          <h2 className="text-center font-heading text-h2 font-bold text-brand-navy">
            Why book with Khushi Travels?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Operating since 2018",
              "100% owned fleet",
              "GPS-monitored vehicles",
              "Chauffeur-driven travel",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-100 bg-gray-50 p-5 text-center font-semibold text-brand-navy"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {(childPages.length > 0 || relatedPages.length > 0) && (
        <section className="section-py bg-gray-50">
          <div className="container-custom">
            <h2 className="font-heading text-h2 font-bold text-brand-navy">
              {childPages.length > 0
                ? page.tier === "1"
                  ? "Explore Karnataka districts"
                  : "Bengaluru ward and locality pages"
                : page.tier === "3"
                  ? "Explore more Bengaluru areas"
                  : "Explore more Karnataka districts"}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(childPages.length > 0 ? childPages : relatedPages).map((child) => (
                <Link
                  key={child.slug}
                  href={getLandingPageUrl(child.slug)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:border-amber-400"
                >
                  {getLocationName(child)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQAccordion
        items={faqs}
        title={`Travel FAQs for ${pageLocation}`}
        subtitle="Share your route and travel details to confirm pickup availability, vehicle options, and a quote."
      />

      <section className="gradient-amber py-12 text-center text-[#111]">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Planning a group trip from {locationName}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl">
            Contact Khushi Travels to discuss your pickup, dates, group size, and
            destination.
          </p>
          <a
            href={`https://wa.me/919901333113?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-navy px-7 font-bold text-white"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
