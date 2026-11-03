import Link from "next/link";

const offerMessage =
  "Exclusive November offer: book the 25 day pilgrimage in November and save 3%.";

export default function HomeOfferMarquee() {
  return (
    <aside className="home-offer-marquee absolute inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white text-[#1a365d] shadow-[0_-8px_24px_rgba(15,23,42,0.12)]">
      <div className="container-custom flex h-12 items-center gap-3 sm:h-14 sm:gap-5">
        <p className="shrink-0 rounded-md bg-[#1a365d] px-2.5 py-2 text-[9px] font-bold uppercase tracking-wide text-white sm:px-3 sm:text-[10px]">
          November offer
        </p>
        <p className="sr-only">{offerMessage}</p>
        <div
          aria-hidden="true"
          className="min-w-0 flex-1 overflow-hidden whitespace-nowrap"
        >
          <div className="home-offer-marquee-track flex w-max items-center text-xs font-semibold text-[#1a365d] sm:text-sm">
            <span className="pr-10">{offerMessage}</span>
            <span className="pr-10">{offerMessage}</span>
          </div>
        </div>
        <Link
          href="/packages/pilgrimage/12-jyotirlinga-yatra/"
          className="shrink-0 rounded-lg bg-[#f59e0b] px-3 py-2 text-[11px] font-bold text-[#111] transition-colors hover:bg-amber-300 sm:px-4 sm:text-xs"
        >
          View offer
        </Link>
      </div>
    </aside>
  );
}
