import Layout from '../../../components/Layout'
import PostRenderer from '../../../components/PostRenderer'
import PageTracker from '../../../components/PageTracker'
import CountryMiniMap from '../../../components/CountryMiniMap'
import HeroImage from '../../../components/HeroImage'
import { getCountryImage } from '../../../lib/images'
import countries from '../../../data/countries'
import regions from '../../../data/regions'
import hotels from '../../../data/hotels'
import themes from '../../../data/themes'
import guides from '../../../data/guides'

export async function getStaticPaths() {
  return { paths: countries.map(c => ({ params: { slug: c.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = countries.find(c => c.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../../posts/countries/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const myRegions = regions.filter(r => r.countrySlug === meta.slug).map(r => ({
    ...r, category: 'region', url: `/countries/${meta.slug}/regions/${r.slug}/`,
  }))
  const myHotels = hotels.filter(h => h.countrySlug === meta.slug).map(h => ({
    ...h, category: 'hotel', url: `/hotels/${h.slug}/`, title: h.title ?? h.hotelName ?? null,
  }))
  const myThemes = (meta.relatedThemeSlugs || []).map(s => themes.find(t => t.slug === s)).filter(Boolean).map(t => ({
    ...t, category: 'theme', url: `/themes/${t.slug}/`,
  }))
  const myGuides = (meta.relatedGuideSlugs || []).map(s => guides.find(g => g.slug === s)).filter(Boolean).map(g => ({
    ...g, category: 'guide', url: `/guides/${g.slug}/`,
  }))

  return { props: { meta, postData, regions: myRegions, hotels: myHotels, themes: myThemes, guides: myGuides } }
}

export default function CountryDetail({ meta, postData, regions, hotels, themes, guides }) {
  const breadcrumbItems = [
    { name: '나라별', url: '/countries/' },
    { name: meta.countryName },
  ]
  const canonicalPath = `/countries/${meta.slug}/`

  // 인라인 섹션 본문(없을 때 폴백)
  const fallbackSections = [
    { type: 'intro', html: `${meta.summary || meta.description}<br/><br/>` +
      `${meta.countryName}은(는) ${meta.bestSeasons || '연중'} 가 베스트 시즌입니다. ` +
      `한국 여권 기준 비자: <strong>${meta.visaInfoForKoreans || 'N/A'}</strong> / 통화: ${meta.currency || 'N/A'} / 시간대: ${meta.timeZone || 'N/A'}.<br/><br/>` +
      `아래 섹션에서 ${meta.countryName} 광역별 지역 허브, 추천 호텔, 인기 테마, 비자·교통 가이드를 한눈에 확인할 수 있습니다.` },
    { type: 'h2', id: 'regions', text: '지역별로 가보기' },
    { type: 'body', html: regions.length === 0
      ? `${meta.countryName} 광역별 지역 허브를 준비 중입니다.`
      : `${meta.countryName}의 주요 광역(도·도시·섬) 단위로 지역 허브를 정리했습니다. 각 지역에서 추천 스팟·호텔·일정을 확인하세요.` },
    ...(meta.ymylLevel === 'A' ? [
      { type: 'risk', title: `${meta.countryName} 비자·안전 주의`,
        html: `${meta.countryName}은(는) 비자·여행경보 정책 변동성이 높은 국가입니다. 출국 전 외교부 해외안전여행(0404.go.kr) 및 ${meta.countryName} 대사관 공시를 반드시 재확인하세요.` }
    ] : [
      { type: 'info', title: `${meta.countryName} 비자 안내`,
        html: `한국 여권 기준 ${meta.visaInfoForKoreans}. 입국 시 항공권·숙소·잔고 등 추가 서류가 필요할 수 있으니 출국 전 외교부 영사민원24에서 재확인하세요.` }
    ]),
    { type: 'h2', id: 'hotels', text: '추천 호텔' },
    { type: 'body', html: hotels.length === 0
      ? `${meta.countryName}의 추천 호텔 목록을 준비 중입니다. 호텔스컴바인 어필리에이트 가입 후 등록 예정입니다.`
      : `${meta.countryName}의 5성·부티크·리조트 추천 호텔입니다. 가격은 시즌 변동이 크니 호텔스컴바인에서 클릭 시점 가격을 확인하세요.` },
    { type: 'h2', id: 'themes', text: '인기 여행 테마' },
    { type: 'body', html: themes.length === 0
      ? `${meta.countryName}의 인기 테마 추천을 준비 중입니다.`
      : `${meta.countryName}에서 인기 있는 여행 테마(호캉스·가족여행·미식·신혼·온천 등)를 정리했습니다.` },
    { type: 'h2', id: 'practical', text: '여행 전 알아둘 것' },
    { type: 'body', html: `<ul><li>비자: ${meta.visaInfoForKoreans || 'N/A'}</li><li>통화: ${meta.currency || 'N/A'}</li><li>시간대: ${meta.timeZone || 'N/A'}</li><li>베스트 시즌: ${meta.bestSeasons || '연중'}</li><li>안전: ${meta.safetyLevel || '여행안전'}</li></ul>` },
    { type: 'sources', items: [
      { label: '외교부 해외안전여행', url: 'https://0404.go.kr/', org: '외교부', accessedAt: meta.updatedAt },
      { label: '한국관광공사 / 각국 관광청 공식', url: 'https://visitkorea.or.kr/', org: '한국관광공사', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  const finalPostData = postData || { sections: fallbackSections }

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <HeroImage image={getCountryImage(meta.slug)} alt={meta.countryName} />
      <CountryMiniMap country={meta} regions={regions} />
      <PostRenderer
        meta={{ ...meta, category: 'country' }}
        postData={finalPostData}
        related={[...regions.slice(0, 5), ...hotels.slice(0, 3), ...themes.slice(0, 3), ...guides.slice(0, 3)]}
        breadcrumbItems={breadcrumbItems}
        canonicalPath={canonicalPath}
      />

      {regions.length > 0 && (
        <section style={{ marginTop:30 }}>
          <h2 style={{ fontSize:18, fontWeight:800, marginBottom:12 }}>📍 {meta.countryName} 지역별 허브</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10 }}>
            {regions.map(r => (
              <a key={r.slug} href={r.url} style={{ textDecoration:'none' }}>
                <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:10, padding:'14px 16px' }}>
                  <strong style={{ fontSize:14, color:'#0F766E' }}>{r.regionName}</strong>
                  <div style={{ fontSize:12, color:'#64748B', marginTop:4, lineHeight:1.5 }}>{r.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}
