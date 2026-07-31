import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mindmedixai.health'
  const now = new Date()
  const weekly = now
  const monthly = new Date(now.getFullYear(), now.getMonth(), 1)

  const locales = ['en', 'it']

  const pages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/demo', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/team', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/blog', priority: 0.9, changeFreq: 'weekly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: page.changeFreq === 'yearly' ? monthly : weekly,
        changeFrequency: page.changeFreq,
        priority: page.priority,
      })
    }
  }

  const slugs = getAllSlugs()
  for (const { slug, locale } of slugs) {
    entries.push({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: weekly,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  }

  entries.push({
    url: baseUrl,
    lastModified: weekly,
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  return entries
}
