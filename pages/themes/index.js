import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import themes from '../../data/themes'

export async function getStaticProps() {
  const items = themes.map(t => ({ ...t, category: 'theme', url: `/themes/${t.slug}/` }))
  return { props: { items } }
}

export default function ThemesHub({ items }) {
  return (
    <Layout title="테마별 여행 — 호캉스·신혼·가족·미식·풀빌라" description="호캉스·가족여행·효도여행·풀빌라·료칸·온천·미식·문화 등 여행 테마별 추천을 정리한 허브.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>테마별 여행</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        여행의 목적별 — 신혼·가족·효도·풀빌라·료칸·비치·미식·쇼핑·문화·워케이션. 인기 테마별 추천 국가/지역과 베스트 호텔을 정리했습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:12 }}>
        {items.map(t => <GridCard key={t.slug} post={t} />)}
      </div>
    </Layout>
  )
}
