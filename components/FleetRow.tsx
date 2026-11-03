import React from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export default function FleetRows() {
  return (
    <section id="fleet" className="bg-gray-50 section-py overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 sm:mb-12 md:mb-16 lg:mb-20 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading text-h1 text-brand-navy mb-4 md:mb-6">
              Elite Collection
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Choose from our wide range of premium vehicles, meticulously
              maintained for your ultimate comfort.
            </p>
          </div>
          <Link
            href="/best-tempo-traveller-fleet-bangalore/"
            className="text-brand-navy font-bold flex items-center gap-2 hover:text-brand-amber transition-colors"
          >
            View All Fleet &rarr;
          </Link>
        </div>

        {/* Row 1: Tempo Traveller */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-32">
          <div className="lg:w-1/2 order-2 lg:order-1 text-left">
            <span className="text-brand-amber font-bold tracking-wider uppercase text-sm">
              7 to 22 Seaters
            </span>
            <h3 className="font-heading text-h2 font-bold text-brand-navy mt-2 mb-4 md:mb-6">
              Luxury Tempo Traveller with Maharaja Seats
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-base md:text-lg">
              Experience the gold standard of group travel. Our{" "}
              <strong className="font-bold text-brand-navy">
                luxury tempo travellers in Bangalore
              </strong>{" "}
              feature Maharaja pushback seats, individual AC vents, LED TV, and
              premium interiors. Ideal for family outings, pilgrimage tours, and
              corporate trips.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Our vehicles are equipped with{" "}
              <strong className="font-bold text-brand-navy">
                Maharaja pushback seats
              </strong>
              ,{" "}
              <strong className="font-bold text-brand-navy">
                individual AC vents
              </strong>
              , and{" "}
              <strong className="font-bold text-brand-navy">
                advanced entertainment systems
              </strong>{" "}
              for a seamless journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Maharaja Seats</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    1x1 configuration for max comfort.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">On-Time Service</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Punctual pickups and drops.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/fleet/12-14-seater-tempo-traveller-bangalore/"
              className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-amber hover:text-brand-navy transition-all inline-block"
            >
              Explore Tempos
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6">
            <div className="contents sm:block space-y-0 sm:space-y-4 translate-y-0 sm:translate-y-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-10-seater-tempo-traveller-bangalore-1.webp")}
                alt="10 seater luxury Tempo Traveller with Maharaja pushback seats"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/standard-12-seater-tempo-traveller-bangalore-1.webp")}
                alt="Luxury Tempo Traveller interior with premium seating"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
            <div className="contents sm:block space-y-0 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-12-seater-tempo-traveller-bangalore-1.webp")}
                alt="Comfortable Maharaja seats in 12 seater luxury tempo traveller"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-16-seater-tempo-traveller-bangalore-1.webp")}
                alt="16 seater luxury tempo traveller exterior"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Force Urbania */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-32">
          <div className="w-full lg:w-1/2 order-1 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6">
            <div className="contents sm:block space-y-0 sm:space-y-4 translate-y-0 sm:translate-y-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/force-urbania-10-seater-bangalore-1.webp")}
                alt="Force Urbania 10 seater luxury rental Bangalore"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/force-urbania-16-seater-bangalore-3.webp")}
                alt="Force Urbania 16 seater interior"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
            <div className="contents sm:block space-y-0 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/force-urbania-16-seater-bangalore-3.webp")}
                alt="Force Urbania luxury seats with ample legroom"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/force-urbania-10-seater-bangalore-1.webp")}
                alt="Spacious aisle and standing height interior of Force Urbania"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-2 text-left">
            <span className="text-brand-amber font-bold tracking-wider uppercase text-sm">
              9, 10 &amp; 16 Seaters
            </span>
            <h3 className="font-heading text-h2 font-bold text-brand-navy mt-2 mb-4 md:mb-6">
              Premium Force Urbania
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-base md:text-lg">
              Elevate your group travel with the state-of-the-art{" "}
              <Link
                href="/fleet/force-urbania-rental-bangalore/"
                className="text-brand-amber hover:underline"
              >
                Force Urbania in Bangalore
              </Link>
              . Featuring aerodynamic design, panoramic windows, and unparalleled
              riding dynamics, it&apos;s the epitome of modern road travel.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Enjoy fatigue-free journeys with independent front suspension,
              spacious aisles, and standing height interiors. Ideal for premium
              outstation trips.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Panoramic View</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Extra large sealed windows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Aero Design</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Smooth ride at high speeds.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/fleet/force-urbania-rental-bangalore/"
              className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-amber hover:text-brand-navy transition-all inline-block"
            >
              Explore Urbania
            </Link>
          </div>
        </div>

        {/* Row 3: Buses */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-32">
          <div className="lg:w-1/2 order-2 lg:order-1 text-left">
            <span className="text-brand-amber font-bold tracking-wider uppercase text-sm">
              21 to 50 Seaters
            </span>
            <h3 className="font-heading text-h2 font-bold text-brand-navy mt-2 mb-4 md:mb-6">
              Spacious Luxury Buses
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-base md:text-lg">
              Planning a large group event? Our{" "}
              <Link
                href="/fleet/bus-rental-bangalore/"
                className="text-brand-amber hover:underline"
              >
                luxury buses in Bangalore
              </Link>{" "}
              are perfectly suited for long-distance tours, school excursions, and
              large corporate offsites. Enjoy maximum space and world-class
              amenities.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Every bus comes with a trained duo of driver and helper, ample
              under-deck luggage space, and air suspension for a bump-free ride.
              Perfect for group holiday packages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Ample Luggage</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Huge under-deck storage capacity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Large Groups</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Up to 50 passengers in one coach.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/fleet/bus-rental-bangalore/"
              className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-amber hover:text-brand-navy transition-all inline-block"
            >
              Explore Buses
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6">
            <div className="contents sm:block space-y-0 sm:space-y-4 translate-y-0 sm:translate-y-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-minibus-rental-bangalore-1.webp")}
                alt="Luxury minibus rental Bangalore - 21 to 33 seater options"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-40-seater-bus-bangalore-1.webp")}
                alt="40 seater luxury bus exterior"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
            <div className="contents sm:block space-y-0 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-50-seater-bus-bangalore-1.webp")}
                alt="50 seater luxury bus for large groups"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/luxury-minibus-rental-bangalore-2.webp")}
                alt="Premium minibus interior with air suspension"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
          </div>
        </div>

        {/* Row 4: Executive Cars */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2 order-1 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6">
            <div className="contents sm:block space-y-0 sm:space-y-4 translate-y-0 sm:translate-y-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/toyota-innova-crysta-bangalore-1.webp")}
                alt="Toyota Innova Crysta rental Bangalore - Luxury SUV"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/toyota-innova-crysta-bangalore-2.webp")}
                alt="Luxury sedan car interior for executive travel"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
            <div className="contents sm:block space-y-0 sm:space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/toyota-innova-crysta-bangalore-2.webp")}
                alt="Toyota Crysta luxury SUV for family outings Bangalore"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-48 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/fleet/toyota-innova-crysta-bangalore-1.webp")}
                alt="Premium car for airport transfers Bangalore"
                className="rounded-[16px] sm:rounded-2xl shadow-sm sm:shadow-lg w-full aspect-[4/3] sm:aspect-auto h-auto sm:h-64 object-cover"
                loading="lazy"
                width={600}
                height={338}
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-2 text-left">
            <span className="text-brand-amber font-bold tracking-wider uppercase text-sm">
              Sedans &amp; SUVs
            </span>
            <h3 className="font-heading text-h2 font-bold text-brand-navy mt-2 mb-4 md:mb-6">
              Executive Cars
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-base md:text-lg">
              For smaller groups, family outings, and{" "}
              <Link
                href="/services/airport-transfer-tempo-traveller-bangalore/"
                className="text-brand-amber hover:underline"
              >
                airport transfers in Bangalore
              </Link>
              , our fleet of immaculately maintained sedans and SUVs like the
              Innova Crysta provide unparalleled comfort and privacy.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Driven by courteous chauffeurs who double as friendly guides, our
              cars ensure you arrive at your destination relaxed and rejuvenated.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Premium Valet</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Spotless sanitized interiors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-brand-amber/10 rounded-lg text-brand-amber shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Doorstep Arrival</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Exact time guarantee.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/fleet/toyota-innova-crysta-rental-bangalore/"
              className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-amber hover:text-brand-navy transition-all inline-block"
            >
              Explore Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
