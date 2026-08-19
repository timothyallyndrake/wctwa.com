# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Washougal-area parents (and caregivers) researching a martial arts school for a child — often comparing options, safety, instructor quality, and fit for Tiny Tigers / kids / family training.

**Secondary (demo / stakeholder):** Master Chulan Kim — the school’s headmaster; Tim presents concept site work to him. He is not the site’s primary conversion user, but the site must feel worthy of his school.

**Other audiences:** Adults seeking training; families interested in birthday parties; existing families who will later use a member portal (teased, not live in v1).

## Product Purpose

Public marketing website for **World Champion Taekwondo Washougal**. It helps families trust the school enough to **request information** or **reserve a first class**, and explains programs, schedule, instructor credentials, parties, and contact details clearly.

Success (near term): Master is proud to show the concept; parents can understand the school and take a next step without carnival sales pressure.

## Positioning

A Washougal family taekwondo school led by a highly credentialed headmaster (Master Chulan Kim), emphasizing a safe, positive, encouraging environment — not a generic franchise template or MMA gym energy.

## Operating Context

- Physical school: 3307 Evergreen Way #605, Washougal, WA 98671  
- Contact: wctwashougal@gmail.com · 360-831-1124 · Facebook page  
- Classes by age/level (Tiny Tigers, Beginner, Levels, Family, Teen/Adult, Sparring); hours Mon–Fri afternoons/evenings; Sat events; Sun closed  
- Lead capture today: forms (trial / info / birthday) → email Tim + Master (API wiring separate from visual concept)  
- Content publishing today: Tim + AI via git; announcements as repo content  
- Legacy live site: WordPress/Divi static export on wctwa.com (anti-reference for tone/layout debt; facts still source of truth)

## Capabilities and Constraints

**In scope for marketing v1 / concept:**

- Trust-first homepage and core pages (About, Programs hub + deep links, Schedule, Instructors, Birthday Parties, Contact, Privacy, Start/forms UI)  
- Hybrid IA; rewritten copy from verified facts  
- Coming-soon member portal teaser + disabled `/members/` sign-in shell  
- Announcement banner via content config  
- Static Astro site (`pnpm dev` / `pnpm build` from monorepo root)

**Out of scope for v1 (do not imply as live):**

- Working parent/student auth  
- Online dues / payments  
- Equipment store checkout  
- Staff admin for Master to self-publish  
- Blog, live chat, logo replacement, native app  

**Undecided / open:** exact form field lists; analytics; final photo set (Tim providing / enhancing); SES/DNS for production API.

## Brand Commitments

- Legal/display name: **World Champion Taekwondo Washougal** (short: WCT Washougal)  
- Sacred colors: **blue and red** (evolve layout/type/imagery around them; do not abandon)  
- Tone commitment: **calm authority + warmth** — not kids-club cartoon, not MMA hype, not urgency-spam  
- Homepage job: earn trust first; trial CTA persistent but not the hero scream  
- Trial offer fact: **$40 / 2 weeks** (demoted below trust)  
- Birthday party facts: 90 minutes, activities, ~15–20 guests, **$200** (Washougal — never Gresham)  
- Master Chulan Kim credentials must remain accurate (WTF 7th degree, Yong Moo Do 4th, Yong-In University, National Champion 1995, USAT coach, Taekwondo of America lineage, etc.)  
- Future: parents sign in on marketing member area; Master/staff use a separate admin app

## Evidence on Hand

- Repo inventory: `docs/CURRENT_SITE_INVENTORY.md`  
- Locked decisions: `docs/DECISIONS.md`  
- Structured site facts/copy stubs: `apps/web/src/content/site.ts`  
- Real testimonials on legacy site (Master Eric, Michelle Ludlow, Sara Dimitt) — usable when attributed; do not invent new ones  
- Legacy media on live wctwa.com uploads (logo, Master portrait, class photos) — quality often low; Tim will supply / enhance; do not fabricate people or venues  
- Forms/offer/schedule facts from inventory — treat as product truth unless Tim corrects them  

**Absence:** polished local image library in `apps/web/public` beyond favicons — concept work may use enhanced legacy assets or placeholders Tim replaces.

## Product Principles

1. **Trust before transaction** — credentials, place, and tone earn the CTA.  
2. **Facts over franchise filler** — keep verifiable school truth; rewrite voice.  
3. **Washougal-specific** — local family school, not a cloned multi-location template.  
4. **Honest roadmap** — tease member/store/dues as coming soon; never fake live account features.  
5. **Presentable to Master** — calm, professional craft suitable to show at the dojang.

## Accessibility & Inclusion

No formal standard locked yet. Default to clear hierarchy, readable type, visible focus, sufficient contrast, meaningful alt text on real photos, and usable forms on mobile — parents will often view on phones.
