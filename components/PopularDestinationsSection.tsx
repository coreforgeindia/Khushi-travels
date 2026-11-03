"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ROUTES_DATA } from "@/data/routes";
import { getAssetPath } from "@/lib/assets";

export default function PopularDestinationsSection() {
  const routes = ROUTES_DATA.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Swipe vs Tap distinction refs
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isSwipingRef = useRef<boolean>(false);
  const swipeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll sync with active pagination dot
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardElements = container.querySelectorAll<HTMLElement>("[data-card-index]");
    if (!cardElements.length) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardElements.forEach((el, idx) => {
      // Relative offset inside the scroll container
      const cardOffset = el.offsetLeft - container.offsetLeft;
      const distance = Math.abs(cardOffset - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Use passive listener for high-performance 60fps scrolling
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (swipeTimeoutRef.current) {
        clearTimeout(swipeTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
    }
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwipingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    // If user dragged horizontally > 8px, flag as a swipe gesture
    if (deltaX > 8) {
      isSwipingRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (isSwipingRef.current) {
      // Retain swipe flag briefly so synthesized click event is suppressed
      swipeTimeoutRef.current = setTimeout(() => {
        isSwipingRef.current = false;
      }, 140);
    }
  };

  // Prevent accidental navigation when swiping
  const handleCardClick = (e: React.MouseEvent) => {
    if (isSwipingRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Scroll to selected card when clicking a pagination indicator
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const target = container.querySelector<HTMLElement>(`[data-card-index="${index}"]`);
    if (target) {
      const paddingLeft = window.innerWidth >= 640 ? 24 : 16;
      const targetLeft = target.offsetLeft - container.offsetLeft - paddingLeft;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-gray-50 section-py overflow-hidden">
      <div className="container-custom">
        {/* Section Heading & Link */}
        <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-4 text-left">
          <div>
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1.5">
              South India Road Trips
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-h1 text-brand-navy font-bold tracking-tight">
              Popular Destinations
            </h2>
          </div>
          <Link
            href="/tour-packages-from-bangalore/"
            className="text-brand-navy font-bold flex items-center gap-1.5 hover:text-brand-amber transition-colors text-xs sm:text-sm shrink-0 pb-1"
          >
            <span>All Packages</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* ======================================================== */}
        {/* MOBILE CAROUSEL: Horizontal Swipe with Scroll-Snap (< md) */}
        {/* ======================================================== */}
        <div className="relative md:hidden">
          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 pb-2 pt-1 -mx-4 sm:-mx-6 scroll-pl-4 sm:scroll-pl-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {routes.map((route, idx) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}/`}
                onClick={handleCardClick}
                data-card-index={idx}
                className="w-[83vw] max-w-[340px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm active:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between text-left group select-none"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getAssetPath(route.image)}
                      alt={`Bangalore to ${route.destination} tempo traveller rental`}
                      className="w-full h-full object-cover group-active:scale-105 transition-transform duration-300"
                      loading={idx === 0 ? "eager" : "lazy"}
                      width={400}
                      height={250}
                    />
                    <div className="absolute top-3 left-3 text-white text-xs font-bold drop-shadow-md">
                      {route.durationHrs}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-brand-navy mb-1 group-active:text-brand-amber transition-colors">
                      {route.destination}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2.5 font-medium">
                      Distance: ~{route.distanceKm} km
                    </p>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="block text-center py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-brand-navy group-active:border-brand-amber group-active:text-brand-amber group-active:bg-amber-50/40 transition-all">
                    View Route Details &rarr;
                  </span>
                </div>
              </Link>
            ))}

            {/* Trailing spacer so the final card doesn't butt directly against the boundary */}
            <div className="w-2 flex-shrink-0" aria-hidden="true" />
          </div>

          {/* Carousel Pagination Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {routes.map((route, idx) => (
              <button
                key={route.slug}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}: ${route.destination}`}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber ${
                  activeIndex === idx
                    ? "w-6 h-2 bg-brand-amber shadow-sm"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP & TABLET: Preserved Multi-Column Grid (>= md)    */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}/`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath(route.image)}
                    alt={`Bangalore to ${route.destination} tempo traveller rental`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                  <div className="absolute top-3 left-3 text-white text-xs font-bold drop-shadow-md">
                    {route.durationHrs}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-1 group-hover:text-brand-amber transition-colors">
                    {route.destination}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Distance: ~{route.distanceKm} km
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {route.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="block text-center py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-brand-navy group-hover:border-brand-amber group-hover:text-brand-amber group-hover:bg-amber-50/40 transition-all">
                  View Route Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
