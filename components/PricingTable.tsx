import React from "react";

export default function PricingTable() {
  const quickCards = [
    {
      tier: "Standard",
      rate: "₹19",
      unit: "/km",
      vehicle: "12 Seater Standard TT",
      details: "AC • Music System • ₹500 Batta",
    },
    {
      tier: "Luxury",
      rate: "₹28",
      unit: "/km",
      vehicle: "12 Seater Luxury TT",
      details: "Maharaja Seats • LED TV • ₹600 Batta",
      popular: true,
    },
    {
      tier: "Premium",
      rate: "₹38",
      unit: "/km",
      vehicle: "Force Urbania",
      details: "Panoramic • Recliner • ₹600 Batta",
    },
    {
      tier: "Group",
      rate: "₹50",
      unit: "/km",
      vehicle: "Luxury Bus 21-50 Seater",
      details: "Pushback • Dual AC • ₹1000 Batta",
    },
  ];

  const luxuryRows = [
    { name: "Luxury Tempo Traveller (7 Seater)", seats: 7, rate: 35, allowance: 600 },
    { name: "★ Luxury Tempo (9 Seater), Maharaja Seats", seats: 9, rate: 32, allowance: 600, highlight: true },
    { name: "Ultra Luxury Tempo (9 Seater)", seats: 9, rate: 35, allowance: 600 },
    { name: "Luxury Tempo Traveller (10 Seater)", seats: 10, rate: 28, allowance: 600 },
    { name: "★ Luxury Tempo (12 Seater), Maharaja Seats", seats: 12, rate: 28, allowance: 600, highlight: true },
    { name: "Luxury Tempo Traveller (13 Seater)", seats: 13, rate: 35, allowance: 600 },
    { name: "Luxury Tempo Traveller (16 Seater)", seats: 16, rate: 35, allowance: 600 },
  ];

  const standardRows = [
    { name: "Sedan (Swift Dzire / Etios)", seats: 4, rate: 13, allowance: 400 },
    { name: "Toyota Innova Crysta", seats: 7, rate: 18, allowance: 500 },
    { name: "Standard Tempo Traveller (12 Seater)", seats: 12, rate: 19, allowance: 500 },
    { name: "Standard Tempo Traveller (14 Seater)", seats: 14, rate: 21, allowance: 500 },
    { name: "Mini Bus (21 Seater)", seats: 21, rate: 28, allowance: 800 },
    { name: "Deluxe Bus (35 Seater)", seats: 35, rate: 38, allowance: 900 },
    { name: "Luxury Coach (50 Seater)", seats: 50, rate: 50, allowance: 1000 },
  ];

  return (
    <div className="space-y-16">
      {/* Quick Rate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {quickCards.map((card) => (
          <div
            key={card.vehicle}
            className={`rounded-2xl p-6 text-center border transition-all ${
              card.popular
                ? "bg-amber-50/50 border-brand-amber/30 shadow-md ring-1 ring-brand-amber/20"
                : "bg-gray-50 border-gray-100 hover:shadow-md"
            }`}
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">
              {card.tier}
            </p>
            <p className="font-heading font-bold text-3xl text-brand-navy">
              {card.rate}
              <span className="text-lg text-gray-400">{card.unit}</span>
            </p>
            <p className="text-sm font-semibold text-gray-700 mt-2">{card.vehicle}</p>
            <p className="text-xs text-gray-500 mt-1">{card.details}</p>
          </div>
        ))}
      </div>

      {/* Luxury Table */}
      <div>
        <h3 className="font-heading text-h2 text-brand-navy text-center mb-6">
          Luxury Tempo Traveller Rates
        </h3>
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                <th className="p-4 text-left font-bold">Vehicle Model</th>
                <th className="p-4 text-center font-bold">Seating</th>
                <th className="p-4 text-center font-bold">Rate / Km</th>
                <th className="p-4 text-center font-bold">Driver Batta</th>
                <th className="p-4 text-center font-bold">Instant Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {luxuryRows.map((row) => (
                <tr
                  key={row.name}
                  className={`hover:bg-gray-50 transition-colors ${
                    row.highlight ? "bg-amber-50/40" : ""
                  }`}
                >
                  <td className="p-4 font-semibold text-brand-navy">{row.name}</td>
                  <td className="p-4 text-center text-gray-600">{row.seats} Seats</td>
                  <td className="p-4 text-center font-bold text-brand-navy">
                    ₹{row.rate} / km
                  </td>
                  <td className="p-4 text-center text-gray-600">
                    ₹{row.allowance} / day
                  </td>
                  <td className="p-4 text-center">
                    <a
                      href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20pricing%20for%20${encodeURIComponent(
                        row.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-amber hover:underline"
                    >
                      WhatsApp &rarr;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Standard Table */}
      <div>
        <h3 className="font-heading text-h2 text-brand-navy text-center mb-6">
          Standard Fleet &amp; Buses Rates
        </h3>
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                <th className="p-4 text-left font-bold">Vehicle Model</th>
                <th className="p-4 text-center font-bold">Seating</th>
                <th className="p-4 text-center font-bold">Rate / Km</th>
                <th className="p-4 text-center font-bold">Driver Batta</th>
                <th className="p-4 text-center font-bold">Instant Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {standardRows.map((row) => (
                <tr key={row.name} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-brand-navy">{row.name}</td>
                  <td className="p-4 text-center text-gray-600">{row.seats} Seats</td>
                  <td className="p-4 text-center font-bold text-brand-navy">
                    ₹{row.rate} / km
                  </td>
                  <td className="p-4 text-center text-gray-600">
                    ₹{row.allowance} / day
                  </td>
                  <td className="p-4 text-center">
                    <a
                      href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20pricing%20for%20${encodeURIComponent(
                        row.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-amber hover:underline"
                    >
                      WhatsApp &rarr;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Inclusions & Rules */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
        <h4 className="font-heading font-bold text-brand-navy text-lg mb-4">
          Transparent Billing Terms &amp; Conditions
        </h4>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            Minimum 300 km
            billed per calendar day for outstation trips.
          </li>
          <li className="flex items-start gap-2">
            Driver allowance
            (batta) covers 6:00 AM to 10:00 PM duty.
          </li>
          <li className="flex items-start gap-2">
            Highway tolls,
            inter-state permit fees &amp; parking charges as per actual FASTag bills.
          </li>
          <li className="flex items-start gap-2">
            Zero hidden
            surcharges. Clear upfront pricing with no surprise add-ons.
          </li>
        </ul>
      </div>
    </div>
  );
}
