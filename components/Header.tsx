"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAssetPath } from "@/lib/assets";
import { getPageInquiryUrl } from "@/lib/whatsapp";
import { MAIN_NAV_ITEMS } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pkgDropdownOpen, setPkgDropdownOpen] = useState(false);
  const [mobilePkgExpanded, setMobilePkgExpanded] = useState(false);

  const pkgDropdownRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimer();
    setPkgDropdownOpen(true);
  };

  const scheduleCloseDropdown = (delay = 220) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setPkgDropdownOpen(false);
    }, delay);
  };

  const closeDropdownImmediately = () => {
    clearCloseTimer();
    setPkgDropdownOpen(false);
  };

  // Scroll listener for smooth navbar transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height dynamically for viewport calculations
  useEffect(() => {
    const updateNavbarHeight = () => {
      const headerEl = document.getElementById("site-header");
      if (headerEl) {
        const height = headerEl.getBoundingClientRect().height;
        if (height > 0) {
          document.documentElement.style.setProperty(
            "--navbar-height",
            `${Math.round(height)}px`
          );
        }
      }
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight, { passive: true });
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Close dropdown on outside click/touch, and handle Escape key
  useEffect(() => {
    const handleOutsideInteraction = (e: MouseEvent | TouchEvent) => {
      if (
        pkgDropdownRef.current &&
        !pkgDropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdownImmediately();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && pkgDropdownOpen) {
        closeDropdownImmediately();
        triggerBtnRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleKeyDown);
      clearCloseTimer();
    };
  }, [pkgDropdownOpen]);

  // Close menus on page route changes
  useEffect(() => {
    closeDropdownImmediately();
    setMobileMenuOpen(false);
    setMobilePkgExpanded(false);
  }, [pathname]);

  const isPackagesActive = Boolean(
    pathname?.startsWith("/packages") ||
      pathname?.startsWith("/tour-packages")
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    if (href.includes("fleet")) {
      return Boolean(pathname?.includes("fleet"));
    }
    const cleanHref = href.replace(/\/$/, "");
    if (!cleanHref) return false;
    return Boolean(pathname?.startsWith(cleanHref));
  };

  const showBlackLogo = scrolled || mobileMenuOpen;
  const whatsappUrl = getPageInquiryUrl(pathname ?? "/");

  return (
    <>
      <header
        id="site-header"
        className={`site-header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-custom header-inner">
          {/* 1. Brand Logo (Left) with Smooth Crossfade */}
          <Link
            href="/"
            className="site-logo relative flex items-center flex-shrink-0"
            aria-label="Khushi Tours & Travels Home"
          >
            {/* White Logo (Initial Hero State & Dark Background - Matched to Section Logo) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath("/images/khushi-travels-logo-white.png")}
              alt="Khushi Tours & Travels"
              className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] object-contain transition-opacity duration-300 ease-in-out ${
                showBlackLogo ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              width={1024}
              height={512}
              loading="eager"
            />

            {/* Black Logo (Scrolled State on White/Light Navbar - Optically Matched) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath("/images/khushi-travels-logo-black.png")}
              alt="Khushi Tours & Travels"
              aria-hidden={!showBlackLogo}
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-[34px] sm:h-[41px] md:h-[48px] lg:h-[55px] w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] object-contain transition-opacity duration-300 ease-in-out ${
                showBlackLogo ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              width={1024}
              height={438}
              loading="eager"
            />
          </Link>

          {/* 2. Modern Open Navigation (Center) - Shared Single Source of Truth */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    ref={pkgDropdownRef}
                    className="relative inline-flex items-center"
                    onMouseEnter={openDropdown}
                    onMouseLeave={() => scheduleCloseDropdown(220)}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link ${isPackagesActive ? "active" : ""}`}
                    >
                      {item.name}
                    </Link>
                    <button
                      ref={triggerBtnRef}
                      id="packages-menu-btn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDropdown();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          openDropdown();
                        }
                      }}
                      aria-label="Toggle Packages submenu"
                      aria-expanded={pkgDropdownOpen}
                      aria-haspopup="true"
                      aria-controls="packages-dropdown-menu"
                      className="nav-link nav-dropdown-trigger"
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          pkgDropdownOpen ? "rotate-180 text-[#D8B43B]" : "opacity-70"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Seamless Dropdown Menu Wrapper */}
                    <div
                      className={`dropdown-menu-wrapper absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
                        pkgDropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                      onMouseEnter={openDropdown}
                      onMouseLeave={() => scheduleCloseDropdown(220)}
                    >
                      {/* Visual Menu Card with hit-bridge */}
                      <div
                        id="packages-dropdown-menu"
                        className="w-72 bg-white text-slate-800 rounded-2xl shadow-xl border border-gray-100 p-2 relative before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:bg-transparent"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="packages-menu-btn"
                      >
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              role="menuitem"
                              onClick={() => closeDropdownImmediately()}
                              className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                                isActive(child.href)
                                  ? "bg-[#D8B43B]/10 text-[#080878] font-bold border border-[#D8B43B]/30"
                                  : "hover:bg-slate-50 text-slate-700 hover:text-[#080878]"
                              }`}
                            >
                              <span className="text-xs font-bold flex items-center justify-between">
                                {child.name}
                                {child.badge && (
                                  <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-medium">
                                    {child.badge}
                                  </span>
                                )}
                              </span>
                              {child.description && (
                                <span className="text-[11px] text-gray-500 font-normal mt-0.5">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Actions (Right) */}
          <div className="header-actions flex items-center gap-2 sm:gap-2.5">
            {/* Phone Button */}
            <a
              href="tel:+919901333113"
              className="nav-phone-btn hidden sm:inline-flex"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91 99013 33113</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`}
              id="menuToggle"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="ham-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="close-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        id="mobileOverlay"
      >
        <nav className="w-full max-w-sm flex flex-col items-center gap-6">
          {MAIN_NAV_ITEMS.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="w-full flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={item.href}
                      className={`text-xl font-semibold transition-colors ${
                        isPackagesActive ? "text-[#D8B43B] font-bold" : "text-[#080878]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobilePkgExpanded(!mobilePkgExpanded)}
                      className="p-2 text-[#080878]"
                      aria-label="Toggle Packages submenu"
                      aria-expanded={mobilePkgExpanded}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobilePkgExpanded ? "rotate-180 text-[#D8B43B]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {mobilePkgExpanded && (
                    <div className="flex flex-col items-center gap-3 py-3 px-6 bg-slate-50 rounded-2xl w-full max-w-xs mt-3 border border-slate-200/80 shadow-inner">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`text-sm font-semibold transition-colors ${
                            isActive(child.href)
                              ? "text-[#D8B43B] font-bold"
                              : "text-gray-700 hover:text-[#D8B43B]"
                          }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobilePkgExpanded(false);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="text-xs font-bold text-[#D8B43B] hover:underline pt-2 border-t border-gray-200 w-full text-center"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobilePkgExpanded(false);
                        }}
                      >
                        View All Packages →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xl font-semibold transition-colors ${
                  isActive(item.href) ? "text-[#D8B43B] font-bold" : "text-[#080878]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Contact & Social Actions */}
        <div className="mobile-socs flex items-center gap-3 mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon bg-emerald-600 text-white border-none w-11 h-11"
            aria-label="WhatsApp"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="tel:+919901333113"
            className="action-icon bg-[#080878] text-white border-none w-11 h-11"
            aria-label="Call Us"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
