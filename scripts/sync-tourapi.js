// scripts/sync-tourapi.js
// 한국관광공사 TourAPI 4.0 → 국내 스팟·지역 이미지·메타 동기화
// 출력: data/tourapi-images.json (manifest, hot-link URL)
// 약관: 이미지는 hot-link 만 사용, 다운로드/재배포 금지

const fs = require('fs')
const path = require('path')

const KEY_ENC = process.env.TOUR_API_KEY_ENCODED
const KEY = process.env.TOUR_API_KEY
const ENDPOINT = process.env.TOUR_API_ENDPOINT || 'https://apis.data.go.kr/B551011/SpnService2'

if (!KEY_ENC && !KEY) {
  console.error('TOUR_API_KEY 미설정.')
  process.exit(1)
}

const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(ROOT, 'data', 'tourapi-images.json')
const COMMON = `MobileOS=ETC&MobileApp=tripspot&_type=json&numOfRows=10&pageNo=1`

// 우리 사이트의 국내 스팟·지역 → TourAPI 검색 키워드
const SPOT_QUERIES = {
  'kr-hallasan': '한라산',
  'kr-seongsan': '성산일출봉',
  'kr-udo': '우도',
}

// 지역 areaCode (TourAPI v2)
const AREA_CODES = {
  'kr-seoul': 1,
  'kr-busan': 6,
  'kr-jeju': 39,
  'kr-gangwon': 32,
  'kr-gyeongsang-buk': 35,  // 경주 포함
}

async function searchByKeyword(keyword) {
  const url = `${ENDPOINT}/searchKeyword2?serviceKey=${KEY_ENC}&keyword=${encodeURIComponent(keyword)}&${COMMON}`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) {
    console.error('  ✗', keyword, r.status)
    return null
  }
  const data = await r.json()
  const items = data?.response?.body?.items?.item
  if (!items || items.length === 0) return null
  return Array.isArray(items) ? items[0] : items
}

async function detailImage(contentId) {
  const url = `${ENDPOINT}/detailImage2?serviceKey=${KEY_ENC}&contentId=${contentId}&imageYN=Y&MobileOS=ETC&MobileApp=tripspot&_type=json&numOfRows=10&pageNo=1`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) return []
  const data = await r.json()
  const items = data?.response?.body?.items?.item
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}

async function detailCommon(contentId) {
  const url = `${ENDPOINT}/detailCommon2?serviceKey=${KEY_ENC}&contentId=${contentId}&firstImageYN=Y&overviewYN=Y&areacodeYN=Y&MobileOS=ETC&MobileApp=tripspot&_type=json&numOfRows=1&pageNo=1`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) return null
  const data = await r.json()
  const items = data?.response?.body?.items?.item
  if (!items) return null
  return Array.isArray(items) ? items[0] : items
}

async function areaBased(areaCode) {
  const url = `${ENDPOINT}/areaBasedList2?serviceKey=${KEY_ENC}&areaCode=${areaCode}&contentTypeId=12&arrange=O&${COMMON}&numOfRows=20`
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) {
    console.error('  ✗ areaCode', areaCode, r.status)
    return []
  }
  const data = await r.json()
  const items = data?.response?.body?.items?.item
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const manifest = { spots: {}, regions: {} }

  // 1. 스팟 — 키워드 검색 → 상세 이미지
  for (const [slug, keyword] of Object.entries(SPOT_QUERIES)) {
    const hit = await searchByKeyword(keyword)
    if (!hit) { console.log('  ∅', slug); continue }

    const images = await detailImage(hit.contentid)
    const common = await detailCommon(hit.contentid)

    manifest.spots[slug] = {
      contentId: hit.contentid,
      contentTypeId: hit.contenttypeid,
      title: hit.title,
      addr: hit.addr1,
      areaCode: hit.areacode,
      mapx: hit.mapx,
      mapy: hit.mapy,
      mainImage: hit.firstimage || (common && common.firstimage) || null,
      mainImageThumb: hit.firstimage2 || null,
      gallery: images.slice(0, 5).map(im => ({
        url: im.originimgurl,
        urlThumb: im.smallimageurl,
        caption: im.imgname || keyword,
      })),
      overview: common?.overview?.replace(/<[^>]+>/g, '').slice(0, 500) || '',
      source: 'korea-tour-api',
      license: '공공누리 1유형',
      credit: '한국관광공사',
      sourceUrl: `https://www.visitkorea.or.kr/cms_NEW2/contentView/${hit.contentid}`,
    }
    console.log('  ✓', slug, '— contentId', hit.contentid, '/ images', images.length)
    await delay(300)
  }

  // 2. 지역 (areaBased — 인기 스팟 20개씩)
  for (const [slug, areaCode] of Object.entries(AREA_CODES)) {
    const items = await areaBased(areaCode)
    manifest.regions[slug] = {
      areaCode,
      topSpots: items.slice(0, 8).map(it => ({
        contentId: it.contentid,
        title: it.title,
        addr: it.addr1,
        mainImage: it.firstimage || null,
        mapx: it.mapx,
        mapy: it.mapy,
      })),
      source: 'korea-tour-api',
      license: '공공누리 1유형',
      credit: '한국관광공사',
    }
    console.log('  ✓', slug, '— areaCode', areaCode, '/ spots', items.length)
    await delay(300)
  }

  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))
  console.log('\n→', OUT)
}

main().catch(err => { console.error(err); process.exit(1) })
