# yelbolt.co

Static Astro site of the Yelbolt studio, built with **@unoff/ui** (theme `yelbolt`, modes
`yelbolt-ylb-light|dark`; product cards wear `yelbolt-uicp-*` and `yelbolt-uno-*`). Design
source: Figma file `OCuxjzljBCvDse4Lb57EhK`, frame `1:6388`. Core shared with
`website-ui-color-palette` and `unoff-website`.

## Load before working

| Task | Skill |
| --- | --- |
| Any page, section, component, style, motion change | `yelbolt-website` (and the sibling skills it points to) |
| SEO/GEO, metadata, structured data | `seo-geo` |
| Astro how-tos | `astro` |

## Routing (agents in `.claude/agents/`)

Entry point: `claude --agent site-orchestrator`. Markup, CSS, components, layout, motion,
dark mode → `style-guardian`. Pure code or a verified one-line fix → no reviewer.

## Non-negotiables

- Everything is a card; colours, type, spacing, radii only from @unoff/ui variables /
  `--site-*` roles (exception: the UICP gradient on its product card).
- Real `<a href>`; content in the HTML at build time; complete with no JS and with reduced
  motion; light and dark both work.
- One `<h1>`, unique title and description, JSON-LD.
- Links are final URLs, never short links.

## Code comments

Comments are rare. Code, names and tokens carry the "what"; a comment exists only for a
**why** the reader cannot recover from the code. Reading noise is a defect. The default
is no comment; when in doubt, leave it out.

**Delete test**: remove the comment and reread the code. If a reader loses nothing they
could not get from the code in a few seconds, the comment stays deleted.

Keep (short, one to three lines):

- a non-obvious constraint, browser quirk or workaround, with the reason;
- an invariant or **keep-in-sync** link between two files (e.g. the REVEAL selector list
  in `motion.css` and `reveal.ts`);
- a module header that states a file's role when it is not evident from its name;
- a documented exception to a rule (a hex value, a `!important`, an a11y trade-off);
- JSDoc on a shared helper, type or prop only for what its name and type cannot say: a
  unit, a format, a trust level, a side effect, a non-obvious rendering rule.

Do not write:

- comments that restate the next line or the selector (`/* Header */`, `// loop over items`);
- JSDoc or prop docs that paraphrase the name or the type (`/** The docs URL. */ docs`,
  `/** Every platform page. */ platformPages`);
- module headers that only repeat the file name or list what the file obviously contains;
- `TODO`, `FIXME`, `XXX`, `HACK` or "to validate" markers: open work goes in a GitHub
  issue or the relevant `docs/` file, never in the code;
- narration of a change or its history ("now centred", "fixed", "added for the Menu toggle");
- section banners and decorative separators, except one per long CSS file where it aids
  navigation;
- commented-out code (git has it);
- a comment on every block "for consistency".

When editing code, leave the existing comments that still hold true, update those your
change made false, delete the ones that fail the delete test, and add none by default.

## Shared core

From `website-ui-color-palette` / `unoff-website`; port a fix to the other repos:
`src/styles/global.css`, `motion.css`, `unoff-links.css`, `tokens.css`;
`src/scripts/reveal.ts` (here `.ticker` is also a loop), `scheme.ts`;
`src/components/seo/Seo.astro`; `src/components/ui/` Button, TertiaryLink, Tag,
LineGrid (from unoff), ShadeGrid (from UICP); `postcss.config.mjs` (modes differ),
`astro.config.mjs`, `scripts/unoff-tokens.mjs`.

## Commands

- `npm run build` — spinner token, `astro check` (0 errors), build to `dist/`.
- `npm run dev` — use another port than 4321 for your own server; never stop the user's.
- Don't commit unless asked.
