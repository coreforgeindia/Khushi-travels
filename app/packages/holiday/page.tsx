import React from "react";
import type { Metadata } from "next";
import { NORMAL_PACKAGES } from "@/data/packages";
import PackageBreadcrumbs from "@/components/packages/PackageBreadcrumbs";
import PackageCategoryHeader from "@/components/packages/PackageCategoryHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import PackageEnquiryCTA from "@/components/packages/PackageEnquiryCTA";
import { getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Holiday Packages from Bangalore | Khushi Travels",
  description:
    "Book Bangalore family holidays, temple visits and scenic tours to Tirupati, Coorg, Ooty, Mysore and more in a private AC Tempo Traveller.",
  alternates: {
    canonical: "https://khushitravel.in/packages/holiday/",
  },
  openGraph: {
    title: "Holiday Packages from Bangalore | Khushi Travels",
    description:
      "Book Bangalore family holidays, temple visits and scenic tours to Tirupati, Coorg, Ooty, Mysore and more in a private AC Tempo Traveller.",
    url: "https://khushitravel.in/packages/holiday/",
    siteName: "Khushi Travels",
    type: "website",
    images: [
      getOpenGraphImage(
        "Holiday packages from Bangalore",
        "https://khushitravel.in/images/optimized/og/mysore.webp"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Packages from Bangalore | Khushi Travels",
    description:
      "Book Bangalore family holidays, temple visits and scenic tours to Tirupati, Coorg, Ooty, Mysore and more in a private AC Tempo Traveller.",
    images: ["https://khushitravel.in/images/optimized/og/mysore.webp"],
  },
};

export default function NormalPackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Holiday Packages from Bangalore",
    description: "Family holidays and regional tours from Bangalore by Khushi Travels.",
    itemListElement: NORMAL_PACKAGES.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.title,
      url: `https://khushitravel.in/packages/holiday/${pkg.slug}/`,
      description: pkg.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50">
        <PackageCategoryHeader
          eyebrow="Family Holidays and Regional Tours"
          title="Holiday Packages"
          description="Handpicked holiday getaways, heritage tours, and hill station excursions designed for families, corporate teams, and travel groups. Enjoy sanitized AC luxury Tempo Travellers and transparent per-km tariffs."
          activeCategory="normal"
          count={NORMAL_PACKAGES.length}
        />

        <div className="container-custom py-8">
          <PackageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "/packages/" },
              { label: "Holiday Packages", href: "/packages/holiday/" },
            ]}
          />

          <div className="mt-6 mb-16">
            <PackageGrid packages={NORMAL_PACKAGES} />
          </div>

          <div className="mb-16">
            <PackageEnquiryCTA
              packageTitle="Custom South India Tour"
              duration="1 to 5 Days"
            />
          </div>
        </div>
      </main>
    </>
  );
}
