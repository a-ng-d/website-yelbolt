import { links } from '@/config/site'

export interface Product {
  id: 'uicp' | 'unoff'
  name: string
  tag: string
  text: string
  href: string
  /** @unoff/ui mode family the card wears (`<base>-light|dark`). */
  modeBase: 'yelbolt-uicp' | 'yelbolt-uno'
  visual: 'shades' | 'lines'
  /** For JSON-LD and llms.txt. */
  category: 'DesignApplication' | 'DeveloperApplication'
  description: string
}

export const hero = {
  title: 'Crafting open-apps, frameworks…',
  tagline:
    '…and plugins for designers and developers who build on Figma, Penpot, Sketch and beyond.',
  cta: { label: 'Take a closer look', href: '#products' },
}

export const products: Product[] = [
  {
    id: 'uicp',
    name: 'UI Color Palette',
    tag: 'Mini-app',
    text: 'Color Palettes that meet WCAG Guidelines and Operations',
    href: links.uiColorPalette,
    modeBase: 'yelbolt-uicp',
    visual: 'shades',
    category: 'DesignApplication',
    description:
      'Accessible color palettes (WCAG and APCA) for Figma, Penpot, Sketch, Framer and AI assistants.',
  },
  {
    id: 'unoff',
    name: 'Unoff',
    tag: 'Framework',
    text: 'The fastest way to build plugins for the design marketplaces',
    href: links.unoff,
    modeBase: 'yelbolt-uno',
    visual: 'lines',
    category: 'DeveloperApplication',
    description:
      'A free, open-source toolkit to build, ship and monetize Figma and Penpot plugins.',
  },
]
