import Link from 'next/link'
import type { Post } from '@/lib/posts'

export default function BlogCard({ post, locale }: { post: Post; locale: string }) {
  const date = new Date(post.date).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all overflow-hidden">
      {post.image && (
        <Link href={`/${locale}/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      )}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#2d8cff]/10 text-[#2d8cff] border border-[#2d8cff]/20">
            {post.category}
          </span>
          <time className="text-xs text-slate-500">{date}</time>
        </div>
        <Link href={`/${locale}/blog/${post.slug}`}>
          <h3 className="text-lg font-semibold text-white group-hover:text-[#2d8cff] transition-colors mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {post.description}
        </p>
        {post.author && (
          <div className="mt-auto flex items-center gap-2 pt-4 border-t border-white/5">
            <div className="w-7 h-7 rounded-full bg-[#2d8cff]/20 flex items-center justify-center text-xs font-medium text-[#2d8cff]">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs text-slate-500">{post.author}</span>
          </div>
        )}
      </div>
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="absolute inset-0"
        aria-label={post.title}
      />
    </article>
  )
}
