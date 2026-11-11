"use client";

import React, { useState } from "react";

export default function GoaSpecialEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [travellers, setTravellers] = useState("3");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = "Goa Special Holiday Package (25 Dec 2026 • 2N/3D • ₹13,999/- per person)";
    const msg = `Hi Khushi Travels, I want to enquire about the ${pkg} for ${
      travellers || "3"
    } travellers. My name is ${name} and phone is ${phone}.`;
    const waUrl = `https://wa.me/919901333113?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="goaPackageSelect"
          className="block text-xs font-semibold text-white/80 mb-1"
        >
          Special Package
        </label>
        <input
          type="text"
          id="goaPackageSelect"
          value="Goa Holiday Package • 25 Dec 2026 (₹13,999/- Per Person)"
          readOnly
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-brand-amber font-bold text-sm cursor-not-allowed focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="goaGuestName"
          className="block text-xs font-semibold text-white/80 mb-1"
        >
          Your Full Name
        </label>
        <input
          type="text"
          id="goaGuestName"
          required
          placeholder="e.g. Karthik Rao"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="goaGuestPhone"
          className="block text-xs font-semibold text-white/80 mb-1"
        >
          Mobile / WhatsApp Number
        </label>
        <input
          type="tel"
          id="goaGuestPhone"
          required
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="goaGuestCount"
          className="block text-xs font-semibold text-white/80 mb-1"
        >
          Number of Travellers
        </label>
        <input
          type="number"
          id="goaGuestCount"
          min="1"
          max="50"
          placeholder="e.g. 3"
          value={travellers}
          onChange={(e) => setTravellers(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl gradient-amber text-brand-navy font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all focus:ring-2 focus:ring-brand-amber"
      >
        Book / Enquire on WhatsApp &rarr;
      </button>
      <p className="text-[11px] text-white/60 text-center">
        Direct booking desk: +91 99013 33113 &bull; +91 96327 21942
      </p>
    </form>
  );
}

