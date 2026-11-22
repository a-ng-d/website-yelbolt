import type { APIRoute } from 'astro'

import { links, site } from '@/config/site'
import { products } from '@/data/products'

/** llms.txt (https://llmstxt.org): Markdown map of the site for LLMs. */
export const GET: APIRoute = () => {
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.defaultDescription}`,
    '',
    `${site.name} is the studio of ${site.author.name}. Its tools are open source (${site.license}).`,
    '',
    '## Products',
    '',
    ...products.map(
      (product) => `- [${product.name}](${product.href}): ${product.description}`
    ),
    '',
    '## Links',
    '',
    `- [GitHub](${links.github})`,
    `- [Community](${links.community})`,
    `- [Contact](mailto:${site.email})`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
