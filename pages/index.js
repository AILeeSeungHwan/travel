import Link from 'next/link'
import Layout from '../components/Layout'
import { GridCard, ListCard } from '../components/PostCard'
import WorldMap from '../components/WorldMap'
import topics from '../data/topics'
import countries from '../data/countries'
import regions from '../data/regions'
import hotels from '../data/hotels'
import themes from '../data/themes'
import situations from '../data/situations'
import tools from '../data/tools'
import posts from '../data/posts'

export async function getStaticProps() {
  const featuredTopics = topics.filter(t => t.featured).sort((a,b) => a.priority - b.priority)
  const recent = [...posts].sort((a,b) => (b.updatedAt||'').localeCompare(a.updatedAt||'')).slice(0, 8)
  const popularCountries = countries.slice(0, 8).map(c => ({ ...c, category: 'country', url: `/countries/${c.slug}/`, title: c.title }))
  const domesticRegions = regions.filter(r => r.countrySlug === 'kr').slice(0, 6).map(r => ({ ...r, category: 'region', url: `/countries/${r.countrySlug}/regions/${r.slug}/` }))
  const overseasRegions = regions.filter(r => r.countrySlug !== 'kr').slice(0, 6).map(r => ({ ...r, category: 'region', url: `/countries/${r.countrySlug}/regions/${r.slug}/` }))
  const featuredHotels = hotels.slice(0, 3).map(h => ({ ...h, category: 'hotel', url: `/hotels/${h.slug}/`, title: h.title }))
  const themeCards = themes.slice(0, 6).map(t => ({ ...t, category: 'theme', url: `/themes/${t.slug}/` }))
  const situationCards = situations.slice(0, 6).map(s => ({ ...s, category: 'situation', url: `/situations/${s.slug}/` }))
  const toolCards = tools.slice(0, 6).map(t => ({ ...t, category: 'tool', url: `/tools/${t.slug}/` }))
  const contentSlugs = countries.map(c => c.slug)

  return { props: {
    featuredTopics, recent, popularCountries,
    domesticRegions, overseasRegions, featuredHotels,
    themeCards, situationCards, toolCards,
    countries, contentSlugs,
  } }
}

export default function Home({ featuredTopics, recent, popularCountries, domesticRegions, overseasRegions, featuredHotels, themeCards, situationCards, toolCards, countries, contentSlugs }) {
  return (
    <Layout>
      <WorldMap countries={countries} contentSlugs={contentSlugs} />

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>무엇을 찾고 계신가요?</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }} className="grid-4">
          {featuredTopics.map(t => (
            <Link key={t.slug} href={t.href || `/${t.slug}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:12, padding:'20px 18px', textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{t.icon}</div>
                <div style={{ fontSize:14, fontWeight:700, color:t.color, marginBottom:4 }}>{t.name}</div>
                <div style={{ fontSize:11, color:'#64748B', lineHeight:1.5 }}>{(t.description||'').slice(0,40)}…</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🌏 인기 여행지 TOP 8</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }} className="grid-4">
          {popularCountries.map(c => (
            <Link key={c.slug} href={c.url} style={{ textDecoration:'none' }}>
              <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:12, padding:'20px 12px', textAlign:'center' }}>
                <div style={{ fontSize:30, marginBottom:6 }}>{c.flag}</div>
                <div style={{ fontSize:13, fontWeight:700, color:'#0F172A' }}>{c.countryName}</div>
                <div style={{ fontSize:11, color:'#64748B', marginTop:2 }}>{c.visaInfoForKoreans}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🇰🇷 국내 여행</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {domesticRegions.map(r => <GridCard key={r.slug} post={r} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🌏 해외 여행</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {overseasRegions.map(r => <GridCard key={r.slug} post={r} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🏨 추천 호텔</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {featuredHotels.map(h => <GridCard key={h.slug} post={h} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🎯 테마별 여행</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {themeCards.map(t => <GridCard key={t.slug} post={t} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🧭 지금 이 상황이라면</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {situationCards.map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>🛠️ 인기 여행 도구</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {toolCards.map(t => <GridCard key={t.slug} post={t} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#0F172A' }}>📰 최근 업데이트</h2>
        <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:12, padding:'8px 20px' }}>
          {recent.map(p => <ListCard key={p.url} post={p} />)}
        </div>
      </section>

      <section style={{ background:'#FEF2F2', border:'1px solid #FCA5A5', borderRadius:10, padding:'16px 20px', marginBottom:20 }}>
        <div style={{ fontSize:13, color:'#7F1D1D', lineHeight:1.7 }}>
          <strong>여행 안전 안내.</strong> 비자·환율·여행경보 등 변동성이 큰 정보는 출국 전 외교부 해외안전여행(<a href="https://0404.go.kr/" target="_blank" rel="noopener noreferrer" style={{ color:'#B91C1C', textDecoration:'underline' }}>0404.go.kr</a>) 사이트에서 반드시 재확인하세요. 호텔 가격은 호텔스컴바인 등 공시 시점 기준이며 클릭 시점과 다를 수 있습니다.
        </div>
      </section>
    </Layout>
  )
}
