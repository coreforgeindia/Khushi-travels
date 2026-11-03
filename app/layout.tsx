import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  buildLocalBusinessSchema,
} from "@/lib/seo";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../public/assets/fonts/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNSg.ttf",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KUnNSg.ttf",
      weight: "800",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const inter = localFont({
  src: [
    {
      path: "../public/assets/fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf",
      weight: "700",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tempo Traveller Rental Bangalore | Khushi Travels",
    template: "%s",
  },
  applicationName: SITE_NAME,
  description:
    "Hire luxury tempo travellers, Force Urbania and buses in Bangalore. Browse group transport for local trips, holidays and pilgrimages.",
  keywords: [
    "luxury tempo traveller Bangalore",
    "tempo traveller rent Bangalore",
    "travel agency in Bangalore",
    "tour operators in Bangalore",
    "holiday packages from Bangalore",
    "family tour packages from Bangalore",
    "outstation cab booking Bangalore",
    "pilgrimage tour operators Bangalore",
    "9 seater tempo traveller",
    "12 seater tempo traveller",
    "13 seater tempo traveller",
    "16 seater tempo traveller",
    "Force Urbania rental Bangalore",
    "Maharaja seats tempo traveller",
    "Khushi Travels",
    "Khushi Tours and Travels",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Luxury Tempo Traveller Rental in Bangalore | Khushi Travels",
    description:
      "Premium tempo travellers, Force Urbania and luxury buses for family trips, pilgrimages, and group outstation travel from Bangalore. 100% owned fleet.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Khushi Tours & Travels Luxury Fleet Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Tempo Traveller in Bangalore | 9, 12, 16 Seater | Khushi Travels",
    description:
      "Rent luxury tempo travellers, Force Urbania & deluxe buses in Bangalore with Khushi Travels. Premium pushback seats, professional drivers & transparent rates.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: "Bangalore's Premier Luxury Tempo Traveller & Tour Operator",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KT5GXVSC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());",
          }}
        />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/hero-bg.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        {/* Global Floating WhatsApp Button */}
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
