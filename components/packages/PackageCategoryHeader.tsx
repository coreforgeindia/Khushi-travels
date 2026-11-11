import React from "react";
import Link from "next/link";

interface PackageCategoryHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  activeCategory: "normal" | "special" | "weekend" | "exclusive" | "all";
  count?: number;
}

export default function PackageCategoryHeader({
  eyebrow,
  title,
  description,
  activeCategory,
  count,
}: PackageCategoryHeaderProps) {
  const tabs = [
    { label: "All Packages", href: "/packages/", id: "all" },
    { label: "Holiday Packages", href: "/packages/holiday/", id: "normal" },
    { label: "Pilgrimage Packages", href: "/packages/pilgrimage/", id: "special" },
    { label: "Weekend Packages", href: "/packages/weekend/", id: "weekend" },
    { label: "Special Packages", href: "/packages/special/", id: "exclusive" },
  ];

  return (
    <section className="page-hero package-category-hero bg-gradient-to-b from-[#1a365d] via-[#1a365d] to-[#0c1f38] text-white px-4">
      <div className="container-custom max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
          {eyebrow}
        </p>

        {/* Title */}
        <h1 className="font-heading text-[clamp(1.7rem,3.8vw,3rem)] font-bold text-white mb-2 sm:mb-3 tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-5">
          {description}
        </p>

        <nav aria-label="Package categories" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-6 mb-3 sm:mb-5">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`border-b-2 px-1 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-colors duration-200 ${
                  isActive
                    ? "border-amber-400 text-amber-300"
                    : "border-transparent text-white/90 hover:border-white/50 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-semibold text-amber-400">
              {count !== undefined ? count : "30+"}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Curated Tours</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-semibold text-amber-400">Doorstep</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Bangalore Pickup</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-semibold text-amber-400">100% Owned</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Sanitized Fleet</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-semibold text-amber-400">Since 2018</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Serving Groups</div>
          </div>
        </div>
      </div>
    </section>
  );
}
