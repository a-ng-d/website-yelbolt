/**
 * Single source of truth for site-wide metadata and links.
 * Pages and components read from here instead of hardcoding URLs.
 */

export const site = {
  name: 'Yelbolt',
  url: 'https://yelbolt.co',
  locale: 'en',
  /** @unoff/ui mode family: `<mode>-light` / `<mode>-dark` (keep in sync with postcss.config.mjs). */
  mode: 'yelbolt-ylb',
  themeStorageKey: 'yelbolt-theme',
  defaultTitle: 'Yelbolt — Open Apps and Frameworks for Designers',
  defaultDescription:
    'Yelbolt crafts open-apps, frameworks and plugins for designers and developers who build on Figma, Penpot, Sketch and beyond: UI Color Palette and Unoff.',
  defaultOgImage: '/og-default.png',
  email: 'hello@yelbolt.co',
  license: 'MPL 2.0',
  author: {
    name: 'Aurélien Grimaud',
    url: 'https://an.gd/',
    sameAs: [
      'https://an.gd/',
      'https://github.com/a-ng-d',
      'https://www.linkedin.com/in/augrimaud',
    ],
  },
  /** Official profiles (Organization `sameAs`). Final URLs, never short links. */
  profiles: ['https://github.com/yelbolt', 'https://discord.com/invite/HjWeQYg2Yb'],
  /** X handle with the @. Twitter tags are omitted while null. */
  twitterHandle: null as string | null,
  publisher: {
    name: 'Yelbolt',
    url: 'https://yelbolt.co/',
  },
  /** Google Search Console verification, or null when not set up. */
  googleSiteVerification: null as string | null,
} as const

export interface NavLink {
  label: string
  href: string
}

export const links = {
  linkedin: 'https://www.linkedin.com/in/augrimaud',
  coffee: 'https://buymeacoffee.com/a_ng_d',
  github: 'https://github.com/yelbolt',
  community: 'https://discord.com/invite/HjWeQYg2Yb',
  author: 'https://an.gd/',
  termsOfSale:
    'https://www.figma.com/design/1RV7cxIDvXzCWUmDOqL1Vc?node-id=4036-1177',
  uiColorPalette: 'https://ui-color-palette.com',
  unoff: 'https://unoff.dev',
} as const

export const footerNav = {
  resources: [
    { label: 'Contribution', href: links.github },
    { label: 'Community', href: links.community },
  ],
} satisfies Record<string, NavLink[]>

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)
