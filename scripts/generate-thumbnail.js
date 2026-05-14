#!/usr/bin/env node
/**
 * scripts/generate-thumbnail.js
 * 개별 포스트 발행 직후 1200×630 OG 썸네일 즉시 생성
 * - auto-post.js에서 savePost() 후 호출
 * - 배경 이미지(URL) 있으면 다운로드 후 합성, 없으면 그라디언트
 * - public/og/{entity}-{slug}.png 저장
 *
 * CLI: node scripts/generate-thumbnail.js --entity hotel --slug marina-bay-sands --title "마리나 베이 샌즈" [--subtitle "싱가포르 5성"] [--imageUrl "https://..."]
 */

'use strict'

const fs   = require('fs')
const path = require('path')
const https = require('https')
const http  = require('http')
const { spawnSync } = require('child_process')

let sharp
try { sharp = require('sharp') } catch (e) {
  console.error('sharp 없음. npm install sharp 후 재시도')
  process.exit(1)
}

const ROOT    = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public', 'og')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

// ─── 엔티티별 그라디언트 색상 ──────────────────────────────
const GRADIENTS = {
  hotel:     ['#FEF3C7', '#FED7AA'],
  country:   ['#E0F2FE', '#CCFBF1'],
  region:    ['#CCFBF1', '#DBEAFE'],
  spot:      ['#DCFCE7', '#CCFBF1'],
  theme:     ['#EDE9FE', '#FCE7F3'],
  guide:     ['#F1F5F9', '#E0F2FE'],
  situation: ['#CFFAFE', '#E0F2FE'],
  tool:      ['#E0F2FE', '#DBEAFE'],
  compare:   ['#FEE2E2', '#FEF3C7'],
  addon:     ['#FFF7ED', '#FEF3C7'],
}

const ENTITY_LABELS = {
  hotel: '호텔', country: '국가', region: '지역', spot: '스팟',
  theme: '테마', guide: '가이드', situation: '상황별', tool: '계산기',
  compare: '비교', addon: '여행용품',
}

const BRAND_COLOR  = '#0EA5E9'
const BRAND_COLOR2 = '#14B8A6'
const SITE_NAME    = '트립스팟 | travel.ambitstock.com'

// ─── 텍스트 줄 분할 ────────────────────────────────────────
function splitTitle(title, maxChars = 18) {
  const t = String(title || '').slice(0, 50)
  if (t.length <= maxChars) return [t, '']
  // 공백 또는 midpoint에서 분리
  const mid = t.slice(0, maxChars)
  const cut = mid.lastIndexOf(' ')
  if (cut > 8) return [t.slice(0, cut), t.slice(cut + 1).slice(0, maxChars)]
  return [t.slice(0, maxChars), t.slice(maxChars).slice(0, maxChars)]
}

function escapeXml(s) {
  return String(s || '').replace(/[<>&"']/g, c =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c])
  )
}

// ─── 그라디언트 배경 SVG 생성 ──────────────────────────────
function makeSvg({ title, subtitle, entity, label, bg1, bg2 }) {
  const [line1, line2] = splitTitle(title)
  const sub = (subtitle || '').slice(0, 50)
  const titleY = line2 ? 240 : 270
  const fontSize1 = line1.length > 14 ? 68 : 80

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_COLOR}"/>
      <stop offset="100%" stop-color="${BRAND_COLOR2}"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 장식 원 -->
  <circle cx="1050" cy="120" r="220" fill="${BRAND_COLOR}" opacity="0.06"/>
  <circle cx="150"  cy="520" r="160" fill="${BRAND_COLOR2}" opacity="0.06"/>

  <!-- 상단 브랜드 바 -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#accent)"/>

  <!-- 엔티티 뱃지 -->
  <rect x="60" y="60" width="${(label || entity).length * 18 + 28}" height="42" rx="21" fill="${BRAND_COLOR}"/>
  <text x="${60 + (label || entity).length * 9 + 14}" y="87" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">${escapeXml(label || entity)}</text>

  <!-- 제목 line1 -->
  <text x="60" y="${titleY}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="${fontSize1}" font-weight="900" fill="#0F172A">${escapeXml(line1)}</text>
  ${line2 ? `<text x="60" y="${titleY + fontSize1 + 10}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="${fontSize1}" font-weight="900" fill="#0F172A">${escapeXml(line2)}</text>` : ''}

  <!-- 부제목 -->
  ${sub ? `<text x="60" y="${line2 ? titleY + fontSize1 * 2 + 30 : titleY + fontSize1 + 24}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="32" font-weight="400" fill="#475569">${escapeXml(sub)}</text>` : ''}

  <!-- 구분선 + 사이트명 -->
  <rect x="60" y="545" width="1080" height="2" fill="#CBD5E1"/>
  <text x="60" y="590" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="24" fill="#94A3B8">${escapeXml(SITE_NAME)}</text>
</svg>`
}

// ─── 이미지 다운로드 (HTTPS/HTTP) ──────────────────────────
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { timeout: 10000 }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve(downloadImage(res.headers.location))
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`))
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')) })
  })
}

// ─── 썸네일 생성 메인 ──────────────────────────────────────
async function generateThumbnail({ entity, slug, title, subtitle, imageUrl } = {}) {
  if (!entity || !slug || !title) {
    throw new Error('entity, slug, title 필수')
  }
  const outFile = path.join(OUT_DIR, `${entity}-${slug}.png`)
  const [bg1, bg2] = GRADIENTS[entity] || ['#E0F2FE', '#CCFBF1']
  const label = ENTITY_LABELS[entity] || entity

  // 이미지 URL이 있으면 배경으로 합성 시도
  if (imageUrl) {
    try {
      const imgBuf = await downloadImage(imageUrl)
      const bgBuf = await sharp(imgBuf)
        .resize(1200, 630, { fit: 'cover', position: 'centre' })
        .toBuffer()

      // 어두운 오버레이 (텍스트 가독성)
      const overlay = await sharp({
        create: { width: 1200, height: 630, channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0.52 } }
      }).png().toBuffer()

      // SVG 텍스트 레이어 (흰색 텍스트로 전환)
      const svgText = makeSvgOnDark({ title, subtitle, entity, label })
      const textBuf = Buffer.from(svgText)

      await sharp(bgBuf)
        .composite([
          { input: overlay, blend: 'over' },
          { input: textBuf, blend: 'over' },
        ])
        .png({ quality: 90, compressionLevel: 8 })
        .toFile(outFile)

      console.log(`✅ 썸네일(이미지 합성): ${outFile}`)
      return outFile
    } catch (e) {
      console.warn(`⚠ 이미지 합성 실패 (${e.message}) → 그라디언트로 폴백`)
    }
  }

  // 그라디언트 배경
  const svg = makeSvg({ title, subtitle, entity, label, bg1, bg2 })
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(outFile)

  console.log(`✅ 썸네일(그라디언트): ${outFile}`)
  return outFile
}

// ─── 어두운 배경용 SVG (흰색 텍스트) ──────────────────────
function makeSvgOnDark({ title, subtitle, entity, label }) {
  const [line1, line2] = splitTitle(title)
  const sub = (subtitle || '').slice(0, 50)
  const titleY = line2 ? 240 : 270
  const fontSize1 = line1.length > 14 ? 68 : 80

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_COLOR}"/>
      <stop offset="100%" stop-color="${BRAND_COLOR2}"/>
    </linearGradient>
  </defs>

  <!-- 상단 브랜드 바 -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#accent)"/>

  <!-- 엔티티 뱃지 -->
  <rect x="60" y="60" width="${(label || entity).length * 18 + 28}" height="42" rx="21" fill="${BRAND_COLOR}"/>
  <text x="${60 + (label || entity).length * 9 + 14}" y="87" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">${escapeXml(label || entity)}</text>

  <!-- 제목 -->
  <text x="60" y="${titleY}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="${fontSize1}" font-weight="900" fill="#FFFFFF" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.5))">${escapeXml(line1)}</text>
  ${line2 ? `<text x="60" y="${titleY + fontSize1 + 10}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="${fontSize1}" font-weight="900" fill="#FFFFFF" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.5))">${escapeXml(line2)}</text>` : ''}

  <!-- 부제목 -->
  ${sub ? `<text x="60" y="${line2 ? titleY + fontSize1 * 2 + 30 : titleY + fontSize1 + 24}" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="32" font-weight="400" fill="#E2E8F0">${escapeXml(sub)}</text>` : ''}

  <!-- 구분선 + 사이트명 -->
  <rect x="60" y="545" width="1080" height="1" fill="rgba(255,255,255,0.3)"/>
  <text x="60" y="590" font-family="'Apple SD Gothic Neo','Noto Sans KR',sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">${escapeXml(SITE_NAME)}</text>
</svg>`
}

// ─── CLI 진입점 ────────────────────────────────────────────
if (require.main === module) {
  const argv = process.argv.slice(2)
  const get  = key => { const i = argv.indexOf(key); return i >= 0 ? argv[i + 1] : null }

  const opts = {
    entity:   get('--entity'),
    slug:     get('--slug'),
    title:    get('--title'),
    subtitle: get('--subtitle'),
    imageUrl: get('--imageUrl'),
  }

  if (!opts.entity || !opts.slug || !opts.title) {
    console.error('Usage: node generate-thumbnail.js --entity hotel --slug XXX --title "제목" [--subtitle "부제"] [--imageUrl "https://..."]')
    process.exit(1)
  }

  generateThumbnail(opts).catch(e => { console.error(e.message); process.exit(1) })
}

module.exports = { generateThumbnail }
