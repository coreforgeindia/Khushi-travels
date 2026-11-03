import React from "react";
import { DetailedPackage } from "@/data/packages";
import PackageCard from "./PackageCard";

interface PackageGridProps {
  packages: DetailedPackage[];
  showSpecialOfferBadge?: boolean;
}

export default function PackageGrid({
  packages,
  showSpecialOfferBadge = false,
}: PackageGridProps) {
  if (!packages || packages.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 p-8">
        <p className="text-gray-500 text-sm">No tour packages currently match this selection.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {packages.map((pkg) => (
        <PackageCard
          key={`${pkg.category}-${pkg.slug}`}
          pkg={pkg}
          showSpecialOfferBadge={showSpecialOfferBadge}
        />
      ))}
    </div>
  );
}
