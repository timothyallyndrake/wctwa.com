# Now

Phase: **inner pages.** The homepage is locked. Continue from this file, then [layout.md](../design/layout.md) when the work touches structure.

## Where the code is

- Working branch: `fix/homepage-polish`
- `main` has the civic homepage through pull request #1
- This branch adds the hero photo edge, the shared title band, the footer spacing, and these docs

Start the next branch from `fix/homepage-polish` until this branch is merged. A branch from `main` alone is missing the title band.

## What is next

Write the inner pages, starting with About. Each page already opens with `PageTitle` (`apps/web/src/components/PageTitle.astro`): a plain navy band, display type, and the shared wave. Photographs go in the content under the band.

Follow [layout.md](../design/layout.md) for the shell, homepage regions, header, and footer. Follow [DECISIONS.md](./DECISIONS.md) for product and technical choices. Follow [design/tokens/](../design/tokens/) for color, type, spacing, and shape.

## Run and preview

```bash
pnpm dev            # http://localhost:4321/new/
pnpm build          # apps/web/dist
```

The build is served under `/new/`. An S3 upload of `dist` belongs in a `new/` prefix.

## When this file changes

Replace the phase, the working branch, and the next job when those change. Leave layout detail in `design/layout.md` and locked choices in `DECISIONS.md`.
