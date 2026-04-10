/* =========================================================
   StorageFinder — Mock / Seed Listings Data
   ========================================================= */

const LISTINGS = [
  /* ── TEXAS ── */
  {
    id: 1, name: "Lone Star RV & Boat Storage", type: "both",
    address: "4820 Lakeway Blvd", city: "Austin", state: "TX", zip: "78734",
    phone: "(512) 555-0182", email: "info@lonestarrv.com", website: "www.lonestarrv.com",
    rating: 4.8, reviews: 142, featured: true, lat: 30.3765, lng: -97.9855,
    priceMonthly: 89, source: "featured",
    description: "Lone Star RV & Boat Storage offers secure, gated storage for all sizes of RVs and watercraft. Located minutes from Lake Travis, we provide easy access, 24/7 security monitoring, and flexible month-to-month leases.",
    amenities: ["24/7 Security","Gated Access","Covered Units","Electric Hookups","On-site Manager","Dump Station","Boat Wash Station","Wide Drive Aisles"],
    pricing: [
      { size: "RV – Small (up to 25 ft)", price: "$89/mo" },
      { size: "RV – Medium (25–35 ft)", price: "$109/mo" },
      { size: "RV – Large (35–45 ft)", price: "$139/mo" },
      { size: "Boat – Open (up to 20 ft)", price: "$69/mo" },
      { size: "Boat – Covered (up to 25 ft)", price: "$99/mo" },
    ],
    hours: "Mon–Sat 7am–7pm | Sun 9am–5pm", established: 2011, totalSpaces: 340,
  },
  {
    id: 8, name: "Gulf Coast Marina & Storage", type: "boat",
    address: "5100 Seawall Blvd", city: "Galveston", state: "TX", zip: "77550",
    phone: "(409) 555-0855", email: "marina@gulfcoaststorage.com", website: "www.gulfcoastmarina.com",
    rating: 4.2, reviews: 44, featured: false, lat: 29.2986, lng: -94.7977,
    priceMonthly: 72, source: "featured",
    description: "Gulf Coast Marina offers wet and dry boat storage along Galveston Bay. Easy water access, monthly or seasonal rates available.",
    amenities: ["Wet Slips","Dry Storage","Launch Ramp","Fuel Dock","Pump Out","Bait Shop"],
    pricing: [
      { size: "Open Dry Storage", price: "$72/mo" },
      { size: "Covered Dry Storage", price: "$98/mo" },
      { size: "Wet Slip (25 ft)", price: "$140/mo" },
      { size: "Wet Slip (35 ft)", price: "$185/mo" },
    ],
    hours: "Daily 5:30am–9pm", established: 2003, totalSpaces: 195,
  },

  /* ── FLORIDA ── */
  {
    id: 2, name: "Sunshine Coast Boat Storage", type: "boat",
    address: "201 Marina Parkway", city: "Clearwater", state: "FL", zip: "33755",
    phone: "(727) 555-0244", email: "dock@sunshinecoast.com", website: "www.sunshinecoaststorage.com",
    rating: 4.6, reviews: 89, featured: true, lat: 27.9659, lng: -82.8001,
    priceMonthly: 79, source: "featured",
    description: "Premier waterfront boat storage minutes from the Gulf. We offer indoor, covered, and open-air options with concierge launch service available.",
    amenities: ["Indoor Storage","Launch Service","Shrink Wrap","Security Cameras","Climate Control","Boat Wash","Fuel Station"],
    pricing: [
      { size: "Open Air (up to 18 ft)", price: "$79/mo" },
      { size: "Covered (up to 24 ft)", price: "$115/mo" },
      { size: "Indoor Dry Stack (up to 30 ft)", price: "$185/mo" },
    ],
    hours: "Daily 6am–9pm", established: 2007, totalSpaces: 210,
  },
  {
    id: 19, name: "Orlando Outdoor RV Storage", type: "rv",
    address: "3400 Silver Star Rd", city: "Orlando", state: "FL", zip: "32808",
    phone: "(407) 555-0191", email: "store@orlandorv.com", website: "www.orlandorvstorage.com",
    rating: 4.3, reviews: 57, featured: false, lat: 28.5383, lng: -81.4621,
    priceMonthly: 74, source: "featured",
    description: "Convenient, affordable RV storage near I-4. Paved pads, 24/7 keypad access, and flexible lease terms make us Central Florida's top choice.",
    amenities: ["Gated Access","Paved Pads","Security Lighting","Dump Station","24/7 Access"],
    pricing: [
      { size: "Up to 30 ft", price: "$74/mo" },
      { size: "30–40 ft", price: "$94/mo" },
      { size: "Over 40 ft", price: "$119/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 8am–5pm", established: 2014, totalSpaces: 220,
  },
  {
    id: 20, name: "Miami Beach Marine Storage", type: "boat",
    address: "1800 NE 79th Street Causeway", city: "Miami", state: "FL", zip: "33138",
    phone: "(305) 555-0204", email: "info@miamimarine.com", website: "www.miamimarine.com",
    rating: 4.7, reviews: 188, featured: false, lat: 25.8450, lng: -80.1550,
    priceMonthly: 145, source: "featured",
    description: "South Florida's premier dry stack and wet slip storage on Biscayne Bay. Valet launch service available 7 days a week.",
    amenities: ["Dry Stack","Wet Slips","Valet Launch","Fuel Dock","Security Cameras","Concierge Service"],
    pricing: [
      { size: "Dry Stack up to 25 ft", price: "$145/mo" },
      { size: "Dry Stack up to 35 ft", price: "$220/mo" },
      { size: "Wet Slip", price: "$275/mo" },
    ],
    hours: "Daily 6am–10pm", established: 2008, totalSpaces: 310,
  },

  /* ── ARIZONA ── */
  {
    id: 3, name: "High Desert RV Park & Storage", type: "rv",
    address: "9901 Desert Wind Rd", city: "Scottsdale", state: "AZ", zip: "85262",
    phone: "(480) 555-0371", email: "reserve@highdesertrv.com", website: "www.highdesertrv.com",
    rating: 4.4, reviews: 67, featured: false, lat: 33.7720, lng: -111.9202,
    priceMonthly: 75, source: "featured",
    description: "Serving the Scottsdale and Phoenix Valley communities since 2004, High Desert offers gated, paved storage with full hookup options for extended stays.",
    amenities: ["Gated Access","Paved Pads","Full Hookups","Security Lighting","Mail Service","Car Wash"],
    pricing: [
      { size: "Class A / Diesel Pusher", price: "$115/mo" },
      { size: "Class C / Travel Trailer", price: "$85/mo" },
      { size: "Small Trailer (under 25 ft)", price: "$75/mo" },
    ],
    hours: "Mon–Fri 8am–6pm | Sat 9am–4pm", established: 2004, totalSpaces: 175,
  },

  /* ── CALIFORNIA ── */
  {
    id: 4, name: "Pacific Crest Outdoor Storage", type: "both",
    address: "700 Harbor View Dr", city: "San Diego", state: "CA", zip: "92101",
    phone: "(619) 555-0498", email: "hello@pacificcreststorage.com", website: "www.pacificcreststorage.com",
    rating: 4.7, reviews: 203, featured: true, lat: 32.7157, lng: -117.1611,
    priceMonthly: 129, source: "featured",
    description: "San Diego's top-rated RV and boat storage facility. Conveniently located near Mission Bay with easy freeway access, 365-day gate access, and professional staff.",
    amenities: ["365-Day Access","Video Surveillance","Covered & Enclosed","Propane Fill","Dump Station","Boat Trailers OK","Climate Options"],
    pricing: [
      { size: "RV Up to 30 ft", price: "$129/mo" },
      { size: "RV 30–40 ft", price: "$159/mo" },
      { size: "RV Over 40 ft", price: "$189/mo" },
      { size: "Boat & Trailer", price: "$99/mo" },
    ],
    hours: "24/7 Gate Access | Office Mon–Sat 9am–5pm", established: 2015, totalSpaces: 520,
  },
  {
    id: 21, name: "Sacramento Valley RV Storage", type: "rv",
    address: "8800 Fruitridge Rd", city: "Sacramento", state: "CA", zip: "95826",
    phone: "(916) 555-0218", email: "info@sacvalleyrv.com", website: "www.sacvalleyrv.com",
    rating: 4.1, reviews: 38, featured: false, lat: 38.5449, lng: -121.4194,
    priceMonthly: 99, source: "featured",
    description: "Large-capacity RV storage near downtown Sacramento with 24/7 gate access and on-site management.",
    amenities: ["24/7 Access","Gated Access","On-site Manager","Dump Station","Electric Hookups"],
    pricing: [
      { size: "Up to 32 ft", price: "$99/mo" },
      { size: "32–42 ft", price: "$129/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 9am–5pm", established: 2012, totalSpaces: 280,
  },

  /* ── TENNESSEE ── */
  {
    id: 5, name: "Magnolia RV Storage Center", type: "rv",
    address: "3302 Magnolia Lane", city: "Nashville", state: "TN", zip: "37201",
    phone: "(615) 555-0512", email: "info@magnoliaRV.com", website: "www.magnoliarvstorage.com",
    rating: 4.3, reviews: 51, featured: false, lat: 36.1627, lng: -86.7816,
    priceMonthly: 69, source: "featured",
    description: "Affordable, clean RV storage in the heart of Middle Tennessee. Flexible lease terms and no long-term commitment required.",
    amenities: ["Gated Access","Gravel Pads","Security Cameras","Dump Station","Monthly/Annual Options"],
    pricing: [
      { size: "Small (up to 25 ft)", price: "$69/mo" },
      { size: "Large (25–40 ft)", price: "$89/mo" },
    ],
    hours: "Mon–Fri 9am–5pm", established: 2018, totalSpaces: 95,
  },

  /* ── ILLINOIS ── */
  {
    id: 6, name: "Great Lakes Boat & RV", type: "both",
    address: "8500 Lakeshore Ave", city: "Chicago", state: "IL", zip: "60613",
    phone: "(312) 555-0641", email: "storage@greatlakesboatrv.com", website: "www.greatlakesboatrv.com",
    rating: 4.5, reviews: 118, featured: false, lat: 41.8781, lng: -87.6298,
    priceMonthly: 95, source: "featured",
    description: "Serving Chicago-area boaters and RVers with heated indoor and outdoor storage solutions. Winter storage packages available.",
    amenities: ["Heated Indoor","Winter Storage","Boat Shrink Wrap","Security Patrol","Fork Lift Launch","Flexible Lease"],
    pricing: [
      { size: "RV – Outdoor", price: "$95/mo" },
      { size: "RV – Indoor Heated", price: "$175/mo" },
      { size: "Boat – Outdoor", price: "$85/mo" },
      { size: "Boat – Indoor Heated", price: "$165/mo" },
    ],
    hours: "Mon–Sat 8am–6pm", established: 2009, totalSpaces: 280,
  },
  {
    id: 22, name: "Fox Lake Marine & Storage", type: "boat",
    address: "820 Nippersink Rd", city: "Fox Lake", state: "IL", zip: "60020",
    phone: "(847) 555-0139", email: "info@foxlakemarine.com", website: "www.foxlakemarine.com",
    rating: 4.6, reviews: 92, featured: false, lat: 42.3989, lng: -88.1859,
    priceMonthly: 79, source: "featured",
    description: "Located on the Chain O'Lakes, Fox Lake Marine & Storage is the Chicagoland boater's go-to for seasonal and year-round storage. Shrink wrap, launch, and on-water service available.",
    amenities: ["Boat Launch","Shrink Wrap","Covered Slips","Winter Storage","Fuel Dock","On-site Mechanic","Security Cameras"],
    pricing: [
      { size: "Open Outdoor (up to 20 ft)", price: "$79/mo" },
      { size: "Covered (up to 26 ft)", price: "$110/mo" },
      { size: "Indoor Heated (up to 30 ft)", price: "$160/mo" },
    ],
    hours: "Daily 7am–7pm (Apr–Oct) | Mon–Sat 8am–5pm (Nov–Mar)", established: 2001, totalSpaces: 195,
  },
  {
    id: 23, name: "Waukegan Harbor Boat Storage", type: "boat",
    address: "55 S Harbor Pl", city: "Waukegan", state: "IL", zip: "60085",
    phone: "(847) 555-0245", email: "dock@waukeganharb.com", website: "www.waukeganharb.com",
    rating: 4.4, reviews: 74, featured: false, lat: 42.3601, lng: -87.8297,
    priceMonthly: 95, source: "featured",
    description: "Lake Michigan access from Waukegan Harbor. Indoor and outdoor dry storage plus wet slips available. Winter shrink-wrap and service on-site.",
    amenities: ["Lake Michigan Access","Wet Slips","Dry Storage","Shrink Wrap","Boat Lift","Fuel","Pump Out"],
    pricing: [
      { size: "Outdoor Dry Storage", price: "$95/mo" },
      { size: "Indoor Dry Storage", price: "$155/mo" },
      { size: "Wet Slip (seasonal)", price: "$2,200/season" },
    ],
    hours: "Daily 6am–9pm", established: 1998, totalSpaces: 160,
  },
  {
    id: 24, name: "Midwest RV Vault", type: "rv",
    address: "1900 Meacham Rd", city: "Schaumburg", state: "IL", zip: "60193",
    phone: "(847) 555-0312", email: "store@midwestrv.com", website: "www.midwestrvvault.com",
    rating: 4.5, reviews: 61, featured: false, lat: 42.0334, lng: -88.0834,
    priceMonthly: 109, source: "featured",
    description: "Premium enclosed and covered RV storage in the northwest suburbs of Chicago. Climate-controlled units available for your most prized motorhome.",
    amenities: ["Enclosed Units","Climate Control","24/7 Access","Security Cameras","Gated","Electric Hookups","Wide Aisles"],
    pricing: [
      { size: "Outdoor (any size)", price: "$109/mo" },
      { size: "Covered Carport", price: "$145/mo" },
      { size: "Enclosed Climate", price: "$235/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Sat 9am–5pm", established: 2017, totalSpaces: 145,
  },
  {
    id: 25, name: "Joliet River Outdoor Storage", type: "both",
    address: "2211 W Jefferson St", city: "Joliet", state: "IL", zip: "60435",
    phone: "(815) 555-0427", email: "hello@jolietoutdoor.com", website: "www.jolietstorage.com",
    rating: 4.2, reviews: 39, featured: false, lat: 41.5250, lng: -88.0817,
    priceMonthly: 85, source: "featured",
    description: "Affordable RV and boat storage near the Des Plaines River. Easy access off I-80, paved lots, and friendly on-site staff.",
    amenities: ["Gated Access","Paved Lots","Security Cameras","Dump Station","Flexible Lease"],
    pricing: [
      { size: "RV up to 35 ft", price: "$85/mo" },
      { size: "RV over 35 ft", price: "$105/mo" },
      { size: "Boat & Trailer", price: "$75/mo" },
    ],
    hours: "Mon–Sat 8am–5pm", established: 2013, totalSpaces: 120,
  },
  {
    id: 26, name: "Peoria RV & Marine Center", type: "both",
    address: "4505 N University St", city: "Peoria", state: "IL", zip: "61614",
    phone: "(309) 555-0518", email: "info@peoriarv.com", website: "www.peoriarvmarine.com",
    rating: 4.3, reviews: 48, featured: false, lat: 40.7506, lng: -89.5840,
    priceMonthly: 72, source: "featured",
    description: "Central Illinois' leading RV and boat storage, serving the Illinois River boating community and RV travelers since 2006.",
    amenities: ["Gated Access","Security Lighting","Boat Launch Nearby","Dump Station","Electric Available","On-site Manager"],
    pricing: [
      { size: "Small RV / Trailer", price: "$72/mo" },
      { size: "Large RV", price: "$92/mo" },
      { size: "Boat & Trailer", price: "$65/mo" },
    ],
    hours: "Mon–Fri 8am–6pm | Sat 9am–3pm", established: 2006, totalSpaces: 185,
  },
  {
    id: 27, name: "Lake County Outdoor Storage", type: "both",
    address: "22100 N Milwaukee Ave", city: "Libertyville", state: "IL", zip: "60048",
    phone: "(847) 555-0629", email: "store@lakecountyoutdoor.com", website: "www.lakecountyoutdoor.com",
    rating: 4.4, reviews: 55, featured: false, lat: 42.2836, lng: -87.9531,
    priceMonthly: 99, source: "featured",
    description: "Spacious, secure outdoor storage for RVs, boats, and trailers in Lake County. Month-to-month and annual options with no long-term lock-in.",
    amenities: ["Gated Access","Security Cameras","Wide Drive Lanes","Dump Station","Monthly/Annual Lease","Boat Trailers OK"],
    pricing: [
      { size: "RV or Boat up to 30 ft", price: "$99/mo" },
      { size: "Over 30 ft", price: "$125/mo" },
    ],
    hours: "Mon–Sat 8am–6pm | Sun 10am–3pm", established: 2010, totalSpaces: 210,
  },
  {
    id: 28, name: "Chicago Southland RV & Boat", type: "both",
    address: "13800 S Cicero Ave", city: "Crestwood", state: "IL", zip: "60418",
    phone: "(708) 555-0733", email: "info@southlandstorage.com", website: "www.southlandrvstorage.com",
    rating: 4.1, reviews: 33, featured: false, lat: 41.6564, lng: -87.7356,
    priceMonthly: 88, source: "featured",
    description: "Serving the south suburbs of Chicago with large-vehicle outdoor storage. Easy I-294 and I-57 access.",
    amenities: ["Gated Access","Security Cameras","Paved Surface","Flexible Terms","Dump Station"],
    pricing: [
      { size: "Any size RV", price: "$88/mo" },
      { size: "Boat & Trailer", price: "$75/mo" },
    ],
    hours: "Mon–Fri 8am–5pm | Sat 9am–2pm", established: 2015, totalSpaces: 150,
  },

  /* ── COLORADO ── */
  {
    id: 7, name: "Rocky Mountain RV Vault", type: "rv",
    address: "12 Summit Ridge Pkwy", city: "Denver", state: "CO", zip: "80202",
    phone: "(303) 555-0733", email: "hello@rmrvvault.com", website: "www.rmrvvault.com",
    rating: 4.6, reviews: 79, featured: false, lat: 39.7392, lng: -104.9903,
    priceMonthly: 99, source: "featured",
    description: "Colorado's premier RV storage facility with heated units built for Rocky Mountain winters. Convenient I-70 access for ski-country adventures.",
    amenities: ["Heated Units","24/7 Access","Keypad Entry","Security Cameras","Electricity Available","Wide Aisles"],
    pricing: [
      { size: "Outdoor (any size)", price: "$99/mo" },
      { size: "Covered Carport", price: "$135/mo" },
      { size: "Enclosed Heated", price: "$225/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 9am–5pm", established: 2016, totalSpaces: 130,
  },

  /* ── MICHIGAN ── */
  {
    id: 29, name: "Great Lakes RV & Boat Storage", type: "both",
    address: "5440 Dixie Hwy", city: "Waterford", state: "MI", zip: "48329",
    phone: "(248) 555-0149", email: "store@greatlakesstorage.com", website: "www.greatlakesstorage.com",
    rating: 4.5, reviews: 86, featured: false, lat: 42.6945, lng: -83.4044,
    priceMonthly: 89, source: "featured",
    description: "Southeast Michigan's most trusted RV and boat storage near the Orion and Pontiac lakes region. Covered and enclosed units available.",
    amenities: ["Gated Access","Covered Units","Electric Hookups","Security Cameras","Boat Trailers OK","Dump Station"],
    pricing: [
      { size: "Outdoor", price: "$89/mo" },
      { size: "Covered", price: "$125/mo" },
      { size: "Enclosed", price: "$195/mo" },
    ],
    hours: "Mon–Sat 8am–6pm", established: 2005, totalSpaces: 230,
  },
  {
    id: 30, name: "Traverse City Marine Storage", type: "boat",
    address: "1280 S Airport Rd", city: "Traverse City", state: "MI", zip: "49686",
    phone: "(231) 555-0261", email: "marina@tcmarine.com", website: "www.traversecitymarine.com",
    rating: 4.6, reviews: 103, featured: false, lat: 44.7497, lng: -85.6006,
    priceMonthly: 95, source: "featured",
    description: "Northern Michigan's premier boat storage on Grand Traverse Bay. Indoor heated and outdoor options with spring launch service.",
    amenities: ["Indoor Heated","Launch Service","Shrink Wrap","Covered Slips","Security Cameras","On-site Service"],
    pricing: [
      { size: "Outdoor Dry", price: "$95/mo" },
      { size: "Indoor Heated", price: "$175/mo" },
    ],
    hours: "Daily 7am–7pm (May–Oct) | Mon–Sat 8am–4pm (Nov–Apr)", established: 2003, totalSpaces: 180,
  },

  /* ── WASHINGTON ── */
  {
    id: 31, name: "Puget Sound RV & Boat Storage", type: "both",
    address: "3300 Marine View Dr", city: "Tacoma", state: "WA", zip: "98422",
    phone: "(253) 555-0338", email: "store@pugetsoundstorage.com", website: "www.pugetsoundstorage.com",
    rating: 4.5, reviews: 97, featured: false, lat: 47.2745, lng: -122.4260,
    priceMonthly: 119, source: "featured",
    description: "Western Washington's go-to for RV and boat storage with direct Puget Sound access nearby. Indoor, covered, and open-air spaces.",
    amenities: ["Indoor Storage","Covered Units","Security Cameras","Gated Access","Boat Trailers OK","Electric Hookups"],
    pricing: [
      { size: "Outdoor", price: "$119/mo" },
      { size: "Covered", price: "$155/mo" },
      { size: "Indoor", price: "$235/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 9am–5pm", established: 2011, totalSpaces: 290,
  },
  {
    id: 32, name: "Lake Union Boat Storage", type: "boat",
    address: "1900 Westlake Ave N", city: "Seattle", state: "WA", zip: "98109",
    phone: "(206) 555-0415", email: "moor@lakeunion.com", website: "www.lakeunionboatstorage.com",
    rating: 4.7, reviews: 132, featured: false, lat: 47.6338, lng: -122.3406,
    priceMonthly: 175, source: "featured",
    description: "Premium boat moorage and dry storage on Lake Union in the heart of Seattle. Concierge service, fuel dock, and on-site yacht service available.",
    amenities: ["Wet Moorage","Dry Stack","Fuel Dock","Concierge","Security","On-site Yacht Service","Pump Out"],
    pricing: [
      { size: "Dry Stack up to 24 ft", price: "$175/mo" },
      { size: "Wet Slip 30 ft", price: "$310/mo" },
      { size: "Wet Slip 40 ft", price: "$420/mo" },
    ],
    hours: "Daily 6am–10pm", established: 1996, totalSpaces: 155,
  },

  /* ── OREGON ── */
  {
    id: 33, name: "Columbia River Marine Storage", type: "boat",
    address: "2100 N Marine Dr", city: "Portland", state: "OR", zip: "97217",
    phone: "(503) 555-0519", email: "info@columbiarivermarine.com", website: "www.columbiarivermarine.com",
    rating: 4.4, reviews: 67, featured: false, lat: 45.5975, lng: -122.7244,
    priceMonthly: 105, source: "featured",
    description: "Portland's best boat storage on the Columbia River. Dry stack, covered, and open-air available year-round.",
    amenities: ["Dry Stack","Covered","Launch Ramp","Fuel","Security Cameras","Wide Access"],
    pricing: [
      { size: "Open Air", price: "$105/mo" },
      { size: "Covered", price: "$145/mo" },
      { size: "Indoor Dry Stack", price: "$215/mo" },
    ],
    hours: "Daily 6am–9pm", established: 2008, totalSpaces: 175,
  },

  /* ── NEW YORK ── */
  {
    id: 34, name: "Hudson Valley RV Storage", type: "rv",
    address: "4800 Albany Post Rd", city: "Hyde Park", state: "NY", zip: "12538",
    phone: "(845) 555-0621", email: "store@hudsonvalleyrv.com", website: "www.hudsonvalleyrvstorage.com",
    rating: 4.3, reviews: 52, featured: false, lat: 41.7870, lng: -73.9271,
    priceMonthly: 115, source: "featured",
    description: "Secure outdoor and covered RV storage in the scenic Hudson Valley, serving Dutchess, Ulster, and Columbia counties.",
    amenities: ["Gated Access","Covered Units","Security Cameras","Dump Station","Electric Hookups"],
    pricing: [
      { size: "Outdoor", price: "$115/mo" },
      { size: "Covered", price: "$155/mo" },
    ],
    hours: "Mon–Sat 8am–6pm", established: 2009, totalSpaces: 110,
  },
  {
    id: 35, name: "Long Island Boat Storage", type: "boat",
    address: "900 Montauk Hwy", city: "Bay Shore", state: "NY", zip: "11706",
    phone: "(631) 555-0718", email: "dock@longislandboat.com", website: "www.longislandboatstorage.com",
    rating: 4.5, reviews: 81, featured: false, lat: 40.7282, lng: -73.2469,
    priceMonthly: 135, source: "featured",
    description: "Great South Bay boat storage with easy Water access. Wet slips, dry storage, and full-service marina.",
    amenities: ["Wet Slips","Dry Storage","Fuel","Launch Ramp","Shrink Wrap","On-site Service","Security"],
    pricing: [
      { size: "Outdoor Dry", price: "$135/mo" },
      { size: "Wet Slip (30 ft)", price: "$285/mo" },
    ],
    hours: "Daily 7am–8pm", established: 2000, totalSpaces: 200,
  },

  /* ── NORTH CAROLINA ── */
  {
    id: 36, name: "Carolina RV & Boat Storage", type: "both",
    address: "2550 Capital Blvd", city: "Raleigh", state: "NC", zip: "27604",
    phone: "(919) 555-0830", email: "info@carolinarvstorage.com", website: "www.carolinarvstorage.com",
    rating: 4.4, reviews: 63, featured: false, lat: 35.8322, lng: -78.6415,
    priceMonthly: 79, source: "featured",
    description: "Triangle area's favorite RV and boat storage with great access from I-440 and I-540.",
    amenities: ["Gated Access","Security Cameras","Paved Lots","Dump Station","Flexible Lease"],
    pricing: [
      { size: "RV any size", price: "$79/mo" },
      { size: "Boat & Trailer", price: "$69/mo" },
    ],
    hours: "Mon–Sat 8am–6pm", established: 2014, totalSpaces: 175,
  },

  /* ── GEORGIA ── */
  {
    id: 37, name: "Peach State RV Storage", type: "rv",
    address: "3600 Hwy 78 NW", city: "Snellville", state: "GA", zip: "30039",
    phone: "(770) 555-0943", email: "store@peachstaterv.com", website: "www.peachstatervstorage.com",
    rating: 4.3, reviews: 44, featured: false, lat: 33.8573, lng: -84.0199,
    priceMonthly: 74, source: "featured",
    description: "East Metro Atlanta RV storage with paved pads, 24/7 access, and no long-term commitment required.",
    amenities: ["24/7 Access","Paved Pads","Gated","Security Cameras","Dump Station"],
    pricing: [
      { size: "Up to 35 ft", price: "$74/mo" },
      { size: "Over 35 ft", price: "$94/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 9am–5pm", established: 2016, totalSpaces: 130,
  },
  {
    id: 38, name: "Lake Lanier Marine Storage", type: "boat",
    address: "7000 Lanier Islands Pkwy", city: "Buford", state: "GA", zip: "30518",
    phone: "(770) 555-0055", email: "marina@laniermarine.com", website: "www.laniermarine.com",
    rating: 4.6, reviews: 95, featured: false, lat: 34.1276, lng: -84.0588,
    priceMonthly: 89, source: "featured",
    description: "Lake Lanier's best boat storage with direct lake access. Covered slips, dry storage, and fuel available on-site.",
    amenities: ["Lake Access","Covered Slips","Dry Storage","Fuel Dock","Launch Ramp","Security Cameras"],
    pricing: [
      { size: "Open Dry Storage", price: "$89/mo" },
      { size: "Covered Slip", price: "$145/mo" },
    ],
    hours: "Daily 7am–8pm", established: 2005, totalSpaces: 210,
  },

  /* ── OHIO ── */
  {
    id: 39, name: "Lake Erie RV & Boat Storage", type: "both",
    address: "1800 Lakeshore Blvd", city: "Euclid", state: "OH", zip: "44119",
    phone: "(216) 555-0162", email: "info@lakeeriestorage.com", website: "www.lakeeriestorage.com",
    rating: 4.2, reviews: 47, featured: false, lat: 41.5931, lng: -81.5180,
    priceMonthly: 85, source: "featured",
    description: "Northeast Ohio storage for RVs and boats with easy Lake Erie access. Heated indoor units available for year-round protection.",
    amenities: ["Heated Indoor","Outdoor","Gated Access","Security Cameras","Dump Station","Flexible Lease"],
    pricing: [
      { size: "Outdoor", price: "$85/mo" },
      { size: "Indoor Heated", price: "$155/mo" },
    ],
    hours: "Mon–Sat 8am–6pm", established: 2007, totalSpaces: 165,
  },

  /* ── VIRGINIA ── */
  {
    id: 40, name: "Chesapeake Bay Boat Storage", type: "boat",
    address: "3100 Shore Dr", city: "Virginia Beach", state: "VA", zip: "23451",
    phone: "(757) 555-0277", email: "dock@chesapeakestorage.com", website: "www.chesapeakeboatstorage.com",
    rating: 4.5, reviews: 72, featured: false, lat: 36.8986, lng: -76.0176,
    priceMonthly: 109, source: "featured",
    description: "Virginia Beach's premier boat storage with Chesapeake Bay access. Dry stack, covered, and wet slip options available.",
    amenities: ["Wet Slips","Dry Stack","Fuel","Launch Ramp","Security","Pump Out","On-site Service"],
    pricing: [
      { size: "Outdoor Dry", price: "$109/mo" },
      { size: "Dry Stack", price: "$175/mo" },
      { size: "Wet Slip", price: "$250/mo" },
    ],
    hours: "Daily 6am–9pm", established: 2002, totalSpaces: 220,
  },

  /* ── MINNESOTA ── */
  {
    id: 41, name: "Land of 10,000 Lakes Storage", type: "both",
    address: "5500 Cedar Lake Rd", city: "Minneapolis", state: "MN", zip: "55416",
    phone: "(612) 555-0389", email: "info@mnlakestorage.com", website: "www.mnlakestorage.com",
    rating: 4.4, reviews: 61, featured: false, lat: 44.9778, lng: -93.3190,
    priceMonthly: 92, source: "featured",
    description: "Twin Cities area RV and boat storage with heated indoor units for harsh Minnesota winters. Year-round access available.",
    amenities: ["Heated Indoor","Gated Access","24/7 Access","Security Cameras","Dump Station","Electric Hookups"],
    pricing: [
      { size: "Outdoor", price: "$92/mo" },
      { size: "Covered", price: "$125/mo" },
      { size: "Heated Indoor", price: "$195/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Sat 9am–5pm", established: 2010, totalSpaces: 210,
  },

  /* ── WISCONSIN ── */
  {
    id: 42, name: "Wisconsin Dells RV Storage", type: "rv",
    address: "1100 Wisconsin Dells Pkwy", city: "Wisconsin Dells", state: "WI", zip: "53965",
    phone: "(608) 555-0495", email: "store@dellsrvstorage.com", website: "www.dellsrvstorage.com",
    rating: 4.3, reviews: 38, featured: false, lat: 43.6274, lng: -89.7707,
    priceMonthly: 79, source: "featured",
    description: "Conveniently located RV storage near the Wisconsin Dells waterpark area. Easy I-90/94 access.",
    amenities: ["Gated Access","Paved Pads","Security Cameras","Dump Station","Flexible Lease"],
    pricing: [
      { size: "Up to 35 ft", price: "$79/mo" },
      { size: "Over 35 ft", price: "$99/mo" },
    ],
    hours: "Mon–Sat 8am–5pm", established: 2015, totalSpaces: 100,
  },

  /* ── INDIANA ── */
  {
    id: 43, name: "Lake Wawasee Boat & RV", type: "both",
    address: "6350 E Wooster Lake Rd", city: "Syracuse", state: "IN", zip: "46567",
    phone: "(574) 555-0551", email: "store@wawaseestore.com", website: "www.wawaseestorage.com",
    rating: 4.4, reviews: 53, featured: false, lat: 41.4236, lng: -85.7422,
    priceMonthly: 82, source: "featured",
    description: "Northern Indiana's premier boat and RV storage on Indiana's largest natural lake. Seasonal and year-round options.",
    amenities: ["Lake Access","Covered Units","Gated","Security Cameras","Dump Station","Boat Trailers OK"],
    pricing: [
      { size: "RV any size", price: "$82/mo" },
      { size: "Boat & Trailer", price: "$72/mo" },
    ],
    hours: "Mon–Sat 8am–6pm | Sun 10am–3pm", established: 2008, totalSpaces: 140,
  },

  /* ── MISSOURI ── */
  {
    id: 44, name: "Lake of the Ozarks Marine Storage", type: "boat",
    address: "4200 Osage Beach Pkwy", city: "Osage Beach", state: "MO", zip: "65065",
    phone: "(573) 555-0661", email: "marina@ozarksmarine.com", website: "www.ozarksmarinestorage.com",
    rating: 4.7, reviews: 115, featured: false, lat: 38.1487, lng: -92.6363,
    priceMonthly: 88, source: "featured",
    description: "Lake of the Ozarks' most popular boat storage. Direct lake access, valet launch, and full-service marina.",
    amenities: ["Lake Access","Valet Launch","Covered Slips","Fuel Dock","Pump Out","Security","On-site Service"],
    pricing: [
      { size: "Outdoor Dry Storage", price: "$88/mo" },
      { size: "Covered Slip", price: "$135/mo" },
    ],
    hours: "Daily 6am–9pm (May–Sep) | Mon–Sat 8am–5pm (Oct–Apr)", established: 1999, totalSpaces: 245,
  },

  /* ── NEVADA ── */
  {
    id: 45, name: "Las Vegas RV Resort Storage", type: "rv",
    address: "8200 Boulder Hwy", city: "Las Vegas", state: "NV", zip: "89123",
    phone: "(702) 555-0772", email: "store@lvrvstorage.com", website: "www.lasvegasrvstorage.com",
    rating: 4.2, reviews: 41, featured: false, lat: 36.0469, lng: -115.0717,
    priceMonthly: 89, source: "featured",
    description: "Secure climate-adapted RV storage near Las Vegas. Shaded covered units available to protect your investment from desert sun.",
    amenities: ["Covered Units","24/7 Access","Gated","Security Cameras","Dump Station","Electric Hookups"],
    pricing: [
      { size: "Open Outdoor", price: "$89/mo" },
      { size: "Covered Carport", price: "$125/mo" },
    ],
    hours: "24/7 Gate | Office Mon–Fri 9am–5pm", established: 2013, totalSpaces: 160,
  },
];

/* =========================================================
   Helpers
   ========================================================= */
function getListingById(id) {
  return LISTINGS.find(l => String(l.id) === String(id));
}

function filterListings({ query = '', type = 'all', state = '', minPrice = 0, maxPrice = 9999, amenities = [] }) {
  return LISTINGS.filter(l => {
    const q = query.toLowerCase();
    const matchQuery = !q ||
      l.name.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q) ||
      l.state.toLowerCase().includes(q) ||
      (l.zip && l.zip.includes(q));
    const matchType = type === 'all' || l.type === type || l.type === 'both';
    const matchState = !state || l.state === state;
    const matchPrice = l.priceMonthly === 0 || (l.priceMonthly >= minPrice && l.priceMonthly <= maxPrice);
    const matchAmenities = amenities.length === 0 || amenities.every(a => l.amenities.includes(a));
    return matchQuery && matchType && matchState && matchPrice && matchAmenities;
  });
}

function renderStars(rating) {
  if (!rating) return '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

function typeLabel(type) {
  if (type === 'rv')   return '<span class="badge badge-rv">RV</span>';
  if (type === 'boat') return '<span class="badge badge-boat">Boat</span>';
  return '<span class="badge badge-both">RV &amp; Boat</span>';
}

function sourceLabel(source) {
  if (source === 'osm')    return '<span class="badge badge-osm" title="Data from OpenStreetMap">🗺 Live</span>';
  if (source === 'google') return '<span class="badge badge-google" title="Data from Google Places">📍 Google</span>';
  return '';
}

/* Card HTML builder — handles curated, OSM, and Google listings */
function buildCard(listing) {
  const amenityTags = (listing.amenities || []).slice(0, 3).map(a => `<span class="amenity-tag">${a}</span>`).join('');
  const featured = listing.featured ? '<span class="badge badge-featured">Featured</span>' : '';
  const srcBadge = sourceLabel(listing.source);

  const priceStr = listing.priceMonthly
    ? `From $${listing.priceMonthly} <span>/mo</span>`
    : '<span style="color:var(--muted);">Contact for pricing</span>';

  const starsHtml = listing.rating
    ? `<div class="stars-row"><span class="stars">${renderStars(listing.rating)}</span><span class="review-count">${listing.rating} (${listing.reviews} reviews)</span></div>`
    : '<div class="stars-row" style="color:var(--muted);font-size:13px;">No reviews yet</div>';

  const locationStr = [listing.city, listing.state].filter(Boolean).join(', ') || 'Location unavailable';

  // Contact info row — shown for live (OSM/Google) results that have phone or website
  const isLive = listing.source === 'osm' || listing.source === 'google';
  const phoneHtml   = listing.phone   ? `<a href="tel:${listing.phone}" style="color:var(--primary);font-size:13px;font-weight:600;">📞 ${listing.phone}</a>` : '';
  const websiteHtml = listing.website ? `<a href="https://${listing.website.replace(/^https?:\/\//,'')}" target="_blank" style="color:var(--primary);font-size:13px;font-weight:600;">🌐 Website</a>` : '';
  const contactRow  = isLive && (phoneHtml || websiteHtml)
    ? `<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:6px;margin-bottom:4px;">${phoneHtml}${websiteHtml}</div>`
    : '';

  const detailLink = isLive
    ? (listing.website
        ? `<a href="https://${listing.website.replace(/^https?:\/\//,'')}" target="_blank" class="btn btn-primary btn-sm">Visit Website</a>`
        : listing.phone
          ? `<a href="tel:${listing.phone}" class="btn btn-primary btn-sm">📞 Call</a>`
          : '<span class="btn btn-outline btn-sm" style="cursor:default;opacity:.6;">No contact info</span>')
    : `<a href="listing.html?id=${listing.id}" class="btn btn-primary btn-sm">View Details</a>`;

  // Image / logo resolution:
  //   1. Google Places photo  (real photo of the facility)
  //   2. Clearbit logo        (brand logo fetched from their website domain)
  //   3. Emoji placeholder    (fallback when nothing else is available)
  const emoji = listing.type === 'boat' ? '⛵' : listing.type === 'rv' ? '🚐' : '🏕️';
  const websiteDomain = listing.website
    ? listing.website.replace(/^https?:\/\//, '').split('/')[0].split('?')[0]
    : '';

  let cardImgInner;
  if (listing.photo) {
    // Real facility photo from Google Places
    cardImgInner = `<img src="${listing.photo}" alt="${listing.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`;
  } else if (websiteDomain) {
    // Brand logo via Clearbit — shows centred on the gradient background
    cardImgInner = `<div class="gallery-placeholder"><img src="https://logo.clearbit.com/${websiteDomain}" alt="${listing.name} logo" loading="lazy" style="max-width:140px;max-height:90px;object-fit:contain;border-radius:8px;padding:8px;background:rgba(255,255,255,0.9);box-shadow:0 2px 10px rgba(0,0,0,.12);" onerror="this.outerHTML='<span style=&quot;font-size:52px;&quot;>${emoji}</span>'"></div>`;
  } else {
    cardImgInner = `<div class="gallery-placeholder">${emoji}</div>`;
  }

  return `
    <article class="listing-card">
      <div class="card-img">
        ${cardImgInner}
        <div class="card-badges">
          ${typeLabel(listing.type)}
          ${featured}
          ${srcBadge}
        </div>
      </div>
      <div class="card-body">
        <h3>${listing.name}</h3>
        <div class="location">📍 ${locationStr}</div>
        ${starsHtml}
        ${contactRow}
        <div class="amenities">${amenityTags || '<span class="amenity-tag" style="color:var(--muted);">Community listing</span>'}</div>
      </div>
      <div class="card-footer">
        <div class="card-price">${priceStr}</div>
        ${detailLink}
      </div>
    </article>
  `;
}

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];
