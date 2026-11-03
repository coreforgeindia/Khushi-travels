import React from "react";
import Link from "next/link";
import { Vehicle } from "@/data/fleet";
import { getAssetPath } from "@/lib/assets";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const detailUrl = `/fleet/${vehicle.slug}/`;

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(8,8,120,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      {/* 1. Large Vehicle Photograph */}
      <Link
        href={detailUrl}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 block border-b border-slate-100"
        aria-label={`View details for ${vehicle.name}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getAssetPath(vehicle.image)}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          width={600}
          height={450}
        />
      </Link>

      {/* 2. Content Area */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-white text-center">
        {/* Vehicle Name */}
        <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-[#111111] group-hover:text-[#1a365d] transition-colors duration-200 leading-snug">
          <Link href={detailUrl} className="focus:outline-none focus:underline">
            {vehicle.name}
          </Link>
        </h3>

        {/* 3. View More Details Button */}
        <div className="mt-3.5 sm:mt-5 pt-1">
          <Link
            href={detailUrl}
            className="inline-flex items-center justify-center w-full min-h-[38px] sm:min-h-[42px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#1a365d] text-[#1a365d] font-heading font-semibold text-xs sm:text-sm hover:bg-[#1a365d] hover:text-white active:scale-[0.98] transition-all duration-200 shadow-xs"
          >
            View More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
