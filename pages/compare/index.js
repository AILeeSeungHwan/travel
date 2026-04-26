import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import compares from '../../data/compares'

export async function getStaticProps() {
  const items = compares.map(c => ({ ...c, category: 'compare', url: `/compare/${c.slug}/` }))
  return { props: { items } }
}

export default function CompareHub({ items }) {
  return (
    <Layout title="여행 비교 — 호텔·리조트·신혼여행·료칸 BEST" description="제주 호텔 vs 풀빌라, 도쿄 5성호텔 비교, 다낭 리조트 비교 등 여행 비교 페이지 모음.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>여행 비교</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        호텔·리조트·신혼여행지·료칸 등 여행에서 자주 비교되는 선택지를 표 중심으로 정리했습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:12 }}>
        {items.map(c => <GridCard key={c.slug} post={c} />)}
      </div>
    </Layout>
  )
}
