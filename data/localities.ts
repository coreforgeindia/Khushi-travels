export interface Locality {
  slug: string;
  name: string;
  zone: string;
  landmarks: string[];
  subLocalities: string[];
  popularRoutes: string[];
  heroSummary: string;
}

export const LOCALITIES_DATA: Locality[] = [
  {
    slug: "tempo-traveller-in-marathahalli-bangalore",
    name: "Marathahalli",
    zone: "East Bangalore (Outer Ring Road Tech Belt)",
    landmarks: ["Marathahalli Bridge", "Innovative Multiplex", "Outer Ring Road (ORR)", "Kalamandir"],
    subLocalities: ["Marathahalli", "Bellandur", "Sarjapur Road", "ORR", "Kadubeesanahalli", "Devarabisanahalli", "Kariyammana Agrahara", "Munnekollala"],
    popularRoutes: ["Mysore", "Tirupati", "Coorg", "Ooty", "Pondicherry", "Chennai"],
    heroSummary: "Free doorstep pickup in Marathahalli, ORR, Bellandur, and Sarjapur Road tech corridors. Premium 9, 12, 14, 16 seater luxury tempo travellers and Force Urbania for family holidays, airport transfers, and team offsites."
  },
  {
    slug: "tempo-traveller-in-whitefield-bangalore",
    name: "Whitefield",
    zone: "East Bangalore (ITPB & Tech Hub)",
    landmarks: ["ITPB (International Tech Park)", "Phoenix Marketcity", "Hope Farm Junction", "Vydehi Hospital"],
    subLocalities: ["Whitefield", "ITPB", "Hoodi", "Kadugodi", "Channasandra", "Brookefield", "Kundalahalli", "Varthur"],
    popularRoutes: ["Tirupati", "Chennai", "Mysore", "Pondicherry", "Coorg", "Yercaud"],
    heroSummary: "Direct tempo traveller rentals in Whitefield with immediate dispatch to tech parks, gated communities, and villas. Transparent per-km billing, professional chauffeurs, and 100% owned vehicles."
  },
  {
    slug: "tempo-traveller-in-koramangala-bangalore",
    name: "Koramangala",
    zone: "South-East Bangalore (Startup & Lifestyle Center)",
    landmarks: ["Forum Mall", "Sony World Signal", "Koramangala BDA Complex", "Wipro Park"],
    subLocalities: ["Koramangala 1st to 8th Block", "ST Bed Layout", "Ejipura", "National Games Village", "Madiwala"],
    popularRoutes: ["Coorg", "Wayanad", "Ooty", "Mysore", "Pondicherry", "Chikmagalur"],
    heroSummary: "Serving startups, families, and travel groups in Koramangala 1st through 8th Block. Luxury Maharaja seat tempo travellers and Force Urbania with instant 5-minute booking on WhatsApp."
  },
  {
    slug: "tempo-traveller-in-hsr-layout-bangalore",
    name: "HSR Layout",
    zone: "South-East Bangalore",
    landmarks: ["HSR BDA Complex", "27th Main Road", "Agara Lake", "Silk Board Junction"],
    subLocalities: ["HSR Sector 1 to 7", "Agara", "Parangi Palya", "Haralur Road", "Teachers Colony"],
    popularRoutes: ["Mysore", "Bandipur", "Coorg", "Ooty", "Wayanad", "Tirupati"],
    heroSummary: "Doorstep tempo traveller pickup across HSR Layout Sectors 1-7 and Haralur Road. Clean sanitized pushback tempos for holiday trips and corporate offsites."
  },
  {
    slug: "tempo-traveller-in-btm-layout-bangalore",
    name: "BTM Layout",
    zone: "South Bangalore",
    landmarks: ["BTM Water Tank", "Udupi Garden Junction", "Madiwala Lake", "Ring Road"],
    subLocalities: ["BTM 1st Stage", "BTM 2nd Stage", "Madiwala", "Tavarekere", "NS Palya"],
    popularRoutes: ["Mysore", "Ooty", "Coorg", "Tirupati", "Wayanad", "Kodaikanal"],
    heroSummary: "Instant tempo traveller rental in BTM Layout 1st & 2nd Stage. Ideal access to Hosur Road and NICE Road for rapid outstation departures."
  },
  {
    slug: "tempo-traveller-in-electronic-city-bangalore",
    name: "Electronic City",
    zone: "South Bangalore (IT Industrial Belt)",
    landmarks: ["Infosys Campus", "Wipro Gate", "Electronic City Toll Gate", "Velankani Tech Park"],
    subLocalities: ["Electronic City Phase 1", "Electronic City Phase 2", "Bommasandra", "Neeladri Nagar", "Chandapura", "Jigani"],
    popularRoutes: ["Tirupati", "Salem", "Yercaud", "Kodaikanal", "Pondicherry", "Chennai"],
    heroSummary: "Specialized corporate and family tempo traveller rental in Electronic City Phase 1 & 2. Quick access to the Elevated Highway, Hosur Road, and Tamil Nadu border routes."
  },
  {
    slug: "tempo-traveller-in-jp-nagar-bangalore",
    name: "JP Nagar",
    zone: "South Bangalore",
    landmarks: ["Ranga Shankara", "Sarakki Lake", "Central Mall JP Nagar", "Delmia Circle"],
    subLocalities: ["JP Nagar Phase 1 to 9", "Sarakki", "Puttenahalli", "Jambusavari Dinne", "Konanakunte"],
    popularRoutes: ["Mysore", "Coorg", "Wayanad", "Chikmagalur", "Ooty", "Bandipur"],
    heroSummary: "Doorstep luxury tempo traveller pickup across JP Nagar Phases 1 to 9. Maharaja pushback seats and sanitized vehicles for family getaways and temple darshans."
  },
  {
    slug: "tempo-traveller-in-jayanagar-bangalore",
    name: "Jayanagar",
    zone: "South Bangalore (Heritage Residential)",
    landmarks: ["Jayanagar 4th Block Complex", "South End Circle", "Madhavan Park", "Ashoka Pillar"],
    subLocalities: ["Jayanagar 1st to 9th Block", "Tilak Nagar", "Pattabhirama Nagar", "Byrasandra"],
    popularRoutes: ["Mysore", "Tirupati", "Coorg", "Kukke Subramanya", "Dharmasthala", "Shringeri"],
    heroSummary: "Bangalore's most reliable tempo traveller rental in historic Jayanagar. Family-friendly chauffeurs with decades of driving expertise on temple circuits and hill stations."
  },
  {
    slug: "tempo-traveller-in-banashankari-bangalore",
    name: "Banashankari",
    zone: "South-West Bangalore",
    landmarks: ["Banashankari Amma Temple", "BDA Complex BSK 2nd Stage", "Deve Gowda Petrol Bunk", "Kathriguppe"],
    subLocalities: ["Banashankari 1st, 2nd, 3rd Stage", "Kathriguppe", "Girinagar", "Hosakerehalli", "Padmanabhanagar"],
    popularRoutes: ["Mysore", "Coorg", "Chikmagalur", "Hassan", "Mangalore", "Udupi"],
    heroSummary: "Prime tempo traveller rental in Banashankari 1st, 2nd & 3rd Stage. Direct access to Mysore Road and NICE Road for rapid outstation departures."
  },
  {
    slug: "tempo-traveller-in-indiranagar-bangalore",
    name: "Indiranagar",
    zone: "Central-East Bangalore",
    landmarks: ["100 Feet Road", "12th Main Road", "Indiranagar Club", "CMH Road"],
    subLocalities: ["Indiranagar 1st & 2nd Stage", "HAL 2nd & 3rd Stage", "Defence Colony", "Domlur", "Old Airport Road"],
    popularRoutes: ["Coorg", "Ooty", "Pondicherry", "Mysore", "Wayanad", "Goa"],
    heroSummary: "Premium luxury tempo traveller hire in Indiranagar, Defence Colony, and Domlur. VIP Maharaja recliners and Force Urbania for discerning corporate teams and families."
  },
  {
    slug: "tempo-traveller-in-mg-road-bangalore",
    name: "MG Road & Central Bangalore",
    zone: "Central Business District (CBD)",
    landmarks: ["Trinity Circle", "Brigade Road", "Cubbon Park", "UB City"],
    subLocalities: ["MG Road", "Brigade Road", "Residency Road", "Richmond Town", "Lavelle Road", "Vasanth Nagar"],
    popularRoutes: ["Airport", "Mysore", "Tirupati", "Coorg", "Ooty", "Nandi Hills"],
    heroSummary: "Executive tempo traveller and Force Urbania rentals in Bangalore CBD. Seamless transfers to Kempegowda International Airport and luxury outstation journeys."
  },
  {
    slug: "tempo-traveller-in-hebbal-bangalore",
    name: "Hebbal",
    zone: "North Bangalore (Airport Corridor)",
    landmarks: ["Hebbal Flyover", "Manyata Tech Park", "Hebbal Lake", "Columbia Asia / Aster Hospital"],
    subLocalities: ["Hebbal", "Ganganagar", "Manyata Tech Park", "Nagavara", "Kempapura", "RT Nagar"],
    popularRoutes: ["Airport", "Nandi Hills", "Lepakshi", "Hyderabad", "Tirupati", "Shirdi"],
    heroSummary: "Direct tempo traveller rentals at Hebbal Junction and Manyata Tech Park. Fast access to Bellary Road (NH-44) and Kempegowda International Airport transfers."
  },
  {
    slug: "tempo-traveller-in-yelahanka-bangalore",
    name: "Yelahanka",
    zone: "North Bangalore",
    landmarks: ["Yelahanka New Town", "Air Force Station", "Mother Dairy Circle", "Doddaballapur Road"],
    subLocalities: ["Yelahanka Old Town", "Yelahanka New Town", "Kogilu", "Jakkur", "Vidyaranyapura", "Allalasandra"],
    popularRoutes: ["Airport", "Nandi Hills", "Tirupati", "Mantralayam", "Lepakshi", "Hyderabad"],
    heroSummary: "Closest tempo traveller hub to Bangalore Airport. Situated near Vidyaranyapura and Yelahanka, Khushi Travels guarantees rapid 15-minute doorstep vehicle arrival."
  },
  {
    slug: "tempo-traveller-in-rajajinagar-bangalore",
    name: "Rajajinagar",
    zone: "West Bangalore",
    landmarks: ["Orion Mall", "ISCKON Temple Bangalore", "Dr. Rajkumar Road", "Navrang Theatre"],
    subLocalities: ["Rajajinagar 1st to 6th Block", "Mahalakshmi Layout", "Basaveshwaranagar", "West of Chord Road"],
    popularRoutes: ["Tumkur", "Chikmagalur", "Hampi", "Goa", "Mysore", "Dharmasthala"],
    heroSummary: "Convenient tempo traveller hire in Rajajinagar and Basaveshwaranagar. Instant highway connection to Tumkur Road (NH-48) for travel to North Karnataka, Goa, and coastal shrines."
  },
  {
    slug: "tempo-traveller-in-yeshwanthpur-bangalore",
    name: "Yeshwanthpur & Peenya",
    zone: "North-West Bangalore (Industrial Corridor)",
    landmarks: ["Yeshwanthpur Railway Station", "Peenya Industrial Area", "Goraguntepalya Flyover", "APMC Yard"],
    subLocalities: ["Yeshwanthpur", "Mathikere", "Peenya Industrial Area", "Goraguntepalya", "Dasarahalli", "Jalahalli"],
    popularRoutes: ["Tumkur", "Shimoga", "Goa", "Hampi", "Mysore", "Chitradurga"],
    heroSummary: "Doorstep pickup in Yeshwanthpur, Peenya, and Mathikere along Tumkur Road (NH-48). Heavy-duty tempo fleet ideal for industrial factory visits, corporate transfers, and outstation trips."
  }
];
