import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";
import { DEFAULT_OG_IMAGE, getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Khushi Travels Bangalore",
  description:
    "Review our privacy practices regarding customer data, contact inquiries, and payment security at Khushi Tours & Travels Bangalore.",
  alternates: {
    canonical: "https://khushitravel.in/privacy/",
  },
  openGraph: {
    type: "website",
    url: "https://khushitravel.in/privacy/",
    siteName: "Khushi Tours and Travels",
    title: "Privacy Policy | Khushi Travels Bangalore",
    description: "Privacy Policy of Khushi Tours & Travels Bangalore for vehicle rentals and tour bookings.",
    images: [getOpenGraphImage("Khushi Travels privacy policy")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Khushi Travels Bangalore",
    description: "Privacy Policy of Khushi Tours & Travels Bangalore.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy/" },
  ];

  
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://khushitravel.in/privacy/",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section
        className="relative flex min-h-[100svh] items-center pt-24 pb-12 sm:pt-28 sm:pb-14 text-center overflow-hidden"
        style={{
          background:
            `linear-gradient(to bottom, rgba(26,54,93,0.92), rgba(26,54,93,0.85), rgba(26,54,93,0.98)), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom max-w-4xl relative z-10">
          <Breadcrumbs items={breadcrumbs} />

          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-3">
            Data Protection &amp; Trust
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-6 text-balance">
            Privacy <span className="text-brand-amber">Policy</span>
          </h1>

          <p className="text-white/80 text-base max-w-2xl mx-auto font-normal">
            Your privacy is of paramount importance to Khushi Tours &amp; Travels.
            Here is how we safeguard your personal information.
          </p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-left space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                1. Information We Collect
              </h2>
              <p>
                Information you provide for an enquiry or booking may include
                your name, phone number, email address, pickup and destination,
                travel date, vehicle preference, and passenger count. The site
                also receives basic technical information needed to deliver and
                protect the pages you visit.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                2. How Your Data Is Used
              </h2>
              <p>
                We use enquiry details to respond to questions, prepare
                quotations, coordinate trips, and meet applicable record keeping
                obligations. This website does not collect card or bank payment
                details through its booking enquiry forms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                3. Sharing, WhatsApp &amp; Analytics
              </h2>
              <p>
                We do not sell customer contact details. If you choose to contact
                us through WhatsApp, that service receives the information you
                submit under its own privacy terms. Optional site measurement
                tools are loaded only after you accept cookies. If you deny,
                those tools are not started by this site.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                4. Cookies and your choice
              </h2>
              <p>
                Essential browser storage remembers your cookie choice.
                Analytics or measurement tags are not loaded unless you choose
                to accept. You can reopen cookie settings from the footer. You
                can also clear saved site data through your browser settings.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                5. Data access and contact
              </h2>
              <p>
                For questions about personal information or to request access or
                deletion where applicable, contact us at{" "}
                <a
                  href="mailto:info@khushitravel.in"
                  className="text-brand-amber font-semibold hover:underline"
                >
                  info@khushitravel.in
                </a>{" "}
                or call +91 99013 33113.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
