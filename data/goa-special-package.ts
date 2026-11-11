export interface GoaActivityHighlight {
  title: string;
  subtitle: string;
}

export interface GoaSightseeingSpot {
  name: string;
  category: string;
}

export interface GoaPosterFlyer {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export interface GoaFaqItem {
  question: string;
  answer: string;
}

/**
 * Editable data source for the Goa Special Holiday Package (/packages/special/goa-holiday-package/).
 * Update departure dates, itinerary slots, pickup notes, or inclusions here.
 */
export const GOA_SPECIAL_PACKAGE = {
  slug: "goa-holiday-package",
  href: "/packages/special/goa-holiday-package/",
  title: "Goa Holiday Package",
  subtitle: "Sun. Sand. Sea. Unforgettable Memories.",
  badge: "Special Fixed Departure",
  departureDate: "25 Dec 2026",
  duration: "2 Nights / 3 Days",
  price: "₹13,999/-",
  priceUnit: "Per Person",
  heroImage: "/images/packages/goa/goa-holiday-package.webp",
  heroImageAlt:
    "Khushi Tour and Travels Goa Holiday Package — 25 Dec 2026, 2 Nights 3 Days, ₹13,999 per person",
  contactPhones: [
    { display: "+91 99013 33113", tel: "+919901333113" },
    { display: "+91 96327 21942", tel: "+919632721942" },
  ],
  stayDetails: {
    heading: "A/C 3-Star Hotel Stay (3 Sharing)",
    points: [
      "A/C 3-Star Hotel Stay on 3-sharing basis",
      "Comfortable and safe group accommodation",
      "Prime location near beaches and popular attractions",
    ],
    meals: ["2 Breakfasts", "2 Lunches", "2 Dinners"],
    poster: "/images/packages/goa/goa-hotel-stay-food.webp",
    posterAlt:
      "Comfortable A/C 3-Star Hotel Stay and 2 Breakfasts, 2 Lunches, 2 Dinners included in Goa package",
  },
  waterSports: {
    heading: "5 Exciting Water Sports Activities",
    poster: "/images/packages/goa/goa-water-sports.webp",
    posterAlt:
      "5 Exciting Water Sports Activities in Goa: Banana Ride, Jet Ski, Bumper Ski, Bumper Ride and Speed Boat",
    activities: [
      { title: "Banana Ride", subtitle: "Hold tight & enjoy the waves!" },
      { title: "Jet Ski", subtitle: "Ride the waves. Feel the thrill!" },
      { title: "Bumper Ski", subtitle: "Fun meets adventure!" },
      { title: "Bumper Ride", subtitle: "Splash into excitement!" },
      { title: "Speed Boat", subtitle: "Experience the speed on Goa's coastline!" },
    ] satisfies GoaActivityHighlight[],
  },
  cruiseDinner: {
    heading: "Cruise Dinner — A Magical Evening on the Goa Waters",
    poster: "/images/packages/goa/goa-cruise-dinner.webp",
    posterAlt:
      "Goa Cruise Dinner featuring DJ and Disco Floor, Unlimited Veg and Non-Veg Dinner, and 1 Beer or Soft Drink",
    highlights: [
      "DJ & Disco Floor",
      "Unlimited Veg & Non-Veg Dinner",
      "1 Beer or 1 Soft Drink (Per Person)",
      "Enjoy the Goa Night Vibes on the Water",
    ],
  },
  sightseeing: {
    heading: "Sightseeing in Goa",
    poster: "/images/packages/goa/goa-sightseeing.webp",
    posterAlt:
      "Sightseeing in Goa featuring Chapora Fort, Fontainhas Lane, Historic Churches, Parra Road, and Goa Beaches",
    spots: [
      { name: "Chapora Fort", category: "Heritage & Views" },
      { name: "Fontainhas Lane", category: "Latin Quarter" },
      { name: "Historic Churches", category: "Old Goa Heritage" },
      { name: "Parra Road", category: "Scenic Palm Avenue" },
      {
        name: "Goa Beaches (Baga, Anjuna, Palolem & More)",
        category: "Coastal Beaches",
      },
    ] satisfies GoaSightseeingSpot[],
  },
  posters: [
    {
      src: "/images/packages/goa/goa-holiday-package.webp",
      alt: "Goa Holiday Package overview flyer — 25 Dec 2026, 2 Nights 3 Days, ₹13,999 per person",
      title: "Package Overview",
      caption: "25 Dec 2026 • 2 Nights / 3 Days • ₹13,999/- Per Person",
    },
    {
      src: "/images/packages/goa/goa-hotel-stay-food.webp",
      alt: "Goa Hotel Stay & Food flyer — A/C 3-Star Hotel Stay (3 Sharing), 2 Breakfasts, 2 Lunches, 2 Dinners",
      title: "Hotel Stay & Meals",
      caption: "A/C 3-Star Hotel (3 Sharing) + 2 Breakfasts, 2 Lunches & 2 Dinners",
    },
    {
      src: "/images/packages/goa/goa-water-sports.webp",
      alt: "5 Exciting Water Sports Activities in Goa flyer",
      title: "5 Water Sports",
      caption: "Banana Ride, Jet Ski, Bumper Ski, Bumper Ride & Speed Boat",
    },
    {
      src: "/images/packages/goa/goa-cruise-dinner.webp",
      alt: "Goa Cruise Dinner flyer — DJ & Disco, Unlimited Veg & Non-Veg Dinner + 1 Drink",
      title: "Cruise Dinner",
      caption: "DJ & Disco Floor + Unlimited Veg/Non-Veg Dinner + 1 Beer or Soft Drink",
    },
    {
      src: "/images/packages/goa/goa-sightseeing.webp",
      alt: "Goa Sightseeing flyer — Chapora Fort, Fontainhas Lane, Historic Churches, Parra Road, Beaches",
      title: "Goa Sightseeing",
      caption: "Chapora Fort, Fontainhas, Historic Churches, Parra Road & Beaches",
    },
  ] satisfies GoaPosterFlyer[],
  faqs: [
    {
      question: "What is the departure date and duration of the Goa Special Package?",
      answer:
        "The featured Goa Special Holiday Package departs on 25 December 2026 for 2 Nights / 3 Days at ₹13,999/- per person.",
    },
    {
      question: "What accommodation and meals are included in ₹13,999/- per person?",
      answer:
        "The package includes an A/C 3-Star hotel stay on a 3-sharing basis in a prime location near beaches and attractions, plus 2 breakfasts, 2 lunches, and 2 dinners.",
    },
    {
      question: "Which water sports and cruise experiences are covered?",
      answer:
        "Included water sports feature Banana Ride, Jet Ski, Bumper Ski, Bumper Ride, and Speed Boat. The evening Cruise Dinner includes a DJ & disco floor, unlimited veg and non-veg dinner, and 1 beer or 1 soft drink per person.",
    },
    {
      question: "Which sightseeing spots are covered in Goa?",
      answer:
        "Sightseeing covers Chapora Fort, Fontainhas Lane, Historic Churches, Parra Road, and popular Goa beaches including Baga, Anjuna, Palolem, and more.",
    },
    {
      question: "How do I confirm seats, pickup point, and the day-wise schedule?",
      answer:
        "Call +91 99013 33113 or +91 96327 21942, or submit the WhatsApp enquiry form on this page to receive the full day-wise schedule, boarding details, and seat confirmation.",
    },
  ] satisfies GoaFaqItem[],
};

