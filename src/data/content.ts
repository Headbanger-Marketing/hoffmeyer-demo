// Hoffmeyer Plumbing & Heating content: service pillars, locations, the three-generation
// lineage, dealer brands, and FAQs. Honest-signals only: no fabricated reviews, ratings,
// or licence numbers (none exist in any source). Em-dash-free house copy. TODO items need
// client (Jayden's) confirmation.

export interface ServiceScope {
  slug: string;
  name: string;
  nav: string;
  short: string;
  h2: string;
  lede: string;
  body: string[];
  bullets: string[];
  brands?: string[];
  image: string;
  imageAlt: string;
  icon: string;
  flagship?: boolean;
}

export const pillars: ServiceScope[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    nav: 'Plumbing',
    short: 'Drain and sewer cleaning, water heaters, repipes, and fixtures for homes and businesses across Huron County.',
    h2: 'Plumbing that keeps Goderich and Huron County running',
    lede:
      'Plumbing is the name on our door and the trade we have built since 1958. From a backed-up drain at midnight to a full new-construction rough-in, our licensed plumbers handle residential and commercial plumbing across Goderich and Huron County.',
    body: [
      'Sewer and drain cleaning is where a lot of plumbing calls start, and we bring the right equipment to them: high-pressure water jetting to clear stubborn blockages and video camera inspection to find the exact problem underground instead of guessing. Whether it is a slow drain, a recurring backup, or a collapsed line, we diagnose it properly before we dig.',
      'On the bigger jobs we repair and replace sewer lines and water mains, repipe water supply lines, and handle the full plumbing scope on new construction and renovations. No job is too big or too small is how we have always put it, and three generations in one shop is how we have kept it.',
      'We also service and replace water heaters and fixtures, from a leaking faucet to a full bathroom or kitchen rough-in. The same crew that clears your drain can repipe your home, replace your water heater, and stand behind all of it.',
    ],
    bullets: [
      'Sewer and drain cleaning',
      'High-pressure water jetting',
      'Video camera pipe inspection',
      'Sewer line and water main repair and replacement',
      'Water supply line repipe',
      'Fixture and faucet replacement',
      'New construction and renovation plumbing',
    ],
    brands: ['Bradford White', 'A.O. Smith', 'Rheem', 'Giant', 'Moen', 'Delta', 'TOTO', 'American Standard', 'Blanco', 'Elkay', 'Kindred', 'Liberty Pumps', 'Watts', 'Zurn'],
    image: '/assets/img/svc-plumbing.jpg',
    imageAlt: 'Plumber clearing a drain line with professional equipment in a Huron County home',
    icon: 'droplet',
    flagship: true,
  },
  {
    slug: 'heating',
    name: 'Heating',
    nav: 'Heating',
    short: 'Furnaces, boilers, heat pumps, and gas-certified service for natural gas and propane.',
    h2: 'Furnaces, boilers, and heat pumps, gas-certified for NG and LP',
    lede:
      'When the heat goes out in a Huron County winter, it cannot wait. We install, service, and repair furnaces, boilers, and heat pumps, and we are gas-certified for both natural gas and liquid propane so the fuel side is handled by the same crew.',
    body: [
      'Furnace repair and replacement is the core of our heating work, with 24-hour emergency response when a no-heat call comes in. We carry and service trusted equipment and size the replacement to the home, not to a one-size-fits-all number.',
      'For hydronic and boiler heat we install and service Weil-McLain, Slant/Fin, and BAXI equipment, and we build and maintain the in-floor and radiant systems that keep floors warm and bills lower. Heat pumps, air handlers, humidifiers, and heat-recovery ventilators round out the heating side of the shop.',
    ],
    bullets: [
      'Furnace installation, repair, and 24-hour response',
      'Boilers (Weil-McLain, Slant/Fin, BAXI)',
      'Heat pumps',
      'Air handlers, unit heaters, and make-up air units',
      'Humidifiers, dehumidifiers, and HRVs',
      'Gas-certified for natural gas and liquid propane',
    ],
    brands: ['Weil-McLain', 'Slant/Fin', 'BAXI', 'KeepRite', 'Carrier', 'Honeywell', 'Tekmar', 'Lifebreath', 'VanEE'],
    image: '/assets/img/svc-heating.jpg',
    imageAlt: 'HVAC technician servicing a residential furnace in a Huron County home',
    icon: 'flame',
  },
  {
    slug: 'cooling',
    name: 'Cooling',
    nav: 'Cooling',
    short: 'Central air, ductless mini-splits, and AC repair to keep Huron County cool.',
    h2: 'Air conditioning that holds up in a Huron County summer',
    lede:
      'Central air, ductless mini-splits, and packaged systems, installed and serviced by the same crew that does your heating. We size cooling to the home and the ductwork, and we repair what you have before pushing a replacement.',
    body: [
      'A central air system that is short-cycled or undersized will run constantly and never quite cool the house. We size the unit to the actual load and the ductwork, and we install ductless mini-splits for additions, garages, and rooms the ducts never reached.',
      'Cooling repair is the other half of the work. If your AC has stopped cooling, is freezing up, or is making a noise it should not, we diagnose it honestly and tell you whether it is a service call or a replacement.',
    ],
    bullets: [
      'Central air conditioning installation and repair',
      'Ductless mini-split and zone systems',
      'Packaged central AC',
      'Heat pumps (heating and cooling)',
      'AC repair and refrigeration service',
    ],
    brands: ['KeepRite', 'Carrier'],
    image: '/assets/img/svc-cooling.jpg',
    imageAlt: 'Central air conditioning condenser unit installed outside a Huron County home',
    icon: 'snowflake',
  },
  {
    slug: 'hydronic-radiant',
    name: 'Hydronic & Radiant Heating',
    nav: 'Hydronic & Radiant',
    short: 'In-floor and radiant hydronic heating for even, efficient warmth underfoot.',
    h2: 'In-floor warmth, from the ground up',
    lede:
      'Radiant and in-floor hydronic heating is one of the most comfortable and efficient ways to heat a home, and it is a real specialty of the shop. We design, install, and service hydronic systems using Rehau, Uponor, and Heat Link components.',
    body: [
      'Hydronic in-floor heat warms a room evenly from the floor up instead of blowing hot air from a vent, which means fewer cold spots, less dust, and lower operating costs for many homes. It pairs naturally with a high-efficiency boiler and works well in basements, garages, and bathrooms.',
      'We install and service the manifolds, tubing, and controls that make a radiant system run, and we integrate it with the boiler and the rest of the mechanicals so the whole system is balanced. For a renovation or a new build, radiant is worth designing in from the start.',
    ],
    bullets: [
      'In-floor and radiant hydronic design and install',
      'Rehau, Uponor, and Heat Link components',
      'Boiler and manifold integration',
      'Retrofits and new construction',
    ],
    brands: ['Rehau', 'Uponor', 'Heat Link', 'Weil-McLain', 'Taco', 'Grundfos'],
    image: '/assets/img/svc-hydronic.jpg',
    imageAlt: 'Radiant in-floor hydronic heating tubing laid out before a concrete pour',
    icon: 'flame',
  },
  {
    slug: 'water-heaters',
    name: 'Water Heaters',
    nav: 'Water Heaters',
    short: 'Tank and tankless water heater supply, install, service, and rental.',
    h2: 'Hot water, tank or tankless, installed and serviced',
    lede:
      'From a tank that has given up to a tankless upgrade that never runs out, we supply, install, service, and rent water heaters from Bradford White, A.O. Smith, Rheem, Giant, Noritz, and BAXI. Many qualify for our Vista Credit rental and finance program.',
    body: [
      'A failed water heater is usually an emergency, and we keep the path from diagnosis to replacement short. We will tell you honestly whether a part fixes it or a replacement is the better call, and we size a new tank or tankless unit to how your household actually uses hot water.',
      'Tankless water heaters are popular for the endless hot water and the space saving, and they are not all the same. We size the unit to your peak demand so the shower stays hot when the dishwasher is running, and we service the units we install.',
    ],
    bullets: [
      'Tank water heater supply, install, and service',
      'Tankless water heater sizing and install',
      'Rental and finance options through Vista Credit',
      'Bradford White, A.O. Smith, Rheem, Giant, Noritz, BAXI',
    ],
    brands: ['Bradford White', 'A.O. Smith', 'Rheem', 'Giant', 'Noritz', 'BAXI'],
    image: '/assets/img/svc-water-heaters.jpg',
    imageAlt: 'Tankless water heater mounted on a basement wall',
    icon: 'droplet',
  },
  {
    slug: 'fireplaces-gas',
    name: 'Fireplaces & Gas',
    nav: 'Fireplaces & Gas',
    short: 'Gas fireplaces, gas lines, and BBQ hookups, certified for natural gas and propane.',
    h2: 'Gas fireplaces, gas lines, and BBQ hookups, done to code',
    lede:
      'As a gas-certified contractor for both natural gas and propane, we install and service gas fireplaces, run and repair gas lines, and handle BBQ hookups and appliance connections across Goderich and Huron County.',
    body: [
      'A gas fireplace adds real warmth and comfort, and we carry and install gas fireplaces from Continental, Kingsman, and Empire Comfort Systems. We also service existing units, whether the pilot will not stay lit or the flame pattern is off.',
      'On the gas-line side we run new lines, repair and replace old ones, and connect BBQs, cooktops, dryers, and other gas appliances. Because we are certified for both natural gas and propane, the fuel conversion or the new line is handled by the same licensed crew.',
    ],
    bullets: [
      'Gas fireplace supply, install, and service',
      'Continental, Kingsman, and Empire Comfort Systems',
      'Natural gas and propane gas line install and repair',
      'BBQ hookups and appliance connections',
      'Cooktops, dryers, and gas fire pits',
    ],
    brands: ['Continental Fireplaces', 'Kingsman', 'Empire Comfort Systems'],
    image: '/assets/img/svc-fireplaces.jpg',
    imageAlt: 'Modern gas fireplace with a lit flame in a Huron County living room',
    icon: 'flame',
  },
];

export interface Location {
  slug: string;
  name: string;
  county: string;
  blurb: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: 'goderich',
    name: 'Goderich',
    county: 'Huron County',
    blurb:
      'Our home town. Hoffmeyer Plumbing & Heating has worked out of 55 Kingston St in Goderich since the 1960s, and the shop is a fixture of the community. From the harbor to the square, most of our work is within a short drive of the building.',
  },
  {
    slug: 'clinton',
    name: 'Clinton',
    county: 'Huron County',
    blurb:
      'About twenty minutes north of Goderich, Clinton is a town we serve from our Kingston Street shop. Residential plumbing and heating calls, furnace replacements, and water-heater work keep our crews on the road there year-round.',
  },
  {
    slug: 'bayfield',
    name: 'Bayfield',
    county: 'Huron County',
    blurb:
      'On the Lake Huron shore a short drive south of Goderich, Bayfield mixes year-round residents with cottages and seasonal homes. We handle the plumbing, heating, and water-heater work that lake-country properties need, from frozen-line calls in winter to cooling in summer.',
  },
  {
    slug: 'seaforth',
    name: 'Seaforth',
    county: 'Huron County',
    blurb:
      'A historic main-street town southeast of Goderich, Seaforth is home to a mix of older heritage homes and newer builds. That range means a steady mix of plumbing upgrades, furnace and boiler work, and water-heater service calls.',
  },
  {
    slug: 'blyth',
    name: 'Blyth',
    county: 'Huron County',
    blurb:
      'East of Goderich, Blyth is a small Huron County community we cover from our Goderich shop on request. Rural residential and farm-adjacent properties there call on us for drain and sewer work, water heaters, and heating service. Call to confirm we reach your address.',
  },
];

export const AREAS = [
  'Goderich',
  'Clinton',
  'Bayfield',
  'Seaforth',
  'Blyth',
  'Huron County',
];

// The verified three-generation lineage (Jack -> Doug -> Chris Hoffmeyer), rendered as the
// pipe-run timeline. `body` is safe inline HTML (set:html).
export const generations: { date: string; body: string }[] = [
  { date: '1958', body: 'Founded as <b>Near &amp; Hoffmeyer</b> by Len Near and Jack Hoffmeyer at 59 Hamilton St in Goderich.' },
  { date: '1960s', body: 'Jack Hoffmeyer buys out Len Near and moves the shop to <b>Kingston Street</b>.' },
  { date: '1971', body: 'An <b>Appliance Sales &amp; Service</b> division opens at 58 Kingston St.' },
  { date: '1994', body: 'Jack retires and his son <b>Doug Hoffmeyer</b> takes the reins, the second generation.' },
  { date: '2007', body: "Doug's son <b>Chris Hoffmeyer</b> joins the business, the third generation." },
  { date: '2011', body: 'The <b>Goderich tornado</b> damages the building; the shop runs from 317 Huron Rd for about eighteen months before coming home.' },
  { date: '2023', body: "Hoffmeyer continues serving Goderich and Huron County from its Kingston Street shop." },
];

export const faqs: [string, string][] = [
  [
    "What details help with a Goderich heating repair request?",
    "Give the equipment type, model if safely visible, the fuel used and what changed when the problem began. Mention rooms or other equipment affected. A clear symptom history helps the service team arrange the right assessment without guessing at a diagnosis."
  ],
  [
    "Can I ask about a propane system outside town?",
    "Identify the Huron County address and specify propane rather than natural gas, along with the appliance involved. Include any previous service paperwork you have. The provider must confirm the work, relevant qualifications and travel arrangements for that property."
  ],
  [
    "How should I compare a rental with buying a water heater?",
    "Request the complete current agreement, monthly charges, term, service coverage and exit or buyout conditions. Compare the total obligation with an installed purchase price. A Hoffmeyer website enquiry does not establish credit approval or a finance contract."
  ],
  [
    "What should I include for a sewer or plumbing problem?",
    "Describe the affected fixtures, when the symptom occurs and whether water is actively escaping. For a Goderich or nearby Huron County property, give access details and any earlier inspection findings. Avoid entering contaminated water to gather more information."
  ],
  [
    "Which nearby locations can I ask about?",
    "The site describes Goderich and surrounding Huron County communities, including Clinton, Bayfield, Seaforth and Blyth. Send the exact property location and project type; a listed community does not establish a particular attendance time."
  ],
  [
    "Is the online request a confirmed emergency booking?",
    "The Hoffmeyer form collects the information needed for follow-up. A visit, price and response time require an agreement with the service team. If the situation presents immediate danger, contact emergency services instead of waiting on an online reply."
  ]
];
