"use client";

import React, { useState } from "react";

export default function SpiritualEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState("4");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = "25 Day 12 Jyotirlinga Spiritual Yatra";
    const msg = `Hi Khushi Travels, I want to get an official quote for the ${pkg} for ${count || "4"} pilgrims. My name is ${name} and phone is ${phone}.`;
    const waUrl = `https://wa.me/919901333113?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="packageSelect" className="block text-xs font-semibold text-white/80 mb-1">
          Pilgrimage Package
        </label>
        <input
          type="text"
          id="packageSelect"
          value="25 Day 12 Jyotirlinga Spiritual Yatra"
          readOnly
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-brand-amber font-bold text-sm cursor-not-allowed focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="pilgrimName" className="block text-xs font-semibold text-white/80 mb-1">
          Your Full Name
        </label>
        <input
          type="text"
          id="pilgrimName"
          required
          placeholder="e.g. Ramesh Kumar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="pilgrimPhone" className="block text-xs font-semibold text-white/80 mb-1">
          Mobile / WhatsApp Number
        </label>
        <input
          type="tel"
          id="pilgrimPhone"
          required
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="pilgrimCount" className="block text-xs font-semibold text-white/80 mb-1">
          Number of Pilgrims
        </label>
        <input
          type="number"
          id="pilgrimCount"
          min="1"
          max="50"
          placeholder="e.g. 4"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:border-brand-amber focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl gradient-amber text-brand-navy font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all focus:ring-2 focus:ring-brand-amber"
      >
        Request Official Package Quote &rarr;
      </button>
      <p className="text-[11px] text-white/50 text-center">
        Contact us for the confirmed package price &bull; Zero spam guarantee
      </p>
    </form>
  );
}

