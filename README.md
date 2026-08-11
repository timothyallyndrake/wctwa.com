# wctwa.com

World Champion Taekwondo Washougal — site refresh.

**Live today:** [wctwa.com](https://wctwa.com/) (legacy WordPress/Divi static export)  
**Repo:** planning + new Astro/Lambda/CDK app

## Docs

- [Current site inventory](docs/CURRENT_SITE_INVENTORY.md)
- [Locked rebuild decisions](docs/DECISIONS.md)

## Monorepo

| Path | Package | Role |
|---|---|---|
| `apps/web` | `@wctwa/web` | Astro static site |
| `apps/api` | `@wctwa/api` | Lambda handler (Zod → SES) |
| `infra` | `@wctwa/infra` | AWS CDK (S3, CloudFront, Lambda Function URL) |

## Quick start

```bash
pnpm install
pnpm dev          # Astro at http://localhost:4321
pnpm build        # static export → apps/web/dist
```

Copy `.env.example` → `.env` as needed. Set `PUBLIC_API_URL` for the start form once the Function URL exists.

## Deploy (when AWS is wired)

1. Verify SES identity / from-address  
2. Create GitHub OIDC role; set `AWS_DEPLOY_ROLE_ARN`, `LEAD_NOTIFY_TO`, `LEAD_NOTIFY_FROM`  
3. Set Actions var `PUBLIC_API_URL` after first API deploy (or two-pass)  
4. Push to `main` → [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

Local emergency:

```bash
pnpm build
cd infra && pnpm exec cdk deploy --all
```

## Announcements

Edit `apps/web/src/content/site.ts` → `announcement` (`active`, `message`, optional dates). Prefer a banner; ship via local test → commit → deploy.
