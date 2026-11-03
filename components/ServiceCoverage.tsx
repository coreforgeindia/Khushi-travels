"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOCALITIES_DATA, Locality } from "@/data/localities";
import { ROUTES_DATA, RouteItem } from "@/data/routes";
import { FLEET_DATA } from "@/data/fleet";

export default function ServiceCoverage() {
  const [showAllLocalities, setShowAllLocalities] = useState(false);
  const [showAllRoutes, setShowAllRoutes] = useState(false);

  // 4 preview localities specified in design requirements
  const previewLocalities = LOCALITIES_DATA.slice(0, 4);

  // 3 preview routes specified in design requirements (Mysuru, Coorg, Ooty)
  const previewRoutes = ROUTES_DATA.slice(0, 3);

  const getRouteDestinationName = (route: RouteItem): string => {
    if (route.destination === "Mysore") return "Mysuru";
    if (route.destination.includes("Coorg")) return "Coorg";
    if (route.destination.includes("Ooty")) return "Ooty";
    return route.destination;
  };

  return (
    <section
      className="bg-[#F5F6FA] py-14 sm:py-18 md:py-24 border-t border-slate-200/70 select-none overflow-hidden"
      aria-labelledby="network-section-heading"
    >
      <div className="container-custom max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================================== */}
        {/* SECTION HEADER: Luxury Cinematic Minimalism */}
        {/* =================================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <p className="text-[#1a365d] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Explore our network
          </p>

          <h2
            id="network-section-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a365d] tracking-tight leading-tight"
          >
            Every Journey, Well Connected.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover our Bengaluru pickup locations, popular outstation routes and premium travel fleet.
          </p>
        </div>

        {/* =================================================================== */}
        {/* ASYMMETRICAL 1+2 LUXURY LAYOUT */}
        {/* =================================================================== */}
        <div className="w-full">
          {/* ================================================================= */}
          {/* ROW 1: CARD A, BENGALURU LOCALITIES (DOMINANT FULL-WIDTH CARD)   */}
          {/* ================================================================= */}
          <article className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.10)] transition-all duration-300 p-6 sm:p-8 lg:p-10 mb-6 sm:mb-7 lg:mb-8">
            <div className="flex flex-col justify-between">
              {/* Card Header & Stat */}
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400 block pt-1">
                  Bengaluru Localities
                </span>
                <span className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1a365d] leading-none shrink-0">
                  {LOCALITIES_DATA.length}
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#1a365d] mt-3 sm:mt-5 leading-tight">
                City-wide pickup coverage
              </h3>

              {/* Preview Locations Line with middle dots */}
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {previewLocalities.map((loc: Locality, idx: number) => (
                  <React.Fragment key={loc.slug}>
                    <Link
                      href={`/localities/${loc.slug}/`}
                      className="hover:text-[#1a365d] transition-colors hover:underline underline-offset-4 decoration-[#f59e0b]"
                    >
                      {loc.name}
                    </Link>
                    {idx < previewLocalities.length - 1 && (
                      <span className="mx-2 text-slate-400 select-none">·</span>
                    )}
                  </React.Fragment>
                ))}
              </p>

              {/* Primary Action Button */}
              <div className="mt-5 sm:mt-6 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowAllLocalities(!showAllLocalities)}
                  aria-expanded={showAllLocalities}
                  aria-controls="localities-expanded-grid"
                  className="group inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-[#f59e0b] hover:text-amber-600 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] rounded-md"
                >
                  <span>{showAllLocalities ? "Show Less" : "Explore all locations"}</span>
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      showAllLocalities ? "-translate-y-0.5" : "group-hover:translate-x-1"
                    }`}
                  >
                    {showAllLocalities ? "↑" : "→"}
                  </span>
                </button>
              </div>

              {/* Expandable Area: All 15 Localities */}
              <div
                id="localities-expanded-grid"
                className="grid transition-all duration-500 ease-in-out"
                style={{
                  gridTemplateRows: showAllLocalities ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      All 15 Bengaluru Pickup Hubs
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {LOCALITIES_DATA.map((loc: Locality) => (
                        <Link
                          key={loc.slug}
                          href={`/localities/${loc.slug}/`}
                          className="group/loc p-3 rounded-xl bg-slate-50 hover:bg-[#1a365d] border border-slate-200/60 hover:border-[#1a365d] transition-all text-left flex flex-col justify-between"
                        >
                          <span className="font-heading font-semibold text-sm text-[#1a365d] group-hover/loc:text-white transition-colors block">
                            {loc.name}
                          </span>
                          <span className="text-[11px] text-slate-500 group-hover/loc:text-slate-200 transition-colors block truncate mt-1">
                            {loc.zone.split("(")[0].trim()}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ================================================================= */}
          {/* ROW 2: CARDS B & C, TWO SUPPORTING CARDS SIDE-BY-SIDE            */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-start">
            {/* =============================================================== */}
            {/* CARD B: OUTSTATION ROUTES (LOWER LEFT)                          */}
            {/* =============================================================== */}
            <article className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.10)] transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                {/* Statistic at the top */}
                <span className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1a365d] leading-none block">
                  {ROUTES_DATA.length}
                </span>

                {/* Heading */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1a365d] mt-3 sm:mt-5 leading-tight">
                  Outstation Routes
                </h3>

                {/* Preview Destinations */}
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {previewRoutes.map((route: RouteItem, idx: number) => (
                    <React.Fragment key={route.slug}>
                      <Link
                        href={`/routes/${route.slug}/`}
                        className="hover:text-[#1a365d] transition-colors hover:underline underline-offset-4 decoration-[#f59e0b]"
                      >
                        {getRouteDestinationName(route)}
                      </Link>
                      {idx < previewRoutes.length - 1 && (
                        <span className="mx-2 text-slate-400 select-none">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>

                {/* Primary Action Button */}
                <div className="mt-5 sm:mt-6 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowAllRoutes(!showAllRoutes)}
                    aria-expanded={showAllRoutes}
                    aria-controls="routes-expanded-grid"
                    className="group inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-[#f59e0b] hover:text-amber-600 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] rounded-md"
                  >
                    <span>{showAllRoutes ? "Show Less" : "Explore routes"}</span>
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        showAllRoutes ? "-translate-y-0.5" : "group-hover:translate-x-1"
                      }`}
                    >
                      {showAllRoutes ? "↑" : "→"}
                    </span>
                  </button>
                </div>

                {/* Expandable Area: All 14 Routes */}
                <div
                  id="routes-expanded-grid"
                  className="grid transition-all duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: showAllRoutes ? "1fr" : "0fr",
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        All 14 Popular Routes
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {ROUTES_DATA.map((route: RouteItem) => (
                          <Link
                            key={route.slug}
                            href={`/routes/${route.slug}/`}
                            className="group/rt p-2.5 rounded-xl bg-slate-50 hover:bg-[#1a365d] border border-slate-200/60 hover:border-[#1a365d] transition-all text-left flex items-center justify-between"
                          >
                            <div className="truncate">
                              <span className="font-heading font-semibold text-sm text-[#1a365d] group-hover/rt:text-white transition-colors block truncate">
                                {getRouteDestinationName(route)}
                              </span>
                              <span className="text-[11px] text-slate-500 group-hover/rt:text-slate-200 transition-colors block truncate">
                                {route.distanceKm} km · {route.durationHrs}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-amber-700 group-hover/rt:text-[#f59e0b] transition-colors ml-2 shrink-0">
                              {route.startingPrice}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* =============================================================== */}
            {/* CARD C: FLEET CATEGORIES (LOWER RIGHT)                          */}
            {/* =============================================================== */}
            <article className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(8,8,120,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(8,8,120,0.10)] transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                {/* Statistic at the top */}
                <span className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1a365d] leading-none block">
                  {FLEET_DATA.length}
                </span>

                {/* Heading */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1a365d] mt-3 sm:mt-5 leading-tight">
                  Fleet Categories
                </h3>

                {/* Supporting Description */}
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Premium travel vehicles
                </p>

                {/* Primary Action Button */}
                <div className="mt-5 sm:mt-6 flex items-center">
                  <Link
                    href="/best-tempo-traveller-fleet-bangalore/"
                    className="group inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-[#f59e0b] hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] rounded-md"
                  >
                    <span>Explore fleet</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
