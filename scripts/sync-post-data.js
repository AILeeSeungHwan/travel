#!/usr/bin/env node
/**
 * scripts/sync-post-data.js
 *
 * 포스팅 생성 후 data 파일 일관성 자동 점검 스크립트.
 * 실행: node scripts/sync-post-data.js
 * 옵션: --fix   누락된 coupang-seed.json 항목을 자동 추가
 */

const fs   = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')

function loadJs(filePath) {
  try { return require(filePath) } catch { return null }
}

function loadJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')) } catch { return null }
}

function listSlugs(dir) {
  const full = path.join(ROOT, dir)
  if (!fs.existsSync(full)) return []
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.js'))
    .map(f => f.replace('.js', ''))
}

const FIX = process.argv.includes('--fix')
let issues = 0

// ─── 1. Hotels: data/hotels.js ↔ posts/hotels/*.js ───────────────────────────
console.log('\n── Hotels ──')
const hotels = loadJs(path.join(ROOT, 'data/hotels.js')) || []
const hotelPostSlugs = listSlugs('posts/hotels')

for (const h of hotels) {
  if (!hotelPostSlugs.includes(h.slug)) {
    console.warn(`  [MISSING POST] posts/hotels/${h.slug}.js — data entry exists but no post file`)
    issues++
  }
}
for (const slug of hotelPostSlugs) {
  if (!hotels.find(h => h.slug === slug)) {
    console.warn(`  [ORPHAN POST ] posts/hotels/${slug}.js — no data/hotels.js entry`)
    issues++
  }
}
if (hotels.length === hotelPostSlugs.length && issues === 0) {
  console.log(`  ✓ ${hotels.length} hotels — data ↔ posts 일치`)
}

// ─── 2. Addons: data/addons.js ↔ posts/addons/*.js ───────────────────────────
console.log('\n── Addons ──')
const addons = loadJs(path.join(ROOT, 'data/addons.js')) || []
const addonPostSlugs = listSlugs('posts/addons')
let addonIssues = 0

for (const a of addons) {
  if (!addonPostSlugs.includes(a.slug)) {
    console.warn(`  [MISSING POST] posts/addons/${a.slug}.js`)
    addonIssues++; issues++
  }
}
for (const slug of addonPostSlugs) {
  if (!addons.find(a => a.slug === slug)) {
    console.warn(`  [ORPHAN POST ] posts/addons/${slug}.js — no data/addons.js entry`)
    addonIssues++; issues++
  }
}
if (addonIssues === 0) {
  console.log(`  ✓ ${addons.length} addons — data ↔ posts 일치`)
}

// ─── 3. coupang-seed.json ↔ data/addons.js ───────────────────────────────────
console.log('\n── coupang-seed.json ──')
const seedPath   = path.join(ROOT, 'data/coupang-seed.json')
const seed       = loadJson(seedPath) || []
const seedSlugs  = seed.flatMap(s => s.post_slugs || [])
const missingSeeds = []

for (const a of addons) {
  if (!seedSlugs.includes(a.slug)) {
    console.warn(`  [MISSING SEED] coupang-seed.json에 ${a.slug} 항목 없음`)
    missingSeeds.push(a)
    issues++
  }
}
if (missingSeeds.length === 0) {
  console.log(`  ✓ ${addons.length}개 addon slug 모두 coupang-seed.json에 있음`)
}

if (FIX && missingSeeds.length > 0) {
  const newEntries = missingSeeds.map(a => ({
    product_name: a.title.replace(' — ', ' ').split(' ').slice(0, 4).join(' '),
    category: (a.tags && a.tags[0]) || '여행용품',
    post_slugs: [a.slug],
    notes: '쿠팡 어드민에서 URL 입력 대기',
  }))
  const updated = [...seed, ...newEntries]
  fs.writeFileSync(seedPath, JSON.stringify(updated, null, 2), 'utf8')
  console.log(`  ✅ coupang-seed.json에 ${newEntries.length}개 항목 자동 추가 (URL은 어드민에서 입력)`)
}

// ─── 4. Guide/Theme/Situation/Region/Country/Spot/Compare/Tool 점검 ──────────
const entityChecks = [
  { dataFile: 'data/countries.js', postDir: 'posts/countries', slugKey: 'slug', label: 'Countries' },
  { dataFile: 'data/regions.js',   postDir: 'posts/regions',   slugKey: 'slug', label: 'Regions',
    postSlugFn: (r) => `${r.countrySlug}-${r.slug}` },
  { dataFile: 'data/spots.js',     postDir: 'posts/spots',     slugKey: 'slug', label: 'Spots',
    postSlugFn: (s) => `${s.countrySlug}-${s.slug}` },
  { dataFile: 'data/guides.js',    postDir: 'posts/guides',    slugKey: 'slug', label: 'Guides' },
  { dataFile: 'data/themes.js',    postDir: 'posts/themes',    slugKey: 'slug', label: 'Themes' },
  { dataFile: 'data/situations.js',postDir: 'posts/situations',slugKey: 'slug', label: 'Situations' },
  { dataFile: 'data/tools.js',     postDir: 'posts/tools',     slugKey: 'slug', label: 'Tools' },
  { dataFile: 'data/compares.js',  postDir: 'posts/compares',  slugKey: 'slug', label: 'Compares' },
]

console.log('\n── 기타 엔티티 ──')
for (const { dataFile, postDir, slugKey, label, postSlugFn } of entityChecks) {
  const data = loadJs(path.join(ROOT, dataFile)) || []
  const postSlugs = listSlugs(postDir)
  let ec = 0
  for (const item of data) {
    const expected = postSlugFn ? postSlugFn(item) : item[slugKey]
    if (!postSlugs.includes(expected)) {
      console.warn(`  [MISSING] ${postDir}/${expected}.js`)
      ec++; issues++
    }
  }
  if (ec === 0) console.log(`  ✓ ${label}: ${data.length}개 모두 post 파일 존재`)
}

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(50))
if (issues === 0) {
  console.log('✅ 모든 data ↔ posts 일관성 통과')
} else {
  console.warn(`⚠️  총 ${issues}개 불일치 항목 발견`)
  if (!FIX) console.log('   --fix 옵션으로 자동 수정 가능한 항목은 자동 처리됩니다')
}
console.log('═'.repeat(50))
