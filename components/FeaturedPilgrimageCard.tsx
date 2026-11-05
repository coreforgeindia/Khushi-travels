"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAssetPath } from "@/lib/assets";

export interface PilgrimagePackage {
  id: string;
  category: string;
  name: string;
  route: string;
  duration: string;
  highlights: [string, string];
  price: string;
  priceNote?: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const PILGRIMAGE_PACKAGES: PilgrimagePackage[] = [
  {
    id: "12-jyotirlinga",
    category: "PROPOSED PILGRIMAGE PACKAGE",
    name: "12 Jyotirlinga Spiritual Yatra",
    route: "12 Jyotirlingas • Mathura, Ayodhya, Gaya & Puri",
    duration: "25 Days",
    highlights: [
      "AC Volvo Coach Transit",
      "3-Star Deluxe Stays & Satvik Meals",
    ],
    price: "₹1,49,999",
    image: "/images/destinations/12-jyotirlinga-shiva.jpg",
    imageAlt: "12 Jyotirlinga Spiritual Yatra - Proposed All-India Pilgrimage Circuit",
    href: "/packages/pilgrimage/12-jyotirlinga-yatra/",
  },
  {
    id: "kashi-triveni-ayodhya",
    category: "SACRED PILGRIMAGE CIRCUIT",
    name: "Kashi, Triveni, Ayodhya Yatra",
    route: "Varanasi → Prayagraj → Ayodhya → Lucknow Drop",
    duration: "4 Days / 3 Nights",
    highlights: [
      "3 Sacred Boat Rides Included",
      "20-Seater AC Luxury Tempo Traveller",
    ],
    price: "₹17,900",
    // priceNote: "+ 5% GST",
    image: "/images/destinations/varanasi-ganga-aarti.jpg",
    imageAlt: "Kashi Triveni Ayodhya Yatra - Illuminated Dashashwamedh Ghat Evening Ganga Aarti Varanasi",
    href: "/packages/pilgrimage/kashi-triveni-ayodhya/",
  },
  {
    id: "south-india-circuit",
    category: "TEMPLE CIRCUIT",
    name: "7 Day South India Temple Circuit",
    route: "Nava Tirupati • Navagraha • Madurai • Rameshwaram",
    duration: "7 Days",
    highlights: [
      "6 Sacred Temple Shrines",
      "Maharaja Pushback Luxury Tempo",
    ],
    price: "₹34,500",
    image: "/images/destinations/tirupati.webp",
    imageAlt: "7 Day South India Temple Circuit - Sacred Shrines & Temples",
    href: "/packages/pilgrimage/south-india-temple-circuit/",
  },
  {
    id: "karnataka-heritage",
    category: "HERITAGE & TEMPLE YATRA",
    name: "5 Day Karnataka Heritage Pilgrimage",
    route: "Hampi • Badami Cave Temples • Belur-Halebidu",
    duration: "5 Days",
    highlights: [
      "8 UNESCO World Heritage Sites",
      "Air-Conditioned Deluxe Comfort",
    ],
    price: "₹24,999",
    image: "/images/destinations/hampi.webp",
    imageAlt: "5 Day Karnataka Heritage Pilgrimage - UNESCO Monuments & Shrines",
    href: "/packages/pilgrimage/karnataka-heritage-pilgrimage/",
  },
  {
    id: "shirdi-nashik",
    category: "DEVOTIONAL YATRA",
    name: "6 Day Shirdi & Nashik Devotional Yatra",
    route: "Shirdi Sai Baba • Trimbakeshwar Jyotirlinga • Shani Shingnapur",
    duration: "6 Days",
    highlights: [
      "VIP Darshan Coordination",
      "Chauffeur-Driven Luxury Transit",
    ],
    price: "₹38,000",
    image: "/images/destinations/Shirdi.webp",
    imageAlt: "6 Day Shirdi & Nashik Devotional Yatra - Shirdi Sai Baba Samadhi & Jyotirlinga",
    href: "/packages/pilgrimage/shirdi-nashik-trimbakeshwar/",
  },
];

// Backward compatibility aliases
export type PilgrimageTourSlide = PilgrimagePackage;
export const PILGRIMAGE_SLIDES = PILGRIMAGE_PACKAGES;

export default function FeaturedPilgrimageCard() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(1280);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Gesture tracking refs
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);
  const lastPointerX = useRef<number>(0);
  const lastPointerTime = useRef<number>(0);
  const velocity = useRef<number>(0);
  const hasMoved = useRef<boolean>(false);
  const isLockedVertical = useRef<boolean>(false);
  const isLockedHorizontal = useRef<boolean>(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useRef<boolean>(false);

  // Responsive geometry & media queries
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setScreenWidth(w);
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1200);
    };
    handleResize();

    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = PILGRIMAGE_PACKAGES.length;

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(((index % total) + total) % total);
    },
    [total]
  );

  // Gentle autoplay with interaction pause (5000ms)
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (isPaused || isDragging || isMobile || prefersReducedMotion.current) return;
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [isPaused, isDragging, isMobile, nextSlide]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [currentIndex, isPaused, isDragging, startAutoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Dynamic stride for 1:1 physical tracking
  const getStride = () => {
    if (stageRef.current) {
      const width = stageRef.current.clientWidth;
      if (isMobile) return Math.max(260, width * 0.85);
      if (isTablet) return Math.max(400, width * 0.70);
      return Math.max(480, width * 0.45);
    }
    return isMobile ? 300 : isTablet ? 450 : 540;
  };

  // Pointer Handlers for Butter-Smooth Direct Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.target instanceof Element && e.target.closest("a, button")) return;

    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    velocity.current = 0;
    hasMoved.current = false;
    isLockedVertical.current = false;
    isLockedHorizontal.current = false;
    setIsDragging(true);
    setDragOffset(0);

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignore fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartX.current;
    const dy = e.clientY - dragStartY.current;

    // Detect gesture orientation lock
    if (!isLockedHorizontal.current && !isLockedVertical.current) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 9) {
        // Natural page vertical scroll: release gesture lock
        isLockedVertical.current = true;
        setIsDragging(false);
        setDragOffset(0);
        return;
      } else if (Math.abs(dx) > 7) {
        isLockedHorizontal.current = true;
      }
    }

    if (isLockedVertical.current) return;

    // Calculate instantaneous velocity for spring/flick momentum
    const now = performance.now();
    const dt = now - lastPointerTime.current;
    if (dt > 12) {
      const v = (e.clientX - lastPointerX.current) / dt;
      velocity.current = velocity.current * 0.35 + v * 0.65;
      lastPointerX.current = e.clientX;
      lastPointerTime.current = now;
    }

    setDragOffset(dx);
  };

  const finishDrag = (e?: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (e) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore fallback
      }
    }

    const dx = e ? e.clientX - dragStartX.current : dragOffset;
    const vel = velocity.current;
    const threshold = isMobile ? 38 : 65;
    const flickSpeed = 0.22;
    const didSwipe =
      !isLockedVertical.current &&
      (Math.abs(dx) > threshold || Math.abs(vel) > flickSpeed);

    hasMoved.current = didSwipe;

    if (dx < -threshold || vel < -flickSpeed) {
      nextSlide();
    } else if (dx > threshold || vel > flickSpeed) {
      prevSlide();
    }

    setDragOffset(0);
    velocity.current = 0;

    if (didSwipe) {
      setTimeout(() => {
        hasMoved.current = false;
      }, 80);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    finishDrag(e);
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    finishDrag(e);
  };

  // Normalized continuous drag offset
  const stride = getStride();
  const dragProgress = isDragging
    ? Math.max(-1.3, Math.min(1.3, dragOffset / stride))
    : 0;

  return (
    <section
      className="bg-[#F4F5F8] py-8 sm:py-10 md:py-12 lg:py-16 select-none overflow-hidden"
      aria-label="Featured Pilgrimage Tour Packages"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom max-w-7xl px-3 sm:px-4 md:px-6">
        {/* =================================================================== */}
        {/* 1. SECTION HEADER */}
        {/* =================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a365d] tracking-tight">
            Featured Spiritual Yatra Packages
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto">
            Sacred journeys across India&#39;s most revered shrines with dedicated chauffeurs and verified deluxe stays.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 2. 3D OVERLAPPING LAYERED CAROUSEL STAGE */}
        {/* =================================================================== */}
        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center my-2 sm:my-3 cursor-grab active:cursor-grabbing select-none min-h-[500px] sm:min-h-[510px] md:min-h-[470px] lg:min-h-[480px] xl:min-h-[490px] 2xl:min-h-[500px]"
          style={{
            perspective: isTablet ? "1000px" : "1400px",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {/* Left Arrow Button (Desktop & Tablet: safely outside active card) */}
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous pilgrimage package"
            className="absolute left-1.5 md:left-2 lg:left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#1a365d]/95 hover:bg-[#1a365d] text-[#f59e0b] border border-[#f59e0b]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#f59e0b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (Desktop & Tablet: safely outside active card) */}
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next pilgrimage package"
            className="absolute right-1.5 md:right-2 lg:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#1a365d]/95 hover:bg-[#1a365d] text-[#f59e0b] border border-[#f59e0b]/60 items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg
              className="w-5 h-5 text-[#f59e0b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Overlapping Deck of Cards */}
          <div className="relative w-full h-[490px] sm:h-[500px] md:h-[460px] lg:h-[470px] xl:h-[480px] 2xl:h-[490px] flex items-center justify-center pointer-events-none">
            {PILGRIMAGE_PACKAGES.map((pkg, index) => {
              // Calculate modular offset relative to currentIndex
              let diff = index - currentIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              // Continuous circular offset with dragProgress
              let u = diff + dragProgress;
              if (u > total / 2) u -= total;
              if (u < -total / 2) u += total;

              const t = Math.abs(u);
              const isCenterActive = !isDragging ? diff === 0 : t < 0.45;

              // Responsive 3D transform computation (Desktop vs Tablet vs Mobile)
              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";
              let boxShadow = "none";

              if (isMobile) {
                // Mobile (< 768px): Dedicated single-card view with smooth horizontal slide
                if (t <= 0.5) {
                  zIndex = 35;
                  pointerEvents = "auto";
                  const tx = u * 105;
                  transformStyle = `translate3d(${tx}%, 0, 0)`;
                  opacity = Math.max(0, 1.0 - t * 0.7);
                  boxShadow = "0 15px 35px -10px rgba(8, 8, 120, 0.4)";
                } else {
                  zIndex = 5;
                  opacity = 0;
                  pointerEvents = "none";
                  const tx = (u > 0 ? 1 : -1) * 115;
                  transformStyle = `translate3d(${tx}%, 0, 0)`;
                }
              } else if (isTablet) {
                // Tablet (768px - 1199px): Dedicated tablet layout. Active card is 88-90% width.
                // Side cards hidden at rest to prevent clipping and give 100% room to active card.
                if (t <= 0.45) {
                  zIndex = 35;
                  pointerEvents = "auto";
                  const tx = u * 105;
                  const scale = 1.0 - t * 0.08;
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(${scale})`;
                  opacity = 1.0;
                  filter = "brightness(1)";
                  boxShadow =
                    "0 20px 45px -10px rgba(8, 8, 120, 0.45), 0 0 20px rgba(216, 180, 59, 0.2)";
                } else if (t <= 1.25) {
                  // Subtle preview during dragging/sliding
                  zIndex = 20;
                  pointerEvents = isDragging ? "auto" : "none";
                  const tx = u * 105;
                  const scale = 0.92;
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(${scale})`;
                  opacity = isDragging ? Math.max(0, 0.4 - (t - 0.5) * 0.8) : 0;
                  filter = "brightness(0.65)";
                } else {
                  zIndex = 5;
                  opacity = 0;
                  pointerEvents = "none";
                  const tx = (u > 0 ? 1 : -1) * 120;
                  transformStyle = `translate3d(${tx}%, 0, 0) scale(0.85)`;
                }
              } else {
                // Desktop (>= 1200px): Spacious active card (680-760px), elegant layered deck
                if (t <= 0.45) {
                  // Dominant active center card
                  zIndex = 35;
                  pointerEvents = "auto";
                  const tx = u * 52;
                  const tz = -t * 50;
                  const scale = 1.0 - t * 0.08;
                  const rotY = -u * 2.5;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = 1.0;
                  filter = "brightness(1)";
                  boxShadow =
                    "0 25px 60px -15px rgba(8, 8, 120, 0.5), 0 0 25px rgba(216, 180, 59, 0.25)";
                } else if (t <= 1.25) {
                  // Tier 1: Immediately adjacent cards tucked slightly behind with reduced width & opacity
                  zIndex = 20;
                  pointerEvents = "auto";
                  const tx = u * 52;
                  const tz = -t * 60;
                  const scale = 0.85;
                  const rotY = -u * 2.5;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = 0.48;
                  filter = "brightness(0.60)";
                  boxShadow = "0 12px 30px -10px rgba(0, 0, 0, 0.35)";
                } else if (t <= 2.25) {
                  // Tier 2: Secondary cards further behind
                  zIndex = 10;
                  pointerEvents = "none";
                  const extra = t - 1.0;
                  const tx = (u > 0 ? 1 : -1) * (52 + extra * 28);
                  const tz = -60 - extra * 60;
                  const scale = 0.74;
                  const rotY = (u > 0 ? -1 : 1) * 2;
                  transformStyle = `translate3d(${tx}%, 0, ${tz}px) scale(${scale}) rotateY(${rotY}deg)`;
                  opacity = Math.max(0, 0.20 - extra * 0.20);
                  filter = "brightness(0.40)";
                } else {
                  // Offstage cards
                  zIndex = 5;
                  opacity = 0;
                  pointerEvents = "none";
                  const tx = (u > 0 ? 1 : -1) * 110;
                  transformStyle = `translate3d(${tx}%, 0, -180px) scale(0.70)`;
                }
              }

              return (
                <article
                  key={pkg.id}
                  onClick={(e) => {
                    if (hasMoved.current) {
                      e.preventDefault();
                      e.stopPropagation();
                      return;
                    }
                    if (!isCenterActive) {
                      e.stopPropagation();
                      goToSlide(index);
                    } else {
                      const target = e.target as HTMLElement;
                      if (!target.closest("button") && !target.closest("a")) {
                        router.push(pkg.href);
                      }
                    }
                  }}
                  style={{
                    transform: transformStyle,
                    zIndex,
                    opacity,
                    filter,
                    boxShadow,
                    pointerEvents,
                    transition: isDragging
                      ? "none"
                      : prefersReducedMotion.current
                        ? "none"
                        : "transform 850ms cubic-bezier(0.22, 1, 0.36, 1), opacity 850ms cubic-bezier(0.22, 1, 0.36, 1), filter 850ms ease, box-shadow 850ms ease",
                    willChange: "transform, opacity",
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1a365d] border border-[#f59e0b]/60 cursor-pointer w-[92vw] max-w-[390px] h-[480px] sm:h-[490px] md:max-w-[680px] md:w-[88%] lg:max-w-[720px] lg:w-[88%] xl:max-w-none xl:w-[740px] 2xl:w-[760px] md:h-[460px] lg:h-[470px] xl:h-[480px] 2xl:h-[490px]"
                  aria-hidden={!isCenterActive}
                >
                  {/* Subtle Top Metallic Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b] to-[#f59e0b]/40 z-30 pointer-events-none" />

                  {/* ========================================================= */}
                  {/* MOBILE VERTICAL CARD COMPOSITION (< 768px) */}
                  {/* ========================================================= */}
                  <div className="flex flex-col h-full md:hidden text-left relative z-10">
                    {/* Destination Photograph (Top) */}
                    <div className="relative h-[180px] sm:h-[190px] w-full shrink-0 overflow-hidden bg-[#1a365d]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(pkg.image)}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover object-center pointer-events-none"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={600}
                        height={380}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-transparent to-black/25 pointer-events-none" />

                    </div>

                    {/* Information Area (Bottom) */}
                    <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 relative z-10 min-w-0">
                      <div>
                        {/* Package Title */}
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-2">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#f59e0b] transition-colors"
                          >
                            {pkg.name}
                          </Link>
                        </h3>

                        {/* Main Route / Destinations */}
                        <p className="text-slate-200 text-xs font-medium mt-1 leading-snug line-clamp-1">
                          {pkg.route}
                        </p>

                        {/* Duration & Highlights */}
                        <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1.5 text-xs text-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="text-white font-semibold">Duration:</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[0]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & One Full-Width CTA */}
                      <div className="pt-2.5 border-t border-white/10 mt-auto flex flex-col gap-2 shrink-0">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[9.5px] uppercase font-bold tracking-wider text-amber-300/80">
                            Package Fare
                          </span>
                          <span className="text-sm sm:text-base font-bold text-white leading-tight">
                            {pkg.price}{" "}
                            {pkg.priceNote && (
                              <span className="text-[10px] text-slate-300 font-normal">
                                ({pkg.priceNote})
                              </span>
                            )}
                          </span>
                        </div>
                        <Link
                          href={pkg.href}
                          onClick={(e) => {
                            if (hasMoved.current) {
                              e.preventDefault();
                              e.stopPropagation();
                            }
                          }}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-950 font-heading font-bold text-xs sm:text-sm text-center shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Explore Package</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* DESKTOP & TABLET TWO-PART COMPOSITION (>= 768px) */}
                  {/* ========================================================= */}
                  <div className="hidden md:grid md:grid-cols-[48%_52%] h-full text-left relative z-10">
                    {/* Left: Authentic Destination Photograph (48% width) */}
                    <div className="relative h-full w-full overflow-hidden bg-[#1a365d] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getAssetPath(pkg.image)}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-105"
                        loading={isCenterActive ? "eager" : "lazy"}
                        width={700}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-black/20 pointer-events-none" />

                    </div>

                    {/* Right: Clean, Structured Info (52% width) */}
                    <div className="relative z-10 min-w-0 p-5 md:p-5 lg:p-6 flex flex-col justify-between text-left h-full bg-[#1a365d]">
                      <div>
                        <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-white tracking-tight leading-[1.22]">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="hover:text-[#f59e0b] transition-colors"
                          >
                            {pkg.name}
                          </Link>
                        </h3>

                        <p className="text-slate-200 text-xs md:text-[13px] font-medium mt-1.5 leading-snug line-clamp-2">
                          {pkg.route}
                        </p>

                        {/* Duration and package highlights */}
                        <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2">
                          <div className="flex items-center gap-2.5 text-xs md:text-[13px] text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="text-white font-semibold">Duration:</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs md:text-[13px] text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[0]}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs md:text-[13px] text-slate-200 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="line-clamp-1">{pkg.highlights[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* 6 & 7. Price & One Explore Package Button */}
                      <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3 mt-auto shrink-0">
                        {/* Price */}
                        <div className="min-w-0">
                          <span className="text-[9px] uppercase font-bold tracking-wider text-amber-300/80 block">
                            Package Fare
                          </span>
                          {pkg.price.includes("enquiry") ? (
                            <div className="text-xs md:text-[13px] font-semibold text-amber-200/90 leading-tight mt-0.5">
                              Fare on enquiry
                            </div>
                          ) : (
                            <div className="text-lg md:text-xl xl:text-[22px] font-bold text-white tracking-tight mt-0.5 leading-tight">
                              {pkg.price}
                              {pkg.priceNote && (
                                <span className="text-xs text-slate-300 font-normal ml-1">
                                  ({pkg.priceNote})
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* One CTA Button */}
                        <div className="shrink-0">
                          <Link
                            href={pkg.href}
                            onClick={(e) => {
                              if (hasMoved.current) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 md:px-4 lg:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-950 font-heading font-bold text-xs md:text-sm shadow-md hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                          >
                            <span>Explore Package</span>
                            <span className="font-bold">&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. PAGINATION INDICATORS */}
        {/* =================================================================== */}
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-5 md:mt-6">
          {PILGRIMAGE_PACKAGES.map((pkg, dotIdx) => (
            <button
              key={pkg.id}
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}: ${pkg.name}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d] ${dotIdx === currentIndex
                ? "w-8 sm:w-9 h-2 bg-[#f59e0b] shadow-sm"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
