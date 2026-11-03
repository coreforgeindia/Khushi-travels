import React from "react";
import { ItineraryDay } from "@/data/packages";

interface PackageItineraryProps {
  itinerary: ItineraryDay[];
}

export default function PackageItinerary({ itinerary }: PackageItineraryProps) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="space-y-6">
      {itinerary.map((day, idx) => (
        <div
          key={idx}
          className="relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:border-amber-200 transition-colors"
        >
          {/* Day Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="bg-[#1a365d] text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {day.day}
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d]">
                {day.title}
              </h3>
            </div>
            {day.route && (
              <span className="text-[11px] sm:text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                {day.route}
              </span>
            )}
          </div>

          {/* Schedule Points */}
          <ul className="space-y-2 mb-4">
            {day.schedule.map((item, sIdx) => (
              <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Stay & Meals Badges */}
          {(day.stay || day.meals || day.notes) && (
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-dashed border-gray-200 text-xs text-gray-600">
              {day.stay && (
                <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md">
                  <svg className="w-3.5 h-3.5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span><strong>Stay:</strong> {day.stay}</span>
                </div>
              )}
              {day.meals && (
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span><strong>Meals:</strong> {day.meals}</span>
                </div>
              )}
              {day.notes && (
                <div className="w-full text-[11px] text-amber-800 bg-amber-50/70 p-2 rounded border border-amber-200/50">
                  ⚠️ <strong>Note:</strong> {day.notes}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

