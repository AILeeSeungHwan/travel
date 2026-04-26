import Link from 'next/link'
import Layout from '../../components/Layout'
import countries from '../../data/countries'

export async function getStaticProps() {
  const grouped = {}
  countries.forEach(c => {
    const k = c.continent || 'asia'
    if (!grouped[k]) grouped[k] = []
    grouped[k].push(c)
  })
  return { props: { grouped } }
}

const CONTINENT_LABEL = {
  domestic: '🇰🇷 국내',
  asia:     '🌏 아시아',
  europe:   '🇪🇺 유럽',
  americas: '🌎 아메리카',
  oceania:  '🌏 오세아니아',
  africa:   '🌍 아프리카',
}
const CONTINENT_ORDER = ['domestic', 'asia', 'europe', 'americas', 'oceania', 'africa']

export default function CountryHub({ grouped }) {
  return (
    <Layout title="나라별 여행 — 16개국 비자·시즌·핵심 도시" description="국가 → 지역 → 스팟 3단계 허브의 입구. 한국·일본·베트남·태국 등 16개국 비자·시즌·핵심 도시·통화 정보를 한눈에.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8, color:'#0F172A' }}>나라별 여행</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        대륙별로 정리된 16개국 여행 허브입니다. 각 국가 페이지에서 비자·시즌·통화·여행경보·추천 지역·BEST 호텔까지 한눈에 확인하세요.
        비자·여행경보 정보는 외교부 해외안전여행(0404.go.kr) 기준이며, 출국 전 재확인이 필수입니다.
      </p>

      {CONTINENT_ORDER.filter(k => grouped[k]).map(k => (
        <section key={k} style={{ marginBottom:30 }}>
          <h2 style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#334155' }}>{CONTINENT_LABEL[k]}</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:12 }}>
            {grouped[k].map(c => (
              <Link key={c.slug} href={`/countries/${c.slug}/`} style={{ textDecoration:'none' }}>
                <article style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:12, padding:'16px 14px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                    <span style={{ fontSize:24 }}>{c.flag}</span>
                    <strong style={{ fontSize:15, color:'#0F172A' }}>{c.countryName}</strong>
                  </div>
                  <div style={{ fontSize:11, color:'#64748B', marginBottom:6 }}>비자: {c.visaInfoForKoreans}</div>
                  <div style={{ fontSize:11, color:'#64748B' }}>베스트: {c.bestSeasons}</div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  )
}
