export interface RouteItem {
  slug: string;
  destination: string;
  distanceKm: number;
  durationHrs: string;
  recommendedDuration: string;
  startingPrice: string;
  image: string;
  highlights: string[];
  description: string;
  bestTimeToVisit: string;
  routeOverview: string;
}

export const ROUTES_DATA: RouteItem[] = [
  {
    slug: "bangalore-to-mysore-tempo-traveller",
    destination: "Mysore",
    distanceKm: 150,
    durationHrs: "2.5-3 hrs",
    recommendedDuration: "1 to 2 Days",
    startingPrice: "₹18/km",
    image: "/images/destinations/mysore.webp",
    highlights: ["Mysore Palace illumination", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church", "Ranganathittu Bird Sanctuary"],
    description: "Travel from Bangalore to the heritage city of Mysore along the 10-lane Bangalore-Mysore Expressway. Enjoy royal palaces, silk emporiums, sandalwood soaps, and lush gardens with comfortable tempo traveller hire.",
    bestTimeToVisit: "October to March (Dussehra season is world-famous)",
    routeOverview: "Via Bangalore-Mysore Expressway (NH-275). Pristine 10-lane expressway ensures a silky smooth ride under 3 hours with designated food plaza stops."
  },
  {
    slug: "bangalore-to-coorg-tempo-traveller",
    destination: "Coorg (Madikeri)",
    distanceKm: 265,
    durationHrs: "5-6 hrs",
    recommendedDuration: "2 to 3 Days",
    startingPrice: "₹26/km",
    image: "/images/destinations/coorg.webp",
    highlights: ["Abbey & Iruppu Falls", "Raja's Seat sunset", "Namdroling Golden Temple (Bylakuppe)", "Coffee & Spice Plantations", "Dubare Elephant Camp"],
    description: "Escape to the Scotland of India. Coorg greets you with misty hills, fragrant coffee estates, spice trails, and tranquil Tibetan monasteries. Chauffeur-driven luxury tempos make winding hill roads effortless.",
    bestTimeToVisit: "September to June (lush post-monsoon greenery)",
    routeOverview: "Bangalore -> Mysore Expressway -> Hunsur -> Kushalnagar -> Madikeri. Beautiful scenic drive transitioning into winding green ghat roads."
  },
  {
    slug: "bangalore-to-ooty-tempo-traveller",
    destination: "Ooty (Udhagamandalam)",
    distanceKm: 280,
    durationHrs: "6-7 hrs",
    recommendedDuration: "3 Days",
    startingPrice: "₹28/km",
    image: "/images/destinations/ooty.webp",
    highlights: ["Nilgiri Mountain Toy Train", "Ooty Botanical Garden", "Doddabetta Peak", "Pykara Lake & Waterfalls", "Bandipur Wildlife Safari transit"],
    description: "Ascend into the Queen of Hill Stations. Cruise through the Bandipur and Mudumalai tiger reserves before ascending the legendary 36 hairpin bends of Kalhatty Ghat in high-torque tempo travellers.",
    bestTimeToVisit: "March to June & September to November",
    routeOverview: "Bangalore -> Mysore -> Nanjangud -> Gundlupet -> Bandipur National Park -> Mudumalai -> Kalhatty Ghat (36 hairpin turns) -> Ooty."
  },
  {
    slug: "bangalore-to-wayanad-tempo-traveller",
    destination: "Wayanad",
    distanceKm: 280,
    durationHrs: "5.5-6.5 hrs",
    recommendedDuration: "2 to 3 Days",
    startingPrice: "₹26/km",
    image: "/images/destinations/wayanad.webp",
    highlights: ["Banasura Sagar Dam", "Edakkal Caves", "Chembra Peak heart-shaped lake", "Soochipara Waterfalls", "Muthanga Wildlife Sanctuary"],
    description: "Discover Kerala's green paradise on the Western Ghats. Wayanad is renowned for emerald tea estates, mist-capped mountains, cascading waterfalls, and ancient Neolithic rock caves.",
    bestTimeToVisit: "October to May",
    routeOverview: "Bangalore -> Mysore -> Nanjangud -> Gundlupet -> Bandipur forest checkpost -> Sulthan Bathery -> Kalpetta."
  },
  {
    slug: "bangalore-to-tirupati-tempo-traveller",
    destination: "Nava Tirupati",
    distanceKm: 250,
    durationHrs: "4-5 hrs",
    recommendedDuration: "1 to 2 Days",
    startingPrice: "₹20/km",
    image: "/images/destinations/tirupati.webp",
    highlights: ["Lord Venkateswara Temple (Tirumala)", "Padmavathi Ammavari Temple", "Kapila Theertham", "Silathoranam geological arch"],
    description: "Undertake a sacred pilgrimage to the world-renowned holy shrine of Lord Venkateswara at Tirumala hills. Direct doorstep pickup anywhere in Bangalore and comfortable transit for senior citizens and families.",
    bestTimeToVisit: "Year-round (September to February offers pleasant weather)",
    routeOverview: "Bangalore -> Hoskote -> Kolar -> Mulbagal -> Palamaner -> Chittoor -> Tirupati. Well-maintained 4-lane highway with excellent eateries."
  },
  {
    slug: "bangalore-to-chikmagalur-tempo-traveller",
    destination: "Chikmagalur",
    distanceKm: 245,
    durationHrs: "4.5-5 hrs",
    recommendedDuration: "2 to 3 Days",
    startingPrice: "₹24/km",
    image: "/images/destinations/chikmagalur.webp",
    highlights: ["Mullayanagiri Peak (Highest in Karnataka)", "Baba Budangiri shrine", "Hebbe Falls", "Coffee Estate Homestays", "Belur & Halebidu Temples"],
    description: "The birthplace of coffee in India. Chikmagalur offers dramatic mountain ridges, crystal streams, and historic Hoysala architecture. Travel with seasoned hill drivers.",
    bestTimeToVisit: "September to March",
    routeOverview: "Bangalore -> Nelamangala -> Kunigal -> Channarayapatna -> Hassan -> Belur -> Chikmagalur (NH-75)."
  },
  {
    slug: "bangalore-to-pondicherry-tempo-traveller",
    destination: "Pondicherry (Puducherry)",
    distanceKm: 310,
    durationHrs: "6-7 hrs",
    recommendedDuration: "2 to 3 Days",
    startingPrice: "₹26/km",
    image: "/images/destinations/pondicherry.webp",
    highlights: ["French White Town & Promenade Beach", "Auroville Matrimandir", "Sri Aurobindo Ashram", "Paradise Beach boating", "French cafes and bakeries"],
    description: "Experience charming French colonial architecture, colorful bougainvillea lanes, seaside boulevards, and spiritual serenity in Auroville. Perfect coastal weekend tour.",
    bestTimeToVisit: "October to March",
    routeOverview: "Bangalore -> Hosur -> Krishnagiri -> Uthangarai -> Tiruvannamalai -> Tindivanam -> Pondicherry."
  },
  {
    slug: "bangalore-to-goa-tempo-traveller",
    destination: "Goa",
    distanceKm: 560,
    durationHrs: "10-12 hrs",
    recommendedDuration: "4 to 5 Days",
    startingPrice: "₹26/km",
    image: "/images/destinations/goa.webp",
    highlights: ["Calangute & Baga beaches", "Old Goa Basilica of Bom Jesus", "Dudhsagar Waterfalls", "Mandovi River sunset cruise", "Fort Aguada"],
    description: "The ultimate Indian road trip. Golden beaches, Portuguese fortresses, beach shacks, and seafood delicacies. Dual driver teams ensure restful and secure long-distance transit.",
    bestTimeToVisit: "November to March",
    routeOverview: "Bangalore -> Tumkur -> Chitradurga -> Davanagere -> Hubballi -> Dharwad -> Alnavar -> Ramnagar -> Anmod Ghat -> Goa (NH-48)."
  },
  {
    slug: "bangalore-to-hampi-tempo-traveller",
    destination: "Hampi & Badami",
    distanceKm: 350,
    durationHrs: "6.5-7.5 hrs",
    recommendedDuration: "3 Days",
    startingPrice: "₹24/km",
    image: "/images/destinations/hampi.webp",
    highlights: ["Virupaksha Temple", "Vijayanagara Stone Chariot", "Lotus Mahal & Elephant Stables", "Tungabhadra River coracle rides", "Sunset at Matanga Hill"],
    description: "Travel back in time to the grand capital of the Vijayanagara Empire, a UNESCO World Heritage site amidst fantastical boulder-strewn landscapes and ancient monolithic shrines.",
    bestTimeToVisit: "October to February",
    routeOverview: "Bangalore -> Tumkur -> Sira -> Chitradurga -> Kudligi -> Hospet -> Hampi (NH-48 to NH-50)."
  },
  {
    slug: "bangalore-to-kodaikanal-tempo-traveller",
    destination: "Kodaikanal",
    distanceKm: 460,
    durationHrs: "8.5-9.5 hrs",
    recommendedDuration: "3 to 4 Days",
    startingPrice: "₹28/km",
    image: "/images/destinations/kodaikanal.webp",
    highlights: ["Kodai Star Lake boating", "Coaker's Walk misty views", "Pillar Rocks", "Silver Cascade Falls", "Bryant Park"],
    description: "Princess of Hill Stations in Tamil Nadu. Nestled in the Palani Hills at 2,133 meters, Kodaikanal provides crisp alpine air, dense pine forests, and serene lake walks.",
    bestTimeToVisit: "September to May",
    routeOverview: "Bangalore -> Hosur -> Dharmapuri -> Salem -> Namakkal -> Karur -> Dindigul -> Batlagundu Ghat -> Kodaikanal."
  },
  {
    slug: "bangalore-to-chennai-tempo-traveller",
    destination: "Chennai",
    distanceKm: 350,
    durationHrs: "6-7 hrs",
    recommendedDuration: "2 to 3 Days",
    startingPrice: "₹20/km",
    image: "/images/destinations/pondicherry.webp",
    highlights: ["Marina Beach", "Kapaleeshwarar Temple", "San Thome Cathedral", "Mahabalipuram shore temples transit", "DakshinaChitra cultural heritage"],
    description: "Direct group transport connecting Karnataka's tech capital to the cultural gateway of South India on the Bay of Bengal coast. Smooth, multi-lane inter-state highway travel.",
    bestTimeToVisit: "November to February",
    routeOverview: "Bangalore -> Hosur -> Krishnagiri -> Vaniyambadi -> Vellore -> Sriperumbudur -> Chennai (NH-48)."
  },
  {
    slug: "bangalore-to-hyderabad-tempo-traveller",
    destination: "Hyderabad",
    distanceKm: 575,
    durationHrs: "8.5-9.5 hrs",
    recommendedDuration: "3 to 4 Days",
    startingPrice: "₹22/km",
    image: "/images/destinations/hyderabad.webp",
    highlights: ["Charminar & Laad Bazaar", "Golconda Fort sound & light show", "Ramoji Film City full-day tour", "Hussain Sagar Buddha statue", "Authentic Hyderabadi Biryani"],
    description: "A seamless highway cruise along the 4-lane North-South Corridor (NH-44). Ideal for corporate delegations, multi-family reunions, and tourist explorations in the City of Pearls.",
    bestTimeToVisit: "October to March",
    routeOverview: "Bangalore -> Devanahalli -> Chikkaballapur -> Anantapur -> Kurnool -> Shadnagar -> Hyderabad (NH-44)."
  },
  {
    slug: "bangalore-to-mangalore-tempo-traveller",
    destination: "Mangalore (Mangaluru) & Udupi",
    distanceKm: 350,
    durationHrs: "7-8 hrs",
    recommendedDuration: "3 Days",
    startingPrice: "₹26/km",
    image: "/images/destinations/mangalore.webp",
    highlights: ["Udupi Sri Krishna Matha", "Panambur & Tannirbhavi beaches", "St. Aloysius Chapel frescoes", "Kudroli Gokarnath Temple", "Malpe Beach & St. Mary's Island"],
    description: "Coastal Karnataka's premier port city and sacred temple hub. Famous for pristine beaches, coastal delicacies (Neer Dosa, Ghee Roast), and ancient temple architecture.",
    bestTimeToVisit: "October to February",
    routeOverview: "Bangalore -> Nelamangala -> Hassan -> Sakleshpur -> Shiradi Ghat -> Uppinangady -> Mangalore (NH-75)."
  },
  {
    slug: "bangalore-to-shirdi-tempo-traveller",
    destination: "Shirdi Sai Baba Temple",
    distanceKm: 980,
    durationHrs: "16-18 hrs",
    recommendedDuration: "4 to 5 Days",
    startingPrice: "₹24/km",
    image: "/images/destinations/Shirdi.webp",
    highlights: ["Sai Baba Samadhi Mandir darshan", "Dwarkamai & Chavadi", "Shani Shingnapur temple visit", "Trimbakeshwar Jyotirlinga extension", "Panchavati Nashik stop"],
    description: "Devotional long-distance pilgrimage circuit from Bangalore to Shirdi Sai Baba shrine with dual drivers, customized rest stops, and senior-citizen friendly pushback seating.",
    bestTimeToVisit: "July to March (Guru Purnima and Dussehra celebrations)",
    routeOverview: "Bangalore -> Tumkur -> Chitradurga -> Davanagere -> Hubli -> Belgaum -> Kolhapur -> Pune -> Ahmednagar -> Shirdi."
  }
];
