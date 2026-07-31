import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import BlogSidebar from '@/components/BlogSidebar'
import { getPosts, getAllAuthors } from '@/lib/posts'

const POSTS_PER_PAGE = 9

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Blog — Insights on Healthcare AI & Operations' : 'Blog — Approfondimenti su AI Sanitaria e Operazioni Ospedaliere',
    description: isEn
      ? 'Expert insights on predictive workforce intelligence, hospital operations optimization, AI in healthcare, and operational efficiency for European hospitals.'
      : 'Approfondimenti su intelligenza operativa predittiva, ottimizzazione delle operazioni ospedaliere, AI in sanità e efficienza operativa per ospedali europei.',
    openGraph: {
      title: isEn ? 'MindMedix AI Blog' : 'Blog MindMedix AI',
      description: isEn
        ? 'Insights on healthcare AI, workforce intelligence, and hospital operations.'
        : 'Approfondimenti su AI sanitaria, intelligenza della forza lavoro e operazioni ospedaliere.',
    },
    alternates: {
      canonical: `/${locale}/blog`,
      types: {
        'application/rss+xml': '/feed.xml',
      },
    },
  }
}

export default function BlogPage({
  params: { locale },
  searchParams: { category, page },
}: {
  params: { locale: string }
  searchParams: { category?: string; page?: string }
}) {
  const allPosts = getPosts(locale)
  const currentPage = Math.max(1, Number(page) || 1)
  const currentCategory = category || undefined

  const filtered = currentCategory
    ? allPosts.filter(p => p.category === currentCategory)
    : allPosts

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginatedPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const authors = getAllAuthors()

  const t = locale === 'it' ? blogIt : blogEn

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-sm text-[#2d8cff] hover:text-[#5cadff] transition mb-4"
              >
                {t.blogLabel}
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t.title}
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
              <div>
                {paginatedPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginatedPosts.map(post => (
                      <BlogCard key={post.slug} post={post} locale={locale} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-500">
                    <p className="text-lg mb-2">{t.noPosts}</p>
                    <Link
                      href={`/${locale}/blog`}
                      className="text-sm text-[#2d8cff] hover:text-[#5cadff] transition"
                    >
                      {t.viewAll}
                    </Link>
                  </div>
                )}

                {totalPages > 1 && (
                  <nav className="mt-12 flex justify-center gap-2">
                    {currentPage > 1 && (
                      <Link
                        href={`/${locale}/blog?page=${currentPage - 1}${currentCategory ? `&category=${encodeURIComponent(currentCategory)}` : ''}`}
                        className="px-4 py-2 text-sm rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition"
                      >
                        {t.previous}
                      </Link>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <Link
                        key={p}
                        href={`/${locale}/blog?page=${p}${currentCategory ? `&category=${encodeURIComponent(currentCategory)}` : ''}`}
                        className={`px-4 py-2 text-sm rounded-lg transition ${
                          p === currentPage
                            ? 'bg-[#2d8cff] text-white'
                            : 'border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {p}
                      </Link>
                    ))}
                    {currentPage < totalPages && (
                      <Link
                        href={`/${locale}/blog?page=${currentPage + 1}${currentCategory ? `&category=${encodeURIComponent(currentCategory)}` : ''}`}
                        className="px-4 py-2 text-sm rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition"
                      >
                        {t.next}
                      </Link>
                    )}
                  </nav>
                )}
              </div>

              <div className="hidden lg:block">
                <BlogSidebar
                  posts={allPosts}
                  authors={authors}
                  currentCategory={currentCategory}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const blogEn = {
  blogLabel: 'Blog',
  title: 'Insights on Healthcare AI & Operations',
  description:
    'Expert perspectives on predictive workforce intelligence, hospital operations optimization, and the future of AI in European healthcare.',
  noPosts: 'No posts found in this category.',
  viewAll: 'View all posts →',
  previous: '← Previous',
  next: 'Next →',
}

const blogIt = {
  blogLabel: 'Blog',
  title: 'Approfondimenti su AI Sanitaria e Operazioni',
  description:
    'Prospettive esperte su intelligenza operativa predittiva, ottimizzazione delle operazioni ospedaliere e il futuro dell\'AI nella sanità europea.',
  noPosts: 'Nessun articolo trovato in questa categoria.',
  viewAll: 'Vedi tutti gli articoli →',
  previous: '← Precedente',
  next: 'Successivo →',
}
