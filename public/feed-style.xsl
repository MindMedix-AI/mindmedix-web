<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="rss/channel/title"/> — RSS Feed</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #0a1929;
            color: #e2e8f0;
            line-height: 1.6;
          }
          .container {
            max-width: 720px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
          }
          .header {
            text-align: center;
            padding: 3rem 0 2rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            margin-bottom: 2rem;
          }
          .header h1 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 0.5rem;
          }
          .header p {
            color: #94a3b8;
            font-size: 0.95rem;
          }
          .header .meta {
            margin-top: 0.75rem;
            font-size: 0.8rem;
            color: #64748b;
          }
          .header .meta a {
            color: #2d8cff;
            text-decoration: none;
          }
          .header .meta a:hover { color: #5cadff; }
          .feed-icon {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 1rem;
            padding: 0.4rem 1rem;
            border-radius: 999px;
            background: rgba(45,140,255,0.1);
            border: 1px solid rgba(45,140,255,0.2);
            color: #2d8cff;
            font-size: 0.8rem;
            text-decoration: none;
          }
          .feed-icon:hover { background: rgba(45,140,255,0.2); }
          .feed-url { margin-top: 0.75rem; text-align: center; }
          .feed-url input {
            width: 100%;
            max-width: 480px;
            padding: 0.5rem 0.75rem;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 8px;
            color: #94a3b8;
            font-size: 0.8rem;
            font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
            text-align: center;
            cursor: text;
            outline: none;
          }
          .feed-url input:focus { border-color: #2d8cff; color: #fff; }
          .feed-url input::selection { background: rgba(45,140,255,0.3); }
          .item {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1rem;
          }
          .item:hover { background: rgba(255,255,255,0.06); }
          .item-title {
            font-size: 1.15rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 0.4rem;
          }
          .item-title a {
            color: #fff;
            text-decoration: none;
          }
          .item-title a:hover { color: #2d8cff; }
          .item-meta {
            font-size: 0.8rem;
            color: #64748b;
            margin-bottom: 0.6rem;
          }
          .item-meta .cat {
            display: inline-block;
            padding: 0.15rem 0.5rem;
            border-radius: 999px;
            background: rgba(45,140,255,0.1);
            color: #2d8cff;
            font-size: 0.75rem;
            border: 1px solid rgba(45,140,255,0.15);
            margin-right: 0.5rem;
          }
          .item-desc {
            color: #94a3b8;
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .footer {
            text-align: center;
            padding: 2rem 0;
            border-top: 1px solid rgba(255,255,255,0.08);
            margin-top: 2rem;
            font-size: 0.8rem;
            color: #64748b;
          }
          .footer a { color: #2d8cff; text-decoration: none; }
          .footer a:hover { color: #5cadff; }
          @media (max-width: 600px) {
            .container { padding: 1rem; }
            .header h1 { font-size: 1.35rem; }
            .item { padding: 1rem; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p><xsl:value-of select="rss/channel/description"/></p>
            <div class="meta">
              <xsl:value-of select="count(rss/channel/item)"/> posts · 
              Last updated <xsl:value-of select="substring(rss/channel/lastBuildDate,1,16)"/> · 
              <a href="{rss/channel/link}">Visit Blog →</a>
            </div>
            <div class="feed-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:4px">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93v-2.83Z"/>
              </svg>
              Subscribe with any RSS reader
            </div>
            <div class="feed-url">
              <input type="text" value="{rss/channel/atom:link/@href}" readonly="readonly" onclick="this.select()"/>
            </div>
          </div>

          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <div class="item-title">
                <a href="{link}"><xsl:value-of select="title"/></a>
              </div>
              <div class="item-meta">
                <span class="cat"><xsl:value-of select="category"/></span>
                <xsl:value-of select="substring(pubDate,1,16)"/>
                <xsl:if test="author">
                  · By <xsl:value-of select="author"/>
                </xsl:if>
              </div>
              <div class="item-desc">
                <xsl:value-of select="description"/>
              </div>
            </div>
          </xsl:for-each>

          <div class="footer">
            <a href="{rss/channel/link}">← Back to Blog</a> · 
            Powered by MindMedix AI
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
