# yelbolt.co

The website of [Yelbolt](https://yelbolt.co), the studio behind
[UI Color Palette](https://ui-color-palette.com) and [Unoff](https://unoff.dev). Static
[Astro](https://astro.build) site on the [@unoff/ui](https://ui.unoff.dev) design system,
deployed on Netlify.

## Develop

```bash
nvm use            # Node 24 (.nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static build to dist/
npm run preview
```

## Deploy (Netlify)

`netlify.toml` holds everything: build command `npm run build`, publish directory `dist`,
Node 24, long cache on `/_astro/*`, security headers and redirects. No environment variable
is needed. Netlify builds every push to `master` and a deploy preview for every pull request
(`master` only takes pull requests).

Optional after the first deploy: add `yelbolt.co` to Google Search Console and submit
`https://yelbolt.co/sitemap-index.xml` (set `site.googleSiteVerification` in
`src/config/site.ts` if you verify with a meta tag).

## Structure

| Path | What |
| --- | --- |
| `src/pages/` | `/`, `404`, `robots.txt`, `llms.txt`, `site.webmanifest` |
| `src/data/products.ts` | Hero copy and product cards |
| `src/components/home/` | Hero, ticker, product cards |
| `src/styles/` | Tokens (@unoff/ui), global styles, motion |
| `.claude/` | Conventions skill and agents |

## License

MPL 2.0, Yelbolt.
