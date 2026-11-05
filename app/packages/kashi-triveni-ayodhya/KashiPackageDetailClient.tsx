"use client";

import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TravelNoticeTicker from "@/components/TravelNoticeTicker";
import { getAssetPath } from "@/lib/assets";

interface KashiPackageDetailClientProps {
  breadcrumbs: Array<{ label: string; href: string }>;
  whatsappLink: string;
}

export default function KashiPackageDetailClient({
  breadcrumbs,
  whatsappLink,
}: KashiPackageDetailClientProps) {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    category?: string;
  } | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 4 Day Detailed Itinerary Data
  const itineraryDays = [
    {
      day: 1,
      badge: "DAY 01",
      city: "Varanasi",
      title: "Arrival in Varanasi, Kashi Vishwanath Sparsh Darshan & Dashashwamedh Ganga Aarti",
      route: "Varanasi Airport / Station → 3-Star Deluxe Hotel → Kashi Vishwanath → Dashashwamedh Ghat",
      distance: "30 to 40 Kms",
      duration: "Local City Transit",
      stay: "3-Star Premium Deluxe Rooms (Hotel Ananta Kashi, Varanasi)",
      meals: "Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/varanasi-ganga-aarti.jpg",
      highlights: [
        "Warm reception at Varanasi Airport / Railway Station by your 20-Seater Tempo Chauffeur.",
        "Check-in and refresh at 3-Star Premium Deluxe Rooms in Varanasi.",
        "Evening Sparsh Darshan assistance at Shri Kashi Vishwanath Jyotirlinga Temple.",
        "Darshan at the sacred Annapurna Mata Mandir.",
        "Witness the world-renowned celestial Ganga Maha Aarti at Dashashwamedh Ghat.",
        "★ Included: Sacred Evening Boat Ride on River Ganga along the illuminated ghats.",
        "Overnight stay with satvik dinner.",
      ],
    },
    {
      day: 2,
      badge: "DAY 02",
      city: "Varanasi",
      title: "Varanasi Local Sightseeing, Subah-E-Banaras, Sarnath Dham & BHU Vishwanath",
      route: "Assi Ghat → Sarnath Dham → BHU New Vishwanath → Sankat Mochan → Hotel",
      distance: "40 to 50 Kms",
      duration: "Full Day Local Excursion",
      stay: "3-Star Premium Deluxe Rooms (Hotel Ananta Kashi, Varanasi)",
      meals: "Breakfast, Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/Varanasi.webp",
      highlights: [
        "Early morning: Experience peaceful Subah-E-Banaras cultural Aarti at Assi Ghat.",
        "★ Included: Morning Sunrise Boat Ride on River Ganga with panoramic ghat views.",
        "Return to hotel for a hearty satvik breakfast.",
        "Sacred excursion to Sarnath Dham, Dhamek Stupa, Mulgandha Kuti Vihar & Deer Park.",
        "Visit the grand Banaras Hindu University (BHU) New Vishwanath Temple (Birla Temple).",
        "Darshan at holy Sankat Mochan Hanuman Temple and Durga Kund Mandir.",
        "Evening free for shopping world-famous Banarasi silk sarees and local handicrafts.",
        "All meals (Breakfast + Lunch + Dinner) and overnight stay.",
      ],
    },
    {
      day: 3,
      badge: "DAY 03",
      city: "Prayagraj & Ayodhya",
      title: "Varanasi to Prayagraj (Triveni Sangam Snan) to Ayodhya",
      route: "Varanasi → Prayagraj Sangam → Bade Hanuman Ji → Alopi Mata → Ayodhya",
      distance: "295 Kms Total",
      duration: "Approx. 7.5 to 8 Hours Drive",
      stay: "3-Star Premium Deluxe Rooms (Hotel Mosaic, Ayodhya)",
      meals: "Breakfast, Lunch & Dinner Included (APAI Plan)",
      image: "/images/destinations/triveni-sangam-prayagraj.jpg",
      highlights: [
        "Morning satvik breakfast and hotel checkout from Varanasi.",
        "Scenic highway journey from Varanasi to Prayagraj (125 Kms / ~3 Hours) in comfortable 20-Seater Tempo.",
        "Sacred Triveni Sangam Snan at the holy confluence of Ganga, Yamuna & invisible Saraswati.",
        "★ Included: Private Boat Ride to the exact Triveni Sangam point for holy bath.",
        "Darshan at historic Bade Hanuman Ji Temple (unique reclining / sleeping Hanuman idol).",
        "Darshan at revered Alopi Devi Shaktipeeth Mandir and Anand Bhawan outer view.",
        "Post-lunch drive from Prayagraj to sacred city of Ayodhya (170 Kms / 4 to 4.5 Hours).",
        "Check-in at 3-Star Premium Deluxe Rooms in Ayodhya; evening dinner and relaxing overnight stay.",
      ],
    },
    {
      day: 4,
      badge: "DAY 04",
      city: "Ayodhya & Lucknow",
      title: "Ayodhya Ram Janmabhoomi Sugam Darshan to Lucknow Departure",
      route: "Hotel → Ram Janmabhoomi → Hanuman Garhi → Saryu River → Lucknow Drop",
      distance: "135 Kms Transit",
      duration: "Approx. 3 Hours to Lucknow",
      stay: "Tour Concludes with Lucknow Drop",
      meals: "Breakfast Included (APAI Plan)",
      image: "/images/destinations/ayodhya.webp",
      highlights: [
        "Morning breakfast and smooth checkout from Ayodhya hotel.",
        "Divine Sugam Darshan at the magnificent Shri Ram Janmabhoomi Temple.",
        "★ Included: Dedicated Golf Cart transfer inside Ayodhya complex for senior citizen ease.",
        "Ascend to historic Hanuman Garhi fort temple for blessings of Lord Hanuman.",
        "Darshan at beautiful Kanak Bhawan & historic Dashrath Mahal.",
        "Peaceful Saryu River Aarti and holy water sprinkling at Ram Ki Paidi ghats.",
        "Afternoon highway journey to Lucknow (135 Kms / ~3 Hours via expressway).",
        "Safe transfer and drop at Lucknow Airport / Railway Station with holy prasad & cherished memories.",
      ],
    },
  ];

  // Authentic Pilgrimage Gallery (First 4 strictly for mobile 2x2 grid, 6 for desktop)
  const galleryImages = [
    {
      url: "/images/destinations/varanasi-ganga-aarti.jpg",
      title: "Ganga Maha Aarti at Dashashwamedh Ghat",
      category: "Varanasi Ghats",
    },
    {
      url: "/images/destinations/jyotirlingas/kashi-vishwanath.webp",
      title: "Shri Kashi Vishwanath Jyotirlinga Dham Corridor",
      category: "Kashi Darshan",
    },
    {
      url: "/images/destinations/triveni-sangam-prayagraj.jpg",
      title: "Sacred Triveni Sangam Snan & Confluence",
      category: "Prayagraj",
    },
    {
      url: "/images/destinations/ayodhya.webp",
      title: "Grand Shri Ram Janmabhoomi Mandir",
      category: "Ayodhya Dham",
    },
    {
      url: "/images/destinations/saryu-river-ayodhya.jpg",
      title: "Holy Saryu River & Ram Ki Paidi Ghats",
      category: "Ayodhya Ghats",
    },
    {
      url: "/images/destinations/Varanasi.webp",
      title: "Subah-E-Banaras Sunrise Boat Ride on Ganga",
      category: "River Ganga",
    },
  ];

  // 7 Verified FAQs
  const faqs = [
    {
      question: "What is the B2B package cost and how is it calculated?",
      answer:
        "The package cost is ₹17,900 per person, calculated for a private group of 16 adults traveling together. Accommodation is arranged across 08 3-Star Premium Deluxe double-sharing rooms. Government GST of 5% applies extra on the total invoice billing.",
    },
    {
      question: "Which accommodations are provided for this pilgrimage?",
      answer:
        "You stay 2 Nights in Varanasi and 1 Night in Ayodhya at 3-Star Premium Deluxe properties (such as Hotel Ananta Kashi and Hotel Mosaic). Both are verified properties offering air-conditioned rooms, elevator facilities, 24/7 hot water, and pure vegetarian satvik dining.",
    },
    {
      question: "What vehicle is provided for the entire 4-day route?",
      answer:
        "A dedicated, sanitized 20-Seater Luxury Tempo Traveller with pushback recliner seats (2x1 layout), powerful dual AC, generous luggage trunk, and an experienced pilgrimage chauffeur is dedicated for your group from Varanasi arrival up to Lucknow drop. Fuel, state taxes, parking, and all highway tolls are completely covered.",
    },
    {
      question: "Are sacred boat rides and temple darshan assistance included?",
      answer:
        "Yes, all 3 scheduled boat rides are fully included: (1) Evening Ganga Aarti boat ride in Varanasi, (2) Morning Subah-E-Banaras sunrise boat ride in Varanasi, and (3) Prayagraj Triveni Sangam snan boat ride. In Ayodhya, dedicated golf cart transfer and Sugam Darshan assistance are included. In Kashi, Vishwanath Sparsh Darshan assistance is included.",
    },
    {
      question: "Can special Jain or garlic-free meals be arranged?",
      answer:
        "Yes, absolutely. The package includes the APAI all-meals plan (Breakfast, Lunch, and Dinner). All food served is 100% pure vegetarian, and special Jain (no onion, no garlic) or senior-friendly satvik preferences can easily be coordinated upon booking.",
    },
    {
      question: "What assistance is provided for elderly pilgrims and senior citizens?",
      answer:
        "We understand the physical demands of holy yatras. We provide dedicated golf cart transfers inside the sprawling Ayodhya Ram Mandir complex, priority darshan coordination, close tempo drop points wherever permitted by local authorities, and hotels equipped with elevators to minimize fatigue for elderly family members.",
    },
    {
      question: "What is the booking deposit and payment confirmation process?",
      answer:
        "To lock your travel dates, vehicle allocation, and hotel rooms, a 30% advance deposit is required upon invoice generation. The remaining balance is payable prior to trip commencement as specified in your Khushi Tours & Travels booking confirmation voucher.",
    },
  ];

  return (
    <div className="bg-[#F7F8FC] text-slate-800 antialiased font-sans pb-20 sm:pb-0">
      {/* ================================================================= */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ================================================================= */}
      <section
        className="relative overflow-hidden text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
        style={{
          background: `linear-gradient(135deg, rgba(16, 33, 58, 0.94) 0%, rgba(16, 33, 58, 0.88) 50%, rgba(10, 22, 40, 0.96) 100%), url('${getAssetPath(
            "/images/destinations/varanasi-ganga-aarti.jpg"
          )}') center/cover no-repeat`,
        }}
      >
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-3 sm:mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Editorial Yatra Presentation */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                  03 Nights / 04 Days
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F59E0B] text-xs font-semibold tracking-wider">
                  ✦ Sacred Pilgrimage Circuit
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Departure on November 30
                </span>
              </div>

              {/* Main Heading & Route */}
              <div>
                <p className="text-[#F59E0B] text-xs sm:text-sm font-bold uppercase tracking-widest mb-1.5">
                  Varanasi &bull; Prayagraj &bull; Ayodhya &bull; Lucknow
                </p>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                  Kashi, Triveni and{" "}
                  <span className="text-[#F59E0B]">Ayodhya Yatra</span>
                </h1>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-2 max-w-2xl leading-relaxed">
                  A divine journey through Kashi Vishwanath Jyotirlinga, holy Triveni Sangam Snan, and grand Ram Janmabhoomi Mandir.
                </p>
              </div>

              {/* Route Stepper Pill */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
                <span className="text-white">Varanasi</span>
                <span className="text-[#F59E0B] font-bold">&rarr;</span>
                <span className="text-white">Prayagraj</span>
                <span className="text-[#F59E0B] font-bold">&rarr;</span>
                <span className="text-white">Ayodhya</span>
                <span className="text-[#F59E0B] font-bold">&rarr;</span>
                <span className="text-amber-200">Lucknow Drop</span>
                <span className="text-white/60 text-xs ml-1">(~520 Kms)</span>
              </div>
            </div>

            {/* Right Column: Premium Booking Card */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F59E0B]/40 bg-white text-slate-800 shadow-2xl text-left">
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/9] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/destinations/varanasi-ganga-aarti.jpg")}
                    alt="Ganga Aarti at Dashashwamedh Ghat in Varanasi"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F59E0B] text-slate-950 shadow-md">
                      Sacred B2B Yatra
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-left z-10">
                    <p className="text-[11px] font-semibold text-[#F59E0B] tracking-wide uppercase">
                      Dashashwamedh Ghat &bull; Varanasi
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                      3 Sacred Boat Rides Included on Ganga &amp; Sangam
                    </p>
                  </div>
                </div>

                {/* Card Content & Action Area */}
                <div className="p-4 sm:p-5 bg-white space-y-4">
                  {/* Pricing Header */}
                  <div className="pb-3 border-b border-[#E2E8F0] flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-[#64748B] tracking-wider block">
                        Package Price
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
                          ₹17,900
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-500">
                          / Person
                        </span>
                      </div>
                    </div>
                    {/* <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      5% GST extra
                    </span> */}
                  </div>

                  {/* Quick Feature Checklist */}
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="py-0.5 flex items-center justify-between">
                      <span className="text-slate-500">Group Structure:</span>
                      <span className="font-bold text-[#1a365d]">16 Adults &bull; 08 Double Rooms</span>
                    </div>
                    <div className="py-0.5 flex items-center justify-between">
                      <span className="text-slate-500">Accommodation:</span>
                      <span className="font-bold text-[#1a365d]">3-Star Premium Deluxe</span>
                    </div>
                    <div className="py-0.5 flex items-center justify-between">
                      <span className="text-slate-500">Meal Plan:</span>
                      <span className="font-bold text-emerald-700">APAI, All Meals Included</span>
                    </div>
                    <div className="py-0.5 flex items-center justify-between">
                      <span className="text-slate-500">Transport:</span>
                      <span className="font-bold text-[#1a365d]">20-Seater Pushback AC Tempo</span>
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-1 space-y-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#d97706] text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center"
                    >
                      <span>Book on WhatsApp</span>
                      <span className="text-sm font-bold">&rarr;</span>
                    </a>
                    <a
                      href="tel:+919901333113"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a365d]/5 hover:bg-[#1a365d]/10 text-[#1a365d] font-bold text-xs border border-[#1a365d]/15 transition-all text-center"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Call Coordination Desk: +91 99013 33113</span>
                    </a>
                  </div>

                  {/* Trust Footer */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <span>●</span> Instant Response
                    </span>
                    <span>100% Verified Fleet</span>
                    <span>No Obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. FOUR ELEGANT JOURNEY HIGHLIGHTS */}
      {/* ================================================================= */}
      <section className="relative z-20 px-4 sm:px-6 -mt-4 sm:-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-5 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="p-2 sm:p-3 text-left">
                <span className="text-[#F59E0B] text-base mb-1 block">🕉</span>
                <span className="text-xs sm:text-sm font-bold text-[#1a365d] block">
                  Kashi Vishwanath
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Sparsh Darshan assistance
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[#F59E0B] text-base mb-1 block">⛵</span>
                <span className="text-xs sm:text-sm font-bold text-[#1a365d] block">
                  Sacred Boat Rides
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Ganga Aarti, sunrise &amp; Triveni Sangam
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[#F59E0B] text-base mb-1 block">🛕</span>
                <span className="text-xs sm:text-sm font-bold text-[#1a365d] block">
                  Ram Janmabhoomi
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Sugam Darshan &amp; golf cart assistance
                </span>
              </div>

              <div className="p-2 sm:p-3 text-left">
                <span className="text-[#F59E0B] text-base mb-1 block">🏨</span>
                <span className="text-xs sm:text-sm font-bold text-[#1a365d] block">
                  Accommodation
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  3-Star Premium Deluxe Rooms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. TRAVEL NOTICE TICKER */}
      {/* ================================================================= */}
      <div className="pt-4 sm:pt-6">
        <TravelNoticeTicker />
      </div>

      {/* ================================================================= */}
      {/* 4. EXPERIENCE INTRODUCTION */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story & Sacred Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 text-[#1a365d] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>The Sacred Pilgrimage Circuit</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a365d] tracking-tight leading-tight">
                Experience the Sacred Trinity of Sanatana Devotion
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Step into a journey that has transformed seekers for thousands of years. The <strong>Kashi, Triveni, Ayodhya Yatra</strong> connects the three pillars of spiritual liberation: the eternal cosmic grace of <strong>Shri Kashi Vishwanath</strong> in Varanasi, the sins-cleansing confluence of the holy <strong>Triveni Sangam</strong> in Prayagraj, and the grand divine presence of Maryada Purushottam <strong>Shri Ram Janmabhoomi</strong> in Ayodhya.
              </p>

              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                Carefully orchestrated by Khushi Tours &amp; Travels, this exclusive pilgrimage eliminates transit fatigue. We provide dedicated pushback tempo travel, confirmed 3-star deluxe hotel stays, pre-arranged holy boat rides, and gentle assistance for elderly family members.
              </p>

              {/* 4 Benefit Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1a365d]">Priority Darshan Coordination</h4>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Guided support for temple entry protocols and senior citizen care.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1a365d]">Satvik APAI Meals</h4>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Pure vegetarian hygienic daily breakfast, lunch, and dinner.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1a365d]">Senior-Friendly Rhythm</h4>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Elevator-equipped hotels and relaxed driving schedules.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                  <h4 className="font-bold text-xs sm:text-sm text-[#1a365d]">All-Inclusive Transparency</h4>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Highway tolls, parking, driver allowance, and boat rides fully covered.
                  </p>
                </div>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getAssetPath("/images/destinations/ayodhya.webp")}
                    alt="Grand Shri Ram Janmabhoomi Mandir Ayodhya"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F59E0B] text-slate-950 shadow">
                      Ayodhya Dham
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <p className="text-xs text-amber-200">
                      Shri Ram Janmabhoomi Mandir
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Sugam Darshan &amp; Golf Cart Transfer Included
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-left bg-white space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 text-xs">
                    <span className="text-[#64748B]">Accommodation:</span>
                    <span className="font-bold text-[#1a365d]">3-Star Premium Deluxe Rooms</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-xs">
                    <span className="text-[#64748B]">Transport:</span>
                    <span className="font-semibold text-[#1a365d]">
                      20-Seater Pushback AC Tempo
                    </span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1a365d] hover:bg-[#1a365d] text-white text-xs font-bold transition-all shadow"
                    >
                      <span>Inquire Directly on WhatsApp</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. ACCOMMODATION AND TRANSPORT SUMMARY (REPLACES REMOVED SECTIONS) */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom max-w-5xl text-left">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-1.5">
              Refined Pilgrimage Logistics
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a365d]">
              Your Comfort Throughout the Journey
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
              Carefully organized stays, satvik dining, and dedicated private tempo transport for a peaceful 16-adult sacred pilgrimage.
            </p>
          </div>

          <div className="bg-[#F7F8FC] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-5 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Item 1: Accommodation */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Accommodation
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1a365d] block mt-1">
                  3-Star Premium Deluxe Rooms
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  Elevator access, 24/7 hot water &amp; hygienic amenities
                </span>
              </div>

              {/* Item 2: Group */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Group
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1a365d] block mt-1">
                  16 Adults
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  Private devotee and family group departure
                </span>
              </div>

              {/* Item 3: Rooms */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Rooms
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1a365d] block mt-1">
                  08 Double-Sharing Rooms
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  Confirmed air-conditioned rooms for 16 passengers
                </span>
              </div>

              {/* Item 4: Meal Plan */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Meal Plan
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-700 block mt-1">
                  APAI, Breakfast, Lunch &amp; Dinner
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  100% pure vegetarian satvik meals (Jain food on request)
                </span>
              </div>

              {/* Item 5: Transport */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Transport
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1a365d] block mt-1">
                  20-Seater Pushback AC Tempo
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  All tolls, highway FASTag, parking &amp; fuel included
                </span>
              </div>

              {/* Item 6: Route */}
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                  Route
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1a365d] block mt-1">
                  Varanasi → Prayagraj → Ayodhya → Lucknow
                </span>
                <span className="text-xs text-[#64748B] block mt-0.5">
                  Complete ~520 Kms pilgrimage circuit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. DAY-BY-DAY ITINERARY */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F7F8FC]">
        <div className="container-custom max-w-5xl text-left">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-1.5">
              Sacred Schedule
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a365d]">
              Detailed 4 Day Pilgrimage Itinerary
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
              Every holy temple darshan, river boat ride, and highway transit leg orchestrated for deep peace of mind.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {itineraryDays.map((item) => {
              const isExpanded = activeDay === item.day;
              return (
                <div
                  key={item.day}
                  className="rounded-2xl sm:rounded-3xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Thumbnail */}
                    <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-950 shadow">
                          {item.badge} &bull; {item.city}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white lg:hidden">
                        <p className="text-xs font-semibold">{item.distance}</p>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-7 p-5 sm:p-6 text-left space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
                        <div>
                          <span className="hidden lg:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#1a365d] text-[#F59E0B] uppercase tracking-wider mb-1">
                            {item.badge} &bull; {item.city}
                          </span>
                          <h3 className="font-heading text-base sm:text-lg font-bold text-[#1a365d] leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <div className="hidden lg:flex flex-col items-end text-xs">
                          <span className="font-bold text-[#1a365d]">{item.distance}</span>
                          <span className="text-[#64748B] text-[11px]">{item.duration}</span>
                        </div>
                      </div>

                      {/* Route, Stay, Meals Details */}
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-start gap-2 text-slate-700">
                          <span className="text-[#F59E0B] font-bold shrink-0">Route:</span>
                          <span className="font-medium">{item.route}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <span className="text-[#F59E0B] font-bold shrink-0">Stay:</span>
                          <span className="font-medium text-[#1a365d]">{item.stay}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <span className="text-[#F59E0B] font-bold shrink-0">Meals:</span>
                          <span className="font-medium text-emerald-700">{item.meals}</span>
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="pt-2">
                        <div className="font-bold text-xs text-[#1a365d] uppercase tracking-wider mb-2">
                          Day&apos;s Highlights &amp; Activities:
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {item.highlights.slice(0, isExpanded ? undefined : 4).map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                              <span
                                className={
                                  h.includes("★ Included")
                                    ? "font-bold text-[#1a365d] bg-amber-50/80 px-1.5 py-0.5 rounded"
                                    : ""
                                }
                              >
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {item.highlights.length > 4 && (
                          <button
                            type="button"
                            onClick={() => setActiveDay(isExpanded ? null : item.day)}
                            className="mt-3 text-xs font-bold text-[#1a365d] hover:text-[#F59E0B] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{isExpanded ? "Show Less Details" : `View All ${item.highlights.length} Activities`}</span>
                            <span>{isExpanded ? "↑" : "↓"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. PACKAGE INCLUSIONS & EXCLUSIONS */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom max-w-5xl text-left">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-1.5">
              Complete Transparency
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a365d]">
              Package Inclusions &amp; Exclusions
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
              Every detail clearly listed with complete integrity. No hidden costs or surprise highway expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Inclusions Card */}
            <div className="bg-[#F7F8FC] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <div className="mb-5 pb-3 border-b border-[#E2E8F0]">
                <h3 className="font-heading font-bold text-xl text-[#1a365d]">
                  Package Inclusions
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">13 Verified Included Services</p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>3-Star Premium Deluxe hotel accommodations (2 Nights Varanasi + 1 Night Ayodhya across 08 Double Rooms).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>APAI Meal Plan:</strong> Daily pure vegetarian satvik Breakfast, Lunch, and Dinner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Varanasi Evening Boat Ride</strong> for Ganga Maha Aarti at Dashashwamedh Ghat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Varanasi Morning Sunrise Boat Ride</strong> along the sacred ghats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Triveni Sangam Snan Boat Ride</strong> in Prayagraj.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Dedicated 20-Seater Pushback AC Tempo Traveller for all transfers and sightseeing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>All Highway FASTag and State Toll Charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>All Temple &amp; Hotel Parking Charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Driver Allowances, night charges &amp; fuel costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Sugam Darshan Assistance</strong> at Ayodhya Ram Janmabhoomi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Dedicated Golf Cart in Ayodhya</strong> for senior citizen comfort.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Sparsh Darshan protocol assistance at Kashi Vishwanath.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Experienced pilgrimage chauffeur and on-ground coordination.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions Card */}
            <div className="bg-[#F7F8FC] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-5 pb-3 border-b border-[#E2E8F0]">
                  <h3 className="font-heading font-bold text-xl text-[#1a365d]">
                    Package Exclusions
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">Clearly Defined Out-of-Scope Items</p>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span><strong>5% Government GST Extra</strong> on Total Invoice Billing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Train tickets or Airfare to Varanasi / from Lucknow.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Entry tickets at archaeological monuments, museums, or special pooja samagri.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Personal expenses like laundry, phone calls, priest dakshina, and mineral water bottles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>Any item or service not explicitly listed under inclusions above.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>Senior Pilgrim Advisory:</strong> We advise pilgrims to carry comfortable walking footwear, daily prescription medicines, and an original government photo ID (Aadhaar or Passport) required for temple security and hotel check-in.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 8. DESTINATION PILGRIMAGE GALLERY (2x2 MOBILE GRID STRICT REQUIREMENT) */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F7F8FC]">
        <div className="container-custom max-w-6xl text-left">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-1.5">
              Sacred Vignettes
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a365d]">
              Destination Pilgrimage Gallery
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
              Authentic glimpses of holy ghats, temple corridors, and sacred river confluences included in your yatra.
            </p>
          </div>

          {/* 
            MOBILE: Exactly 2 columns x 2 rows for the initial four images.
            TABLET: Responsive 2-column grid.
            DESKTOP: Editorial 3-column / 6-image grid.
          */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImage(img)}
                className={`group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-[#E2E8F0] shadow-sm relative aspect-[4/3] transition-all hover:shadow-lg hover:-translate-y-0.5 ${i >= 4 ? "hidden lg:block" : "block"
                  }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath(img.url)}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-left">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                    {img.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white leading-tight mt-0.5 line-clamp-2">
                    {img.title}
                  </span>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full p-1.5 backdrop-blur-sm">
                  <svg className="w-3 h-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative text-left"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center text-sm font-bold transition-all"
              aria-label="Close image lightbox"
            >
              ✕
            </button>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath(lightboxImage.url)}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
                decoding="async"
              />
            </div>
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
              <div>
                {lightboxImage.category && (
                  <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-wider block">
                    {lightboxImage.category}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-semibold">{lightboxImage.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="text-xs text-[#F59E0B] hover:underline"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom max-w-3xl text-left">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] block mb-1.5">
              Trip Clarifications
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a365d]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm mt-1.5">
              Clear answers to the most common queries regarding booking, darshans, food, and facilities.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#F7F8FC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-heading font-bold text-sm sm:text-base text-[#1a365d] hover:text-[#F59E0B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-xs shrink-0 font-bold text-[#1a365d]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 10. FINAL BOOKING CTA SECTION */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16 bg-[#1a365d] text-white text-center">
        <div className="container-custom max-w-3xl space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span>Ready for the Sacred Yatra?</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Reserve Your Sacred Pilgrimage Departure
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our pilgrimage coordination desk is available to assist with booking, travel details and departure information.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#d97706] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Book on WhatsApp</span>
              <span>&rarr;</span>
            </a>
            <a
              href="tel:+919901333113"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <span>Call +91 99013 33113</span>
            </a>
          </div>

          <p className="text-[11px] text-amber-200/80 pt-2">
            Khushi Tours &amp; Travels &bull; Ground Floor No: 2, Kodigehalli Main Road, Virupakshapura, Bengaluru - 560097
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 11. MOBILE STICKY BOOKING BAR */}
      {/* ================================================================= */}
      <aside
        aria-label="Mobile Quick Booking"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] p-2.5 sm:hidden shadow-2xl"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <div>
            <span className="text-[10px] text-[#64748B] block font-semibold">
              From Varanasi to Lucknow
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-bold text-[#1a365d]">₹17,900</span>
              <span className="text-[10px] text-slate-500">/ person + 5% GST</span>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#F59E0B] text-slate-950 font-bold text-xs shadow-md active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
