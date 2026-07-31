import Link from 'next/link'
import type { Post, Author } from '@/lib/posts'

export default function BlogSidebar({
  posts,
  authors,
  currentCategory,
  locale,
}: {
  posts: Post[]
  authors: Author[]
  currentCategory?: string
  locale: string
}) {
  const t = locale === 'it' ? sidebarIt : sidebarEn

  const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)))

  const recentPosts = posts.slice(0, 5)

  return (
    <aside className="space-y-8">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
          {t.categories}
        </h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/${locale}/blog`}
            className={`text-xs px-3 py-1.5 rounded-full transition ${
              !currentCategory
                ? 'bg-[#2d8cff]/20 text-[#2d8cff] border border-[#2d8cff]/30'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            {t.all}
          </Link>
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/${locale}/blog?category=${encodeURIComponent(cat)}`}
              className={`text-xs px-3 py-1.5 rounded-full transition ${
                currentCategory === cat
                  ? 'bg-[#2d8cff]/20 text-[#2d8cff] border border-[#2d8cff]/30'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
          {t.recentPosts}
        </h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group"
            >
              <p className="text-sm text-slate-400 group-hover:text-white transition-colors line-clamp-2">
                {post.title}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {new Date(post.date).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
          {t.subscribe}
        </h3>
        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2d8cff]/30 transition-all group"
        >
          <svg className="w-5 h-5 text-[#2d8cff] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93v-2.83Z"/>
          </svg>
          <div>
            <p className="text-sm text-white group-hover:text-[#2d8cff] transition-colors">{t.rssLabel}</p>
            <p className="text-xs text-slate-500">{t.rssDesc}</p>
          </div>
        </a>
      </div>

      {authors.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            {t.authors}
          </h3>
          <div className="space-y-3">
            {authors.map(author => (
              <div key={author.name} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2d8cff]/20 flex items-center justify-center text-sm font-medium text-[#2d8cff] shrink-0">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-white">{author.name}</p>
                  <p className="text-xs text-slate-500">{author.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}

const sidebarIt = {
  categories: 'Categorie',
  recentPosts: 'Articoli Recenti',
  authors: 'Autori',
  all: 'Tutti',
  subscribe: 'Rimani Aggiornato',
  rssLabel: 'Feed RSS',
  rssDesc: 'Iscriviti al blog',
}

const sidebarEn = {
  categories: 'Categories',
  recentPosts: 'Recent Posts',
  authors: 'Authors',
  all: 'All',
  subscribe: 'Stay Updated',
  rssLabel: 'RSS Feed',
  rssDesc: 'Subscribe to the blog',
}
