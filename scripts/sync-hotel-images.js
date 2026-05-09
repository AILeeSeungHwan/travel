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

// 국내 호텔 — TourAPI contentId (contentTypeId=32 숙박)
// contentId 검증: node --env-file=.env.local scripts/sync-hotel-images.js --check
const KOREAN_HOTELS = {
  'shilla-jeju':       { contentId: '142946', name: '제주신라호텔' },
  'lotte-jeju':        { contentId: '143025', name: '롯데호텔 제주' },
  'seoul-shilla':      { contentId: '142734', name: '서울신라호텔' },
  'parnas-gangnam':    { contentId: '142769', name: '그랜드인터컨티넨탈서울파르나스' },
  'walkerhill-seoul':  { contentId: '143107', name: '비스타워커힐서울' },
  'paradise-busan':    { contentId: '2528114', name: '파라다이스호텔부산' },
  'lotte-busan':       { contentId: '142998', name: '롯데호텔부산' },
}

// 해외 호텔 — Unsplash 쿼리 (TourAPI 없는 국내 + 해외)
const UNSPLASH_HOTELS = {
  'jw-marriott-seoul':      'marriott hotel lobby interior luxury modern',
  'intercontinental-danang':'resort infinity pool vietnam beach ocean',
  'ayana-bali':             'bali cliff infinity pool tropical ocean sunset',
  'marina-bay-sands':       'marina bay sands singapore infinity pool night skyline',
  // TourAPI 이미지 없음 → Unsplash 단독
  'seoul-shilla':           'grand hotel seoul luxury lobby interior modern',
}

// TourAPI 이미지가 부족한 국내 호텔에 Unsplash 이미지 보충 (merge)
// Unsplash 0장 호텔도 여기서 처리 (mainImage 없으면 첫 보충 이미지가 hero 됨)
const SUPPLEMENT_UNSPLASH = {
  'walkerhill-seoul': { query: 'seoul luxury hotel rooftop city view pool', count: 4 },
  'marina-bay-sands': { query: 'singapore luxury hotel infinity pool', count: 5 },
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

async function fetchTourCommon(contentId) {
  const url = `${TOUR_ENDPOINT}/detailCommon2?serviceKey=${TOUR_KEY_ENC}&contentId=${contentId}&firstImageYN=Y&MobileOS=ETC&MobileApp=tripspot&_type=json`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) return null
  const data = await r.json()
  const item = data?.response?.body?.items?.item
  return Array.isArray(item) ? item[0] : item
}

async function searchUnsplash(query, count = 5) {
  if (!UNSPLASH_KEY) { console.error('  ✗ UNSPLASH_ACCESS_KEY 미설정'); return [] }
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&content_filter=high`
  const r = await fetch(url, { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}`, 'Accept-Version': 'v1' } })
  if (!r.ok) { console.error('  ✗ Unsplash', r.status); return [] }
  const data = await r.json()
  if (!data.results || data.results.length === 0) return []
  return data.results.map(img => ({
    url: img.urls.regular,
    urlSmall: img.urls.small,
    urlThumb: img.urls.thumb,
    caption: img.description || img.alt_description || query,
    photographer: img.user.name,
    photographerUsername: img.user.username,
    photographerUrl: `${img.user.links.html}?utm_source=tripspot&utm_medium=referral`,
    sourceUrl: `${img.links.html}?utm_source=tripspot&utm_medium=referral`,
    unsplashId: img.id,
    license: 'Unsplash License',
    source: 'unsplash',
  }))
}

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  // 기존 파일 로드 (증분 업데이트)
  let existing = {}
  try { existing = JSON.parse(fs.readFileSync(OUT, 'utf8')) } catch (_) {}

  const result = { ...existing }

  // 1. 국내 호텔 — TourAPI
  console.log('\n[TourAPI 국내 호텔]')
  for (const [slug, info] of Object.entries(KOREAN_HOTELS)) {
    process.stdout.write(`  ${slug} ... `)
    const common = await fetchTourCommon(info.contentId)
    const images = await fetchTourImages(info.contentId)

    const mainImage = common?.firstimage || images[0]?.originimgurl || null

    if (!mainImage && images.length === 0) {
      console.log(`⚠ TourAPI 이미지 없음 → Unsplash 폴백`)
      // TourAPI에 이미지 없으면 Unsplash로 폴백
      const uImages = await searchUnsplash(`${info.name} hotel korea`, 3)
      result[slug] = {
        contentId: info.contentId, name: info.name,
        mainImage: uImages[0]?.url || null,
        gallery: uImages,
        source: 'unsplash', license: 'Unsplash License', credit: 'Unsplash',
        sourceUrl: 'https://unsplash.com/?utm_source=tripspot&utm_medium=referral',
      }
      await delay(1200)
    } else {
      result[slug] = {
        contentId: info.contentId, name: info.name,
        mainImage,
        gallery: images.map(im => ({
          url: im.originimgurl,
          urlThumb: im.smallimageurl,
          caption: im.imgname || info.name,
          source: 'korea-tour-api',
        })),
        source: 'korea-tour-api',
        license: '공공누리 1유형',
        credit: '한국관광공사',
        creditUrl: 'https://www.visitkorea.or.kr/',
        sourceUrl: `https://www.visitkorea.or.kr/`,
      }
      console.log(`✓ ${images.length}장 (TourAPI)`)
    }
    await delay(350)
  }

  // 2. 해외 + TourAPI 미지원 국내 호텔 — Unsplash
  console.log('\n[Unsplash 해외 호텔]')
  for (const [slug, query] of Object.entries(UNSPLASH_HOTELS)) {
    process.stdout.write(`  ${slug} ... `)
    const images = await searchUnsplash(query, 5)
    result[slug] = {
      contentId: null,
      mainImage: images[0]?.url || null,
      gallery: images,
      source: 'unsplash',
      license: 'Unsplash License',
      credit: images[0] ? `Photo by ${images[0].photographer} on Unsplash` : 'Unsplash',
      sourceUrl: 'https://unsplash.com/?utm_source=tripspot&utm_medium=referral',
    }
    console.log(`✓ ${images.length}장`)
    await delay(1200)
  }

  // 3. TourAPI 이미지 부족 호텔 — Unsplash 보충 (gallery merge)
  console.log('\n[Unsplash 보충]')
  for (const [slug, { query, count }] of Object.entries(SUPPLEMENT_UNSPLASH)) {
    process.stdout.write(`  ${slug} ... `)
    const images = await searchUnsplash(query, count)
    if (images.length === 0) { console.log('⚠ 결과 없음'); continue }
    const existing = result[slug] || {}
    const existingGallery = existing.gallery || []
    const merged = [...existingGallery, ...images]
    result[slug] = {
      ...existing,
      mainImage: existing.mainImage || images[0]?.url || null,
      gallery: merged,
      // 혼합 소스: TourAPI + Unsplash
      source: existingGallery.length > 0 ? 'mixed' : 'unsplash',
      license: existingGallery.length > 0 ? '공공누리 1유형 + Unsplash License' : 'Unsplash License',
      credit: existingGallery.length > 0 ? '한국관광공사 + Unsplash' : `Photo by ${images[0].photographer} on Unsplash`,
    }
    console.log(`✓ ${images.length}장 보충 (총 ${merged.length}장)`)
    await delay(1200)
  }

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2))
  console.log('\n✓', OUT, `저장 완료 (총 ${Object.keys(result).length}개 호텔)`)
}

main().catch(err => { console.error(err); process.exit(1) })
