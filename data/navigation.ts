export interface NavChildItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  name: string;
  href: string;
  children?: NavChildItem[];
}

/**
 * Single source of truth for Khushi Travels main navigation.
 * Synchronized across Desktop Navbar, Mobile Navigation Overlay, and Footer Explore Section.
 */
export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Fleet",
    href: "/best-tempo-traveller-fleet-bangalore/",
  },
  {
    name: "Packages",
    href: "/packages/",
    children: [
      {
        name: "Holiday Packages",
        href: "/packages/holiday/",
        description: "Coorg, Ooty, Mysore, Goa & South India Tours",
      },
      {
        name: "Pilgrimage Packages",
        href: "/packages/pilgrimage/",
        description: "Temple circuits and sacred journeys",
      },
      {
        name: "Weekend Packages",
        href: "/packages/weekend/",
        description: "Short getaways from Bangalore",
      },
      {
        name: "Special Packages",
        href: "/packages/special/",
        description: "Fixed-departure Goa & seasonal group specials",
        badge: "New",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/tempo-traveller-rent-price-bangalore/",
  },
  {
    name: "Contact",
    href: "/hire-tempo-traveller-bangalore/",
  },
];
