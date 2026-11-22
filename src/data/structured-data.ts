/**
 * schema.org builders. Each page picks the ones that describe it.
 */
import { site } from '@/config/site'
import { products } from '@/data/products'

const absolute = (path: string) => new URL(path, site.url).href

export const organizationId = `${site.publisher.url}#organization`
export const websiteId = `${site.url}/#website`
export const authorId = `${site.url}/#aurelien-grimaud`

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: site.name,
  url: site.publisher.url,
  logo: absolute('/icon-512.png'),
  email: site.email,
  description: site.defaultDescription,
  sameAs: [...site.profiles],
  founder: { '@id': authorId },
})

export const person = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': authorId,
  name: site.author.name,
  url: site.author.url,
  jobTitle: `Founder of ${site.name}`,
  sameAs: [...site.author.sameAs],
  worksFor: { '@id': organizationId },
})

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: site.name,
  url: site.url,
  inLanguage: site.locale,
  publisher: { '@id': organizationId },
})

/** The home page: Yelbolt's products as an ItemList of applications. */
export const homePage = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absolute('/')}#webpage`,
  url: absolute('/'),
  name: site.defaultTitle,
  description: site.defaultDescription,
  inLanguage: site.locale,
  isPartOf: { '@id': websiteId },
  about: { '@id': organizationId },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${product.href}/#software`,
        name: product.name,
        url: product.href,
        description: product.description,
        applicationCategory: product.category,
        publisher: { '@id': organizationId },
      },
    })),
  },
})
