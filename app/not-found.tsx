import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 pt-32 pb-20 px-4 text-center">
      <div className="max-w-md mx-auto">
        <span className="text-brand-amber font-heading font-bold text-7xl sm:text-8xl block mb-4">
          404
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page or itinerary you are looking for may have been moved or is
          temporarily unavailable. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full gradient-amber text-white font-heading font-bold text-xs shadow hover:-translate-y-0.5 transition-all"
          >
            Back to Homepage
          </Link>
          <Link
            href="/best-tempo-traveller-fleet-bangalore/"
            className="px-6 py-3 rounded-full bg-white border border-gray-200 text-brand-navy font-heading font-bold text-xs hover:border-brand-amber transition-all"
          >
            Explore Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
