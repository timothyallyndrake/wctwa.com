export const site = {
  name: "World Champion Taekwondo Washougal",
  shortName: "WCT Washougal",
  tagline: "A calm, positive place for Washougal families to train.",
  address: {
    line1: "3307 Evergreen Way #605",
    city: "Washougal",
    state: "WA",
    zip: "98671",
    mapsUrl: "https://maps.app.goo.gl/yvFzGpkYGjAzo5Zs8",
  },
  phone: {
    display: "360-831-1124",
    href: "tel:3608311124",
  },
  email: "wctwashougal@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100085540675144",
  offer: {
    label: "Try 2 weeks",
    price: "$40",
    detail: "Two weeks of class — a simple way to start.",
  },
} as const;

/** Set `active: true` and fill fields when Master asks for a notice. */
export const announcement = {
  active: false,
  message: "",
  /** Optional ISO dates; banner only shows inside this window when set */
  startsAt: null as string | null,
  endsAt: null as string | null,
} as const;

export const nav = [
  { href: "/about-us/", label: "About" },
  { href: "/programs/", label: "Programs" },
  { href: "/schedule/", label: "Schedule" },
  { href: "/instructors/", label: "Instructors" },
  { href: "/martial-arts-birthday-parties/", label: "Birthday Parties" },
  { href: "/contact-us/", label: "Contact" },
] as const;
