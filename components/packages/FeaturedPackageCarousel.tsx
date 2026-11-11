"use client";

import { useRef } from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export interface FeaturedPackage {
  title: string;
  destination: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  actionLabel: string;
}

interface FeaturedPackageCarouselProps {
  packages: FeaturedPackage[];
  label: string;
  title: string;
  description: string;
}

export default function FeaturedPackageCarousel({
  packages,
  label,
  title,
  description,
}: FeaturedPackageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section aria-labelledby="featured-packages-title">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            {label}
          </p>
          <h2
            id="featured-packages-title"
            className="mt-1 font-heading text-xl font-bold text-[#1a365d] sm:text-2xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous featured packages"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a365d] shadow-sm transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next featured packages"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a365d] shadow-sm transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0"
        aria-label={title}
      >
        {packages.map((pkg) => (
          <article
            key={pkg.title}
            className="flex h-[500px] w-[280px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[300px]"
          >
            <Link
              href={pkg.href}
              className="group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-500"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden ${
                  pkg.image.includes("/images/packages/goa/") ? "bg-[#071f3b]" : "bg-slate-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(pkg.image)}
                  alt={pkg.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={400}
                  className={`h-full w-full transition duration-300 ${
                    pkg.image.includes("/images/packages/goa/")
                      ? "object-contain"
                      : "object-cover group-hover:scale-105"
                  }`}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
                  {pkg.destination}
                </p>
                <h3 className="mt-2 line-clamp-2 min-h-14 font-heading text-lg font-bold text-[#1a365d]">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {pkg.duration}
                </p>
                <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-gray-600">
                  {pkg.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#1a365d] group-hover:text-amber-700">
                  {pkg.actionLabel} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
