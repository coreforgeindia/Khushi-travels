"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    vehicle: "12-seater-luxury",
    date: "",
    passengers: "8-12",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*New Booking Request from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Pickup Locality:* ${formData.pickup}
*Destination:* ${formData.destination}
*Vehicle Selected:* ${formData.vehicle}
*Date of Travel:* ${formData.date}
*Passenger Count:* ${formData.passengers}`;

    const waUrl = `https://wa.me/919901333113?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl border border-gray-100 max-w-2xl mx-auto">
      <div className="text-center mb-3 sm:mb-8">
        <span className="text-brand-amber font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest block mb-1 sm:mb-2">
          Instant Fare Quote
        </span>
        <h3 className="font-heading text-[22px] sm:text-2xl md:text-3xl font-semibold text-brand-navy leading-tight">
          Book Your Luxury Travel
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
          Fill the details below to receive a verified all-inclusive quote in &lt; 5 minutes.
        </p>
      </div>

      {submitted && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
          Thank you! We have opened WhatsApp to connect your booking with our dispatch team.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 text-left">
        {/* Row 1: Full Name and Phone / WhatsApp */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Your Full Name *"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-2.5 sm:px-4 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Phone / WhatsApp *"
            >
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98765 43210"
              className="w-full px-2.5 sm:px-4 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Row 2: Pickup Locality and Destination / Outstation City */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div>
            <label
              htmlFor="pickup"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Pickup Locality in Bangalore *"
            >
              Pickup Locality<span className="hidden sm:inline"> in Bangalore</span> *
            </label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Whitefield, Hebbal"
              className="w-full px-2.5 sm:px-4 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Destination / Outstation City *"
            >
              Destination<span className="hidden sm:inline"> / Outstation City</span> *
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              required
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Mysore, Coorg, Ooty"
              className="w-full px-2.5 sm:px-4 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Row 3: Preferred Vehicle, Travel Date, and Passengers */}
        <div className="grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
          <div>
            <label
              htmlFor="vehicle"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Preferred Vehicle"
            >
              Preferred Vehicle
            </label>
            <select
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full px-2 sm:px-3 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition bg-white"
            >
              <option value="9-seater-maharaja">9 Seater Maharaja TT</option>
              <option value="12-seater-luxury">12 Seater Luxury TT</option>
              <option value="13-seater-luxury">13 Seater Luxury TT</option>
              <option value="16-seater-luxury">16 Seater Luxury TT</option>
              <option value="force-urbania">Force Urbania (10-16 Seater)</option>
              <option value="innova-crysta">Toyota Innova Crysta</option>
              <option value="mini-bus-21">Mini Bus (21-33 Seater)</option>
              <option value="luxury-bus-50">Luxury Bus (35-50 Seater)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Travel Date *"
            >
              Travel Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-2 sm:px-3 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition bg-white"
            />
          </div>

          <div className="col-span-2 min-[380px]:col-span-1">
            <label
              htmlFor="passengers"
              className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide sm:tracking-wider mb-0.5 sm:mb-1 truncate sm:whitespace-normal"
              title="Passengers"
            >
              Passengers
            </label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-2 sm:px-3 py-2 sm:py-3 h-10 sm:h-auto rounded-lg sm:rounded-xl border border-gray-200 text-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition bg-white"
            >
              <option value="1-6">1 - 6 Persons</option>
              <option value="7-9">7 - 9 Persons</option>
              <option value="10-14">10 - 14 Persons</option>
              <option value="15-20">15 - 20 Persons</option>
              <option value="21-50">21 - 50 Persons (Bus)</option>
            </select>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="w-full h-12 sm:h-auto py-2.5 sm:py-4 rounded-xl gradient-amber text-white font-heading font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer mt-3 sm:mt-4 flex items-center justify-center gap-2"
        >
          <span>Get Quote via WhatsApp</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>

        {/* Privacy Reassurance Message */}
        <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-2 sm:mt-3 leading-normal">
          🔒 No spam guaranteed. Your details are solely used for this travel quote.
        </p>
      </form>
    </div>
  );
}
