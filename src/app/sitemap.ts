import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://freedomrisingusa.org'
  const now = new Date()

  type Entry = {
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }

  // Keep this list in sync with the routes under src/app/**/page.tsx
  const routes: Entry[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/parade-brief', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/parade-registration', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/donation-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/security-acknowledgements', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/vulnerability-disclosure-policy', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
