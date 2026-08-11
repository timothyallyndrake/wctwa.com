# Current Site Inventory — wctwa.com

Crawled: 2026-08-11  
Live URL: https://wctwa.com/  
Brand: **World Champion Taekwondo Washougal**

---

## Stack & hosting (as observed)

| Layer | Detail |
|---|---|
| CMS / builder | WordPress + **Divi 4.27.4** |
| Plugins (visible) | Popups for Divi (`popups-for-divi` 3.0.9) |
| Frontend delivery | **Static export on Amazon S3 + CloudFront** (`x-amz-error-*`, `server: AmazonS3`). `wp-json`, `sitemap.xml`, `robots.txt` return S3 `NoSuchKey` — not a live WP runtime on the public host. |
| Lead capture | External **Typeform** (3 forms) |
| Fonts | Google Fonts: **Roboto Flex**, **Bebas Neue** (Open Sans as Divi fallback) |
| Local remnant | oEmbed URLs still reference `http://wctwa.local/` |

---

## Brand / contact

| Field | Value |
|---|---|
| Legal / display name | World Champion Taekwondo Washougal |
| Address | 3307 Evergreen Way #605, Washougal, WA 98671 |
| Map | https://maps.app.goo.gl/yvFzGpkYGjAzo5Zs8 |
| Phone | 360-831-1124 (`tel:3608311124`) |
| Email | wctwashougal@gmail.com |
| Facebook | https://www.facebook.com/profile.php?id=100085540675144 |
| Logo | `/wp-content/uploads/2024/04/cropped-logo-*.png` (+ `2024/05/66572.webp` used in header/footer) |

---

## Color palette (site-specific, high signal)

Divi / WP preset noise omitted. Brand-facing colors from dynamic Divi CSS + page styles:

| Hex | Role (inferred) |
|---|---|
| `#274e73` | Primary navy / section & UI chrome (dominant) |
| `#0054b7` | Bright brand blue |
| `#004ca5` | Darker blue variant |
| `#e70e1b` | Accent red (CTAs / energy / TKD association) |
| `#82c0c7` | Soft teal accent |
| `#ffffff` / dark text | Body surfaces |

**Typography**

- Display / impact: **Bebas Neue**
- Body / UI: **Roboto Flex**

---

## Information architecture / navigation

**Top bar:** address · “GET IN TOUCH NOW” (mailto) · phone · Facebook  

**Primary nav**

1. About Us → `/about-us/`
2. Programs → `/programs/`
   - Kids Martial Arts → `/programs-kids-martial-arts/`
   - Tiny Tigers Martial Arts → `/programs-tiny-tigers-martial-arts/`
   - Adults and Families Martial Arts → `/programs-adults-and-families-martial-arts/`
3. Birthday Parties → `/martial-arts-birthday-parties/`
4. Schedule → `/schedule/`
5. **Reserve Your First Class** → Typeform Sign Up
6. **Request Information** → Typeform Request Information
7. More → Instructors, Contact Us

**Footer nav:** About Us · Programs · Birthday Parties · Schedule · Instructors · Contact Us · Privacy Policy  
**Footer contact:** name, address, email, phone, copyright

---

## Pages (full map)

| Route | Title | Purpose |
|---|---|---|
| `/` | World Champion Taekwondo | Marketing home |
| `/about-us/` | About Us | What is TKD, fitness/life skills, environment |
| `/programs/` | Programs | Hub for 3 programs |
| `/programs-kids-martial-arts/` | Kids Martial Arts | Program detail + signup CTA |
| `/programs-tiny-tigers-martial-arts/` | Tiny Tigers | Under-6 program detail + signup CTA |
| `/programs-adults-and-families-martial-arts/` | Adults and Families | Adult/family detail + signup CTA |
| `/martial-arts-birthday-parties/` | Taekwondo Birthday Parties | Party offer + reserve CTA |
| `/schedule/` | Schedule | Hours + weekly class grid |
| `/instructors/` | Instructors | Master Chulan Kim bio/credentials |
| `/contact-us/` | Contact Us | Address, email, phone, map image/link |
| `/privacy-policy` | Privacy Policy | Basic privacy copy (incomplete placeholder section) |

No sitemap/robots on the static host.

---

## Functionality

### Lead / conversion funnels (Typeform)

| Form | URL | Used for |
|---|---|---|
| Sign Up | `https://o59apu3gimj.typeform.com/to/nBXT4UTq` | Reserve first class / program sign-up / $40 offer |
| Request Information | `https://o59apu3gimj.typeform.com/to/WdEwpMN1` | Soft-interest / “Request More Information” |
| Birthday Party Request | `https://o59apu3gimj.typeform.com/to/l1ON0x4C` | Party booking |

### Other interactions

- Mailto / tel / Facebook / Google Maps links
- Divi popup (home): stale **Thanksgiving** closure notice (Nov 28–29) + “YOU CAN MAKE UP CLASSES!”
- Contact page: static map screenshot image + “View Map” link (no embedded interactive map widget observed)
- **No on-site contact form**, payments, member portal, blog, or live WP admin on public host
- Schedule is a **static HTML table** (content updated manually; currently “Effective Feb 23, 2026”)

### Offer

- **Exclusive online offer:** 2 weeks of class for **$40** → Sign Up Typeform

---

## Content digest by page

### Home

- Hero: “World Champion Taekwondo Washougal” / “The Community of Washougal loves…”
- CTA: Request More Information
- Testimonials (3): Master Eric, Michelle Ludlow, Sara Dimitt — praise Master Kim / positive discipline / family class
- Program teaser cards: Kids · Tiny Tigers · Adult and Family
- Offer block: $40 / 2 weeks
- Mission blurb: dedicated to Washougal families; confidence, discipline, community
- Closing line: safe, positive, encouraging learning environment
- Popup: Thanksgiving closed (stale)

### About

- What is Taekwondo (definition / mind-body-spirit)
- Fitness and life skills
- Positive environment / premiere school positioning
- CTA: Request Information

### Programs hub

- Same three program blurbs as home + Learn More links

### Kids

- Self-confidence, discipline, control; individual pace; leadership
- Instructors committed to success; clean/safe environment
- All ages/fitness levels; family atmosphere
- Benefits list (confidence, focus, community, health)
- CTA: Sign Up

### Tiny Tigers

- Under 6; respect & kindness; friendships
- Motor/social/listening skills; manners
- Benefits list (same pattern as Kids)
- CTA: Sign Up

### Adults & Families

- Fitness beyond gym routines; self-defense; mental resilience
- Family classes train together
- Beginner → black belt
- Benefits list (same pattern)
- CTA: Sign Up

### Birthday parties

- **Copy bug:** body text says “World Champion Taekwondo **Gresham**”
- 90 minutes; TKD practice, games, board breaking
- VIP gift passes for guests; capacity 15–20
- **$200**
- CTA: Reserve Spot (birthday Typeform)

### Schedule

**Hours**

- Mon–Fri 2pm–8pm  
- Saturday: Events only  
- Sunday: Closed  

**Belt / level legend**

- Tiny Tiger: 3–5 years  
- Beginner: White → High Orange / High Blue (as table headers)  
- Level 1 / 2 / 3 mapped to color belts (Orange/Blue/High Red, Yellow/Green/Brown/Black, High Green/Red)

**Weekly grid (Effective Feb 23, 2026)**

| Time | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| 4:00–4:30p | Tiny Tiger | Tiny Tiger | Tiny Tiger | Tiny Tiger | — |
| 4:40–5:20p | Level 1 | Sparring | Level 1 | Level 2 & 3 & Black Belt | Family |
| 5:30–6:00/6:10p | Beginner | Beginner | Beginner | Level 1 (to 6:10) | Beginner |
| 6:10–6:50p | Level 2 & 3 & Black Belt | Family | Level 2 & 3 & Black Belt | Family | — |
| 7:00–7:40p | Teen & Adult & Black Belt | Teen & Adult Sparring | Teen & Adult & Black Belt | Teen & Adult & Black Belt | — |

**Notes**

- Level 1 & 2 students need safety gear  
- Sparring class requires full sparring gear  

### Instructors — Master Chulan Kim

- Headmaster, World Champion Taekwondo Washougal  
- Yong-In University graduate (major Tae Kwon Do)  
- National competitions; National Champion 1995  
- Credentials listed:
  - 7th Degree World Tae Kwon Do Federation Black Belt  
  - 4th Degree Yong Moo Do  
  - Course of Teaching Profession in Education  
  - 20 Years Experience  
  - Taekwondo of America Master — founded by Olympic Gold Medalist Master Kim Je-Kyoung (1992)  
  - USAT Certified Coach  
- Photo: `Master-Chulan-Kim-161519.webp`

### Contact

- Address, email, phone, map image + View Map  
- No form on page (leads go to Typeform elsewhere)

### Privacy

- Collects email/name/phone; may collect IP/browser/etc.  
- Used to operate site / deliver services  
- Welcome email + periodic updates; no selling lists  
- “Contact Information” section still has **Divi placeholder lorem** (“Your content goes here…”)

---

## Media assets (source uploads)

Key originals under `/wp-content/uploads/`:

- Logo: `2024/04/cropped-logo-*.png`, header mark `2024/05/66572.webp`
- Class / lifestyle photos (Facebook-sourced filenames, May 2024)
- Master Kim portrait (June 2024)
- Birthday party graphic
- Google Maps screenshot of location
- Thanksgiving popup graphic (Nov 2024)
- Gresham-branded image still used on home (`World-Champion-Taekwondo-Gresham-241677.webp`)

Many images lack meaningful `alt` text.

---

## Known content / UX debt on current site

1. Stale Thanksgiving popup still in DOM  
2. Birthday copy references **Gresham** instead of Washougal  
3. Home uses a **Gresham** image asset  
4. Privacy policy incomplete (placeholder)  
5. Title tag trailing `|` on home  
6. Hard-sell / template martial-arts marketing tone (“Take Advantage Before It’s Too Late”, repeated benefit bullets)  
7. Schedule updates require republish of static HTML  
8. Lead flow depends entirely on Typeform (third-party branding, no first-party data ownership in-app)  
9. No `robots.txt` / `sitemap.xml` on public host  
10. SEO / social meta appears thin relative to a modern marketing site  

---

## Implied jobs the new site must still do

1. Present the school as trustworthy, family-safe, and elite-credentialed (Master Kim)  
2. Route parents into **trial / signup** and **info request**  
3. Explain programs by age/audience  
4. Publish an accurate, maintainable **class schedule**  
5. Sell **birthday parties**  
6. Provide contact + map + social proof  
7. Support occasional announcements (closures / events) without a full CMS war  

---

## Open questions for rebuild (to grill)

- Stack (stay on WP/Divi vs modern static/SSR)  
- What “minimal backend” means (forms only? schedule CMS? announcements? payments?)  
- Who edits content after launch (Tim, Master Kim, staff)  
- Keep Typeform vs first-party forms  
- Brand fidelity (keep navy/red vs full visual rethink)  
- Tone: warm community vs championship/authority  
- Scope of v1 vs later (member area, payments, blog, etc.)
