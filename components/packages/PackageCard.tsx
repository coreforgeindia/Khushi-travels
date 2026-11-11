import React from "react";
import Link from "next/link";
import { DetailedPackage } from "@/data/packages";
import { getResponsiveImageProps } from "@/lib/assets";
import SpecialOfferSticker from "@/components/SpecialOfferSticker";

interface PackageCardProps {
  pkg: DetailedPackage;
  showSpecialOfferBadge?: boolean;
}

export default function PackageCard({
  pkg,
  showSpecialOfferBadge = false,
}: PackageCardProps) {
  const detailUrl =
    pkg.href
      ? pkg.href
      : pkg.slug === "kashi-triveni-ayodhya"
      ? "/packages/pilgrimage/kashi-triveni-ayodhya/"
      : pkg.slug === "12-jyotirlinga-yatra"
      ? "/packages/pilgrimage/12-jyotirlinga-yatra/"
      : `/packages/${
          pkg.category === "normal"
            ? "holiday"
            : pkg.category === "special"
            ? "pilgrimage"
            : pkg.category === "exclusive"
            ? "special"
            : pkg.category
        }/${pkg.slug}/`;
  const isFlyerPoster = pkg.image.includes("/images/packages/goa/");
  const whatsappText = encodeURIComponent(
    `Hello Khushi Travels, I want to enquire about the ${pkg.title} (${pkg.duration}). Please share vehicle availability and quotation.`
  );
  const whatsappUrl = `https://wa.me/919901333113?text=${whatsappText}`;

  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {showSpecialOfferBadge && pkg.slug === "12-jyotirlinga-yatra" && (
        <SpecialOfferSticker className="badge-special-position" />
      )}
      {/* Image Container */}
      <div
        className={`relative overflow-hidden rounded-t-2xl ${
          isFlyerPoster ? "aspect-square bg-[#071f3b]" : "aspect-[16/10] bg-slate-900"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...getResponsiveImageProps(pkg.image, "(max-width: 768px) 100vw, 33vw")}
          alt={`${pkg.title} - ${pkg.destination} tour package`}
          className={`w-full h-full ${
            isFlyerPoster ? "object-contain" : "object-cover group-hover:scale-105"
          } transition-transform duration-500`}
          loading="lazy"
          decoding="async"
          width={isFlyerPoster ? 1024 : 1200}
          height={isFlyerPoster ? 1024 : 750}
        />
        {!isFlyerPoster && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        )}

      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Destination */}
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {pkg.destination}
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-[#1a365d] line-clamp-2 group-hover:text-amber-600 transition-colors mb-2">
            <Link href={detailUrl}>
              {pkg.title}
            </Link>
          </h3>
          <p className="text-xs font-medium text-gray-500 mb-2">
            Duration: {pkg.duration}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
            {pkg.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100">
            {pkg.highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer & Actions */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] text-gray-500 uppercase font-semibold">Tariff</span>
            <span className="text-xs font-bold text-[#1a365d] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              {pkg.priceStatus}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={detailUrl}
              className="text-center py-2 px-3 rounded-lg text-xs font-bold bg-gray-100 text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-colors"
            >
              {pkg.category === "weekend" ? "View Itinerary" : "View Package"}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 px-3 rounded-lg text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
