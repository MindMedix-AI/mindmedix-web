import { getPosts } from '@/lib/posts'

export const dynamic = 'force-dynamic'

const BASE_URL = 'https://mindmedixai.health'

export async function GET() {
  const enPosts = getPosts('en')
  const itPosts = getPosts('it')

  const allPosts = [...enPosts, ...itPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const items = allPosts
    .map(
      post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/${post.locale}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/${post.locale}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.category ? `<category>${post.category}</category>` : ''}
      ${post.author ? `<author>${post.author}</author>` : ''}
    </item>`
    )
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/feed-style.xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>MindMedix AI Blog</title>
    <link>${BASE_URL}/en/blog</link>
    <description>Insights on predictive workforce intelligence, hospital operations optimization, AI in healthcare, and operational efficiency for European hospitals.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
