// scripts/sync-hotel-images.js
// 호텔 이미지 동기화 — 국내 호텔은 TourAPI, 해외 호텔은 Unsplash
// 출력: data/hotel-images.json
// 실행: node --env-file=.env.local scripts/sync-hotel-images.js

const fs = require('fs')
const path = require('path')

const TOUR_KEY_ENC = process.env.TOUR_API_KEY_ENCODED
const TOUR_ENDPOINT = process.env.TOUR_API_ENDPOINT || 'https://apis.data.go.kr/B551011/KorService2'
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY
const OUT = path.join(__dirname, '..', 'data', 'hotel-images.json')

// 국내 호텔 TourAPI contentId (contentTypeId=32, 숙박)
const KOREAN_HOTELS = {
  'shilla-jeju':  { contentId: '142946', name: '제주신라호텔', mainImage: 'http://tong.visitkorea.or.kr/cms/resource/93/3538893_image2_1.jpg' },
  'lotte-jeju':   { contentId: '143025', name: '롯데호텔 제주', mainImage: 'http://tong.visitkorea.or.kr/cms/resource/46/3538946_image2_1.jpg' },
}

// 해외 호텔 Unsplash 쿼리
const OVERSEAS_HOTELS = {
  'intercontinental-danang': 'intercontinental danang sun peninsula resort vietnam',
}

async function fetchTourImages(contentId) {
  const url = `${TOUR_ENDPOINT}/detailImage2?serviceKey=${TOUR_KEY_ENC}&contentId=${contentId}&imageYN=Y&MobileOS=ETC&MobileApp=tripspot&_type=json&numOfRows=10&pageNo=1`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) { console.error('  ✗ TourAPI', contentId, r.status); return [] }
  const data = await r.json()
  const items = data?.response?.body?.items?.item
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}

async function searchUnsplash(query, count = 5) {
  if (!UNSPLASH_KEY) { console.error('  ✗ UNSPLASH_ACCESS_KEY 미설정'); return [] }
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&content_filter=high`
  const r = await fetch(url, { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}`, 'Accept-Version': 'v1' } })
  if (!r.ok) { console.error('  ✗ Unsplash', r.status); return [] }
  const data = await r.json()
  if (!data.results || data.results.length === 0) return []
  return data.results.map(img => ({
    url: `${img.urls.regular}&w=1200`,
    urlThumb: img.urls.thumb,
    caption: img.description || img.alt_description || query,
    photographer: img.user.name,
    photographerUrl: `${img.user.links.html}?utm_source=tripspot&utm_medium=referral`,
    sourceUrl: `${img.links.html}?utm_source=tripspot&utm_medium=referral`,
    license: 'Unsplash License',
  }))
}

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const result = {}

  // 국내 호텔 — TourAPI
  for (const [slug, info] of Object.entries(KOREAN_HOTELS)) {
    console.log(`  TourAPI: ${slug} (${info.contentId})`)
    const images = await fetchTourImages(info.contentId)
    result[slug] = {
      contentId: info.contentId,
      mainImage: info.mainImage,
      gallery: images.map(im => ({
        url: im.originimgurl,
        urlThumb: im.smallimageurl,
        caption: im.imgname || info.name,
      })),
      source: 'korea-tour-api', license: '공공누리 1유형', credit: '한국관광공사',
      sourceUrl: `https://www.visitkorea.or.kr/`,
    }
    console.log(`  ✓ ${slug}: ${images.length}장`)
    await delay(300)
  }

  // 해외 호텔 — Unsplash
  for (const [slug, query] of Object.entries(OVERSEAS_HOTELS)) {
    console.log(`  Unsplash: ${slug}`)
    const images = await searchUnsplash(query, 5)
    result[slug] = {
      contentId: null,
      mainImage: images[0]?.url || null,
      gallery: images,
      source: 'unsplash', license: 'Unsplash License', credit: 'Unsplash',
      sourceUrl: 'https://unsplash.com/?utm_source=tripspot&utm_medium=referral',
    }
    console.log(`  ✓ ${slug}: ${images.length}장`)
    await delay(1200)
  }

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2))
  console.log('\n→', OUT, '저장 완료')
}

main().catch(err => { console.error(err); process.exit(1) })
