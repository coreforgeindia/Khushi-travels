"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about renting a luxury tempo traveller with Khushi Travels Bangalore.",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-white section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-brand-amber font-bold text-xs uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="font-heading text-h2 font-bold text-brand-navy">
            {title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-brand-navy hover:text-brand-amber transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 text-brand-navy ${
                      isOpen ? "rotate-45 bg-amber-100 text-brand-amber" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
