"use client";

import React, { useState } from "react";

interface ItineraryDay {
  dayNum: number;
  title: string;
  route: string;
  startOvernight: string;
  distanceDuration: string;
  activities: string;
  noteType: "normal" | "warning" | "himalayan" | "driver" | "completion";
  noteTitle: string;
  noteText: string;
}

interface Phase {
  phaseNum: number;
  title: string;
  description: string;
  days: ItineraryDay[];
}

const PHASES: Phase[] = [
  {
    phaseNum: 1,
    title: "Karnataka, Maharashtra & Gujarat Circuit (Days 1 to 6)",
    description: "Covering Bhimashankar, Trimbakeshwar, Grishneshwar, Somnath, and Nageshwar Jyotirlingas.",
    days: [
      {
        dayNum: 1,
        title: "Day 1: Departure from Bengaluru • Transit towards Northern Karnataka / Maharashtra Border",
        route: "Bengaluru → Tumakuru → Chitradurga → Hubballi → Belagavi / Kolhapur border area.",
        startOvernight: "Starts at Bengaluru (designated pickup hubs) • Overnight stay in Belagavi / Kolhapur area.",
        distanceDuration: "~500 km (approx. 9 to 10 hours driving, subject to highway conditions & toll queues).",
        activities: "Morning departure in AC Volvo coach with introductory devotional prayer, planned breakfast and lunch halts, and driver changeover.",
        noteType: "driver",
        noteTitle: "Driver Rest Note:",
        noteText: "Dual commercial drivers rotate at Hubballi bypass. Full 8-hour continuous night rest scheduled before Western Ghats ascent.",
      },
      {
        dayNum: 2,
        title: "Day 2: Sahyadri Hills • Bhimashankar Jyotirlinga Darshan • Transit to Nashik",
        route: "Kolhapur → Pune bypass → Manchar → Bhimashankar → Sangamner → Nashik.",
        startOvernight: "Starts at Kolhapur area • Overnight stay in Nashik.",
        distanceDuration: "~420 km (approx. 9 to 10 hours road time including mountain ghat speed limits).",
        activities: "Sacred Bhimashankar Jyotirlinga Darshan in Sahyadri forest sanctuary, origin of Bhima River.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Ghat road speeds are regulated at 30 to 40 km/h for safety. Darshan queue typically spans 1.5 to 2.5 hours. Evening check-in at Nashik.",
      },
      {
        dayNum: 3,
        title: "Day 3: Trimbakeshwar & Grishneshwar Jyotirlingas • Transit towards Gujarat",
        route: "Nashik → Trimbakeshwar (30 km) → Chhatrapati Sambhajinagar / Ellora (180 km) → Dhule highway corridor (160 km).",
        startOvernight: "Starts at Nashik • Overnight stay in Dhule / Maharashtra-Gujarat border area.",
        distanceDuration: "~370 to 430 km (approx. 9 to 11 driving hours plus queue times).",
        activities: "Trimbakeshwar Jyotirlinga (Godavari origin, three-faced linga) and Grishneshwar Jyotirlinga (12th Jyotirlinga near Ellora).",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "Covering two Jyotirlingas in opposite directions (Trimbak west, Ellora east) plus ~370+ km of driving in a single day exceeds 14 hours of total transit and darshan queues. The tour operator recommends splitting this into two distinct days or scheduling a night halt in Aurangabad/Ellora rather than attempting late-night Gujarat transit.",
      },
      {
        dayNum: 4,
        title: "Day 4: Saurashtra Coastal Highway • Somnath Jyotirlinga Evening Aarti",
        route: "Gujarat border → Bhavnagar bypass → Mahuva → Veraval → Somnath (Prabhas Patan).",
        startOvernight: "Starts at Gujarat border • Overnight stay in Somnath.",
        distanceDuration: "~480 km (approx. 9 to 10 hours driving on NH-51 coastal highway).",
        activities: "Somnath Jyotirlinga on Arabian Sea coast; witness the magnificent evening Sandhya Aarti and light-and-sound show.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Strict temple security forbids smartphones and electronic devices in the inner courtyard; cloaking lockers provided.",
      },
      {
        dayNum: 5,
        title: "Day 5: Nageshwar Jyotirlinga • Dwarkadhish • Central Gujarat Transit",
        route: "Somnath → Porbandar coastal road → Dwarka / Nageshwar (230 km) → Jamnagar / Rajkot corridor (180 km).",
        startOvernight: "Starts at Somnath • Overnight stay in Rajkot / Jamnagar area.",
        distanceDuration: "~410 km (approx. 8 to 9 hours driving plus darshan).",
        activities: "Nageshwar Jyotirlinga (underground linga & giant seated Shiva statue); conditional brief view of Dwarkadhish Temple if afternoon timings permit (temple reopens 5:00 PM).",
        noteType: "normal",
        noteTitle: "Operational Note:",
        noteText: "Dual drivers rotate on the Porbandar-Dwarka highway to maintain alertness.",
      },
      {
        dayNum: 6,
        title: "Day 6: Central Gujarat to Madhya Pradesh Corridor • Mandatory Scheduled Driver Rest Day",
        route: "Rajkot / Ahmedabad bypass → Godhra → Dahod → Dhar → Indore / Ujjain highway gateway.",
        startOvernight: "Starts at Rajkot • Overnight stay in Indore / Omkareshwar gateway.",
        distanceDuration: "~480 km (approx. 9 to 10 hours on multi-lane expressways).",
        activities: "Dedicated highway transit day with scheduled meal and hydration intervals. No strenuous temple queues.",
        noteType: "driver",
        noteTitle: "Mandatory Driver Rest Protocol:",
        noteText: "Full night of uninterrupted sleep required for both drivers before entering the high-traffic Malwa and Narmada pilgrimage belt.",
      },
    ],
  },
  {
    phaseNum: 2,
    title: "Central India & The Braj Pilgrimage Corridor (Days 7 to 10)",
    description: "Omkareshwar, Mahakaleshwar, plus conditional spiritual stops at Mathura & Vrindavan.",
    days: [
      {
        dayNum: 7,
        title: "Day 7: Omkareshwar Jyotirlinga (Narmada River) • Drive to Holy Ujjain",
        route: "Indore gateway → Omkareshwar (80 km) → Ujjain (135 km).",
        startOvernight: "Starts near Indore • Overnight stay in Ujjain.",
        distanceDuration: "~215 km (approx. 5 hours driving time).",
        activities: "Holy Narmada River suspension bridge / boat crossing to Mandhata Island; Omkareshwar & Mamleshwar Jyotirlinga darshan. Evening arrival in Ujjain; visit Ram Ghat on the holy Shipra River.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Moderate driving day allowing unhurried darshan and boat ride on the sacred Narmada.",
      },
      {
        dayNum: 8,
        title: "Day 8: Mahakaleshwar Jyotirlinga (Ujjain) • Transit towards Mathura / Uttar Pradesh",
        route: "Ujjain → Shajapur → Guna → Shivpuri → Gwalior / Agra highway corridor.",
        startOvernight: "Starts at Ujjain • Overnight stay in Gwalior / Agra corridor (Operator recommended intermediate halt).",
        distanceDuration: "~450 km to Gwalior (approx. 8 to 9 hours driving) • Full stretch to Mathura is ~650 km.",
        activities: "Early morning darshan at sacred Mahakaleshwar Jyotirlinga (Dakshinmukhi swayambhu linga) and Mahakal Lok corridor.",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "Direct single-day coach drive from Ujjain to Mathura exceeds 650 km (~13 to 15 hours in commercial highway traffic). The tour operator strongly advises scheduling an intermediate overnight rest at Gwalior to ensure compliant driver rest hours and safe daylight arrival in Braj Bhoomi.",
      },
      {
        dayNum: 9,
        title: "Day 9: Mathura & Vrindavan • Additional Sacred Destinations (Conditional Visit)",
        route: "Gwalior / Agra corridor → Mathura → Vrindavan → Yamuna Expressway.",
        startOvernight: "Starts near Agra / Mathura • Overnight stay in Mathura / Vrindavan or Delhi NCR bypass.",
        distanceDuration: "~80 to 120 km local driving (approx. 3 to 4 hours road time amidst dense local traffic).",
        activities: "Mathura: Shri Krishna Janmabhoomi Mandir Complex and Potra Kund. Vrindavan: Banke Bihari Mandir and illuminated Prem Mandir.",
        noteType: "warning",
        noteTitle: "Conditional Visit Note:",
        noteText: "Sightseeing in Mathura and Vrindavan depends on strict local temple opening hours (Mathura Janmabhoomi closes 12 PM to 4 PM; Banke Bihari closes 12:30 PM to 4:30 PM) and local e-rickshaw availability.",
      },
      {
        dayNum: 10,
        title: "Day 10: Transit along Himalayan Foothills • Haridwar & Rishikesh Gateway",
        route: "Yamuna Expressway / Eastern Peripheral Expressway → Meerut expressway → Roorkee → Haridwar.",
        startOvernight: "Starts at Mathura / NCR • Overnight stay in Haridwar / Rishikesh.",
        distanceDuration: "~320 km (approx. 6 to 7 hours driving).",
        activities: "Arrival at Himalayan foothills; evening Ganga Aarti at holy Har Ki Pauri on the Ganges River.",
        noteType: "driver",
        noteTitle: "Himalayan Preparation Protocol:",
        noteText: "Mandatory verification of Char Dham biometric registration slips, medical fitness passes, and thermal clothing for Kedarnath trek.",
      },
    ],
  },
  {
    phaseNum: 3,
    title: "The Garhwal Himalayas & Kedarnath Yatra (Days 11 to 14)",
    description: "Ascent through Mandakini River valley, the sacred 16 km Kedarnath trek, and high-altitude darshan.",
    days: [
      {
        dayNum: 11,
        title: "Day 11: Haridwar to Guptkashi / Sonprayag • Mandakini Valley Mountain Ascent",
        route: "Rishikesh → Devprayag (Alaknanda & Bhagirathi confluence) → Srinagar → Rudraprayag → Guptkashi / Sitapur / Sonprayag base camp.",
        startOvernight: "Starts at Haridwar • Overnight stay in Guptkashi / Sitapur / Sonprayag.",
        distanceDuration: "~205 km mountain road (approx. 8 to 10 hours due to hill driving regulations and checkpoint controls).",
        activities: "Views of sacred river confluences (Prayags); Mandakini valley scenery.",
        noteType: "normal",
        noteTitle: "Himalayan Road Regulation:",
        noteText: "Night driving on Uttarakhand hill roads is strictly prohibited after sunset by Uttarakhand Police. Early 5:30 AM departure mandatory.",
      },
      {
        dayNum: 12,
        title: "Day 12: Kedarnath Dham, The Sacred 16 km Mountain Trek • Evening Darshan",
        route: "Sitapur / Sonprayag → Local shuttle to Gaurikund (1,982m) → 16 km steep mountain climb to Kedarnath Dham (3,583m / 11,755 ft).",
        startOvernight: "Starts at Gaurikund trek point • Overnight stay in basic guesthouse / ashram at Kedarnath top.",
        distanceDuration: "16 km uphill trek on foot (approx. 7 to 9 hours walking; 4 to 5 hours on pony).",
        activities: "Sacred Kedarnath Jyotirlinga Darshan, ancient Pandava-era shrine surrounded by snow peaks.",
        noteType: "himalayan",
        noteTitle: "⚠️ Crucial Physical & Operational Warnings for Kedarnath:",
        noteText: "Steep physical demands (elevation gain to 3,583m, AMS risk). Char Dham biometric registration is mandatory. Helicopter and pony services are strictly not included in base fare and must be booked directly.",
      },
      {
        dayNum: 13,
        title: "Day 13: Kedarnath Morning Pooja • Downhill Descent to Base Camp",
        route: "Kedarnath temple top → 16 km descent to Gaurikund → Local shuttle back to Sonprayag / Sitapur.",
        startOvernight: "Starts at Kedarnath top • Overnight stay in Guptkashi / Sitapur base hotel.",
        distanceDuration: "16 km downhill trek (approx. 5 to 7 hours walking). Base transit 1 hour.",
        activities: "Early morning prayers, view of the miraculous Bhim Shila rock behind the temple sanctum, descent into Mandakini valley.",
        noteType: "normal",
        noteTitle: "Recovery Note:",
        noteText: "Warm water bath and full evening rest at base hotel to recover from the knee strain of downhill descent.",
      },
      {
        dayNum: 14,
        title: "Day 14: Descent from Garhwal Hills • Return to Haridwar Gateway",
        route: "Guptkashi → Rudraprayag → Srinagar → Rishikesh → Haridwar.",
        startOvernight: "Starts at Guptkashi • Overnight stay in Haridwar.",
        distanceDuration: "~205 km mountain road (approx. 7 to 9 hours driving).",
        activities: "Smooth downhill mountain return; rest evening in Haridwar.",
        noteType: "warning",
        noteTitle: "⚠️ Weather Dependency Notice:",
        noteText: "Monsoon rainfall, roadblocks, or shooting stones can cause temporary halts on the Rudraprayag corridor. Operator incorporates Haridwar as a necessary buffer night.",
      },
    ],
  },
  {
    phaseNum: 4,
    title: "Sacred Uttar Pradesh, Bihar & Purvanchal (Days 15 to 18)",
    description: "Ayodhya, Kashi Vishwanath, Gaya, Bodh Gaya, and Baba Baidyanath Dham.",
    days: [
      {
        dayNum: 15,
        title: "Day 15: Haridwar to Ayodhya • The Shri Ram Janmabhoomi Corridor",
        route: "Haridwar → Moradabad bypass → Bareilly → Sitapur → Lucknow bypass → Ayodhya.",
        startOvernight: "Starts at Haridwar • Overnight stay in Ayodhya.",
        distanceDuration: "~580 to 610 km (approx. 12 to 14 driving hours on UP highways).",
        activities: "Highway transit across northern Uttar Pradesh; evening arrival in holy Ayodhya.",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "Covering 600 km across Uttar Pradesh is a long, strenuous coach journey. Early morning 4:30 AM departure and two certified commercial drivers rotating shifts are strictly required to avoid Lucknow metro traffic congestion.",
      },
      {
        dayNum: 16,
        title: "Day 16: Ayodhya Ram Janmabhoomi Darshan • Transit to Holy Kashi (Varanasi)",
        route: "Ayodhya → Sultanpur → Jaunpur → Varanasi (Kashi).",
        startOvernight: "Starts at Ayodhya • Overnight stay in Varanasi.",
        distanceDuration: "~200 km (approx. 4.5 to 5.5 hours driving).",
        activities: "Ayodhya (Conditional Stop): Shri Ram Janmabhoomi Mandir Darshan, Hanuman Garhi, Saryu River Ghats. Varanasi: Evening arrival in Kashi; witness the world-famous Ganga Aarti at Dashashwamedh Ghat.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Moderate drive allows peaceful morning darshan in Ayodhya and memorable evening aarti on the holy Ganges.",
      },
      {
        dayNum: 17,
        title: "Day 17: Kashi Vishwanath Jyotirlinga Darshan • Transit to Bodh Gaya",
        route: "Varanasi city → Chandauli → Sasaram → Dobhi → Bodh Gaya.",
        startOvernight: "Starts at Varanasi • Overnight stay in Bodh Gaya / Gaya.",
        distanceDuration: "~250 km (approx. 5.5 to 6.5 hours on Grand Trunk Road / NH-19).",
        activities: "Varanasi: Early morning Kashi Vishwanath Jyotirlinga darshan, Annapurna Mandir, and Kaal Bhairav Mandir. Bodh Gaya (Conditional Stop): Evening visit to UNESCO World Heritage Mahabodhi Temple and sacred Bodhi Tree.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Kashi Vishwanath Corridor allows smooth walking from ghats directly to the sanctum.",
      },
      {
        dayNum: 18,
        title: "Day 18: Gaya Pind Daan / Vishnupad Mandir • Baba Baidyanath Dham (Deoghar)",
        route: "Bodh Gaya → Gaya → Nawada → Jamui → Banka → Deoghar (Jharkhand).",
        startOvernight: "Starts at Bodh Gaya • Overnight stay in Deoghar.",
        distanceDuration: "~220 km (approx. 5.5 to 6.5 hours on state highways).",
        activities: "Gaya (Conditional Stop): Morning prayers at Vishnupad Temple on Falgu River and Akshayavat tree. Deoghar: Evening arrival in the holy Santhal Parganas; initial visit to Baidyanath complex.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Road traverses varied terrain crossing from southern Bihar into Jharkhand.",
      },
    ],
  },
  {
    phaseNum: 5,
    title: "Eastern Coast, Srisailam & Rameshwaram Circuit (Days 19 to 25)",
    description: "Baidyanath, Jagannath Puri, Mallikarjuna (Srisailam), Ramanathaswamy, and journey conclusion in Bengaluru.",
    days: [
      {
        dayNum: 19,
        title: "Day 19: Baba Baidyanath Jyotirlinga Darshan • Transit towards Coastal Odisha",
        route: "Deoghar → Dumka → Asansol → Bankura → Kharagpur → Balasore corridor.",
        startOvernight: "Starts at Deoghar • Overnight stay in Balasore / Kharagpur corridor (Operator recommended intermediate halt).",
        distanceDuration: "~380 to 420 km to Balasore (approx. 8 to 9 hours driving) • Extended stretch to Puri is ~650 km.",
        activities: "Early morning darshan at sacred Baba Baidyanath Jyotirlinga (Kamna Linga).",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "Attempting a single-day drive from Deoghar to Puri covers over 650 km across industrial freight routes and toll corridors. The tour operator strongly recommends breaking the journey with an overnight halt at Balasore/Bhubaneswar for passenger safety.",
      },
      {
        dayNum: 20,
        title: "Day 20: Jagannath Puri Dham Darshan • Coastal Odisha Corridor",
        route: "Balasore → Cuttack → Bhubaneswar → Puri Jagannath Dham (65 km) → Brahmapur corridor (~180 km).",
        startOvernight: "Starts in northern Odisha • Overnight stay in Puri / Brahmapur area.",
        distanceDuration: "~250 to 300 km (approx. 6 to 7 hours driving).",
        activities: "Shri Jagannath Temple Darshan (Lord Jagannath, Balabhadra, Devi Subhadra), sacred Swargadwar, and Anand Bazaar Mahaprasad.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Leather items, cameras, and mobile phones are strictly forbidden inside Shri Jagannath Temple premises.",
      },
      {
        dayNum: 21,
        title: "Day 21: Coastal NH-16 Southward Transit • Journey towards Andhra Pradesh",
        route: "Brahmapur → Srikakulam → Visakhapatnam bypass → Rajahmundry → Vijayawada corridor.",
        startOvernight: "Starts at Brahmapur • Overnight stay in Vijayawada / Guntur area (Operator recommended safe rest stop).",
        distanceDuration: "~500 km (approx. 9 to 10 hours on NH-16 multi-lane highway).",
        activities: "Continuous highway transit southward along the Bay of Bengal coastal highway; scheduled refreshment breaks.",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "The direct distance from southern Odisha to Srisailam exceeds 750 km. Driving through the Nallamala forest ghats at night is strictly prohibited by forest officials. Staging an overnight rest halt in Vijayawada is mandatory for passenger safety and vehicle inspection.",
      },
      {
        dayNum: 22,
        title: "Day 22: Nallamala Forest Ascent • Mallikarjuna Jyotirlinga Darshan (Srisailam)",
        route: "Vijayawada → Guntur → Vinukonda → Dornala → Srisailam (260 km, approx. 6 hours). Afternoon descent southwards (~180 km).",
        startOvernight: "Starts at Vijayawada • Overnight stay in Dornala / Markapur / Kadapa area.",
        distanceDuration: "~440 km total including ghat road time.",
        activities: "Mallikarjuna Jyotirlinga and Bhramaramba Devi Shakti Peeth darshan on the holy Krishna River amidst Nallamala forest sanctuary.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Forest check-posts enforce strict entry timings. Complete afternoon descent before nightfall.",
      },
      {
        dayNum: 23,
        title: "Day 23: Transit across Tamil Nadu towards Rameshwaram Island",
        route: "Kadapa / Chittoor → Vellore → Tiruvannamalai / Tiruchirappalli → Madurai bypass → Ramanathapuram → Pamban Bridge → Rameshwaram.",
        startOvernight: "Starts in southern Andhra • Overnight stay in Rameshwaram Island.",
        distanceDuration: "~560 to 600 km (approx. 11 to 12 hours driving).",
        activities: "Travel across Tamil Nadu towards the southern tip of India; cross the iconic Pamban Sea Bridge onto Rameshwaram Island.",
        noteType: "warning",
        noteTitle: "⚠️ Operator Review Note:",
        noteText: "Long cross-state journey across Tamil Nadu. Early morning 5:00 AM departure is required to ensure crossing the Pamban Sea Bridge in daylight and reaching Rameshwaram before night.",
      },
      {
        dayNum: 24,
        title: "Day 24: Ramanathaswamy Jyotirlinga Darshan • 22 Theertham Bath • Dhanushkodi",
        route: "Rameshwaram local → Dhanushkodi (20 km) → Ramanathapuram → Madurai transit (170 km).",
        startOvernight: "Starts at Rameshwaram • Overnight stay in Rameshwaram / Madurai.",
        distanceDuration: "~190 km (approx. 4.5 hours road time).",
        activities: "Sacred holy dip at Agni Theertham, traditional 22 temple well baths inside Ramanathaswamy Temple, darshan of the Shivalinga consecrated by Bhagwan Shri Ram, and afternoon visit to Ram Setu viewpoint at Dhanushkodi beach.",
        noteType: "normal",
        noteTitle: "Travel Note:",
        noteText: "Traditional dress code enforced for inner sanctum entry. Dry clothes change required after 22 Theertham bath.",
      },
      {
        dayNum: 25,
        title: "Day 25: Return Journey to Bengaluru • Yatra Conclusion",
        route: "Madurai / Dindigul → Karur → Salem → Dharmapuri → Krishnagiri → Hosur → Bengaluru.",
        startOvernight: "Starts at Madurai area • Concludes at Bengaluru (Home drop at designated hubs).",
        distanceDuration: "~440 km (approx. 7.5 to 8.5 hours on NH-44 four-lane highway).",
        activities: "Farewell devotional prayers, smooth highway cruising on NH-44, scheduled lunch and refreshment halts, evening drop in Bengaluru with hearts filled with the divine blessings of all 12 Jyotirlingas and India's greatest shrines.",
        noteType: "completion",
        noteTitle: "Yatra Completion:",
        noteText: "Pilgrims arrive back safely in Bengaluru with sacred prasadam and timeless memories.",
      },
    ],
  },
];

export default function ItineraryDaysAccordion() {
  const [openDays, setOpenDays] = useState<{ [key: number]: boolean }>({ 1: true });

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const expandAll = () => {
    const all: { [key: number]: boolean } = {};
    for (let i = 1; i <= 25; i++) {
      all[i] = true;
    }
    setOpenDays(all);
  };

  const collapseAll = () => {
    setOpenDays({});
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={expandAll}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-navy text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-amber cursor-pointer"
        >
          Expand All Days
        </button>
        <button
          type="button"
          onClick={collapseAll}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-navy text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-amber cursor-pointer"
        >
          Collapse All Days
        </button>
      </div>

      {PHASES.map((phase) => (
        <div key={phase.phaseNum} className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-gray-50/50 shadow-sm">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
            <span className="text-brand-navy text-xs font-bold uppercase tracking-wider">
              Phase {phase.phaseNum}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-navy">{phase.title}</h3>
          </div>
          <p className="text-xs text-gray-500 mb-6">{phase.description}</p>

          <div className="space-y-3">
            {phase.days.map((day) => {
              const isOpen = !!openDays[day.dayNum];
              const isWarning = day.noteType === "warning";
              const isHimalayan = day.noteType === "himalayan";
              const isCompletion = day.noteType === "completion";

              let cardBorder = "border-gray-200";
              let cardBg = "bg-white";
              let badgeBg = "bg-brand-amber/20 text-brand-navy";

              if (isWarning) {
                cardBorder = "border-amber-300";
                cardBg = "bg-amber-50/20";
                badgeBg = "bg-brand-amber/30 text-brand-navy";
              } else if (isHimalayan) {
                cardBorder = "border-red-300";
                cardBg = "bg-red-50/20";
                badgeBg = "bg-red-100 text-red-800";
              } else if (isCompletion) {
                cardBorder = "border-brand-amber";
                cardBg = "bg-amber-50/20";
                badgeBg = "bg-brand-amber text-brand-navy";
              }

              return (
                <div
                  key={day.dayNum}
                  className={`rounded-xl border ${cardBorder} ${cardBg} p-4 transition-all shadow-sm`}
                >
                  <button
                    type="button"
                    onClick={() => toggleDay(day.dayNum)}
                    className="w-full cursor-pointer flex items-center justify-between font-bold text-left text-sm text-brand-navy select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span className={`w-7 h-7 shrink-0 rounded-full ${badgeBg} text-xs font-semibold flex items-center justify-center`}>
                        D{day.dayNum}
                      </span>
                      <span className="leading-snug">{day.title}</span>
                    </div>
                    <span
                      className={`text-brand-amber shrink-0 transition-transform duration-200 text-lg ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      &darr;
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed pl-2 sm:pl-10 space-y-2">
                      <p>
                        <strong className="text-brand-navy">Route:</strong> {day.route}
                      </p>
                      <p>
                        <strong className="text-brand-navy">Starting Point &amp; Overnight:</strong> {day.startOvernight}
                      </p>
                      <p>
                        <strong className="text-brand-navy">Driving Distance &amp; Estimated Duration:</strong>{" "}
                        {day.distanceDuration}
                      </p>
                      <p>
                        <strong className="text-brand-navy">Planned Activities &amp; Temples:</strong> {day.activities}
                      </p>

                      {day.noteType === "driver" && (
                        <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 text-xs border border-blue-200/60">
                          <strong>{day.noteTitle}</strong> {day.noteText}
                        </div>
                      )}
                      {day.noteType === "warning" && (
                        <div className="p-2.5 rounded-lg bg-amber-100/90 text-amber-950 text-xs border border-amber-300">
                          <strong>{day.noteTitle}</strong> {day.noteText}
                        </div>
                      )}
                      {day.noteType === "himalayan" && (
                        <div className="p-3 rounded-lg bg-red-100/90 text-red-950 text-xs border border-red-300 space-y-1">
                          <strong>{day.noteTitle}</strong> {day.noteText}
                        </div>
                      )}
                      {day.noteType === "completion" && (
                        <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs border border-emerald-200">
                          <strong>{day.noteTitle}</strong> {day.noteText}
                        </div>
                      )}
                      {day.noteType === "normal" && (
                        <div className="p-2.5 rounded-lg bg-gray-100 text-gray-800 text-xs">
                          <strong>{day.noteTitle}</strong> {day.noteText}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
