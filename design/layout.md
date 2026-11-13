# Layout direction

Working direction, grilled 2026-10-14. One layout for the marketing site.  
Current phase and next job: [docs/NOW.md](../docs/NOW.md).

## Freshness

The built site has to feel new and exciting beside the current public site. Do not open or study that site for visual reference until Tim brings it in. The energy comes from display type, documentary photography, white space, and this sequence.

Decoration is photography, type, and the color fields in `design/tokens/colors.md`.

## Page shell

A white header holds the school mark and name, primary navigation, and a phone link. On a narrow screen the phone becomes a Call button and the navigation moves into the menu. Content sits in a `72rem` column.

The header does not carry a trial button. The `$40 / 2 weeks` offer lives in the homepage trial section and on the start form. Member sign-in stays in the footer markup and is hidden until the family portal is ready.

Documentary photographs sit in the page content. They do not sit inside the title band.

## Homepage regions

1. Hero. Full-body photo, navy text column, bottom wave into the quotes gray. The photo fills the column so the wave covers its bottom edge.
2. From the community. Four quotes on the darker gray, then a wave into the programs field.
3. Programs. Three equal white cards.
4. Local facts. Address and hours on a navy band, with directions and the full schedule.
5. Trial offer. `$40 / 2 weeks`, including uniform and belt.
6. Footer.

Master Kim is not on the homepage. He has his own page under Instructors.

## Inner pages

Every page other than the homepage opens with a plain navy title band across the full width. The title uses the display type. The same wave used between homepage sections closes the band and reveals the page ground. The band does not include a photograph. Photos, when a page has them, live in the content below.

Schedule, Programs, About, Instructors, Birthday Parties, Contact, and the start form all use this band.

**Program detail pages** (Kids, Tiny Tigers, Adults & Families) follow the About story pattern: a documentary school photograph beside the first section from the medium viewport up, then a single reading column for the remaining sections and actions (`Reserve a class`, schedule text link).

**Programs hub** reuses the homepage’s three program cards (photo, title, blurb, “View program”) in a catalog layout, with a trial signal button below the grid.

**Schedule** is hours, an effective date, and the weekly class table (horizontal scroll on narrow viewports), plus class-level notes and gear.

**Birthday parties** are a reading column only — offer facts, no stock collage.

**Contact** is address, phone, email, Facebook, a static map image, and directions / request buttons in a two-column layout from the medium viewport up (details before map when stacked).

**Start form** is the title band plus intro copy and the lead form. Trial is `/start/`, information is `/start/info/`, and birthday parties are `/start/birthday/`. The site is static, so those are separate pages rather than a query string.

**Privacy** is a reading column.

**Instructors** is a short intro, affiliation mark, and request button; Master Kim’s page keeps the instructor profile layout and credential list.

Narrative inner pages (About and program detail pages) use the signal button for the primary action on that page (trial reserve, party reserve, or request information as appropriate).

## Viewports

- **Narrow:** one column, a menu panel, and the phone as a Call button. Footer contact sits above the school lockup, with the phone and Facebook beside the address and email.
- **Medium:** some sections become two columns. The menu panel remains.
- **Wide:** full navigation. The homepage hero is two columns. Footer contact is right-aligned.
