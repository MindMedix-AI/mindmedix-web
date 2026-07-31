import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPost, getPosts, getAuthor, getAllSlugs } from '@/lib/posts'
import { mdxComponents } from '@/components/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  return getAllSlugs()
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const post = getPost(slug, locale)
  if (!post) return {}

  const description = post.description
  const image = post.image || 'https://mindmedixai.health/mindmedix_ai_cover.jpeg'

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      types: {
        'application/rss+xml': '/feed.xml',
      },
    },
  }
}

export default async function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}) {
  const post = getPost(slug, locale)
  if (!post) notFound()

  const allPosts = getPosts(locale)
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const author = post.author ? getAuthor(post.author) : undefined

  const date = new Date(post.date).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const t = locale === 'it' ? postIt : postEn

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || 'https://mindmedixai.health/mindmedix_ai_cover.jpeg',
    datePublished: post.date,
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author,
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'MindMedix AI',
      logo: { '@type': 'ImageObject', url: 'https://mindmedixai.health/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mindmedixai.health/${locale}/blog/${slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <article>
          <section className="pt-32 pb-12 px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-sm text-[#2d8cff] hover:text-[#5cadff] transition mb-8"
              >
                ← {t.backToBlog}
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#2d8cff]/10 text-[#2d8cff] border border-[#2d8cff]/20">
                  {post.category}
                </span>
                <time className="text-sm text-slate-500">{date}</time>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {post.description}
              </p>

              {author && (
                <div className="flex items-center gap-4 pb-8 mb-8 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#2d8cff]/20 flex items-center justify-center text-lg font-medium text-[#2d8cff]">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{author.name}</p>
                    <p className="text-xs text-slate-500">{author.role}</p>
                  </div>
                </div>
              )}

              {post.image && (
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-12">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          <section className="pb-16 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-invert prose-lg prose-headings:text-white prose-headings:font-semibold prose-headings:mt-10 prose-headings:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-[#2d8cff] prose-a:no-underline hover:prose-a:text-[#5cadff] prose-strong:text-white prose-code:text-[#2d8cff] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-li:text-slate-300 prose-hr:border-white/10 max-w-none">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                      format: 'mdx',
                    },
                  }}
                />
              </div>
            </div>
          </section>

          <section className="pb-16 px-6">
            <div className="max-w-3xl mx-auto">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-500 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-white/10">
                {prevPost ? (
                  <Link
                    href={`/${locale}/blog/${prevPost.slug}`}
                    className="group text-left"
                  >
                    <span className="text-xs text-slate-500">{t.prevPost}</span>
                    <p className="text-sm text-white group-hover:text-[#2d8cff] transition-colors line-clamp-1">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    href={`/${locale}/blog/${nextPost.slug}`}
                    className="group text-right"
                  >
                    <span className="text-xs text-slate-500">{t.nextPost}</span>
                    <p className="text-sm text-white group-hover:text-[#2d8cff] transition-colors line-clamp-1">
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

const postEn = {
  backToBlog: 'Back to Blog',
  prevPost: 'Previous Post',
  nextPost: 'Next Post',
}

const postIt = {
  backToBlog: 'Torna al Blog',
  prevPost: 'Articolo Precedente',
  nextPost: 'Articolo Successivo',
}
