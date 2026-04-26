// scripts/generate-feeds.js — RSS 2.0 + Atom 1.0 생성
const fs = require('fs')
const path = require('path')

const posts = require('../data/posts')

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://travelmoa.ambitstock.com'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '여행모아'
const FEED_DESC = '국가·지역·스팟·호텔·여행 가이드·계산기 — 한국관광공사·외교부 출처 우선의 중립 큐레이션.'

const recent = [...posts]
  .filter(p => p.updatedAt || p.publishedAt)
  .sort((a, b) => (b.updatedAt || b.publishedAt || '').localeCompare(a.updatedAt || a.publishedAt || ''))
  .slice(0, 30)

function rfc822(dateStr) {
  if (!dateStr) return new Date().toUTCString()
  return new Date(dateStr + 'T00:00:00+09:00').toUTCString()
}
function iso(dateStr) {
  if (!dateStr) return new Date().toISOString()
  return new Date(dateStr + 'T00:00:00+09:00').toISOString()
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE}/</link>
    <description>${FEED_DESC}</description>
    <language>ko-KR</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${SITE}/favicon-96x96.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE}/</link>
    </image>
${recent.map(p => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${SITE}${p.url}</link>
      <guid isPermaLink="true">${SITE}${p.url}</guid>
      <pubDate>${rfc822(p.updatedAt || p.publishedAt)}</pubDate>
      <category><![CDATA[${p.categoryLabel || p.category}]]></category>
      <description><![CDATA[${p.description || ''}]]></description>
    </item>`).join('\n')}
  </channel>
</rss>
`

const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="ko-KR">
  <title>${SITE_NAME}</title>
  <link href="${SITE}/" />
  <link rel="self" type="application/atom+xml" href="${SITE}/atom.xml" />
  <id>${SITE}/</id>
  <updated>${new Date().toISOString()}</updated>
  <subtitle>${FEED_DESC}</subtitle>
${recent.map(p => `  <entry>
    <title><![CDATA[${p.title}]]></title>
    <link href="${SITE}${p.url}" />
    <id>${SITE}${p.url}</id>
    <updated>${iso(p.updatedAt || p.publishedAt)}</updated>
    <category term="${p.categoryLabel || p.category}" />
    <summary><![CDATA[${p.description || ''}]]></summary>
  </entry>`).join('\n')}
</feed>
`

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), rss)
fs.writeFileSync(path.join(__dirname, '..', 'public', 'atom.xml'), atom)
console.log('✓ rss.xml / atom.xml (', recent.length, 'items)')
