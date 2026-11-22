/**
 * Light / dark switching. The scheme lives on <html> (`data-scheme`);
 * `data-mode` is derived from it, on <html> and on every `[data-mode-base]`
 * block that wears another brand's @unoff/ui mode.
 */
import { site } from '@/config/site'

export type Scheme = 'light' | 'dark'

const root = document.documentElement

export const currentScheme = (): Scheme =>
  root.dataset.scheme === 'dark' ? 'dark' : 'light'

export const applyScheme = (scheme: Scheme) => {
  root.dataset.scheme = scheme
  root.dataset.mode = `${site.mode}-${scheme}`
  for (const el of document.querySelectorAll<HTMLElement>('[data-mode-base]'))
    el.dataset.mode = `${el.dataset.modeBase}-${scheme}`
}

export const saveScheme = (scheme: Scheme) => {
  applyScheme(scheme)
  try {
    localStorage.setItem(site.themeStorageKey, scheme)
  } catch {
    // Private mode or blocked storage: the choice lasts for this page only.
  }
}

applyScheme(currentScheme())
