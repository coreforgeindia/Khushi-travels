import { getWhatsAppUrl } from "@/lib/whatsapp";

const whatsappUrl = getWhatsAppUrl(
  "Hi Khushi Travels, I am enquiring about the 25 day 12 Jyotirlinga pilgrimage. Please confirm the November 3% booking offer or the six month and three month payment plans, including the final payment schedule."
);

export default function PilgrimagePaymentOffer() {
  return (
    <section
      aria-labelledby="pilgrimage-payment-title"
      className="container-custom my-10 sm:my-14"
    >
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
          Three ways to plan your booking
        </p>
        <h2
          id="pilgrimage-payment-title"
          className="mt-2 font-heading text-2xl font-bold text-[#1a365d] sm:text-3xl"
        >
          Offers for the 25 day pilgrimage
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
          The 3% discount is for bookings made in November. The two flexible
          payment plans are available for bookings made in other months.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-amber-200 bg-white p-4">
            <h3 className="font-semibold text-[#1a365d]">November booking offer</h3>
            <p className="mt-1 text-slate-700">
              Save 3% when you book this package in November.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-white p-4">
            <h3 className="font-semibold text-[#1a365d]">6 month EMI plan</h3>
            <p className="mt-1 text-slate-700">₹25,000 per month for 6 months.</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-white p-4">
            <h3 className="font-semibold text-[#1a365d]">3 month EMI plan</h3>
            <p className="mt-1 text-slate-700">
              ₹25,000 per month for 3 months, then the remaining 50% at least
              one month before departure.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-600">
          Complete full payment by 12 May 2027. For the 3 month plan, the
          remaining balance is due at least one month before departure.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1a365d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#102744]"
        >
          Ask about offers and payment plans
        </a>
      </div>
    </section>
  );
}
