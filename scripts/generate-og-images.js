// scripts/generate-og-images.js
// 모든 포스트별로 1200×630 OG 이미지를 자체 생성 (외부 API 불필요)
// public/og/{category}-{slug}.png 로 저장
// PostRenderer에서 og:image meta로 사용 가능

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public', 'og')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const ENTITIES = {
  countries:  { label: '국가',     bg1: '#E0F2FE', bg2: '#CCFBF1' },
  regions:    { label: '지역',     bg1: '#CCFBF1', bg2: '#DBEAFE' },
  spots:      { label: '스팟',     bg1: '#DCFCE7', bg2: '#CCFBF1' },
  hotels:     { label: '호텔',     bg1: '#FEF3C7', bg2: '#FED7AA' },
  themes:     { label: '테마',     bg1: '#EDE9FE', bg2: '#FCE7F3' },
  guides:     { label: '가이드',   bg1: '#F1F5F9', bg2: '#E0F2FE' },
  situations: { label: '상황별',   bg1: '#CFFAFE', bg2: '#E0F2FE' },
  tools:      { label: '계산기',   bg1: '#E0F2FE', bg2: '#DBEAFE' },
  compares:   { label: '비교',     bg1: '#FEE2E2', bg2: '#FEF3C7' },
  addons:     { label: '여행용품', bg1: '#FFF7ED', bg2: '#FEF3C7' },
}

const SITE_NAME = '트립스팟'
const SITE_URL = 'tripspot.ambitstock.com'

function escapeXml(s) {
  return String(s || '').replace(/[<>&"']/g, c => ({ '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;' }[c]))
}

function svgFor({ title, category, label, bg1, bg2, flag, subtitle }) {
  // 긴 제목은 두 줄로 분할
  const t = String(title || '').slice(0, 50)
  const line1 = t.length > 28 ? t.slice(0, 28).replace(/\s+\S*$/, '') : t
  const line2 = t.length > 28 ? t.slice(line1.length).trim().slice(0, 30) : ''
  const sub = subtitle ? subtitle.slice(0, 60) : ''

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
    <linearGradient id="mark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0EA5E9" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="60" y="60" width="120" height="120" rx="28" fill="url(#mark)" />
  <text x="120" y="158" text-anchor="middle" font-family="-apple-system, sans-serif" font-weight="900" font-size="92" fill="#FFFFFF">T</text>
  <circle cx="158" cy="170" r="10" fill="#FFFFFF" />
  <text x="200" y="115" font-family="-apple-system, sans-serif" font-weight="800" font-size="36" fill="#0F172A">${SITE_NAME}</text>
  <text x="200" y="160" font-family="-apple-system, sans-serif" font-weight="600" font-size="22" fill="#475569">${SITE_URL}</text>

  <rect x="60" y="240" width="${30 + label.length * 22}" height="42" rx="8" fill="#0F172A" />
  <text x="${75}" y="270" font-family="-apple-system, sans-serif" font-weight="800" font-size="18" fill="#FFFFFF">${escapeXml(label)}</text>

  ${flag ? `<text x="1140" y="180" text-anchor="end" font-family="-apple-system, sans-serif" font-size="120">${escapeXml(flag)}</text>` : ''}

  <text x="60" y="360" font-family="-apple-system, sans-serif" font-weight="900" font-size="56" fill="#0F172A">${escapeXml(line1)}</text>
  ${line2 ? `<text x="60" y="430" font-family="-apple-system, sans-serif" font-weight="900" font-size="56" fill="#0F172A">${escapeXml(line2)}</text>` : ''}
  ${sub ? `<text x="60" y="${line2 ? 490 : 430}" font-family="-apple-system, sans-serif" font-weight="500" font-size="26" fill="#475569">${escapeXml(sub)}</text>` : ''}

  <text x="60" y="580" font-family="-apple-system, sans-serif" font-weight="500" font-size="20" fill="#64748B">국가 → 지역 → 스팟 · 호텔·여행 가이드·계산기</text>
</svg>`
}

async function generateOne(category, slug, meta) {
  const cat = ENTITIES[category]
  const svg = svgFor({
    title: meta.title || meta.spotName || meta.hotelName || meta.regionName || meta.countryName || meta.toolName || meta.situationName || meta.name,
    category,
    label: cat.label,
    bg1: cat.bg1,
    bg2: cat.bg2,
    flag: meta.flag,
    subtitle: meta.summary || meta.description?.slice(0, 80),
  })
  const outPath = path.join(OUT_DIR, `${category}-${slug}.png`)
  await sharp(Buffer.from(svg)).png().toFile(outPath)
}

async function main() {
  const sources = [
    ['countries',  require('../data/countries')],
    ['regions',    require('../data/regions').map(r => ({ ...r, slug: `${r.countrySlug}-${r.slug}` }))],
    ['spots',      require('../data/spots').map(s => ({ ...s, slug: `${s.countrySlug}-${s.slug}` }))],
    ['hotels',     require('../data/hotels')],
    ['themes',     require('../data/themes')],
    ['guides',     require('../data/guides')],
    ['situations', require('../data/situations')],
    ['tools',      require('../data/tools')],
    ['compares',   require('../data/compares')],
    ['addons',     require('../data/addons')],
  ]

  let count = 0
  for (const [cat, items] of sources) {
    for (const it of items) {
      try {
        await generateOne(cat, it.slug, it)
        count++
      } catch (e) {
        console.error('  ✗', cat, it.slug, e.message)
      }
    }
    console.log('✓', cat, items.length, '개')
  }
  console.log('\n총', count, 'OG 이미지 생성')
}

main().catch(err => { console.error(err); process.exit(1) })
