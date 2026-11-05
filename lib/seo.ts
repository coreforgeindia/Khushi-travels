/**
 * Khushi Tours and Travels, Centralized SEO Configuration & Schema Generators
 * Production URL: https://khushitravel.in
 * Compatible with Next.js App Router and GitHub Pages static hosting.
 */

export const SITE_URL = "https://khushitravel.in";
export const SITE_NAME = "Khushi Travels";
export const SITE_TAGLINE = "Bangalore's Premier Luxury Tempo Traveller & Tour Operator";
export const SITE_PHONE = "+919901333113";
export const SITE_PHONE_DISPLAY = "+91 99013 33113";
export const SITE_EMAIL = "info@khushitravel.in";

export const BUSINESS_ADDRESS = {
  streetAddress:
    "Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidyaranyapura, Virupakshapura",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560097",
  addressCountry: "IN",
};

export const BUSINESS_GEO = {
  latitude: 13.0624156,
  longitude: 77.5742089,
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/og/hero-bg.webp`;
export const LOGO_IMAGE = `${SITE_URL}/images/khushi-tours-and-travels-logo.webp`;

export function getOpenGraphImage(
  alt: string,
  url: string = DEFAULT_OG_IMAGE
) {
  return {
    url,
    width: 1200,
    height: 630,
    alt,
  };
}

export function createSeoTitle(title: string): string {
  const suffix = " | Khushi Travels";
  const base = title.replace(/\s*\|\s*Khushi Travels$/i, "").trim();
  const maxBaseLength = 60 - suffix.length;
  if (base.length <= maxBaseLength) return `${base}${suffix}`;
  const shortened = base.slice(0, maxBaseLength).replace(/\s+\S*$/, "").trim();
  return `${shortened}${suffix}`;
}

export function limitMetaDescription(description: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length <= 155) return normalized;
  return normalized.slice(0, 155).replace(/\s+\S*$/, "").trim();
}

/**
 * Returns a normalized canonical URL with trailing slash
 */
export function getCanonicalUrl(pathname: string = ""): string {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

/**
 * Returns an absolute URL for OpenGraph images
 */
export function getAbsoluteImageUrl(imagePath?: string): string {
  if (!imagePath) return DEFAULT_OG_IMAGE;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const clean = imagePath.replace(/^\/+/, "");
  // If already prefixed with KhushiTravels, remove it to avoid double prefix
  const unPrefixed = clean.replace(/^KhushiTravels\//, "");
  return `${SITE_URL}/${unPrefixed}`;
}

/**
 * Builds standard BreadcrumbList structured data (JSON-LD)
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : getCanonicalUrl(item.url),
    })),
  };
}

/**
 * Builds LocalBusiness + TravelAgency structured data (JSON-LD)
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Khushi Travels Bangalore",
    image: LOGO_IMAGE,
    logo: LOGO_IMAGE,
    description:
      "Premier luxury tempo traveller rental service and tour operator in Bangalore. 100% owned fleet from 9 to 50 seaters including Maharaja seats, Force Urbania, deluxe buses, outstation packages, and all-India pilgrimage yatras.",
    url: `${SITE_URL}/`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    sameAs: [
      "https://www.instagram.com/khushi_travels_",
      "https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/",
      "https://www.youtube.com/@sureshj1169",
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...BUSINESS_GEO,
    },
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    foundingDate: "2018-08-15",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "15" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Khushi Travels Rental & Tour Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Tempo Traveller Rentals",
          itemListElement: [
            { "@type": "Offer", name: "9 Seater Luxury Tempo Traveller" },
            { "@type": "Offer", name: "12-13 Seater Tempo Traveller" },
            { "@type": "Offer", name: "16 Seater Maharaja Tempo Traveller" },
            { "@type": "Offer", name: "Force Urbania Luxury Van" },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Holiday & Spiritual Packages",
          itemListElement: [
            { "@type": "Offer", name: "25 Day 12 Jyotirlinga Spiritual Yatra" },
            { "@type": "Offer", name: "Kashi Triveni Ayodhya Yatra" },
            { "@type": "Offer", name: "South India Temple Circuit" },
            { "@type": "Offer", name: "Outstation Weekend Tours from Bangalore" },
          ],
        },
      ],
    },
  };
}
