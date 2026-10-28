# Color tokens

Working direction, grilled 2026-10-14. Sacred brand commitment remains blue and red. These roles assign the school’s existing blues and red. Do not add hues.

## Roles

| Token | Hex | Use |
|---|---|---|
| `color-bg` | `#FFFFFF` | Page ground |
| `color-bg-surface` | `#F2F4F6` | Cool gray support surfaces |
| `color-fg` | `#17212B` | Ink for titles and body |
| `color-fg-muted` | `#59636E` | Secondary text |
| `color-bg-field` | `#274E73` | Navy institutional fields |
| `color-fg-on-field` | `#FFFFFF` | Text and icons on navy fields |
| `color-link` | `#0054B7` | Navigation and text links |
| `color-signal` | `#E70E1B` | Decisive actions, active states, key facts |
| `color-fg-on-signal` | `#FFFFFF` | Label text on the red signal |
| `color-border` | `#D8DEE4` | Hairline borders on cards, groups, and inputs |
| `color-focus` | `#0054B7` | Focus ring. Same hue as `color-link` |

## Contrast

Checked against WCAG 2.1 AA:

- Ink, muted ink, and bright blue on white pass for normal text.
- White on navy passes for normal text.
- White on red is about 4.7:1. Signal labels need to be at least 18px regular or 14px bold. Do not set small body copy in white on red.

## Interaction

Links use `color-link`. The red signal is for the trial action, active states, and key facts. Hover and pressed states stay on these same hues. Focus is a 3px solid `color-focus` ring with 3px offset.

When a daisyUI theme is added, map these roles. Do not bring in daisyUI’s default palette.
