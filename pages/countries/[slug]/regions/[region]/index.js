import Layout from '../../../../../components/Layout'
import PostRenderer from '../../../../../components/PostRenderer'
import PageTracker from '../../../../../components/PageTracker'
import LeafletMap from '../../../../../components/MapClient'
import HeroImage from '../../../../../components/HeroImage'
import { getRegionImage } from '../../../../../lib/images'
import countries from '../../../../../data/countries'
import regions from '../../../../../data/regions'
import spots from '../../../../../data/spots'
import hotels from '../../../../../data/hotels'

export async function getStaticPaths() {
  return {
    paths: regions.filter(r => r?.slug && r?.countrySlug).map(r => ({ params: { slug: r.countrySlug, region: r.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const country = countries.find(c => c.slug === params.slug)
  const meta = regions.find(r => r.countrySlug === params.slug && r.slug === params.region)
  if (!country || !meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../../../../posts/regions/${meta.countrySlug}-${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const mySpots = spots.filter(s => s.regionSlug === meta.slug && s.countrySlug === meta.countrySlug).map(s => ({
    ...s, category: 'spot', url: `/countries/${s.countrySlug}/regions/${s.regionSlug}/spots/${s.slug}/`,
  }))
  const myHotels = hotels.filter(h => h.regionSlug === meta.slug && h.countrySlug === meta.countrySlug).map(h => ({
    ...h, category: 'hotel', url: `/hotels/${h.slug}/`, title: h.title ?? h.hotelName ?? null,
  }))

  return { props: { country, meta, postData, spots: mySpots, hotels: myHotels } }
}

export default function RegionDetail({ country, meta, postData, spots, hotels }) {
  const breadcrumbItems = [
    { name: '나라별', url: '/countries/' },
    { name: country.countryName, url: `/countries/${country.slug}/` },
    { name: meta.regionName },
  ]
  const canonicalPath = `/countries/${country.slug}/regions/${meta.slug}/`

  const fallbackSections = [
    { type: 'intro', html: `${meta.summary || meta.description}<br/><br/>` +
      `${country.countryName} ${meta.regionName}의 핵심 정보 — 베스트 시즌, 추천 일정, 주요 스팟, 호텔, 교통까지 한 페이지에서 확인하세요.` },
    { type: 'h2', id: 'spots', text: '꼭 가봐야 할 스팟' },
    { type: 'body', html: spots.length === 0
      ? `${meta.regionName}의 핵심 스팟을 한국관광공사 TourAPI / Wikimedia Commons 등 합법적 출처 이미지와 함께 정리하고 있습니다.`
      : `${meta.regionName}의 인기 스팟 ${spots.length}곳을 한국관광공사 / Wikimedia 출처 이미지로 큐레이션했습니다.` },
    { type: 'h2', id: 'hotels', text: '추천 호텔' },
    { type: 'body', html: hotels.length === 0
      ? `${meta.regionName} 추천 호텔 목록을 호텔스컴바인 API hot-link 기준으로 준비 중입니다.`
      : `${meta.regionName}의 5성·부티크·리조트 추천 호텔. 가격은 호텔스컴바인 클릭 시점 기준이며 시즌 변동이 큽니다.` },
    { type: 'h2', id: 'itinerary', text: '추천 일정' },
    { type: 'body', html: `1박2일 / 2박3일 / 3박4일 일정 샘플은 본문 업데이트 시 제공됩니다. 첫 방문자는 핵심 스팟 + 시내 1박을 권장합니다.` },
    { type: 'h2', id: 'transport', text: '이동 / 교통' },
    { type: 'body', html: `${meta.regionName} 도착 후 권장 교통수단(렌터카·대중교통·택시)과 공항~시내 이동 가이드는 본문 업데이트 시 추가됩니다.` },
    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://visitkorea.or.kr/', org: '한국관광공사', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  const finalPostData = postData || { sections: fallbackSections }

  const mapMarkers = [
    ...spots.map(s => ({ lat: s.lat, lng: s.lng, label: s.spotName, subLabel: s.spotType, url: s.url, type: 'spot' })),
    ...hotels.map(h => ({ lat: h.lat, lng: h.lng, label: h.hotelName, subLabel: h.hotelClass, url: h.url, type: 'hotel' })),
  ].filter(m => m.lat && m.lng)
  const hasMapData = meta.centerLat && meta.centerLng

  return (
    <Layout title={`${meta.regionName} 여행 — ${country.countryName}`} description={meta.description} topAd={false}>
      <PageTracker slug={`${country.slug}-${meta.slug}`} title={meta.title} />
      <HeroImage image={getRegionImage(country.slug, meta.slug)} alt={`${meta.regionName} ${country.countryName}`} />
      {hasMapData && (
        <LeafletMap
          center={[meta.centerLat, meta.centerLng]}
          zoom={mapMarkers.length > 0 ? 11 : 9}
          markers={mapMarkers}
          height={340}
        />
      )}
      <PostRenderer
        meta={{ ...meta, category: 'region', countryName: country.countryName }}
        postData={finalPostData}
        related={[...spots.slice(0, 6), ...hotels.slice(0, 3)]}
        breadcrumbItems={breadcrumbItems}
        canonicalPath={canonicalPath}
      />

      {spots.length > 0 && (
        <section style={{ marginTop:30 }}>
          <h2 style={{ fontSize:18, fontWeight:800, marginBottom:12 }}>📌 {meta.regionName} 스팟</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:10 }}>
            {spots.map(s => (
              <a key={s.slug} href={s.url} style={{ textDecoration:'none' }}>
                <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:10, padding:'14px 16px' }}>
                  <strong style={{ fontSize:14, color:'#15803D' }}>{s.spotName}</strong>
                  <div style={{ fontSize:12, color:'#64748B', marginTop:4 }}>{s.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}
