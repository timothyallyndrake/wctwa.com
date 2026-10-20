# Shape and elevation tokens

Working direction, grilled 2026-10-14.

## Radius and border

| Token | Value | Use |
|---|---|---|
| `radius-photo` | 8px | Documentary photographs |
| `radius-card` | 8px | Cards and panels |
| `radius-control` | 6px | Buttons and inputs |
| `border-hairline` | 1px solid `color-border` | Cards, groups, inputs |

`color-border` is `#D8DEE4`, defined in `colors.md`.

## Elevation

The page is flat. Cards and sections separate with `border-hairline`. Form errors use a `color-signal` outline.

| Token | Value | Allowed on |
|---|---|---|
| `elevation-overlay` | `0 8px 24px rgba(23, 33, 43, 0.16)` | Mobile navigation panels and dialogs only |
