"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export interface DestinationItem {
  slug: string;
  name: string;
  shortDesc: string;
  image: string;
}

export const WEEKEND_DESTINATIONS: DestinationItem[] = [
  {
    slug: "coorg",
    name: "Coorg",
    shortDesc: "Coffee estates and scenic waterfalls",
    image: "/images/destinations/coorg.webp",
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    shortDesc: "Arabian Sea beach treks & Murudeshwara",
    image: "/images/destinations/gokarna.webp",
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    shortDesc: "Pine forests and misty valley viewpoints",
    image: "/images/destinations/kodaikanal.webp",
  },
  {
    slug: "chikmagalur",
    name: "Chikmagalur",
    shortDesc: "Mullayanagiri peak treks & coffee hills",
    image: "/images/destinations/chikmagalur.webp",
  },
  {
    slug: "ooty",
    name: "Ooty",
    shortDesc: "Nilgiri tea gardens, lakes & pine trails",
    image: "/images/destinations/ooty.webp",
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    shortDesc: "Misty valleys, waterfalls & ancient caves",
    image: "/images/destinations/wayanad.webp",
  },
  {
    slug: "hampi",
    name: "Hampi",
    shortDesc: "UNESCO boulder ruins & historic temples",
    image: "/images/destinations/hampi.webp",
  },
  {
    slug: "dandeli",
    name: "Dandeli",
    shortDesc: "Kali River rafting & jungle tiger safari",
    image: "/images/destinations/dandeli.webp",
  },
  {
    slug: "sakleshpur",
    name: "Sakleshpur",
    shortDesc: "Star fort, green ridges & nature treks",
    image: "/images/destinations/sakleshpur.webp",
  },
  {
    slug: "pondicherry-mahabalipuram",
    name: "Pondicherry",
    shortDesc: "French Quarter streets & coastal temples",
    image: "/images/destinations/pondicherry.webp",
  },
  {
    slug: "munnar",
    name: "Munnar",
    shortDesc: "Rolling emerald tea carpets & cloud peaks",
    image: "/images/destinations/kudremukh.webp",
  },
  {
    slug: "thekkady",
    name: "Thekkady",
    shortDesc: "Periyar Lake boat cruise & spice gardens",
    image: "/images/destinations/kabini.webp",
  },
  {
    slug: "yercaud",
    name: "Yercaud",
    shortDesc: "Shevaroy Hills, emerald lake & viewpoints",
    image: "/images/destinations/yelagiri.webp",
  },
  {
    slug: "gandikota-belum-caves",
    name: "Gandikota",
    shortDesc: "Grand Canyon gorge & underground caves",
    image: "/images/destinations/badami-aihole.webp",
  },
  {
    slug: "horsley-hills",
    name: "Horsley Hills",
    shortDesc: "Cool mountain breezes & eucalyptus groves",
    image: "/images/destinations/nandi-hills.webp",
  },
  {
    slug: "penukonda-lepakshi-adiyogi",
    name: "Lepakshi & Adiyogi",
    shortDesc: "Hanging pillar temple & Adiyogi laser show",
    image: "/images/destinations/belur-halebidu.webp",
  },
  {
    slug: "goa",
    name: "Goa",
    shortDesc: "Heritage Latin Quarter & sunset yacht cruise",
    image: "/images/destinations/goa.webp",
  },
  {
    slug: "vellore-tirupati",
    name: "Tirupati & Vellore",
    shortDesc: "Sripuram Golden Temple & sacred darshan",
    image: "/images/destinations/tirupati.webp",
  },
];

interface WeekendDestinationCarouselProps {
  title?: string;
  subtitle?: string;
  viewAllText?: string;
  viewAllHref?: string;
  showHeader?: boolean;
  className?: string;
  eyebrow?: string;
  withinContainer?: boolean;
}

export default function WeekendDestinationCarousel({
  title = "Trending Weekend Getaways",
  subtitle = "Friday night departures with homestays, breakfast & sightseeing.",
  viewAllText = "View all 18 →",
  viewAllHref = "/packages/weekend/",
  showHeader = true,
  className = "",
  eyebrow = "Curated Weekend Circuits",
  withinContainer = false,
}: WeekendDestinationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag & touch tracking to differentiate tap vs drag
  const isMouseDownRef = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const hasDraggedRef = useRef(false);

  const checkScrollability = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  // Arrow button navigation
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Scroll by ~75% of viewport width for intuitive paging
    const scrollAmount = Math.max(container.clientWidth * 0.75, 240);
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    hasDraggedRef.current = false;
    dragStartX.current = e.pageX;
    scrollStartX.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    const deltaX = e.pageX - dragStartX.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollStartX.current - deltaX;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
  };

  // Touch support for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    hasDraggedRef.current = false;
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - dragStartX.current);
    if (deltaX > 8) {
      hasDraggedRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (hasDraggedRef.current) {
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 100);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const content = (
    <>
      {/* Section Header */}
      {showHeader && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="text-left">
            {eyebrow && (
              <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-1.5">
                {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-h1 text-brand-navy font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-snug">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0">
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-amber transition-colors flex items-center gap-1 group py-1"
              >
                <span>{viewAllText}</span>
              </Link>
            )}

            {/* Prev / Next Circular Arrows (Airbnb Style) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous destinations"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-all shadow-sm active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:scale-100 disabled:active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              >
                <svg
                  className="w-4 h-4 stroke-[2.2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next destinations"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 flex items-center justify-center transition-all shadow-sm active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:scale-100 disabled:active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              >
                <svg
                  className="w-4 h-4 stroke-[2.2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Track: Airbnb-style Horizontal Destination Discovery */}
      <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 overflow-x-auto scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {WEEKEND_DESTINATIONS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/packages/weekend/${dest.slug}/`}
              onClick={handleCardClick}
              className="w-[140px] min-[390px]:w-[152px] min-[430px]:w-[168px] sm:w-[170px] md:w-[165px] lg:w-[155px] xl:w-[150px] 2xl:w-[160px] flex-none group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-2xl"
            >
              {/* Destination Image: Squircle / Rounded Square */}
              <div className="relative aspect-square w-full rounded-2xl sm:rounded-[20px] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(dest.image)}
                  alt={`Weekend trip to ${dest.name} from Bangalore`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                  width={240}
                  height={240}
                />
              </div>

              {/* Destination Name & Short Description */}
              <div className="pt-2 sm:pt-2.5">
                <h3 className="font-heading font-bold text-gray-900 group-hover:text-brand-navy text-[13.5px] sm:text-[15px] truncate leading-tight transition-colors">
                  {dest.name}
                </h3>
                <p className="text-gray-500 text-[11px] sm:text-[12px] leading-snug line-clamp-2 mt-0.5">
                  {dest.shortDesc}
                </p>
              </div>
            </Link>
          ))}

          {/* Trailing spacer so the final card doesn't butt against the container edge */}
          <div className="w-2 sm:w-4 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </>
  );

  if (withinContainer) {
    return <div className={`w-full overflow-hidden ${className}`}>{content}</div>;
  }

  return (
    <section className={`py-10 sm:py-14 md:py-16 bg-white overflow-hidden ${className}`}>
      <div className="container-custom">{content}</div>
    </section>
  );
}
