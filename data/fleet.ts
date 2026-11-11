export interface Vehicle {
  slug: string;
  name: string;
  subtitle: string;
  seats: string;
  ratePerKm: number;
  ratePerKmSuv?: number;
  driverAllowance: number;
  category: "tempo" | "urbania" | "bus" | "car";
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  idealFor: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    slug: "9-seater-tempo-traveller-bangalore",
    name: "9 Seater Luxury Tempo Traveller",
    subtitle: "Maharaja Pushback Seats • 1x1 Config",
    seats: "9 Passengers + Driver",
    ratePerKm: 32,
    driverAllowance: 600,
    category: "tempo",
    image: "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-1.webp",
    gallery: [
      "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-1.webp",
      "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-2.webp",
      "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-3.webp",
      "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-4.webp",
      "/images/fleet/luxury-9-seater-tempo-traveller-bangalore-5.webp",
    ],
    features: [
      "1x1 Maharaja pushback recliner seats",
      "Individual AC vents for every passenger",
      "21-inch LED TV & premium surround sound",
      "USB fast-charging ports at every seat",
      "Spacious boot for up to 8 medium suitcases",
      "GPS tracking & emergency first-aid kit",
    ],
    description:
      "Bangalore's finest 9-seater luxury tempo traveller with authentic Maharaja pushback seats in a 1x1 configuration. Zero middle seats, every passenger gets direct aisle access and panoramic windows. Perfect for executive corporate travel, family road trips to Coorg and Ooty, and VIP airport pickups.",
    idealFor: "VIP corporate travel, family vacations (4-8 pax), pilgrimage yatras",
  },
  {
    slug: "12-14-seater-tempo-traveller-bangalore",
    name: "12 & 13 Seater Tempo Traveller",
    subtitle: "Most Popular Group Choice • Luxury Interior",
    seats: "12-13 Passengers + Driver",
    ratePerKm: 28,
    driverAllowance: 600,
    category: "tempo",
    image: "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-1.webp",
    gallery: [
      "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-2.webp",
      "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-3.webp",
      "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-4.webp",
      "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-5.webp",
    ],
    features: [
      "Ergonomic pushback seats with neck supports",
      "High-output dual air-conditioning system",
      "LED entertainment screen with USB/Bluetooth",
      "Generous overhead hat-racks & boot space",
      "Clean sanitized interiors with air freshener",
      "Experienced highway chauffeur with hill driving expertise",
    ],
    description:
      "The undisputed gold standard for family vacations and group getaways from Bangalore. Our 100% company-owned 12 and 13 seater tempo travellers deliver unmatched legroom, soft recliners, and powerful AC that keeps everyone cool on long highway runs to Mysore, Wayanad, and Tirupati.",
    idealFor: "Family trips (8-13 pax), friends getaways, temple darshans",
  },
  {
    slug: "16-seater-tempo-traveller-bangalore",
    name: "16 Seater Luxury Tempo Traveller",
    subtitle: "Max Capacity Tempo • Extended Wheelbase",
    seats: "16 Passengers + Driver",
    ratePerKm: 35,
    driverAllowance: 600,
    category: "tempo",
    image: "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-1.webp",
    gallery: [
      "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-2.webp",
      "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-3.webp",
      "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-4.webp",
      "/images/fleet/luxury-16-seater-tempo-traveller-bangalore-5.webp",
    ],
    features: [
      "16 comfortable high-back pushback recliners",
      "Large panoramic tinted side windows",
      "Individual reading lamps and AC blowers",
      "High-capacity luggage trunk for outstation trips",
      "Digital music system with microphone for tour guides",
      "Speed governor compliant & 24/7 GPS monitored",
    ],
    description:
      "When a 12-seater is just slightly too small, our 16-seater tempo traveller gives your group extra breathing room. Built on the long-wheelbase Force platform with air suspension upgrades, it sails over potholes and highway ruts with utmost composure.",
    idealFor: "Large family reunions, wedding guest transit, corporate offsites",
  },
  {
    slug: "force-urbania-rental-bangalore",
    name: "Force Urbania Luxury Van",
    subtitle: "Next-Gen European Styling • Monocoque Body",
    seats: "10, 12 & 16 Seaters",
    ratePerKm: 45,
    driverAllowance: 700,
    category: "urbania",
    image: "/images/fleet/force-urbania-luxury-van-bangalore-1.webp",
    gallery: [
      "/images/fleet/force-urbania-luxury-van-bangalore-2.webp",
      "/images/fleet/force-urbania-luxury-van-bangalore-3.webp",
      "/images/fleet/force-urbania-luxury-van-bangalore-4.webp",
      "/images/fleet/force-urbania-luxury-van-bangalore-5.webp",
    ],
    features: [
      "European monocoque body with car-like ride quality",
      "Independent front suspension for bump-free travel",
      "Extra wide standing-height cabin (6 ft walk-through)",
      "Panoramic sealed acoustic glass with UV-cut tint",
      "Aircraft-style individual reading lights and AC pods",
      "Dual airbags, ABS with EBD, rollover mitigation",
    ],
    description:
      "The pinnacle of modern Indian road transport. The Force Urbania combines executive styling with whisper-quiet cabin acoustics and supreme highway dynamics. Ideal for foreign delegations, luxury leisure holidays, and premium outstation tours where comfort is non-negotiable.",
    idealFor: "Executive delegations, VIP corporate shuttles, luxury tours",
  },
  {
    slug: "bus-rental-bangalore",
    name: "Luxury Coach & Tourist Bus",
    subtitle: "33, 40 & 50 Seaters • Air Suspension",
    seats: "33 to 50 Passengers",
    ratePerKm: 50,
    driverAllowance: 1000,
    category: "bus",
    image: "/images/fleet/luxury-50-seater-bus-bangalore-1.webp",
    gallery: [
      "/images/fleet/luxury-50-seater-bus-bangalore-2.webp",
      "/images/fleet/luxury-50-seater-bus-bangalore-3.webp",
      "/images/fleet/luxury-50-seater-bus-bangalore-4.webp",
      "/images/fleet/luxury-50-seater-bus-bangalore-5.webp",
    ],
    features: [
      "Pushback seats with broad calf-support and recline",
      "Heavy-duty dual salon air-conditioning",
      "Under-deck cavernous luggage bays for heavy baggage",
      "Dual TV monitors with multimedia entertainment",
      "Chauffeur plus experienced helper on every assignment",
      "Full inter-state commercial road permits & passenger insurance",
    ],
    description:
      "Comprehensive transport solutions for large corporate conventions, university student tours, and destination weddings. All coaches feature full air suspension, sanitized passenger compartments, and dual professional drivers for seamless day-and-night highway runs.",
    idealFor: "Destination weddings, large corporate offsites, pilgrim groups",
  },
  {
    slug: "mini-bus-rental-bangalore",
    name: "Mini Bus Rental (20-25 Seater)",
    subtitle: "Compact Bus Agility • Ample Group Room",
    seats: "20 to 25 Passengers",
    ratePerKm: 42,
    driverAllowance: 800,
    category: "bus",
    image: "/images/fleet/luxury-minibus-rental-bangalore-1.webp",
    gallery: [
      "/images/fleet/luxury-minibus-rental-bangalore-1.webp",
      "/images/fleet/luxury-minibus-rental-bangalore-2.webp",
    ],
    features: [
      "2x2 plush pushback passenger seating",
      "Powerful salon cooling air conditioning",
      "Clean interior with wide central walking aisle",
      "Rear luggage storage + roof luggage rack",
      "Sound system with auxiliary/Bluetooth input",
      "Well-maintained commercial vehicle with GPS tracker",
    ],
    description:
      "The sweet spot between an extended tempo traveller and a full-size bus. Maneuverable through Bangalore city streets while providing comfortable long-distance seating for medium gatherings traveling together.",
    idealFor: "Medium tour groups, wedding guest shuttles, school trips",
  },
  {
    slug: "toyota-innova-crysta-rental-bangalore",
    name: "Toyota Innova Crysta",
    subtitle: "Executive 6 & 7 Seater • Supreme Reliability",
    seats: "6-7 Passengers + Chauffeur",
    ratePerKm: 18,
    driverAllowance: 500,
    category: "car",
    image: "/images/fleet/toyota-innova-crysta-bangalore-1.webp",
    gallery: [
      "/images/fleet/toyota-innova-crysta-bangalore-1.webp",
      "/images/fleet/toyota-innova-crysta-bangalore-2.webp",
    ],
    features: [
      "Plush leather captain seats in middle row",
      "Automatic climate control with rear AC blowers",
      "Superior sound insulation & whisper quiet ride",
      "Boot fits 3-4 suitcases with foldable third row",
      "Chauffeur in clean uniform with city expertise",
      "Fastag enabled for express toll plaza clearance",
    ],
    description:
      "India's favorite highway cruiser. Renowned for legendary reliability and serene ride quality, the Innova Crysta is the prime choice for business executive transfers, airport drops, and small family holiday excursions.",
    idealFor: "Airport transfers, business meetings, nuclear families (4-6 pax)",
  },
  {
    slug: "luxury-car-rental-bangalore",
    name: "Executive Sedan & SUV Fleet",
    subtitle: "Dzire, Etios, Innova & Premium Cabs",
    seats: "4 to 7 Passengers",
    ratePerKm: 14,
    ratePerKmSuv: 18,
    driverAllowance: 500,
    category: "car",
    image: "/images/fleet/luxury-car-bangalore-1.webp",
    gallery: [
      "/images/fleet/toyota-innova-crysta-bangalore-1.webp",
      "/images/fleet/toyota-innova-crysta-bangalore-2.webp",
    ],
    features: [
      "Immaculately valeted and sanitized sedans",
      "Chilled AC and comfortable fabric/leather seating",
      "Courteous chauffeurs with verified backgrounds",
      "On-time doorstep arrival guarantee",
      "Transparent billing with no hidden extras",
    ],
    description:
      "Premium chauffeur-driven car rentals in Bangalore for local city duties, airport pickup/drop, and weekend getaways. Clean, modern sedans that keep your travel hassle-free.",
    idealFor: "City sightseeing, daily business commutes, couple travel",
  },
  {
    slug: "tempo-traveller-rent-bangalore-outstation",
    name: "Outstation Holiday Tempo Fleet",
    subtitle: "Customized for Long-Distance Touring",
    seats: "9 to 20 Passengers",
    ratePerKm: 26,
    driverAllowance: 600,
    category: "tempo",
    image: "/images/fleet/tempo-traveller-bangalore.webp",
    gallery: [
      "/images/fleet/tempo-traveller-bangalore.webp",
      "/images/fleet/luxury-12-seater-tempo-traveller-bangalore-1.webp",
      "/images/fleet/force-urbania-16-seater-bangalore-3.webp",
    ],
    features: [
      "Special highway tuning for smooth high-speed cruises",
      "All-India tourist permits (AITP) paid & valid",
      "Experienced chauffeurs familiar with ghat roads & hill curves",
      "Luggage carriers with waterproof tarpaulins",
      "24/7 on-call breakdown assistance across South India",
    ],
    description:
      "Tailor-made for multi-day outstation road trips originating from Bangalore. Whether you are trekking the Western Ghats in Chikmagalur or visiting holy shrines in Mantralayam, our holiday fleet delivers safety and peace of mind.",
    idealFor: "Multi-day holiday packages, pilgrimage yatras, road trips",
  },
];
