import Layout from '../../../../../../components/Layout'
import PostRenderer from '../../../../../../components/PostRenderer'
import PageTracker from '../../../../../../components/PageTracker'
import LeafletMap from '../../../../../../components/MapClient'
import HeroImage from '../../../../../../components/HeroImage'
import { getSpotImage } from '../../../../../../lib/images'
import countries from '../../../../../../data/countries'
import regions from '../../../../../../data/regions'
import spots from '../../../../../../data/spots'
import hotels from '../../../../../../data/hotels'

export async function getStaticPaths() {
  return {
    paths: spots.filter(s => s?.slug && s?.countrySlug && s?.regionSlug).map(s => ({ params: { slug: s.countrySlug, region: s.regionSlug, spot: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const country = countries.filter(c => c?.slug).find(c => c.slug === params.slug)
  const region  = regions.filter(r => r?.slug && r?.countrySlug)
    .find(r => r.countrySlug === params.slug && r.slug === params.region)
  const meta    = spots.filter(s => s?.slug && s?.countrySlug && s?.regionSlug)
    .find(s => s.countrySlug === params.slug && s.regionSlug === params.region && s.slug === params.spot)
  if (!country || !region || !meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../../../../../posts/spots/${meta.countrySlug}-${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const nearbyHotels = hotels.filter(h => h?.slug && h.regionSlug === region.slug && h.countrySlug === country.slug).slice(0, 3)
    .map(h => ({ ...h, category: 'hotel', url: `/hotels/${h.slug}/`, title: h.title }))

  return { props: { country, region, meta, postData, nearbyHotels } }
}

export default function SpotDetail({ country, region, meta, postData, nearbyHotels }) {
  const breadcrumbItems = [
    { name: '나라별', url: '/countries/' },
    { name: country.countryName, url: `/countries/${country.slug}/` },
    { name: region.regionName, url: `/countries/${country.slug}/regions/${region.slug}/` },
    { name: meta.spotName },
  ]
  const canonicalPath = `/countries/${country.slug}/regions/${region.slug}/spots/${meta.slug}/`

  const galleryImages = (meta.gallery || []).map(g => ({
    type: 'image',
    src: g.url,
    alt: g.alt || meta.spotName,
    caption: g.alt,
    imageSource: g.source,
    imageLicense: g.license,
    imageCredit: g.credit,
    imageSourceUrl: g.sourceUrl,
  }))

  const fallbackSections = [
    ...galleryImages.slice(0, 1),
    { type: 'intro', html: `${meta.summary}<br/><br/>${meta.spotName}은(는) ${region.regionName}의 ${meta.spotType} 명소로, ` +
      `<strong>입장료 ${meta.admission || '문의'}</strong> · 소요시간 ${meta.duration || '1~2시간'} · 베스트 시즌 ${meta.bestVisitTime || '연중'}.` },
    { type: 'h2', id: 'highlights', text: '하이라이트' },
    { type: 'body', html: meta.description },
    { type: 'h2', id: 'access', text: '가는 방법' },
    { type: 'body', html: `주소: ${meta.address || '본문 업데이트 시 제공'}<br/>좌표: ${meta.lat}, ${meta.lng}<br/>대중교통·자가용 동선은 한국관광공사 TourAPI 또는 각국 관광청 자료를 기반으로 작성됩니다.` },
    ...(meta.cautions ? [{ type: 'warning', title: '주의 사항', html: meta.cautions }] : []),
    { type: 'h2', id: 'nearby-hotels', text: '근처 추천 호텔' },
    { type: 'body', html: nearbyHotels.length === 0
      ? `${region.regionName}의 호텔 목록을 호텔스컴바인 hot-link 기준으로 준비 중입니다.`
      : `${meta.spotName} 도보·차량 거리에 위치한 호텔. 가격은 호텔스컴바인 클릭 시점 기준입니다.` },
    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://visitkorea.or.kr/', org: '한국관광공사', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  const finalPostData = postData || { sections: fallbackSections }

  const hasMap = meta.lat && meta.lng
  const mapMarkers = [
    { lat: meta.lat, lng: meta.lng, label: meta.spotName, subLabel: meta.spotType, type: 'spot' },
    ...nearbyHotels.filter(h => h.lat && h.lng).map(h => ({ lat: h.lat, lng: h.lng, label: h.hotelName, subLabel: h.hotelClass, url: h.url, type: 'hotel' })),
  ]

  return (
    <Layout title={`${meta.spotName} (${region.regionName}) — ${country.countryName} 여행`} description={meta.description} topAd={false}>
      <PageTracker slug={`${country.slug}-${region.slug}-${meta.slug}`} title={meta.title} />
      <HeroImage image={getSpotImage(country.slug, meta.slug)} alt={meta.spotName} />
      {hasMap && <LeafletMap center={[meta.lat, meta.lng]} zoom={14} markers={mapMarkers} height={300} />}
      <PostRenderer
        meta={{ ...meta, category: 'spot', countryName: country.countryName, regionName: region.regionName }}
        postData={finalPostData}
        related={nearbyHotels}
        breadcrumbItems={breadcrumbItems}
        canonicalPath={canonicalPath}
      />
    </Layout>
  )
}
