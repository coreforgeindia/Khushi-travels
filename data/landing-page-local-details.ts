import { LOCALITIES_DATA } from "@/data/localities";
import { ROUTES_DATA } from "@/data/routes";
import type { LandingPageRecord } from "@/lib/landing-pages";

export interface LocalLandingDetails {
  pickupArea: string;
  pickupReference: string;
  transportNote: string;
  landmarks: string[];
  destinations: string[];
  routeSlugs: string[];
}

const DISTRICT_DETAILS: Record<string, LocalLandingDetails> = {
  "best-travel-agency-bagalkot-karnataka": {
    pickupArea: "Bagalkot town",
    pickupReference: "Bagalkot KSRTC Bus Stand",
    transportNote:
      "For group departures, confirm a vehicle-accessible meeting point in Bagalkot town and allow time for loading luggage before joining the highway.",
    landmarks: ["Badami Cave Temples", "Pattadakal", "Aihole"],
    destinations: ["Badami", "Pattadakal", "Aihole"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-ballari-karnataka": {
    pickupArea: "Ballari city",
    pickupReference: "Ballari KSRTC Bus Stand",
    transportNote:
      "For a multi-stop heritage trip, share the planned stops and overnight halt in advance so the route and group pickup can be coordinated.",
    landmarks: ["Ballari Fort", "Hampi", "Tungabhadra Dam"],
    destinations: ["Hampi", "Hosapete", "Tungabhadra Dam"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-belagavi-karnataka": {
    pickupArea: "Belagavi city",
    pickupReference: "Belagavi Central Bus Stand (CBT)",
    transportNote:
      "Share whether the group is meeting in Belagavi city or travelling onward from a nearby town; the exact vehicle-accessible pickup point should be confirmed before booking.",
    landmarks: ["Belagavi Fort", "Gokak Falls", "Saundatti Yellamma Temple"],
    destinations: ["Gokak Falls", "Saundatti", "Goa"],
    routeSlugs: ["bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-bangalore-rural-karnataka": {
    pickupArea: "Bangalore Rural district",
    pickupReference: "Devanahalli town / Devanahalli Bus Stand area",
    transportNote:
      "Bangalore Rural covers multiple towns. Include the taluk or town with your map pin so the team can confirm a practical meeting point and vehicle access.",
    landmarks: ["Devanahalli Fort", "Nandi Hills", "Ghati Subramanya Temple"],
    destinations: ["Nandi Hills", "Devanahalli", "Ghati Subramanya"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
  "best-travel-agency-bangalore-karnataka": {
    pickupArea: "Bangalore Urban district",
    pickupReference: "Share your Bengaluru locality and exact map pin",
    transportNote:
      "Bangalore Urban covers many neighbourhoods. Give the locality, pickup time, and vehicle size needed; the team will confirm the stop and access with you.",
    landmarks: ["Kempegowda Bus Station (Majestic)", "Krantivira Sangolli Rayanna Railway Station", "Kempegowda International Airport"],
    destinations: ["Mysore", "Coorg", "Tirupati"],
    routeSlugs: [
      "bangalore-to-mysore-tempo-traveller",
      "bangalore-to-coorg-tempo-traveller",
      "bangalore-to-tirupati-tempo-traveller",
    ],
  },
  "best-travel-agency-bidar-karnataka": {
    pickupArea: "Bidar town",
    pickupReference: "Bidar KSRTC Bus Stand area",
    transportNote:
      "For visits to several heritage sites, provide the full stop list and group size so the team can plan the pickup and day itinerary together.",
    landmarks: ["Bidar Fort", "Bahmani Tombs", "Narasimha Jhira Cave Temple"],
    destinations: ["Bidar Fort", "Bahmani Tombs", "Basavakalyan"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
  "best-travel-agency-chamarajanagar-karnataka": {
    pickupArea: "Chamarajanagar town",
    pickupReference: "Chamarajanagar KSRTC Bus Stand area",
    transportNote:
      "Forest and hill destinations may have route, entry-time, or vehicle restrictions. Confirm the itinerary and permitted drop point before travel.",
    landmarks: ["B. R. Hills", "Male Mahadeshwara Hills", "Bandipur National Park"],
    destinations: ["B. R. Hills", "Male Mahadeshwara Hills", "Bandipur"],
    routeSlugs: ["bangalore-to-ooty-tempo-traveller"],
  },
  "best-travel-agency-chikkaballapur-karnataka": {
    pickupArea: "Chikkaballapur town",
    pickupReference: "Chikkaballapur KSRTC Bus Stand area",
    transportNote:
      "Hill viewpoints can have narrow approach roads or parking limits. Confirm the planned stops and final vehicle access point while arranging the trip.",
    landmarks: ["Nandi Hills", "Bhoga Nandeeshwara Temple", "Skandagiri"],
    destinations: ["Nandi Hills", "Skandagiri", "Lepakshi"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
  "best-travel-agency-chikkamagaluru-karnataka": {
    pickupArea: "Chikkamagaluru town",
    pickupReference: "Chikkamagaluru KSRTC Bus Stand area",
    transportNote:
      "Hill routes and estate stays may involve narrow roads. Share the stay address and sightseeing stops so the team can confirm a suitable vehicle-access point.",
    landmarks: ["Mullayanagiri", "Baba Budangiri", "Belur and Halebidu"],
    destinations: ["Mullayanagiri", "Baba Budangiri", "Belur"],
    routeSlugs: ["bangalore-to-chikmagalur-tempo-traveller"],
  },
  "best-travel-agency-chitradurga-karnataka": {
    pickupArea: "Chitradurga town",
    pickupReference: "Chitradurga KSRTC Bus Stand area",
    transportNote:
      "For a fort visit followed by an outstation drive, confirm the sightseeing duration, parking plan, and onward departure time when requesting a quote.",
    landmarks: ["Chitradurga Fort", "Chandravalli", "Vani Vilas Sagar"],
    destinations: ["Chitradurga Fort", "Chandravalli", "Vani Vilas Sagar"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller", "bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-mangalore-karnataka": {
    pickupArea: "Mangaluru city",
    pickupReference: "Mangaluru KSRTC Bus Stand (Bejai) area",
    transportNote:
      "Coastal itineraries often combine city, temple, and beach stops. Share each stop and any ferry or temple timing so the road schedule can be checked.",
    landmarks: ["Kadri Manjunath Temple", "Panambur Beach", "Kudroli Gokarnath Temple"],
    destinations: ["Dharmasthala", "Kukke Subramanya", "Udupi"],
    routeSlugs: ["bangalore-to-mangalore-tempo-traveller"],
  },
  "best-travel-agency-davanagere-karnataka": {
    pickupArea: "Davanagere city",
    pickupReference: "Davanagere KSRTC Bus Stand area",
    transportNote:
      "For a regional circuit, share the towns and sightseeing stops in travel order; this helps the team check drive time and pickup arrangements.",
    landmarks: ["Kunduvada Lake", "Harihareshwara Temple", "Davanagere city centre"],
    destinations: ["Hampi", "Chitradurga", "Goa"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller", "bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-dharwad-karnataka": {
    pickupArea: "Dharwad and Hubballi",
    pickupReference: "Hubballi Old Bus Stand, Hubballi CBT, or Dharwad CBT",
    transportNote:
      "Tell the team whether your group is meeting in Hubballi or Dharwad. These are separate pickup areas; confirm the selected bus stand, map pin, and departure time before booking.",
    landmarks: ["Siddharoodha Math", "Unkal Lake", "Dharwad city centre"],
    destinations: ["Goa", "Hampi", "Mysore"],
    routeSlugs: ["bangalore-to-goa-tempo-traveller", "bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-gadag-karnataka": {
    pickupArea: "Gadag town",
    pickupReference: "Gadag KSRTC Bus Stand area",
    transportNote:
      "For temple and heritage stops around Gadag, share the complete stop list and desired halt durations so the itinerary can be arranged as a group trip.",
    landmarks: ["Trikuteshwara Temple", "Lakkundi", "Dambal"],
    destinations: ["Lakkundi", "Dambal", "Hampi"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-hassan-karnataka": {
    pickupArea: "Hassan city",
    pickupReference: "Hassan KSRTC Bus Stand area",
    transportNote:
      "Belur, Halebidu, and other heritage stops are separate points. Share your planned sequence and overnight stay so the drive plan can be reviewed.",
    landmarks: ["Belur", "Halebidu", "Shettihalli Rosary Church"],
    destinations: ["Belur", "Halebidu", "Shravanabelagola"],
    routeSlugs: ["bangalore-to-chikmagalur-tempo-traveller", "bangalore-to-mangalore-tempo-traveller"],
  },
  "best-travel-agency-haveri-karnataka": {
    pickupArea: "Haveri town",
    pickupReference: "Haveri KSRTC Bus Stand area",
    transportNote:
      "For wildlife or heritage visits, confirm entry timings and the permitted vehicle drop point with the destination before finalising the group itinerary.",
    landmarks: ["Bankapura Peacock Sanctuary", "Ranebennur Blackbuck Sanctuary", "Byadgi"],
    destinations: ["Ranebennur", "Bankapura", "Goa"],
    routeSlugs: ["bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-kalaburagi-karnataka": {
    pickupArea: "Kalaburagi city",
    pickupReference: "Kalaburagi Central Bus Stand area",
    transportNote:
      "For a city pilgrimage or heritage circuit, provide the stop order, group size, and return time so a suitable vehicle plan can be discussed.",
    landmarks: ["Sharana Basaveshwara Temple", "Khwaja Bande Nawaz Dargah", "Buddha Vihar"],
    destinations: ["Kalaburagi heritage sites", "Bidar", "Hyderabad"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
  "best-travel-agency-coorg-karnataka": {
    pickupArea: "Madikeri and Kodagu",
    pickupReference: "Madikeri KSRTC Bus Stand area",
    transportNote:
      "Kodagu stays and sightseeing points can be spread across hill roads. Share the accommodation pin and all stops so the team can confirm road access and the trip plan.",
    landmarks: ["Raja's Seat", "Abbey Falls", "Madikeri Fort"],
    destinations: ["Madikeri", "Dubare", "Namdroling Monastery"],
    routeSlugs: ["bangalore-to-coorg-tempo-traveller"],
  },
  "best-travel-agency-kolar-karnataka": {
    pickupArea: "Kolar town",
    pickupReference: "Kolar KSRTC Bus Stand area",
    transportNote:
      "Kolar district trips may begin in different towns. Include your taluk and exact pickup pin so the team can confirm the meeting point and route.",
    landmarks: ["Kolaramma Temple", "Someshwara Temple", "Kolar Gold Fields"],
    destinations: ["Kolar", "Kolar Gold Fields", "Mulbagal"],
    routeSlugs: ["bangalore-to-tirupati-tempo-traveller"],
  },
  "best-travel-agency-koppal-karnataka": {
    pickupArea: "Koppal town",
    pickupReference: "Koppal KSRTC Bus Stand area",
    transportNote:
      "Hampi-area circuits can include several monuments on both sides of the Tungabhadra. Share your monument list and stay location to plan the group transfers.",
    landmarks: ["Koppal Fort", "Anegundi", "Anjanadri Hill"],
    destinations: ["Anegundi", "Anjanadri Hill", "Hampi"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-mandya-karnataka": {
    pickupArea: "Mandya town",
    pickupReference: "Mandya KSRTC Bus Stand area",
    transportNote:
      "Mandya itineraries often combine sites in different towns. Share the full route and planned halts to coordinate pickup, sightseeing, and return travel.",
    landmarks: ["Srirangapatna", "Melukote", "Krishna Raja Sagara (KRS)"],
    destinations: ["Srirangapatna", "Melukote", "Mysore"],
    routeSlugs: ["bangalore-to-mysore-tempo-traveller"],
  },
  "best-travel-agency-mysuru-karnataka": {
    pickupArea: "Mysuru city",
    pickupReference: "Mysuru Suburban Bus Stand area",
    transportNote:
      "City sightseeing and outstation departures have different schedules. Share your hotel or home pickup pin, places to visit, and final drop to plan the vehicle use.",
    landmarks: ["Mysuru Palace", "Chamundi Hills", "Mysuru Zoo"],
    destinations: ["Coorg", "Ooty", "Bandipur"],
    routeSlugs: ["bangalore-to-mysore-tempo-traveller", "bangalore-to-ooty-tempo-traveller"],
  },
  "best-travel-agency-raichur-karnataka": {
    pickupArea: "Raichur town",
    pickupReference: "Raichur KSRTC Bus Stand area",
    transportNote:
      "For a pilgrimage or inter-district trip, provide the temple or town names in travel order and confirm the final drop point before departure.",
    landmarks: ["Raichur Fort", "Mantralayam", "Jaldurga Fort"],
    destinations: ["Mantralayam", "Raichur Fort", "Hyderabad"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
  "best-travel-agency-ramanagara-karnataka": {
    pickupArea: "Ramanagara town",
    pickupReference: "Ramanagara KSRTC Bus Stand area",
    transportNote:
      "Rock-climbing and hill areas may have designated access or parking points. Confirm the activity location and group drop point before the vehicle is dispatched.",
    landmarks: ["Ramanagara Hills", "Janapada Loka", "Channapatna"],
    destinations: ["Channapatna", "Mysore", "Coorg"],
    routeSlugs: ["bangalore-to-mysore-tempo-traveller", "bangalore-to-coorg-tempo-traveller"],
  },
  "best-travel-agency-shivamogga-karnataka": {
    pickupArea: "Shivamogga city",
    pickupReference: "Shivamogga KSRTC Bus Stand area",
    transportNote:
      "Waterfalls and Western Ghats circuits involve longer drives between stops. Share the full itinerary and travel dates so the team can discuss a practical schedule.",
    landmarks: ["Sakrebailu Elephant Camp", "Jog Falls", "Agumbe"],
    destinations: ["Jog Falls", "Agumbe", "Mysore"],
    routeSlugs: ["bangalore-to-chikmagalur-tempo-traveller", "bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-tumkur-karnataka": {
    pickupArea: "Tumakuru city",
    pickupReference: "Tumakuru KSRTC Bus Stand area",
    transportNote:
      "For temple and hill visits around Tumakuru, share the chosen stops and any early-morning departure requirement when requesting vehicle availability.",
    landmarks: ["Siddaganga Math", "Devarayanadurga", "Madhugiri Fort"],
    destinations: ["Devarayanadurga", "Madhugiri", "Chitradurga"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller", "bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-udupi-karnataka": {
    pickupArea: "Udupi town",
    pickupReference: "Udupi Service Bus Stand area",
    transportNote:
      "Temple visits, beach stops, and ferry trips can have different arrival requirements. Share darshan or ferry timings and confirm where the vehicle can wait.",
    landmarks: ["Udupi Sri Krishna Matha", "Malpe Beach", "Kaup Lighthouse"],
    destinations: ["Malpe", "Kaup", "Mangaluru"],
    routeSlugs: ["bangalore-to-mangalore-tempo-traveller"],
  },
  "best-travel-agency-karwar-karnataka": {
    pickupArea: "Karwar town",
    pickupReference: "Karwar KSRTC Bus Stand area",
    transportNote:
      "Coastal and forest itineraries can require extra travel time between stops. Share the full route and confirm permitted vehicle access at each destination.",
    landmarks: ["Rabindranath Tagore Beach", "Karwar Warship Museum", "Gokarna"],
    destinations: ["Gokarna", "Yana", "Dandeli"],
    routeSlugs: ["bangalore-to-goa-tempo-traveller"],
  },
  "best-travel-agency-vijayanagara-karnataka": {
    pickupArea: "Hosapete and Vijayanagara",
    pickupReference: "Hosapete KSRTC Bus Stand area",
    transportNote:
      "Hampi's monuments are spread over a large area and some approaches are restricted. Share the monument list and accommodation pin so drop points can be confirmed.",
    landmarks: ["Hampi", "Virupaksha Temple", "Tungabhadra Dam"],
    destinations: ["Hampi", "Anegundi", "Tungabhadra Dam"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-vijayapura-karnataka": {
    pickupArea: "Vijayapura city",
    pickupReference: "Vijayapura Central Bus Stand area",
    transportNote:
      "A heritage visit can include several sites across the city. Share the preferred stop sequence and duration to coordinate the group vehicle plan.",
    landmarks: ["Gol Gumbaz", "Ibrahim Rauza", "Almatti Dam"],
    destinations: ["Gol Gumbaz", "Almatti Dam", "Badami"],
    routeSlugs: ["bangalore-to-hampi-tempo-traveller"],
  },
  "best-travel-agency-yadgir-karnataka": {
    pickupArea: "Yadgir town",
    pickupReference: "Yadgir KSRTC Bus Stand area",
    transportNote:
      "District itineraries can start from more than one town. Include the town name, map pin, and destination sequence so the team can confirm the pickup plan.",
    landmarks: ["Yadgir Fort", "Shahapur", "Narayanpur Dam"],
    destinations: ["Yadgir Fort", "Narayanpur Dam", "Kalaburagi"],
    routeSlugs: ["bangalore-to-hyderabad-tempo-traveller"],
  },
};

const ROUTE_BY_SLUG = new Map(ROUTES_DATA.map((route) => [route.slug, route]));

function normalizePlace(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findBengaluruLocality(name: string) {
  const normalizedName = normalizePlace(name.replace(/\s+ward$/i, ""));
  return LOCALITIES_DATA.find((locality) => {
    const knownPlaces = [locality.name, ...locality.subLocalities];
    return knownPlaces.some((place) => normalizePlace(place) === normalizedName);
  });
}

export function getLocalLandingDetails(
  page: LandingPageRecord,
  locationName: string
): LocalLandingDetails {
  const districtDetails = DISTRICT_DETAILS[page.slug];
  if (districtDetails) return districtDetails;

  if (page.tier === "3") {
    const wardName = locationName.replace(/,\s*Bengaluru$/i, "");
    const locality = findBengaluruLocality(wardName);
    const routes = locality?.popularRoutes ?? ["Mysore", "Coorg", "Ooty", "Tirupati"];
    const routeSlugs = routes
      .map((destination) => {
        const normalized = normalizePlace(destination.split(" (")[0]);
        return ROUTES_DATA.find((route) =>
          normalizePlace(route.destination).includes(normalized)
        )?.slug;
      })
      .filter((slug): slug is string => Boolean(slug));

    return {
      pickupArea: wardName,
      pickupReference: `${wardName}, Bengaluru (share your exact map pin)`,
      transportNote: locality
        ? `Pickup planning for ${wardName} can use a clear meeting point near the locality landmarks below. Share the exact address and group size; the team will confirm vehicle access and availability.`
        : `Request pickup in ${wardName}. Share the exact map pin, group size, and vehicle preference so the team can confirm the meeting point and vehicle access before booking.`,
      landmarks: locality?.landmarks ?? [],
      destinations: routes,
      routeSlugs: Array.from(new Set(routeSlugs)).slice(0, 4),
    };
  }

  return {
    pickupArea: locationName,
    pickupReference: "Share your town or city and exact map pin",
    transportNote:
      "Karnataka trips can begin in different towns. Share your town, exact pickup pin, group size, and destination so the team can confirm a practical meeting point.",
    landmarks: ["Mysore", "Hampi", "Coorg"],
    destinations: ["Mysore", "Hampi", "Coorg"],
    routeSlugs: [
      "bangalore-to-mysore-tempo-traveller",
      "bangalore-to-hampi-tempo-traveller",
      "bangalore-to-coorg-tempo-traveller",
    ],
  };
}

export function getLocalRouteLinks(details: LocalLandingDetails) {
  return details.routeSlugs
    .map((slug) => ROUTE_BY_SLUG.get(slug))
    .filter((route): route is NonNullable<typeof route> => Boolean(route))
    .map((route) => ({
      destination: route.destination,
      href: `/routes/${route.slug}/`,
      routeOverview: route.routeOverview,
    }));
}
