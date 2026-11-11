import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCoverage from "@/components/ServiceCoverage";
import ItineraryDaysAccordion from "@/components/ItineraryDaysAccordion";
import SpiritualEnquiryForm from "@/components/SpiritualEnquiryForm";
import TravelNoticeTicker from "@/components/TravelNoticeTicker";
import PilgrimagePaymentOffer from "@/components/PilgrimagePaymentOffer";
import { getAssetPath, getResponsiveImageProps } from "@/lib/assets";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "12 Jyotirlinga Tour Package from Bangalore | Khushi Travels",
  description:
    "Explore a 12 Jyotirlinga tour package from Bangalore. Request the proposed yatra itinerary, dates, inclusions and package price from Khushi Travels.",
  keywords: [
    "12 Jyotirlinga tour package from Bangalore",
    "12 Jyotirlinga yatra from Bengaluru",
    "12 Jyotirlinga travel package",
    "12 Jyotirlinga yatra package price",
    "12 Jyotirlinga darshan tour package",
    "12 Jyotirlinga tour package cost",
    "25 day Jyotirlinga pilgrimage",
    "Jyotirlinga pilgrimage package",
    "all India Shiva temple tour",
    "pilgrimage tour operator Bangalore",
  ],
  alternates: {
    canonical:
      "https://khushitravel.in/packages/pilgrimage/12-jyotirlinga-yatra/",
  },
  openGraph: {
    type: "website",
    url: "https://khushitravel.in/packages/pilgrimage/12-jyotirlinga-yatra/",
    title: "12 Jyotirlinga Tour Package from Bangalore | Khushi Travels",
    description:
      "Explore the proposed 12 Jyotirlinga yatra from Bangalore. Ask Khushi Travels to confirm the itinerary, dates, inclusions and current package price.",
    images: [
      {
        url: "https://khushitravel.in/images/optimized/og/somnath.webp",
        width: 1200,
        height: 630,
        alt: "12 Jyotirlinga Spiritual Yatra from Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Jyotirlinga Tour Package from Bangalore | Khushi Travels",
    description:
      "Explore the proposed 12 Jyotirlinga yatra from Bangalore. Request the itinerary, dates and current package details.",
    images: ["https://khushitravel.in/images/optimized/og/somnath.webp"],
  },
};

export default function SpiritualPilgrimagePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/packages/" },
    { label: "Pilgrimage Packages", href: "/packages/pilgrimage/" },
    { label: "12 Jyotirlinga Tour Package", href: "/packages/pilgrimage/12-jyotirlinga-yatra/" },
  ];

  const jyotirlingas = [
    {
      num: 1,
      name: "Somnath Jyotirlinga",
      image: "/images/destinations/jyotirlingas/somnath.webp",
      alt: "Somnath Jyotirlinga Temple on the Gujarat coast",
      location: "Prabhas Patan • Gujarat",
      phase: "Phase 1 • Western Circuit",
      desc: "The first among all twelve Jyotirlingas, revered as the Shrine Eternal on the Arabian Sea coast, celebrated for its magnificent coastal sandhya aarti.",
    },
    {
      num: 2,
      name: "Mallikarjuna Jyotirlinga",
      image: "/images/destinations/jyotirlingas/mallikarjuna.webp",
      alt: "Mallikarjuna Jyotirlinga Temple at Srisailam",
      location: "Srisailam • Andhra Pradesh",
      phase: "Phase 5 • Southern Circuit",
      desc: "Perched amidst the Nallamala forest hills on the Krishna River, unique as both a sacred Jyotirlinga and a Maha Shakti Peeth (Bhramaramba Devi).",
    },
    {
      num: 3,
      name: "Mahakaleshwar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/mahakaleshwar.webp",
      alt: "Mahakaleshwar Jyotirlinga Temple in Ujjain",
      location: "Ujjain • Madhya Pradesh",
      phase: "Phase 2 • Central Circuit",
      desc: "The only south-facing (Dakshinmukhi) Jyotirlinga, situated on the sacred Shipra River in holy Avantika, world-famous for its divine Bhasma Aarti.",
    },
    {
      num: 4,
      name: "Omkareshwar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/omkareshwar.webp",
      alt: "Omkareshwar Jyotirlinga on Mandhata Island in Narmada",
      location: "Narmada Island • Madhya Pradesh",
      phase: "Phase 2 • Central Circuit",
      desc: "Consecrated on holy Mandhata Island shaped naturally like the sacred 'Om' syllable in the Narmada River, enshrining Omkareshwar and Mamleshwar.",
    },
    {
      num: 5,
      name: "Kedarnath Jyotirlinga",
      image: "/images/destinations/jyotirlingas/kedarnath.webp",
      alt: "Kedarnath Jyotirlinga Temple amidst Himalayan peaks",
      location: "Rudraprayag • Uttarakhand",
      phase: "Phase 3 • Himalayan Circuit",
      desc: "The highest Jyotirlinga at 3,583m in the Garhwal Himalayas, surrounded by snow-clad peaks, accessible via a demanding 16 km mountain trek.",
    },
    {
      num: 6,
      name: "Bhimashankar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/bhimashankar.webp",
      alt: "Bhimashankar Jyotirlinga Temple in Sahyadri Western Ghats",
      location: "Pune District • Maharashtra",
      phase: "Phase 1 • Western Ghats",
      desc: "Nestled in the lush evergreen Sahyadri hills, the sacred source of the Bhima River renowned for its ancient Nagara black stone architecture.",
    },
    {
      num: 7,
      name: "Kashi Vishwanath",
      image: "/images/destinations/jyotirlingas/kashi-vishwanath.webp",
      alt: "Kashi Vishwanath Jyotirlinga on the Ganges in Varanasi",
      location: "Varanasi • Uttar Pradesh",
      phase: "Phase 4 • Sacred Ganga Corridor",
      desc: "The eternal heart of spiritual India along the holy Ganges in Varanasi, enshrining the golden-spire Jyotirlinga and newly restored grand corridor.",
    },
    {
      num: 8,
      name: "Trimbakeshwar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/trimbakeshwar.webp",
      alt: "Trimbakeshwar Jyotirlinga Temple at Brahmagiri Nashik",
      location: "Nashik • Maharashtra",
      phase: "Phase 1 • Western Circuit",
      desc: "Situated at the foothills of Brahmagiri near the source of holy Godavari River, enshrining a three-faced linga embodying Brahma, Vishnu, and Shiva.",
    },
    {
      num: 9,
      name: "Baidyanath Jyotirlinga",
      image: "/images/destinations/jyotirlingas/baidyanath.webp",
      alt: "Baidyanath Dham Jyotirlinga Temple complex in Deoghar",
      location: "Deoghar • Jharkhand",
      phase: "Phase 4 • Eastern Circuit",
      desc: "Revered as the Kamna Linga where Lord Shiva resides as the divine healer (Vaidya), set in a venerable complex of 21 sacred stone shrines.",
    },
    {
      num: 10,
      name: "Nageshwar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/nageshwar.webp",
      alt: "Nageshwar Jyotirlinga Temple with giant Shiva statue near Dwarka",
      location: "Dwarka • Gujarat",
      phase: "Phase 1 • Western Circuit",
      desc: "Celebrated as the cosmic pillar of divine protection near sacred Dwarka, featuring an underground sanctum and an imposing seated statue of Lord Shiva.",
    },
    {
      num: 11,
      name: "Ramanathaswamy Jyotirlinga",
      image: "/images/destinations/jyotirlingas/ramanathaswamy.webp",
      alt: "Ramanathaswamy Temple corridor in Rameshwaram",
      location: "Rameshwaram • Tamil Nadu",
      phase: "Phase 5 • Southern Circuit",
      desc: "Consecrated by Bhagwan Shri Ram on Rameshwaram Island, world-renowned for its longest pillared corridors, Agni Theertham, and 22 sacred well baths.",
    },
    {
      num: 12,
      name: "Grishneshwar Jyotirlinga",
      image: "/images/destinations/jyotirlingas/grishneshwar.webp",
      alt: "Grishneshwar Jyotirlinga Temple near Ellora Caves",
      location: "Ellora • Maharashtra",
      phase: "Phase 1 • Western Circuit",
      desc: "The twelfth and final Jyotirlinga, built from carved red basalt stone with a five-tier shikhara, situated peacefully near the historic Ellora Caves.",
    },
  ];

  const sacredDestinations = [
    {
      name: "Mathura",
      state: "Uttar Pradesh • Sacred Braj Bhoomi",
      image: "/images/destinations/mathura.webp",
      alt: "Shri Krishna Janmabhoomi in Mathura",
      phase: "Phase 2: Braj Region",
      desc: "The hallowed birthplace of Lord Shri Krishna on the sacred Yamuna River. A focal center of devotional Hinduism resonating with ancient lore and timeless hymns.",
      highlights: [
        "Shri Krishna Janmabhoomi Mandir Complex",
        "Keshavdev Ji Mandir & Potra Kund",
        "Sacred Yamuna River Ghats (subject to arrival hour)",
      ],
    },
    {
      name: "Vrindavan",
      state: "Uttar Pradesh • Divine Bhakti Dham",
      image: "/images/destinations/vrindavan.webp",
      alt: "Prem Mandir and Banke Bihari in Vrindavan",
      phase: "Phase 2: Braj Region",
      desc: "The sacred forest of Radha and Krishna's childhood pastimes, celebrated worldwide for its deeply spiritual ambiance, majestic marble temples, and vibrant devotional chants.",
      highlights: [
        "Shri Banke Bihari Temple Darshan",
        "Magnificent White Marble Prem Mandir",
        "ISKCON Vrindavan (Krishna Balaram Mandir)",
      ],
    },
    {
      name: "Ayodhya",
      state: "Uttar Pradesh • Maryada Purushottam Dham",
      image: "/images/destinations/ayodhya.webp",
      alt: "Shri Ram Janmabhoomi Mandir in Ayodhya",
      phase: "Phase 4: Sacred UP & Bihar",
      desc: "The sacred city of Bhagwan Shri Ram on the banks of holy Saryu River, featuring the newly consecrated Ram Janmabhoomi Mandir and ancient Hanuman Garhi.",
      highlights: [
        "Shri Ram Janmabhoomi Mandir Darshan",
        "Historic Hanuman Garhi Fort Temple",
        "Saryu River Ghats & Evening Aarti",
      ],
    },
    {
      name: "Gaya",
      state: "Bihar • Sacred Falgu River",
      image: "/images/destinations/gaya.webp",
      alt: "Vishnupad Temple in Gaya",
      phase: "Phase 4: Sacred UP & Bihar",
      desc: "The ancient holy city revered across India for ancestral rites, situated along the sacred Falgu River featuring the venerable stone Vishnupad Temple.",
      highlights: [
        "Vishnupad Temple Darshan (Lord Vishnu's footprint)",
        "Akshayavat Sacred Banyan Tree",
        "Falgu River Bank Prayers",
      ],
    },
    {
      name: "Bodh Gaya",
      state: "Bihar • Enlightenment Mahabodhi",
      image: "/images/destinations/bodh-gaya.webp",
      alt: "Mahabodhi Temple in Bodh Gaya",
      phase: "Phase 4: Sacred UP & Bihar",
      desc: "One of the most sacred spiritual sanctuaries on Earth, where Bhagwan Buddha attained supreme enlightenment beneath the sacred Bodhi Tree.",
      highlights: [
        "UNESCO World Heritage Mahabodhi Temple Complex",
        "Sacred Bodhi Tree & Vajrasana Throne",
        "Great Buddha Statue (80-foot stone monument)",
      ],
    },
    {
      name: "Puri",
      state: "Odisha • Eastern Char Dham",
      image: "/images/destinations/puri-jagannath.webp",
      alt: "Shri Jagannath Temple in Puri",
      phase: "Phase 5: Odisha & Return",
      desc: "The holy coastal Dham of Lord Jagannath on the Bay of Bengal, known worldwide for its grand spiritual heritage, monumental stone architecture, and divine Mahaprasad.",
      highlights: [
        "Shri Jagannath Temple Darshan",
        "Sacred Swargadwar Beach Area",
        "Konark Sun Temple view (if highway schedule allows)",
      ],
    },
  ];

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "12 Jyotirlinga Spiritual Yatra",
    description:
      "Proposed 25 day pilgrimage from Bengaluru covering India's twelve Jyotirlingas. Final routing, transport and inclusions are confirmed with the operator.",
    url: `${SITE_URL}/packages/pilgrimage/12-jyotirlinga-yatra/`,
    touristType: ["Pilgrims", "Families", "Groups"],
    provider: { "@id": `${SITE_URL}/#organization` },
    itinerary: {
      "@type": "ItemList",
      itemListElement: jyotirlingas.map((shrine, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: shrine.name,
        description: shrine.desc,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the duration of the complete 12 Jyotirlinga tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The proposed package duration is 25 Days / 24 Nights starting and concluding in Bengaluru. The schedule is structured across five geographic phases with scheduled rest stops and driver rotation to ensure passenger comfort. Final duration and departure schedules are subject to tour operator review and confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "Are all 12 Jyotirlingas covered in this single journey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the planned itinerary covers all 12 sacred Jyotirlingas: Somnath (Gujarat), Mallikarjuna (Andhra Pradesh), Mahakaleshwar (Madhya Pradesh), Omkareshwar (Madhya Pradesh), Kedarnath (Uttarakhand), Bhimashankar (Maharashtra), Kashi Vishwanath (Uttar Pradesh), Trimbakeshwar (Maharashtra), Baidyanath (Jharkhand), Nageshwar (Gujarat), Ramanathaswamy (Tamil Nadu), and Grishneshwar (Maharashtra).",
        },
      },
      {
        "@type": "Question",
        name: "How are Mathura, Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These six sacred destinations are scheduled as conditional spiritual extensions along the geographic travel route. They are visited whenever time, highway traffic conditions, and local darshan regulations comfortably permit, serving as enriching pilgrimage highlights without replacing or compromising any of the core 12 Jyotirlinga darshans.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 12 Jyotirlinga yatra package price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact Khushi Travels for the current 12 Jyotirlinga tour package price. The final quote depends on confirmed travel dates, group size, transport, accommodation and inclusions. No fixed price is published on this page; ask for an itemized quotation before booking.",
        },
      },
      {
        "@type": "Question",
        name: "Is this an IRCTC 12 Jyotirlinga tour package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This is a proposed pilgrimage package from Khushi Travels and is not an IRCTC-operated or IRCTC-priced tour. Confirm the transport mode and any rail tickets directly with Khushi Travels before booking.",
        },
      },
      {
        "@type": "Question",
        name: "Are helicopter, doli, or pony charges for Kedarnath included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Helicopter/chopper tickets, doli/palanquin charges, and horse/pony fares are strictly excluded from the base package. Because these services are governed by strict biometric registrations and variable passenger preferences, pilgrims arrange these directly or via our tour coordinator's guidance at actual cost.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of food and accommodation is provided?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The package includes 3-star deluxe hotel rooms on a comfortable double-sharing basis with attached bathrooms and running hot water, if confirmed. Three daily wholesome pure vegetarian meals (breakfast, lunch, and dinner) prepared under hygienic satvik standards are fully covered in the confirmed package.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        className="spiritual-yatra-hero relative flex min-h-[100vh] min-h-[100svh] flex-col justify-center overflow-visible px-0 pt-20 pb-5 sm:pt-24 sm:pb-8 md:pt-24 md:pb-8 lg:h-[100vh] lg:h-[100svh] lg:min-h-0 lg:pt-24 lg:pb-6"
        style={{
          background:
            `linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,54,93,0.90) 100%), url('${getAssetPath("/images/hero-bg.webp")}') center/cover no-repeat`,
        }}
      >
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />

            {/* Eyebrow */}
            <p className="text-[10px] sm:text-xs font-bold text-brand-amber uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 lg:mb-3">
              Khushi Tours &amp; Travels &bull; 12 Jyotirlinga Yatra from Bangalore
            </p>

            {/* Main Heading */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight mb-1.5 sm:mb-2.5 lg:mb-3 text-balance">
              12 Jyotirlinga Tour Package <span className="text-brand-amber">from Bangalore</span>
            </h1>

            {/* Subtitle */}
            <p className="font-heading text-xs sm:text-sm md:text-xl lg:text-xl text-amber-200/90 font-semibold mb-2 sm:mb-3 lg:mb-4 text-balance leading-snug">
              Proposed 12 Jyotirlinga Yatra • Itinerary and current package price on enquiry
            </p>

            {/* Supporting Description */}
            <p className="text-[11.5px] sm:text-sm md:text-base lg:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-5 lg:mb-4 line-clamp-3 sm:line-clamp-none">
              Looking for a 12 Jyotirlinga tour package from Bangalore? Review Khushi Tours &amp; Travels&apos; proposed
              25-day pilgrimage starting and ending in Bengaluru, visiting
              India&apos;s twelve revered Jyotirlingas and exploring additional spiritual destinations including Mathura,
              Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri, subject to route confirmation and operational review.
            </p>

            {/* Core Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2.5 lg:gap-3 mb-3.5 sm:mb-6 lg:mb-4 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Duration</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">25 Days</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">Proposed schedule</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Jyotirlingas</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">All 12 Shrines</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">Pan-India circuit</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Sacred Sites</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">+6 Sacred Places</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">Subject to confirmation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Transport</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">AC Volvo Coach</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">If confirmed in quote</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Stay</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">3-Star Deluxe</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">Double-sharing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-brand-amber tracking-wider block">Meals</span>
                <span className="text-white text-xs sm:text-sm font-bold block mt-0.5">3-Time Pure Veg</span>
                <span className="text-white/50 text-[9px] sm:text-[10px] block mt-0.5">Breakfast, lunch, dinner</span>
              </div>
            </div>

            {/* Pricing & Action Strip */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 sm:p-4 lg:p-4 rounded-xl sm:rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-left">
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-brand-amber tracking-wider block">Pricing Notice</span>
                <p className="text-sm sm:text-lg lg:text-xl font-bold text-white mt-0.5 leading-snug">Contact us for the confirmed package price.</p>
                <p className="text-[10.5px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">Official itemized quotation and departure dates provided on request.</p>
              </div>
              <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <a
                  href="#enquiry"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl gradient-amber text-brand-navy font-bold text-xs sm:text-sm transition-all shadow-md sm:shadow-lg hover:shadow-xl focus:ring-2 focus:ring-brand-amber text-center whitespace-nowrap"
                >
                  Get Package Quote
                </a>
                <a
                  href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%2025 Day%2012%20Jyotirlinga%20Spiritual%20Yatra%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md sm:shadow-lg focus:ring-2 focus:ring-emerald-400 text-center whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT TRAVEL NOTICE TICKER ===== */}
      <TravelNoticeTicker />

      {/* ===== OPERATOR REVIEW & ROUTING NOTICE ===== */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-brand-navy">
            <div className="flex items-center gap-2 font-medium">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-amber text-brand-navy font-semibold flex items-center justify-center text-xs">
                !
              </span>
              <span>
                <strong>Planning Notice:</strong> This 25-day package itinerary is currently <strong>Proposed</strong>{" "}
                and subject to final tour operator approval. Optional spiritual sightseeing is scheduled conditionally
                only when highway transit, mountain road clearances, and darshan queue hours permit.
              </span>
            </div>
            <div className="shrink-0">
              <a href="#enquiry" className="text-brand-navy font-bold hover:text-brand-amber underline">
                Enquire with Our Tour Planner &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE 12 DWADASHA JYOTIRLINGAS CIRCUIT ===== */}
      <PilgrimagePaymentOffer />

      <section className="bg-white section-py" id="jyotirlingas">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              The Sacred Circuit
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              All 12 Dwadasha Jyotirlingas Covered
            </h2>
            <p className="text-body text-gray-600 mt-2">
              The core spiritual pillar of this grand pilgrimage is the divine darshan of all twelve swayambhu
              manifestations of Lord Shiva across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jyotirlingas.map((j) => (
              <div
                key={j.name}
                id={j.name === "Mahakaleshwar Jyotirlinga" ? "mahakaleshwar-jyotirlinga" : undefined}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:border-brand-amber hover:shadow-lg transition-all flex flex-col h-full group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    {...getResponsiveImageProps(j.image, "(max-width: 768px) 100vw, 25vw")}
                    alt={j.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-brand-navy/90 text-brand-amber font-semibold text-xs flex items-center justify-center border border-brand-amber/40 shadow">
                    {j.num}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                      {j.location}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-brand-navy mb-2">
                      {j.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {j.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-medium">
                    {j.phase}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL SACRED DESTINATIONS (CONDITIONAL) ===== */}
      <section className="bg-gray-50 section-py border-t border-gray-200" id="additional-destinations">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Conditional Itinerary Extensions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3 text-balance">
              Additional Sacred Destinations, Subject to Route Confirmation
            </h2>
            <p className="text-body text-gray-600 mt-3 text-balance">
              These revered holy places are scheduled as conditional, route-dependent extensions. Visits are undertaken
              only when highway transit timings, weather clearances, driver duty limits, and local temple darshan queues
              permit without compromising the core 12 Jyotirlinga pilgrimage schedule.
            </p>
          </div>

          {/* Operational Distinction Callout */}
          <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-xs text-amber-950 flex items-start gap-3">
            <span className="text-brand-amber font-semibold text-base leading-none mt-0.5">⚠️</span>
            <div>
              <strong>Operational Distinction:</strong> The 12 Jyotirlingas form the core guaranteed foundation of this
              pilgrimage circuit. The six destinations below (Mathura, Vrindavan, Ayodhya, Gaya, Bodh Gaya, and Puri) are
              planned along the geographic transit corridor and remain <strong>subject to tour operator confirmation</strong>{" "}
              based on real-time highway conditions, state border clearances, and crowd density.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sacredDestinations.map((dest) => (
              <div
                key={dest.name}
                className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    {...getResponsiveImageProps(dest.image, "(max-width: 768px) 100vw, 33vw")}
                    alt={dest.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-amber-200 text-xs font-semibold">
                      Conditional Visit &bull; Subject to Time
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-heading text-2xl font-semibold">{dest.name}</h3>
                    <p className="text-xs text-amber-200 font-medium">{dest.state}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{dest.desc}</p>
                    <div className="border-t border-gray-200 pt-3">
                      <span className="text-xs font-bold text-brand-navy block mb-1">
                        Planned Highlights (If Route Permits):
                      </span>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                        {dest.highlights.map((hl) => (
                          <li key={hl}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>{dest.phase}</span>
                    <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded">
                      Conditional Stop
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE 25-DAY ITINERARY ===== */}
      <section className="bg-white section-py" id="itinerary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Day-by-Day Journey Plan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3 text-balance">
              Proposed 25 Day Comprehensive Itinerary
            </h2>
            <p className="text-body text-gray-600 mt-2 text-balance">
              A proposed pan-India pilgrimage circuit starting and concluding in Bengaluru. All daily itineraries remain{" "}
              <strong>Proposed</strong> pending tour operator approval, featuring verified highway estimates, mandatory
              dual driver rotations, and operational review advisories.
            </p>

            {/* Operator Feasibility Recommendation Callout */}
            <div className="mt-6 text-left p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-xs text-amber-950 leading-relaxed">
              <strong>⚠️ Operator Feasibility Recommendation:</strong> A pan-India circuit covering 12 Jyotirlingas and 6
              additional shrines across 10,000 km+ in 25 calendar days represents an intensive travel pace. The tour
              operator recommends that passengers consider whether to: <em>(Option A)</em> Streamline the circuit to
              focus strictly on the 12 Jyotirlingas for a more relaxed darshan rhythm, or <em>(Option B)</em> Extend the
              yatra to 28 to 30 days to incorporate mandatory driver rest buffer days and mountain weather allowances.
            </div>
          </div>

          <ItineraryDaysAccordion />
        </div>
      </section>

      {/* ===== PACKAGE INCLUSIONS & EXCLUSIONS ===== */}
      <section className="bg-gray-50 section-py border-t border-gray-200" id="inclusions">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Clarity &amp; Transparency
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              Package Inclusions &amp; Exclusions, Subject to Final Operator Quotation
            </h2>
            <p className="text-body text-gray-600 mt-2">
              Every aspect of your pilgrimage is organized with complete transparency. Items below represent the
              proposed package standard and will be formally verified in your official booking quotation based on coach
              availability and hotel allotment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Inclusions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-brand-navy">Package Inclusions (If Confirmed)</h3>
                </div>
                <ul className="space-y-3.5 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>AC Volvo Transportation:</strong> Dedicated AC Volvo coach as specified in the confirmed
                      operator quotation, equipped with reclining seats and air suspension.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Driver Charges &amp; Allowances:</strong> Professional commercial driver fees, driver
                      night allowances, interstate road permits, toll charges, and parking fees according to the final
                      quotation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Temple Entry &amp; Local Fares:</strong> Applicable general temple entry tickets and
                      authorized local auto-rickshaw or connecting shuttle bus fares, if confirmed in the final voucher.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Deluxe Accommodation:</strong> 3-star deluxe hotel rooms on a double-sharing basis with
                      attached bathrooms and running hot water, if confirmed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Three Pure Vegetarian Meals:</strong> Wholesome daily breakfast, lunch, and dinner served
                      as 100% pure vegetarian satvik meals, according to the final meal plan.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
                <strong>Approval Policy:</strong> No inclusion is deemed confirmed until formally itemized and signed in
                the official tour operator quotation.
              </div>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-brand-navy">Package Exclusions</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Helicopter / Chopper Fares:</strong> Any helicopter services for Kedarnath or other
                      shrines (pilgrims arrange tickets directly via official portal).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Doli / Palanquin Fares:</strong> Personal doli carriers for mountain treks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Horse / Pony / Mule Fares:</strong> Animal rides or personal luggage porters for mountain
                      ascents.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Personal Expenses:</strong> Laundry, telephone calls, room service, special puja
                      dakshina, and pooja samagri.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Airfare &amp; Train Fare:</strong> Connecting flight or train journeys before or after the
                      tour.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Travel &amp; Medical Insurance:</strong> Individual medical or travel insurance coverage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Extra Meals &amp; Beverages:</strong> Snacks, packaged drinks, or meals outside scheduled
                      group dining hours.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong>Unforeseen Disruptions:</strong> Costs arising from landslides, severe weather closures,
                      roadblocks, political strikes, or medical emergencies.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                <strong>Mandatory Exclusions Notice:</strong> Helicopter, doli/palanquin, and horse/pony services for
                Kedarnath trek or any uphill climbs are strictly not included in the standard package and must be
                arranged directly by passengers based on individual health and preference.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PILGRIMS TRUST KHUSHI TRAVELS ===== */}
      <section className="bg-[#FAFAF7] py-16 sm:py-20 md:py-24 border-t border-[#E8E8F4]" aria-labelledby="advantage-heading">
        <div className="container-custom max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-[#f59e0b] font-bold text-xs uppercase tracking-widest">
              THE KHUSHI TRAVELS ADVANTAGE
            </span>
            <h2
              id="advantage-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#1a365d] tracking-tight leading-tight mt-3 mb-4"
            >
              Why Pilgrims Trust Khushi Travels
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Organizing long-distance devotional group travel from Bengaluru with proven highway standards and verified operations.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto mb-12">
            {/* Card 1: Dedicated In-House Fleet */}
            <div className="group relative bg-[#FFFFFF] rounded-[20px] border border-[#E8E8F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:border-[#f59e0b]/50 motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-reduce:transform-none flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center mb-5 shrink-0 motion-safe:transition-transform motion-safe:duration-[250ms] group-hover:scale-105">
                  <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d] mb-2 leading-snug">
                  Dedicated In-House Fleet
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Maintained in-house by expert mechanics with zero sub-contracting risk for maximum reliability on pan-India highways.
                </p>
              </div>
            </div>

            {/* Card 2: Pure Vegetarian Dining */}
            <div className="group relative bg-[#FFFFFF] rounded-[20px] border border-[#E8E8F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:border-[#f59e0b]/50 motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-reduce:transform-none flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center mb-5 shrink-0 motion-safe:transition-transform motion-safe:duration-[250ms] group-hover:scale-105">
                  <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2v20" />
                    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    <path d="M4 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V2" />
                    <path d="M8 2v20" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d] mb-2 leading-snug">
                  Pure Vegetarian Dining
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Three daily hot, wholesome vegetarian meals freshly prepared and served in compliance with religious traditions.
                </p>
              </div>
            </div>

            {/* Card 3: Senior-Friendly Travel */}
            <div className="group relative bg-[#FFFFFF] rounded-[20px] border border-[#E8E8F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:border-[#f59e0b]/50 motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-reduce:transform-none flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center mb-5 shrink-0 motion-safe:transition-transform motion-safe:duration-[250ms] group-hover:scale-105">
                  <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.86.86 2.22.86 3.08 0L15 8" />
                    <path d="m8 15 2 2" />
                    <path d="m14 15-2 2" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d] mb-2 leading-snug">
                  Senior-Friendly Travel
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Experienced tour managers assisting with accessible boarding, luggage coordination, queue guidance, and darshan pacing.
                </p>
              </div>
            </div>

            {/* Card 4: Transparent Pricing */}
            <div className="group relative bg-[#FFFFFF] rounded-[20px] border border-[#E8E8F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:border-[#f59e0b]/50 motion-safe:transition-all motion-safe:duration-[250ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-reduce:transform-none flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center mb-5 shrink-0 motion-safe:transition-transform motion-safe:duration-[250ms] group-hover:scale-105">
                  <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
                    <path d="M14 8H8" />
                    <path d="M16 12H8" />
                    <path d="M13 16H8" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1a365d] mb-2 leading-snug">
                  Transparent Pricing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Line-item breakdown provided in writing. All confirmed package details, inclusions, and exclusions documented upfront.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== BOOKING TERMS & IMPORTANT TRAVEL INFORMATION ===== */}
      <section className="bg-gray-50 section-py border-t border-gray-200" id="booking-info">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Booking &amp; Policies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              Booking &amp; Important Travel Information
            </h2>
            <p className="text-body text-gray-600 mt-2">
              Essential payment terms and key travel advisories for our 25-day spiritual yatra.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-amber/15 text-brand-navy font-bold flex items-center justify-center text-lg">
                  <svg
                    className="w-5 h-5 text-brand-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-brand-navy">Payment Terms</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 50% Advance */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                        Stage 01 &bull; At Confirmation
                      </span>
                      <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-amber tracking-tight">
                        50%
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">50% Advance Payment</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                    50% of the package amount must be paid at the time of booking confirmation.
                  </p>
                </div>

                {/* 50% Balance */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-navy/80 bg-brand-navy/5 px-2.5 py-1 rounded-md border border-brand-navy/10">
                        Stage 02 &bull; Pre-Departure
                      </span>
                      <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
                        50%
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">50% Balance Payment</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                    The remaining 50% must be paid at least one month before the tour start date.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Travel Notice */}
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200/90 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-amber/15 shrink-0 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-5 h-5 text-brand-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-brand-navy mb-1.5">
                    Important Travel Notice
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The itinerary listed above is subject to change based on weather, road conditions, and local
                    operational factors. In all matters regarding the execution, route changes, or safety of this trip,
                    the tour operator&apos;s decision will be the final decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY & CONTACT SECTION ===== */}
      <section className="bg-brand-navy section-py text-white" id="enquiry">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-5">
              <span className="text-xs uppercase font-bold text-brand-amber tracking-widest inline-block">
                Plan Your Yatra
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance">
                Enquire for Confirmed Package Price &amp; Departure Dates
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Speak directly with our pilgrimage travel desk to review the proposed 25-day itinerary, discuss custom
                pickup points in Bengaluru, and receive confirmed pricing for your family or group.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <span>Dedicated Kannada, Telugu, Hindi &amp; English coordinators</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span>Transparent custom quotes for families &amp; devotional groups</span>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919901333113"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-amber hover:bg-amber-400 text-brand-navy font-bold text-sm transition-all shadow-lg focus:ring-2 focus:ring-brand-amber"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call +91 99013 33113
                </a>
                <a
                  href="https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20enquire%20about%20the%2025 Day%2012%20Jyotirlinga%20Spiritual%20Yatra%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg focus:ring-2 focus:ring-emerald-400"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="md:col-span-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="font-heading text-xl font-bold text-white mb-1">Get Package Quote</h3>
              <p className="text-xs text-white/60 mb-5">
                Receive an official itemized quotation for your pilgrimage group.
              </p>
              <SpiritualEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section className="bg-gray-50 section-py border-t border-gray-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-amber font-bold text-xs uppercase tracking-widest">
              Common Inquiries
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-body text-gray-600 mt-2">
              Essential operational information regarding the proposed 25-day pan-India pilgrimage.
            </p>
          </div>

          <div className="space-y-4">
            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>What is the duration of the complete 12 Jyotirlinga tour?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                The proposed package duration is <strong>25 Days / 24 Nights</strong> starting and concluding in
                Bengaluru. The schedule is structured across five geographic phases with scheduled rest stops and driver
                rotation to ensure passenger comfort. Final duration and departure schedules are subject to tour operator
                review and confirmation.
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>Are all 12 Jyotirlingas covered in this single journey?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                Yes, the planned itinerary covers all 12 sacred Jyotirlingas: Somnath (Gujarat), Mallikarjuna (Andhra
                Pradesh), Mahakaleshwar (Madhya Pradesh), Omkareshwar (Madhya Pradesh), Kedarnath (Uttarakhand),
                Bhimashankar (Maharashtra), Kashi Vishwanath (Uttar Pradesh), Trimbakeshwar (Maharashtra), Baidyanath
                (Jharkhand), Nageshwar (Gujarat), Ramanathaswamy (Tamil Nadu), and Grishneshwar (Maharashtra).
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>How are Mathura, Vrindavan, Ayodhya, Gaya, Bodh Gaya and Puri included?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                These six sacred destinations are scheduled as <em>conditional spiritual extensions along the geographic
                  travel route</em>. They are visited whenever time, highway traffic conditions, and local darshan
                regulations comfortably permit, serving as enriching pilgrimage highlights without replacing or
                compromising any of the core 12 Jyotirlinga darshans.
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>What is the 12 Jyotirlinga yatra package price?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                Contact Khushi Travels for the current <strong>12 Jyotirlinga tour package price</strong>. The final
                quote depends on confirmed travel dates, group size, transport, accommodation, and inclusions. No fixed
                price is published on this page; ask for an itemized quotation before booking.
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>Is this an IRCTC 12 Jyotirlinga tour package?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                No. This is a proposed pilgrimage package from Khushi Travels and is not an IRCTC-operated or
                IRCTC-priced tour. Confirm the transport mode and any rail tickets directly with Khushi Travels
                before booking.
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>Are helicopter, doli, or pony charges for Kedarnath included?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                <strong>No. Helicopter/chopper tickets, doli/palanquin charges, and horse/pony fares are strictly excluded
                  from the base package.</strong> Because these services are governed by strict biometric registrations
                and variable passenger preferences, pilgrims arrange these directly or via our tour coordinator&apos;s
                guidance at actual cost.
              </p>
            </details>

            <details className="faq-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all">
              <summary className="cursor-pointer font-bold text-base text-brand-navy flex items-center justify-between select-none">
                <span>What kind of food and accommodation is provided?</span>
                <span className="text-brand-amber text-lg font-bold ml-2">&darr;</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                The package includes 3-star deluxe hotel rooms on a comfortable double-sharing basis with attached
                bathrooms and running hot water, if confirmed. Three daily wholesome pure vegetarian meals (breakfast,
                lunch, and dinner) prepared under hygienic satvik standards are fully covered in the confirmed package.
              </p>
            </details>
          </div>
        </div>
      </section>

      <ServiceCoverage />
    </>
  );
}
