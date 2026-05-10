// scripts/sync-unsplash.js
// Unsplash API → country/region 5장 배열, theme/situation 1장 동기화
// 출력: data/unsplash-images.json (manifest)
// 호출 한도: Demo 50/시간 — country(16)+region(18)=34건×1req, theme+situation=18건 / 1.5초 간격 안전

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

// countries·regions는 5장 배열, themes·situations는 1장 단일 객체
const IMG_COUNT = { countries: 5, regions: 5, themes: 1, situations: 1 }

function withUtm(url) {
  if (!url) return url
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}utm_source=travel.ambitstock&utm_medium=referral`
}

function mapImg(img) {
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

async function searchUnsplash(query, count = 1) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&content_filter=high`
  const r = await fetch(url, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}`, 'Accept-Version': 'v1' },
  })
  if (!r.ok) {
    console.error('  ✗', query, r.status, await r.text().then(t => t.slice(0, 100)))
    return count === 1 ? null : []
  }
  const data = await r.json()
  if (!data.results || data.results.length === 0) {
    console.error('  ∅', query, 'no results')
    return count === 1 ? null : []
  }

  const imgs = data.results.slice(0, count)
  // download endpoint 트리거 (Unsplash 가이드라인)
  imgs.forEach(img => {
    fetch(`${img.links.download_location}?client_id=${ACCESS_KEY}`).catch(() => {})
  })

  const mapped = imgs.map(mapImg)
  return count === 1 ? mapped[0] : mapped
}

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  // 기존 파일을 manifest 초기값으로 사용 — Ctrl+C 중단 후 재실행 시 이전 진행분 보존
  const manifest = fs.existsSync(OUT)
    ? JSON.parse(fs.readFileSync(OUT, 'utf8'))
    : { countries: {}, regions: {}, themes: {}, situations: {} }
  // 카테고리 누락 시 초기화
  for (const cat of Object.keys(QUERIES)) { if (!manifest[cat]) manifest[cat] = {} }

  let newCount = 0
  let cachedCount = 0

  for (const [category, items] of Object.entries(QUERIES)) {
    const imgCount = IMG_COUNT[category] ?? 1
    for (const [slug, query] of Object.entries(items)) {
      const cached = manifest[category][slug]
      // 배열이면 imgCount장 확보 여부, 단일 객체면 존재 여부로 캐시 판단
      if (cached) {
        const isOk = Array.isArray(cached) ? cached.length >= imgCount : imgCount === 1
        if (isOk) {
          cachedCount++
          continue
        }
      }

      const result = await searchUnsplash(query, imgCount)
      const valid = Array.isArray(result) ? result.length > 0 : result !== null
      if (valid) {
        manifest[category][slug] = result
        newCount++
        const display = Array.isArray(result) ? `${result.length}장` : result.photographer
        console.log('  ✓', category, slug, '→', display)
      } else if (cached) {
        // Rate limit / API 오류 — 기존 데이터 폴백 (데이터 손실 방지)
        console.log('  ⚠', category, slug, '→ 기존 데이터 유지')
      }
      // 매 fetch 후 즉시 저장 — Ctrl+C 중단 시에도 진행분 보존
      fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))
      await delay(1200) // 1.2초 간격 — 50/h 한도 안전
    }
  }

  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))
  console.log('\n총', newCount, '신규 +', cachedCount, '캐시 →', OUT)
}

main().catch(err => { console.error(err); process.exit(1) })
