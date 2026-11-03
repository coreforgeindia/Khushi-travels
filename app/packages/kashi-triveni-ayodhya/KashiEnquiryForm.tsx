"use client";

import React, { useState } from "react";

interface KashiEnquiryFormProps {
  className?: string;
  isCompact?: boolean;
}

export default function KashiEnquiryForm({
  className = "",
  isCompact = false,
}: KashiEnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("16 Adults");
  const [rooms, setRooms] = useState("08 Double Rooms");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic 10-digit phone validation for Indian numbers
    const cleanedPhone = phone.replace(/[^0-9]/g, "");
    if (cleanedPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const text = `*Sacred Yatra Enquiry, Khushi Tours & Travels*
---------------------------------------
*Package:* Kashi, Triveni, Ayodhya Yatra
*Duration:* 03 Nights / 04 Days
*Pricing:* ₹17,900 per person (+ 5% GST)
*Group Size:* ${travellers}
*Rooms Required:* ${rooms}
*Proposed Date:* ${travelDate || "Flexible / To be confirmed"}

*Contact Details:*
• *Name:* ${fullName.trim()}
• *Phone:* ${phone.trim()}
${notes.trim() ? `• *Special Notes:* ${notes.trim()}` : ""}
---------------------------------------
Please share the official itemised quotation and availability.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919901333113?text=${encoded}`, "_blank");
  };

  return (
    <div
      className={`bg-white rounded-2xl md:rounded-[22px] border border-[#E8E8F4] p-4 sm:p-6 md:p-7 shadow-xl shadow-slate-900/10 text-left ${className}`}
    >
      {/* Form Header */}
      <div className="mb-3.5 sm:mb-5 pb-3 border-b border-[#E8E8F4]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 text-[#1a365d] text-[10px] font-bold uppercase tracking-wider mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
          <span>Direct Operator Quote</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#1a365d] tracking-tight">
          Book Your Sacred Yatra
        </h3>
        <p className="text-xs text-[#64748B] mt-0.5">
          ₹17,900 / Person (+ 5% GST) &bull; 16 Adults &bull; All Meals &amp; Stays Included
        </p>
      </div>

      {errorMsg && (
        <div className="mb-3 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="kashi-name"
              className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
            >
              Full Name <span className="text-[#DC2626]">*</span>
            </label>
            <input
              id="kashi-name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rajesh Kumar"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] placeholder-slate-400 text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="kashi-phone"
              className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
            >
              Phone / WhatsApp <span className="text-[#DC2626]">*</span>
            </label>
            <input
              id="kashi-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] placeholder-slate-400 text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Group Size & Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="kashi-travellers"
              className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
            >
              Travellers
            </label>
            <select
              id="kashi-travellers"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all"
            >
              <option value="16 Adults">16 Adults (Standard Group)</option>
              <option value="12 to 15 Adults">12 to 15 Adults</option>
              <option value="17 to 20 Adults">17 to 20 Adults</option>
              <option value="Other Group Size">Other Group Size</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="kashi-rooms"
              className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
            >
              Rooms Required
            </label>
            <select
              id="kashi-rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all"
            >
              <option value="08 Double Rooms">08 Double Rooms</option>
              <option value="06 to 07 Rooms">06 to 07 Rooms</option>
              <option value="09 to 10 Rooms">09 to 10 Rooms</option>
              <option value="Custom Rooming">Custom Rooming</option>
            </select>
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label
            htmlFor="kashi-date"
            className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
          >
            Proposed Travel Date
          </label>
          <input
            id="kashi-date"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all"
          />
        </div>

        {/* Special Notes */}
        {!isCompact && (
          <div>
            <label
              htmlFor="kashi-notes"
              className="block text-[11px] font-bold text-[#1E293B] uppercase tracking-wider mb-1"
            >
              Special Requirements (Optional)
            </label>
            <textarea
              id="kashi-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Senior citizens in family, Jain meal preference, arrival train/flight..."
              className="w-full px-3.5 py-2 rounded-xl bg-[#F7F7FB] border border-[#E8E8F4] text-[#1E293B] placeholder-slate-400 text-[15px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all resize-none"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#D97706] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span>Send Booking Enquiry on WhatsApp</span>
          <span className="text-base">&rarr;</span>
        </button>

        {/* Operator Verification Note */}
        <p className="text-[10px] text-center text-[#64748B] pt-1">
          🔒 Instant response &bull; No obligation &bull; Direct operator verification
        </p>
      </form>
    </div>
  );
}
