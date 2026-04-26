import Link from 'next/link'
import Layout from '../../components/Layout'
import hotels from '../../data/hotels'
import countries from '../../data/countries'

export async function getStaticProps() {
  const items = hotels.map(h => ({
    ...h,
    countryName: (countries.find(c => c.slug === h.countrySlug) || {}).countryName,
  }))
  return { props: { items } }
}

export default function HotelsHub({ items }) {
  return (
    <Layout title="호텔 — 5성·부티크·리조트 통합 가이드" description="제주신라·롯데·인터컨티넨탈 다낭 등 핵심 호텔 추천. 위치·시설·평점·가격대를 한눈에. 호텔스컴바인 최저가 비교 연동.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8, color:'#0F172A' }}>호텔</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        5성·부티크·한옥스테이·료칸·풀빌라까지 — 위치·시설·평점·가격대를 한눈에 볼 수 있는 호텔 허브입니다.
        가격은 호텔스컴바인 등 공시 시점 기준으로 클릭 시점에 따라 변동될 수 있습니다.
      </p>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:14 }}>
        {items.map(h => (
          <Link key={h.slug} href={`/hotels/${h.slug}/`} style={{ textDecoration:'none' }}>
            <article style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:14, padding:'18px 20px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                <span className="tag" style={{ background:'#FEF3C7', color:'#B45309' }}>{h.hotelClass}</span>
                <span style={{ fontSize:11, color:'#64748B' }}>{h.countryName}</span>
              </div>
              <h3 style={{ fontSize:16, fontWeight:800, color:'#0F172A', margin:'0 0 6px' }}>{h.hotelName}</h3>
              <div style={{ fontSize:12, color:'#64748B', marginBottom:8 }}>
                평점 {h.guestRating || '-'} · {h.priceRange}
              </div>
              <div style={{ fontSize:13, color:'#475569', lineHeight:1.6 }}>{h.summary}</div>
            </article>
          </Link>
        ))}
      </div>

      <p style={{ fontSize:12, color:'#94A3B8', marginTop:24, lineHeight:1.6 }}>
        ※ 본 사이트는 호텔스컴바인 제휴 활동의 일환으로 일정 수수료를 제공받을 수 있습니다.
      </p>
    </Layout>
  )
}
