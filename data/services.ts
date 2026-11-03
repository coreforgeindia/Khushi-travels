export interface ServiceItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  tagline: string;
  highlightText: string;
  content: string[];
  features: { title: string; desc: string }[];
  ctaText: string;
  ctaQuery: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "corporate-tempo-traveller-rental-bangalore",
    title: "Corporate Tempo Traveller Rental Bangalore",
    metaTitle: "Corporate Tempo Traveller Rental Bangalore | Employee Shuttles | Khushi Travels",
    metaDescription: "Corporate tempo traveller and bus rentals in Bangalore. Employee daily shuttles, team offsites, client visits & airport transfers with GPS tracking.",
    eyebrow: "Enterprise Transport Partner",
    tagline: "Dedicated Employee Shuttles, Offsites & VIP Executive Transport",
    highlightText: "Khushi Travels offers 9 to 50 seater vehicles for employee shuttles, factory transport, offsite events, and executive client visits. Monthly contracts available with dedicated account managers and GST billing.",
    content: [
      "Smooth employee commutes drive productivity. We deliver safe, prompt, and verified staff transport across Bangalore's major tech parks and industrial hubs.",
      "Our corporate packages include real-time GPS tracking, daily sanitized cabins, experienced drivers, and monthly invoicing with detailed route reports.",
      "Serving tech corridors including Whitefield (ITPL), Electronic City, Outer Ring Road (Manyata Tech Park, RMZ Ecospace), and Sarjapur Road.",
    ],
    features: [
      { title: "100% Owned Fleet", desc: "No third-party aggregators. Guaranteed quality, hygiene, and substitute vehicles on demand." },
      { title: "GPS Tracked & Safe", desc: "Real-time fleet tracking, speed governors, and female-passenger safety protocols." },
      { title: "GST Invoices & Monthly Credit", desc: "Streamlined corporate accounts with transparent distance billing and dedicated relationship managers." },
    ],
    ctaText: "Request Corporate Proposal",
    ctaQuery: "Hi Khushi Travels, I need corporate transport for our team.",
  },
  {
    slug: "best-tempo-traveller-rental-bangalore",
    title: "About Khushi Tours & Travels",
    metaTitle: "About Khushi Travels | Bangalore's Trusted Vehicle Rental Partner",
    metaDescription: "Learn about Khushi Tours & Travels, Bangalore's trusted group travel and luxury vehicle rental partner. 100% owned fleet and seasoned chauffeurs.",
    eyebrow: "Our Story & Values",
    tagline: "Bangalore's Premier Group Travel Provider Since 2018",
    highlightText: "Founded in Vidyaranyapura, Bangalore, Khushi Tours & Travels has served over 15,000 satisfied passengers across Karnataka, Tamil Nadu, Andhra Pradesh, and Kerala with an unyielding focus on safety, luxury, and transparent pricing.",
    content: [
      "We started with a single tempo traveller and a clear vision: eliminate the stress, cancellations, and hidden charges that plague Indian group travel.",
      "Today, our 100% company-owned fleet spans Maharaja-seat luxury tempo travellers, Force Urbanias, Innova Crystas, and 50-seater luxury air-conditioned coaches.",
      "Every vehicle undergoes strict 25-point mechanical inspections between trips, guaranteeing that your family vacation or pilgrimage proceeds without breakdown worries.",
    ],
    features: [
      { title: "Zero Subcontracting", desc: "Every tempo traveller, Urbania, and bus belongs to us. No last-minute vehicle swaps." },
      { title: "Veteran Chauffeurs", desc: "Courteous drivers with 8+ years highway experience, fluent in Kannada, English, and Hindi." },
      { title: "24/7 Dispatch Desk", desc: "Real-time trip support desk assisting with route modifications, toll assistance, and flight tracking." },
    ],
    ctaText: "Plan Your Journey With Us",
    ctaQuery: "Hi Khushi Travels, I want to learn more about booking a vehicle.",
  },
  {
    slug: "airport-transfer-tempo-traveller-bangalore",
    title: "Bangalore Airport (BLR) Tempo Traveller Transfers",
    metaTitle: "Bangalore Airport Tempo Traveller | BLR Group Transfers | Khushi Travels",
    metaDescription: "Reliable Kempegowda International Airport (BLR) group pickups and drops. 9 to 26 seater luxury tempo travellers with luggage carriers.",
    eyebrow: "Flight-Tracked BLR Transfers",
    tagline: "Punctual Group Pickups & Drop-offs at Kempegowda International Airport",
    highlightText: "Heading to or arriving from Kempegowda International Airport (BLR) with family, colleagues, or wedding delegates? Khushi Travels provides spacious tempo travellers with dedicated luggage space, free flight tracking, and doorstep pickup.",
    content: [
      "Never split your group into 3 or 4 expensive airport cabs. A single luxury 9, 12, or 16 seater tempo traveller accommodates all passengers and heavy international suitcases in supreme comfort.",
      "Our chauffeurs track flight delays in real-time, waiting at the BLR terminal arrival pickup bays so your journey home or to the hotel begins effortlessly.",
      "Serving all residential localities and corporate hubs across Bangalore with fixed transparent one-way and return rates.",
    ],
    features: [
      { title: "Live Flight Monitoring", desc: "We track your inbound flight; zero wait charges for genuine airline delays." },
      { title: "Enormous Luggage Boots", desc: "Dedicated boot space + secure roof-top luggage carriers for large suitcases and boxes." },
      { title: "24/7 Doorstep Service", desc: "Timely midnight and early morning pickups anywhere in Bengaluru metropolis." },
    ],
    ctaText: "Book BLR Airport Transfer",
    ctaQuery: "Hi Khushi Travels, I need an airport pickup/drop tempo traveller.",
  },
  {
    slug: "wedding-guest-transport-tempo-traveller-bangalore",
    title: "Wedding Guest Transport & Event Fleet",
    metaTitle: "Wedding Tempo Traveller Rental Bangalore | Guest Transport | Khushi Travels",
    metaDescription: "Luxury tempo traveller and bus rentals for weddings in Bangalore. Smooth guest transport between hotels, airports, and marriage halls.",
    eyebrow: "Wedding & Celebration Shuttles",
    tagline: "Elegant, Reliable Transport for Your Guests & Family",
    highlightText: "Ensure your wedding guests arrive in comfort and style. Khushi Travels coordinates fleet movements for marriage ceremonies, sangeet functions, and outstation destination weddings across South India.",
    content: [
      "Coordinating guest transport across multiple venues, railway stations, and hotels can be chaotic. We take complete ownership of your event transport logistics.",
      "Our immaculate white and silver vehicles, uniform chauffeurs, and punctuality give your guests a memorable, premium hospitality experience.",
      "From intimate 9-seater luxury tempo travellers for close family to 50-seater buses for baraat processions, we handle every detail seamlessly.",
    ],
    features: [
      { title: "Decorated Pristine Vehicles", desc: "Spotlessly clean interiors, ambient lighting, and floral garland friendly exteriors." },
      { title: "Multi-Trip Shuttle Coordination", desc: "Round-the-clock shuttles between hotel accommodations and the wedding hall or resort." },
      { title: "Event Manager Coordination", desc: "Our fleet lead directly coordinates with your event planner or family point-of-contact." },
    ],
    ctaText: "Inquire for Wedding Fleet",
    ctaQuery: "Hi Khushi Travels, I want to book tempo travellers for our wedding.",
  },
  {
    slug: "luxury-tempo-traveller-blog",
    title: "Khushi Travels Journal & Travel Guides",
    metaTitle: "Khushi Travels Blog | South India Road Trips & Tempo Traveller Guides",
    metaDescription: "Expert travel guides, outstation route tips, group travel advice, and vehicle comparison articles by Khushi Travels Bangalore.",
    eyebrow: "Travel Insights & Guides",
    tagline: "Insider Tips for Scenic Road Trips from Bangalore",
    highlightText: "Discover curated travel itineraries, vehicle selection advice, and road trip guides written by our seasoned chauffeurs and South India travel specialists.",
    content: [
      "Planning a holiday to Coorg, Ooty, or Chikmagalur? Our comprehensive road trip guides break down travel times, recommended highway eateries, ghat-section driving tips, and the best seasons to visit.",
      "Compare 9-seater Maharaja seats against 12-seater executive layouts and Force Urbania models to select the perfect vehicle for your group size and budget.",
      "Read our guides on spiritual pilgrimage planning, including Nava Tirupati darshan, 12 Jyotirlinga yatras, and temple circuits from Bengaluru.",
    ],
    features: [
      { title: "Detailed Itineraries", desc: "Day-by-day travel plans for weekend getaways and multi-state spiritual yatras." },
      { title: "Transparent Pricing Tips", desc: "Everything you need to know about per-km rates, toll taxes, and state permit guidelines." },
      { title: "Vehicle Buying vs Renting", desc: "Cost-benefit analyses for corporate offsites and extended family vacations." },
    ],
    ctaText: "Browse Travel Guides",
    ctaQuery: "Hi Khushi Travels, I need guidance planning a road trip itinerary.",
  },
];
