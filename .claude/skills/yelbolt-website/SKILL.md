---
name: yelbolt-website
description: Design system, intentions and conventions of the Yelbolt studio website (yelbolt.co, this Astro repo). Use whenever you change a page or section of this site — the hero ticker, the product cards, the footer, a new product, a new page, dark mode, motion — and before choosing a component, a colour or a motion. Covers the @unoff/ui tokens (Yelbolt YLB modes), product cards that wear their product's mode, the ticker, the shade and line grids, and the checklist to ship a change.
---

# Yelbolt website

Static Astro site of yelbolt.co on **@unoff/ui** (theme `yelbolt`, modes
`yelbolt-ylb-light|dark`). It shares its core with `website-ui-color-palette` and
`unoff-website`: their skills (`ui-color-palette-corpo-website`, `unoff-website`) hold the
full references for tokens, components, layout and motion; this one holds what differs.

## Page

One page (`/`) from Figma `OCuxjzljBCvDse4Lb57EhK`, frame `1:6388`:

| Section | Component | Notes |
| --- | --- | --- |
| Header | `layout/Header` | centred logotype, light/dark toggle on the right (`scripts/scheme.ts`, hidden without JS) |
| Hero | `home/Jumbotron` + `home/Ticker` | product icons drifting behind the title (90s loop, still without motion, paused off screen) |
| Products | `home/Products` (`src/data/products.ts`) | one `<a class="card">` per product, wearing its product's mode |
| Footer | `layout/Footer` | brand + legal, contact, resources, connect |

## Product cards wear their product's mode

- A card carries `data-theme="yelbolt"`, `data-mode-base="yelbolt-uicp|yelbolt-uno"` and a
  `data-mode` set before paint (inline script in `Products.astro`) and on scheme change
  (`scripts/scheme.ts`).
- Site roles (`--site-*`, `--brand-*`) are declared on `[data-mode]`, so they follow the
  card. @unoff/ui **component tokens** (`--card-*`, `--button-*`) are declared on `:root`
  only and do **not** follow: inside a product card, style with roles and semantic
  `--color-*` variables, and re-declare the `--card-*` tokens you need on the card.
- Every mode used by a card must be in `KEEP_MODES` (`postcss.config.mjs`).
- Visuals: UI Color Palette → `ShadeGrid` with its brand gradient (allowed exception);
  Unoff → `LineGrid`.

## Non-negotiables

Same as the sibling sites: everything is a card; colours only from @unoff/ui variables
(exceptions: the UICP gradient on its card); real links; complete without JS and with
reduced motion; light and dark; one `<h1>`, unique title and description, JSON-LD
(Organization, Person, WebSite, WebPage with the products as an ItemList). Comments only
for a non-obvious why.

## Adding a product

Add it to `src/data/products.ts` (name, tag, text, final URL, `modeBase`, `visual`), add
its modes to `KEEP_MODES`, add its icon to `assets/ticker/` and `home/Ticker.astro`, check
light and dark.
