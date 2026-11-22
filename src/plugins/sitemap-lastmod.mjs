/**
 * `lastmod` of each sitemap URL: last commit of the page's content files.
 * Without git history, lastmod is omitted, never faked.
 */
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))

const sources = {
  '/': ['src/pages/index.astro', 'src/data/products.ts', 'src/components/home'],
}

const gitDate = (paths) => {
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', ...paths],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim()
    return out ? new Date(out) : undefined
  } catch {
    return undefined
  }
}

/** @param {string} url absolute URL of a sitemap entry */
export const lastmodFor = (url) => {
  const path = new URL(url).pathname.replace(/(.)\/$/, '$1')
  return gitDate(sources[path] ?? [`src/pages${path}.astro`])
}
