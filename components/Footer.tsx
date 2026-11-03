"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { getPageInquiryUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() ?? "/";
  const whatsappUrl = getPageInquiryUrl(pathname);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const popularRoutes = [
    { name: "Mysore", href: "/routes/bangalore-to-mysore-tempo-traveller/" },
    { name: "Coorg", href: "/routes/bangalore-to-coorg-tempo-traveller/" },
    { name: "Ooty", href: "/routes/bangalore-to-ooty-tempo-traveller/" },
    { name: "Tirupati", href: "/routes/bangalore-to-tirupati-tempo-traveller/" },
    { name: "Wayanad", href: "/routes/bangalore-to-wayanad-tempo-traveller/" },
    { name: "Pondicherry", href: "/routes/bangalore-to-pondicherry-tempo-traveller/" },
    { name: "Goa", href: "/routes/bangalore-to-goa-tempo-traveller/" },
    { name: "Hampi", href: "/routes/bangalore-to-hampi-tempo-traveller/" },
    { name: "Chikkamagaluru", href: "/routes/bangalore-to-chikmagalur-tempo-traveller/" },
    { name: "Chennai", href: "/routes/bangalore-to-chennai-tempo-traveller/" },
    { name: "Hyderabad", href: "/routes/bangalore-to-hyderabad-tempo-traveller/" },
    { name: "Mangalore", href: "/routes/bangalore-to-mangalore-tempo-traveller/" },
    { name: "Kodaikanal", href: "/routes/bangalore-to-kodaikanal-tempo-traveller/" },
    { name: "Shirdi", href: "/routes/bangalore-to-shirdi-tempo-traveller/" },
  ];

  const supportLinks = [
    { name: "Terms & Conditions", href: "/terms/" },
    { name: "Privacy Policy", href: "/privacy/" },
    { name: "Booking Information", href: "/services/corporate-tempo-traveller-rental-bangalore/" },
    { name: "Frequently Asked Questions", href: "/#faq" },
    { name: "Get a Travel Quote", href: "/hire-tempo-traveller-bangalore/" },
  ];

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("khushi:open-cookie-settings"));
  };

  return (
    <footer
      className="relative pt-12 sm:pt-14 md:pt-16 pb-24 sm:pb-20 md:pb-12 border-t border-white/[0.12] overflow-hidden text-[#CBD5E1]"
      style={{
        background: "linear-gradient(180deg, #080878 0%, #05055C 100%)",
      }}
    >
      <div className="container-custom relative z-10">
        {/* =================================================================== */}
        {/* 2. DESKTOP & TABLET FOUR-COLUMN LAYOUT                              */}
        {/* =================================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1, Brand Identity */}
          <div className="space-y-4 text-left">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B] rounded-lg"
              aria-label="Khushi Tours & Travels Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/khushi-travels-logo-white.png")}
                alt="Khushi Tours & Travels"
                className="h-12 sm:h-14 lg:h-16 w-auto max-w-[220px] lg:max-w-[260px] object-contain transition-transform duration-200 hover:opacity-95"
                loading="lazy"
                width={1024}
                height={512}
              />
            </Link>

            <p className="text-xs font-semibold tracking-wider uppercase text-[#D8B43B]">
              &ldquo;Every Journey Deserves Comfort.&rdquo;
            </p>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Bangalore&apos;s premier luxury tempo traveller and car rental service. 100% owned fleet, professional chauffeurs, and an unwavering commitment to safe, comfortable group travel.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/khushi_travels_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#D8B43B] text-[#CBD5E1] hover:text-[#080878] flex items-center justify-center transition-all duration-200 border border-white/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  aria-label="Follow Khushi Travels on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#D8B43B] text-[#CBD5E1] hover:text-[#080878] flex items-center justify-center transition-all duration-200 border border-white/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  aria-label="Follow Khushi Travels on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@sureshj1169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#D8B43B] text-[#CBD5E1] hover:text-[#080878] flex items-center justify-center transition-all duration-200 border border-white/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                  aria-label="Subscribe to Khushi Travels on YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2, Explore (Synchronized Single Source of Truth) */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.name} className="space-y-1.5">
                  <Link
                    href={item.href}
                    className="text-[#CBD5E1] hover:text-[#D8B43B] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="text-[#D8B43B]/60 text-xs">&rsaquo;</span>
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="pl-4 space-y-1.5 border-l border-white/10 ml-2 mt-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className="text-[#94A3B8] hover:text-[#D8B43B] hover:translate-x-1 inline-flex items-center gap-1.5 text-xs transition-all duration-200"
                          >
                            <span className="text-[#D8B43B]/40 text-[10px]">&rsaquo;</span>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3, Customer Support */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-sm mb-5">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#CBD5E1] hover:text-[#D8B43B] hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <span className="text-[#D8B43B]/60 text-xs">&rsaquo;</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              <button
                type="button"
                onClick={openCookieSettings}
                className="block py-2 text-xs text-[#CBD5E1] hover:text-[#D8B43B] active:text-[#D8B43B] transition-colors"
              >
                &rsaquo; Cookie settings
              </button>
            </ul>
            <div className="pt-3 border-t border-white/[0.08]">
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Need travel help or a custom itinerary? Contact our booking team.
              </p>
            </div>
          </div>

          {/* Column 4, Reach Us */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
              Reach Us
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] text-[#D8B43B] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <strong className="text-white block font-medium">Khushi Tours And Travels</strong>
                  <a
                    href="https://maps.google.com/?q=Khushi+tours+and+Travels+Kodigehalli+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] hover:text-[#D8B43B] transition-colors leading-relaxed block text-xs mt-0.5"
                  >
                    Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidyaranyapura, Virupakshapura, Bengaluru, 560097.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] text-[#D8B43B] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs text-[#94A3B8]">
                  GST: <strong className="text-white font-medium">29JPFPK4060F1ZQ</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] text-[#D8B43B] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a
                  href="tel:+919901333113"
                  className="text-white font-medium hover:text-[#D8B43B] transition-colors text-xs sm:text-sm"
                >
                  +91 99013 33113
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] text-[#D8B43B] flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@khushitravel.in"
                  className="text-[#CBD5E1] hover:text-[#D8B43B] transition-colors text-xs"
                >
                  info@khushitravel.in
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md hover:shadow-emerald-500/20 transition-all duration-200"
                aria-label="WhatsApp Khushi Travels"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919901333113"
                className="h-9 px-2 rounded-lg bg-[#D8B43B] hover:bg-amber-500 text-[#080878] text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md hover:shadow-amber-500/20 transition-all duration-200"
                aria-label="Call Khushi Travels"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                <span>Call</span>
              </a>
              <a
                href="https://maps.google.com/?q=Khushi+tours+and+Travels+Kodigehalli+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 text-[11px] font-semibold flex items-center justify-center gap-1 transition-all duration-200"
                aria-label="Get Directions to Office"
              >
                <svg className="w-3.5 h-3.5 text-[#D8B43B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 5. MOBILE DEDICATED LAYOUT (Independent, Touch-Optimized)           */}
        {/* =================================================================== */}
        <div className="block md:hidden space-y-6 mb-10 text-left">
          {/* Brand Centered Header */}
          <div className="text-center space-y-3 pb-2 border-b border-white/[0.08]">
            <Link href="/" className="inline-block" aria-label="Khushi Tours & Travels Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getAssetPath("/images/khushi-travels-logo-white.png")}
                alt="Khushi Tours & Travels"
                className="h-10 sm:h-12 w-auto max-w-[180px] sm:max-w-[200px] mx-auto object-contain transition-transform duration-200 hover:opacity-95"
                loading="lazy"
                width={1024}
                height={512}
              />
            </Link>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#D8B43B]">
              &ldquo;Every Journey Deserves Comfort.&rdquo;
            </p>
            <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
              Bangalore&apos;s premier luxury tempo traveller rental service. 100% owned fleet, professional chauffeurs, and 24/7 support.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/khushi_travels_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.06] text-[#CBD5E1] flex items-center justify-center border border-white/10 active:scale-95"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/Khushi-tours-and-travels-61566515977365/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.06] text-[#CBD5E1] flex items-center justify-center border border-white/10 active:scale-95"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@sureshj1169"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.06] text-[#CBD5E1] flex items-center justify-center border border-white/10 active:scale-95"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion 1: Explore */}
          <div className="bg-[#05055C]/40 border border-white/[0.12] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setExploreOpen(!exploreOpen)}
              aria-expanded={exploreOpen}
              aria-controls="mobile-explore-links"
              className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
                Explore
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${exploreOpen ? "rotate-180 text-[#D8B43B]" : "text-slate-400"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="mobile-explore-links"
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${exploreOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 space-y-2.5 border-t border-white/[0.08]">
                  {MAIN_NAV_ITEMS.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        className="block py-1.5 text-xs text-[#CBD5E1] hover:text-[#D8B43B] active:text-[#D8B43B] transition-colors"
                      >
                        &rsaquo; {item.name}
                      </Link>
                      {item.children && (
                        <div className="pl-4 space-y-1 border-l border-white/10 ml-2 my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-1 text-[11px] text-[#94A3B8] hover:text-[#D8B43B] active:text-[#D8B43B] transition-colors"
                            >
                              &rsaquo; {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Accordion 2: Customer Support */}
          <div className="bg-[#05055C]/40 border border-white/[0.12] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setSupportOpen(!supportOpen)}
              aria-expanded={supportOpen}
              aria-controls="mobile-support-links"
              className="w-full flex items-center justify-between p-4 text-left font-heading font-bold text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
                Customer Support
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${supportOpen ? "rotate-180 text-[#D8B43B]" : "text-slate-400"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="mobile-support-links"
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${supportOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-white/[0.08]">
                  {supportLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-xs text-[#CBD5E1] hover:text-[#D8B43B] active:text-[#D8B43B] transition-colors"
                    >
                      &rsaquo; {item.name}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={openCookieSettings}
                    className="block py-2 text-xs text-[#CBD5E1] hover:text-[#D8B43B] active:text-[#D8B43B] transition-colors"
                  >
                    &rsaquo; Cookie settings
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Contact Information Card */}
          <div className="bg-[#05055C]/40 border border-white/[0.12] rounded-2xl p-5 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
              Office &amp; Support
            </h4>

            <div className="space-y-3 text-xs">
              <p className="text-slate-300">
                <strong className="text-white block font-medium">Khushi Tours And Travels</strong>
                Ground Floor No: 2, Kodigehalli Main Road, Near Railway Station, Vidyaranyapura, Virupakshapura, Bengaluru, 560097.
              </p>
              <p className="text-slate-400">
                GST: <strong className="text-white font-medium">29JPFPK4060F1ZQ</strong>
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <a href="tel:+919901333113" className="text-white font-semibold text-sm hover:text-[#D8B43B]">
                  📞 +91 99013 33113
                </a>
                <a href="mailto:info@khushitravel.in" className="text-[#94A3B8] hover:text-[#D8B43B]">
                  ✉️ info@khushitravel.in
                </a>
              </div>
            </div>

            {/* Mobile Actions: WhatsApp, Call, Directions */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919901333113"
                className="h-10 rounded-xl bg-[#D8B43B] text-[#080878] text-xs font-bold flex items-center justify-center gap-1 active:scale-95 shadow-sm"
              >
                <span>Call Now</span>
              </a>
              <a
                href="https://maps.google.com/?q=Khushi+tours+and+Travels+Kodigehalli+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 rounded-xl bg-white/[0.1] text-white border border-white/15 text-xs font-semibold flex items-center justify-center gap-1 active:scale-95"
              >
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. POPULAR ROUTES FROM BANGALORE                                    */}
        {/* =================================================================== */}
        <div className="border-t border-white/[0.12] pt-8 sm:pt-10 mb-8 sm:mb-10">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest text-center mb-5 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
            Popular Routes from Bangalore
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B43B]" />
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {popularRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] text-[#CBD5E1] border border-white/[0.12] hover:border-[#D8B43B]/60 hover:bg-[#D8B43B]/10 hover:text-[#D8B43B] transition-all duration-200"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 7. BOTTOM COPYRIGHT BAR & LEGAL INFORMATION                         */}
        {/* =================================================================== */}
        <div className="border-t border-white/[0.12] pt-6 text-xs text-[#94A3B8]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="order-2 md:order-1">
              &copy; {currentYear} Khushi Tours &amp; Travels. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-4 order-1 md:order-2">
              <Link href="/terms/" className="hover:text-[#D8B43B] transition-colors focus:outline-none focus-visible:underline">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/privacy/" className="hover:text-[#D8B43B] transition-colors focus:outline-none focus-visible:underline">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3 order-3">
              <span className="text-[#94A3B8]/80">
                Khushi Tours &amp; Travels &bull; Bengaluru, Karnataka
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.08] hover:bg-[#D8B43B] hover:text-[#080878] text-slate-300 transition-all duration-200 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B43B]"
                title="Back to top"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
