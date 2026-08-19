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
  marks: {
    school: {
      src: "/images/brand/world-champion-tkd.webp",
      alt: "World Champion Tae Kwon Do",
    },
    foundation: {
      src: "/images/brand/us-taekwondo-education-foundation.webp",
      alt: "United States Taekwondo Education Foundation",
    },
  },
  hero: {
    src: "/images/enhanced/home-hero.png",
    alt: "Three students in ready stance on the mat at World Champion Taekwondo Washougal.",
    approved: "v3" as const,
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

/**
 * Public teaser for the future member experience.
 * Parents sign in here later — Master/staff use a separate admin app.
 */
export const comingSoon = {
  eyebrow: "Coming soon",
  title: "A member home for every family",
  lead:
    "We’re building a simple place for parents and students to manage training life online — without the clutter.",
  membersPath: "/members/",
  features: [
    {
      title: "Family accounts",
      detail: "Sign in to see your students, belt progress, and class rhythm in one calm view.",
    },
    {
      title: "Live schedule",
      detail: "Check what’s on the mat this week — updates published from the school, not a PDF chase.",
    },
    {
      title: "School store",
      detail: "Order uniforms and gear when you need them, sized for your student’s path.",
    },
    {
      title: "Monthly dues online",
      detail: "Pay membership automatically and securely — fewer reminders, more training.",
    },
  ],
} as const;
