// Single source of truth for the Hoffmeyer Plumbing & Heating brand + acquisition context.
// Bespoke to Hoffmeyer; do NOT copy values into sibling brand sites.
//
// Rebuild from archive: hoffmeyerplumbing.com serves unrelated content as of 2026-10-13; a rich
// 2018-2021 Wayback archive survives. NAP, founding date (May 2 1958), the three
// generations (Jack -> Doug -> Chris Hoffmeyer), the service taxonomy, the dealer
// brands, and the Vista Credit program below are VERIFIED from that archive + current
// directory listings. TODO items still need client (Jayden's) confirmation.
export const site = {
  name: 'Hoffmeyer Plumbing & Heating',
  nameHtml: 'Hoffmeyer Plumbing & Heating',
  shortName: 'Hoffmeyer',
  legalName: 'Hoffmeyer Plumbing & Heating Limited',
  alternateNames: [
    'Hoffmeyer Plumbing & Heating',
    'Hoffmeyer Plumbing',
    'Hoffmeyer Plumbing & Heating Limited',
    'Hoffmeyer Goderich',
  ],
  entityDefinition:
    "Hoffmeyer Plumbing & Heating Limited is a plumbing, heating, and cooling contractor at 55 Kingston St in Goderich, Ontario, serving Goderich and Huron County across residential and commercial plumbing, drain and sewer work, furnaces, boilers, air conditioning, hydronic and radiant heating, water heaters, fireplaces, and natural gas and propane since 1958. A three-generation, family-run business, it is now part of the Jayden's Mechanical family.",
  domain: 'hoffmeyerplumbing.com',
  // Demo host now; production destination requires confirmed domain control before cutover.
  url: 'https://hoffmeyer-demo.headbangermarketing.com',
  est: 1958, // VERIFIED: founded May 2, 1958 as "Near & Hoffmeyer".
  foundedDate: 'May 2, 1958',
  foundedLine: 'Serving Goderich and Huron County since 1958',
  tagline: 'Plumbing, heating, cooling, and gas across Huron County',
  heritageBadge: 'Sales | Service | Showroom', // VERIFIED tagline under the logo on every archived page.
  // VERIFIED from the archive + directory listings.
  phone: { display: '(519) 237-4328', tel: '+15192374328' }, // Jayden's 24/7 dispatch (verified jaydensmechanical.com); old 519-524-7861 dead post-acquisition.
  phoneEmergency: { display: '(519) 237-4328', tel: '+15192374328' }, // same number - Jayden's routes 24/7 through one line; old 519-524-4111 is gone.
  // VERIFIED via jaydensmechanical.com (historical hoffmeyerplumbing.com mailbox is not an approved contact).
  email: 'info@jaydensmechanical.com',
  address: {
    street: '55 Kingston St',
    locality: 'Goderich',
    region: 'ON',
    postal: 'N7A 3K3', // VERIFIED across archive + Yelp, Birdeye, Huron Builders.
  },
  // Multi-trade entity -> multi @type. Hoffmeyer is a plumber AND a heating/cooling contractor.
  types: ['Plumber', 'HVACBusiness'],
  knowsAbout: [
    'Plumbing',
    'Drain and sewer cleaning',
    'High-pressure water jetting',
    'Video camera pipe inspection',
    'Sewer line and water main repair',
    'Water heaters and tankless',
    'Furnace installation and repair',
    'Boilers and hydronic heating',
    'Radiant in-floor heating',
    'Air conditioning',
    'Heat pumps',
    'Ductless mini-split systems',
    'Gas fireplaces and gas lines',
    'Natural gas and liquid propane',
    '24-hour emergency service',
  ],
  serviceAreas: [
    'Goderich',
    'Clinton',
    'Bayfield',
    'Seaforth',
    'Blyth',
    'Huron County',
  ],
  partner: {
    name: "Jayden's Mechanical",
    url: 'https://jaydensmechanical.com',
    acquiredYear: 2023, // VERIFIED: Jayden's blog + Facebook (Nov 27, 2023), "65-year legacy".
    short: "Now part of the Jayden's Mechanical family",
  },
  geo: { lat: 43.7392, lng: -81.7107 }, // 55 Kingston St, Goderich, ON.
  hours: {
    weekdays: 'Mon-Fri, 8am - 5pm',
    saturday: 'Sat, 8am - 12pm',
    sunday: 'Closed',
    emergency: '24-hour emergency service',
  },
  webhookUrl: 'https://auto.sdagents.ai/webhook/hvac-sites',
  stats: [
    { value: '1958', label: 'Family-run since 1958' },
    { value: '3', label: 'Generations in Goderich' },
    { value: '24/7', label: 'Emergency service' },
    { value: 'NG + LP', label: 'Gas-certified' },
  ],
} as const;
