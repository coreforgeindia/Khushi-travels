import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import { getAssetPath } from "@/lib/assets";
import { DEFAULT_OG_IMAGE, getOpenGraphImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions | Khushi Travels Bangalore",
  description:
    "Review booking conditions, payment terms, and vehicle rental policies for Khushi Tours & Travels tempo traveller services in Bangalore.",
  alternates: {
    canonical: "https://khushitravel.in/terms/",
  },
  openGraph: {
    type: "website",
    url: "https://khushitravel.in/terms/",
    siteName: "Khushi Tours and Travels",
    title: "Terms & Conditions | Khushi Travels Bangalore",
    description: "Terms & Conditions of Khushi Tours & Travels Bangalore for vehicle rentals and tour bookings.",
    images: [getOpenGraphImage("Khushi Travels booking terms and conditions")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Khushi Travels Bangalore",
    description: "Terms & Conditions of Khushi Tours & Travels Bangalore.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions", href: "/terms/" },
  ];

  
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: "https://khushitravel.in/terms/",
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
            Rental Agreement &amp; Policies
          </span>

          <h1 className="font-heading text-h1 text-white font-bold mb-6 text-balance">
            Terms &amp; <span className="text-brand-amber">Conditions</span>
          </h1>

          <p className="text-white/80 text-base max-w-2xl mx-auto font-normal">
            Please read these terms carefully before confirming your vehicle hire
            or package reservation with Khushi Tours &amp; Travels.
          </p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-left space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                1. Booking &amp; Confirmation
              </h2>
              <p>
                The written quotation or booking confirmation states the advance
                amount, balance due, trip dates, vehicle, inclusions, and any
                applicable taxes or additional charges. A reservation is confirmed
                only after the stated advance is received and the booking details
                are acknowledged by Khushi Travels.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                2. Kilometre Calculation &amp; Toll Charges
              </h2>
              <p>
                The quotation specifies the trip route, pickup and drop points,
                billing basis, and any minimum distance or duty conditions. Tolls,
                parking, interstate taxes, permits, and other excluded charges are
                payable as stated in the quotation or booking confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                3. Driver Duty &amp; Allowances (Batta)
              </h2>
              <p>
                Driver duty hours, night halt allowances, and any applicable extra
                charges are shared before booking. Passengers must follow the
                driver's reasonable safety instructions and applicable traffic
                regulations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                4. Cancellation &amp; Refund Policy
              </h2>
              <p>
                Cancellation requests must be sent to Khushi Travels using the
                contact details on this site. Any cancellation charge, refund
                amount, and refund timing depend on the written terms for that
                specific booking and will be confirmed by our team. No universal
                free cancellation period or refund amount is promised on this page.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                5. Vehicle Substitution &amp; Unforeseen Delays
              </h2>
              <p>
                In the rare event of mechanical malfunction or unexpected road
                events, Khushi Travels will contact the customer to discuss a
                suitable alternative or revised schedule. Any change to the vehicle,
                itinerary, or service will be confirmed with the customer.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                6. Tour packages and itinerary changes
              </h2>
              <p>
                Package inclusions, accommodation, meals, sightseeing, and
                departure details are those listed in the customer&apos;s written
                confirmation. Actual schedules may need to change due to weather,
                traffic, access restrictions, or other operational conditions.
                Optional services are not included unless the confirmation says so.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                7. Passenger responsibilities
              </h2>
              <p>
                Customers are responsible for providing accurate passenger,
                pickup, and contact details, arriving at the confirmed pickup
                point on time, and securing their personal belongings. Share
                accessibility needs, child seat requirements, or other special
                requests before booking so availability can be confirmed.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-navy mb-3">
                8. Contact and applicable law
              </h2>
              <p>
                Questions about a booking can be sent to{" "}
                <a
                  href="mailto:info@khushitravel.in"
                  className="text-brand-amber font-semibold hover:underline"
                >
                  info@khushitravel.in
                </a>{" "}
                or +91 99013 33113. These terms are subject to applicable Indian
                law. Any booking specific written terms take precedence where
                they address the same service detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
