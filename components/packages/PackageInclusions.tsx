import React from "react";

interface PackageInclusionsProps {
  inclusions: string[];
  exclusions?: string[];
  bookingTerms?: string;
  priceStatus: string;
}

export default function PackageInclusions({
  inclusions,
  exclusions,
  bookingTerms,
  priceStatus,
}: PackageInclusionsProps) {
  return (
    <div className="space-y-6">
      {/* Inclusions Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-[#1a365d] mb-4 flex items-center gap-2">
          Package Inclusions
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions Card (if available) */}
      {exclusions && exclusions.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h3 className="font-heading font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
            Package Exclusions
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Booking & Tariff Terms */}
      <div className="bg-amber-50/60 rounded-2xl border border-amber-200/80 p-5 sm:p-6 text-xs sm:text-sm text-slate-800">
        <h4 className="font-heading font-bold text-base text-[#1a365d] mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Tariff & Booking Policy
        </h4>
        <p className="mb-2 text-gray-700 leading-relaxed">
          <strong>Pricing:</strong> {priceStatus}. Quotations are customized based on vehicle category (9/12/16 seater Tempo Traveller, Force Urbania, or Mini Bus), travel dates, and passenger count.
        </p>
        {bookingTerms && (
          <p className="text-gray-700 leading-relaxed">
            <strong>Booking Terms:</strong> {bookingTerms}
          </p>
        )}
      </div>
    </div>
  );
}

