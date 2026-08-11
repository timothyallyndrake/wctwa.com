# Rebuild decisions (grilled)

Living doc of locked choices for the wctwa.com refresh.  
Companion: [CURRENT_SITE_INVENTORY.md](./CURRENT_SITE_INVENTORY.md)

Last updated: 2026-08-11

---

## People & publishing

| Decision | Choice |
|---|---|
| Who edits/publishes | **Tim only**, via AI + git |
| Master review gate | **None** — Master may request changes; Tim ships |
| Workflow | Edit locally with AI → test → commit → deploy |

---

## Product / UX

| Decision | Choice |
|---|---|
| Homepage job | **Trust first** (Master, school, Washougal families); trial CTA persistent but not carnival |
| Visual brand | **Evolve** — **blue + red sacred**; rethink layout, type, photo treatment, motion, polish |
| Visual tone | **Calm authority + warmth** (editorial, spacious; not kids-club cartoon, not MMA hype) |
| Copy | **Full rewrite**; preserve facts/credentials; drop urgency-spam / template tone |
| IA | **Hybrid** — strong Programs overview; keep useful deep links; Instructors + Birthday Parties real; no filler hubs |
| Trial offer | **Keep $40 / 2 weeks**; demote below trust (not hero scream) |
| Announcements | **Repo content** (typed config); prefer dismissible banner; modal only if Master wants urgent; Tim+AI ship |
| Photos | Launch on best current + Master anchor; Tim brings more; **enhance/upscale** keepers; easy to swap |

### v1 in scope

- Astro marketing site refresh  
- Hybrid IA + rewritten copy  
- Schedule page  
- First-party forms (trial / info / birthday)  
- Announcements-in-content  
- Photo enhance + new assets as available  
- CDK infra + GitHub Actions deploy  

### v1 out of scope

- Member login / student portal  
- Online payments / membership billing  
- Admin dashboard for leads  
- Blog / news  
- Live chat  
- Logo replacement  
- Native mobile app  

---

## Technical architecture

| Decision | Choice |
|---|---|
| Frontend | **Astro** (static), React islands only if needed |
| Backend | **No NestJS for v1** — **Lambda** validates + sends mail |
| Handler style | Thin **Node + Zod** (bump to Hono only if routing/middleware sprawls) |
| Email | **AWS SES**; notify **Tim + Master** on every submit |
| Recipients config | Env / secrets (not hardcoded) |
| Forms | Same three intents: `trial` \| `info` \| `birthday` (one Lambda shape, different subjects/bodies) |
| Hosting (site) | **S3 + CloudFront** (static Astro build) |
| Hosting (API) | **Lambda** + API Gateway or Function URL |
| IaC | **AWS CDK (TypeScript)** in-repo |
| CI/CD | **GitHub Actions** on `main`; **OIDC → AWS**; local `cdk deploy` still ok |

```
[Browser] → CloudFront → S3 (Astro)
                ↘
            API (Lambda) → SES → Tim + Master email
```

---

## Still open (grill later or when building)

- Exact form fields per intent (mirror Typeform vs simplify)  
- SES domain/identity + DNS ownership details  
- Analytics (e.g. GA4 / none)  
- Redirect map from old WP slugs (likely keep paths)  
- Announcement content schema details  
- Package manager / Node version conventions  
- Whether birthday copy/pricing ($200, 90 min, etc.) changes  

---

## Rejected / deferred

| Idea | Status |
|---|---|
| Stay on WordPress/Divi | Rejected for rebuild |
| NestJS API | Deferred — overkill for validate+SES; revisit if API surface grows |
| Lead admin UI | Out of v1 |
| Blocking popup as default announcement | Deferred — banner preferred |
