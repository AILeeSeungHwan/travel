// scripts/sync-unsplash.js
// Unsplash API → 모든 country/region/theme/situation 1장씩 hot-link URL + 메타 동기화
// 출력: data/unsplash-images.json (manifest)
// 호출 한도: Demo 50/시간, 51개 엔티티 — 1.5초 간격으로 안전하게

const fs = require('fs')
const path = require('path')

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY
if (!ACCESS_KEY) {
  console.error('UNSPLASH_ACCESS_KEY 미설정. 다음 명령으로 실행: node --env-file=.env.local scripts/sync-unsplash.js')
  process.exit(1)
}

const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(ROOT, 'data', 'unsplash-images.json')

// 엔티티별 검색 쿼리 — 영어로 검색, Unsplash가 영어 인덱스 우선
const QUERIES = {
  countries: {
    kr: 'seoul south korea',
    jp: 'tokyo japan cherry blossom',
    vn: 'da nang vietnam beach',
    th: 'bangkok thailand temple',
    tw: 'taipei taiwan night market',
    sg: 'singapore marina bay',
    hk: 'hong kong skyline',
    ph: 'palawan philippines beach',
    my: 'kuala lumpur malaysia',
    id: 'bali indonesia rice terrace',
    cn: 'shanghai china',
    fr: 'paris france eiffel',
    it: 'rome italy colosseum',
    gb: 'london england big ben',
    de: 'berlin germany',
    us: 'new york city skyline',
  },
  regions: {
    'kr-jeju': 'jeju island korea',
    'kr-gangwon': 'gangwon korea ocean',
    'kr-busan': 'busan haeundae beach',
    'kr-gyeongju': 'gyeongju korea bulguksa',
    'kr-seoul': 'seoul gyeongbokgung palace',
    'jp-tokyo': 'tokyo shibuya',
    'jp-osaka': 'osaka dotonbori',
    'jp-fukuoka': 'fukuoka japan',
    'jp-okinawa': 'okinawa beach',
    'jp-hokkaido': 'hokkaido sapporo snow',
    'vn-danang': 'da nang vietnam',
    'vn-hochiminh': 'ho chi minh city saigon',
    'vn-hanoi': 'hanoi old quarter',
    'vn-phuquoc': 'phu quoc beach',
    'th-bangkok': 'bangkok temple',
    'th-phuket': 'phuket beach',
    'th-chiangmai': 'chiang mai temple',
    'tw-taipei': 'taipei night market',
  },
  themes: {
    honeymoon: 'honeymoon couple beach sunset',
    family: 'family travel kids beach',
    'parents-trip': 'elderly travel ryokan',
    'pool-villa': 'private pool villa tropical',
    'hot-spring': 'japanese onsen ryokan',
    beach: 'tropical beach paradise',
    'food-tour': 'asian food market',
    shopping: 'shopping mall asia',
    'culture-history': 'world heritage temple',
    workation: 'digital nomad cafe coworking',
  },
  situations: {
    'first-overseas-trip': 'airplane window travel',
    'family-with-kids': 'family kids travel airport',
    honeymoon: 'honeymoon couple romantic',
    'parents-trip': 'family elderly parents travel',
    'budget-100man': 'backpacker travel asia',
    'luxury-trip': 'luxury overwater villa',
    '3-day-domestic': 'korea travel countryside',
    '1-week-overseas': 'travel suitcase passport',
  },
}

function withUtm(url) {
  if (!url) return url
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}utm_source=travel.ambitstock&utm_medium=referral`
}

async function searchUnsplash(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&content_filter=high`
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}`, 'Accept-Version': 'v1' },
  })
  if (!r.ok) {
    console.error('  ✗', query, r.status, await r.text().then(t => t.slice(0, 100)))
    return null
  }
  const data = await r.json()
  if (!data.results || data.results.length === 0) {
    console.error('  ∅', query, 'no results')
    return null
  }
  const img = data.results[0]
  // download endpoint 트리거 (Unsplash 가이드라인)
  fetch(`${img.links.download_location}?client_id=${ACCESS_KEY}`).catch(() => {})

  return {
    id: img.id,
    url: img.urls.regular,
    urlSmall: img.urls.small,
    urlThumb: img.urls.thumb,
    photographer: img.user.name,
    photographerUsername: img.user.username,
    photographerUrl: withUtm(img.user.links.html),
    sourceUrl: withUtm(img.links.html),
    description: img.description || img.alt_description || '',
    color: img.color,
    width: img.width,
    height: img.height,
    license: 'Unsplash License',
    source: 'unsplash',
  }
}

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const manifest = { countries: {}, regions: {}, themes: {}, situations: {} }
  const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { countries: {}, regions: {}, themes: {}, situations: {} }
  let count = 0
  let cached = 0

  for (const [category, items] of Object.entries(QUERIES)) {
    for (const [slug, query] of Object.entries(items)) {
      // 이미 있으면 건너뛰기 (재실행 가능)
      if (existing[category] && existing[category][slug]) {
        manifest[category][slug] = existing[category][slug]
        cached++
        continue
      }

      const img = await searchUnsplash(query)
      if (img) {
        manifest[category][slug] = img
        count++
        console.log('  ✓', category, slug, '→', img.photographer)
      }
      await delay(1200) // 1.2초 간격 — 50/h 한도 안전
    }
  }

  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))
  console.log('\n총', count, '신규 +', cached, '캐시 →', OUT)
}

main().catch(err => { console.error(err); process.exit(1) })
