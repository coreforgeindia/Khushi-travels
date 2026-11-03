"use client";

import React, { useState } from "react";
import { getAssetPath } from "@/lib/assets";

interface DestinationItem {
  name: string;
  category: "pilgrimage" | "hill" | "beach" | "heritage" | "wildlife" | "adventure";
  badgeLabel: string;
  badgeClass: string;
  image: string;
  alt: string;
  distance: string;
  duration: string;
  price: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    name: "Tirupati",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/tirupati.webp",
    alt: "Nava Tirupati temple tour package from Bangalore",
    distance: "250 km from Bangalore",
    duration: "2D / 1N",
    price: "₹9,500",
  },
  {
    name: "Shirdi",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Shirdi.webp",
    alt: "Shirdi Sai Baba pilgrimage package from Bangalore",
    distance: "680 km from Bangalore",
    duration: "4D / 3N",
    price: "₹22,000",
  },
  {
    name: "Palani",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Palani.webp",
    alt: "Palani Murugan temple tour from Bangalore",
    distance: "380 km from Bangalore",
    duration: "3D / 2N",
    price: "₹12,500",
  },
  {
    name: "Dharmasthala",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Dharmasthala.webp",
    alt: "Dharmasthala Manjunatha temple package from Bangalore",
    distance: "300 km from Bangalore",
    duration: "2D / 1N",
    price: "₹8,500",
  },
  {
    name: "Rameswaram",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Rameswaram.webp",
    alt: "Rameswaram Ramanathaswamy temple tour from Bangalore",
    distance: "550 km from Bangalore",
    duration: "4D / 3N",
    price: "₹18,500",
  },
  {
    name: "Srisailam",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Srisailam.webp",
    alt: "Srisailam Mallikarjuna temple package from Bangalore",
    distance: "420 km from Bangalore",
    duration: "3D / 2N",
    price: "₹14,500",
  },
  {
    name: "Puri Jagannath",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/puri-jagannath.webp",
    alt: "Puri Jagannath temple tour package from Bangalore",
    distance: "1,400 km from Bangalore",
    duration: "5D / 4N",
    price: "₹35,000",
  },
  {
    name: "Varanasi",
    category: "pilgrimage",
    badgeLabel: "Pilgrimage",
    badgeClass: "bg-amber-100 text-amber-800",
    image: "/images/destinations/Varanasi.webp",
    alt: "Varanasi Kashi Vishwanath tour package from Bangalore",
    distance: "1,700 km from Bangalore",
    duration: "5D / 4N",
    price: "₹38,000",
  },
  {
    name: "Coorg",
    category: "hill",
    badgeLabel: "Hill",
    badgeClass: "bg-emerald-100 text-emerald-800",
    image: "/images/destinations/coorg.webp",
    alt: "Coorg coffee estate tour package from Bangalore",
    distance: "270 km from Bangalore",
    duration: "3D / 2N",
    price: "₹14,500",
  },
  {
    name: "Ooty",
    category: "hill",
    badgeLabel: "Hill",
    badgeClass: "bg-emerald-100 text-emerald-800",
    image: "/images/destinations/ooty.webp",
    alt: "Ooty tea garden tour package from Bangalore",
    distance: "300 km from Bangalore",
    duration: "3D / 2N",
    price: "₹16,500",
  },
  {
    name: "Chikmagalur",
    category: "hill",
    badgeLabel: "Hill",
    badgeClass: "bg-emerald-100 text-emerald-800",
    image: "/images/destinations/chikmagalur.webp",
    alt: "Chikmagalur coffee trek package from Bangalore",
    distance: "245 km from Bangalore",
    duration: "3D / 2N",
    price: "₹13,500",
  },
  {
    name: "Wayanad",
    category: "hill",
    badgeLabel: "Hill",
    badgeClass: "bg-emerald-100 text-emerald-800",
    image: "/images/destinations/wayanad.webp",
    alt: "Wayanad nature escape tour from Bangalore",
    distance: "280 km from Bangalore",
    duration: "3D / 2N",
    price: "₹15,500",
  },
  {
    name: "Kodaikanal",
    category: "hill",
    badgeLabel: "Hill",
    badgeClass: "bg-emerald-100 text-emerald-800",
    image: "/images/destinations/kodaikanal.webp",
    alt: "Kodaikanal hill station package from Bangalore",
    distance: "480 km from Bangalore",
    duration: "4D / 3N",
    price: "₹19,500",
  },
  {
    name: "Goa",
    category: "beach",
    badgeLabel: "Beach",
    badgeClass: "bg-cyan-100 text-cyan-800",
    image: "/images/destinations/goa.webp",
    alt: "Goa beach holiday package from Bangalore",
    distance: "590 km from Bangalore",
    duration: "5D / 4N",
    price: "₹28,000",
  },
  {
    name: "Pondicherry",
    category: "beach",
    badgeLabel: "Beach",
    badgeClass: "bg-cyan-100 text-cyan-800",
    image: "/images/destinations/pondicherry.webp",
    alt: "Pondicherry French quarter tour from Bangalore",
    distance: "310 km from Bangalore",
    duration: "3D / 2N",
    price: "₹12,500",
  },
  {
    name: "Gokarna",
    category: "beach",
    badgeLabel: "Beach",
    badgeClass: "bg-cyan-100 text-cyan-800",
    image: "/images/destinations/gokarna.webp",
    alt: "Gokarna beach temple tour from Bangalore",
    distance: "490 km from Bangalore",
    duration: "4D / 3N",
    price: "₹16,500",
  },
  {
    name: "Mangalore",
    category: "beach",
    badgeLabel: "Beach",
    badgeClass: "bg-cyan-100 text-cyan-800",
    image: "/images/destinations/mangalore.webp",
    alt: "Mangalore coastal tour package from Bangalore",
    distance: "350 km from Bangalore",
    duration: "3D / 2N",
    price: "₹11,500",
  },
  {
    name: "Mysore",
    category: "heritage",
    badgeLabel: "Heritage",
    badgeClass: "bg-amber-100 text-amber-900",
    image: "/images/destinations/mysore.webp",
    alt: "Mysore Palace heritage tour from Bangalore",
    distance: "150 km from Bangalore",
    duration: "2D / 1N",
    price: "₹8,500",
  },
  {
    name: "Hampi",
    category: "heritage",
    badgeLabel: "Heritage",
    badgeClass: "bg-amber-100 text-amber-900",
    image: "/images/destinations/hampi.webp",
    alt: "Hampi UNESCO heritage tour from Bangalore",
    distance: "350 km from Bangalore",
    duration: "3D / 2N",
    price: "₹14,500",
  },
  {
    name: "Belur & Halebidu",
    category: "heritage",
    badgeLabel: "Heritage",
    badgeClass: "bg-amber-100 text-amber-900",
    image: "/images/destinations/belur-halebidu.webp",
    alt: "Belur Halebidu temple tour from Bangalore",
    distance: "220 km from Bangalore",
    duration: "2D / 1N",
    price: "₹7,500",
  },
  {
    name: "Badami & Aihole",
    category: "heritage",
    badgeLabel: "Heritage",
    badgeClass: "bg-amber-100 text-amber-900",
    image: "/images/destinations/badami-aihole.webp",
    alt: "Badami Aihole heritage tour from Bangalore",
    distance: "440 km from Bangalore",
    duration: "4D / 3N",
    price: "₹17,500",
  },
  {
    name: "Kabini",
    category: "wildlife",
    badgeLabel: "Wildlife",
    badgeClass: "bg-green-100 text-green-800",
    image: "/images/destinations/kabini.webp",
    alt: "Kabini wildlife safari package from Bangalore",
    distance: "220 km from Bangalore",
    duration: "3D / 2N",
    price: "₹15,500",
  },
  {
    name: "Bandipur",
    category: "wildlife",
    badgeLabel: "Wildlife",
    badgeClass: "bg-green-100 text-green-800",
    image: "/images/destinations/bandipur.webp",
    alt: "Bandipur national park tour from Bangalore",
    distance: "230 km from Bangalore",
    duration: "2D / 1N",
    price: "₹10,500",
  },
  {
    name: "Dandeli",
    category: "wildlife",
    badgeLabel: "Wildlife",
    badgeClass: "bg-green-100 text-green-800",
    image: "/images/destinations/dandeli.webp",
    alt: "Dandeli wildlife adventure from Bangalore",
    distance: "460 km from Bangalore",
    duration: "3D / 2N",
    price: "₹14,500",
  },
  {
    name: "Sakleshpur",
    category: "adventure",
    badgeLabel: "Adventure",
    badgeClass: "bg-rose-100 text-rose-800",
    image: "/images/destinations/sakleshpur.webp",
    alt: "Sakleshpur trek package from Bangalore",
    distance: "220 km from Bangalore",
    duration: "2D / 1N",
    price: "₹7,500",
  },
  {
    name: "Kudremukh",
    category: "adventure",
    badgeLabel: "Adventure",
    badgeClass: "bg-rose-100 text-rose-800",
    image: "/images/destinations/kudremukh.webp",
    alt: "Kudremukh trekking tour from Bangalore",
    distance: "330 km from Bangalore",
    duration: "3D / 2N",
    price: "₹11,500",
  },
  {
    name: "Skandagiri",
    category: "adventure",
    badgeLabel: "Adventure",
    badgeClass: "bg-rose-100 text-rose-800",
    image: "/images/destinations/nandi-hills.webp",
    alt: "Skandagiri night trek package from Bangalore",
    distance: "70 km from Bangalore",
    duration: "1D",
    price: "₹4,500",
  },
  {
    name: "Kunti Betta",
    category: "adventure",
    badgeLabel: "Adventure",
    badgeClass: "bg-rose-100 text-rose-800",
    image: "/images/destinations/kunti-betta.webp",
    alt: "Kunti Betta trek package from Bangalore",
    distance: "130 km from Bangalore",
    duration: "2D / 1N",
    price: "₹6,500",
  },
  {
    name: "Coorg Trekking",
    category: "adventure",
    badgeLabel: "Adventure",
    badgeClass: "bg-rose-100 text-rose-800",
    image: "/images/destinations/coorg.webp",
    alt: "Coorg trekking tour package from Bangalore",
    distance: "270 km from Bangalore",
    duration: "3D / 2N",
    price: "₹13,500",
  },
];

type FilterType = "all" | "pilgrimage" | "hill" | "beach" | "heritage" | "wildlife" | "adventure";

export default function TourDestinationsFilter() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = filter === "all" ? DESTINATIONS : DESTINATIONS.filter((d) => d.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(
          [
            { id: "all", label: "All" },
            { id: "pilgrimage", label: "Pilgrimage" },
            { id: "hill", label: "Hill Stations" },
            { id: "beach", label: "Beaches" },
            { id: "heritage", label: "Heritage" },
            { id: "wildlife", label: "Wildlife" },
            { id: "adventure", label: "Adventure" },
          ] as { id: FilterType; label: string }[]
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              filter === tab.id
                ? "bg-brand-amber text-brand-navy font-bold shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-brand-amber hover:text-brand-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="destination-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(item.image)}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-brand-navy text-base">{item.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.distance}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{item.duration}</span>
                  <span className="font-heading font-bold text-brand-navy">
                    {item.price}
                    <span className="text-xs font-normal text-gray-400">/group</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href={`https://wa.me/919901333113?text=${encodeURIComponent(
                  `Hi Khushi Travels, I want to book ${item.name} tour package from Bangalore.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-amber hover:text-brand-navy text-white font-bold px-4 py-2.5 rounded-xl transition-all text-xs"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
