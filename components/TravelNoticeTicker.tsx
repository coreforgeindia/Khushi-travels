import React from "react";

export default function TravelNoticeTicker() {
  const noticeText =
    "The itinerary listed above is subject to change based on weather, road conditions, and local operational factors. In all matters regarding the execution, route changes, or safety of this trip, the tour operator's decision will be the final decision.";

  return (
    <aside
      className="relative z-30 overflow-hidden border-y border-[#f59e0b]/30 bg-[#1a365d] text-white"
      aria-label="Important Travel Notice"
    >
      <div className="travel-notice-ticker flex h-10 w-full items-center sm:h-11">
        {/* Fixed Left Badge: Info Icon + Heading */}
        <div className="z-20 flex h-full shrink-0 items-center gap-1.5 border-r border-[#f59e0b]/30 bg-[#1a365d] px-3 shadow-[4px_0_12px_rgba(0,0,0,0.25)] sm:gap-2 sm:px-4">
          <svg
            className="h-3.5 w-3.5 shrink-0 text-[#f59e0b] sm:h-4 sm:w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-wider text-[#f59e0b] sm:text-xs">
            IMPORTANT TRAVEL NOTICE
          </span>
        </div>

        {/* Scrolling Viewport Area with Left & Right Soft Edge Fades */}
        <div className="relative flex h-full flex-1 items-center overflow-hidden">
          {/* Subtle Left Fade Gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-[#1a365d] to-transparent sm:w-10" />

          {/* Seamless Infinite Marquee Track (Repeated Twice for Continuous 0% -> -100% Loop) */}
          <div className="travel-notice-ticker-track flex shrink-0 items-center whitespace-nowrap">
            <span className="pl-4 text-[11.5px] font-normal tracking-wide text-white sm:pl-6 sm:text-xs md:text-sm">
              {noticeText}
            </span>
            <span className="mx-6 text-xs text-[#f59e0b] sm:mx-8" aria-hidden="true">
              ✦
            </span>
          </div>

          <div
            className="travel-notice-ticker-track flex shrink-0 items-center whitespace-nowrap"
            aria-hidden="true"
          >
            <span className="pl-4 text-[11.5px] font-normal tracking-wide text-white sm:pl-6 sm:text-xs md:text-sm">
              {noticeText}
            </span>
            <span className="mx-6 text-xs text-[#f59e0b] sm:mx-8" aria-hidden="true">
              ✦
            </span>
          </div>

          {/* Subtle Right Fade Gradient */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-6 bg-gradient-to-l from-[#1a365d] to-transparent sm:w-10" />
        </div>
      </div>
    </aside>
  );
}
