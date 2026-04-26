import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import countries from '../../data/countries'
import regions from '../../data/regions'
import spots from '../../data/spots'
import hotels from '../../data/hotels'

export async function getStaticPaths() {
  return { paths: hotels.map(h => ({ params: { slug: h.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = hotels.find(h => h.slug === params.slug)
  if (!meta) return { notFound: true }
  const country = countries.find(c => c.slug === meta.countrySlug)
  const region  = regions.find(r => r.countrySlug === meta.countrySlug && r.slug === meta.regionSlug)

  let postData = null
  try { postData = require(`../../posts/hotels/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const nearbySpots = spots.filter(s => s.regionSlug === meta.regionSlug && s.countrySlug === meta.countrySlug).slice(0, 5)
    .map(s => ({ ...s, category: 'spot', url: `/countries/${s.countrySlug}/regions/${s.regionSlug}/spots/${s.slug}/`, title: s.spotName }))
  return { props: { meta, country, region, postData, nearbySpots } }
}

export default function HotelDetail({ meta, country, region, postData, nearbySpots }) {
  const breadcrumbItems = [
    { name: '호텔', url: '/hotels/' },
    { name: meta.hotelName },
  ]
  const canonicalPath = `/hotels/${meta.slug}/`

  const galleryImages = (meta.gallery || []).map(g => ({
    type: 'image',
    src: g.url,
    alt: g.alt || meta.hotelName,
    caption: g.alt,
    imageSource: g.source,
    imageLicense: g.license,
    imageCredit: g.credit,
  }))

  const fallbackSections = [
    ...galleryImages.slice(0, 1),
    { type: 'intro', html: `${meta.summary}<br/><br/>` +
      `<strong>${meta.hotelName}</strong>은(는) ${country.countryName} ${region ? region.regionName : ''}의 ${meta.hotelClass} ${meta.hotelType}입니다. ` +
      `평점 ${meta.guestRating}·가격대 ${meta.priceRange} (시즌 변동, 클릭 시점 확인).<br/><br/>` +
      `이런 분에게 추천: <strong>${meta.whoIsItFor}</strong>` },
    { type: 'h2', id: 'standout', text: '이 호텔의 차별점' },
    { type: 'body', html: '<ul>' + (meta.standoutFeatures || []).map(f => `<li>${f}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'amenities', text: '시설·편의' },
    { type: 'body', html: '<ul>' + (meta.amenities || []).map(a => `<li>✓ ${a}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'rooms', text: '객실 타입' },
    { type: 'body', html: '<ul>' + (meta.roomTypes || []).map(r => `<li>${r}</li>`).join('') + '</ul>' },
    { type: 'h2', id: 'access', text: '공항에서 가는 법' },
    { type: 'body', html: `주소: ${meta.address}<br/>좌표: ${meta.lat}, ${meta.lng}<br/>가까운 공항: <strong>${meta.nearestAirport}</strong> (${meta.distanceFromAirport})` },
    { type: 'h2', id: 'nearby', text: '주변 추천 스팟' },
    { type: 'body', html: nearbySpots.length === 0
      ? `${region ? region.regionName : meta.regionSlug}의 추천 스팟을 준비 중입니다.`
      : `${meta.hotelName} 인근의 추천 스팟입니다.` },
    { type: 'hotelsCombinedCTA',
      text: '호텔스컴바인에서 최저가 보기 →',
      subText: `${meta.hotelName} 객실 가격을 호텔스컴바인이 여러 예약 사이트에서 동시 비교합니다.`,
      href: meta.hotelsCombinedDeepLink || '#' },
    { type: 'warning', title: '예약 전 알아두세요',
      html: '체크인/체크아웃 시간, 반려동물 정책, 취소 규정은 호텔별로 다르며 시즌·요금제에 따라 변동됩니다. 예약 전 호텔스컴바인 또는 호텔 공식 페이지에서 반드시 확인하세요.' },
    { type: 'sources', items: [
      { label: '호텔스컴바인', url: 'https://www.hotelscombined.com/', org: 'HotelsCombined', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  const finalPostData = postData || { sections: fallbackSections }

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'hotel', countryName: country.countryName }}
        postData={finalPostData}
        related={nearbySpots}
        breadcrumbItems={breadcrumbItems}
        canonicalPath={canonicalPath}
      />
    </Layout>
  )
}
