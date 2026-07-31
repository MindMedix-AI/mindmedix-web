import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const AUTHORS_DIR = path.join(process.cwd(), 'content', 'authors')

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  category: string
  image?: string
  author?: string
  tags?: string[]
  content: string
  locale: string
}

export interface Author {
  name: string
  role: string
  bio: string
  avatar?: string
  linkedin?: string
}

export function getPosts(locale: string): Post[] {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug: file.replace(/\.(mdx|md)$/, ''),
        ...data,
        content,
        locale,
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string, locale: string): Post | null {
  const dir = path.join(CONTENT_DIR, locale)
  for (const ext of ['.mdx', '.md']) {
    const filePath = path.join(dir, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        ...data,
        content,
        locale,
      } as Post
    }
  }
  return null
}

export function getAuthor(name: string): Author | undefined {
  if (!fs.existsSync(AUTHORS_DIR)) return undefined
  const files = fs.readdirSync(AUTHORS_DIR).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(AUTHORS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    if (data.name === name) return data as Author
  }
  return undefined
}

export function getAllAuthors(): Author[] {
  if (!fs.existsSync(AUTHORS_DIR)) return []
  const files = fs.readdirSync(AUTHORS_DIR).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(AUTHORS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    return data as Author
  })
}

export function getCategories(posts: Post[]): string[] {
  return Array.from(new Set(posts.map(p => p.category).filter(Boolean)))
}

export function getAllSlugs(): { slug: string; locale: string }[] {
  const slugs: { slug: string; locale: string }[] = []
  for (const locale of ['en', 'it']) {
    const dir = path.join(CONTENT_DIR, locale)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    for (const file of files) {
      slugs.push({ slug: file.replace(/\.(mdx|md)$/, ''), locale })
    }
  }
  return slugs
}

export async function serializeMdx(content: string) {
  return serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
      format: 'mdx',
    },
  })
}
