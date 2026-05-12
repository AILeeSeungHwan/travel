import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import LeafletMap from '../../components/MapClient'
import HeroImage from '../../components/HeroImage'
import { getHotelImage } from '../../lib/images'
import countries from '../../data/countries'
import regions from '../../data/regions'
import spots from '../../data/spots'
import hotels from '../../data/hotels'

export async function getStaticPaths() {
  return { paths: hotels.filter(h => h?.slug).map(h => ({ params: { slug: h.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = hotels.filter(h => h?.slug).find(h => h.slug === params.slug)
  if (!meta) return { notFound: true }
  const country = countries.filter(c => c?.slug).find(c => c.slug === meta.countrySlug) ?? null
  const region  = regions.filter(r => r?.slug && r?.countrySlug)
    .find(r => r.countrySlug === meta.countrySlug && r.slug === meta.regionSlug) ?? null

  let postData = null
  try { postData = require(`../../posts/hotels/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const nearbySpots = spots
    .filter(s => s?.slug && s.regionSlug === meta.regionSlug && s.countrySlug === meta.countrySlug)
    .slice(0, 5)
    .map(s => ({
      ...s,
      category: 'spot',
      url: `/countries/${s.countrySlug}/regions/${s.regionSlug}/spots/${s.slug}/`,
      title: s.spotName ?? null,
    }))
  return { props: { meta, country, region: region ?? null, postData, nearbySpots } }
}

export default function HotelDetail({ meta, country, region, postData, nearbySpots }) {
  const breadcrumbItems = [
    { name: '호텔', url: '/hotels/' },
    { name: meta.hotelName },
  ]
  const canonicalPath = `/hotels/${meta.slug}/`

  // ── 이미지 ──────────────────────────────────────────────
  const hotelImg = getHotelImage(meta.slug)

  // HeroImage: mainImage 있을 때만
  const heroImg = hotelImg?.mainImage
    ? {
        url: hotelImg.mainImage,
        photographer: hotelImg.isTourApi
          ? '한국관광공사'
          : hotelImg.credit?.replace('Photo by ', '').replace(' on Unsplash', ''),
        photographerUrl: hotelImg.creditUrl,
        sourceUrl: hotelImg.creditUrl,
        license: hotelImg.license,
        source: hotelImg.source,
        description: meta.hotelName,
      }
    : null

  // gallery: HeroImage가 gallery[0]을 커버하므로 1번째 이후부터
  const rawGallery = hotelImg?.gallery?.length
    ? hotelImg.gallery.map(g => ({
        src: g.url,
        alt: g.caption || meta.hotelName,
        caption: g.caption,
        imageSource: g.source || hotelImg.source,
        imageLicense: hotelImg.license,
        imageCredit: hotelImg.credit,
        imageCreditUrl: hotelImg.creditUrl,
      }))
    : (meta.gallery || []).map(g => ({
        src: g.url,
        alt: g.alt || meta.hotelName,
        caption: g.alt,
        imageSource: g.source,
        imageLicense: g.license,
        imageCredit: g.credit,
      }))

  const gallerySlice = rawGallery.slice(heroImg ? 1 : 0)
  const galleryBlock = gallerySlice.length > 0
    ? {
        type: 'gallery',
        images: gallerySlice.map(g => ({ src: g.src, alt: g.alt, caption: g.caption })),
        imageSource: gallerySlice[0]?.imageSource,
        imageLicense: gallerySlice[0]?.imageLicense,
        imageCredit: gallerySlice[0]?.imageCredit,
        imageSourceUrl: gallerySlice[0]?.imageCreditUrl,
      }
    : null

  // CTA 템플릿 (href는 페이지 meta 기준)
  const ctaBlock = {
    type: 'hotelsCombinedCTA',
    text: `${meta.hotelName} 최저가 비교 →`,
    subText: '체크인·체크아웃 날짜를 입력하면 여러 예약 사이트 가격을 한번에 비교할 수 있습니다.',
    href: meta.hotelsCombinedDeepLink || '#',
  }

  // ── sections 가공 ────────────────────────────────────────
  // 1. placeholder 이미지 제거
  // 2. CTA 2개 보장 (중간 + 끝 disclaimer 직전)
  // 3. H2마다 gallery 이미지 1장씩 분배
  function processHotelSections(sections) {
    let result = [...sections]

    // placeholder/로컬 이미지 제거
    result = result.filter(
      s => !(s.type === 'image' && (s.src?.includes('placeholder') || s.src?.startsWith('/images/')))
    )
    // 기존 gallery 블록도 제거 (H2별 단독 이미지로 교체)
    result = result.filter(s => s.type !== 'gallery')

    // CTA 2개 보장
    const ctaCount = result.filter(s => s.type === 'hotelsCombinedCTA').length
    if (ctaCount < 2) {
      const endIdx = result.findIndex(s => s.type === 'disclaimer' || s.type === 'sources')
      const end = endIdx >= 0 ? endIdx : result.length
      if (ctaCount === 0) {
        const mid = Math.floor(end / 2)
        result = [
          ...result.slice(0, mid), ctaBlock,
          ...result.slice(mid, end), ctaBlock,
          ...result.slice(end),
        ]
      } else {
        result = [...result.slice(0, end), ctaBlock, ...result.slice(end)]
      }
    }

    // H2마다 이미지 1장씩 분배
    if (gallerySlice.length > 0) {
      let imgIdx = 0
      const withImgs = []
      for (const s of result) {
        withImgs.push(s)
        if (s.type === 'h2' && imgIdx < gallerySlice.length) {
          const g = gallerySlice[imgIdx]
          withImgs.push({
            type: 'image',
            src: g.src,
            alt: g.alt,
            caption: g.caption,
            imageSource: g.imageSource,
            imageLicense: g.imageLicense,
            imageCredit: g.imageCredit,
            imageSourceUrl: g.imageCreditUrl,
          })
          imgIdx++
        }
      }
      result = withImgs
    }

    return result
  }

  // fallback (post 파일 없을 때)
  const fallbackRaw = [
    { type: 'intro',
      html: `${meta.summary ?? ''}<br/><br/>` +
        `<strong>${meta.hotelName}</strong>은(는) ` +
        `${country ? country.countryName : meta.countrySlug?.toUpperCase() ?? ''} ` +
        `${region ? region.regionName : ''}의 ${meta.hotelClass ?? ''} ${meta.hotelType ?? ''}입니다. ` +
        `평점 ${meta.guestRating ?? '-'}·가격대 ${meta.priceRange ?? '-'} (시즌 변동, 클릭 시점 확인).<br/><br/>` +
        `이런 분에게 추천: <strong>${meta.whoIsItFor ?? ''}</strong>` },
    { type: 'h2', id: 'standout', text: '이 호텔의 차별점' },
    { type: 'body', html: '<ul>' + (meta.standoutFeatures || []).map(f => `<li>${f}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'amenities', text: '시설·편의' },
    { type: 'body', html: '<ul>' + (meta.amenities || []).map(a => `<li>✓ ${a}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'rooms', text: '객실 타입' },
    { type: 'body', html: '<ul>' + (meta.roomTypes || []).map(r => `<li>${r}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'access', text: '공항에서 가는 법' },
    { type: 'body',
      html: `주소: ${meta.address ?? '-'}<br/>좌표: ${meta.lat ?? '-'}, ${meta.lng ?? '-'}<br/>` +
        `가까운 공항: <strong>${meta.nearestAirport ?? '-'}</strong> (${meta.distanceFromAirport ?? '-'})` },
    { type: 'h2', id: 'nearby', text: '주변 추천 스팟' },
    { type: 'body', html: nearbySpots.length === 0
      ? `${region ? region.regionName : meta.regionSlug}의 추천 스팟을 준비 중입니다.`
      : `${meta.hotelName} 인근의 추천 스팟입니다.` },
    { type: 'warning', title: '예약 전 알아두세요',
      html: '체크인/체크아웃 시간, 반려동물 정책, 취소 규정은 호텔별로 다르며 시즌·요금제에 따라 변동됩니다. 예약 전 호텔스컴바인 또는 호텔 공식 페이지에서 반드시 확인하세요.' },
    { type: 'sources', items: [
      { label: '호텔스컴바인', url: 'https://www.hotelscombined.com/', org: 'HotelsCombined', accessedAt: meta.updatedAt ?? meta.publishedAt ?? '' },
    ]},
    { type: 'disclaimer' },
  ]

  const finalSections = processHotelSections(
    postData ? postData.sections : fallbackRaw
  )

  // ── 지도 ────────────────────────────────────────────────
  const hasMap = meta.lat && meta.lng
  const mapMarkers = [
    { lat: meta.lat, lng: meta.lng, label: meta.hotelName, subLabel: meta.hotelClass, type: 'hotel' },
    ...nearbySpots
      .filter(s => s.lat && s.lng)
      .map(s => ({ lat: s.lat, lng: s.lng, label: s.spotName, subLabel: s.spotType, url: s.url, type: 'spot' })),
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      {heroImg && <HeroImage image={heroImg} alt={meta.hotelName} />}
      {hasMap && <LeafletMap center={[meta.lat, meta.lng]} zoom={14} markers={mapMarkers} height={320} />}
      <PostRenderer
        meta={{ ...meta, category: 'hotel', countryName: country ? country.countryName : meta.countrySlug?.toUpperCase() }}
        postData={{ sections: finalSections }}
        related={nearbySpots}
        breadcrumbItems={breadcrumbItems}
        canonicalPath={canonicalPath}
      />
    </Layout>
  )
}
