# How this repo remembers

One fact lives in one file. A session that changes a fact updates that file in the same change.

| File | Owns | Update when |
|---|---|---|
| [NOW.md](./NOW.md) | The phase, the working branch, and the next job | The phase changes, or the next job changes |
| [DECISIONS.md](./DECISIONS.md) | A locked product or technical choice, including rejections | A choice is made, changed, or rejected |
| [../design/layout.md](../design/layout.md) | Page shell, homepage regions, title band, header, footer, viewports | The structure of a page changes |
| [../design/tokens/](../design/tokens/) | Color, type, spacing, and shape | A token changes |
| [CURRENT_SITE_INVENTORY.md](./CURRENT_SITE_INVENTORY.md) | What the legacy public site contains | That inventory changes |

`AGENTS.md` at the repo root is the entry point. It points here and at `NOW.md`. It does not restate layout or decisions.

Code is the source for how a page is built. These files are the source for why, and for what to do next.
